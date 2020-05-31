(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/index" ], {
    2484: function(t, e, n) {
        var a = function() {
            var t = this, e = (t.$createElement, t._self._c, t.tagsList.slice(0, 3));
            t._isMounted || (t.e0 = function(e) {
                t.showCataLog = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    g0: e
                }
            });
        }, r = [];
        n.d(e, "a", function() {
            return a;
        }), n.d(e, "b", function() {
            return r;
        });
    },
    "277f": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), n("921b"), e(n("66fd")), t(e(n("f5b8")).default);
        }).call(this, n("543d").createPage);
    },
    "3ef7": function(t, e, n) {
        n.r(e);
        var a = n("b110"), r = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e.default = r.a;
    },
    "42d8": function(t, e, n) {
        var a = n("dcd3");
        n.n(a).a;
    },
    b110: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = l(n("a34a")), r = n("5e23"), o = n("340b"), i = n("365c"), s = l(n("21a7")), c = l(n("dc57")), u = l(n("761b"));
        function l(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function f(t) {
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
        function h(t, e) {
            return function(t) {
                if (Array.isArray(t)) return t;
            }(t) || function(t, e) {
                var n = [], a = !0, r = !1, o = void 0;
                try {
                    for (var i, s = t[Symbol.iterator](); !(a = (i = s.next()).done) && (n.push(i.value), 
                    !e || n.length !== e); a = !0) ;
                } catch (t) {
                    r = !0, o = t;
                } finally {
                    try {
                        a || null == s.return || s.return();
                    } finally {
                        if (r) throw o;
                    }
                }
                return n;
            }(t, e) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            }();
        }
        function d(t, e, n, a, r, o, i) {
            try {
                var s = t[o](i), c = s.value;
            } catch (t) {
                return void n(t);
            }
            s.done ? e(c) : Promise.resolve(c).then(a, r);
        }
        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {}, a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }))), a.forEach(function(e) {
                    m(t, e, n[e]);
                });
            }
            return t;
        }
        function m(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var g = new r.schema.Entity("tags", {}, {
            idAttribute: "name"
        }), y = new r.schema.Entity("stocks", {}, {
            idAttribute: "code"
        }), v = [ g ], w = [ y ], b = {
            components: {
                HeaderBarWithTitle: function() {
                    return n.e("components/HeaderBarWithTitle").then(n.bind(null, "2860"));
                },
                SearchPane: function() {
                    return n.e("pages/home/SearchPane").then(n.bind(null, "d5dd"));
                },
                Meta: function() {
                    return n.e("pages/home/Meta").then(n.bind(null, "40e5"));
                },
                Tags: function() {
                    return n.e("pages/home/Tags").then(n.bind(null, "51b3"));
                },
                EmptyHolder: function() {
                    return n.e("pages/home/EmptyHolder").then(n.bind(null, "7ada"));
                },
                BottomTip: function() {
                    return n.e("components/BottomTip").then(n.bind(null, "d848"));
                },
                ActionBar: function() {
                    return n.e("pages/home/ActionBar").then(n.bind(null, "332a"));
                },
                OpenApp: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/OpenApp") ]).then(n.bind(null, "1e6a"));
                },
                ShareHome: function() {
                    return n.e("components/ShareHome").then(n.bind(null, "cc77"));
                }
            },
            mixins: [ s.default ],
            data: function() {
                return {
                    marketInfo: {
                        temperature: "--%",
                        zbl: "--%",
                        up: "--",
                        down: "--",
                        performance: "--%"
                    },
                    entities: {
                        tags: {},
                        stocks: {}
                    },
                    tags: [],
                    stocks: [],
                    day: null,
                    manualUpdatedAt: "",
                    details: {},
                    scrollToPlate: "",
                    showActionBar: !1,
                    showCataLog: !1,
                    firstLoadingEnd: !1,
                    todayisTradingDay: !1,
                    shareCard: "",
                    hotSearchTip: "",
                    pageScrollHandler: (0, c.default)(function(t) {
                        var e = t.scrollTop;
                        e > 280 && !this.showActionBar && (this.showActionBar = !0), e < 280 && this.showActionBar && (this.showActionBar = !1);
                    }, 100),
                    hideCollectTip: !0 === wx.getStorageSync("__HIDE_COLLECT_TIP__")
                };
            },
            computed: {
                tagsList: function() {
                    var t = this;
                    return this.entities.tags ? this.tags.map(function(e) {
                        var n = t.entities.tags[e], a = n.stocks;
                        if ((a = a ? a.map(function(e) {
                            return p({}, t.entities.stocks[e], {
                                boardCount: (t.entities.stocks[e].mDaysNBoards.match(/天(\d)板/) || [])[1]
                            });
                        }) : []).length) return p({}, n, {
                            Stocks: a,
                            pcp: t.details[n.name] || t.details[n.id]
                        });
                    }).filter(function(t) {
                        return t;
                    }) : [];
                },
                flashDate: function() {
                    return this.day ? (0, o.format)(this.day, "YYYY-MM-DD") : (0, o.format)(new Date(), "YYYY-MM-DD");
                },
                tgDate: function() {
                    return this.day ? (0, o.format)(this.day, "YYYYMMDD") : (0, o.format)(new Date(), "YYYYMMDD");
                },
                tgDate2: function() {
                    return this.day ? new Date(new Date(this.day).setHours(0, 0, 0, 0)) / 1e3 : new Date(new Date().setHours(0, 0, 0, 0)) / 1e3;
                },
                timeStrng: function() {
                    return this.day ? this.manualUpdatedAt ? (0, o.format)(new Date(1e3 * this.manualUpdatedAt), "M月D日 HH:mm更新") : (0, 
                    o.format)(new Date(this.day), "M月D日") : (0, o.format)(new Date(), "M月D日");
                },
                daynumber: function() {
                    return this.day ? this.day.getTime() : Date.now();
                }
            },
            onShow: function() {
                var t = function(t) {
                    return function() {
                        var e = this, n = arguments;
                        return new Promise(function(a, r) {
                            var o = t.apply(e, n);
                            function i(t) {
                                d(o, a, r, i, s, "next", t);
                            }
                            function s(t) {
                                d(o, a, r, i, s, "throw", t);
                            }
                            i(void 0);
                        });
                    };
                }(a.default.mark(function t() {
                    var e, n, r, s, c, u, l, f = this;
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            if (e = getCurrentPages().slice(-1), n = h(e, 1), r = n[0], !(s = r.options.date)) {
                                t.next = 6;
                                break;
                            }
                            this.day = new Date(Number(s)), t.next = 18;
                            break;

                          case 6:
                            return t.prev = 6, t.next = 9, (0, i.isTradingDay)();

                          case 9:
                            c = t.sent, u = 1e3 * c.now, l = new Date(1e3 * c.today).setHours(9), this.todayisTradingDay = c.isTradingDay, 
                            !c.isTradingDay || u < l ? this.day = new Date(1e3 * c.prevTradingDay) : this.day = new Date(1e3 * c.now), 
                            t.next = 18;
                            break;

                          case 16:
                            t.prev = 16, t.t0 = t.catch(6);

                          case 18:
                            this.fetchTopGainer(), this.getHotSearchPool(), this.timer = setInterval(function() {
                                (0, o.isToday)(f.day) && f.fetchTopGainer();
                            }, 1e4);

                          case 21:
                          case "end":
                            return t.stop();
                        }
                    }, t, this, [ [ 6, 16 ] ]);
                }));
                return function() {
                    return t.apply(this, arguments);
                };
            }(),
            onHide: function() {
                this.timer && (clearInterval(this.timer), this.timer = null);
            },
            onUnload: function() {
                this.timer && (clearInterval(this.timer), this.timer = null), this.dataReset();
            },
            onPageScroll: function(t) {
                this.pageScrollHandler(t);
            },
            onShareAppMessage: function(t) {
                return {
                    title: "涨停股实时解读",
                    path: "/pages/home/index?date=".concat(this.day.getTime()),
                    imageUrl: this.shareCard
                };
            },
            methods: {
                fetchMeta: function() {
                    var t = this;
                    (0, i.getThermometerByFlash)(this.flashDate).then(function(e) {
                        var n = e.slice(-1)[0];
                        if (n) {
                            var a = n.limitDownCount, r = n.limitUpBrokenRatio, o = n.limitUpCount, i = n.marketTemperature, s = n.yesterdayLimitUpAvgPcp;
                            t.$set(t.marketInfo, "temperature", Math.round(i)), t.$set(t.marketInfo, "zbl", Math.round(100 * r)), 
                            t.$set(t.marketInfo, "performance", 100 * s), t.$set(t.marketInfo, "up", o), t.$set(t.marketInfo, "down", a);
                        }
                    }).catch(function(t) {
                        console.error("getThermometerByFlash", t);
                    });
                },
                fetchTopGainer: function() {
                    var t = this;
                    this.fetchMeta(), Promise.all([ (0, i.getSurgeStockPlates)(this.tgDate2), (0, i.getSurgeStockStocks)(this.tgDate) ]).then(function(e) {
                        var n = h(e, 2), a = n[0], s = n[1], c = 1e3 * t.tgDate2, u = a.items, l = s, f = (0, 
                        r.normalize)(u, v), d = (0, r.normalize)(l, w), m = !(0, o.isToday)(c);
                        l.forEach(function(t) {
                            t.plates && t.plates.forEach(function(e) {
                                var n = f.entities.tags[e.name];
                                n && (n.stocks ? n.stocks.push(t.code) : n.stocks = [ t.code ]);
                            });
                        }), t.entities = p({}, t.entities, f.entities, d.entities), t.tags = f.result, t.stocks = d.result;
                        var g = [];
                        t.tags.map(function(e) {
                            return t.entities.tags[e];
                        }).forEach(function(t) {
                            t && (!t.id || t.id < 0 || "0" === t.id || g.push(t.id));
                        }), m ? (0, i.getPlateHistoryData)(g, t.tgDate2).then(function(e) {
                            t.details = p({}, t.details, e.items);
                        }).catch(function(t) {
                            console.error("getPlateInfo error", t);
                        }) : (t.manualUpdatedAt = a.manualUpdatedAt, (0, i.getPlateInfo)(g, [ "core_avg_pcp", "plate_name" ]).then(function(e) {
                            var n = {};
                            for (var a in e) if (e.hasOwnProperty(a)) {
                                var r = e[a];
                                n[r.plateName] = r.coreAvgPcp;
                            }
                            t.details = p({}, t.details, n);
                        }).catch(function(t) {
                            console.error("getPlateInfo error", t);
                        })), t.day = new Date(c), t.firstLoadingEnd = !0;
                    }).catch(function(e) {
                        t.firstLoadingEnd = !0, console.error("fetchTopGainer error", e), t.dataReset();
                    });
                },
                selectPlate: function(t) {
                    (0, u.default)("topgainer_theme_click"), t && (this.scrollToPlate = t);
                },
                scrollTop: function() {
                    (0, u.default)("topgainer_totop_click");
                    var t = this;
                    wx.pageScrollTo({
                        scrollTop: 0,
                        success: function() {
                            t.showActionBar = !1;
                        }
                    });
                },
                getHotSearchPool: function() {
                    var t = this;
                    (0, i.getHotSearchPool)().then(function(e) {
                        var n = [].concat(f(e.hotSearches.map(function(t) {
                            return t.name;
                        })), f(e.bankuaijis.map(function(t) {
                            return t.name;
                        })), f(e.stocks.map(function(t) {
                            return t.name;
                        })));
                        t.hotSearchTip = "大家都在搜：".concat(n[Math.floor(Math.random() * n.length)] || "");
                    });
                },
                search: function(t) {
                    (0, u.default)("topgainer_search_click", {
                        position: t
                    }), wx.navigateTo({
                        url: "/pages/search/index"
                    });
                },
                openCateLog: function(t) {
                    (0, u.default)("topgainer_theme_more", {
                        position: t
                    }), this.showCataLog = !0;
                },
                openApp: function() {
                    (0, u.default)("topgainer_toapp_click", {
                        position: "topgainer"
                    });
                },
                finishDrawCard: function(t) {
                    this.shareCard = t;
                },
                dataReset: function() {
                    this.marketInfo = {
                        temperature: "--%",
                        zbl: "--%",
                        up: "--",
                        down: "--",
                        performance: "--%"
                    }, this.entities = {
                        tags: {},
                        stocks: {}
                    }, this.tags = [], this.stocks = [], this.day = null, this.manualUpdatedAt = "", 
                    this.details = {}, this.scrollToPlate = "", this.showActionBar = !1, this.showCataLog = !1, 
                    this.firstLoadingEnd = !1, this.todayisTradingDay = !1, this.shareCard = "";
                },
                hideTip: function() {
                    wx.setStorageSync("__HIDE_COLLECT_TIP__", !0), this.hideCollectTip = !0;
                }
            }
        };
        e.default = b;
    },
    dcd3: function(t, e, n) {},
    f5b8: function(t, e, n) {
        n.r(e);
        var a = n("2484"), r = n("3ef7");
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        n("42d8");
        var i = n("2877"), s = Object(i.a)(r.default, a.a, a.b, !1, null, "e15089c0", null);
        e.default = s.exports;
    }
}, [ [ "277f", "common/runtime", "common/vendor" ] ] ]);