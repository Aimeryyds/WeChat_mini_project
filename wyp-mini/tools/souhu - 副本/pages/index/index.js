Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../../config/feed-config"), t = require("../../utils/utils"), a = require("../../utils/event"), i = require("../../utils/spm/index"), s = require("../../api/sh"), n = require("../../config/base-config"), o = require("../../config/url-config"), d = getApp();

Page({
    data: {
        isFristLoad: !0,
        aCode: i.default.Config.spmCode.spma,
        bCode: i.default.Config.spmCode.spmb.index,
        pvId: t.getPvId(),
        spmParams: {},
        referPage: {
            spm: "",
            scm: "",
            info: null
        },
        currentIdx: 0,
        navList: e.feedConfig.indexFeeds,
        pageConfig: n.indexPageConfig,
        shareInfo: {},
        pageHeight: 0
    },
    onLoad: function(e) {
        var t = this;
        this.setData({
            currentIdx: e && e.currentIndex || 0,
            shareInfo: {
                url: o.default.host + "?spm=" + this.data.aCode + "." + this.data.bCode + ".0.0." + this.data.pvId + "&_trans_=" + n.indexPageConfig.shareTrans
            }
        }), this.setCurrentPage(e), this.data.pageConfig.focusConfig.isShow && s.sh.showFavoriteGuide && s.sh.showFavoriteGuide({
            type: this.data.pageConfig.focusConfig.type,
            content: this.data.pageConfig.focusConfig.content,
            success: function() {
                t.sendAction(t.data.pageConfig.focusConfig.acode);
            }
        });
    },
    onShow: function() {
        !this.data.isFristLoad && this.setCurrentPage(), this.data.isFristLoad = !1, this.sendAction(8726), 
        this.initPage();
    },
    onHide: function() {
        this.sendPagePv();
    },
    onUnload: function() {
        this.sendPagePv();
    },
    initPage: function() {
        s.sh.setPageInfo && s.sh.setPageInfo({
            title: "手机搜狐网",
            keywords: "手机搜狐网，懂手机，更懂你！手机搜狐是国内最大的移动门户之一，利用搜狐门户矩阵资源，内容覆盖新闻、财经、体育、娱乐、汽车、房产、图库、视频等资讯，为10亿手机用户打造随时随地的掌上资讯生活。手机搜狐网，手机搜狐触屏版- m.sohu.com",
            description: "手机搜狐,手机搜狐网,搜狐手机版,搜狐新闻,搜狐,搜狐网,资讯,娱乐,体育,财经,汽车,房产,NBA,自媒体,视频,直播,小说",
            releaseDate: "2019-05-08 12:01:30",
            success: function() {
                console.log("首页基础信息设置完成");
            }
        });
    },
    onShareAppMessage: function() {
        return {
            title: "手机搜狐网",
            path: "/pages/index/index",
            imageUrl: "https://zmt.itc.cn/static/images/pic/sohu-logo/logo-144.png"
        };
    },
    sendPagePv: function() {
        i.default.sendPv(this.data.spmParams);
    },
    setCurrentPage: function(e) {
        void 0 === e && (e = {}), this.data.referPage = d.globalData.currentPage, this.data.spmParams = {
            bCode: this.data.bCode,
            pvId: this.data.pvId,
            scm_pre: e.scm || this.data.referPage && this.data.referPage.scm || "",
            spm_pre: e.spm || this.data.referPage && this.data.referPage.spm || "",
            page_info: {
                page_type_id: t.getPageType(this.data.bCode)
            },
            refer_page_info: this.data.referPage && this.data.referPage.info || {}
        }, d.setCurrentPage({
            bCode: this.data.bCode,
            pvId: this.data.pvId
        });
    },
    feedExposure: function(e) {
        var t = e.detail;
        i.default.sendEv(Object.assign(this.data.spmParams, {
            spm_cnt: t.spm || "",
            scm_cnt: t.scm || "",
            ev_page_info: t.ev_page_info
        }));
    },
    sendAction: function(e, t) {
        i.default.sendAction(Object.assign(this.data.spmParams, {
            actionCode: e,
            clkParam: t
        }));
    },
    handleLoadAd: function(e) {
        this.sendAction(i.default.Config.spmCode.acode.adLoad, e.detail);
    },
    handleErrorAd: function(e) {
        this.sendAction(i.default.Config.spmCode.acode.adError, e.detail);
    },
    clickShare: function() {
        this.sendAction(i.default.Config.spmCode.acode.clickShare);
    },
    onReachBottom: function() {
        a.emit("feedLoadMore", this);
    }
});