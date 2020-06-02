function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = getApp(), a = require("../../utils/util").util, s = require("./vendor").init, o = require("./vendor").util, i = require("./vendor").param, n = require("./vendor").req, r = require("../../utils/stat"), c = require("../../utils/ald-stat"), d = require("./offline"), h = require("../../components/tab/index"), l = require("../../components/guidance/index"), p = require("../../api/formid").uploadFormId, u = {};

Page({
    data: {
        carousel: {
            autoplay: !0,
            interval: 3e3,
            duration: 500,
            imgUrls: [],
            currentSwiper: 0,
            currentIndex: 0,
            carouselHidden: !0,
            hotTopics: {
                title: ""
            }
        },
        topNewsList: [],
        hotNewsList: [],
        newsList: [],
        loadTips: "已加载全部内容.",
        tipspush: !0,
        disstips: !0,
        tipsnum: 0,
        curPage: 4,
        nodatatips: !0,
        clientHeight: 1080,
        sendUsrInfo: !0,
        dissList: {},
        clickedList: {},
        isBottomLoading: !1,
        lastIndex: -1,
        pullDownErr: !1,
        firstLoading: {
            items: [],
            loadhidden: !1
        },
        guidance: {
            hidden: !0,
            data: {
                text: " ⌈ 添加到我的小程序⌋ 快速找到我"
            }
        },
        activity: {
            isShow: !1,
            icon: "",
            url: ""
        }
    },
    context: {
        newsIndex: 0,
        newsId2Index: {}
    },
    components: {
        pageTab: null,
        guidance: null
    },
    onLoad: function(e) {
        console.log(e);
        var a = this;
        a.components.pageTab = new h(a, "news"), a.components.guidance = new l(a), a.initLoading(), 
        s(a), d.monitorNetState(a), a.initPage(e);
        var o = t.store;
        o.on("home.onPraise", this.onPraise, this), o.on("home.onComment", this.onComment, this), 
        o.on("home.onShare", this.onShare, this), o.on("home.onMsgNum", this.onMsgNum, this), 
        a.checkActivity();
    },
    onUnload: function() {
        var e = t.store;
        e.off("home.onPraise", this.onPraise), e.off("home.onComment", this.onComment), 
        e.off("home.onShare", this.onShare), e.off("home.onMsgNum", this.onMsgNum);
    },
    onShow: function() {
        a.showShareMenu();
    },
    onHide: function() {
        var e = this;
        e.components.guidance && e.components.guidance.checkHidden();
    },
    onPullDownRefresh: function() {
        c.pullDown("新闻"), this.fetchNewsList({
            action: 1,
            mode: 2
        });
    },
    onReachBottom: function() {
        var e = this;
        c.dragUp("新闻"), e.fetchNewsList({
            action: 2,
            mode: 3,
            pagenum: 10
        });
    },
    initLoading: function() {
        for (var a = this, s = Math.ceil(t.globalData.systemInfo.screenHeight / (t.globalData.systemInfo.screenWidth / 750 * 758)) - 1; s >= 0; s--) {
            var o = "firstLoading.items[" + s + "]";
            a.setData(e({}, o, {}));
        }
    },
    initPage: function(e) {
        var a = this;
        if (e.scene) {
            var s = decodeURIComponent(e.scene);
            if ("goToActivity" == s) return wx.navigateTo({
                url: "/pages/activity/activity?targetUrl=" + encodeURIComponent(t.globalData.activityData.url) + "&isFromCode=true"
            }), void a.fetchFirstNewsList();
            u.shareId = s, n.getQrCodeData(u.shareId).then(function(e) {
                if (console.log(e), u.from = e.from, u.newsId = e.newsId, u.shareType = e.shareType, 
                "share_article" == u.shareType) {
                    if (e.isMoment) return void wx.navigateTo({
                        url: "/pages/moment/moment?newsId=" + u.newsId + "&newsType=" + (u.newsType || "") + "&from=" + u.from
                    });
                    wx.navigateTo({
                        url: "/pages/article/article?newsId=" + u.newsId + "&newsType=" + (u.newsType || "") + "&from=" + u.from + "&shareId=" + u.shareId
                    });
                }
                "share_video" == u.shareType && wx.navigateTo({
                    url: "/pages/video/video?newsId=" + u.newsId + "&newsType=" + (u.newsType || "") + "&from=" + u.from + "&shareId=" + u.shareId
                }), "share_hot_channel" == u.shareType && wx.navigateTo({
                    url: "/pages/hot-topic/hot-topic"
                }), a.fetchFirstNewsList();
            }).catch(function(e) {
                console.log(e.message);
            });
        } else e.templateMsg ? "hotChannel" == e.templateMsg && (e.newsId ? wx.navigateTo({
            url: "/pages/article/article?newsId=" + e.newsId
        }) : wx.navigateTo({
            url: "/pages/hot-topic/hot-topic"
        }), c.launchFromTemplateMsg("热点流"), a.fetchFirstNewsList()) : e.activity ? (e.newsId ? wx.navigateTo({
            url: "/pages/article/article?newsId=" + e.newsId
        }) : wx.navigateTo({
            url: "/pages/activity/activity"
        }), a.fetchFirstNewsList()) : (u.from = e.from, u.formId = e.formId || "", u.newsId = e.newsId || "", 
        u.newsType = e.newsType || "", u.shareType = e.shareType || "", t.globalData.shareFrom = e.shareToken || "", 
        u.shareType && "share_art" == u.shareType && wx.navigateTo({
            url: "/pages/article/article?newsId=" + u.newsId + "&newsType=" + (u.newsType || "") + "&from=" + (u.from || 2) + "&shareToken=" + (t.globalData.shareFrom || u.shareToken) + "&shareId=" + u.shareId
        }), u.shareType && "share_vid" == u.shareType && wx.navigateTo({
            url: "/pages/video/video?newsId=" + u.newsId + "&newsType=" + (u.newsType || "") + "&from=" + (u.from || 2) + "&shareToken=" + (t.globalData.shareFrom || u.shareToken) + "&shareId=" + u.shareId
        }), u.shareType && "share_hot_list" == u.shareType && wx.navigateTo({
            url: "/pages/hot-topic/hot-topic"
        }), a.fetchFirstNewsList());
    },
    fetchFirstNewsList: function() {
        var e = this;
        t.order.ordering("home.fetchNewsList", e.fetchNewsList, "onLaunch");
    },
    fetchNewsList: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.action, a = void 0 === t ? 1 : t, s = e.mode, r = void 0 === s ? 2 : s, c = e.pagenum, d = void 0 === c ? 10 : c, h = this;
        n.getNewsListData(i.buildNewsListParams(a, r, d), function(e) {
            if (1 == a) {
                var t = [];
                e.data.articles.forEach(function(e, a) {
                    (o.checkNewsType(e.newsType) || e.isAppletAd) && t.push(e);
                }), h.setData({
                    tipspush: !1,
                    tipsnum: t.length || 0
                }), o.updateNewsDown(t, h.data.newsList), h.setData({
                    topNewsList: e.data.topArticles || [],
                    hotNewsList: e.data.hotArticles || [],
                    topAppletAdArticles: e.data.topAppletAdArticles || []
                }), 4 != h.data.curPage && h.setData({
                    lastIndex: t.length - 1
                }), wx.stopPullDownRefresh();
            } else if (2 == a) {
                var s = [];
                e.data.recommendArticles.forEach(function(e, t) {
                    o.checkNewsType(e.newsType) && s.push(e);
                }), o.updateNewsUp(h.data.newsList, s);
            }
            if (e.data.trainArticles && e.data.trainArticles.trainList) {
                var i = [];
                e.data.trainArticles.trainList.forEach(function(e, t) {
                    o.checkNewsType(e.newsType) && i.length < 5 && i.push({
                        url: e.pics && e.pics[0],
                        tit: e.title,
                        newsId: e.newsId,
                        newsType: e.newsType
                    });
                }), h.setData({
                    "carousel.imgUrls": i
                }), i.length > 0 ? h.setData({
                    "carousel.carouselHidden": !1
                }) : h.setData({
                    "carousel.carouselHidden": !0
                });
            }
            h.data.firstLoading.loadhidden || h.setData({
                "firstLoading.loadhidden": !0
            });
        }, function(e) {
            1 == a && h.setData({
                pullDownErr: !0
            });
        });
    },
    dissNews: function(e) {
        r.h5({
            objType: "miniapp_clk_nointerest",
            statType: "clk"
        }), c.dissNews(e.currentTarget.dataset.newsid || "");
        var t = this, a = e.currentTarget.dataset.newsid || "", s = t.data.dissList;
        s[a] = a, t.setData({
            dissList: s
        }), t.setData({
            disstips: !1
        }), setTimeout(function() {
            t.setData({
                disstips: !0
            });
        }, 2e3);
    },
    gotoArticle: function(e) {
        var t = this;
        t.data.shareshowtips || t.setData({
            shareshowtips: !0
        });
        var a = t.data.clickedList, s = e.currentTarget.dataset.newsid || "";
        a[s] = s, t.setData({
            clickedList: a
        });
        var o = e.currentTarget.dataset.newsid || "", i = e.currentTarget.dataset.newstype || "", n = e.currentTarget.dataset.sourcetype || "", d = e.currentTarget.dataset.isfrompush + "" || "", h = !!e.currentTarget.dataset.local;
        e.currentTarget.dataset.isMoment || !1 ? (wx.navigateTo({
            url: "/pages/moment/moment?newsId=" + o + "&newsType=" + i + "&from=1&sourceType=" + n + "&isFromPush=" + d + "&isLocal=" + h
        }), c.gotoMoment(o, "新闻", h)) : (wx.navigateTo({
            url: "/pages/article/article?newsId=" + o + "&newsType=" + i + "&from=1&sourceType=" + n + "&isFromPush=" + d + "&isLocal=" + h
        }), c.gotoArticle(o, "新闻", h));
        var l = e.currentTarget.dataset.newstype || "", p = e.currentTarget.dataset.templatetype || "", u = e.currentTarget.dataset.pics || "", w = {
            _act: "pv",
            page: e.currentTarget.dataset.link || "",
            newsid: e.currentTarget.dataset.newsid || "",
            newsfrom: 6,
            recominfo: e.currentTarget.dataset.recominfo || "",
            showtype: ""
        };
        1 == p || 3 == l ? w.showtype = u ? 1 : 3 : 2 == p || 4 == l ? w.showtype = 101 : 42 == p ? w.showtype = 201 : 37 != p && 38 != p || (w.showtype = 2), 
        r.a(w);
    },
    gotoVideo: function(e) {
        var t = this;
        t.data.shareshowtips || t.setData({
            shareshowtips: !0
        }), c.gotoVideo(e.currentTarget.dataset.newsid || "", "首页流");
        var a = t.data.clickedList, s = e.currentTarget.dataset.newsid || "";
        a[s] = s, t.setData({
            clickedList: a
        });
        var o = e.currentTarget.dataset.newsid || "", i = e.currentTarget.dataset.newstype || "";
        wx.navigateTo({
            url: "/pages/video/video?newsId=" + o + "&newsType=" + i + "&from=1"
        });
    },
    touchStart: function(e) {
        console.log(e);
    },
    touchEnd: function(e) {
        console.log(e);
    },
    onShareAppMessage: function() {
        return {
            title: "搜狐新闻精选资讯",
            path: "/pages/home/home"
        };
    },
    onSwiperChange: function(e) {
        e.detail.current, e.detail.source;
        this.setData({
            "carousel.currentIndex": e.detail.current
        });
    },
    onPageScroll: function(e) {
        var t = this, a = e.scrollTop;
        t.components.pageTab.onPageScroll(a);
    },
    onRefreshBarClick: function(e) {
        wx.startPullDownRefresh(), o.scroll2Top(500), c.refreshTip();
    },
    gotoHotTopic: function() {
        wx.redirectTo({
            url: "/pages/hot-topic/hot-topic"
        });
    },
    gotoHotArticle: function(t) {
        var a = this, s = t.currentTarget.dataset.index, o = a.data.hotNewsList[s], i = o.newsId, n = o.newsType, r = "hotNewsList[" + s + "].isRead";
        a.setData(e({}, r, !0)), wx.navigateTo({
            url: "/pages/hot-topic/hot-topic?newsId=" + i + "&newsType=" + n
        });
    },
    onSubmit: function(e) {
        var t = e.detail.formId;
        t && p(t);
    },
    onGotoActivity: function() {
        var e = this;
        wx.navigateTo({
            url: "/pages/activity/activity?targetUrl=" + encodeURIComponent(e.data.activity.url)
        }), c.gotoActivity();
    },
    checkActivity: function() {
        var e = this;
        t.order.ordering("home.checkActivity", function() {
            e.setData({
                activity: t.globalData.activityData
            });
        }, "onLaunch");
    },
    onActivityClose: function() {
        this.setData({
            "activity.isShow": !1
        });
    },
    onAdClick: function(e) {
        var t = e.currentTarget.dataset;
        "1" === t.forwardType ? (console.log("小程序", t), wx.navigateToMiniProgram({
            appId: t.appid,
            path: t.link
        })) : "0" === t.forwardType && (console.log("外链", t), wx.navigateTo({
            url: "/pages/ad/ad?targetUrl=" + encodeURIComponent(t.link)
        })), c.gotoAd(t.name);
    }
});