var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = (e(require("../../utils/logger")), 
e(require("../../utils/mlodash"))), r = require("../../utils/parser");

Component({
    properties: {
        isBlackTheme: Boolean,
        nickName: String,
        parentNickName: String,
        content: {
            type: String,
            observer: function(e) {
                e && this.setData({
                    emojiContent: (0, r.emojiParser)(e)
                });
            }
        },
        image: Object,
        isMe: Boolean,
        commentId: String,
        articleId: String,
        replyId: String,
        parentReplyId: String,
        lineCount: Number,
        enableShowAll: Boolean
    },
    data: {
        showImg: !1
    },
    created: function() {},
    attached: function() {},
    methods: {
        tapContent: function() {
            this.triggerEvent("tapreply");
        },
        tapImage: function() {
            var e = t.default.get(this.data, "image.origUrl");
            e && wx.previewImage({
                current: e,
                urls: [ e ]
            });
        },
        tapDelete: function() {
            var e = {
                articleId: this.data.articleId,
                commentId: this.data.commentId,
                replyId: this.data.replyId,
                parentReplyId: this.data.parentReplyId
            };
            this.triggerEvent("delete", e);
        }
    },
    onImgLoad: function() {
        this.setData({
            showImg: !0
        });
    }
});