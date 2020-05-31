(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/StockItem" ], {
    7615: function(t, e, n) {
        var o = n("ff30");
        n.n(o).a;
    },
    b994: function(t, e, n) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return r;
        });
    },
    bd11: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = n("4be4"), r = function(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }(n("70f2"));
        var c = {
            components: {
                PercentNumber: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/PercentNumber") ]).then(n.bind(null, "7597"));
                }
            },
            props: {
                stock: Object
            },
            computed: {
                formatPrice: function() {
                    var t = this.stock && this.stock.curPrice;
                    if (t) try {
                        return t.toFixed(2);
                    } catch (e) {
                        return t;
                    }
                },
                timeString: function() {
                    var t = this.stock && this.stock.enterTime;
                    return t ? (0, r.default)(1e3 * t, "HH:mm:ss") : "--";
                },
                formatCir: function() {
                    var t = this.stock && this.stock.circulationValue;
                    if (!t) return "--";
                    var e, n = (0, o.approxNumber)(t);
                    try {
                        e = parseFloat(n).toFixed(1);
                    } catch (t) {}
                    return "".concat(e).concat(n.slice(-1));
                },
                withinAYear: function() {
                    return Math.abs(1e3 * this.stock.timeOnMarket - Date.now()) <= 31536e6 ? (0, r.default)(1e3 * this.stock.timeOnMarket, "YYYY-MM") : "";
                }
            }
        };
        e.default = c;
    },
    f969: function(t, e, n) {
        n.r(e);
        var o = n("b994"), r = n("faea");
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        n("7615");
        var a = n("2877"), u = Object(a.a)(r.default, o.a, o.b, !1, null, "09fe8c2f", null);
        e.default = u.exports;
    },
    faea: function(t, e, n) {
        n.r(e);
        var o = n("bd11"), r = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = r.a;
    },
    ff30: function(t, e, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/home/StockItem-create-component", {
    "pages/home/StockItem-create-component": function(t, e, n) {
        n("543d").createComponent(n("f969"));
    }
}, [ [ "pages/home/StockItem-create-component" ] ] ]);