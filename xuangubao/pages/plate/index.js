(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/plate/index" ], {
    2453: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), n("921b"), e(n("66fd")), t(e(n("a609")).default);
        }).call(this, n("543d").createPage);
    },
    8472: function(t, e, n) {},
    "98f0": function(t, e, n) {
        n.r(e);
        var o = n("a3b0"), a = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    a2ff: function(t, e, n) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(e) {
                t.cavasType = "fenshi";
            }, t.e1 = function(e) {
                t.cavasType = "kline";
            });
        }, a = [];
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return a;
        });
    },
    a3b0: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = c(n("a34a")), a = c(n("4360")), i = c(n("70f2")), l = n("365c"), s = c(n("21a7")), r = c(n("761b"));
        function c(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t;
            }(t) || function(t, e) {
                var n = [], o = !0, a = !1, i = void 0;
                try {
                    for (var l, s = t[Symbol.iterator](); !(o = (l = s.next()).done) && (n.push(l.value), 
                    !e || n.length !== e); o = !0) ;
                } catch (t) {
                    a = !0, i = t;
                } finally {
                    try {
                        o || null == s.return || s.return();
                    } finally {
                        if (a) throw i;
                    }
                }
                return n;
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
        }
        function f(t, e, n, o, a, i, l) {
            try {
                var s = t[i](l), r = s.value;
            } catch (t) {
                return void n(t);
            }
            s.done ? e(r) : Promise.resolve(r).then(o, a);
        }
        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}, o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }))), o.forEach(function(e) {
                    d(t, e, n[e]);
                });
            }
            return t;
        }
        function d(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var h = {
            components: {
                HeaderBarWithCapsule: function() {
                    return n.e("components/HeaderBarWithCapsule").then(n.bind(null, "09bd"));
                },
                MainInfo: function() {
                    return n.e("pages/plate/MainInfo").then(n.bind(null, "a16f"));
                },
                FenShi: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("pages/plate/FenShi") ]).then(n.bind(null, "eaa8"));
                },
                KLine: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("pages/plate/KLine") ]).then(n.bind(null, "b66d"));
                },
                StocksList: function() {
                    return n.e("pages/plate/StocksList").then(n.bind(null, "1648"));
                },
                BottomTip: function() {
                    return n.e("components/BottomTip").then(n.bind(null, "d848"));
                },
                LoginBtn: function() {
                    return n.e("pages/plate/LoginBtn").then(n.bind(null, "0c3e"));
                },
                OpenApp: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/OpenApp") ]).then(n.bind(null, "1e6a"));
                },
                LoginPassCard: function() {
                    return n.e("components/LoginPassCard").then(n.bind(null, "16ab"));
                },
                SharePlate: function() {
                    return n.e("components/SharePlate").then(n.bind(null, "e482"));
                },
                PremiumCountDown: function() {
                    return n.e("pages/plate/PremiumCountDown").then(n.bind(null, "88c5"));
                }
            },
            mixins: [ s.default ],
            data: function() {
                return {
                    plateId: "",
                    plateInfo: null,
                    cavasType: "fenshi",
                    fenshi: null,
                    kline: null,
                    stockSymbols: [],
                    stocksRealtedInfo: {},
                    stocksDesc: {},
                    plateRealtedInfo: {},
                    shareCard: "",
                    specialPlate: "",
                    specialExtraData: {},
                    payInfo: null
                };
            },
            computed: {
                stocksWithInfo: function() {
                    var t = this;
                    return this.stockSymbols.map(function(e) {
                        return p({}, t.stocksRealtedInfo[e], t.specialExtraData[e], {
                            extraInfo: t.stocksDesc[e],
                            desc: t.stocksDesc[e] && t.stocksDesc[e].desc,
                            realtedPlates: t.stocksDesc[e] && t.stocksDesc[e].surgeStockRelatedPlates && t.stocksDesc[e].surgeStockRelatedPlates.filter(function(e) {
                                return e.plateId !== t.plateInfo.plateId;
                            }),
                            price: t.stocksRealtedInfo[e] && t.stocksRealtedInfo[e].price.toFixed(2),
                            renqilongtou: t.plateRealtedInfo.renqilongtou && t.plateRealtedInfo.renqilongtou.findIndex(function(t) {
                                return t === e;
                            }) + 1,
                            jinrilongtou: t.plateRealtedInfo.jinrilongtou && t.plateRealtedInfo.jinrilongtou.findIndex(function(t) {
                                return t === e;
                            }) + 1,
                            hangyelongtou: t.plateRealtedInfo.hangyelongtou && t.plateRealtedInfo.hangyelongtou.findIndex(function(t) {
                                return t === e;
                            }) + 1
                        });
                    });
                },
                token: function() {
                    return a.default.state.user.token;
                },
                shareStocks: function() {
                    return this.$refs.stocklist && this.$refs.stocklist.sortStock.slice(0, 2) || this.stocksWithInfo.slice(0, 2);
                }
            },
            watch: {
                cavasType: function() {
                    this.cavasType && (0, r.default)("theme_kline_tab", {
                        action_value: "fenshi" === this.cavasType ? "1D" : "Day"
                    });
                }
            },
            onShow: function() {
                var t = function(t) {
                    return function() {
                        var e = this, n = arguments;
                        return new Promise(function(o, a) {
                            var i = t.apply(e, n);
                            function l(t) {
                                f(i, o, a, l, s, "next", t);
                            }
                            function s(t) {
                                f(i, o, a, l, s, "throw", t);
                            }
                            l(void 0);
                        });
                    };
                }(o.default.mark(function t() {
                    var e, n, a, i, s, r, c, f, h, m, g, k, v, S, I, b = this;
                    return o.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e = getCurrentPages().slice(-1), n = u(e, 1), a = n[0], i = a.options.plateId, 
                            this.plateId = i, wx.showLoading({
                                title: "loading...",
                                mask: !0
                            }), this.getfenshiData(), this.getklineData(), t.prev = 6, t.next = 9, Promise.all([ (0, 
                            l.getPlateSetInfo)(i), (0, l.getPlateInfo)([ i ], [ "plate_id", "plate_name", "fund_flow", "rise_count", "fall_count", "stay_count", "core_avg_pcp", "stocks", "limit_up_count", "jinrilongtou", "renqilongtou", "hangyelongtou" ]) ]);

                          case 9:
                            if (s = t.sent, r = u(s, 2), c = r[0], f = r[1], h = c.stocks, m = c.needPay, g = c.displayAfterAt, 
                            k = c.riseCount, v = c.hangYeLongTouStocksCount, S = c.coreStocksCount, this.payInfo = {
                                needPay: m,
                                displayAfterAt: g,
                                riseCount: k,
                                hangYeLongTouStocksCount: v,
                                coreStocksCount: S
                            }, this.stocksDesc = h.reduce(function(t, e, n) {
                                return p({}, t, d({}, e.symbol || "".concat(n), e));
                            }, {}), I = f[i]) {
                                t.next = 19;
                                break;
                            }
                            return t.abrupt("return");

                          case 19:
                            this.judgeSpecialPlate(I), this.plateInfo = {
                                plateId: I.plateId,
                                plateName: I.plateName,
                                fundFlow: I.fundFlow,
                                riseCount: I.riseCount,
                                fallCount: I.fallCount,
                                stayCount: I.stayCount,
                                coreAvgPcp: I.coreAvgPcp,
                                limitUpCount: I.limitUpCount
                            }, this.plateRealtedInfo = {
                                jinrilongtou: I.jinrilongtou || [],
                                renqilongtou: I.renqilongtou || [],
                                hangyelongtou: I.hangyelongtou || []
                            }, this.stockSymbols = h.map(function(t, e) {
                                return t.symbol || "".concat(e);
                            }), this.loopGetStocksInfo().then(function(t) {
                                wx.hideLoading();
                            }), t.next = 30;
                            break;

                          case 26:
                            t.prev = 26, t.t0 = t.catch(6), console.error(t.t0), wx.hideLoading();

                          case 30:
                            (function t() {
                                b.timerCanvasLoop && (clearTimeout(b.timerCanvasLoop), b.timerCanvasLoop = null), 
                                b.timerCanvasLoop = setTimeout(function() {
                                    try {
                                        b["get".concat(b.cavasType, "Data")](), t();
                                    } catch (t) {}
                                }, 3e4);
                            })();

                          case 32:
                          case "end":
                            return t.stop();
                        }
                    }, t, this, [ [ 6, 26 ] ]);
                }));
                return function() {
                    return t.apply(this, arguments);
                };
            }(),
            onHide: function() {
                this.timerCanvasLoop && (clearTimeout(this.timerCanvasLoop), this.timerCanvasLoop = null), 
                this.timerStockLoop && (clearInterval(this.timerStockLoop), this.timerStockLoop = null);
            },
            onUnload: function() {
                this.timerCanvasLoop && (clearTimeout(this.timerCanvasLoop), this.timerCanvasLoop = null), 
                this.timerStockLoop && (clearInterval(this.timerStockLoop), this.timerStockLoop = null), 
                this.resetData();
            },
            onShareAppMessage: function(t) {
                if (this.plateId) return {
                    title: "板块-".concat(this.plateInfo.plateName),
                    path: "/pages/plate/index?plateId=".concat(this.plateId),
                    imageUrl: this.shareCard
                };
            },
            methods: {
                getfenshiData: function() {
                    var t = this;
                    this.plateId && Promise.all([ (0, l.getPlateIndexRealtime)({
                        plateId: this.plateId
                    }), (0, l.getSZIndexRealtimeByDdc)() ]).then(function(e) {
                        var n = u(e, 2), o = n[0], a = n[1];
                        t.fenshi = {
                            plateFenshi: o.items.map(function(t) {
                                return {
                                    index: 100 * (t.index - 1),
                                    time: Math.floor(t.time / 60)
                                };
                            }),
                            hushenFenshi: a["000300.SS"].lines.map(function(t) {
                                return {
                                    index: (t.closePx - a["000300.SS"].preClosePx) / a["000300.SS"].preClosePx * 100,
                                    time: Math.floor(t.tickAt / 60)
                                };
                            })
                        };
                    }).catch(function() {});
                },
                getklineData: function() {
                    var t = this;
                    Promise.all([ (0, l.getPalteIndexHistory)({
                        plateId: this.plateId
                    }), (0, l.getSZIndexKLineByDdc)(60) ]).then(function(e) {
                        var n = u(e, 2), o = n[0], a = n[1];
                        if (o) {
                            var l = (a = a.slice(-o.length))[0].closePx, s = o[0].close;
                            t.kline = {
                                platekline: o.map(function(t) {
                                    return {
                                        close: (t.close - s) / s * 100,
                                        high: (t.high - s) / s * 100,
                                        low: (t.low - s) / s * 100,
                                        open: (t.open - s) / s * 100,
                                        time: t.dateTime,
                                        timeString: (0, i.default)(1e3 * t.dateTime, "YYYY-MM-DD")
                                    };
                                }),
                                hushenkline: a.map(function(t) {
                                    return {
                                        time: t.tickAt,
                                        value: (t.closePx - l) / l * 100
                                    };
                                })
                            };
                        }
                    }).catch(function(t) {
                        console.error(t);
                    });
                },
                getStocksInfo: function() {
                    var t, e = this;
                    if (!this.stockSymbols || !this.stockSymbols.length) return Promise.resolve();
                    switch (this.specialPlate) {
                      case "gsz":
                        t = (0, l.getSPlateGSZ)();
                        break;

                      case "gsztq":
                        t = (0, l.getSPlateGSZCompleted)();
                        break;

                      case "fpg":
                        t = (0, l.getSPlateResumption)();
                        break;

                      case "stg":
                        t = (0, l.getSPlateST)();
                        break;

                      case "stzm":
                        t = (0, l.getSPlateSTRevoked)();
                        break;

                      case "cxg":
                        t = (0, l.getSPlateNearlyNew)();
                    }
                    return t && t.then(function(t) {
                        e.specialExtraData = Object.assign({}, e.specialExtraData, t.reduce(function(t, e) {
                            return p({}, t, d({}, e.symbol, e));
                        }, {}));
                    }).catch(function(t) {
                        console.error("merge specialExtraData", t);
                    }), (0, l.getPlateInfo)([ this.plateId ], [ "plate_id", "plate_name", "fund_flow", "rise_count", "fall_count", "stay_count", "core_avg_pcp", "limit_up_count" ]).then(function(t) {
                        var n = t[e.plateId];
                        n && (e.plateInfo = {
                            plateId: n.plateId,
                            plateName: n.plateName,
                            fundFlow: n.fundFlow,
                            riseCount: n.riseCount,
                            fallCount: n.fallCount,
                            stayCount: n.stayCount,
                            coreAvgPcp: n.coreAvgPcp,
                            limitUpCount: n.limitUpCount
                        });
                    }).catch(function() {}), (0, l.getStockReal)(this.stockSymbols, [ "stock_chi_name", "symbol", "price", "change_percent", "last_limit_up", "non_restricted_capital", "m_days_n_boards_days", "m_days_n_boards_boards", "fund_flow", "limit_status", "nearly_new_break_days", "limit_up_days" ]).then(function(t) {
                        e.stocksRealtedInfo = Object.assign({}, e.stocksRealtedInfo, t);
                    }).catch(function(t) {
                        console.error(t);
                    });
                },
                loopGetStocksInfo: function() {
                    var t = this;
                    return this.timerStockLoop && (clearInterval(this.timerStockLoop), this.timerStockLoop = null), 
                    this.timerStockLoop = setInterval(function() {
                        t.getStocksInfo();
                    }, 1e4), this.getStocksInfo();
                },
                unlockPlate: function() {
                    this.subscribe(), (0, r.default)("Theme_Stockpool_Unlock_Click", {
                        Theme_id: this.plateId,
                        Type: "Plate"
                    });
                },
                goToStock: function(t) {
                    if (!t) return this.subscribe(), void (0, r.default)("Theme_Stockpool_Unlock_Click", {
                        Theme_id: this.plateId,
                        Type: "Stock"
                    });
                    (0, r.default)("theme_stock_click", {
                        stock_id: t
                    }), wx.navigateTo({
                        url: "/pages/stock/index?code=".concat(t)
                    });
                },
                goToPlate: function(t) {
                    !t || String(this.plateId) === String(t) || Number(t) < 0 || ((0, r.default)("theme_topgainertheme_click"), 
                    wx.navigateTo({
                        url: "/pages/plate/index?plateId=".concat(t)
                    }));
                },
                finishDrawCard: function(t) {
                    this.shareCard = t;
                },
                login: function() {
                    (0, r.default)("theme_login_click");
                },
                judgeSpecialPlate: function(t) {
                    if (t) {
                        var e = t.plateId, n = t.plateName;
                        return "19322062" === String(e) || "高送转" === n ? this.specialPlate = "gsz" : "17136297" === String(e) || "高送转 · 填权" === n ? this.specialPlate = "gsztq" : "24291465" === String(e) || "复牌股" === n ? this.specialPlate = "fpg" : "24898553" === String(e) || "ST股" === n ? this.specialPlate = "stg" : "17290881" === String(e) || "ST摘帽" === n ? this.specialPlate = "stzm" : "17864537" === String(e) || "次新股" === n ? this.specialPlate = "cxg" : "";
                    }
                },
                timeover: function() {
                    wx.redirectTo({
                        url: "/pages/plate/index?plateId=".concat(this.plateId)
                    });
                },
                subscribe: function() {
                    wx.showModal({
                        title: "提示",
                        content: "前往选股宝APP查看完整股票池",
                        showCancel: !1,
                        success: function(t) {
                            t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
                        }
                    });
                },
                resetData: function() {
                    this.plateId = "", this.plateInfo = null, this.cavasType = "fenshi", this.fenshi = null, 
                    this.kline = null, this.stockSymbols = [], this.stocksRealtedInfo = {}, this.stocksDesc = {}, 
                    this.plateRealtedInfo = {}, this.shareCard = "", this.specialPlate = "", this.specialExtraData = {};
                },
                openApp: function() {
                    (0, r.default)("topgainer_toapp_click", {
                        position: "theme"
                    });
                }
            }
        };
        e.default = h;
    },
    a609: function(t, e, n) {
        n.r(e);
        var o = n("a2ff"), a = n("98f0");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("bd09");
        var l = n("2877"), s = Object(l.a)(a.default, o.a, o.b, !1, null, "21eaa92c", null);
        e.default = s.exports;
    },
    bd09: function(t, e, n) {
        var o = n("8472");
        n.n(o).a;
    }
}, [ [ "2453", "common/runtime", "common/vendor" ] ] ]);