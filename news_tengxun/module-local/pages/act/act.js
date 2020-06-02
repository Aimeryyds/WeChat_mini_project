var t = require("../../../@babel/runtime/helpers/interopRequireWildcard"), a = t(require("../../js/const")), e = t(require("../../js/util")), i = t(require("../../js/lc-common")), o = t(require("../../js/store/lc-article")), n = require("../../../store/index"), c = require("../../../services/jump"), r = new getApp().global, s = require("../../js/login_manager.js"), l = require("../../js/authorize.js"), d = require("../../js/netspeed");

Page({
    data: {
        g: r,
        start: 0,
        indicatorDots: !1,
        autoplay: !0,
        duration: 2e3,
        shareInfo: {},
        shareType: a.posterType.activity,
        showType: 0,
        isShowBottomBtn: !1,
        articleId: "",
        articleCommentId: "",
        articleInfo: {},
        relatedData: [],
        needShowLevitateView: !1,
        signupStatus: 0
    },
    onLoad: function(t) {
        t.id || (t.id = e.getIdByScene(t.scene)), this.setData({
            articleId: t.id
        }), this.getActArticleInfo(), r.mta.Page.init(), this.setData({
            needShowLevitateView: e.shouldShowTip()
        });
    },
    onShow: function() {
        var t = this;
        this.setData({
            start: parseInt(new Date().getTime() / 1e3)
        }), e.login().then(function() {
            t.getSignupStatus();
        }), e.rep({
            opType: "pv",
            fromPage: "local_act_page",
            beginTime: this.data.start,
            id: this.data.articleId
        });
    },
    onHide: function() {
        e.reportPageLeave("local_act_page", this);
    },
    onUnload: function() {
        e.reportPageLeave("local_act_page", this);
    },
    onShareAppMessage: function() {
        var t = e.extend({}, a.shareDefaultInfo, this.data.shareInfo || {});
        return t.path = (0, c.toUrl)(c.PAGE_PATH.LOCAL_ACTIVE, {
            id: this.data.articleId
        }), t;
    },
    parseArticleInfo: function(t) {
        return t.act_reg_start_time && (t.act_reg_start_time = e.formatTimeExt(e.parseDate(t.act_reg_start_time, "yyyy-MM-dd hh:mm:ss"), "MM月dd日 hh:mm")), 
        t.act_reg_end_time && (t.act_reg_end_time = e.formatTimeExt(e.parseDate(t.act_reg_end_time, "yyyy-MM-dd hh:mm:ss"), "MM月dd日 hh:mm")), 
        t.offline_act && t.offline_act.act_hold_start_time && (t.offline_act.act_hold_start_time = e.formatTimeExt(e.parseDate(t.offline_act.act_hold_start_time, "yyyy-MM-dd hh:mm:ss"), "MM月dd日 hh:mm")), 
        t.offline_act && t.offline_act.act_hold_end_time && (t.offline_act.act_hold_end_time = e.formatTimeExt(e.parseDate(t.offline_act.act_hold_end_time, "yyyy-MM-dd hh:mm:ss"), "MM月dd日 hh:mm")), 
        t.offline_act && t.offline_act.act_sign_start_time && (t.offline_act.act_sign_start_time = e.formatTimeExt(e.parseDate(t.offline_act.act_sign_start_time, "yyyy-MM-dd hh:mm:ss"), "MM月dd日 hh:mm")), 
        t.offline_act && t.offline_act.act_sign_end_time && (t.offline_act.act_sign_end_time = e.formatTimeExt(e.parseDate(t.offline_act.act_sign_end_time, "yyyy-MM-dd hh:mm:ss"), "MM月dd日 hh:mm")), 
        t;
    },
    getActArticleInfo: function() {
        var t = this;
        e.fetch(a.api.getActDetail, {
            id: this.data.articleId
        }, {
            id: this.data.articleId
        }, "GET").then(function(a) {
            if (200 === a.statusCode) if (0 === a.data.code && a.data.data) {
                var e = {};
                e.id = a.data.data.activity_id, e.headImgUrl = a.data.data.act_avatar.split(",")[0], 
                e.title = a.data.data.act_title, t.parseArticleInfo(a.data.data).act_avatar = a.data.data.act_avatar.split(","), 
                t.setData({
                    showType: 1,
                    articleInfo: a.data.data,
                    shareInfo: e,
                    articleCommentId: a.data.data.comment_id
                });
            } else t.setData({
                showType: 2
            }); else t.setData({
                showType: 3
            });
        }, function(a) {
            t.setData({
                showType: 3
            });
        });
    },
    refreshReloadModel: function() {
        this.getActArticleInfo();
    },
    getRelatedData: function() {
        var t = {
            id: this.data.articleId,
            article_id: this.data.article_id
        };
        o.getRelatedArticles(this, t);
    },
    goToIntro: function() {
        e.getRect("#lcActIntro", function(t) {
            e.getViewportInfo(function(a) {
                wx.pageScrollTo({
                    scrollTop: t.top + a.scrollTop,
                    duration: 300
                });
            });
        }), e.rep({
            opType: "clk_act_intro_tab",
            fromPage: "local_act_page",
            beginTime: this.data.start
        });
    },
    goToComment: function() {
        e.getRect("#lcComment", function(t) {
            e.getViewportInfo(function(a) {
                wx.pageScrollTo({
                    scrollTop: t.top + a.scrollTop,
                    duration: 300
                });
            });
        }), e.rep({
            opType: "clk_act_comment_tab",
            fromPage: "local_act_page",
            beginTime: this.data.start
        });
    },
    getSignupStatus: function() {
        var t = this, i = {
            activity_id: this.data.articleId
        };
        return new Promise(function(o, n) {
            e.fetch(a.api.participateInfo, i, i, "GET").then(function(a) {
                200 === a.statusCode ? 0 === a.data.code ? a.data.data && a.data.data.status ? t.setData({
                    signupStatus: a.data.data.status
                }) : t.setData({
                    signupStatus: 0
                }) : 1000002 === a.data.code || wx.showToast({
                    icon: "none",
                    title: a.data.msg
                }) : wx.showToast({
                    icon: "none",
                    title: "网络出错"
                }), o();
            });
        });
    },
    handleWriteComment: function(t) {
        var a = this;
        s.checkLogin("", this, function() {
            i.handleComment(a, t);
        }), e.rep({
            opType: "clk_act_comment",
            fromPage: "local_act_page",
            beginTime: this.data.start
        });
    },
    levitateClick: function() {
        r.localtab = "GOOD_ACT", n.global.jumpTabQuery = 2, wx.switchTab({
            url: (0, c.toJumpUrl)(4)
        });
    },
    handleGetUserinfo: function(t) {
        s.checkLogin("", this, function() {
            var t = this, a = "id=".concat(this.data.articleId, "&status=").concat(this.data.signupStatus, "&title=").concat(this.data.shareInfo.title, "&headimgurl=").concat(encodeURIComponent(this.data.shareInfo.headImgUrl)), e = "/module-local/pages/register/register?".concat(a), i = "/module-local/pages/signupSucc/signupSucc?".concat(a);
            d.usenet().then(function() {
                t.getSignupStatus().then(function() {
                    var a = 0 === t.data.signupStatus ? e : i;
                    wx.navigateTo({
                        url: a
                    });
                });
            });
        }.bind(this)), e.rep({
            opType: "clk_act_join",
            fromPage: "local_act_page",
            beginTime: this.data.start
        });
    },
    onRelateArticle: function() {
        e.rep({
            opType: "clk_act_related_article",
            fromPage: "local_act_page",
            beginTime: this.data.start
        });
    },
    onMoreArticle: function() {
        e.rep({
            opType: "clk_act_more_article",
            fromPage: "local_act_page",
            beginTime: this.data.start
        });
    },
    onInvite: function() {
        e.rep({
            opType: "clk_act_invite",
            fromPage: "local_act_page",
            beginTime: this.data.start
        });
    },
    handleGoAct: function() {
        r.localtab = "GOOD_ACT", n.global.jumpTabQuery = 2, wx.switchTab({
            url: (0, c.toJumpUrl)(4)
        });
    },
    onReachBottom: function() {
        var t = this.selectComponent("#lcComment");
        t && t.getMoreComments();
    },
    onAuthOkBtnTap: function(t) {
        l.onAuthOkBtnTap(this, t);
    },
    onAuthCancelBtnTap: function(t) {
        l.onAuthCancelBtnTap(this, t);
    },
    onAuthDialogOutTap: function(t) {
        l.onAuthDialogOutTap(this, t);
    },
    bindAuthGetUserInfo: function(t) {
        l.bindAuthGetUserInfo(this, t);
    },
    launchUserInfoAuthDialog: function(t, a) {
        l.launchUserInfoAuthDialog(this, t, a);
    }
});