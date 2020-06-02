function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var a = getApp(), t = require("../../utils/util").util, r = require("../../utils/stat"), n = require("./vendor").init, i = require("./vendor").req, s = require("./vendor").util, o = require("../../utils/ald-stat"), l = require("../../components/share-poster/index"), c = require("../../components/share-bar/index"), d = {};

Page({
    data: {
        newsdata: [],
        recommendNews: [],
        nearCommentList: [],
        ableLaunchApp: !1,
        articleimages: {},
        vhidden: !1,
        launchAppParams: "tab://",
        titleTap: {
            count: 0,
            timestamp: 0
        },
        popupShare: {
            isScrolling: !1
        },
        imageGallery: {
            isHidden: !0,
            imageUrls: [],
            current: 0
        },
        firstLoading: {
            items: [ {}, {} ],
            loadhidden: !1
        },
        sharePoster: {
            hidden: !0,
            saveHidden: !0
        },
        shareBarHidden: !1
    },
    onLoad: function(e) {
        var t = this;
        t.sharePoster = new l(t), t.shareBar = new c(t), t.setData({
            allowVideo: e.isFromHotVideo
        }), n(t), s.monitorNetState(), t.initData(e), a.order.ordering("article.initPage", t.initPage, "onLaunch");
    },
    onShow: function() {
        t.showShareMenu(), a.order.ordering("article.checkLaunchApp", s.checkLaunchApp, "onShow");
    },
    initData: function(e) {
        console.log(e), d.newsId = e.newsId || "", d.newsType = e.newsType || "", d.shareId = e.shareId || "", 
        d.isLocal = e.isLocal || !1, a.globalData.from = e.from, this.setData({
            launchAppParams: "news://newsId=" + d.newsId + "&startfrom=4799deeplink"
        });
    },
    initPage: function() {
        this.render(), i.getShareData(d.newsId);
    },
    render: function() {
        return i.getNewsDetail(d.newsId, d.newsType, d.shareId).then(function(e) {
            return a.globalData.isRelevanceOpen ? i.getRelatedNews(e, d.isLocal) : e;
        }).then(function(e) {
            return i.getComment(e);
        });
    },
    launchAppError: function(e) {
        console.log("打开App错误: " + e.detail.errMsg);
    },
    onLaunchTap: function(e) {
        wx.showToast({
            title: e.currentTarget.dataset.p
        });
    },
    onSharePosterClick: function(e) {
        r.h5({
            objType: "miniapp_clk_sharetoweixinblog",
            statType: "clk"
        }), o.shareCircleClick(e.currentTarget.dataset.newsid, "新闻正文");
        var a = this;
        a.setData({
            vhidden: !0
        }), a.setData({
            "sharePoster.hidden": !1
        }), a.sharePoster.drawSharePicture({
            newsId: e.currentTarget.dataset.newsid,
            newsType: e.currentTarget.dataset.newstype,
            from: "article"
        });
    },
    onShareFriendClick: function(e) {
        o.shareFriendClick(e.currentTarget.dataset.newsid, "新闻正文");
    },
    gotoArticle: function(e) {
        r.h5({
            objType: "miniapp_clk_releventnews",
            statType: "clk"
        });
        o.gotoRelatedArticle(e.currentTarget.dataset.newsid, d.isLocal);
        var a = e.currentTarget.dataset.newsid, t = e.currentTarget.dataset.newstype;
        console.log(t), wx.redirectTo({
            url: "/pages/article/article?newsId=" + a + "&newsType=" + t + "&from = 4"
        });
    },
    onPageScroll: function(e) {},
    onShareAppMessage: function() {
        r.h5({
            objType: "miniapp_clk_share",
            statType: "clk"
        });
        var e = this;
        return {
            title: e.data.shareTitle,
            path: "/pages/home/home?newsId=" + d.newsId + "&transUsr=" + a.globalData.usrKey.openid + "&newsType=" + d.newsType + "&shareType=share_art",
            imageUrl: e.data.sharePic || "../../images/article-share-default.jpeg"
        };
    },
    onTitleTap: function() {
        var e = this, t = e.data.titleTap.count, r = new Date().getTime(), n = e.data.titleTap.timestamp;
        0 != n ? (r - n < 1500 ? (e.setData({
            "titleTap.count": 1 + t
        }), t >= 4 && (wx.showToast({
            title: a.globalData.version + " \n" + a.globalData.usrKey.openid,
            icon: "none",
            duration: 2e3
        }), e.setData({
            "titleTap.count": 0
        }))) : e.setData({
            "titleTap.count": 0
        }), e.setData({
            "titleTap.timestamp": r
        })) : e.setData({
            "titleTap.timestamp": r
        });
    },
    userAvatarError: function(a) {
        var t = this, r = a.currentTarget.dataset.index;
        t.data.nearCommentList.forEach(function(a, n) {
            if (a.commentId == r) {
                var i = "nearCommentList[" + n + "].authorimg";
                t.setData(e({}, i, "../../images/wxavatar_default.jpeg"));
            }
        });
    },
    onImageClick: function(e) {
        var a = 0;
        this.data.imageGallery.imageUrls.forEach(function(t, r) {
            t.index == e.target.dataset.index && (a = r);
        }), this.data.imageGallery.imageUrls[a].invalid || (this.setData({
            "imageGallery.current": a
        }), this.setData({
            "imageGallery.isHidden": !1
        }));
    },
    onSwiperChange: function(e) {
        var a = e.detail.current;
        this.setData({
            "imageGallery.current": a
        });
    },
    onGalleryClick: function(e) {
        this.setData({
            "imageGallery.isHidden": !0
        });
        var a = this.data.imageGallery.current, t = this.data.imageGallery.imageUrls[a].offsetTop - 20;
        t > 0 && wx.pageScrollTo({
            duration: 0,
            scrollTop: t
        });
    },
    saveGalleryPic: function(e) {
        var a = e.currentTarget.dataset.index;
        s.saveGalleryPic2Local(a);
    },
    onLaunchAppClick: function(e) {
        var a = this;
        o.launchApp(a.data.newsdata.newsId);
    }
});