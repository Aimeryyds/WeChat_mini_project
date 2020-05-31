(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/stock/StockHeader" ], {
    "0959": function(e, n, t) {
        var o = t("6fea");
        t.n(o).a;
    },
    "1a3a": function(e, n, t) {
        t.r(n);
        var o = t("50f6"), i = t.n(o);
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = i.a;
    },
    4710: function(e, n, t) {
        t.r(n);
        var o = t("f1a0"), i = t("1a3a");
        for (var a in i) "default" !== a && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(a);
        t("0959");
        var c = t("2877"), r = Object(c.a)(i.default, o.a, o.b, !1, null, "46a71e9e", null);
        n.default = r.exports;
    },
    "50f6": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("3a8f"));
        var i = {
            props: {
                stockInfo: Object,
                otherStockInfo: Object
            },
            components: {
                ApproxNumber: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/ApproxNumber") ]).then(t.bind(null, "6ec9"));
                },
                PercentNumber: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/PercentNumber") ]).then(t.bind(null, "7597"));
                }
            },
            data: function() {
                return {
                    toFixedLocal: o.default,
                    TRADE_STATUS: {
                        INDEX: "",
                        TRADE: "交易中",
                        HALT: "停牌",
                        RESUME: "复盘",
                        BREAK: "休市",
                        OCALL: "集合竞价"
                    }
                };
            },
            computed: {
                isZhishu: function() {
                    return this.stockInfo && "index" === this.stockInfo.securitiesType;
                }
            }
        };
        n.default = i;
    },
    "6fea": function(e, n, t) {},
    f1a0: function(e, n, t) {
        var o = function() {
            var e = this, n = (e.$createElement, e._self._c, {
                positiveSignInNeed: !1,
                fixedDigits: 2
            });
            e.$mp.data = Object.assign({}, {
                $root: {
                    a0: n,
                    a1: {
                        positiveSignInNeed: !1,
                        fixedDigits: 2
                    },
                    a2: {
                        positiveSignInNeed: !1,
                        fixedDigits: 2
                    },
                    a3: {
                        positiveSignInNeed: !1,
                        fixedDigits: 2
                    },
                    a4: {
                        positiveSignInNeed: !1,
                        fixedDigits: 2
                    },
                    a5: {
                        positiveSignInNeed: !1,
                        fixedDigits: 2
                    },
                    a6: {
                        positiveSignInNeed: !1,
                        fixedDigits: 2
                    }
                }
            });
        }, i = [];
        t.d(n, "a", function() {
            return o;
        }), t.d(n, "b", function() {
            return i;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/stock/StockHeader-create-component", {
    "pages/stock/StockHeader-create-component": function(e, n, t) {
        t("543d").createComponent(t("4710"));
    }
}, [ [ "pages/stock/StockHeader-create-component" ] ] ]);