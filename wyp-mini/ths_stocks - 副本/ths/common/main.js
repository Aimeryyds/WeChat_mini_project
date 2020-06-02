(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "85ce": function(t, e, n) {
        var o = n("935d");
        n.n(o).a;
    },
    "935d": function(t, e, n) {},
    "94a6": function(t, e, n) {
        n.r(e);
        var o = n("a1a3"), i = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = i.a;
    },
    a1a3: function(t, e, n) {
        (function(t) {
            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach(function(e) {
                        r(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
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
            var a = n("2f62"), c = {
                onLaunch: function() {
                    this.getNavHeight(), this.getStoreLoginInfo(), this.getiPhoneX(), this.$store.dispatch("getMarketMap"), 
                    this.init(), this.$store.dispatch("getToken", {
                        first: !1
                    }), t.loadFontFace({
                        family: "THS",
                        source: 'url("https://i.thsi.cn/m/fonts/THSMoneyfont-Medium.ttf")',
                        success: function() {}
                    });
                },
                globalData: {
                    userInfo: null
                },
                onShow: function() {
                    this.sysInfo.rheight || this.getNavHeight();
                },
                onHide: function() {},
                computed: i({}, (0, a.mapState)([ "oldMarketMap", "newMarketMap", "sysInfo", "loginInfo" ])),
                methods: i({}, a.mapActions.getMarketMap, {
                    getiPhoneX: function() {
                        var t = this;
                        wx.getSystemInfo({
                            success: function(e) {
                                var n = e.model.replace(/\s/g, "").toLocaleLowerCase(), o = e.system.replace(/\s/g, "").toLocaleLowerCase();
                                [ "iphonex", "iphonrx" ].some(function(t) {
                                    return n.match(t);
                                }) && (t.globalData.isX = !0, t.$store.commit("setiPhoneX", !0)), o.match("ios") && (t.globalData.isIOS = !0);
                                var i = e.model;
                                (/iphone\sx/i.test(i) || /iphone/i.test(i) && /unknown/.test(i) || /iphone\s11/i.test(i)) && (t.globalData.isX = !0, 
                                t.$store.commit("setiPhoneX", !0));
                            },
                            fail: function(t) {
                                console.log(t), this.getiPhoneX();
                            }
                        });
                    },
                    getNavHeight: function() {
                        this.getSysInfo();
                    },
                    getSysInfo: function() {
                        var e = t.getSystemInfoSync();
                        this.formatSysInfo(e);
                    },
                    formatSysInfo: function(t) {
                        if (wx.getMenuButtonBoundingClientRect) {
                            var e = wx.getMenuButtonBoundingClientRect(), n = 8;
                            t.statusBarHeight && (n = e.top - t.statusBarHeight);
                            var o = t.windowWidth - e.left - e.width / 4, i = t.statusBarHeight + 2 * n + 32, r = 2 * n + 32;
                            this.$store.commit("setSysInfo", {
                                rheight: i,
                                cheight: r,
                                meunLeft: o,
                                windowHeight: t.windowHeight
                            });
                        }
                        "devtools" == t.platform ? this.$store.commit("setPlatform", "pc") : "ios" == t.platform ? this.$store.commit("setPlatform", "ios") : "android" == t.platform && this.$store.commit("setPlatform", "android");
                    },
                    getUserLoginInfo: function(t) {
                        var e = this;
                        this.$store.dispatch("getToken", {
                            first: !0
                        }).then().catch(function() {
                            setTimeout(function() {
                                e.getUserLoginInfo();
                            }, 500);
                        });
                    },
                    getStoreLoginInfo: function() {
                        var e = t.getStorageSync("loginInfo");
                        if (e) {
                            var n = JSON.parse(e);
                            this.checkSession(n);
                        } else this.getUserLoginInfo();
                    },
                    checkSession: function(t) {
                        var e = this;
                        wx.checkSession({
                            success: function() {
                                e.$store.commit("setLoginInfo", t);
                            },
                            fail: function() {
                                e.getUserLoginInfo(t);
                            }
                        });
                    },
                    init: function() {
                        t.getStorageSync("guidance") || this.$store.commit("setShowGuidance", !0);
                    }
                })
            };
            e.default = c;
        }).call(this, n("543d").default);
    },
    ae39: function(t, e, n) {
        n.r(e);
        var o = n("94a6");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("85ce");
        var r = n("f0c5"), a = Object(r.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        e.default = a.exports;
    },
    e62e: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function i(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t;
            }
            n("efb7"), n("921b");
            var r = e(n("66fd")), a = e(n("ae39")), c = e(n("1248")), s = e(n("04f6")), f = e(n("7f5c"));
            r.default.config.productionTip = !1, r.default.prototype.$store = c.default, r.default.prototype.$http = f.default, 
            r.default.mixin({
                methods: {
                    setData: function(t, e) {
                        var n, o, i = this, r = [];
                        Object.keys(t).forEach(function(e) {
                            r = e.split("."), n = t[e], o = i.$data, r.forEach(function(t, e) {
                                e + 1 == r.length ? i.$set(o, t, n) : o[t] || i.$set(o, t, {}), o = o[t];
                            });
                        }), e && e();
                    }
                }
            }), a.default.mpType = "app", Object.keys(s.default).forEach(function(t) {
                r.default.filter(t, s.default[t]);
            }), t(new r.default(function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach(function(e) {
                        i(t, e, n[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    });
                }
                return t;
            }({}, a.default))).$mount();
        }).call(this, n("543d").createApp);
    }
}, [ [ "e62e", "common/runtime", "common/vendor" ] ] ]);