var e = require("../../services/report"), t = require("../../services/jump");

Component({
    properties: {
        title: String,
        articleId: String,
        atype: String,
        fromPage: String
    },
    data: {},
    attached: function() {},
    detached: function() {
        this.$obQuery && this.$obQuery.disconnect();
    },
    ready: function() {
        var t = this;
        this.$obQuery = this.createIntersectionObserver(), this.$obQuery.relativeToViewport().observe(".special-wrapper", function() {
            (0, e.report)({
                opType: e.OP_TYPE.related_special_exposure,
                fromPage: t.data.fromPage,
                articleId: t.data.articleId,
                atype: t.data.atype
            }), t.$obQuery.disconnect();
        });
    },
    methods: {
        onTap: function() {
            (0, t.navigateTo)(t.PAGE_PATH.SPECIAL, {
                id: this.data.articleId,
                atype: this.data.atype
            }), (0, e.report)({
                opType: e.OP_TYPE.related_special_click,
                fromPage: this.data.fromPage,
                articleId: this.data.articleId,
                atype: this.data.atype
            });
        }
    }
});