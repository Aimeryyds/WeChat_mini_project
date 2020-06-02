require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var t = require("../../services/comment"), e = require("../../services/report"), i = require("../../utils/common"), a = require("../../store/index"), r = require("../../services/jump"), o = require("../../utils/parser");

Component({
    properties: {
        articleId: String,
        atype: String,
        replyId: {
            type: String,
            observer: function(t) {
                this.setData({
                    isAgreed: a.comment.hasLikedMap[t] || !1
                }), a.comment.watch("likeCountMap.".concat(t), this.updateLikeCount);
            }
        },
        commentId: String,
        agreeCount: {
            type: Number,
            observer: function(t) {
                this.setData({
                    agreeCountStr: (0, i.formatCount)(t || 0)
                });
            }
        },
        content: {
            type: String,
            observer: function(t) {
                t && this.setData({
                    emojiContent: (0, o.emojiParser)(t)
                });
            }
        },
        nickName: String,
        imageSrc: String,
        hasRead: Boolean,
        smallScreen: Boolean,
        fromPage: String
    },
    data: {
        isAgreed: !1,
        isClicked: !1
    },
    created: function() {
        this.updateLikeCount = this.updateLikeCount.bind(this);
    },
    attached: function() {},
    detached: function() {
        a.comment.unWatch("likeCountMap.".concat(this.data.replyId), this.updateLikeCount);
    },
    methods: {
        commentAgreeTap: function(i) {
            this.data.isAgreed || (this.setData({
                isClicked: !0
            }), this.data.isAgreed = !0, (0, t.postLike)({
                article_id: this.data.articleId,
                comment_id: this.data.commentId,
                rid: this.data.replyId
            }), (0, e.report)({
                fromPage: this.data.fromPage,
                opType: e.OP_TYPE.like_comment_click,
                articleId: this.data.articleId,
                articleType: this.data.atype,
                commentId: this.data.commentId,
                replyId: this.data.replyId,
                isGood: 1
            }), this.triggerEvent("tapHotComment"));
        },
        updateLikeCount: function(t) {
            this.setData({
                isAgreed: a.comment.hasLikedMap[this.data.replyId] || !1,
                agreeCountStr: (0, i.formatCount)(t)
            });
        },
        commentTap: function() {
            (0, e.report)({
                fromPage: this.data.fromPage,
                opType: e.OP_TYPE.index_cell_hot_comment,
                articleId: this.data.articleId,
                articleType: this.data.atype
            }), (0, r.navigateTo)((0, r.atypeToCommentUrl)(this.data.atype, {
                id: this.data.articleId
            })), this.triggerEvent("tapHotComment");
        }
    }
});