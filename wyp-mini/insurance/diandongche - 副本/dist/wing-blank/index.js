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

var r = e(require("../../33F1B301480303CF5597DB06B8E0F6C0.js")), a = e(require("../../E4EFCB17480303CF8289A3108C01F6C0.js")), l = e(require("../../FE511A41480303CF98377246C7E1F6C0.js"));

(0, r.default)({
    properties: {
        prefixCls: {
            type: String,
            value: "wux-wingblank"
        },
        size: {
            type: String,
            value: "default"
        },
        bodyStyle: {
            type: [ String, Object ],
            value: "",
            observer: function(e) {
                this.setData({
                    extStyle: (0, l.default)(e)
                });
            }
        }
    },
    data: {
        extStyle: ""
    },
    computed: {
        classes: [ "prefixCls, size", function(e, r) {
            return {
                wrap: (0, a.default)(e, t({}, "".concat(e, "--").concat(r), r))
            };
        } ]
    }
});