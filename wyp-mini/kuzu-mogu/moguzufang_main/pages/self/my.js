(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/self/my" ], {
    "1deb": function(e, t, i) {
        "use strict";
        var s = function() {
            var e = this, t = e.$createElement, i = e._self._c || t;
            return i("view", {
                staticClass: "content my"
            }, [ i("view", {
                staticClass: "mg-flex mg-flex_sa_center my-user"
            }, [ i("view", {
                staticClass: "my-user-logo"
            }, [ i("image", {
                staticClass: "my-user-img",
                attrs: {
                    src: e.userInfo.userLogo || e.defaultUserLogo
                }
            }) ]), e.isLogin ? e._e() : i("view", {
                staticClass: "my-user-name",
                attrs: {
                    eventid: "43631deb-0"
                },
                on: {
                    click: e.gotoLogin
                }
            }, [ e._v("登录/注册") ]), e.isLogin ? i("view", {
                staticClass: "my-user-name"
            }, [ e._v(e._s(e.userName)) ]) : e._e(), 1 == e.userInfo.isVerified ? i("view", {
                staticClass: "my-user-real"
            }, [ e._v("实名") ]) : e._e() ]), i("view", {
                staticClass: "mg-flex mg-flex_avg my-option-group"
            }, e._l(e.options, function(t, s) {
                return i("view", {
                    key: s,
                    staticClass: "my-option"
                }, [ i("text", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: t.tips > 0,
                        expression: "item.tips > 0"
                    } ],
                    staticClass: "option-tips"
                }, [ e._v(e._s(t.tips > 99 ? "99+" : t.tips)) ]), i("view", {
                    staticClass: "mg-flex mg-flex-v mg-flex_sa_center",
                    attrs: {
                        eventid: "43631deb-1-" + s
                    },
                    on: {
                        click: function(i) {
                            e.optionClick(t);
                        }
                    }
                }, [ i("view", {
                    class: "option-icon " + t.iconClass
                }), i("view", {
                    staticClass: "option-title"
                }, [ e._v(e._s(t.title)) ]) ]) ]);
            })), i("view", [ i("mgSwiper", {
                attrs: {
                    location: "wode",
                    height: 65,
                    mpcomid: "43631deb-0"
                }
            }) ], 1), e._l(e.entries, function(t, s) {
                return i("mg-row", {
                    key: s,
                    attrs: {
                        title: t.title,
                        desc: "",
                        params: t.params,
                        hasClick: !0,
                        eventid: "43631deb-2-" + s,
                        mpcomid: "43631deb-1-" + s
                    },
                    on: {
                        doClick: e.mgRowClick
                    }
                });
            }) ], 2);
        }, n = [];
        i.d(t, "a", function() {
            return s;
        }), i.d(t, "b", function() {
            return n;
        });
    },
    "3fe2": function(e, t, i) {
        "use strict";
        i("6cdc");
        var s = o(i("9f5e")), n = o(i("cc15"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Page((0, s.default)(n.default));
    },
    4796: function(e, t, i) {
        "use strict";
        i.r(t);
        var s = i("4d6e"), n = i.n(s);
        for (var o in s) "default" !== o && function(e) {
            i.d(t, e, function() {
                return s[e];
            });
        }(o);
        t["default"] = n.a;
    },
    "4d6e": function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var s = r(i("30a4")), n = r(i("d9c6")), o = r(i("6b7d")), a = i("f2de");
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {}, s = Object.keys(i);
                "function" === typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable;
                }))), s.forEach(function(t) {
                    c(e, t, i[t]);
                });
            }
            return e;
        }
        function c(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e;
        }
        var l = {
            components: {
                mgRow: n.default,
                mgSwiper: o.default
            },
            data: function() {
                var e = [ {
                    title: "支付房租",
                    iconClass: "mgic-pay",
                    tips: 0,
                    path: "https://h5.mgzf.com/pay/bill",
                    isJudgeLogin: !0
                }, {
                    title: "租约管理",
                    iconClass: "mgic-zuyue",
                    tips: 0,
                    path: "https://h5.mgzf.com/pay/leaseList",
                    isJudgeLogin: !0
                }, {
                    title: "租住问题",
                    iconClass: "mgic-zuzhuwenti",
                    tips: 0,
                    path: "https://h5.mgzf.com/questionEnter",
                    isJudgeLogin: !0
                }, {
                    title: "优惠卡包",
                    iconClass: "mgic-card option-icon-small",
                    tips: 0,
                    path: "https://h5.mgzf.com/couponBag",
                    isJudgeLogin: !0
                } ], t = [ {
                    title: "客来门锁",
                    desc: "",
                    params: {
                        event: "gotoPage",
                        path: "/pages/kelaiDoorLock/index",
                        isJudgeLogin: !0
                    },
                    hasClick: !0
                }, {
                    title: "我的奖品",
                    desc: "",
                    params: {
                        event: "jumpViewPage",
                        path: "https://h5.mgzf.com/event/rentalHoliday/my",
                        isJudgeLogin: !0
                    },
                    hasClick: !0
                }, {
                    title: "设置",
                    desc: "",
                    params: {
                        event: "gotoPage",
                        path: "/pages/self/setting",
                        isJudgeLogin: !0
                    },
                    hasClick: !0
                } ];
                return {
                    options: e,
                    entries: t,
                    defaultUserLogo: "https://assets.mgzf.com/appimg/4527caddf0800872e5bd91ace0d00614.png"
                };
            },
            computed: u({}, (0, a.mapState)({
                userInfo: function(e) {
                    return e.user.userInfo;
                },
                userName: function() {
                    return 1 == this.userInfo.isVerified ? this.userInfo.userName : this.userInfo.mobile ? this.userInfo.mobile.slice(0, 3) + "****" + this.userInfo.mobile.slice(-4) : "";
                }
            }), {
                isLogin: function() {
                    return !(!this.userInfo || !this.userInfo.renterId);
                }
            }),
            onShow: function() {
                this.userInfo.renterId ? this.getRenterInfoByUserId() : this.setEntriesTips();
            },
            methods: u({}, (0, a.mapActions)("user", [ "getUserInfo" ]), {
                mgRowClick: function(e, t) {
                    t.isJudgeLogin && !this.isLogin ? this.$mgRouter.navigateTo("/pages/login", {}) : ("jumpViewPage" == t.event && this.$mgRouter.navigateTo("/pages/viewPage/index", {
                        url: t.path
                    }), "gotoPage" == t.event && this.$mgRouter.navigateTo(t.path, {}));
                },
                optionClick: function(e) {
                    e.isJudgeLogin && !this.isLogin ? this.$mgRouter.navigateTo("/pages/login", {}) : this.$mgRouter.navigateTo("/pages/viewPage/index", {
                        url: e.path
                    });
                },
                gotoLogin: function() {
                    this.isLogin || this.$mgRouter.navigateTo("/pages/login", {});
                },
                setEntriesTips: function(e) {
                    this.options[0].tips = e ? e.unpaidOrderCount : "", this.options[1].tips = e ? e.unconfirmedLeaseCount : "", 
                    this.options[3].tips = e ? e.coupPkgsCount : "";
                },
                getRenterInfoByUserId: function() {
                    var e = this;
                    s.default.fetch("renterOperation.getRenterInfoByUserId").then(function(t) {
                        e.setEntriesTips(t.content);
                    });
                }
            })
        };
        t.default = l;
    },
    "92a7": function(e, t, i) {
        "use strict";
        var s = i("a4fd"), n = i.n(s);
        n.a;
    },
    a4fd: function(e, t, i) {},
    cc15: function(e, t, i) {
        "use strict";
        i.r(t);
        var s = i("1deb"), n = i("4796");
        for (var o in n) "default" !== o && function(e) {
            i.d(t, e, function() {
                return n[e];
            });
        }(o);
        i("92a7");
        var a = i("17cc"), r = Object(a["a"])(n["default"], s["a"], s["b"], !1, null, null, null);
        t["default"] = r.exports;
    }
}, [ [ "3fe2", "common/runtime", "common/vendor" ] ] ]);