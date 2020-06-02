var e = getApp(), t = require("../../utils/util").util, n = require("../../utils/stat"), r = require("../../utils/ald-stat"), a = require("../../components/share-poster/index"), s = require("../../components/share-bar/index"), i = require("./util"), o = require("./api"), d = {};

Page({
    data: {
        newsdata: [],
        eventProgressList: [],
        hotPointsList: [],
        vhidden: !1,
        firstLoading: {
            items: [ {}, {} ],
            loadhidden: !1
        },
        sharePoster: {
            hidden: !0,
            saveHidden: !0
        },
        shareBarHidden: !1,
        isEventFold: !0,
        sohuTimeTitle: "",
        sohuTimeNewsId: ""
    },
    onLoad: function(t) {
        var n = this;
        n.sharePoster = new a(n), n.shareBar = new s(n), i.monitorNetState(), n.initData(t), 
        e.order.ordering("moment.initPage", function() {
            n.render(), o.getShareData(n, d.newsId);
        }, "onLaunch");
    },
    onShow: function() {
        t.showShareMenu();
    },
    initData: function(e) {
        d.newsId = e.newsId || "", d.newsType = e.newsType || "", d.shareId = e.shareId || "", 
        d.isLocal = e.isLocal || !1;
    },
    render: function() {
        var e = this, t = function(e) {
            return (e + "").length <= 1 ? "0" + e : e;
        }, n = function(e) {
            var n = new Date().getTime() - e.getTime();
            return n <= 36e5 ? Math.round(n / 6e4) + "分钟前" : n <= 864e5 ? Math.round(n / 36e5) + "小时前" : t(e.getHours()) + "-" + t(e.getMinutes());
        };
        return o.getNewsDetail(e, d).then(function() {
            return o.getEventProgress(d.newsId).then(function(t) {
                t.list.forEach(function(e) {
                    var t = new Date(parseInt(e.event_time));
                    e.timeFormat = n(t);
                }), e.setData({
                    eventProgressList: t.list,
                    sohuTimeTitle: t.title,
                    sohuTimeNewsId: t.newsId
                });
            });
        }).then(function() {
            return o.getHotPoints(e.data.sohuTimeNewsId).then(function(t) {
                t.forEach(function(e) {
                    var t = new Date(parseInt(e.createdTime));
                    e.createTimeFormat = n(t);
                }), e.setData({
                    hotPointsList: t
                });
            });
        });
    },
    onSharePosterClick: function(e) {
        n.h5({
            objType: "miniapp_clk_sharetoweixinblog",
            statType: "clk"
        }), r.shareCircleClick(e.currentTarget.dataset.newsid, "时刻正文");
        var t = this;
        t.setData({
            vhidden: !0
        }), t.setData({
            "sharePoster.hidden": !1
        }), t.sharePoster.drawSharePicture({
            newsId: e.currentTarget.dataset.newsid,
            newsType: e.currentTarget.dataset.newstype,
            from: "article"
        });
    },
    onShareFriendClick: function(e) {
        r.shareFriendClick(e.currentTarget.dataset.newsid, "时刻正文");
    },
    gotoArticle: function(e) {
        n.h5({
            objType: "miniapp_clk_releventnews",
            statType: "clk"
        });
        r.gotoRelatedArticle(e.currentTarget.dataset.newsid, d.isLocal);
        var t = e.currentTarget.dataset.newsid, a = e.currentTarget.dataset.newstype;
        console.log(a), wx.redirectTo({
            url: "/pages/article/article?newsId=" + t + "&newsType=" + a + "&from = 4"
        });
    },
    onShareAppMessage: function() {
        n.h5({
            objType: "miniapp_clk_share",
            statType: "clk"
        });
        var t = this;
        return {
            title: "搜狐时刻#" + t.data.sohuTimeTitle + "#——" + t.data.shareTitle,
            path: "/pages/home/home?newsId=" + d.newsId + "&transUsr=" + e.globalData.usrKey.openid + "&newsType=" + d.newsType + "&shareType=share_art&isMoment=true",
            imageUrl: t.data.sharePic || "../../images/article-share-default.jpeg"
        };
    },
    onEventsUnfold: function() {
        this.setData({
            isEventFold: !1
        });
    },
    onEventsFold: function() {
        this.setData({
            isEventFold: !0
        });
    },
    onEventItemClick: function(e) {
        var t = e.currentTarget.dataset.newsid, n = e.currentTarget.dataset.newstype;
        wx.redirectTo({
            url: "/pages/moment/moment?newsId=" + t + "&newsType=" + n
        }), r.onEventItemClick(t);
    }
});