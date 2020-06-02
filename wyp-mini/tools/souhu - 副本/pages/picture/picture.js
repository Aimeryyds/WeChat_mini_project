Object.defineProperty(exports, "__esModule", {
    value: !0
});

var a = require("../../utils/spm/index"), e = require("../../api/fetch"), t = require("../../api/index"), i = require("../../utils/utils"), s = require("../../api/sh"), r = require("../../config/url-config"), d = require("../../config/ad-config"), n = require("../../config/base-config"), o = getApp();

Page({
    data: {
        galleryData: {},
        picList: [],
        spmParams: {},
        aCode: a.default.Config.spmCode.spma,
        bCode: a.default.Config.spmCode.spmb.picture,
        pvId: i.getPvId(),
        galleryId: "",
        authorId: "",
        imageUrls: [],
        referPage: {
            spm: "",
            scm: "",
            info: null
        },
        shareInfo: {},
        pageConfig: n.picturePageConfig,
        insertAd: d.adConfig[a.default.Config.spmCode.spmb.picture].insert,
        dataOptions: {
            hasAuthor: !0
        }
    },
    onLoad: function(a) {
        this.data.galleryId = a.galleryId || "", this.setData({
            galleryId: a.galleryId
        }), this.getGalleryData();
    },
    onShow: function() {
        this.setCurrentPage();
    },
    onHide: function() {
        this.sendPagePv();
    },
    onUnload: function() {
        this.sendPagePv();
    },
    initPage: function() {
        var a = this.data.galleryData && this.data.galleryData.album;
        s.sh.setPageInfo && s.sh.setPageInfo({
            title: a && a.title || "手机搜狐网",
            keywords: a && a.keywords ? a.keywords.join("，") : "手机搜狐网，懂手机，更懂你！手机搜狐是国内最大的移动门户之一，利用搜狐门户矩阵资源，内容覆盖新闻、财经、体育、娱乐、汽车、房产、图库、视频等资讯，为10亿手机用户打造随时随地的掌上资讯生活。手机搜狐网，手机搜狐触屏版- m.sohu.com",
            description: a && a.album && a.album.images && a.album.images.length && a.album.images[0].description || "手机搜狐,手机搜狐网,搜狐手机版,搜狐新闻,搜狐,搜狐网,资讯,娱乐,体育,财经,汽车,房产,NBA,自媒体,视频,直播,小说",
            releaseDate: a && a.createTime,
            image: a && a.album && a.album.images || [],
            success: function() {
                console.log("图集基础信息设置完成");
            }
        });
    },
    onShareAppMessage: function() {
        var a = this.data.galleryData && this.data.galleryData.album, e = a && a.album && a.album.images[0] ? a && a.album && a.album.images[0] : "https://zmt.itc.cn/static/images/pic/sohu-logo/logo-144.png", t = "/pages/picture/picture?galleryId=" + this.data.galleryId + "&spm=" + this.data.aCode + "." + this.data.bCode + ".share.0." + this.data.pvId;
        return {
            title: a.title + "__搜狐网",
            path: t,
            imageUrl: e,
            templateId: "227ga12dg322156nh0"
        };
    },
    setCurrentPage: function(a) {
        void 0 === a && (a = {
            scm: void 0,
            spm: void 0
        }), this.data.referPage = o.globalData.currentPage, this.data.spmParams = {
            bCode: this.data.bCode,
            pvId: this.data.pvId,
            scm_pre: a.scm || this.data.referPage.scm,
            spm_pre: a.spm || this.data.referPage.spm || "",
            page_info: {
                page_type_id: i.getPageType(this.data.bCode),
                gallery_id: this.data.galleryId,
                author_id: this.data.authorId
            },
            refer_page_info: this.data.referPage.info
        }, o.setCurrentPage({
            bCode: this.data.bCode,
            pvId: this.data.pvId,
            articleId: this.data.galleryId,
            authorId: this.data.authorId
        });
    },
    getGalleryData: function() {
        var i = this, s = this.data.galleryId;
        s ? e.fetch({
            url: t.default.getGallery + s
        }).then(function(e) {
            var t = e.data.data;
            if (t && t.album) {
                var d = i.handlePics(t.album.images);
                i.setData({
                    galleryData: t,
                    picList: d,
                    imageUrls: d.map(function(a) {
                        return a.url;
                    }),
                    shareInfo: {
                        url: r.default.createPictureUrl(s) + "?spm=" + a.default.Config.spmCode.spma + "." + a.default.Config.spmCode.spmb.picture + ".0.0." + i.data.pvId,
                        title: t.album.title || ""
                    }
                }, function() {
                    i.initPage(), o.reportPerformance(), o.setSnapShot();
                });
            } else o.jump404();
        }).catch(function() {
            o.jump404();
        }) : o.jump404();
    },
    handlePics: function(a) {
        var e = this, t = [];
        return a.forEach(function(a) {
            t.push({
                url: e.picHandle(a.url),
                description: a.description
            });
        }), t;
    },
    picHandle: function(a) {
        return /^\/\//.test(a) ? "https:" + a : a;
    },
    sendPagePv: function() {
        a.default.sendPv(this.data.spmParams);
    },
    sendAction: function(e, t) {
        a.default.sendAction(Object.assign(this.data.spmParams, {
            actionCode: e,
            clkParam: t
        }));
    },
    viewImage: function(a) {
        var e = a.currentTarget.dataset.img.url;
        e && s.sh.previewImage({
            current: e,
            urls: this.data.imageUrls
        });
    },
    handleLoadAd: function(e) {
        this.sendAction(a.default.Config.spmCode.acode.adLoad, e);
    },
    handleErrorAd: function(e) {
        this.sendAction(a.default.Config.spmCode.acode.adError, e.detail);
    },
    clickShare: function() {
        this.sendAction(a.default.Config.spmCode.acode.clickShare);
    }
});