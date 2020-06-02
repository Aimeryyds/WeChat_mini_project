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

var a = e(require("../../33F1B301480303CF5597DB06B8E0F6C0.js")), n = e(require("../../E4EFCB17480303CF8289A3108C01F6C0.js"));

(0, a.default)({
    relations: {
        "../tabbar/index": {
            type: "parent"
        }
    },
    properties: {
        prefixCls: {
            type: String,
            value: "wux-tabbar-item"
        },
        key: {
            type: String,
            value: ""
        },
        title: {
            type: String,
            value: ""
        },
        disabled: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        width: "100%",
        current: !1,
        index: "0"
    },
    computed: {
        classes: [ "prefixCls, theme, current, disabled", function(e, a, r, i) {
            var c;
            return {
                wrap: (0, n.default)(e, (t(c = {}, "".concat(e, "--").concat(a), a), t(c, "".concat(e, "--current"), r), 
                t(c, "".concat(e, "--disabled"), i), c)),
                icon: "".concat(e, "__icon"),
                title: "".concat(e, "__title")
            };
        } ]
    },
    methods: {
        changeCurrent: function(e, t, a, n) {
            var r = 100 / n + "%";
            this.setData({
                width: r,
                current: e,
                theme: a,
                index: t
            });
        },
        onTap: function() {
            var e = this.data, t = e.index, a = e.disabled, n = this.getRelationNodes("../tabbar/index")[0];
            !a && n && (this.triggerEvent("click", {
                index: t
            }), n.setActiveKey(t));
        }
    }
});