function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var a = t(require("../../33F1B301480303CF5597DB06B8E0F6C0.js")), n = t(require("../../E4EFCB17480303CF8289A3108C01F6C0.js")), c = t(require("../../FE511A41480303CF98377246C7E1F6C0.js"));

(0, a.default)({
    properties: {
        prefixCls: {
            type: String,
            value: "wux-card"
        },
        bordered: {
            type: Boolean,
            value: !0
        },
        full: {
            type: Boolean,
            value: !1
        },
        title: {
            type: String,
            value: ""
        },
        thumb: {
            type: String,
            value: ""
        },
        thumbStyle: {
            type: [ String, Object ],
            value: "",
            observer: function(t) {
                this.setData({
                    extStyle: (0, c.default)(t)
                });
            }
        },
        extra: {
            type: String,
            value: ""
        },
        actions: {
            type: Array,
            value: []
        }
    },
    data: {
        extStyle: ""
    },
    computed: {
        classes: [ "prefixCls, bordered, full, actions", function(t, a, c, o) {
            var r;
            return {
                wrap: (0, n.default)(t, (e(r = {}, "".concat(t, "--bordered"), a), e(r, "".concat(t, "--full"), c), 
                e(r, "".concat(t, "--has-actions"), 0 < o.length), r)),
                hd: "".concat(t, "__hd"),
                content: "".concat(t, "__content"),
                thumb: "".concat(t, "__thumb"),
                extra: "".concat(t, "__extra"),
                bd: "".concat(t, "__bd"),
                ft: "".concat(t, "__ft"),
                actions: "".concat(t, "__actions"),
                action: o.map(function(a) {
                    var c;
                    return {
                        wrap: (0, n.default)("".concat(t, "__action"), (e(c = {}, "".concat(t, "__action--").concat(a.type || "default"), a.type || "default"), 
                        e(c, "".concat(t, "__action--bold"), a.bold), e(c, "".concat(t, "__action--disabled"), a.disabled), 
                        e(c, "".concat(a.className), a.className), c)),
                        hover: a.hoverClass && "default" !== a.hoverClass ? a.hoverClass : "".concat(t, "__action--hover")
                    };
                })
            };
        } ]
    },
    methods: {
        onAction: function(t) {
            var e = t.currentTarget.dataset.index, a = this.data.actions, n = a[e];
            n.disabled || this.triggerEvent("action", {
                index: e,
                action: n,
                actions: a
            });
        }
    }
});