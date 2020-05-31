(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/StockGroupContainer" ], {
    "080c": function(t, e, n) {},
    "38a3": function(t, e, n) {
        n.r(e);
        var o = n("a882"), r = n("d7fd");
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        n("d0c3");
        var u = n("2877"), a = Object(u.a)(r.default, o.a, o.b, !1, null, "47c2f332", null);
        e.default = a.exports;
    },
    a882: function(t, e, n) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return r;
        });
    },
    d0c3: function(t, e, n) {
        var o = n("080c");
        n.n(o).a;
    },
    d7fd: function(t, e, n) {
        n.r(e);
        var o = n("e987"), r = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = r.a;
    },
    e987: function(t, e, n) {
        function o(t) {
            for (var e = 1; e < arguments.length; e++) if (e % 2) {
                var n = null != arguments[e] ? arguments[e] : {}, o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }))), o.forEach(function(e) {
                    r(t, e, n[e]);
                });
            } else Object.defineProperties(t, Object.getOwnPropertyDescriptors(arguments[e]));
            return t;
        }
        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("4360")), u = n("fd0f"), a = {
            components: {
                PercentNumber: function() {
                    return n.e("components/PercentNumber").then(n.bind(null, "7597"));
                }
            },
            props: {
                stocks: Array
            },
            computed: {
                stocksWidthRate: function() {
                    var t = c.default.getters["stocks/real"];
                    return this.stocks.map(function(e) {
                        return o({}, e, {
                            rate: t && t[e.symbol]
                        });
                    });
                }
            },
            mounted: function() {
                c.default.dispatch("stocks/pushSymbols", {
                    symbols: this.stocks.map(function(t) {
                        return t.symbol;
                    })
                });
            },
            methods: {
                clickStock: function(t) {
                    (0, u.goToStockPage)(t);
                }
            }
        };
        e.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/StockGroupContainer-create-component", {
    "components/StockGroupContainer-create-component": function(t, e, n) {
        n("543d").createComponent(n("38a3"));
    }
}, [ [ "components/StockGroupContainer-create-component" ] ] ]);