(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/home/Tag" ], {
    "0f60": function(t, e, o) {
        var n = o("6f32");
        o.n(n).a;
    },
    "2b9e": function(t, e, o) {
        o.r(e);
        var n = o("ce50"), r = o.n(n);
        for (var a in n) "default" !== a && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(a);
        e.default = r.a;
    },
    "6f32": function(t, e, o) {},
    b99f: function(t, e, o) {
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.getColor(t.tag.pcp)), o = (100 * t.tag.pcp).toFixed(2);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    g0: o
                }
            });
        }, r = [];
        o.d(e, "a", function() {
            return n;
        }), o.d(e, "b", function() {
            return r;
        });
    },
    ce50: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = a(o("4360")), r = a(o("761b"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function c(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, o = new Array(t.length); e < t.length; e++) o[e] = t[e];
                    return o;
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
                    return o.e("pages/home/SortTab").then(o.bind(null, "31ca"));
                },
                StockItem: function() {
                    return o.e("pages/home/StockItem").then(o.bind(null, "f969"));
                }
            },
            props: {
                tag: {
                    type: Object
                }
            },
            data: function() {
                return {
                    sortRule: {
                        targetProp: "Pcp",
                        mode: "default"
                    }
                };
            },
            computed: {
                stocks: function() {
                    var t = this.sortRule, e = t.mode, o = t.targetProp;
                    if ("default" === e) {
                        var n = [], r = [], a = [];
                        if (!this.tag.Stocks) return [];
                        this.tag.Stocks.forEach(function(t) {
                            t.upLimit ? n.push(t) : r.push(t);
                        });
                        var u = n.filter(function(t) {
                            return t.boardCount || a.push(t), t.boardCount;
                        });
                        return u = u.sort(function(t, e) {
                            return e.boardCount === t.boardCount ? t.enterTime - e.enterTime : e.boardCount - t.boardCount;
                        }), a = a.sort(function(t, e) {
                            return t.enterTime - e.enterTime;
                        }), r = r.sort(function(t, e) {
                            return e.pxChangeRate - t.pxChangeRate;
                        }), [].concat(c(u), c(a), c(r));
                    }
                    return c(this.tag.Stocks).sort(function(t, n) {
                        return "desc" === e ? n[o] - t[o] : "incr" === e ? t[o] - n[o] : void 0;
                    });
                },
                titleBarHeight: function() {
                    return n.default.getters["device/statusBarHeight"] + 44;
                }
            },
            watch: {
                "$parent.$parent.scrollToPlate": function(t) {
                    this.scrollToSelf(t);
                }
            },
            mounted: function() {
                this.scrollToSelf();
            },
            methods: {
                scrollToSelf: function(t) {
                    var e = this;
                    t || (t = this.$parent.$parent.scrollToPlate), this.$nextTick(function() {
                        if (t && t === e.tag.name) {
                            var o = e;
                            e.createSelectorQuery().select("#tag").boundingClientRect().exec(function(t) {
                                wx.createSelectorQuery().selectViewport().scrollOffset().exec(function(e) {
                                    wx.pageScrollTo({
                                        scrollTop: Math.abs(t[0].top + e[0].scrollTop) - o.titleBarHeight - 5
                                    });
                                });
                            });
                        }
                    });
                },
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
                },
                goToBkj: function(t) {
                    !t || t < 0 || ((0, r.default)("topGainer_theme"), wx.navigateTo({
                        url: "/pages/plate/index?plateId=".concat(t)
                    }));
                },
                goToStock: function(t) {
                    t && ((0, r.default)("topgainer_stock_click"), wx.navigateTo({
                        url: "/pages/stock/index?code=".concat(t)
                    }));
                },
                getColor: function(t) {
                    return "number" == typeof t ? t > 0 ? "#E62E4D " : t < 0 ? "#0ABFA1" : "#333" : "#ccc";
                }
            }
        };
        e.default = u;
    },
    f886: function(t, e, o) {
        o.r(e);
        var n = o("b99f"), r = o("2b9e");
        for (var a in r) "default" !== a && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(a);
        o("0f60");
        var c = o("2877"), u = Object(c.a)(r.default, n.a, n.b, !1, null, "8e19a200", null);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/home/Tag-create-component", {
    "pages/home/Tag-create-component": function(t, e, o) {
        o("543d").createComponent(o("f886"));
    }
}, [ [ "pages/home/Tag-create-component" ] ] ]);