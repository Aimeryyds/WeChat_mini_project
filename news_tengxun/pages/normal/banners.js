var e = require("../../@babel/runtime/helpers/interopRequireDefault"), t = require("../../services/userOption.js"), n = e(require("../../utils/logger"));

Component({
    properties: {
        openPush: Boolean,
        pushStatusCount: {
            type: Object,
            value: {}
        }
    },
    data: {},
    created: function() {},
    attached: function() {},
    ready: function() {},
    methods: {
        switchChange: function() {
            var e = this;
            (0, t.setUserOption)({
                env: "debug",
                type: "pushStatus",
                value: 1
            }).then(function() {
                setTimeout(function() {
                    e.setData({
                        openPush: !0
                    });
                }, 1e3);
            }).catch(function(t) {
                wx.showToast({
                    icon: "none",
                    title: "打开失败"
                }), e.setData({
                    openPush: !1
                }), n.default.error("Error: setUserOption"), n.default.error(t);
            });
        }
    }
});