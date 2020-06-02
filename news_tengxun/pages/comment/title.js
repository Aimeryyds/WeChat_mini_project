require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var e = require("../../utils/time"), t = require("../../services/report"), i = require("../../services/jump");

Component({
    properties: {
        articleId: String,
        atype: Number,
        title: String,
        chlid: String,
        chlname: String,
        chlicon: String,
        timestamp: {
            type: Number,
            observer: function(t) {
                t && this.setData({
                    time: (0, e.distanceInWords)(t)
                });
            }
        },
        fromPage: String,
        showOriginBtn: {
            type: Boolean,
            value: !0
        }
    },
    data: {
        time: ""
    },
    created: function() {},
    attached: function() {},
    methods: {
        tapMedia: function() {
            (0, i.canJumpToMedia)(this.data.chlid) && (0, i.navigateTo)(i.PAGE_PATH.USER, {
                mediaId: this.data.chlid
            });
        },
        tapOriginal: function() {
            var e = this.data, r = e.atype, a = e.articleId;
            (0, i.navigateTo)((0, i.atypeToUrl)(r, {
                id: a
            })), (0, t.report)({
                opType: t.OP_TYPE.goto_article,
                fromPage: this.data.fromPage,
                articleId: a
            });
        }
    }
});