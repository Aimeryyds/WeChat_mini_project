require("../../@babel/runtime/helpers/interopRequireDefault")(require("../../utils/logger"));

var e = require("../../services/report"), t = require("../../store/index.js");

Component({
    properties: {
        title: {
            type: String,
            value: ""
        },
        fakeContent: {
            type: Object,
            value: {}
        },
        fromPage: String,
        articleId: String,
        atype: String,
        index: Number,
        hasImage: Boolean
    },
    data: {
        isIphoneX: t.systemInfo.isIphoneX
    },
    created: function() {},
    attached: function() {},
    ready: function() {
        var t = this;
        this.observer = this.createIntersectionObserver({
            thresholds: [ .01 ]
        }), this.observer.relativeToViewport().observe(".container", function() {
            var r = t.data, i = r.fromPage, o = r.articleId, n = {
                aticleType: r.atype,
                position: r.index,
                cell_pic: r.hasImage ? 1 : 0,
                cell_title: r.title ? 1 : 0
            };
            (0, e.report)({
                fromPage: i,
                articleId: o,
                opType: e.OP_TYPE.cell_exposure,
                extension: JSON.stringify(n)
            }), t.observer.disconnect();
        });
    },
    methods: {}
});