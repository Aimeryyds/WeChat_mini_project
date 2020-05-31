(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/plate/StocksList" ], {
    1648: function(t, e, n) {
        n.r(e);
        var r = n("e638"), o = n("29fb");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("3857");
        var a = n("2877"), u = Object(a.a)(o.default, r.a, r.b, !1, null, "72be114c", null);
        e.default = u.exports;
    },
    "29fb": function(t, e, n) {
        n.r(e);
        var r = n("d8ec"), o = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = o.a;
    },
    3857: function(t, e, n) {
        var r = n("b26d");
        n.n(r).a;
    },
    b26d: function(t, e, n) {},
    d8ec: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = i(n("4360")), o = i(n("761b"));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function a(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n;
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        var u = {
            components: {
                SortTab: function() {
                    return n.e("pages/plate/SortTab").then(n.bind(null, "ab46"));
                },
                StockItem: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("pages/plate/StocksList/StockItem") ]).then(n.bind(null, "73b7"));
                }
            },
            props: {
                stocks: Array,
                specialPlate: String
            },
            data: function() {
                return {
                    filterLongtou: !1,
                    sortRule: {
                        targetProp: "",
                        mode: "default"
                    }
                };
            },
            computed: {
                sortStock: function() {
                    if (!this.stocks) return [];
                    var t = this.stocks.reduce(function(t, e) {
                        return e.extraInfo && e.extraInfo.needPay ? t.listPremium.push(e) : t.listExceptPremium.push(e), 
                        t;
                    }, {
                        listExceptPremium: [],
                        listPremium: []
                    }), e = t.listExceptPremium, n = t.listPremium, r = [];
                    r = this.filterLongtou ? e.filter(function(t) {
                        return t.renqilongtou || t.jinrilongtou || t.hangyelongtou;
                    }) : a(e);
                    var o = this.sortRule, i = o.mode, u = o.targetProp;
                    if ("default" === i) {
                        var s = [], c = [], l = [];
                        r.forEach(function(t) {
                            1 === t.limitStatus ? s.push(t) : c.push(t);
                        });
                        var f = s.filter(function(t) {
                            return t.limitUpDays || l.push(t), t.limitUpDays;
                        });
                        return f = f.sort(function(t, e) {
                            return e.limitUpDays === t.limitUpDays ? t.lastLimitUp - e.lastLimitUp : e.limitUpDays - t.limitUpDays;
                        }), l = l.sort(function(t, e) {
                            return t.lastLimitUp - e.lastLimitUp;
                        }), c = c.sort(function(t, e) {
                            return e.changePercent - t.changePercent;
                        }), [].concat(a(n), a(f), a(l), a(c));
                    }
                    return [].concat(a(n), a("bonusShareRatio" === u ? a(r).filter(function(t) {
                        return null != t.bonusShareRatio;
                    }).sort(function(t, e) {
                        return "desc" === i ? e.bonusShareRatio + e.tranAddShareRatio - t.bonusShareRatio - t.tranAddShareRatio : "incr" === i ? t.bonusShareRatio + t.tranAddShareRatio - e.bonusShareRatio - e.tranAddShareRatio : void 0;
                    }) : a(r).filter(function(t) {
                        return null != t[u];
                    }).sort(function(t, e) {
                        return "desc" === i ? e[u] - t[u] : "incr" === i ? t[u] - e[u] : void 0;
                    })), a(a(r).filter(function(t) {
                        return null == t[u];
                    })));
                },
                titleBarHeight: function() {
                    return 2 * r.default.getters["device/statusBarHeight"] + 88;
                }
            },
            methods: {
                handleSort: function(t) {
                    if (this.sortRule.targetProp !== t) this.$set(this.sortRule, "targetProp", t), this.$set(this.sortRule, "mode", "desc"); else switch (this.sortRule.mode) {
                      case "default":
                        this.$set(this.sortRule, "mode", "desc");
                        break;

                      case "desc":
                        this.$set(this.sortRule, "mode", "incr");
                        break;

                      case "incr":
                        this.$set(this.sortRule, "mode", "default");
                    }
                    (0, o.default)("theme_stocksort_click", {
                        action_value: {
                            price: "last_px",
                            changePercent: "pcp",
                            fundFlow: "fund_flow",
                            nonRestrictedCapital: "circulation_value"
                        }[t] || ""
                    });
                },
                filterLongtouHandler: function() {
                    this.filterLongtou = !this.filterLongtou, (0, o.default)("theme_stockfilter_click");
                },
                packUpDesc: function() {
                    (0, o.default)("theme_stock_summary_click");
                }
            }
        };
        e.default = u;
    },
    e638: function(t, e, n) {
        var r = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(e) {
                return t.$emit("goToPlate", e);
            });
        }, o = [];
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/plate/StocksList-create-component", {
    "pages/plate/StocksList-create-component": function(t, e, n) {
        n("543d").createComponent(n("1648"));
    }
}, [ [ "pages/plate/StocksList-create-component" ] ] ]);