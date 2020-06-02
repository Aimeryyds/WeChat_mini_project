require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var e = require("../../services/jump.js"), t = require("../../services/report"), i = require("../../services/article");

Component({
    properties: {
        showSmall: Boolean,
        imgBig: String,
        title: String,
        type: Number,
        day: String,
        zwbId: String
    },
    ready: function() {
        (0, i.setHasReadZwb)("".concat(this.data.day).concat(this.data.type)), (0, t.report)({
            opType: t.OP_TYPE.morning_evening_exposure,
            fromPage: t.FROM_PAGE.hot_detail_page
        });
    },
    created: function() {},
    attached: function() {},
    methods: {
        imgLoad: function(e) {
            var t = e.detail.width, i = e.detail.height;
            t && i && this.setData({
                imgHeight: 200,
                imgWidth: 200 * t / i
            });
        },
        newsClick: function(i) {
            (0, e.navigateTo)(e.PAGE_PATH.DAILY, {
                type: this.data.type,
                day: this.data.day
            }), (0, t.report)({
                opType: t.OP_TYPE.morning_evening_click,
                fromPage: t.FROM_PAGE.hot_detail_page
            });
        }
    }
});