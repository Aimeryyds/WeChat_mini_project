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

var a = t(require("../../33F1B301480303CF5597DB06B8E0F6C0.js")), u = t(require("../../E4EFCB17480303CF8289A3108C01F6C0.js"));

(0, a.default)({
    externalClasses: [ "wux-class-badge" ],
    properties: {
        prefixCls: {
            type: String,
            value: "wux-badge"
        },
        count: {
            type: Number,
            value: 0,
            observer: "updated"
        },
        overflowCount: {
            type: Number,
            value: 99
        },
        dot: {
            type: Boolean,
            value: !1
        },
        showZero: {
            type: Boolean,
            value: !1
        },
        status: {
            type: String,
            value: ""
        },
        text: {
            type: String,
            value: ""
        }
    },
    data: {
        finalCount: 0
    },
    computed: {
        classes: [ "prefixCls, status", function(t, a) {
            return {
                wrap: (0, u.default)(t),
                status: "".concat(t, "__status"),
                statusDot: (0, u.default)("".concat(t, "__status-dot"), e({}, "".concat(t, "__status-dot--").concat(a), a)),
                statusText: "".concat(t, "__status-text"),
                dot: "".concat(t, "__dot"),
                count: "".concat(t, "__count")
            };
        } ]
    },
    methods: {
        updated: function(t) {
            var e = 0 < arguments.length && void 0 !== t ? t : this.data.count, a = this.data.overflowCount, u = a <= e ? "".concat(a, "+") : e;
            this.setData({
                finalCount: u
            });
        }
    }
});