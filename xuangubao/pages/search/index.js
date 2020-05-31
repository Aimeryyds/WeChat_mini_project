(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/search/index" ], {
    "0829": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), n("921b"), t(n("66fd")), e(t(n("efe3")).default);
        }).call(this, n("543d").createPage);
    },
    "0f01": function(e, t, n) {
        var c = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
                return e.keyword = t;
            });
        }, r = [];
        n.d(t, "a", function() {
            return c;
        }), n.d(t, "b", function() {
            return r;
        });
    },
    "9fd0": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = a(n("4360")), r = a(n("761b")), o = n("365c");
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e) {
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
        var u = {
            components: {
                HeaderBarWithCapsule: function() {
                    return n.e("components/HeaderBarWithCapsule").then(n.bind(null, "09bd"));
                },
                SearchPane: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("pages/search/SearchPane") ]).then(n.bind(null, "c438"));
                },
                SearchResults: function() {
                    return n.e("pages/search/SearchResults").then(n.bind(null, "0a55"));
                },
                SearchHistory: function() {
                    return n.e("pages/search/SearchHistory").then(n.bind(null, "f027"));
                }
            },
            mixins: [ a(n("21a7")).default ],
            data: function() {
                return {
                    keyword: "",
                    searchResults: null,
                    searchRecords: null
                };
            },
            computed: {
                titleBarHeight: function() {
                    return 2 * c.default.getters["device/statusBarHeight"] + 88;
                }
            },
            watch: {
                keyword: function() {
                    this.search(this.keyword);
                }
            },
            onShow: function() {
                this.searchRecords = this.getRecord();
            },
            onHide: function() {
                var e = this;
                setTimeout(function() {
                    e.keyword = "";
                }, 500);
            },
            onUnload: function() {
                var e = this;
                setTimeout(function() {
                    e.keyword = "";
                }, 500);
            },
            methods: {
                search: function(e) {
                    var t = this;
                    e ? (0, o.searchPlatesAndStocks)(e).then(function(n) {
                        e === t.keyword && (t.searchResults = n);
                    }).catch(function(e) {
                        console.error("searchPlatesAndStocks error", e), t.searchResults = null;
                    }) : this.searchResults = null;
                },
                clickStockResult: function(e) {
                    e && ((0, r.default)("search_results_stock_click"), this.clickStock(e));
                },
                clickPlateResult: function(e) {
                    e && ((0, r.default)("search_results_theme_click"), this.clickPlate(e));
                },
                clickStockHistory: function(e) {
                    e && ((0, r.default)("search_history_stock_click"), this.clickStock(e));
                },
                clickPlateHistory: function(e) {
                    e && ((0, r.default)("search_history_theme_click"), this.clickPlate(e));
                },
                clickStock: function(e) {
                    e && (this.setRecord("stock", e), this.goToStock(e.key));
                },
                clickPlate: function(e) {
                    e && (this.setRecord("plate", e), this.goToBkj(e.key));
                },
                goToBkj: function(e) {
                    !e || e < 0 || wx.redirectTo({
                        url: "/pages/plate/index?plateId=".concat(e)
                    });
                },
                goToStock: function(e) {
                    e && wx.redirectTo({
                        url: "/pages/stock/index?code=".concat(e)
                    });
                },
                getRecord: function() {
                    try {
                        var e = wx.getStorageSync("__SEARCH_RECORDS");
                        if (e) return e;
                    } catch (e) {
                        return null;
                    }
                },
                setRecord: function(e, t) {
                    var n = this.getRecord();
                    n || (n = {
                        plate: [],
                        stock: []
                    }), n[e] = [ {
                        key: t.key,
                        name: t.name
                    } ].concat(i(n[e].filter(function(e) {
                        return e && e.key !== t.key;
                    }))).slice(0, 6);
                    try {
                        wx.setStorageSync("__SEARCH_RECORDS", n);
                    } catch (e) {}
                    this.searchRecords = n;
                }
            }
        };
        t.default = u;
    },
    bf3d: function(e, t, n) {},
    c914: function(e, t, n) {
        var c = n("bf3d");
        n.n(c).a;
    },
    da1a: function(e, t, n) {
        n.r(t);
        var c = n("9fd0"), r = n.n(c);
        for (var o in c) "default" !== o && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(o);
        t.default = r.a;
    },
    efe3: function(e, t, n) {
        n.r(t);
        var c = n("0f01"), r = n("da1a");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("c914");
        var a = n("2877"), i = Object(a.a)(r.default, c.a, c.b, !1, null, "ecc6186a", null);
        t.default = i.exports;
    }
}, [ [ "0829", "common/runtime", "common/vendor" ] ] ]);