(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/about/about" ], {
    "071e": function(n, e, t) {
        t.r(e);
        var o = t("c9dd"), a = t("d164");
        for (var u in a) "default" !== u && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        t("bd3d");
        var c = t("f0c5"), d = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = d.exports;
    },
    "58ab": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, getApp();
        var o = {
            data: function() {
                return {};
            },
            onShareAppMessage: function(n) {
                return n.from, {
                    title: "来小程序找房，优惠多多",
                    imageUrl: "../../images/share_img.png",
                    path: "/pages/index/index"
                };
            },
            onReady: function() {},
            onLoad: function(n) {
                console.log(n);
            },
            components: {},
            props: {},
            methods: {},
            computed: {},
            watch: {}
        };
        e.default = o;
    },
    9253: function(n, e, t) {},
    bd3d: function(n, e, t) {
        var o = t("9253");
        t.n(o).a;
    },
    c9dd: function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
    },
    d164: function(n, e, t) {
        t.r(e);
        var o = t("58ab"), a = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = a.a;
    },
    d1c7: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("e027"), e(t("66fd")), n(e(t("071e")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "d1c7", "common/runtime", "common/vendor" ] ] ]);