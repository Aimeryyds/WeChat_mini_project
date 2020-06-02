Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../utils/spm/index"), e = require("../../api/fetch"), a = require("../../api/index"), i = require("../../utils/utils"), d = require("../../utils/spm/exposure"), o = require("../../api/sh"), s = require("../../config/base-config"), r = require("../../config/url-config"), n = getApp();

Page({
    data: {
        isFristLoad: !0,
        aCode: t.default.Config.spmCode.spma,
        bCode: t.default.Config.spmCode.spmb["video-article"],
        articleId: "",
        authorId: "",
        channleId: "",
        pvId: i.getPvId(),
        articleData: {},
        spmParams: {},
        referPage: {
            spm: "",
            scm: "",
            info: null
        },
        dateFormat: "",
        contentFormat: "",
        pageHeight: 0,
        posterImage: "",
        dataOptions: {
            picWidth: 375,
            picHeight: 210
        },
        shareInfo: {},
        pageConfig: s.videoArticlePageConfig
    },
    onLoad: function(t) {
        if (!t.authorId && t.articleId && -1 != t.articleId.indexOf("_")) {
            var e = t.articleId.split("_");
            this.data.articleId = e[0], this.data.authorId = e[1];
        } else this.data.articleId = t.articleId || "", this.data.authorId = t.authorId || "";
        var a = o.sh.createVideoContext("headVideo");
        this.video = a, this.setCurrentPage(t), this.getArticleData();
    },
    onShow: function() {
        !this.data.isFristLoad && this.setCurrentPage(), this.data.isFristLoad = !1, this.sendAction(8725);
    },
    onHide: function() {
        this.video.pause(), this.sendPagePv();
    },
    onUnload: function() {
        this.sendPagePv();
    },
    onShareAppMessage: function() {
        var t = this.data.articleData.fulltext.videoInfo.cover, e = "/pages/video-article/video-article?articleId=" + this.data.articleId + "&authorId=" + this.data.authorId + "&spm=" + this.data.aCode + "." + this.data.bCode + ".share.0." + this.data.pvId;
        return {
            title: this.data.articleData.fulltext.title + "__搜狐网",
            path: e,
            imageUrl: t
        };
    },
    setCurrentPage: function(t) {
        this.data.referPage = n.globalData.currentPage, this.data.spmParams = {
            bCode: this.data.bCode,
            pvId: this.data.pvId,
            scm_pre: t.scm || this.data.referPage.scm,
            spm_pre: t.spm || this.data.referPage.spm || "",
            page_info: {
                page_type_id: i.getPageType(this.data.bCode),
                content_id: this.data.articleId,
                author_id: this.data.authorId
            },
            refer_page_info: this.data.referPage.info
        }, n.setCurrentPage({
            bCode: this.data.bCode,
            pvId: this.data.pvId,
            articleId: this.data.articleId,
            authorId: this.data.authorId
        });
    },
    initPage: function() {
        var t = this.data.articleData && this.data.articleData.fulltext, e = t && t.tkd;
        o.sh.setPageInfo && o.sh.setPageInfo({
            title: e && e.title || "手机搜狐网",
            keywords: e && e.keywords ? e.keywords.join("，") : "手机搜狐网，懂手机，更懂你！手机搜狐是国内最大的移动门户之一，利用搜狐门户矩阵资源，内容覆盖新闻、财经、体育、娱乐、汽车、房产、图库、视频等资讯，为10亿手机用户打造随时随地的掌上资讯生活。手机搜狐网，手机搜狐触屏版- m.sohu.com",
            description: e && e.description || "手机搜狐,手机搜狐网,搜狐手机版,搜狐新闻,搜狐,搜狐网,资讯,娱乐,体育,财经,汽车,房产,NBA,自媒体,视频,直播,小说",
            releaseDate: t && t.publishDateTime || "2019-08-09 12:01:30",
            image: t && t.images || [],
            success: function() {
                console.log("视频页基础信息设置完成");
            }
        });
    },
    getArticleData: function() {
        var t = this;
        this.data.articleId ? e.fetch({
            url: a.default.getArticleData(this.data.articleId + "_" + this.data.authorId)
        }).then(function(e) {
            var a = e.data.data.data;
            a ? (a.fulltext.videoInfo.cover = t.picHandle(a.fulltext.videoInfo.cover), t.setData({
                articleData: a,
                shareInfo: {
                    url: r.default.createArticleUrl(t.data.articleId + "_" + t.data.authorId) + "?spm=" + t.data.aCode + "." + t.data.bCode + ".0.0." + t.data.pvId,
                    title: a.fulltext.title || ""
                }
            }, function() {
                t.initPage(), n.reportPerformance(), n.setSnapShot();
            })) : n.jump404();
        }).catch(function(t) {
            n.jump404();
        }) : n.jump404();
    },
    setDate: function() {
        this.setData({
            dateFormat: this.data.articleData.fulltext.publicTime
        });
    },
    picHandle: function(t) {
        var e = /^\/\//.test(t) ? "https:" + t : t;
        return i.cutPicUrl(e, 750, 420);
    },
    sendPagePv: function() {
        t.default.sendPv(this.data.spmParams);
    },
    videoPlay: function() {
        this.sendAction(t.default.Config.spmCode.acode.videoPlay, {
            id: this.data.articleData.fulltext.videoInfo.videoId
        });
    },
    videoPause: function() {
        this.sendAction(t.default.Config.spmCode.acode.videoPause, {
            id: this.data.articleData.fulltext.videoInfo.videoId
        });
    },
    videoEnded: function() {
        this.sendAction(t.default.Config.spmCode.acode.videoEnded, {
            id: this.data.articleData.fulltext.videoInfo.videoId
        });
    },
    sendAction: function(e, a) {
        t.default.sendAction(Object.assign({}, this.data.spmParams, {
            bCode: this.data.bCode,
            actionCode: e,
            clkParam: a
        }));
    },
    handleLoadAd: function(e) {
        this.sendAction(t.default.Config.spmCode.acode.adLoad, e);
    },
    handleErrorAd: function(e) {
        this.sendAction(t.default.Config.spmCode.acode.adError, e.detail);
    },
    onPageScroll: i.throttle(function(t) {
        t.scrollTop > 210 && this.video.pause();
    }, 500),
    expoCheck: function() {
        var e = this;
        setTimeout(function() {
            d.exposureCheck(function(a) {
                t.default.sendEv(Object.assign({}, e.data.spmParams, {
                    spm_cnt: a.spm || "",
                    scm_cnt: a.scm || "",
                    ev_page_info: a.ev_page_info
                }));
            });
        }, 50);
    },
    clickShare: function() {
        this.sendAction(t.default.Config.spmCode.acode.clickShare);
    }
});