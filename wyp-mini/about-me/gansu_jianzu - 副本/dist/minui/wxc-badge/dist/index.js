Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = Component({
    behaviors: [],
    properties: {
        value: {
            type: [ Number, String ],
            value: 0
        },
        max: {
            type: [ Number, String ],
            value: 100
        },
        type: {
            type: String,
            value: "number"
        },
        _system_: {
            type: String,
            value: ""
        }
    },
    data: {},
    methods: {},
    attached: function() {
        var e = this, t = e.data, a = parseInt(t.max, 10), s = parseInt(t.value, 10);
        s && a && s > a && e.setData({
            value: a + "+"
        }), wx.getSystemInfo && wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    _system_: ~t.system.indexOf("Android") ? "android" : "ios"
                });
            }
        });
    }
});