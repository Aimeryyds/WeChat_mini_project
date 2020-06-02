Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    behaviors: [],
    properties: {
        text: {
            type: String,
            value: 0
        },
        type: {
            type: String,
            value: "plain"
        },
        typeColor: {
            type: String,
            value: "#ff5777"
        },
        textColor: {
            type: String,
            value: "#ffffff"
        },
        _system_: {
            type: String,
            value: ""
        }
    },
    data: {},
    methods: {},
    attached: function() {
        var e = this;
        wx.getSystemInfo && wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    _system_: ~t.system.indexOf("Android") ? "android" : "ios"
                });
            }
        });
    }
});