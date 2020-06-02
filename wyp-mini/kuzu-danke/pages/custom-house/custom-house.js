(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/custom-house/custom-house" ], {
    "49ef": function(t, n, e) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, u = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {});
    },
    be21: function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0, getApp();
            var e = {
                data: function() {
                    return {
                        bannerURL: ""
                    };
                },
                onLoad: function() {
                    var n = this;
                    t.getStorage({
                        key: "cityStorageNum",
                        success: function(t) {
                            console.log(t.data), n.bannerURL = "https://www.danke.com/pangu-activity/marketing/custom-house-resource?platform=xcx&city_id=" + t.data;
                        }
                    });
                },
                components: {},
                props: {},
                methods: {},
                computed: {},
                watch: {}
            };
            n.default = e;
        }).call(this, e("543d").default);
    },
    f3d2: function(t, n, e) {
        e.r(n);
        var o = e("49ef"), u = e("fdf9");
        for (var a in u) "default" !== a && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(a);
        var c = e("f0c5"), f = Object(c.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = f.exports;
    },
    f4d9: function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("e027"), n(e("66fd")), t(n(e("f3d2")).default);
        }).call(this, e("543d").createPage);
    },
    fdf9: function(t, n, e) {
        e.r(n);
        var o = e("be21"), u = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = u.a;
    }
}, [ [ "f4d9", "common/runtime", "common/vendor" ] ] ]);