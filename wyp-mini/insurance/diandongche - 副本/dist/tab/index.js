function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, r) {
    return t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r, e;
}

var r = e(require("../../33F1B301480303CF5597DB06B8E0F6C0.js")), a = e(require("../../E4EFCB17480303CF8289A3108C01F6C0.js"));

(0, r.default)({
    relations: {
        "../tabs/index": {
            type: "parent"
        }
    },
    properties: {
        prefixCls: {
            type: String,
            value: "wux-tabs__tab"
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
        current: !1,
        scroll: !1
    },
    computed: {
        classes: [ "prefixCls, direction, scroll, theme, current, disabled", function(e, r, n, c, i, l) {
            var o;
            return {
                wrap: (0, a.default)(e, (t(o = {}, "".concat(e, "--").concat(r), r), t(o, "".concat(e, "--").concat(c), c), 
                t(o, "".concat(e, "--scroll"), n), t(o, "".concat(e, "--current"), i), t(o, "".concat(e, "--disabled"), l), 
                o)),
                title: "".concat(e, "-title"),
                bar: "".concat(e, "-bar")
            };
        } ]
    },
    methods: {
        changeCurrent: function(e) {
            var t = e.current, r = e.scroll, a = e.theme, n = e.direction;
            this.setData({
                current: t,
                scroll: r,
                theme: a,
                direction: n
            });
        },
        onTap: function() {
            var e = this.data, t = e.key, r = e.disabled, a = this.getRelationNodes("../tabs/index")[0];
            !r && a && (this.triggerEvent("click", {
                key: t
            }), a.setActiveKey(t));
        }
    }
});