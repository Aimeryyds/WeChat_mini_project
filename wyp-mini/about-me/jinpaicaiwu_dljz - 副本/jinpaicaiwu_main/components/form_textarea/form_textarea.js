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
        inner_style: "",
        placeholder_style: "",
        box_align: "",
        label_style: ""
    },
    attached: function() {
        this.parseStyle(), this.parseStyle("placeholder"), this.parseStyle("label"), this.flexAlign();
    },
    methods: {
        onInput: function(e) {
            this.setData({
                value: e.detail.value
            });
        },
        parseStyle: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "inner", a = "", l = {}, r = this.data.param;
            "inner" == t ? l = r.inner_style : "placeholder" == t ? l = r.placeholder : "label" == t && (l = r.label_style);
            var n = getApp();
            for (var i in l) {
                var s = l[i];
                "number" == typeof s && (s = n.px2rpx(s)), a += i + ":" + s + ";";
            }
            this.setData(e({}, t + "_style", a));
        },
        flexAlign: function() {
            var e = "";
            switch (this.data.param["text-align"]) {
              case "left":
                e = "flex-start";
                break;

              case "center":
                e = "center";
                break;

              case "right":
                e = "flex-end";
            }
            e.length && this.setData({
                box_align: "justify-content:" + e + ";"
            });
        }
    }
});