var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = e(require("../../utils/logger")), a = require("./service"), r = e(require("../../network/login")), n = require("../../services/report");

Component({
    properties: {
        articleId: String,
        hasThanked: Boolean,
        count: Number,
        openGId: String,
        fromPage: String
    },
    data: {},
    created: function() {
        this.hasClicked = !1;
    },
    attached: function() {},
    methods: {
        tapBtn: function() {
            var e = this;
            this.data.hasThanked ? this.triggerEvent("tapThankBtn") : this.hasClicked || (this.hasClicked = !0, 
            (0, r.default)().then(function() {
                var r = {
                    count: e.data.count + 1,
                    hasThanked: !0
                };
                e.setData(r), e.triggerEvent("tapThankBtn", r), (0, n.report)({
                    fromPage: e.data.fromPage,
                    opType: n.OP_TYPE.thanks_button_click
                }), (0, a.appreciateSharing)(e.data.articleId, e.data.openGId).catch(function(e) {
                    t.default.error("感谢分享出错：", e);
                });
            }).catch(function() {
                e.hasClicked = !1;
            }));
        }
    }
});