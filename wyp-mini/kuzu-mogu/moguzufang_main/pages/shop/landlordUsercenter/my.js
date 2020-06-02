(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/shop/landlordUsercenter/my" ], {
    "0485": function(t, e, i) {
        "use strict";
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = l(i("30a4")), s = l(i("d9c6")), o = l(i("6b7d")), a = i("f2de"), r = l(i("a8da")), c = l(i("0076"));
            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {}, n = Object.keys(i);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(i, t).enumerable;
                    }))), n.forEach(function(e) {
                        g(t, e, i[e]);
                    });
                }
                return t;
            }
            function g(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t;
            }
            var f = {
                components: {
                    mgRow: s.default,
                    mgSwiper: o.default,
                    bottomTab: r.default
                },
                data: function() {
                    var t = [ {
                        title: "支付房租",
                        iconClass: "mgic-pay",
                        tips: 0,
                        path: "https://h5.mgzf.com/pay/bill",
                        isJudgeLogin: !0,
                        flag: "zffz"
                    }, {
                        title: "租约管理",
                        iconClass: "mgic-zuyue",
                        tips: 0,
                        path: "https://h5.mgzf.com/pay/leaseList",
                        isJudgeLogin: !0,
                        flag: "zygl"
                    }, {
                        title: "报修服务",
                        iconClass: "mgic-maintain",
                        tips: 0,
                        path: "https://h5.mgzf.com/leaseRepair/repairList",
                        isJudgeLogin: !0,
                        flag: "bxfw"
                    }, {
                        title: "优惠卡包",
                        iconClass: "mgic-card option-icon-small",
                        tips: 0,
                        path: "https://h5.mgzf.com/couponBag",
                        isJudgeLogin: !0,
                        flag: "coupon"
                    } ], e = [ {
                        title: "智能家居",
                        desc: "",
                        params: {
                            event: "jumpViewPage",
                            path: "https://h5.mgzf.com/hardware",
                            isJudgeLogin: !0
                        },
                        hasClick: !0
                    }, {
                        title: "联系房东",
                        desc: "",
                        params: {
                            event: "makeCall",
                            path: "",
                            contactPhone: "",
                            isJudgeLogin: !1
                        },
                        hasClick: !0
                    }, {
                        title: "设置",
                        desc: "",
                        params: {
                            event: "gotoPage",
                            path: "/pages/shop/landlordUsercenter/setting",
                            isJudgeLogin: !0
                        },
                        hasClick: !0
                    } ], i = [ {
                        icon: "/static/images/icons/home_normal.png",
                        activeIcon: "/static/images/icons/home_active.png",
                        name: "公寓首页",
                        pagePath: "/pages/shop/landlord",
                        active: !1
                    }, {
                        icon: "/static/images/icons/my_normal.png",
                        activeIcon: "/static/images/icons/my_active.png",
                        name: "租客中心",
                        pagePath: "/pages/shop/landlordUsercenter/my",
                        active: !1
                    } ];
                    return {
                        options: t,
                        entries: e,
                        defaultUserLogo: "https://assets.mgzf.com/appimg/4527caddf0800872e5bd91ace0d00614.png",
                        tabItems: i,
                        queryOptions: {}
                    };
                },
                computed: u({}, (0, a.mapState)({
                    userInfo: function(t) {
                        return t.user.userInfo;
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
                    this.userInfo.renterId ? this.getTodoCount() : this.setEntriesTips();
                },
                onLoad: function(t) {
                    this.queryOptions = t, this.entries[1].params.contactPhone = t.contactPhone || "", 
                    this.entries[1].params.hidden = !t.contactPhone;
                },
                methods: u({}, (0, a.mapActions)("user", [ "getUserInfo" ]), {
                    mgRowClick: function(e, i) {
                        i.isJudgeLogin && !this.isLogin ? this.$mgRouter.navigateTo("/pages/login", {}) : ("jumpViewPage" == i.event && this.$mgRouter.navigateTo("/pages/viewPage/index", {
                            url: i.path
                        }), "gotoPage" == i.event && this.$mgRouter.navigateTo(i.path, {}), "makeCall" == i.event && t.makePhoneCall({
                            phoneNumber: i.contactPhone
                        }));
                    },
                    optionClick: function(t) {
                        var e = this.queryOptions.landlordId, i = t.flag;
                        if (!t.isJudgeLogin || this.isLogin) {
                            var n = "/pages/viewPage/index", s = {
                                sourceSign: "scanQr",
                                landlordId: e
                            };
                            if ("zygl" == i) s.url = this.$mgRouter.buildUrl(c.default.LEASE_LIST, s); else if ("zffz" == i) s.url = this.$mgRouter.buildUrl(c.default.BILL, s); else if ("bxfw" == i) s.url = this.$mgRouter.buildUrl(c.default.REPAIR_LIST, s); else {
                                if ("coupon" != i) return;
                                s.url = this.$mgRouter.buildUrl(c.default.COUPON_BAG, s);
                            }
                            this.$mgRouter.navigateTo(n, s);
                        } else this.$mgRouter.navigateTo("/pages/login", {});
                    },
                    bannerClick: function() {
                        this.$mgRouter.navigateTo("/pages/viewPage/index", {
                            noVerify: !0,
                            url: "https://h5.mgzf.com/minisite/commonPage/imageUrlPage.html?imageUrl=https://assets.mgzf.com/appimg/18801ca40c90fb996094fb82904ec797.png"
                        });
                    },
                    gotoLogin: function() {
                        this.isLogin || this.$mgRouter.navigateTo("/pages/login", {});
                    },
                    setEntriesTips: function(t) {
                        this.options[0].tips = t ? t.unpaidOrderCount : "", this.options[1].tips = t ? t.unconfirmedLeaseCount : "", 
                        this.options[3].tips = t ? t.coupPkgsCount : "";
                    },
                    getTodoCount: function() {
                        var t = this;
                        n.default.fetch("renterOperation.getRenterInfoWithLandlordId", {
                            landlordId: this.queryOptions.landlordId
                        }).then(function(e) {
                            t.setEntriesTips(e.content);
                        });
                    },
                    bottomTabClick: function(t) {
                        this.$mgRouter.navigateBack();
                    },
                    goHomePage: function() {
                        this.$mgRouter.switchTab("/pages/home", {});
                    }
                })
            };
            e.default = f;
        }).call(this, i("39c3")["default"]);
    },
    "072a": function(t, e, i) {
        "use strict";
        i("6cdc");
        var n = o(i("9f5e")), s = o(i("6c8e"));
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Page((0, n.default)(s.default));
    },
    "47cd": function(t, e, i) {
        "use strict";
        var n = i("b625"), s = i.n(n);
        s.a;
    },
    "6c8e": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("f35c"), s = i("e59b");
        for (var o in s) "default" !== o && function(t) {
            i.d(e, t, function() {
                return s[t];
            });
        }(o);
        i("47cd");
        var a = i("17cc"), r = Object(a["a"])(s["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = r.exports;
    },
    b625: function(t, e, i) {},
    e59b: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("0485"), s = i.n(n);
        for (var o in n) "default" !== o && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(o);
        e["default"] = s.a;
    },
    f35c: function(t, e, i) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("view", {
                staticClass: "content my"
            }, [ i("view", {
                staticClass: "mg-flex mg-flex_sa_center my-user"
            }, [ i("view", {
                staticClass: "my-user-logo"
            }, [ i("image", {
                staticClass: "my-user-img",
                attrs: {
                    src: t.userInfo.userLogo || t.defaultUserLogo
                }
            }) ]), t.isLogin ? t._e() : i("view", {
                staticClass: "my-user-name",
                attrs: {
                    eventid: "c0107f74-0"
                },
                on: {
                    click: t.gotoLogin
                }
            }, [ t._v("登录/注册") ]), t.isLogin ? i("view", {
                staticClass: "my-user-name"
            }, [ t._v(t._s(t.userName)) ]) : t._e(), 1 == t.userInfo.isVerified ? i("view", {
                staticClass: "my-user-real"
            }, [ t._v("实名") ]) : t._e() ]), i("view", {
                staticClass: "mg-flex mg-flex_avg my-option-group"
            }, t._l(t.options, function(e, n) {
                return i("view", {
                    key: n,
                    staticClass: "my-option"
                }, [ i("text", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: e.tips > 0,
                        expression: "item.tips > 0"
                    } ],
                    staticClass: "option-tips"
                }, [ t._v(t._s(e.tips > 99 ? "99+" : e.tips)) ]), i("view", {
                    staticClass: "mg-flex mg-flex-v mg-flex_sa_center",
                    attrs: {
                        eventid: "c0107f74-1-" + n
                    },
                    on: {
                        click: function(i) {
                            t.optionClick(e);
                        }
                    }
                }, [ i("view", {
                    class: "option-icon " + e.iconClass
                }), i("view", {
                    staticClass: "option-title"
                }, [ t._v(t._s(e.title)) ]) ]) ]);
            })), i("view", {
                staticStyle: {
                    "background-color": "#fff",
                    width: "100%",
                    "text-align": "center"
                },
                attrs: {
                    eventid: "c0107f74-2"
                },
                on: {
                    click: t.bannerClick
                }
            }, [ i("image", {
                staticStyle: {
                    width: "670rpx",
                    height: "130rpx",
                    "margin-top": "50rpx"
                },
                attrs: {
                    src: "https://assets.mgzf.com/appimg/78171d67112b2ed849cb5055518b90bf.png"
                }
            }) ]), t._l(t.entries, function(e, n) {
                return i("mg-row", {
                    key: n,
                    attrs: {
                        title: e.title,
                        desc: "",
                        params: e.params,
                        hasClick: !0,
                        eventid: "c0107f74-3-" + n,
                        mpcomid: "c0107f74-0-" + n
                    },
                    on: {
                        doClick: t.mgRowClick
                    }
                });
            }), i("view", {
                staticClass: "footerTips"
            }, [ i("view", {
                staticStyle: {
                    "font-size": "22rpx",
                    color: "#f56000",
                    "text-decoration": "underline"
                },
                attrs: {
                    eventid: "c0107f74-4"
                },
                on: {
                    click: t.goHomePage
                }
            }, [ t._v("蘑菇租房") ]), i("view", {
                staticStyle: {
                    "font-size": "20rpx",
                    color: "#d1d1d1"
                }
            }, [ t._v("蘑菇租房提供技术支持") ]) ]), i("bottomTab", {
                attrs: {
                    propsTabItems: t.tabItems,
                    activeIndex: 1,
                    visible: !0,
                    eventid: "c0107f74-5",
                    mpcomid: "c0107f74-1"
                },
                on: {
                    tabClick: t.bottomTabClick
                }
            }) ], 2);
        }, s = [];
        i.d(e, "a", function() {
            return n;
        }), i.d(e, "b", function() {
            return s;
        });
    }
}, [ [ "072a", "common/runtime", "common/vendor" ] ] ]);