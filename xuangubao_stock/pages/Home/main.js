(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Home/main" ], {
    "072d": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), n("921b"), e(n("66fd")), t(e(n("c387")).default);
        }).call(this, n("543d").createPage);
    },
    "0ebf": function(t, e, n) {
        var o = n("8aed");
        n.n(o).a;
    },
    2262: function(t, e, n) {
        n.r(e);
        var o = n("a78c"), i = n.n(o);
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        e.default = i.a;
    },
    8650: function(t, e, n) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return i;
        });
    },
    "8aed": function(t, e, n) {},
    a78c: function(t, e, n) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function i(t, e, n, o, i, u, r) {
            try {
                var a = t[u](r), s = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(s) : Promise.resolve(s).then(o, i);
        }
        function u(t) {
            return function() {
                var e = this, n = arguments;
                return new Promise(function(o, u) {
                    function r(t) {
                        i(s, o, u, r, a, "next", t);
                    }
                    function a(t) {
                        i(s, o, u, r, a, "throw", t);
                    }
                    var s = t.apply(e, n);
                    r(void 0);
                });
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = o(n("a34a")), a = o(n("4360")), s = n("f8c8"), c = o(n("761b")), f = {
            name: "Home",
            components: {
                TitleBar: function() {
                    return n.e("components/TitleBar").then(n.bind(null, "1e1d"));
                },
                LoginHeader: function() {
                    return n.e("pages/Home/components/LoginHeader").then(n.bind(null, "65cb"));
                },
                TodayArticle: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("pages/Home/components/TodayArticle") ]).then(n.bind(null, "42bf"));
                },
                HotRecommend: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("pages/Home/components/HotRecommend") ]).then(n.bind(null, "91a6"));
                },
                PayingFlow: function() {
                    return n.e("components/PayingFlow").then(n.bind(null, "355c"));
                },
                AuthFlow: function() {
                    return n.e("components/AuthFlow").then(n.bind(null, "0fc3"));
                }
            },
            mixins: [ o(n("d05d")).default ],
            data: function() {
                return {
                    hotMessages: [],
                    items: [],
                    nextToken: "",
                    hasMore: !0,
                    bottomLoading: !1,
                    showKeepTip: !wx.getStorageSync("not-show-keep-tip"),
                    showPullDownLoading: !1,
                    showPayFlow: !0,
                    showNextRoundTip: !1
                };
            },
            computed: {
                userInfo: function() {
                    return a.default.state.user.user || null;
                },
                wxInfo: function() {
                    return a.default.state.user.wxInfo || null;
                },
                avatar: function() {
                    return this.wxInfo ? this.wxInfo.avatarUrl : this.userInfo ? this.userInfo.portrait : "/static/images/avatar-default.png";
                },
                token: function() {
                    return a.default.state.user.token;
                },
                titleBarHeight: function() {
                    return a.default.getters["device/statusBarHeight"] + 44;
                }
            },
            watch: {
                token: function() {
                    this.getPersonalRecommend(!0);
                }
            },
            onShow: function() {
                this.showPayFlow = !0;
            },
            mounted: function() {
                this.getMessageHotTop(), this.getPersonalRecommend(!0);
            },
            onHide: function() {
                this.showPayFlow = !1;
            },
            onUnload: function() {
                this.showPayFlow = !1;
            },
            onReachBottom: function() {
                var t = this;
                this.items.length >= 80 ? setTimeout(function() {
                    t.showNextRoundTip = !0;
                }, 100) : this.getPersonalRecommend();
            },
            onPullDownRefresh: function() {
                var t = this;
                this.showPullDownLoading = !0, this.getPersonalRecommend(!0).then(function() {
                    wx.stopPullDownRefresh(), setTimeout(function() {
                        t.showPullDownLoading = !1;
                    }, 50);
                });
            },
            methods: {
                nextRound: function() {
                    this.showNextRoundTip = !1, this.items = [], this.getPersonalRecommend();
                },
                getMessageHotTop: function() {
                    var t = u(r.default.mark(function t() {
                        var e, n;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, (0, s.getMessageHot)("", 3);

                              case 2:
                                e = t.sent, n = e.messages, a.default.commit("entities/UPDATE_ARTICLE_ENTITY_MULTI", n), 
                                a.default.commit("entities/UPDATE_SUBJECT_ENTITY_MULTI", n.map(function(t) {
                                    return t.fromSubject;
                                })), this.hotMessages = n.filter(function(t) {
                                    return t.fromSubject;
                                }).map(function(t) {
                                    return t.id;
                                });

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function() {
                        return t.apply(this, arguments);
                    };
                }(),
                getPersonalRecommend: function(t) {
                    var e = this;
                    return t && (this.nextToken = "", this.hasMore = !0), !this.hasMore || this.bottomLoading ? Promise.resolve() : (this.bottomLoading = !0, 
                    (0, s.getPersonalRecommend)(this.nextToken).then(function(n) {
                        n.items && n.items.length && (a.default.commit("entities/UPDATE_ARTICLE_ENTITY_MULTI", n.items), 
                        a.default.commit("entities/UPDATE_SUBJECT_ENTITY_MULTI", n.items.map(function(t) {
                            return t.fromSubject;
                        })), e.items = t ? n.items.filter(function(t) {
                            return t.fromSubject;
                        }).map(function(t) {
                            return t.id;
                        }) : e.items.concat(n.items.filter(function(t) {
                            return t.fromSubject;
                        }).map(function(t) {
                            return t.id;
                        })), e.nextToken = n.nextToken), n.nextToken || (e.hasMore = !1), e.bottomLoading = !1;
                    }).catch(function() {
                        e.bottomLoading = !1;
                    }));
                },
                hidetipImage: function() {
                    this.showKeepTip = !1, wx.setStorage({
                        key: "not-show-keep-tip",
                        data: !0
                    });
                },
                jumpToUserCenter: function() {
                    (0, c.default)("main_profile_click"), wx.navigateTo({
                        url: "/pages/UserCenter/UserCenterMain/main"
                    });
                }
            }
        };
        e.default = f;
    },
    c387: function(t, e, n) {
        n.r(e);
        var o = n("8650"), i = n("2262");
        for (var u in i) "default" !== u && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(u);
        n("0ebf");
        var r = n("2877"), a = Object(r.a)(i.default, o.a, o.b, !1, null, null, null);
        e.default = a.exports;
    }
}, [ [ "072d", "common/runtime", "common/vendor" ] ] ]);