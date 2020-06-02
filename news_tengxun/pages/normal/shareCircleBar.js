var t = require("../../@babel/runtime/helpers/interopRequireDefault"), n = (t(require("../../utils/mlodash")), 
t(require("../../utils/logger"))), e = require("../../store/index"), a = require("./service"), i = require("../../services/report");

Component({
    properties: {
        openGId: {
            type: String,
            observer: function(t) {
                var n = this;
                this.init().then(function() {
                    setTimeout(function() {
                        n.setData({
                            animation: !0
                        });
                    }, 5e3);
                });
            }
        },
        articleId: String,
        commentId: String,
        atype: String,
        title: String,
        posterShareImg: String,
        isForbidden: Boolean,
        inputPlaceholder: String,
        syncId: {
            type: String,
            observer: function(t) {
                var n = this;
                t && e.article.syncDanmuMap.set(t, function(t) {
                    return n.appendFakeComment(t);
                });
            }
        },
        isFromHistory: Boolean,
        fromPage: String
    },
    data: {
        OP_TYPE: i.OP_TYPE,
        lang: "zh_CN",
        nickName: "群友",
        avatarUrl: "",
        hasThanked: !1,
        commentCount: 0,
        thanksCount: 0,
        thanksList: [],
        readCount: 0,
        commentAndThanksList: [],
        enableTapReplyItem: !1,
        replyId: "",
        commentShow: !1,
        animation: !1,
        showGuide: !1,
        isIphoneX: e.systemInfo.isIphoneX
    },
    created: function() {
        Object.assign(this, {
            commentListCache: [],
            animationFinished: !1,
            commentListAnimationCounter: 0
        });
    },
    ready: function() {},
    attached: function() {},
    detached: function() {
        e.article.syncDanmuMap.delete(this.data.syncId);
    },
    methods: {
        tapBar: function() {
            this.changeCommentShowState({
                commentShow: !0
            }), (0, i.report)({
                fromPage: this.data.fromPage,
                opType: i.OP_TYPE.share_circle_bar_click
            });
        },
        tapThankBtn: function(t) {
            var n = this;
            if (this.data.hasThanked) (0, i.report)({
                fromPage: this.data.fromPage,
                opType: i.OP_TYPE.share_circle_bar_click
            }), this.changeCommentShowState({
                commentShow: !0
            }); else {
                var a = t && t.detail || {}, o = {
                    nickName: e.userInfo.nickName,
                    avatarUrl: e.userInfo.avatarUrl,
                    type: "thanks"
                };
                this.data.thanksList.push(o), this.commentListCache.unshift(o), this.setData({
                    hasThanked: !0,
                    thanksCount: a.count,
                    thanksList: this.data.thanksList,
                    commentAndThanksList: []
                }, function() {
                    n.setData({
                        commentAndThanksList: n.commentListCache
                    });
                });
            }
        },
        tapCommentItem: function(t) {
            this.changeCommentShowState({
                replyId: "list-" + t.currentTarget.dataset.replyid,
                commentShow: !0
            }), (0, i.report)({
                fromPage: this.data.fromPage,
                opType: i.OP_TYPE.comment_danmu_click
            });
        },
        onHideCommentPanel: function() {
            this.changeCommentShowState({
                commentShow: !1
            });
        },
        onCommentAndThanksListAnimationEnd: function(t) {
            var n = this;
            t.target.dataset.index === this.data.commentAndThanksList.length - 1 && (this.setData({
                commentAndThanksList: []
            }), !this.animationFinished && this.commentListAnimationCounter < 3 && setTimeout(function() {
                n.setData({
                    commentAndThanksList: n.commentListCache
                }), n.commentListAnimationCounter += 1;
            }, 2500), 3 === this.commentListAnimationCounter && (this.commentListAnimationCounter += 1, 
            this.animationFinished = !0, this.commentListCache = []));
        },
        init: function() {
            var t = this, o = this.data, s = o.articleId, m = o.openGId, r = o.isFromHistory;
            return (0, a.getShareInfo)(s, m, r).then(function(n) {
                t.commentListAnimationCounter = 1, t.commentListCache = n.commentAndThanksList, 
                t.animationFinished = 0 === n.commentAndThanksList.length, t.setData({
                    lang: e.systemInfo.language,
                    nickName: n.nickName,
                    avatarUrl: n.avatarUrl,
                    commentCount: n.commentCount,
                    readCount: n.readCount,
                    thanksCount: n.thanksCount,
                    hasThanked: n.hasThanked,
                    thanksList: n.thanksList,
                    commentAndThanksList: n.commentAndThanksList,
                    showGuide: !n.hasThanked
                }), n.commentAndThanksList.length && (0, i.report)({
                    opType: i.OP_TYPE.comment_danmu_exposure,
                    fromPage: t.data.fromPage,
                    animationSum: t.commentListCache.length,
                    animationCount: 3
                });
            }).catch(function(a) {
                n.default.error("进入分享圈API出现错误：", a), t.setData({
                    lang: e.systemInfo.language
                });
            });
        },
        changeCommentShowState: function(t) {
            this.setData(t), this.triggerEvent("changeCommentPanelShowState", t);
        },
        appendFakeComment: function(t) {
            var n = this, a = {
                replyId: t.replyId,
                text: t.content,
                avatarUrl: e.userInfo.avatarUrl,
                type: "comment"
            };
            this.commentListCache.unshift(a), this.setData({
                commentAndThanksList: []
            }, function() {
                n.commentListAnimationCounter = 1, n.setData({
                    commentAndThanksList: n.commentListCache
                });
            });
        }
    }
});