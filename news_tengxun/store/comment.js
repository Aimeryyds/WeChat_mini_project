Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var e = {
    name: "comment",
    state: {
        likeCountMap: {},
        hasLikedMap: {},
        commentCountMap: {},
        contentCache: new Map()
    },
    getter: {},
    method: {
        updateContentCache: function(e) {
            var t = (e.articleId || "") + (e.commentId || "") + (e.replyId || "");
            this.contentCache.set(t, e.value || "");
        },
        getContentCache: function(e) {
            var t = (e.articleId || "") + (e.commentId || "") + (e.replyId || "");
            return this.contentCache.get(t) || "";
        },
        deleteContentCache: function(e) {
            var t = (e.articleId || "") + (e.commentId || "") + (e.replyId || "");
            this.contentCache.delete(t);
        }
    },
    event: [ "updateCommentCount" ]
};

exports.default = e;