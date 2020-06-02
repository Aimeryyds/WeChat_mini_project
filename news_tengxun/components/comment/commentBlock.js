var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../@babel/runtime/helpers/defineProperty")), a = e(require("../../utils/mlodash")), n = e(require("../../utils/logger")), i = require("../../services/comment"), o = require("../../store/index");

Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        bgLoading: {
            type: Boolean,
            value: !0
        },
        articleId: String,
        atype: Number,
        commentId: String,
        commentList: Array,
        bnext: {
            type: Number,
            value: 0
        },
        isForbidden: {
            type: Boolean,
            value: !1
        },
        lastReplyId: String,
        height: {
            type: String,
            observer: function(e, t) {
                e && e !== t && this.data.infinity && !this.data.scrollViewStyle && this.setData({
                    wrapperStyle: "height: ".concat(e, "px;")
                });
            }
        },
        scrollViewStyle: {
            type: String,
            observer: function(e) {
                e && this.setData({
                    wrapperStyle: e
                });
            }
        },
        scrollTop: {
            type: Number,
            value: 0
        },
        infinity: {
            type: Boolean,
            value: !0
        },
        isBlackTheme: Boolean,
        customBelow: Boolean,
        customNoComment: Boolean,
        showReplyCount: Boolean,
        showReply: {
            type: Boolean,
            value: !0
        },
        enableTapReplyItem: {
            type: Boolean,
            value: !0
        },
        enableShowAll: {
            type: Boolean,
            value: !0
        },
        lineCount: {
            type: Number,
            value: 8
        },
        syncId: {
            type: String,
            observer: function(e) {
                e && o.article.addSyncFn(e, this.syncFn);
            }
        },
        openGId: String,
        reqTimestamp: Number,
        fromPage: String,
        disableLaunchApp: {
            type: Boolean,
            value: !0
        },
        appParameter: String,
        launchReportParams: Object,
        scrollIntoView: String
    },
    data: {
        fakeList: [],
        wrapperStyle: ""
    },
    created: function() {
        var e = this;
        Object.assign(this, {
            requesting: !1,
            syncFn: {
                success: function(t) {
                    return e.appendFakeComment(t);
                },
                fail: function(e) {
                    e && n.default.error("评论出错:", e);
                }
            }
        });
    },
    attached: function() {},
    detached: function() {
        o.article.deleteSyncFn(this.data.syncId, this.syncFn);
    },
    methods: {
        onReply: function(e) {
            this.triggerEvent("reply", e && e.detail);
        },
        onTapContent: function(e) {
            this.triggerEvent("tapContent", e && e.detail);
        },
        onTapMore: function(e) {
            this.getCommentData();
        },
        onScrollToLower: function(e) {
            this.getCommentData();
        },
        onAddComment: function() {
            var e = this, t = {
                articleId: this.data.articleId,
                commentId: this.data.commentId,
                pubType: 1,
                callback: {
                    success: function(t) {
                        return e.appendFakeComment(t);
                    },
                    fail: function(e) {
                        e && n.default.error("评论出错:", e);
                    }
                }
            };
            o.article.showInputPanel(t);
        },
        onDelete: function(e) {
            var t = this, o = a.default.get(e, "currentTarget.dataset", {}), r = o.page, s = o.index, l = e && e.detail || {}, c = String(l.replyId), d = {
                comment_id: l.commentId,
                article_id: l.articleId,
                parent_reply_id: l.parentReplyId,
                reply_id: c
            };
            -1 !== c.indexOf("fake") ? (this.delCommentDom(s, r), (0, i.delComment)(d)) : (0, 
            i.delComment)(d).then(function(e) {
                t.delCommentDom(s, r);
            }).catch(function(e) {
                n.default.error("删除评论出错: ", e), wx.showToast({
                    icon: "none",
                    title: "删除失败"
                });
            });
        },
        getCommentData: function() {
            var e = this;
            if (!this.requesting && 0 !== this.data.bnext) {
                var a = this.data, o = a.articleId, r = a.reqTimestamp, s = a.lastReplyId, l = a.openGId;
                this.requesting = !0, (this.data.openGId ? (0, i.getShareComment)(o, l, r, s) : (0, 
                i.getComment)(o, s)).then(function(a) {
                    e.data.lastReplyId = a.lastReplyId;
                    var n = (0, t.default)({}, "commentList[".concat(e.data.commentList.length, "]"), a.list);
                    a.bnext !== e.data.bnext && (n.bnext = a.bnext), e.setData(n), e.requesting = !1;
                }).catch(function(t) {
                    e.requesting = !1, n.default.error("拉取评论列表出错: ", t);
                });
            }
        },
        delCommentDom: function(e, n) {
            if (void 0 === n) this.data.fakeList.splice(e, 1), this.setData({
                fakeList: this.data.fakeList
            }); else {
                var i = this.data.commentList[n];
                a.default.isArray(i) && (i.splice(e, 1), this.setData((0, t.default)({}, "commentList[".concat(n, "]"), i)));
            }
            wx.showToast({
                title: "删除成功"
            });
        },
        appendFakeComment: function(e) {
            if (!this.data.openGId || !e.notAppendGroupFake) {
                var t = (0, i.genFakeItem)(e);
                if (this.data.fakeList.unshift(t), this.setData({
                    fakeList: this.data.fakeList
                }), this.data.openGId && e) {
                    var n = o.article.syncDanmuMap.get(this.data.syncId);
                    a.default.isFunction(n) && n(e);
                }
            }
        }
    }
});