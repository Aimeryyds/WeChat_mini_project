(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/searchstock/searchstock" ], {
    "0c7b": function(t, e, a) {
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.hotData, function(e, a) {
                var n = t._f("formatPrecent")(e && e.gain);
                return {
                    $orig: t.__get_orig(e),
                    f0: n
                };
            })), a = t.__map(t.searchData, function(e, a) {
                var n = t._f("price")(e.newPrice), o = t._f("formatPrecent")(e.gain);
                return {
                    $orig: t.__get_orig(e),
                    f1: n,
                    f2: o
                };
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e,
                    l1: a
                }
            });
        }, o = [];
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {});
    },
    "0c87": function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("efb7"), a("921b"), e(a("66fd")), t(e(a("e0b8")).default);
        }).call(this, a("543d").createPage);
    },
    "3b1e": function(t, e, a) {
        a.r(e);
        var n = a("fc85"), o = a.n(n);
        for (var i in n) "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = o.a;
    },
    "6dc5": function(t, e, a) {
        var n = a("e89f");
        a.n(n).a;
    },
    e0b8: function(t, e, a) {
        a.r(e);
        var n = a("0c7b"), o = a("3b1e");
        for (var i in o) "default" !== i && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(i);
        a("6dc5");
        var c = a("f0c5"), r = Object(c.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = r.exports;
    },
    e89f: function(t, e, a) {},
    fc85: function(t, e, a) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), a.push.apply(a, n);
                }
                return a;
            }
            function i(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var c = a("2f62"), r = (n(a("9882")), n(a("428e"))), s = n(a("6e5f")), u = {
                data: function() {
                    return {
                        showState: !0,
                        searchText: "",
                        searchContent: "",
                        hotData: [],
                        searchData: [],
                        checkTimer: null,
                        searchTimer: null,
                        searching: !1,
                        searchStatus: !1
                    };
                },
                computed: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? o(Object(a), !0).forEach(function(e) {
                            i(t, e, a[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                        });
                    }
                    return t;
                }({}, (0, c.mapState)([ "oldMarketMap", "newMarketMap", "loginInfo" ])),
                onLoad: function() {
                    wx.showShareMenu({
                        withShareTicket: !0
                    }), t.loadFontFace({
                        family: "THS",
                        source: 'url("https://i.thsi.cn/m/fonts/THSMoneyfont-Medium.ttf")',
                        success: function() {}
                    });
                },
                onShow: function() {
                    this.getHotData();
                },
                onShareAppMessage: function(t) {
                    return {
                        path: "/pages/index/index?url=".concat("/pages/searchstock/searchstock", "&shareType=searchstock")
                    };
                },
                methods: {
                    hidIcon: function() {
                        this.showState = !1, this.searchText = "请输入股票", this.searchStatus = !1;
                    },
                    showIcon: function() {
                        this.searchStatus = !0, this.searchContent || (this.showState = !0, this.searchText = "");
                    },
                    inputHandle: function(t) {
                        var e = this;
                        this.searchTimer && clearTimeout(this.searchTimer), this.searchTimer = setTimeout(function() {
                            t.target.value && !e.searchStatus && e.getSearchData(t.target.value);
                        }, 300);
                    },
                    jump: function(e) {
                        var a;
                        (a = "{}" != JSON.stringify(this.newMarketMap) ? s.default.getMarkAndCode(e.id, e.code, this.newMarketMap) : s.default.getMarkAndCode(e.id, e.code, this.oldMarketMap)) && e.name && t.navigateTo({
                            url: "../hq/hq?marketAndCode=".concat(a, "&name=").concat(e.name)
                        });
                    },
                    getPhoneNumber: function(e) {
                        var a = this;
                        if (e.detail.iv && e.detail.encryptedData) {
                            var n = {
                                data: {
                                    iv: e.detail.iv,
                                    encryptedData: e.detail.encryptedData
                                },
                                http: this.$http
                            };
                            this.$store.dispatch("promiseLogin", n).then(function() {
                                a.getHotData(), a.searchContent && a.getSearchData(a.searchContent);
                            }).catch(function() {
                                console.log("登录失败了");
                            });
                        } else t.showToast({
                            icon: "none",
                            title: "您未授权手机号"
                        });
                    },
                    optionChange: function(e) {
                        var a = "", n = "", o = this.$http, i = {
                            token: this.loginInfo.token,
                            code: e.code
                        };
                        e.optional ? (a = "正在删除中...", n = "删除", o += "/wechatApplication/optional/deleteOptionalStock", 
                        i.operation = "delete") : (a = "正在添加中...", n = "添加", o += "/wechatApplication/optional/addOptionalStock", 
                        i.id = e.id, i.operation = "add"), t.showLoading({
                            title: a
                        }), t.request({
                            url: o,
                            data: i,
                            method: "POST",
                            time: 3e3,
                            success: function(a) {
                                t.hideLoading(), 0 == a.data.status_code ? (t.showToast({
                                    title: n + "成功",
                                    icon: e.optional ? "none" : "success"
                                }), e.optional = !e.optional) : t.showToast({
                                    title: n + "失败",
                                    icon: "none"
                                });
                            },
                            fail: function(e) {
                                console.log(e), t.hideLoading(), t.showToast({
                                    title: n + "失败",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    getHotData: function() {
                        var e = this;
                        this.hotData = [];
                        var a = this.loginInfo.account ? this.loginInfo.token : null;
                        t.request({
                            url: this.$http + "/wechatApplication/search/everyOneIsSearching",
                            method: "POST",
                            time: 3e3,
                            data: {
                                token: a
                            },
                            success: function(t) {
                                if (0 == t.data.status_code && t.data.result.list) {
                                    var a = JSON.parse(t.data.result.list);
                                    e.hotData = e.formatHotData(a);
                                }
                            },
                            fail: function(t) {
                                console.log(t);
                            }
                        });
                    },
                    formatHotData: function(t) {
                        var e = [];
                        return t.length > 0 && t.forEach(function(t) {
                            var a = t;
                            t.zhangdiefu && (a.gain = t.zhangdiefu.replace(/%/, "")), e.push(a);
                        }), e;
                    },
                    getSearchData: function(e) {
                        var a = this, n = this.loginInfo.account ? this.loginInfo.token : null;
                        t.showLoading({
                            title: "加载中..."
                        }), this.searchData = [], this.searching = !0, t.request({
                            url: this.$http + "/wechatApplication/search/intelligentSearch",
                            method: "POST",
                            time: 3e3,
                            data: {
                                token: n,
                                query: e
                            },
                            success: function(e) {
                                if (t.hideLoading(), 0 == e.data.status_code && e.data.result.query == a.searchContent) {
                                    if (e.data.result.list) {
                                        var n = JSON.parse(e.data.result.list);
                                        n.length > 0 ? a.searchData = (0, r.default)(n, a.searchContent, [ "name", "code" ]) : a.searchData = [];
                                    }
                                } else a.searchData = [];
                            },
                            fail: function(e) {
                                t.hideLoading(), console.log(e);
                            },
                            complete: function() {
                                a.searching = !1;
                            }
                        });
                    }
                }
            };
            e.default = u;
        }).call(this, a("543d").default);
    }
}, [ [ "0c87", "common/runtime", "common/vendor" ] ] ]);