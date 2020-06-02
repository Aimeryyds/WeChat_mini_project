require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var t = require("../../store/index"), e = require("../../services/report");

Component({
    properties: {
        isBlackTheme: Boolean,
        articleId: String,
        commentId: String,
        replyId: String,
        atype: Number,
        title: String,
        posterShareImg: String,
        fromPage: String,
        isVideo: Boolean,
        syncId: String,
        hideAllIcon: Boolean,
        hideAnchor: Boolean,
        isForbidden: {
            type: Boolean,
            value: !1
        },
        anchorText: {
            type: String,
            value: "评论"
        },
        placeholder: {
            type: String,
            value: "缺少你的神评…"
        },
        replyForComment: Boolean,
        commentCount: Number
    },
    data: {
        pageArea: e.PAGE_AREA.comment,
        isIphoneX: t.systemInfo.isIphoneX
    },
    created: function() {},
    attached: function() {},
    methods: {
        tapComment: function(a) {
            if (!this.data.isForbidden) {
                var r = {
                    articleId: this.data.articleId,
                    commentId: this.data.commentId,
                    replyId: this.data.replyId,
                    pubType: this.data.replyForComment ? 2 : 1
                }, i = t.article.getSyncFn(this.data.syncId);
                i ? (r.callback = i, t.article.showInputPanel(r)) : this.triggerEvent("reply", r), 
                (0, e.report)({
                    fromPage: this.data.fromPage,
                    opType: e.OP_TYPE.input_comment_click,
                    articleId: this.data.articleId,
                    commentId: this.data.commentId,
                    replyId: this.data.replyId,
                    articleType: this.data.atype
                });
            }
        },
        tapAnchor: function() {
            this.triggerEvent("tapanchor"), (0, e.report)({
                opType: e.OP_TYPE.comment_icon_click,
                fromPage: this.data.fromPage,
                articleId: this.data.articleId,
                commentId: this.data.commentId,
                replyId: this.data.replyId,
                articleType: this.data.atype,
                commentCount: this.data.commentCount
            });
        },
        tapPoster: function() {
            var e = {
                articleId: this.data.articleId,
                imgUrl: this.data.posterShareImg,
                isVideo: this.data.isVideo,
                title: this.data.title
            };
            t.poster.genPoster(this.data.fromPage, this.data.pageArea, e);
        }
    }
});