var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../@babel/runtime/helpers/defineProperty")), a = t(require("../../utils/mlodash")), i = t(require("../../utils/logger")), n = require("../../services/comment"), r = require("../../store/index"), o = require("../../services/jump"), l = require("../../utils/common"), d = require("../../services/report"), s = require("../../utils/parser");

Component({
    properties: {
        isBlackTheme: Boolean,
        nickName: String,
        avatarUrl: String,
        coral_uid: String,
        uin: String,
        chlid: String,
        commentId: String,
        replyId: {
            type: String,
            observer: function(t) {
                t && (this.updateLikeCount(r.comment.likeCountMap[t]), r.comment.watch("likeCountMap.".concat(t), this.updateLikeCount), 
                this.updateReplyCount(r.comment.commentCountMap[t]), r.comment.watch("commentCountMap.".concat(t), this.updateReplyCount));
            }
        },
        parentReplyId: String,
        articleId: String,
        atype: Number,
        content: {
            type: String,
            observer: function(t) {
                this.setData({
                    emojiContent: (0, s.emojiParser)(t || "")
                });
            }
        },
        image: Object,
        replyList: {
            type: Array,
            observer: function(t) {
                if (t) {
                    this.lastReplyId = a.default.get(t, "[".concat(t.length - 1, "].replyId"), "");
                    var e = r.comment.commentCountMap[this.data.replyId];
                    this.bnext = e > t.length ? 1 : 0, this.restReplyCount = e - t.length, this.setData({
                        replyData: [ t ],
                        restReplyCountStr: (0, l.formatCount)(this.restReplyCount)
                    });
                }
            }
        },
        pubTime: String,
        isMe: Boolean,
        showReply: {
            type: Boolean,
            value: !0
        },
        isFake: Boolean,
        canLoadMoreReply: Boolean,
        isHotComment: Boolean,
        fromPage: String,
        lineCount: {
            type: Number,
            value: 8
        },
        enableShowAll: Boolean,
        replyLineCount: {
            type: Number,
            value: 3
        },
        replyEnableShowAll: {
            type: Boolean,
            value: !0
        },
        enableTapReplyItem: Boolean,
        disableLike: Boolean,
        showReplyCount: Boolean,
        status: Number,
        isDeleted: Boolean
    },
    data: {
        fakeData: [],
        replyData: null,
        isAgreed: !1,
        agreeCountStr: "",
        replyCountStr: "",
        restReplyCountStr: "",
        isClicked: !1,
        showImg: !1
    },
    created: function() {
        Object.assign(this, {
            lastReplyId: "",
            bnext: 0,
            requesting: !1,
            restReplyCount: 0
        }), this.updateLikeCount = this.updateLikeCount.bind(this), this.updateReplyCount = this.updateReplyCount.bind(this);
    },
    attached: function() {},
    detached: function() {
        r.comment.unWatch("likeCountMap.".concat(this.data.replyId), this.updateLikeCount), 
        r.comment.unWatch("commentCountMap.".concat(this.data.replyId), this.updateReplyCount);
    },
    methods: {
        tapMedia: function() {
            (0, o.navigateTo)(o.PAGE_PATH.USER, {
                coral_uid: this.data.coral_uid,
                uin: this.data.uin,
                mediaId: this.data.chlid
            });
        },
        tapReplyBtn: function(t) {
            var e = this, a = {
                articleId: this.data.articleId,
                commentId: this.data.commentId,
                replyId: this.data.replyId,
                pubType: 2
            };
            this.data.showReply ? (a.callback = {
                success: function(t) {
                    var a = (0, n.genFakeItem)(t);
                    e.data.fakeData.unshift(a), e.setData({
                        fakeData: e.data.fakeData
                    });
                },
                fail: function(t) {
                    t && i.default.error("评论出错:", t);
                }
            }, r.article.showInputPanel(a), (0, d.report)({
                fromPage: this.data.fromPage,
                opType: d.OP_TYPE.reply_comment_click,
                articleId: this.data.articleId,
                commentId: this.data.commentId,
                replyId: this.data.replyId,
                articleType: this.data.atype,
                isGood: this.data.isHotComment ? 1 : 0
            })) : (a.atype = this.data.atype, this.triggerEvent("reply", a));
        },
        tapContent: function(t) {
            var e = {
                articleId: this.data.articleId,
                commentId: this.data.commentId,
                replyId: this.data.replyId,
                atype: this.data.atype
            };
            this.triggerEvent("tapContent", e);
        },
        tapDelete: function(t) {
            if (a.default.get(t, "currentTarget.dataset", {}).replyId === this.data.replyId) {
                var e = {
                    articleId: this.data.articleId,
                    commentId: this.data.commentId,
                    replyId: this.data.replyId,
                    parentReplyId: this.data.parentReplyId
                };
                this.triggerEvent("delete", e);
            }
        },
        tapLike: function() {
            this.data.isAgreed || (this.data.isAgreed = !0, this.setData({
                isClicked: !0
            }), (0, n.postLike)({
                article_id: this.data.articleId,
                comment_id: this.data.commentId,
                rid: this.data.replyId
            })), (0, d.report)({
                fromPage: this.data.fromPage,
                opType: d.OP_TYPE.like_comment_click,
                articleId: this.data.articleId,
                commentId: this.data.commentId,
                replyId: this.data.replyId,
                articleType: this.data.atype,
                isGood: this.data.isHotComment ? 1 : 0
            });
        },
        tapImage: function(t) {
            var e = a.default.get(this.data, "image.origUrl");
            e && wx.previewImage({
                current: e,
                urls: [ e ]
            });
        },
        tapReplyContent: function() {
            this.data.enableTapReplyItem && this.tapDetail();
        },
        tapDetail: function() {
            (0, o.navigateTo)(o.PAGE_PATH.COMMENT_DETAIL, {
                articleId: this.data.articleId,
                commentId: this.data.commentId,
                replyId: this.data.replyId,
                atype: this.data.atype
            });
        },
        tapMoreReply: function(t) {
            var a = this;
            if (!this.requesting && 0 !== this.bnext) {
                this.requesting = !0;
                var r = {
                    article_id: this.data.articleId,
                    comment_id: this.data.commentId,
                    orig_id: this.data.replyId
                };
                this.lastReplyId && (r.reply_id = this.lastReplyId), (0, n.getReply3)(r).then(function(t) {
                    var i;
                    a.lastReplyId = t.lastReplyId, a.bnext = t.bnext, a.restReplyCount = a.restReplyCount - t.replyList.length, 
                    a.setData((i = {}, (0, e.default)(i, "replyData[".concat(a.data.replyData.length, "]"), t.replyList), 
                    (0, e.default)(i, "restReplyCountStr", (0, l.formatCount)(a.restReplyCount)), i)), 
                    a.requesting = !1;
                }).catch(function(t) {
                    a.requesting = !1, i.default.error("获取三级评论失败: ", t);
                });
            }
        },
        onReplyDelete: function(t) {
            var e = this, r = a.default.get(t, "currentTarget.dataset", {}), o = r.page, l = r.index, d = t && t.detail || {}, s = String(d.replyId), p = {
                comment_id: d.commentId,
                article_id: d.articleId,
                parent_reply_id: d.parentReplyId,
                reply_id: s
            };
            -1 !== s.indexOf("fake") ? (this.delCommentDom(l, o), (0, n.delComment)(p)) : (0, 
            n.delComment)(p).then(function(t) {
                e.delCommentDom(l, o);
            }).catch(function(t) {
                i.default.error("删除评论出错: ", t), wx.showToast({
                    icon: "none",
                    title: "删除失败"
                });
            });
        },
        delCommentDom: function(t, i) {
            if (void 0 === i) this.data.fakeData.splice(t, 1), this.setData({
                fakeData: this.data.fakeData
            }); else {
                var n = this.data.replyData[i];
                a.default.isArray(n) && (n.splice(t, 1), this.setData((0, e.default)({}, "replyData[".concat(i, "]"), n)));
            }
            wx.showToast({
                title: "删除成功"
            });
        },
        updateLikeCount: function(t) {
            var e = r.comment.hasLikedMap[this.data.replyId] || !1, a = (0, l.formatCount)(t);
            this.setData({
                agreeCountStr: a,
                isAgreed: e
            });
        },
        updateReplyCount: function(t) {
            var e = (0, l.formatCount)(t);
            this.setData({
                replyCountStr: e
            });
        },
        onImgLoad: function() {
            this.setData({
                showImg: !0
            });
        }
    }
});