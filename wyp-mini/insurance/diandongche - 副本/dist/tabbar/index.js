function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var a = e(require("../../33F1B301480303CF5597DB06B8E0F6C0.js")), n = e(require("../../E4EFCB17480303CF8289A3108C01F6C0.js")), i = require("../../236B77B5480303CF450D1FB2F9F0F6C0.js");

(0, a.default)({
    relations: {
        "../tabbar-item/index": {
            type: "child",
            observer: function() {
                this.debounce(this.updated);
            }
        }
    },
    properties: {
        prefixCls: {
            type: String,
            value: "wux-tabbar"
        },
        defaultCurrent: {
            type: String,
            value: ""
        },
        current: {
            type: String,
            value: "",
            observer: function(e) {
                this.data.controlled && this.updated(e);
            }
        },
        controlled: {
            type: Boolean,
            value: !1
        },
        theme: {
            type: String,
            value: "balanced"
        },
        position: {
            type: String,
            value: ""
        },
        safeArea: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        tabbarStyle: "",
        activeKey: "",
        keys: []
    },
    computed: {
        classes: [ "prefixCls, position", function(e, a) {
            return {
                wrap: (0, n.default)(e, t({}, "".concat(e, "--").concat(a), a))
            };
        } ]
    },
    methods: {
        updated: function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : this.data.activeKey;
            this.data.activeKey !== t && this.setData({
                activeKey: t
            }), this.changeCurrent(t);
        },
        changeCurrent: function(e) {
            var t = this, a = this.getRelationNodes("../tabbar-item/index");
            0 < a.length && a.forEach(function(n, i) {
                var r = n.data.key || String(i), o = r === e;
                n.changeCurrent(o, r, t.data.theme, a.length);
            }), this.data.keys.length !== a.length && this.setData({
                keys: a.map(function(e) {
                    return e.data;
                })
            });
        },
        emitEvent: function(e) {
            this.triggerEvent("change", {
                key: e,
                keys: this.data.keys
            });
        },
        setActiveKey: function(e) {
            this.data.controlled || this.updated(e), this.emitEvent(e);
        },
        applyIPhoneXShim: function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : this.data.position;
            (0, i.checkIPhoneX)() && [ "bottom", "top" ].includes(t) && this.setData({
                tabbarStyle: "".concat(t, ": ").concat(i.safeAreaInset[t], "px")
            });
        }
    },
    ready: function() {
        var e = this.data, t = e.defaultCurrent, a = e.current, n = e.controlled ? a : t;
        this.updated(n), this.applyIPhoneXShim();
    }
});