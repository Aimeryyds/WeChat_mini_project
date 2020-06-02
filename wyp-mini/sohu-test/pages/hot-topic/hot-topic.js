function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

getApp();

var t = require("../../utils/util").util, a = require("../../utils/stat"), i = require("../../utils/ald-stat"), r = require("./offline"), n = require("./component/HotList"), s = require("./store"), o = require("./vendor"), c = require("../../api/subscribe"), u = c.getSubscribeStatus, d = c.setSubscribeStatus, l = require("../../api/formid").uploadFormId, b = require("../../components/canvas-poster/index"), h = require("../../components/share-bar/index"), p = require("../../components/tab/index");

Page({
    data: {
        firstLoading: {
            items: [ {}, {}, {} ],
            loadhidden: !1
        }
    },
    components: {
        hotList: null,
        canvasPoster: null,
        shareBar: null,
        pageTab: null
    },
    onLoad: function(e) {
        console.log("hot-topic onload: ", e);
        var t = this;
        t.components.canvasPoster = new b(t), t.components.shareBar = new h(t), t.components.pageTab = new p(t, "hot"), 
        t.store = new s(t), t.vendor = new o(t), t.components.hotList = new n(t);
        var a = new Date();
        t.setData({
            currentDate: t.vendor.util.getDateFormat(a),
            currentDayNumber: t.vendor.util.getDateNumber(a),
            currentDay: t.vendor.util.getWeek(a),
            datePickerList: t.vendor.util.getDatePickerList(a),
            currentTimestamp: Date.now()
        }), r.monitorNetState(t), t.loadInitData(), t.checkSubscribeStatus(), t.checkRedirection(e);
    },
    onUnload: function() {
        var e = this;
        e.observer && e.observer.disconnect();
    },
    onShow: function() {
        t.showShareMenu();
    },
    loadInitData: function() {
        var e = this, t = e.data.datePickerList[0].timestamp;
        e.components.hotList.load(t).then(function(t) {
            t ? e.setData({
                isLess3: t < 3,
                isOffline: !1
            }) : e.onGotoYesterday();
        }).then(function() {
            e.data.firstLoading.loadhidden || e.setData({
                "firstLoading.loadhidden": !0
            });
        });
    },
    checkSubscribeStatus: function() {
        var e = this;
        u().then(function(t) {
            "已订阅" == t.statusMsg ? (wx.setStorageSync("isSubscribed", !0), i.enterHotWithSubscribed()) : wx.setStorageSync("isSubscribed", !1), 
            e.setData({
                isSubscribed: wx.getStorageSync("isSubscribed")
            });
        }).then(function() {
            var t = wx.getStorageSync("lastSubscribeTipTimestamp");
            if (e.setData({
                subscribeTipHidden: !0
            }), !e.data.isSubscribed) if (t) {
                var a = Date.now();
                a - t >= 6048e5 && (wx.setStorageSync("lastSubscribeTipTimestamp", a), e.setData({
                    subscribeTipHidden: !1
                }));
            } else wx.setStorageSync("lastSubscribeTipTimestamp", Date.now()), e.setData({
                subscribeTipHidden: !1
            });
        }).catch(function(t) {
            console.error("读取订阅信息失败: ", t.message), e.setData({
                isSubscribed: wx.getStorageSync("isSubscribed")
            });
        });
    },
    checkRedirection: function(e) {
        e.newsId && wx.navigateTo({
            url: "/pages/article/article?newsId=" + e.newsId + "&newsType=" + e.newsType
        });
    },
    onPullDownRefresh: function() {
        i.pullDown("热点"), setTimeout(function() {
            wx.stopPullDownRefresh();
        }, 1e3);
    },
    gotoArticle: function(e) {
        var t = this, a = t.data.clickedMap, r = e.currentTarget.dataset.newsid || "";
        a[r] = r, t.setData({
            clickedMap: a
        });
        var n = e.currentTarget.dataset.newsid || "", s = e.currentTarget.dataset.newstype || "", o = e.currentTarget.dataset.sourcetype || "", c = e.currentTarget.dataset.isfrompush + "" || "", u = e.currentTarget.dataset.isMoment || !1, d = e.currentTarget.dataset.isVideo || !1;
        u ? (wx.navigateTo({
            url: "/pages/moment/moment?newsId=" + n + "&newsType=" + s + "&from=1&sourceType=" + o + "&isFromPush=" + c
        }), i.gotoMoment(n, "热榜")) : (d ? wx.navigateTo({
            url: "/pages/article/article?newsId=" + n + "&newsType=" + s + "&isFromHotVideo=true"
        }) : wx.navigateTo({
            url: "/pages/article/article?newsId=" + n + "&newsType=" + s
        }), i.gotoArticle(n, "热榜"));
    },
    onShareAppMessage: function() {
        return {
            title: "搜狐新闻热门榜单",
            path: "/pages/home/home?shareType=share_hot_list"
        };
    },
    onPageScroll: function(e) {
        var t = this, a = e.scrollTop;
        t.components.pageTab.onPageScroll(a);
    },
    onDatePickerClick: function(t) {
        var a = this, i = t.currentTarget.dataset.timestamp;
        t.currentTarget.dataset.active || (a.data.datePickerList.forEach(function(t, r) {
            var n = "datePickerList[" + r + "].active";
            if (i == t.timestamp) {
                var s, o = new Date(i);
                a.setData((s = {}, e(s, n, !0), e(s, "currentDate", a.vendor.util.getDateFormat(o)), 
                e(s, "currentDayNumber", a.vendor.util.getDateNumber(o)), e(s, "currentDay", a.vendor.util.getWeek(o)), 
                e(s, "currentTimestamp", i), s)), a.components.hotList.load(i).then(function(e) {
                    a.setData({
                        isToday: a.vendor.util.checkSameDay(o, new Date()),
                        isTodayEmpty: !e,
                        isLess3: e < 3,
                        isOffline: !1
                    });
                });
            } else a.setData(e({}, n, !1));
        }), setTimeout(function() {
            a.onDatePickerCloseClick();
        }, 800));
    },
    onGotoYesterday: function() {
        var t, a = this, i = a.data.datePickerList[1].timestamp, r = new Date(i);
        return a.setData((t = {}, e(t, "datePickerList[0].active", !1), e(t, "datePickerList[1].active", !0), 
        e(t, "isTodayEmpty", !0), e(t, "isToday", !1), e(t, "currentDate", a.vendor.util.getDateFormat(r)), 
        e(t, "currentDayNumber", a.vendor.util.getDateNumber(r)), e(t, "currentDay", a.vendor.util.getWeek(r)), 
        e(t, "currentTimestamp", i), t)), a.components.hotList.load(i).then(function(e) {
            a.setData({
                isLess3: e < 3,
                isOffline: !1
            });
        });
    },
    onSharePosterClick: function(e) {
        a.h5({
            objType: "miniapp_clk_sharetoweixinblog",
            statType: "clk"
        }), i.shareCircleClick(e.currentTarget.dataset.newsid, "热榜");
        var t = this;
        t.setData({
            "sharePoster.hidden": !1
        });
        var r = [];
        t.data.articleList.forEach(function(e) {
            r.push({
                title: e.title,
                pic: e.smallPic
            });
        }), t.components.canvasPoster.drawSharePicture({
            newsList: r.slice(0, 5),
            updateTime: t.vendor.util.getDate4Poster(new Date(t.data.currentTimestamp))
        });
    },
    onShareFriendClick: function(e) {
        i.shareFriendClick(e.currentTarget.dataset.newsid, "热榜");
    },
    onSubmit: function(e) {
        var t = e.detail.formId;
        t && l(t);
    },
    onSubscribe: function(e) {
        var t = this;
        e.currentTarget.dataset.isSubscribe ? d(0).then(function(e) {
            wx.setStorageSync("isSubscribed", !0), t.setData({
                isSubscribed: !0
            });
        }).then(function() {
            i.changeSubscribeStatus(0);
        }) : wx.showModal({
            title: "取消订阅",
            content: "取消订阅后不再为您推送热点新闻",
            cancelText: "考虑考虑",
            confirmText: "确认取消",
            showCancel: !0,
            success: function(e) {
                e.confirm && d(1).then(function(e) {
                    wx.setStorageSync("isSubscribed", !1), t.setData({
                        isSubscribed: !1
                    });
                }).then(function() {
                    i.changeSubscribeStatus(1);
                });
            },
            fail: function(e) {
                wx.showToast({
                    title: "取消订阅失败"
                });
            }
        });
    },
    onPageTap: function() {
        this.setData({
            subscribeTipHidden: !0
        });
    },
    bindScrollObserver: function() {
        var e = this;
        e.observer || (e.observer = wx.createIntersectionObserver(e, {
            thresholds: [ 0, .33, 1 ]
        })), e.observer.relativeToViewport().observe("#top-bar", function(t) {
            t.intersectionRatio < .33 ? e.setData({
                isTopBarFixed: !0
            }) : t.intersectionRatio >= 0 && e.setData({
                isTopBarFixed: !1
            });
        });
    },
    onShowDatePicker: function() {
        this.setData({
            datePickerShow: !0
        }), i.onDatePickerClick();
    },
    onDatePickerCloseClick: function() {
        this.setData({
            datePickerShow: !1
        });
    }
});