var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../utils/mlodash")), o = e(require("../../utils/logger")), a = (e(require("../../network/url")), 
require("../../utils/common")), i = require("../../store/index"), n = require("../../services/share"), r = require("../../services/comment"), m = require("../../services/report"), s = require("../../services/jump"), c = require("../../services/appScheme"), l = require("./service"), d = i.constant.pageStatus;

Page({
    data: {
        pageStatus: d.loading,
        status: i.constant.pageStatus,
        recommendList: [],
        articleId: "",
        atype: "",
        commentId: "",
        posterShareImg: "",
        title: "",
        intro: "",
        introName: "",
        content: "",
        truthContent: [],
        timeline: {},
        special: {},
        topic: {},
        chlid: "",
        chlicon: "",
        chlname: "",
        date: "",
        remark: "",
        commentList: null,
        commentLoading: !0,
        commentCount: 0,
        commentCountStr: "评论",
        isForbidden: !1,
        articleBlock: !0,
        commentScheme: null,
        articleScheme: null,
        scrollTop: 0,
        fromPage: m.FROM_PAGE.normal_detail_page,
        platform: i.systemInfo.platform,
        isIphoneX: i.systemInfo.isIphoneX,
        openGId: "",
        isFromApp: !1,
        isFromHistory: !1,
        inputPlaceholder: "缺少你的神评…",
        visibleUid: "",
        enableShareCircle: !1,
        enableGroupVisibleControl: !0,
        showGuide: !1,
        spreadShareBtn: !0,
        goHomeBtnText: "点击回首页，看更多",
        navigateBackHome: !1,
        commentLaunchAppReportParams: {
            successOpType: m.OP_TYPE.open_comment_click,
            failOpType: m.OP_TYPE.open_comment_failure,
            fromPage: m.FROM_PAGE.normal_detail_page
        },
        fixedLaunchAppReportParams: {
            successOpType: m.OP_TYPE.open_fixed_click,
            failOpType: m.OP_TYPE.open_fixed_failure,
            fromPage: m.FROM_PAGE.normal_detail_page
        }
    },
    onLoad: function(e) {
        Object.assign(this, {
            pullDownStatus: 0,
            getRecommendReq: l.getRecommend,
            obGoHomeDom: this.createIntersectionObserver(),
            $obCommentDom: this.createIntersectionObserver(),
            preRenderHomeTimer: null
        }), this.init(), this.data.isFromApp && (0, m.report)({
            opType: m.OP_TYPE.open_fixed_exposure,
            fromPage: this.data.fromPage,
            articleId: this.data.articleId
        }), (0, m.report)({
            opType: m.OP_TYPE.detail_page_end,
            fromPage: this.data.fromPage,
            articleId: this.query.id
        });
    },
    onShow: function(e) {},
    onReady: function() {
        var e = this;
        (0, r.getComment)(this.query.id).then(function(t) {
            e.setData({
                commentList: t.list.slice(0, 2),
                isForbidden: t.isForbidden || !1,
                commentLoading: !1
            });
            var o = e.createIntersectionObserver();
            o.relativeToViewport().observe(".title", function() {
                (0, m.report)({
                    opType: m.OP_TYPE.hot_comment_exposure,
                    fromPage: e.data.fromPage,
                    articleId: e.data.articleId,
                    articleType: e.data.atype
                }), o.disconnect();
            });
        }).catch(function(t) {
            o.default.error("获取评论失败：", t), e.setData({
                commentLoading: !1
            });
        }), this.getRecommendReq(this.query.id).then(function(t) {
            e.setData({
                recommendList: t.slice(0, 10)
            });
        }).catch(function(e) {
            o.default.error("获取推荐列表失败", e);
        }).then(function() {
            e.preRenderHomeTimer = setTimeout(function() {
                i.home.emit(i.home.event.renderRecommendPage);
            }, 5e3);
        });
    },
    onHide: function() {
        clearTimeout(this.preRenderHomeTimer);
    },
    onUnload: function() {
        clearTimeout(this.preRenderHomeTimer), i.comment.unWatch("commentCountMap.".concat(this.query.id), this.updateCommentCount);
    },
    onShareAppMessage: function(e) {
        var o = {
            title: this.data.title,
            atype: this.data.atype,
            id: this.data.articleId,
            uid: i.userInfo.openid,
            source: "wxapp"
        }, a = {
            fromPage: this.data.fromPage
        };
        if ("button" === e.from) {
            var r = t.default.get(e, "target.dataset", {});
            a.pageArea = r.pageArea;
        } else "menu" === e.from && (a.pageArea = m.PAGE_AREA.menu);
        return (0, n.genArticleShareMsg)(o, a);
    },
    onscroll: function(e) {
        var t = this, o = this.data, a = o.spreadShareBtn, i = o.platform, n = o.isFromApp, r = o.articleBlock, m = o.recommendList;
        a && this.setData({
            spreadShareBtn: !1
        }), "ios" !== i || n || r || 0 === m.length || this.createSelectorQuery().select(".scroll-view").fields({
            size: !0
        }, function(o) {
            var a = o.height || 0, i = e && e.detail || {}, n = (i.scrollHeight || 0) - (i.scrollTop || 0) - a < -40 ? 1 : 0;
            t.pullDownStatus !== n && 1 === n && wx.vibrateShort({}), t.pullDownStatus = n;
        }).exec();
    },
    ontouchend: function() {
        var e = this.data, t = e.fromPage, o = e.platform, a = e.isFromApp, i = e.articleBlock, n = e.recommendList;
        "ios" !== o || a || i || 0 === n.length || 1 === this.pullDownStatus && (wx.switchTab({
            url: s.PAGE_PATH.HOME
        }), (0, m.report)({
            opType: m.OP_TYPE.back_home_click,
            fromPage: t,
            articleId: this.query.id
        }));
    },
    onChangeShareBtnSpread: function(e) {
        var o = t.default.get(e, "detail.spread");
        this.setData({
            spreadShareBtn: o
        });
    },
    onCommentPanelChangeState: function(e) {
        var o = !t.default.get(e, "detail.commentShow");
        this.setData({
            enableGroupVisibleControl: o
        });
    },
    tapCommentReply: function(e) {
        this.data.isFromApp || (0, s.navigateTo)(s.PAGE_PATH.COMMENT_DETAIL, e && e.detail);
    },
    tapCommentContent: function(e) {
        this.data.isFromApp || (0, s.navigateTo)(s.PAGE_PATH.COMMENT_DETAIL, e && e.detail);
    },
    tapAllCommentBtn: function() {
        this.data.isFromApp || ((0, m.report)({
            opType: m.OP_TYPE.all_comment_click,
            fromPage: this.data.fromPage,
            articleId: this.data.articleId,
            articleType: this.data.atype
        }), (0, s.navigateTo)(s.PAGE_PATH.COMMENT_NORMAL, {
            id: this.data.articleId,
            atype: this.data.atype,
            title: this.data.title,
            comeFrom: "normal"
        }));
    },
    tapCommentBtn: function() {
        var e = {
            articleId: this.data.articleId,
            commentId: this.data.commentId,
            pubType: 1
        }, t = i.article.getSyncFn(this.data.syncId);
        t && (e.callback = t, i.article.showInputPanel(e)), (0, m.report)({
            opType: m.OP_TYPE.comment_icon_click,
            fromPage: this.data.fromPage,
            articleId: this.data.articleId,
            articleType: this.data.atype,
            commentCount: this.data.commentCount
        });
    },
    tapGoHome: function() {
        wx.switchTab({
            url: s.PAGE_PATH.HOME
        }), (0, m.report)({
            opType: m.OP_TYPE.back_home_click,
            fromPage: this.data.fromPage,
            articleId: this.query.id
        });
    },
    init: function() {
        var e = this;
        i.home.backFromShare = !0;
        var t = {
            syncId: "syncid_" + Math.random().toString(36).substr(2, 10),
            articleId: this.query.id
        };
        try {
            var n = i.systemInfo.menuButtonRect;
            ("devtools" === i.systemInfo.platform || (0, a.versionGte)(i.systemInfo.version, "7.0.0")) && (t.barHeight = n.bottom + n.height / 4);
        } catch (e) {
            o.default.error("读取systemInfo.menuButtonRect失败", e, i.systemInfo.menuButtonRect);
        }
        return "1" === this.query.fromApp ? (this.getRecommendReq = l.getShareRecommend, 
        t.isFromApp = !0, t.fromPage = m.FROM_PAGE.normal_share_detail_page, t.goHomeBtnText = "去首页，看更多热点资讯", 
        t.articleScheme = (0, c.getScheme)({
            fromPage: t.fromPage,
            bossName: "fixed",
            options: {
                nm: this.query.id
            }
        }), t.commentScheme = (0, c.getScheme)({
            fromPage: t.fromPage,
            bossName: "comment",
            options: {
                nm: this.query.id,
                iscomment: 1
            }
        })) : "ios" === i.systemInfo.platform && (t.goHomeBtnText = "上滑回到首页"), "1" === this.query.fromJump ? (t.navigateBackHome = !0, 
        this.query.openGId ? (o.default.info("push渠道进入分享页，openGId = ", this.query.openGId), 
        Object.assign(t, {
            inputPlaceholder: "跟群友一起讨论吧",
            enableShareCircle: !0,
            visibleUid: this.query.openGId,
            openGId: this.query.openGId
        })) : (o.default.info("分享渠道进入分享页"), (0, l.getOpenGid)().then(function(t) {
            o.default.info("调用getOpenGid结果:", t), t && e.setData({
                inputPlaceholder: "跟群友一起讨论吧",
                enableShareCircle: !0,
                visibleUid: t,
                openGId: t
            });
        }))) : this.query.openGId && (o.default.info("从我的-分享圈历史进入分享页", this.query.openGId), 
        Object.assign(t, {
            inputPlaceholder: "跟群友一起讨论吧",
            enableShareCircle: !0,
            visibleUid: this.query.openGId,
            openGId: this.query.openGId,
            isFromHistory: !0
        })), this.setData(t), this.updateCommentCount = this.updateCommentCount.bind(this), 
        i.comment.watch("commentCountMap.".concat(this.query.id), this.updateCommentCount), 
        this.updateCommentCount(i.comment.commentCountMap[this.query.id]), (0, l.getContent)(this.query.id).then(function(t) {
            var o = {
                articleId: t.articleId,
                atype: t.atype,
                commentId: t.commentId,
                posterShareImg: t.posterShareImg,
                title: t.title,
                intro: t.intro,
                introName: t.introName,
                content: t.content,
                truthContent: t.truthContent,
                timeline: t.timeline || {},
                special: t.special || {},
                topic: t.topic || {},
                chlid: t.chlid || "",
                chlicon: t.chlicon || "",
                chlname: t.chlname || "",
                date: t.date,
                remark: t.remark,
                articleBlock: 1 === t.relateBlock || 1 === t.hotNewsBlock,
                pageStatus: d.ready,
                scopeData: {
                    type: "general",
                    uniq_id: t.articleId,
                    title: t.title,
                    thumbs: t.posterShareImg || "http://mat1.gtimg.com/www/images/news_minipro/news_default_poster.png"
                }
            };
            o.articleBlock && e.data.enableShareCircle && Object.assign(o, {
                inputPlaceholder: "缺少你的神评…",
                enableShareCircle: !1,
                visibleUid: "",
                openGId: ""
            }), e.setData(o), setTimeout(function() {
                e.obGoHomeDom.relativeToViewport().observe(".go-home-btn", function() {
                    (0, m.report)({
                        opType: m.OP_TYPE.back_home_exposure,
                        fromPage: e.data.fromPage,
                        articleId: e.data.articleId
                    }), e.obGoHomeDom.disconnect();
                }), e.$obCommentDom.relativeToViewport().observe(".comment-block", function() {
                    (0, m.report)({
                        opType: m.OP_TYPE.open_comment_exposure,
                        fromPage: e.data.fromPage,
                        articleId: e.data.articleId
                    }), e.$obCommentDom.disconnect();
                });
            }, 1e3), (0, a.versionGte)(i.systemInfo.version, "6.7.1") && e.setData({
                showGuide: !0
            });
        }).catch(function(t) {
            o.default.error("获取文章信息失败:", t), t && 1 === t.ret ? e.setData({
                pageStatus: d.delete
            }) : e.setData({
                pageStatus: d.error
            });
        });
    },
    updateCommentCount: function(e) {
        e && e !== this.data.commentCount && this.setData({
            commentCount: e,
            commentCountStr: (0, a.formatCount)(e) || "评论"
        });
    }
});