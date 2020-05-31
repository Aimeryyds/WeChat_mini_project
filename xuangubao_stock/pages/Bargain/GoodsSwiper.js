(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Bargain/GoodsSwiper" ], {
    "2abf": function(e, n, a) {},
    "6b20": function(e, n, a) {
        a.r(n);
        var t = a("6c62"), o = a("c6c8");
        for (var r in o) "default" !== r && function(e) {
            a.d(n, e, function() {
                return o[e];
            });
        }(r);
        a("d1ea");
        var c = a("2877"), u = Object(c.a)(o.default, t.a, t.b, !1, null, "18d0e77d", null);
        n.default = u.exports;
    },
    "6c62": function(e, n, a) {
        var t = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        a.d(n, "a", function() {
            return t;
        }), a.d(n, "b", function() {
            return o;
        });
    },
    c6c8: function(e, n, a) {
        a.r(n);
        var t = a("e932"), o = a.n(t);
        for (var r in t) "default" !== r && function(e) {
            a.d(n, e, function() {
                return t[e];
            });
        }(r);
        n.default = o.a;
    },
    d1ea: function(e, n, a) {
        var t = a("2abf");
        a.n(t).a;
    },
    e932: function(e, n, a) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var t = {
            props: {
                imgs: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                height: {
                    type: [ Number, String ],
                    default: 560
                }
            }
        };
        n.default = t;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Bargain/GoodsSwiper-create-component", {
    "pages/Bargain/GoodsSwiper-create-component": function(e, n, a) {
        a("543d").createComponent(a("6b20"));
    }
}, [ [ "pages/Bargain/GoodsSwiper-create-component" ] ] ]);