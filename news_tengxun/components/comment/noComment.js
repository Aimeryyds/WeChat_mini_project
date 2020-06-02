require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var e = require("../../services/report");

Component({
    properties: {
        articleId: String,
        atype: Number,
        isForbidden: {
            type: Boolean,
            value: !1
        },
        isBlackTheme: {
            type: Boolean,
            value: !1
        },
        fromPage: String
    },
    data: {
        OP_TYPE: e.OP_TYPE,
        showSofa: !1,
        showWord: !1
    },
    ready: function() {
        var t = this, a = this.createIntersectionObserver();
        a.relativeToViewport().observe(".icon-box", function() {
            (0, e.report)({
                fromPage: t.data.fromPage,
                opType: e.OP_TYPE.empty_comment_exposure,
                articleId: t.data.articleId,
                articleType: t.data.atype
            }), a.disconnect();
        });
    },
    created: function() {},
    attached: function() {},
    methods: {
        tapComment: function() {
            this.data.isForbidden || (this.triggerEvent("addComment"), (0, e.report)({
                fromPage: this.data.fromPage,
                opType: e.OP_TYPE.empty_comment_click,
                articleId: this.data.articleId,
                articleType: this.data.atype
            }));
        },
        showSofa: function() {
            this.setData({
                showSofa: !0
            });
        },
        showWord: function() {
            this.setData({
                showWord: !0
            });
        }
    }
});