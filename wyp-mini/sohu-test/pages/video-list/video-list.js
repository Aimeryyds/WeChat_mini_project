var e = getApp(), t = require("../../utils/util").util, i = require("./vendor").init, a = require("./vendor").util, n = require("./vendor").param, o = require("./vendor").req, r = require("../../utils/stat"), s = require("../../utils/ald-stat"), d = require("./offline"), c = require("../../utils/calculator"), u = require("../../api/formid").uploadFormId, l = require("../../components/tab/index"), f = require("../../components/guidance/index"), g = 0, h = {};

Page({
    data: {
        videosList: [],
        loadTips: "已加载全部内容.",
        refreshTips: {
            refreshResultHidden: !0,
            count: 0
        },
        curPage: 4,
        loadhidden: !1,
        nodatatips: !0,
        clientHeight: 1080,
        clickedList: {},
        loading: !0,
        pullDownErr: !1,
        guidance: {
            hidden: !0,
            data: {
                text: "⌈ 添加到我的小程序⌋ 快速找到我"
            }
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
        var t = this;
        t.components.pageTab = new l(t, "video"), t.components.guidance = new f(t), i(t), 
        d.monitorNetState(t), t.initPage(e);
    },
    onUnload: function() {},
    onShow: function() {
        t.showShareMenu();
    },
    onHide: function() {
        var e = this;
        e.components.guidance && e.components.guidance.checkHidden();
    },
    onPullDownRefresh: function() {
        s.pullDown("视频"), this.fetchVideosList({
            action: 0
        });
    },
    onReachBottom: function() {
        var e = this;
        e.setData({
            loading: !1
        }), e.fetchVideosList({
            action: 1
        });
    },
    initPage: function(e) {
        var t = this;
        t.fetchFirstVideoFlow(), t.getVideosProperty();
    },
    getVideosProperty: function() {
        setTimeout(function() {
            var e = wx.createSelectorQuery();
            e.select(".container .video-item").boundingClientRect(function(e) {
                g = 100 * Math.round(e.height / 100);
            }), e.exec();
        }, 500);
    },
    fetchFirstVideoFlow: function() {
        var t = this;
        e.order.ordering("video-list.fetchVideosList", t.fetchVideosList, "onLaunch");
    },
    fetchVideosList: function() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).action, t = void 0 === e ? 0 : e, i = this;
        o.getVideoListData(n.buildVideoListParams(t), function(e) {
            if (0 == t) {
                var n = [];
                e.data.data.videoList.forEach(function(e, t) {
                    e.playTime = a.fixTimeSeconds(e.playTime), e.playNum = c.convertBigNumber(e.playNum), 
                    n.push(e);
                }), a.updateNews(n, i.data.videosList, n.length), wx.stopPullDownRefresh(), i.setData({
                    "refreshTips.refreshResultHidden": !1
                });
            } else if (1 == t) {
                var o = [];
                e.data.data.videoList.forEach(function(e, t) {
                    e.playTime = a.fixTimeSeconds(e.playTime), e.playNum = c.convertBigNumber(e.playNum), 
                    o.push(e);
                }), a.updateNews(i.data.videosList, o, o.length), i.setData({
                    loading: !0
                });
            }
            i.data.loadhidden || i.setData({
                loadhidden: !0
            });
        }, function(e) {
            0 == t && i.setData({
                pullDownErr: !0
            });
        });
    },
    gotoVideo: function(e) {
        var t = this;
        t.data.shareshowtips || t.setData({
            shareshowtips: !0
        }), s.gotoVideo(e.currentTarget.dataset.newsid || "");
        var i = t.data.clickedList, a = e.currentTarget.dataset.newsid || "";
        i[a] = a, t.setData({
            clickedList: i
        });
        var n = e.currentTarget.dataset.newsid || "", o = e.currentTarget.dataset.newstype || "", d = e.currentTarget.dataset.sourcetype || "", c = e.currentTarget.dataset.isfrompush + "" || "";
        wx.navigateTo({
            url: "/pages/video/video?newsId=" + n + "&newsType=" + o + "&from=1&sourceType=" + d + "&isFromPush=" + c
        }), r.videoPlayClk({
            recominfo: e.currentTarget.dataset.recominfo || "",
            newsid: e.currentTarget.dataset.newsid || "",
            times: 1,
            videolocate: 6,
            vid: e.currentTarget.dataset.vid,
            page: e.currentTarget.dataset.link || "",
            videofrom: 13
        }), r.videoExposure({
            recominfo: e.currentTarget.dataset.recominfo || "",
            newsid: e.currentTarget.dataset.newsid || "",
            vid: e.currentTarget.dataset.vid,
            page: e.currentTarget.dataset.link || "",
            videofrom: 13
        });
    },
    touchStart: function(e) {},
    touchEnd: function(e) {},
    onShareAppMessage: function() {
        return {
            title: "搜狐新闻精选视频",
            path: "/pages/video-list/video-list"
        };
    },
    onPageScroll: function(t) {
        var i = this, a = t.scrollTop, n = e.globalData.systemInfo.windowHeight, o = Math.round((n - 150 + a) / g);
        if (o % 4 == 0) {
            for (var s = o - 1, d = {}, c = s; c > s - 4; --c) {
                var u = i.data.videosList[c];
                h[u.newsId] || (h[u.newsId] = !0, d[u.newsId] = u.recominfo);
            }
            "{}" != JSON.stringify(d) && r.videoListExposure(d);
        }
        i.components.pageTab.onPageScroll(a);
    },
    onSubmit: function(e) {
        var t = e.detail.formId;
        t && u(t);
    },
    onShareFriendClick: function(e) {
        s.shareFriendClick(e.currentTarget.dataset.newsid, "视频列表");
    }
});