function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = getApp(), a = require("../../utils/util").util, i = require("../../utils/stat"), n = require("../../utils/ald-stat"), o = require("./play-util"), r = require("../../api/video"), s = require("../../components/share-poster/index"), d = require("../../components/share-bar/index"), l = {}, c = {
    touchDot: 0,
    time: 0,
    interval: ""
};

Page({
    data: {
        videodata: {},
        recommendVideos: [],
        nearCommentList: [],
        ableLaunchApp: !1,
        articleimages: {},
        isPageLoading: !1,
        vhidden: !1,
        sharePoster: {
            hidden: !0,
            saveHidden: !0
        },
        titleTap: {
            count: 0,
            timestamp: 0
        },
        playState: {
            isWifi: !1,
            paused: !0,
            allowNoWifiPlay: !1,
            done: !1
        },
        shareBarHidden: !1
    },
    onLoad: function(e) {
        var a = this;
        a.sharePoster = new s(a), a.shareBar = new d(a), o.monitorNetState(a), a.initData(e), 
        t.order.ordering("video.initPage", a.initPage, "onLaunch");
    },
    onShow: function() {
        a.showShareMenu();
    },
    initData: function(e) {
        console.log(e), l.newsId = e.newsId || "", l.newsType = e.newsType || "", l.shareId = e.shareId || "", 
        t.globalData.from = e.from, this.setData({
            launchAppParams: "news://newsId=" + l.newsId + "&startfrom=4799deeplink"
        });
    },
    initPage: function() {
        var e = this;
        r.getVideoDetail(e, l.newsId, l.newsType, l.shareId).then(function(t) {
            return r.getRelatedVideos(e, t);
        }).then(function(t) {
            return r.getComment(e, t);
        }), r.getShareData(e, l.newsId), o.checkIsWifi(e);
    },
    launchAppError: function(e) {
        console.log("打开App错误: " + e.detail.errMsg);
    },
    onSharePosterClick: function(e) {
        i.h5({
            objType: "miniapp_clk_sharetoweixinblog",
            statType: "clk"
        }), n.shareCircleClick(e.currentTarget.dataset.newsid, "视频正文");
        var t = this;
        t.setData({
            vhidden: !0,
            "sharePoster.hidden": !1
        }), t.sharePoster.drawSharePicture({
            newsId: e.currentTarget.dataset.newsid,
            newsType: e.currentTarget.dataset.newstype,
            from: "video"
        });
    },
    onShareFriendClick: function(e) {
        n.shareFriendClick(e.currentTarget.dataset.newsid, "视频正文");
    },
    closeTips: function(e) {
        var t = this;
        wx.hideLoading(), t.setData({
            vhidden: !1,
            "sharePoster.hidden": !0
        });
    },
    gotoVideo: function(e) {
        i.h5({
            objType: "miniapp_clk_releventnews",
            statType: "clk"
        }), n.gotoRelatedVideo(e.currentTarget.dataset.newsid || "");
        var t = e.currentTarget.dataset.newsid, a = e.currentTarget.dataset.newstype;
        console.log(a), wx.redirectTo({
            url: "/pages/video/video?newsId=" + t + "&newsType=" + a + "&from = 4"
        });
    },
    onPageScroll: function(e) {},
    articleImageLoad: function(e) {
        var a = e.detail.width, i = e.detail.height, n = t.globalData.systemInfo.screenWidth - t.globalData.systemInfo.screenWidth / 750 * 76, o = n / a, r = this.data.articleimages;
        r[e.target.dataset.index] = {
            width: n,
            height: o * i
        }, this.setData({
            articleimages: r
        });
    },
    touchStart: function(e) {
        c.touchDot = e.touches[0].pageX, console.log(c.touchDot), c.interval = setInterval(function() {
            c.time++;
        }, 100), this.setData({
            "popupShare.isScrolling": !0
        });
    },
    touchMove: function(e) {
        var t = e.touches[0].pageX, a = c.touchDot;
        console.log("touchMove:" + t + " touchDot:" + a + " diff:" + (t - a));
    },
    touchEnd: function(e) {
        clearInterval(c.interval), c.time = 0, this.setData({
            "popupShare.isScrolling": !1
        });
    },
    onShareAppMessage: function() {
        i.h5({
            objType: "miniapp_clk_share",
            statType: "clk"
        });
        var e = this;
        return {
            title: e.data.shareTitle,
            path: "/pages/home/home?newsId=" + l.newsId + "&transUsr=" + t.globalData.usrKey.openid + "&newsType=" + l.newsType + "&shareType=share_vid",
            imageUrl: e.data.videodata.tvPic || "../../images/article-share-default.jpeg"
        };
    },
    onTitleTap: function() {
        var e = this, a = e.data.titleTap.count, i = new Date().getTime(), n = e.data.titleTap.timestamp;
        0 != n ? (i - n < 1500 ? (e.setData({
            "titleTap.count": 1 + a
        }), a >= 4 && (wx.showToast({
            title: t.globalData.version + " \n" + t.globalData.usrKey.openid,
            icon: "none",
            duration: 2e3
        }), e.setData({
            "titleTap.count": 0
        }))) : e.setData({
            "titleTap.count": 0
        }), e.setData({
            "titleTap.timestamp": i
        })) : e.setData({
            "titleTap.timestamp": i
        });
    },
    userAvatarError: function(t) {
        var a = this, i = t.currentTarget.dataset.index;
        a.data.nearCommentList.forEach(function(t, n) {
            if (t.commentId == i) {
                var o = "nearCommentList[" + n + "].authorimg";
                a.setData(e({}, o, "../../images/wxavatar_default.jpeg"));
            }
        });
    },
    onNoWifiStartPlay: function() {
        var e = this;
        e.setData({
            "playState.allowNoWifiPlay": !0
        }), o.startPlay(e);
    },
    onVideoClick: function() {
        var e = this;
        e.data.playState.paused ? o.startPlay(e) : o.pausePlay(e);
    },
    onVideoPlayEnded: function() {
        this.setData({
            "playState.done": !0
        });
    },
    onPlayAgain: function() {
        var e = this;
        e.setData({
            "playState.done": !1
        }), o.startPlay(e), n.onVideoPlayAgain(l.newsId);
    }
});