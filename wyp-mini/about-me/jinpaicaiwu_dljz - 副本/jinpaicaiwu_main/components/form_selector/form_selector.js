var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../pluginbehavior.js"));

Component({
    behaviors: [ t.default, "wx://form-field" ],
    properties: {},
    data: {
        options: [],
        haswarn: !1,
        inner_style: "",
        picker_style: "",
        label_style: ""
    },
    attached: function() {
        this.parseStyle(), this.parseStyle("label"), this.restructOptions();
    },
    methods: {
        pickerChange: function(t) {
            this.setData({
                value: t.detail.value
            });
        },
        parseStyle: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "inner", e = getApp(), a = "", r = "";
            if ("inner" == t) {
                var i = this.data.param.inner_style;
                for (var s in i) {
                    var n = i[s];
                    "number" == typeof n && (n = e.px2rpx(n)), a += s + ":" + n + ";", "height" == s ? r += "line-" + s + ":" + n + ";" : "text-align" == s && (r += s + ":" + n + ";");
                }
                this.setData({
                    inner_style: a
                }), r.length && this.setData({
                    picker_style: r
                });
            } else if ("label" == t) {
                var l = this.data.param.label_style;
                for (var o in l) {
                    var p = l[o];
                    "number" == typeof p && (p = e.px2rpx(p)), a += o + ":" + p + ";";
                }
                this.setData({
                    label_style: a
                });
            }
        },
        restructOptions: function() {
            var t = [];
            (this.data.param.options || []).forEach(function(e) {
                return t.push(e.value);
            }), this.setData({
                options: t
            });
        }
    }
});