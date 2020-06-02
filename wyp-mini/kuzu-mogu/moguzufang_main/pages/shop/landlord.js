(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/shop/landlord" ], {
    1867: function(t, e, i) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("transition", {
                attrs: {
                    name: "fade",
                    mpcomid: "e0bfbfde-1"
                }
            }, [ t.couponVisible ? i("view", [ i("view", {
                staticClass: "bg",
                attrs: {
                    eventid: "e0bfbfde-0"
                },
                on: {
                    click: t.closeDialog
                }
            }), i("view", {
                staticClass: "couponDialog"
            }, [ i("view", {
                staticClass: "couponDialog-header"
            }, [ i("image", {
                staticClass: "close",
                attrs: {
                    src: "https://assets.mgzf.com/appimg/058b7f7263c95f64cb1dc241abd7867e.png",
                    eventid: "e0bfbfde-1"
                },
                on: {
                    click: t.closeDialog
                }
            }), i("view", {
                staticClass: "h2"
            }, [ t._v("领券") ]) ]), i("scroll-view", {
                attrs: {
                    "scroll-y": "true"
                }
            }, [ i("view", {
                staticClass: "coupon-scroll"
            }, t._l(t.activity.landlordCoupons, function(t, e) {
                return i("ticket", {
                    key: e,
                    attrs: {
                        ticketObj: {
                            couponInfo: t
                        },
                        mpcomid: "e0bfbfde-0-" + e
                    }
                });
            })) ]) ], 1) ]) : t._e() ]);
        }, o = [];
        i.d(e, "a", function() {
            return n;
        }), i.d(e, "b", function() {
            return o;
        });
    },
    "190e": function(t, e, i) {
        "use strict";
        var n = i("61de"), o = i.n(n);
        o.a;
    },
    "1ad4": function(t, e, i) {
        "use strict";
        var n = i("22ab"), o = i.n(n);
        o.a;
    },
    "22ab": function(t, e, i) {},
    "289f": function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = i("f2de");
        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {}, n = Object.keys(i);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                }))), n.forEach(function(e) {
                    s(t, e, i[e]);
                });
            }
            return t;
        }
        function s(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t;
        }
        var a = {
            props: {
                ticketObj: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            computed: o({}, (0, n.mapGetters)([ "isLogin", "cityId" ])),
            methods: {
                getCoupon: function(t, e, i) {
                    var n = this;
                    this.isLogin ? this.$api.fetch("mrktWeb.getRenterCouponV2", {
                        getCity: this.cityId,
                        actiType: t,
                        actiId: e,
                        templetType: 2,
                        landlordId: this.ticketObj.couponInfo.landlordId
                    }).then(function(t) {
                        var e = t.content || {}, o = e.getResult, s = e.explain;
                        1 === parseInt(o, 10) && (i.userReci = !0), n.$toast.show(s || "");
                    }).catch(function(t) {
                        n.$toast.show(t.errMessage || "系统异常");
                    }) : this.$mgRouter.navigateTo("/pages/login");
                }
            }
        };
        e.default = a;
    },
    3697: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("1867"), o = i("d3a0");
        for (var s in o) "default" !== s && function(t) {
            i.d(e, t, function() {
                return o[t];
            });
        }(s);
        i("1ad4");
        var a = i("17cc"), c = Object(a["a"])(o["default"], n["a"], n["b"], !1, null, "310a7a98", null);
        e["default"] = c.exports;
    },
    "50e1": function(t, e, i) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("view", {
                staticClass: "ticket"
            }, [ i("view", {
                staticClass: "price"
            }, [ i("view", {
                staticClass: "amount"
            }, [ 1 == t.ticketObj.couponInfo.amountType || 2 == t.ticketObj.couponInfo.amountType && t.ticketObj.couponInfo.amount > 1 ? i("text", [ i("text", {
                staticClass: "sub"
            }, [ t._v("￥") ]), t._v(t._s(t.ticketObj.couponInfo.amount)) ]) : i("text", [ t._v(t._s(10 * t.ticketObj.couponInfo.amount)), i("text", {
                staticClass: "sub"
            }, [ t._v("折") ]) ]) ]), i("view", {
                staticClass: "limit"
            }, [ t._v(t._s(t.ticketObj.couponInfo.useLimitString || "")) ]) ]), i("view", {
                staticClass: "cont"
            }, [ i("view", {
                staticClass: "h1"
            }, [ t._v(t._s(t.ticketObj.couponInfo.coupName || "")) ]), i("view", {
                staticClass: "h4"
            }, [ t._v(t._s(t.ticketObj.couponInfo.coupDesc || "")) ]), i("view", {
                staticClass: "h4"
            }, [ t._v(t._s(t.ticketObj.couponInfo.reciStime || "") + " - " + t._s(t.ticketObj.couponInfo.reciEtime || "")) ]), i("view", {
                staticStyle: {
                    width: "100%",
                    "text-align": "right"
                }
            }, [ t.ticketObj.couponInfo.userReci ? i("view", {
                staticClass: "btn-got"
            }, [ t._v("已领取") ]) : i("view", {
                staticClass: "btn-get",
                attrs: {
                    eventid: "76e25bad-0"
                },
                on: {
                    click: function(e) {
                        t.getCoupon(t.ticketObj.couponInfo.couponType, t.ticketObj.couponInfo.actiId, t.ticketObj.couponInfo);
                    }
                }
            }, [ t._v("立即领取") ]) ]) ]) ]);
        }, o = [];
        i.d(e, "a", function() {
            return n;
        }), i.d(e, "b", function() {
            return o;
        });
    },
    "61de": function(t, e, i) {},
    "6f14": function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("289f"), o = i.n(n);
        for (var s in n) "default" !== s && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(s);
        e["default"] = o.a;
    },
    a7e2: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("b199"), o = i("e359");
        for (var s in o) "default" !== s && function(t) {
            i.d(e, t, function() {
                return o[t];
            });
        }(s);
        i("eddb");
        var a = i("17cc"), c = Object(a["a"])(o["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = c.exports;
    },
    b199: function(t, e, i) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("view", [ i("image", {
                staticClass: "banner",
                attrs: {
                    src: t.info.banner
                }
            }), i("view", {
                staticClass: "content-brand"
            }, [ t.info.img ? i("image", {
                staticClass: "brand-page-img",
                attrs: {
                    src: t.info.img
                }
            }) : t._e(), t.info.title ? i("view", {
                staticClass: "title"
            }, [ i("view", {
                staticClass: "h1"
            }, [ t._v(t._s(t.info.title)), t.info.businessLicenseUrl ? i("image", {
                staticStyle: {
                    width: "44rpx",
                    height: "30rpx",
                    "margin-left": "20rpx",
                    "vertical-align": "middle"
                },
                attrs: {
                    src: "https://assets.mgzf.com/appimg/2da049077ddd7c6bef39de5360e60ad6.png",
                    eventid: "55c583f5-0"
                },
                on: {
                    click: t.checkLicense
                }
            }) : t._e() ]), i("view", {
                staticClass: "iconfont stars"
            }, t._l(5, function(t, e) {
                return i("text", {
                    key: t,
                    staticClass: "i mgic-shiwujiao"
                });
            })), t.info.description ? i("text", {
                staticClass: "brand-intro",
                attrs: {
                    eventid: "55c583f5-1"
                },
                on: {
                    click: t.toggleDescriptionExpand
                }
            }, [ t._v("品牌介绍") ]) : t._e() ]) : t._e(), t.isPrivateShops && t.cities.length > 1 ? i("view", {
                staticClass: "agent-city"
            }, [ i("picker", {
                attrs: {
                    value: t.cityIndex,
                    range: t.cities,
                    "range-key": "cityName",
                    eventid: "55c583f5-2"
                },
                on: {
                    change: t.switchCity
                }
            }, [ i("view", {
                staticClass: "city-area"
            }, [ t._v(t._s(t.city.cityName)), i("i", {
                staticClass: "arrow-down"
            }) ], 1) ]) ], 1) : t._e() ]), t.descriptionExpand ? i("view", {
                staticClass: "description-expand"
            }, [ i("view", {
                staticClass: "brand-page-title1"
            }, [ t._v(t._s(t.info.title)) ]), i("view", {
                staticClass: "brand-page-desc"
            }, [ t._v(t._s(t.info.description)) ]), i("view", {
                staticClass: "iconfont mgic-chahao",
                attrs: {
                    eventid: "55c583f5-3"
                },
                on: {
                    click: t.toggleDescriptionExpand
                }
            }) ]) : t._e(), t.isPrivateShops ? i("view", {
                staticClass: "landlord-renter"
            }, [ i("view", {
                staticClass: "landlord-renter-item",
                attrs: {
                    eventid: "55c583f5-4"
                },
                on: {
                    click: function(e) {
                        t.goToPrivate("bill");
                    }
                }
            }, [ i("view", {
                staticClass: "option-icon mgic-pay"
            }), i("view", {
                staticClass: "option-title"
            }, [ t._v("支付房租") ]), t.renterInfo.unpaidOrderCount > 0 ? i("text", {
                staticClass: "option-tips"
            }, [ t._v(t._s(t.renterInfo.unpaidOrderCount)) ]) : t._e() ]), i("view", {
                staticClass: "landlord-renter-item",
                attrs: {
                    eventid: "55c583f5-5"
                },
                on: {
                    click: function(e) {
                        t.goToPrivate("lease");
                    }
                }
            }, [ i("view", {
                staticClass: "option-icon mgic-zuyue"
            }), i("view", {
                staticClass: "option-title"
            }, [ t._v("租约管理") ]), t.renterInfo.unconfirmedLeaseCount > 0 ? i("text", {
                staticClass: "option-tips"
            }, [ t._v(t._s(t.renterInfo.unconfirmedLeaseCount)) ]) : t._e() ]), i("view", {
                staticClass: "landlord-renter-item",
                attrs: {
                    eventid: "55c583f5-6"
                },
                on: {
                    click: function(e) {
                        t.goToPrivate("repair");
                    }
                }
            }, [ i("view", {
                staticClass: "option-icon mgic-maintain"
            }), i("view", {
                staticClass: "option-title"
            }, [ t._v("报修服务") ]) ]) ]) : t._e(), t.isPrivateShops && t.activity.landlordCoupons.length > 0 ? i("view", {
                staticClass: "coupon-tips",
                attrs: {
                    onTap: "toggleCouponsDialog",
                    eventid: "55c583f5-7"
                },
                on: {
                    click: t.showCouponDialog
                }
            }, [ i("image", {
                staticClass: "tips-icon",
                attrs: {
                    src: "https://assets.mgzf.com/appimg/0625e33d8e2eee9ed05f17a260a60127.png",
                    alt: ""
                }
            }), t._m(0) ]) : t._e(), t.activity ? i("couponDialog", {
                attrs: {
                    couponVisible: t.isShowCouponDialog,
                    activity: t.activity || {},
                    eventid: "55c583f5-8",
                    mpcomid: "55c583f5-0"
                },
                on: {
                    closeDialog: t.showCouponDialog
                }
            }) : t._e(), t.refresh ? i("listCollection", {
                attrs: {
                    option: t.options,
                    id: "listCollection",
                    showOrder: t.isPrivateShops,
                    eventid: "55c583f5-9",
                    mpcomid: "55c583f5-1"
                },
                on: {
                    filterChange: t.filterChange
                }
            }) : t._e(), t.showLoginDialog ? i("loginDialog", {
                attrs: {
                    eventid: "55c583f5-10",
                    mpcomid: "55c583f5-2"
                },
                on: {
                    close: t.closeDialog
                }
            }) : t._e(), i("bottomTab", {
                attrs: {
                    propsTabItems: t.tabItems,
                    activeIndex: 0,
                    visible: t.isPrivateShops,
                    eventid: "55c583f5-11",
                    mpcomid: "55c583f5-3"
                },
                on: {
                    tabClick: t.bottomTabClick
                }
            }) ], 1);
        }, o = [ function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("view", {
                staticClass: "tips-text"
            }, [ t._v("限量领取"), i("view", {
                staticClass: "tips-i"
            }) ]);
        } ];
        i.d(e, "a", function() {
            return n;
        }), i.d(e, "b", function() {
            return o;
        });
    },
    b3a9: function(t, e, i) {
        "use strict";
        i("6cdc");
        var n = s(i("9f5e")), o = s(i("a7e2"));
        function s(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Page((0, n.default)(o.default));
    },
    d3a0: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("dec5"), o = i.n(n);
        for (var s in n) "default" !== s && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(s);
        e["default"] = o.a;
    },
    d5d1: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = i("f2de"), o = f(i("1f2b")), s = f(i("c3c5")), a = i("eaf8"), c = f(i("0076")), r = f(i("b22f")), l = f(i("3697")), u = i("34fa"), d = f(i("a8da"));
        function f(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function p(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {}, n = Object.keys(i);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                }))), n.forEach(function(e) {
                    h(t, e, i[e]);
                });
            }
            return t;
        }
        function h(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t;
        }
        var g = {
            components: {
                listCollection: o.default,
                mgImage: s.default,
                loginDialog: r.default,
                couponDialog: l.default,
                bottomTab: d.default
            },
            onLoad: function(t) {
                var e = this;
                t = (0, a.querysFormat)(t), this.landlordId = t.landlordId, t.q && /^(https?)/.test(t.q) && (this.setUserSourceTag("privateShops"), 
                this.isPrivateShops = !0, this.getLandlordIdCouponInfo(), t.fromPage = 3, this.locationCity && this.locationCity.lng && (t.lng = this.locationCity.lng, 
                t.lat = this.locationCity.lat, t.order = "13")), t.fromType ? this.fromType = t.fromType : /^(https?)/.test(t.q) && (this.fromType = 1), 
                delete t.q, delete t.scancode_time, this.options = t, this.landlordId = this.options.landlordId, 
                this.getLandordInfo({
                    cityId: this.cityId,
                    landlordId: this.landlordId
                }).then(function(t) {
                    e.info = t, wx.setNavigationBarTitle({
                        title: e.info.title
                    });
                    var i = t.cityId, n = t.cityName, o = t.cities, s = t.contactPhone;
                    e.contactPhone = s, e.isPrivateShops ? e.$api.fetch("roomFindWeb.roomCitysByLandlordId", {
                        landlordId: e.landlordId
                    }).then(function(t) {
                        e.cities = t.content, e.getLocationCity({
                            enforce: !0
                        }).then(function(t) {
                            var i;
                            t && t.lng && (e.options.lng = t.lng, e.options.lat = t.lat, e.options.order = "13", 
                            i = e.cities.find(function(e) {
                                return e.cityId == t.cityId;
                            })), i && i.cityId ? (e.city = i, e.cityIndex = e.cities.indexOf(i)) : e.cities && e.cities.length && (e.city = e.cities[0], 
                            e.cityIndex = 0), e.$store.commit(u.SET_CURRENT_CITY, e.city), e.refresh = !0;
                        });
                    }) : (e.cities = o, e.city = {
                        cityId: i,
                        cityName: n
                    }, e.$store.commit(u.SET_CURRENT_CITY, e.city), e.refresh = !0);
                });
            },
            data: function() {
                return {
                    isPrivateShops: !1,
                    landlordId: void 0,
                    info: {},
                    options: {},
                    renterInfo: {},
                    showLoginDialog: !1,
                    city: {
                        cityId: "",
                        cityName: ""
                    },
                    cities: [],
                    cityIndex: 0,
                    toggleCity: !1,
                    refresh: !1,
                    descriptionExpand: !1,
                    fromType: 10,
                    activity: {
                        landlordCoupons: [],
                        platformCoupons: []
                    },
                    isShowCouponDialog: !1,
                    tabItems: [ {
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
                    } ],
                    contactPhone: ""
                };
            },
            computed: p({}, (0, n.mapGetters)([ "cityId" ]), (0, n.mapState)([ "userSourceTag", "locationCity" ]), (0, 
            n.mapState)([ "fromShop" ]), (0, n.mapState)({
                userInfo: function(t) {
                    return t.user.userInfo;
                }
            }), {
                isLogin: function() {
                    return !(!this.userInfo || !this.userInfo.renterId);
                }
            }),
            methods: p({}, (0, n.mapActions)([ "getLandordInfo", "setUserSourceTag", "getLocationCity" ]), {
                goToPrivate: function(t) {
                    if (!this.isLogin) return this.showLoginDialog = !0, !0;
                    var e = this.options.landlordId, i = "/pages/viewPage/index", n = {
                        sourceSign: "scanQr",
                        landlordId: e
                    };
                    if ("lease" == t) n.url = this.$mgRouter.buildUrl(c.default.LEASE_LIST, n); else if ("bill" == t) n.url = this.$mgRouter.buildUrl(c.default.BILL, n); else {
                        if ("repair" != t) return;
                        n.url = this.$mgRouter.buildUrl(c.default.REPAIR_LIST, n);
                    }
                    this.$mgRouter.navigateTo(i, n);
                },
                closeDialog: function() {
                    this.showLoginDialog = !1;
                },
                toggleDescriptionExpand: function() {
                    this.descriptionExpand = !this.descriptionExpand;
                },
                switchCity: function(t) {
                    var e = this;
                    this.city = this.cities[t.target.value], this.$store.commit(u.SET_CURRENT_CITY, this.city), 
                    this.refresh = !1, setTimeout(function() {
                        e.refresh = !0;
                    }, 150);
                },
                filterChange: function() {
                    this.locationCity && this.locationCity.lng && (this.options.lng = this.locationCity.lng, 
                    this.options.lat = this.locationCity.lat);
                },
                getLandlordIdCouponInfo: function() {
                    var t = this;
                    this.$api.fetch("mrktWeb.getLandlordIdCouponInfo", {
                        landlordId: this.landlordId
                    }).then(function(e) {
                        t.activity.landlordCoupons = e.content;
                    }).catch(function(t) {
                        console.log(t);
                    });
                },
                getTodoCount: function() {
                    var t = this;
                    this.$api.fetch("renterOperation.getRenterInfoWithLandlordId", {
                        landlordId: this.landlordId
                    }).then(function(e) {
                        t.setEntriesTips(e.content);
                    });
                },
                setEntriesTips: function(t) {
                    this.renterInfo.unpaidOrderCount = t ? t.unpaidOrderCount : "", this.renterInfo.unconfirmedLeaseCount = t ? t.unconfirmedLeaseCount : "";
                },
                showCouponDialog: function() {
                    this.isShowCouponDialog = !this.isShowCouponDialog;
                },
                checkLicense: function() {
                    wx.previewImage({
                        current: "",
                        urls: [ this.info.businessLicenseUrl ]
                    });
                },
                bottomTabClick: function(t) {
                    this.options.contactPhone = this.contactPhone, this.$mgRouter.navigateTo(t.pagePath, this.options);
                }
            }),
            onShareAppMessage: function() {
                return {
                    title: this.info.title,
                    path: "pages/shop/landlord?q=http&landlordId=".concat(this.landlordId, "&fromType=3")
                };
            },
            onReady: function() {
                this.$gio("setPage", {
                    nlid: this.landlordId,
                    fromType: this.fromType
                }), this.fromShop.landlordId = this.landlordId, this.fromShop.fromType = this.fromType;
            },
            onShow: function() {
                this.isLogin ? this.getTodoCount() : this.setEntriesTips();
            }
        };
        e.default = g;
    },
    dec5: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = o(i("f002"));
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var s = {
            name: "index.vue",
            props: {
                couponVisible: !1,
                activity: {
                    type: Object,
                    default: {}
                }
            },
            components: {
                ticket: n.default
            },
            methods: {
                closeDialog: function(t) {
                    this.$emit("closeDialog");
                }
            }
        };
        e.default = s;
    },
    e359: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("d5d1"), o = i.n(n);
        for (var s in n) "default" !== s && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(s);
        e["default"] = o.a;
    },
    e635: function(t, e, i) {},
    eddb: function(t, e, i) {
        "use strict";
        var n = i("e635"), o = i.n(n);
        o.a;
    },
    f002: function(t, e, i) {
        "use strict";
        i.r(e);
        var n = i("50e1"), o = i("6f14");
        for (var s in o) "default" !== s && function(t) {
            i.d(e, t, function() {
                return o[t];
            });
        }(s);
        i("190e");
        var a = i("17cc"), c = Object(a["a"])(o["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = c.exports;
    }
}, [ [ "b3a9", "common/runtime", "common/vendor" ] ] ]);