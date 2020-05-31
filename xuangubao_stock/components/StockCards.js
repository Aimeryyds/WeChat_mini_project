(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/StockCards" ], {
    "20c3f": function(n, t, o) {},
    2527: function(n, t, o) {
        o.r(t);
        var e = o("8d74"), c = o.n(e);
        for (var a in e) "default" !== a && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(a);
        t.default = c.a;
    },
    "75b6": function(n, t, o) {
        var e = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
        o.d(t, "a", function() {
            return e;
        }), o.d(t, "b", function() {
            return c;
        });
    },
    8529: function(n, t, o) {
        var e = o("20c3f");
        o.n(e).a;
    },
    "8d74": function(n, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var e = {
            props: {
                stocks: {
                    type: Array
                }
            },
            components: {
                StockCard: function() {
                    return o.e("components/StockCards/StockCard").then(o.bind(null, "26f4"));
                }
            }
        };
        t.default = e;
    },
    d1be: function(n, t, o) {
        o.r(t);
        var e = o("75b6"), c = o("2527");
        for (var a in c) "default" !== a && function(n) {
            o.d(t, n, function() {
                return c[n];
            });
        }(a);
        o("8529");
        var r = o("2877"), u = Object(r.a)(c.default, e.a, e.b, !1, null, "62af74e6", null);
        t.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/StockCards-create-component", {
    "components/StockCards-create-component": function(n, t, o) {
        o("543d").createComponent(o("d1be"));
    }
}, [ [ "components/StockCards-create-component" ] ] ]);