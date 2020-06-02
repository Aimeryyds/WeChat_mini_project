var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/defineProperty")), a = e(require("../../utils/mlodash")), i = e(require("../../utils/logger")), n = e(require("../../network/login")), o = require("../../store/index"), l = require("../../services/comment"), r = require("../../services/report");

function s(e, t) {
    var a = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), a.push.apply(a, i);
    }
    return a;
}

function u(e) {
    for (var a = 1; a < arguments.length; a++) {
        var i = null != arguments[a] ? arguments[a] : {};
        a % 2 ? s(Object(i), !0).forEach(function(a) {
            (0, t.default)(e, a, i[a]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : s(Object(i)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
        });
    }
    return e;
}

Component({
    properties: {
        enableShareCircle: Boolean,
        enableGroupVisibleControl: Boolean,
        visibleLabelText: {
            type: String,
            value: "群友可见"
        },
        visibleUid: String,
        isBlackTheme: Boolean,
        fromPage: String,
        placeholder: {
            type: String,
            value: "缺少你的神评…"
        }
    },
    data: {
        disableSubmit: !0,
        show: !1,
        focus: !1,
        value: "",
        inputPanelBottom: 0,
        onlyGroupVisible: !0
    },
    created: function() {
        Object.assign(this, {
            articleId: "",
            commentId: "",
            replyId: "",
            callback: [],
            notBlur: !1,
            pubType: null
        });
    },
    attached: function() {
        o.global.systemKeyboardHeight > 0 && this.setData({
            inputPanelBottom: o.global.systemKeyboardHeight
        }), this.showInputPanel = this.showInputPanel.bind(this), o.article.on(o.article.event.showInputPanel, this.showInputPanel);
    },
    ready: function() {},
    detached: function() {
        this.callback = [], o.article.off(o.article.event.showInputPanel, this.showInputPanel);
    },
    pageLifetimes: {
        show: function() {
            this.pageIsShow = !0;
        },
        hide: function() {
            this.pageIsShow = !1, this.hideInputPanel(!1);
        }
    },
    methods: {
        tapShade: function() {
            this.hideInputPanel(!1);
        },
        submit: function(e) {
            var t = this;
            if (this.data.disableSubmit) return wx.showToast({
                icon: "none",
                title: "请输入内容"
            }), void this.hideInputPanel(!1);
            wx.showLoading({
                mask: !0
            });
            var i = a.default.get(e, "detail.value", ""), n = "";
            n = a.default.isObject(i) ? i.content || "" : i;
            var s = {
                article_id: this.articleId,
                comment_id: this.commentId,
                content: n
            };
            this.replyId && (s.rid = this.replyId), this.data.enableShareCircle && this.data.visibleUid && this.data.onlyGroupVisible && (s.openGId = this.data.visibleUid, 
            s.owner = o.shareInfo.uid), (0, l.postComment)(s).then(function(e) {
                wx.hideLoading(), wx.showToast({
                    title: "发表成功"
                }), o.comment.deleteContentCache({
                    articleId: t.articleId,
                    commentId: t.commentId,
                    replyId: t.replyId
                }), t.hideInputPanel(!0, {
                    articleId: t.articleId,
                    commentId: t.commentId,
                    parentReplyId: t.replyId,
                    replyId: e,
                    content: n
                }), (0, r.report)({
                    fromPage: t.data.fromPage,
                    opType: r.OP_TYPE.publish_succ,
                    articleId: t.articleId,
                    commentId: t.commentId,
                    replyId: t.replyId,
                    openGId: s.openGId || "",
                    pubType: t.pubType
                });
            }).catch(function(e) {
                wx.hideLoading(), wx.showToast({
                    icon: "none",
                    title: "发表失败"
                }), (0, r.report)({
                    fromPage: t.data.fromPage,
                    opType: r.OP_TYPE.publish_fail,
                    articleId: t.articleId,
                    commentId: t.commentId,
                    replyId: t.replyId,
                    openGId: s.openGId || "",
                    pubType: t.pubType
                }), t.hideInputPanel(!1, e);
            }), (0, r.report)({
                fromPage: this.data.fromPage,
                opType: r.OP_TYPE.publish_comment_click,
                articleId: this.articleId,
                commentId: this.commentId,
                replyId: this.replyId,
                pubType: this.pubType
            });
        },
        onInput: function(e) {
            var t = e && e.detail || {}, a = (t.value || "").trim();
            t.height;
            this.updateSubmitState(a), o.comment.updateContentCache({
                articleId: this.articleId,
                commentId: this.commentId,
                replyId: this.replyId,
                value: a
            });
        },
        onFocus: function(e) {
            var t = a.default.get(e, "detail.height", 0);
            o.global.systemKeyboardHeight = t, this.data.inputPanelBottom !== t && this.setData({
                inputPanelBottom: t
            });
        },
        onBlur: function(e) {
            if (this.notBlur) return this.setData({
                focus: !1
            }), void (this.notBlur = !1);
            this.hideInputPanel(!1);
        },
        onCheckboxChange: function(e) {
            var t = this;
            this.notBlur = !0;
            var i = -1 !== a.default.get(e, "detail.value", []).indexOf("onlyGroupVisible");
            this.setData({
                onlyGroupVisible: i
            }), setTimeout(function() {
                t.setData({
                    focus: !0
                });
            }, 50);
        },
        updateSubmitState: function(e) {
            e.length && this.data.disableSubmit ? this.setData({
                disableSubmit: !1
            }) : e.length || this.data.disableSubmit || this.setData({
                disableSubmit: !0
            });
        },
        showInputPanel: function(e) {
            var t = this;
            if (this.pageIsShow) {
                e = u({}, e), a.default.has(e, "commentId") || i.default.error("Error: showInputPanel event 参数commentId是必填的"), 
                a.default.has(e, "callback") || i.default.error("Error: showInputPanel event 参数callback是必填的");
                var l = o.comment.getContentCache(e);
                (0, n.default)().then(function() {
                    var i = {
                        value: e.value || l || "",
                        focus: !0
                    };
                    t.data.show || (0 === t.data.inputPanelBottom ? i.show = !0 : setTimeout(function() {
                        t.setData({
                            show: !0
                        });
                    }, 150)), e.value && delete e.value;
                    var n = !i.value;
                    n !== t.data.disableSubmit && (i.disableSubmit = n), e.placeholder && (i.placeholder = e.placeholder, 
                    delete e.placeholder), t.data.enableShareCircle && t.data.visibleUid && !t.data.enableGroupVisibleControl && !t.data.onlyGroupVisible && (i.onlyGroupVisible = !0), 
                    a.default.isEmpty(i) || t.setData(i), a.default.isEmpty(e) || Object.assign(t, e), 
                    (0, r.report)({
                        fromPage: t.data.fromPage,
                        opType: r.OP_TYPE.publish_comment_show,
                        articleId: t.articleId,
                        commentId: t.commentId,
                        replyId: t.replyId,
                        pubType: t.pubType
                    });
                });
            }
        },
        hideInputPanel: function() {
            var e = this, t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], i = arguments.length > 1 ? arguments[1] : void 0;
            this.setData({
                show: !1,
                focus: !1
            }), a.default.isArray(this.callback) ? this.callback.forEach(function(a) {
                return e.callbackResult(t, a, i);
            }) : this.callbackResult(t, this.callback, i);
        },
        callbackResult: function(e, t, i) {
            a.default.isObject(i) && (i = u({}, i, {
                notAppendGroupFake: !1 === this.data.onlyGroupVisible
            })), e ? a.default.isFunction(t.success) && t.success(i) : a.default.isFunction(t.fail) && t.fail(i);
        }
    }
});