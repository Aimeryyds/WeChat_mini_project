var t = require("../../@babel/runtime/helpers/interopRequireDefault"), e = t(require("../../utils/mlodash")), i = t(require("../../utils/logger")), a = require("../../utils/time"), o = require("../../utils/common"), n = require("../../services/jump"), d = require("../../services/comment"), r = require("../../store/index");

Component({
    properties: {
        comment: Object,
        reply: Object,
        like: {
            type: Object,
            value: {},
            observer: function(t) {
                var e = this.data.comment.id;
                e && (r.comment.unWatch("likeCountMap.".concat(e), this.updateLikeCount), r.comment.watch("likeCountMap.".concat(e), this.updateLikeCount), 
                this.updateLikeCount(r.comment.likeCountMap[e]));
            }
        },
        article: {
            type: Object,
            observer: function(t) {
                t && t.id;
                var e = t && t.type;
                56 === e || 101 === e || 4 === e || 118 === e || 303 === e ? this.setData({
                    isVideo: !0
                }) : 302 !== e && 303 !== e || this.setData({
                    isWeibo: !0
                });
            }
        },
        pubTimeTs: {
            type: Number,
            value: 0,
            observer: function(t) {
                this.setData({
                    pubTime: this.distanceInWords(t)
                });
            }
        },
        withReplyContent: Boolean,
        withReplyBtn: Boolean,
        withDeleteBtn: Boolean,
        withLikeAvatar: Boolean,
        withReplyStatus: Boolean,
        withReplyTips: Boolean,
        withLike: Boolean,
        withBottom: Boolean,
        disableTapUser: Boolean
    },
    data: {
        likeCountStr: "",
        pubTime: "",
        isVideo: !1,
        isWeibo: !1,
        isDeleted: !1
    },
    created: function() {
        this.updateLikeCount = this.updateLikeCount.bind(this);
    },
    detached: function() {
        this.data.like && this.data.like.replyId && r.comment.unWatch("likeCountMap.".concat(this.data.like.replyId), this.updateLikeCount);
    },
    methods: {
        tapReplyContent: function() {
            this.data.withLike || (0, n.navigateTo)(n.PAGE_PATH.COMMENT_DETAIL, {
                id: this.data.article.id,
                atype: this.data.article.type,
                commentId: this.data.article.commentId,
                replyId: this.data.reply.id
            });
        },
        tapComment: function() {
            (0, n.navigateTo)(n.PAGE_PATH.COMMENT_DETAIL, {
                id: this.data.article.id,
                atype: this.data.article.type,
                commentId: this.data.article.commentId,
                replyId: this.data.comment.id
            });
        },
        tapArticle: function() {
            -1 === this.data.article.type || (0, n.navigateTo)((0, n.atypeToUrl)(this.data.article.type, {
                id: this.data.article.id
            }));
        },
        tapMedia: function() {
            if (this.data.disableTapUser) this.tapReplyContent(); else {
                var t = this.data.reply;
                /^\d+$/.test(t.mediaId) ? (0, n.navigateTo)(n.PAGE_PATH.USER, {
                    mediaId: t.mediaId
                }) : (0, n.navigateTo)(n.PAGE_PATH.USER, {
                    coral_uid: t.coral_uid,
                    uin: t.uin
                });
            }
        },
        tapDelete: function() {
            var t = this;
            wx.showModal({
                title: "确定删除此条内容吗?",
                confirmColor: "#419bf9",
                success: function(e) {
                    e && e.confirm && (0, d.delComment)({
                        comment_id: t.data.article.commentId,
                        article_id: t.data.article.id,
                        reply_id: t.data.reply.id
                    }).then(function(e) {
                        t.setData({
                            isDeleted: !0
                        });
                    }).catch(function(t) {
                        i.default.error("删除评论出错: ", t), wx.showToast({
                            icon: "none",
                            title: "删除失败"
                        });
                    });
                }
            });
        },
        tapLikeAvatar: function() {
            if (this.data.like.hasAvatar) if (this.data.like.count > 1) (0, n.navigateTo)(n.PAGE_PATH.COMMENT_LIKE, {
                commentId: this.data.article.commentId,
                replyId: this.data.comment.id
            }); else {
                var t = e.default.get(this.data.like, "userList[0]", {});
                (0, n.navigateTo)(n.PAGE_PATH.USER, {
                    uin: t.uin,
                    coral_uid: t.coral_uid,
                    mediaId: t.mediaId
                });
            }
        },
        distanceInWords: function(t) {
            t = Number(t) || Date.now() / 1e3;
            var e = new Date().getTime() / 1e3 - t, i = "";
            if (e < 3600) {
                var o = Math.floor(e / 60);
                i = o ? o + "分钟前" : "刚刚";
            } else if (e < 9e4) i = Math.floor(e / 60 / 60) + "小时前"; else {
                var n = new Date(1e3 * t), d = (0, a.addLeftZero)(n.getDate());
                i = (0, a.addLeftZero)(n.getMonth() + 1) + "/" + d;
            }
            return i;
        },
        updateLikeCount: function(t) {
            t && t !== this.data.like.count && this.setData({
                likeCountStr: (0, o.formatCount)(t) || "评论"
            });
        }
    }
});