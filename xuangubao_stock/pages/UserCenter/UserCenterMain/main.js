(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/UserCenter/UserCenterMain/main" ], {
    "1be6": function(e, n, t) {},
    5342: function(e, n, t) {
        t.r(n);
        var r = t("7a65"), u = t.n(r);
        for (var a in r) "default" !== a && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(a);
        n.default = u.a;
    },
    "791b": function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("6cdc"), t("921b"), n(t("66fd")), e(n(t("96f9")).default);
        }).call(this, t("543d").createPage);
    },
    "7a65": function(e, n, t) {
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function u(e, n, t, r, u, a, o) {
            try {
                var c = e[a](o), i = c.value;
            } catch (e) {
                return void t(e);
            }
            c.done ? n(i) : Promise.resolve(i).then(r, u);
        }
        function a(e) {
            return function() {
                var n = this, t = arguments;
                return new Promise(function(r, a) {
                    function o(e) {
                        u(i, r, a, o, c, "next", e);
                    }
                    function c(e) {
                        u(i, r, a, o, c, "throw", e);
                    }
                    var i = e.apply(n, t);
                    o(void 0);
                });
            };
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = r(t("a34a")), c = r(t("4360")), i = t("ed08"), f = r(t("761b")), l = {
            name: "UserCenterMain",
            components: {
                TitleBarCapsule: function() {
                    return t.e("components/TitleBarWithCapsule").then(t.bind(null, "3878"));
                },
                ActionItem: function() {
                    return t.e("pages/UserCenter/UserCenterMain/ActionItem").then(t.bind(null, "0bc9"));
                }
            },
            mixins: [ r(t("d05d")).default ],
            computed: {
                userInfo: function() {
                    return c.default.state.user.user;
                },
                wxInfo: function() {
                    return c.default.state.user.wxInfo;
                },
                devicePlatformIOS: function() {
                    return c.default.getters["device/devicePlatform"]("ios");
                }
            },
            onShow: function() {
                (0, i.ifLogin)() || wx.reLaunch({
                    url: "/pages/Home/main"
                });
            },
            methods: {
                dataAnalytic: function(e) {
                    (0, f.default)(e);
                },
                switchUser: function() {
                    var e = a(o.default.mark(function e() {
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return this.dataAnalytic("profile_accountchange_click"), e.prev = 1, e.next = 4, 
                                c.default.dispatch("user/logout");

                              case 4:
                                if (!e.sent) {
                                    e.next = 6;
                                    break;
                                }
                                (0, i.goToLogin)();

                              case 6:
                                e.next = 11;
                                break;

                              case 8:
                                e.prev = 8, e.t0 = e.catch(1), console.error(e.t0);

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e, this, [ [ 1, 8 ] ]);
                    }));
                    return function() {
                        return e.apply(this, arguments);
                    };
                }()
            }
        };
        n.default = l;
    },
    "96f9": function(e, n, t) {
        t.r(n);
        var r = t("9c05"), u = t("5342");
        for (var a in u) "default" !== a && function(e) {
            t.d(n, e, function() {
                return u[e];
            });
        }(a);
        t("c436");
        var o = t("2877"), c = Object(o.a)(u.default, r.a, r.b, !1, null, "09cf579e", null);
        n.default = c.exports;
    },
    "9c05": function(e, n, t) {
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, u = [];
        t.d(n, "a", function() {
            return r;
        }), t.d(n, "b", function() {
            return u;
        });
    },
    c436: function(e, n, t) {
        var r = t("1be6");
        t.n(r).a;
    }
}, [ [ "791b", "common/runtime", "common/vendor" ] ] ]);