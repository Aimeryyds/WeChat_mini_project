function t(t, e, r) {
    return e in t ? Object.defineProperty(t, e, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = r, t;
}

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../pluginbehavior.js"));

Component({
    behaviors: [ e.default, "wx://form-field" ],
    properties: {},
    data: {
        options: [],
        haswarn: !1,
        inner_stylestr: "",
        title_stylestr: "",
        option_stylestr: ""
    },
    attached: function() {
        var t = this;
        [ "inner", "title", "option" ].forEach(function(e) {
            return t.parseStyle(e);
        });
    },
    methods: {
        onChange: function(t) {
            var e = {}, r = t.detail.value;
            "radio" == this.data.param.type ? e[0] = r : r.forEach(function(t) {
                return e[t] = t;
            }), this.setData({
                haswarn: !1,
                value: e
            });
        },
        parseStyle: function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "inner", r = "", a = getApp(), n = this.data.param[e + "_style"];
            for (var i in n) {
                var o = n[i];
                "number" == typeof o && (o = a.px2rpx(o)), r += i + ":" + o + ";";
            }
            this.setData(t({}, e + "_stylestr", r));
        }
    }
});