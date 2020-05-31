(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/stock/index" ], {
    4487: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = c(n("a34a")), a = n("365c"), i = c(n("21a7")), o = c(n("761b"));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {}, r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), r.forEach(function(t) {
                    l(e, t, n[t]);
                });
            }
            return e;
        }
        function l(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function u(e, t, n, r, a, i, o) {
            try {
                var c = e[i](o), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(r, a);
        }
        function f(e) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(r, a) {
                    var i = e.apply(t, n);
                    function o(e) {
                        u(i, r, a, o, c, "next", e);
                    }
                    function c(e) {
                        u(i, r, a, o, c, "throw", e);
                    }
                    o(void 0);
                });
            };
        }
        function h(e, t) {
            return function(e) {
                if (Array.isArray(e)) return e;
            }(e) || function(e, t) {
                var n = [], r = !0, a = !1, i = void 0;
                try {
                    for (var o, c = e[Symbol.iterator](); !(r = (o = c.next()).done) && (n.push(o.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    a = !0, i = e;
                } finally {
                    try {
                        r || null == c.return || c.return();
                    } finally {
                        if (a) throw i;
                    }
                }
                return n;
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
        }
        function p(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                    return n;
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }
        var d = function() {
            return Promise.all([ n.e("common/vendor"), n.e("components/PercentNumber") ]).then(n.bind(null, "7597"));
        }, v = {
            components: {
                HeaderBarWithCapsule: function() {
                    return n.e("components/HeaderBarWithCapsule").then(n.bind(null, "09bd"));
                },
                StockHeader: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("pages/stock/StockHeader") ]).then(n.bind(null, "4710"));
                },
                Fenshi: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("pages/stock/KindsLine/Fenshi") ]).then(n.bind(null, "44dd"));
                },
                Kline: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("pages/stock/KindsLine/Kline") ]).then(n.bind(null, "a3ce"));
                },
                KlineTip: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("pages/stock/KindsLine/KlineTip") ]).then(n.bind(null, "cc8a"));
                },
                PercentNumber: d,
                BottomTip: function() {
                    return n.e("components/BottomTip").then(n.bind(null, "d848"));
                }
            },
            mixins: [ i.default ],
            data: function() {
                return {
                    code: "",
                    otherStockInfo: null,
                    stockInfo: null,
                    cavasType: "fenshi",
                    fenshiData: null,
                    klineData: null,
                    kLineType: 0,
                    focusingKlineData: null,
                    relatedPlatesData: null
                };
            },
            watch: {
                kLineType: function() {
                    this.fetchKline();
                },
                cavasType: function() {
                    if ("fenshi" === this.cavasType && (this.fetchStockLine(), (0, o.default)("stockpage_kline_tab", {
                        category: "1D"
                    })), "kline" === this.cavasType) {
                        var e = "";
                        switch (this.kLineType) {
                          case 86400:
                            e = "Day";
                            break;

                          case 604800:
                            e = "Week";
                            break;

                          case 2592e3:
                            e = "Month";
                            break;

                          default:
                            e = "";
                        }
                        e && (0, o.default)("stockpage_kline_tab", {
                            category: e
                        });
                    }
                }
            },
            computed: {
                sortRelatedPlates: function() {
                    if (!this.otherStockInfo || !this.otherStockInfo.plates) return [];
                    var e = this.relatedPlatesData, t = p(this.otherStockInfo.plates);
                    return e ? t.sort(function(t, n) {
                        try {
                            return e[n.plateId].coreAvgPcp - e[t.plateId].coreAvgPcp;
                        } catch (e) {
                            return 1;
                        }
                    }) : t;
                }
            },
            onShow: function() {
                var e = h(getCurrentPages().slice(-1), 1)[0].options.code;
                this.code = e, wx.showLoading({
                    title: "loading...",
                    mask: !0
                }), this.loopFetchStockInfo(), this.fetchStockOtherInfo(), this.loopFetchStockLine(), 
                this.loopFetchKline();
            },
            onHide: function() {
                this.clearTimer();
            },
            onUnload: function() {
                this.clearTimer(), this.resetData();
            },
            methods: {
                fetchStockOtherInfo: function() {
                    var e = f(r.default.mark(function e() {
                        var t, n, i, o, c, l, u;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, Promise.all([ (0, a.getStockLatestLabels)([ this.code ]), (0, 
                                a.getStocksAttribute)([ this.code ]), (0, a.getRelatedPlatesByCode)(this.code) ]);

                              case 3:
                                for (u in t = e.sent, n = h(t, 3), i = n[0], o = n[1], c = n[2], l = [], c) c.hasOwnProperty(u) && l.push(s({}, c[u], {
                                    longId: u
                                }));
                                this.plates = l, this.otherStockInfo = {
                                    plates: l,
                                    labels: i && i[this.code],
                                    rong: !(!o.rzrq || !o.rzrq.isRzrq),
                                    gang: !(!o.hsgt || !o.hsgt.tradingType)
                                }, this.loopFetchRelatedPlatesData(), e.next = 15;
                                break;

                              case 12:
                                e.prev = 12, e.t0 = e.catch(0), console.error(e.t0);

                              case 15:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 0, 12 ] ]);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                fetchStockInfo: function() {
                    var e = f(r.default.mark(function e() {
                        var t;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, (0, a.getStockInfoByDdc)([ this.code ], [ "symbol", "prod_name", "last_px", "px_change_rate", "px_change", "high_px", "low_px", "turnover_ratio", "pe_rate", "turnover_value", "circulation_value", "open_px", "preclose_px", "turnover_volume", "securities_type", "trade_status" ]);

                              case 3:
                                t = e.sent, this.stockInfo = t[this.code], e.next = 10;
                                break;

                              case 7:
                                e.prev = 7, e.t0 = e.catch(0), console.error(e.t0);

                              case 10:
                                wx.hideLoading();

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 0, 7 ] ]);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                fetchStockLine: function() {
                    var e = f(r.default.mark(function e() {
                        var t, n;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if ("fenshi" === this.cavasType) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                return e.prev = 2, e.next = 5, (0, a.getStockLineByDdc)(this.code, [ "close_px", "avg_px", "px_change", "px_change_rate", "turnover_volume", "turnover_value", "tick_at" ]);

                              case 5:
                                if (t = e.sent, n = t[this.code]) {
                                    e.next = 9;
                                    break;
                                }
                                return e.abrupt("return");

                              case 9:
                                this.fenshiData = n, e.next = 15;
                                break;

                              case 12:
                                e.prev = 12, e.t0 = e.catch(2), console.error(e.t0);

                              case 15:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 2, 12 ] ]);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                fetchKline: function() {
                    var e = f(r.default.mark(function e() {
                        var t;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.kLineType) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                return e.prev = 2, e.next = 5, (0, a.getKlineByDdc)({
                                    prodCode: this.code,
                                    periodType: this.kLineType,
                                    adjustPriceType: "forward",
                                    fields: [ "open_px", "close_px", "high_px", "low_px", "px_change_rate", "turnover_volume", "turnover_value", "tick_at", "preclose_px", "ma5", "ma10", "ma20" ].join(","),
                                    tickCount: 60,
                                    timestamp: 0
                                });

                              case 5:
                                t = e.sent, this.klineData = t[this.code], e.next = 12;
                                break;

                              case 9:
                                e.prev = 9, e.t0 = e.catch(2), console.error(e.t0);

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 2, 9 ] ]);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                fetchRelatedPlatesData: function() {
                    var e = f(r.default.mark(function e() {
                        var t;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (this.plates && this.plates.length) {
                                    e.next = 2;
                                    break;
                                }
                                return e.abrupt("return");

                              case 2:
                                return e.prev = 2, e.next = 5, (0, a.getPlateInfo)(this.plates.map(function(e) {
                                    return e.plateId;
                                }), [ "plate_id", "plate_name", "core_avg_pcp" ]);

                              case 5:
                                t = e.sent, this.relatedPlatesData = t || {}, e.next = 11;
                                break;

                              case 9:
                                e.prev = 9, e.t0 = e.catch(2);

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 2, 9 ] ]);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }(),
                loopFetchRelatedPlatesData: function() {
                    var e = this;
                    this.timerRelatedPlatesInfo && (clearInterval(this.timerRelatedPlatesInfo), this.timerRelatedPlatesInfo = null), 
                    this.timerRelatedPlatesInfo = setInterval(function() {
                        e.fetchRelatedPlatesData();
                    }, 1e4), this.fetchRelatedPlatesData();
                },
                loopFetchStockInfo: function() {
                    var e = this;
                    this.timerStockInfo && (clearInterval(this.timerStockInfo), this.timerStockInfo = null), 
                    this.timerStockInfo = setInterval(function() {
                        e.fetchStockInfo();
                    }, 1e4), this.fetchStockInfo();
                },
                loopFetchStockLine: function() {
                    var e = this;
                    this.timerStockLine && (clearInterval(this.timerStockLine), this.timerStockLine = null), 
                    this.timerStockLine = setInterval(function() {
                        e.fetchStockLine();
                    }, 3e4), this.fetchStockLine();
                },
                loopFetchKline: function() {
                    this.timerKline && (clearInterval(this.timerKline), this.timerKline = null), this.fetchKline();
                },
                clearTimer: function() {
                    this.timerStockInfo && (clearInterval(this.timerStockInfo), this.timerStockInfo = null), 
                    this.timerStockLine && (clearInterval(this.timerStockLine), this.timerStockLine = null), 
                    this.timerKline && (clearInterval(this.timerKline), this.timerKline = null), this.timerRelatedPlatesInfo && (clearInterval(this.timerRelatedPlatesInfo), 
                    this.timerRelatedPlatesInfo = null);
                },
                focusingKline: function(e) {
                    this.focusingKlineData = e;
                },
                goToBkj: function(e) {
                    !e || e < 0 || ((0, o.default)("stockpage_theme_click "), wx.navigateTo({
                        url: "/pages/plate/index?plateId=".concat(e)
                    }));
                },
                resetData: function() {
                    this.code = "", this.otherStockInfo = null, this.stockInfo = null, this.cavasType = "fenshi", 
                    this.fenshiData = null, this.klineData = null, this.kLineType = 0, this.focusingKlineData = null, 
                    this.relatedPlatesData = null;
                }
            }
        };
        t.default = v;
    },
    "58ed": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), n("921b"), t(n("66fd")), e(t(n("daa5")).default);
        }).call(this, n("543d").createPage);
    },
    "8ee2": function(e, t, n) {
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
                e.kLineType = 0, e.cavasType = "fenshi";
            }, e.e1 = function(t) {
                e.kLineType = 86400, e.cavasType = "kline";
            }, e.e2 = function(t) {
                e.kLineType = 604800, e.cavasType = "kline";
            }, e.e3 = function(t) {
                e.kLineType = 2592e3, e.cavasType = "kline";
            });
        }, a = [];
        n.d(t, "a", function() {
            return r;
        }), n.d(t, "b", function() {
            return a;
        });
    },
    "9ed1": function(e, t, n) {
        var r = n("f628");
        n.n(r).a;
    },
    d020: function(e, t, n) {
        n.r(t);
        var r = n("4487"), a = n.n(r);
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        t.default = a.a;
    },
    daa5: function(e, t, n) {
        n.r(t);
        var r = n("8ee2"), a = n("d020");
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        n("9ed1");
        var o = n("2877"), c = Object(o.a)(a.default, r.a, r.b, !1, null, "4f94d86c", null);
        t.default = c.exports;
    },
    f628: function(e, t, n) {}
}, [ [ "58ed", "common/runtime", "common/vendor" ] ] ]);