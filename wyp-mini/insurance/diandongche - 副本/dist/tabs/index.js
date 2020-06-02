function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}

var n = e(require("../../33F1B301480303CF5597DB06B8E0F6C0.js")), a = e(require("../../E4EFCB17480303CF8289A3108C01F6C0.js")), r = function(e) {
    var t = e.filter(function(e) {
        return !e.data.disabled;
    })[0];
    return t ? t.data.key : null;
}, i = function(e, t) {
    return e.map(function(e) {
        return e.data.key;
    }).includes(t);
}, u = function(e, t) {
    var n = r(e);
    return t && i(e, t) ? t : n;
};

(0, n.default)({
    relations: {
        "../tab/index": {
            type: "child",
            observer: function() {
                this.debounce(this.updated);
            }
        }
    },
    properties: {
        prefixCls: {
            type: String,
            value: "wux-tabs"
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
        scroll: {
            type: Boolean,
            value: !1
        },
        controlled: {
            type: Boolean,
            value: !1
        },
        theme: {
            type: String,
            value: "balanced"
        },
        direction: {
            type: String,
            value: "horizontal"
        }
    },
    data: {
        activeKey: "",
        keys: []
    },
    computed: {
        classes: [ "prefixCls, direction, scroll", function(e, n, r) {
            var i;
            return {
                wrap: (0, a.default)(e, (t(i = {}, "".concat(e, "--").concat(n), n), t(i, "".concat(e, "--scroll"), r), 
                i))
            };
        } ]
    },
    methods: {
        updated: function(e) {
            var t = 0 < arguments.length && void 0 !== e ? e : this.data.activeKey, n = this.getRelationNodes("../tab/index"), a = u(n, t);
            this.data.activeKey !== a && this.setData({
                activeKey: a
            }), this.changeCurrent(a, n);
        },
        changeCurrent: function(e, t) {
            var n = this.data, a = n.scroll, r = n.theme, i = n.direction;
            0 < t.length && t.forEach(function(t) {
                t.changeCurrent({
                    current: t.data.key === e,
                    scroll: a,
                    theme: r,
                    direction: i
                });
            }), this.data.keys.length !== t.length && this.setData({
                keys: t.map(function(e) {
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
        }
    },
    ready: function() {
        var e = this.data, t = e.defaultCurrent, n = e.current, a = e.controlled ? n : t;
        this.updated(a);
    }
});