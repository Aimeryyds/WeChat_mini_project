var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../pluginbehavior.js"));

Component({
    behaviors: [ t.default ],
    properties: {},
    data: {
        mediastyle: ""
    },
    attached: function() {
        var t = getApp(), e = this.data.param, a = [ "border-radius", "opacity", "width" ], r = "", i = !0, o = !1, n = void 0;
        try {
            for (var d, s = a[Symbol.iterator](); !(i = (d = s.next()).done); i = !0) {
                var u = d.value, l = e[u];
                Number.isFinite(l) && "opacity" != u ? l = t.px2rpx(l) : "opacity" == u && (l /= 100), 
                r += u + ":" + l + ";";
            }
        } catch (t) {
            o = !0, n = t;
        } finally {
            try {
                !i && s.return && s.return();
            } finally {
                if (o) throw n;
            }
        }
        this.setData({
            mediastyle: r
        });
    },
    methods: {}
});