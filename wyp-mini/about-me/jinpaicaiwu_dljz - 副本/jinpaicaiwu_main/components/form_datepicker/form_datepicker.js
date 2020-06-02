function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../pluginbehavior.js"));

Component({
    behaviors: [ t.default, "wx://form-field" ],
    properties: {},
    data: {
        haswarn: !1,
        inner_style: "",
        label_style: ""
    },
    attached: function() {
        this.parseStyle(), this.parseStyle("label");
    },
    methods: {
        timeChange: function(e) {
            this.setData({
                value: e.detail.value,
                haswarn: !1
            });
        },
        onInput: function(e) {
            var t = e.detail.value;
            this.setData({
                value: t
            }), t.trim().length && this.setData({
                haswarn: !1
            });
        },
        onBlur: function(e) {
            var t = /\+/, a = e.detail.value.trim();
            switch (this.data.param.inptype) {
              case "date":
                t = /^\d{4}-\d{2}-\d{2}$/;
                break;

              case "time":
                t = /^\d{2}\:\d{2}$/;
            }
            a.length && !t.test(a) && this.setData({
                value: ""
            });
        },
        parseStyle: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "inner", a = "", n = {}, r = this.data.param;
            "inner" == t ? n = r.inner_style : "label" == t && (n = r.label_style);
            var i = getApp();
            for (var l in n) {
                var s = n[l];
                "number" == typeof s && (s = i.px2rpx(s)), a += l + ":" + s + ";";
            }
            this.setData(e({}, t + "_style", a));
        }
    }
});