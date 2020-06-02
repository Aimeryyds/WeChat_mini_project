function e(e, a, t) {
    return a in e ? Object.defineProperty(e, a, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = t, e;
}

var a = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../pluginbehavior.js"));

Component({
    behaviors: [ a.default, "wx://form-field" ],
    properties: {},
    data: {
        itype: "text",
        haswarn: !1,
        inner_style: "",
        placeholder_style: "",
        label_style: ""
    },
    attached: function() {
        this.parseStyle(), this.parseStyle("placeholder"), this.parseStyle("label");
        var e = this.data.param.inptype;
        "idcard" == e && this.setData({
            itype: e
        });
    },
    methods: {
        onInput: function(e) {
            var a = e.detail.value;
            this.setData({
                value: a
            }), a.trim().length && this.setData({
                haswarn: !1
            });
        },
        onBlur: function(e) {
            var a = e.detail.value.trim();
            this.setData({
                value: a
            }), this.checkValue();
        },
        parseStyle: function() {
            var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "inner", t = "", i = {}, r = this.data.param;
            "inner" == a ? i = r.inner_style : "placeholder" == a ? i = r.placeholder : "label" == a && (i = r.label_style);
            var l = getApp();
            for (var n in i) {
                var s = i[n];
                "padding-left" != n && "padding-right" != n && ("number" == typeof s && (s = l.px2rpx(s)), 
                t += n + ":" + s + ";");
            }
            this.setData(e({}, a + "_style", t));
        },
        checkValue: function() {
            var e = /.*?/, a = this.data.value;
            switch (this.data.param.inptype) {
              case "email":
                e = /^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i;
                break;

              case "mobile":
                e = /^1[3-9]\d{1}\d{8}$/;
            }
            if (a.length && !e.test(a)) {
                return this.setData({
                    haswarn: !0
                }), wx.showToast({
                    title: "请输入正确的数据格式",
                    image: "/static/icons/warning.png"
                }), !1;
            }
            return !0;
        }
    }
});