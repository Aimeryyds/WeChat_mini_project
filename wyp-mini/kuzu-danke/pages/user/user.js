(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/user" ], {
    4223: function(e, t, n) {},
    "493e": function(e, t, n) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {});
    },
    "9dfa": function(e, t, n) {
        var o = n("4223");
        n.n(o).a;
    },
    a143: function(e, t, n) {
        n.r(t);
        var o = n("493e"), c = n("d0ac");
        for (var a in c) "default" !== a && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(a);
        n("9dfa");
        var s = n("f0c5"), r = Object(s.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = r.exports;
    },
    bd1d: function(e, t, n) {
        (function(e) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var c = o(n("5f18")), a = o(n("733e")), s = o(n("edb7")), r = o(n("af1c"));
            o(n("0a9e")), new r.default();
            var i = getApp();
            i.sensors || (i.sensors = i.globalData.sensors);
            var u = {
                data: function() {
                    return {
                        tabcolor: 4,
                        currentCityName: "",
                        avatar: "https://public.danke.com.cn/public-20180519-FncC43aOUe_hWLWVuvGZKbq3jq04",
                        mobile: "欢迎来到蛋壳公寓 租的省心 住得舒心",
                        nickname: "点击注册/登录",
                        onoff: !1,
                        comePhone: "",
                        comeLogin: "",
                        isThis: !0,
                        userId: "",
                        cityId: "",
                        logout_onoff: !1,
                        is_customer: 0,
                        isIphoneX: "",
                        imgUrls: [],
                        addressArr: [],
                        addressType: [],
                        is_customer_str: 0,
                        user_banner: !1,
                        indexFal: 0,
                        banner_list: "",
                        userInfo: null,
                        newTrendData: {
                            status: !0,
                            isOn: 0,
                            id: 1
                        },
                        haveContractFlag: !1,
                        lists: [ {
                            title: "优惠券",
                            icon: "https://public.danke.com.cn/public-20190716-FpS0tIBwGfRD6QHuBt_FitTeIPQt",
                            type: "coupon",
                            show: !0
                        }, {
                            title: "租房咨询",
                            icon: "https://public.danke.com.cn/public-20190716-FkCJ7TResMifY6TvniBpRiPVrebn",
                            type: "rentConsult",
                            show: !0
                        }, {
                            title: "新风系统",
                            icon: "https://public.danke.com.cn/public-20190722-FhkE-mBG6WwgRFzE6sy_rxrf52Zo",
                            type: "freshAir",
                            show: !1
                        }, {
                            title: "设置",
                            icon: "https://public.danke.com.cn/public-20190716-Funhj21XXitwE06fg_beutrUJfeg",
                            type: "setting",
                            show: !0
                        }, {
                            title: "关于蛋壳",
                            icon: "https://public.danke.com.cn/public-20190716-FvMeV7huRRuCRaRGnzHMlxCiPa8d",
                            type: "about",
                            show: !0
                        }, {
                            title: "售后咨询",
                            icon: "https://public.danke.com.cn/public-20190716-FjAsh7xz7S2xM8wqlPYa36fHA9Tz",
                            type: "afterSale",
                            show: !0
                        }, {
                            title: "信用记录",
                            icon: "https://public.danke.com.cn/public-20191224-FnsegosLa0-3GCZeTIvJi1MD0JXQ",
                            type: "credit",
                            show: !1
                        } ],
                        cid: ""
                    };
                },
                onShow: function() {
                    var t = this;
                    e.getStorageSync("comePhone") && (t.comePhone = e.getStorageSync("comePhone")), 
                    e.getStorageSync("userId") && (t.userId = e.getStorageSync("userId"), t.logout_onoff = !0), 
                    null == e.getStorageSync("userMobile") || "" == e.getStorageSync("userMobile") ? t.mobile = "欢迎来到蛋壳公寓 租的省心 住得舒心" : t.mobile = e.getStorageSync("userMobile"), 
                    "" !== e.getStorageSync("userAvatar") ? t.avatar = e.getStorageSync("userAvatar") : t.avatar = "https://public.danke.com.cn/public-20180519-FncC43aOUe_hWLWVuvGZKbq3jq04", 
                    "" !== e.getStorageSync("userInfo").nickname ? t.nickname = e.getStorageSync("userInfo").nickname : t.nickname = "点击注册/登录", 
                    t.is_customer = e.getStorageSync("is_customer"), t.banner_index(), t.checkContract(), 
                    t.cid = e.getStorageSync("cityStorageNum"), t.showCredit(t.cid);
                },
                onLoad: function(t) {
                    var n = this;
                    n.comePhone = e.getStorageSync("comePhone"), n.userInfo = e.getStorageSync("userInfo"), 
                    n.userId = e.getStorageSync("userId"), n.cityId = e.getStorageSync("cityStorageNum"), 
                    n.cid = n.cityId, e.getStorage({
                        key: "userMobile",
                        success: function(e) {
                            e.data && "" != e.data && (n.mobile = e.data);
                        }
                    }), "" !== e.getStorageSync("userInfo").nickname && (n.nickname = e.getStorageSync("userInfo").nickname), 
                    e.getStorage({
                        key: "userId",
                        success: function(e) {
                            console.log(e), e.data && "" != e.data && (n.userId = e.data, n.logout_onoff = !0);
                        }
                    }), e.getStorage({
                        key: "userAvatar",
                        success: function(e) {
                            e.data && "" != e.data ? n.avatar = e.data : n.avatar = "https://public.danke.com.cn/public-20180519-FncC43aOUe_hWLWVuvGZKbq3jq04";
                        }
                    }), n.is_customer = e.getStorageSync("is_customer"), n.banner_index(), n.getNewTrendStatus(), 
                    n.showCredit(n.cid), n.checkContract();
                },
                methods: {
                    initLoad: function(e, t) {
                        this.currentCityName = e;
                    },
                    toAbout: function() {
                        i.sensors && i.sensors.track("Xcx_My_click", {
                            Xcx_about: "关于蛋壳"
                        }), e.navigateTo({
                            url: "../about/about"
                        });
                    },
                    toSh: function() {
                        i.sensors && i.sensors.track("Xcx_My_click", {
                            Xcx_custom_aftersSale_call: "售后咨询"
                        }), e.makePhoneCall({
                            phoneNumber: "400-155-1551",
                            success: function() {
                                console.log("拨打电话成功！");
                            },
                            fail: function() {
                                console.log("拨打电话失败！");
                            }
                        });
                    },
                    config: function() {
                        i.sensors && i.sensors.track("Xcx_My_click", {
                            Xcx_set_up: "设置"
                        }), e.navigateTo({
                            url: "../config/config"
                        });
                    },
                    selectPhone: function() {
                        i.sensors && i.sensors.track("Xcx_My_click", {
                            Xcx_custom_service_call: "租房咨询"
                        }), e.makePhoneCall({
                            phoneNumber: e.getStorageSync("cityTelNum"),
                            success: function() {
                                console.log("拨打电话成功！");
                            },
                            fail: function() {
                                console.log("拨打电话失败！");
                            }
                        });
                    },
                    toLogin: function() {
                        this.logout_onoff || e.navigateTo({
                            url: "../login/login"
                        });
                    },
                    download: function() {
                        this.onoff = !0;
                    },
                    toActivity: function() {
                        i.sensors && i.sensors.track("Xcx_My_click", {
                            Xcx_Activity: "老拉新活动"
                        }), e.navigateTo({
                            url: "../activity/oldpullnew"
                        });
                    },
                    coupon: function() {
                        var t = this;
                        i.sensors && i.sensors.track("Xcx_My_click", {
                            Xcx_coupon: "老拉优惠券"
                        }), "" == t.userId ? e.navigateTo({
                            url: "../login/login?tocoupon=true"
                        }) : e.navigateTo({
                            url: "../coupon/coupon"
                        });
                    },
                    logout: function() {
                        i.sensors && i.sensors.track("Xcx_My_click", {
                            Xcx_logout: "点击退出登录"
                        });
                        var t = this;
                        e.showModal({
                            content: "确定要退出登录吗",
                            success: function(n) {
                                n.confirm ? (i.sensors && i.sensors.track("Xcx_My_click", {
                                    Xcx_logout_success: "用户点击确定退出登录"
                                }), t.logout_onoff = !1, t.user_banner = !1, t.avatar = "https://public.danke.com.cn/public-20180519-FncC43aOUe_hWLWVuvGZKbq3jq04", 
                                t.mobile = "欢迎来到蛋壳公寓 租的省心 住得舒心", t.nickname = "点击注册/登录", t.is_customer = 0, e.removeStorage({
                                    key: "userMobile",
                                    success: function(e) {
                                        console.log(e.data);
                                    }
                                }), e.removeStorage({
                                    key: "access_token",
                                    success: function(e) {
                                        console.log(e.data);
                                    }
                                }), e.removeStorage({
                                    key: "is_customer",
                                    success: function(e) {
                                        console.log(e.data);
                                    }
                                }), e.removeStorage({
                                    key: "userNickname",
                                    success: function(e) {
                                        console.log(e.data);
                                    }
                                }), e.removeStorage({
                                    key: "userAvatar",
                                    success: function(e) {
                                        console.log(e.data);
                                    }
                                }), e.removeStorage({
                                    key: "userId",
                                    success: function(e) {
                                        console.log(e.data);
                                    }
                                }), e.removeStorage({
                                    key: "userInfo",
                                    success: function(e) {
                                        t.userId = "";
                                    }
                                }), t.banner_index()) : n.cancel && (i.sensors && i.sensors.track("Xcx_My_click", {
                                    Xcx_logout_cancel: "用户点击取消退出登录"
                                }), console.log("用户点击取消"));
                            }
                        });
                    },
                    toRecommend: function() {
                        var t = this;
                        i.sensors && i.sensors.track("Xcx_My_click", {
                            Xcx_recommend: "推荐有礼"
                        }), "" == t.userId ? e.navigateTo({
                            url: "../login/login?recommend=1"
                        }) : e.navigateTo({
                            url: "../recommend/recommend"
                        });
                    },
                    toDecember: function() {
                        i.sensors && i.sensors.track("Xcx_My_click", {
                            Xcx_December: "岁末狂欢惠"
                        }), e.navigateTo({
                            url: "../December/December"
                        });
                    },
                    onShareAppMessage: function() {
                        return {
                            title: "租的省心,住得舒心",
                            imageUrl: "../../images/share_img.png",
                            path: "pages/index/index"
                        };
                    },
                    banner_index: function() {
                        var t = this;
                        t.is_customer ? t.is_customer_str = 1 : t.is_customer_str = 0, (0, a.default)(c.default.url + "/web-api/wechat-applets/user-banner-list", {
                            app_id: "wx024695259e1a68cb",
                            city_id: e.getStorageSync("cityStorageNum"),
                            applet_type: 1,
                            is_customer: t.is_customer_str
                        }, "GET", !1, {
                            app_id: "wx024695259e1a68cb",
                            city_id: e.getStorageSync("cityStorageNum")
                        }).then(function(e) {
                            e.data.success && (t.user_banner = !0, t.banner_list = e.data.data, t.indexFal = 0);
                        });
                    },
                    to_banner: function(t) {
                        "网站" == t.currentTarget.dataset.bannertype || "网站" == t.currentTarget.dataset.bannerType ? e.navigateTo({
                            url: "../bannerPage/bannerPage?bannerURL=" + encodeURIComponent(t.currentTarget.dataset.address)
                        }) : "小程序路径" != t.currentTarget.dataset.bannertype && "小程序路径" != t.currentTarget.dataset.bannerType || (t.target.dataset.islogin ? e.getStorageSync("userId") ? e.navigateTo({
                            url: t.target.dataset.address
                        }) : e.navigateTo({
                            url: "../login/login"
                        }) : e.navigateTo({
                            url: t.target.dataset.address
                        }));
                    },
                    onSlideChangeEnd: function(e) {
                        this.index = e.detail.current + 1;
                    },
                    getNewTrendStatus: function() {
                        var e = this;
                        console.log("发起新风系统"), (0, s.default)({
                            url: c.default.url_room + "/v1/user/newTrendStatus",
                            data: {
                                user_id: e.userId,
                                city_id: e.cityId
                            },
                            signData: {
                                user_id: e.userId
                            }
                        }).then(function(t) {
                            console.log("新风系统数据", t), "0000" === t.data.code && t.data.data.id && (t.data.data.status = !0, 
                            e.newTrendData = t.data.data, e.showFreshAir());
                        });
                    },
                    toNewTrendStatus: function() {
                        var t = this;
                        e.navigateTo({
                            url: "../air_sys/air_sys?id=".concat(t.newTrendData.id, "&isOn=").concat(t.newTrendData.isOn)
                        });
                    },
                    checkContract: function() {
                        if (!e.getStorageSync("userId")) return !1;
                        console.log();
                    },
                    contractList: function() {
                        e.navigateTo({
                            url: "../onlineSignMyContract/onlineSignMyContract"
                        });
                    },
                    orderList: function() {
                        e.navigateTo({
                            url: "../orderList/orderList"
                        });
                    },
                    showFreshAir: function() {
                        this.lists.forEach(function(e) {
                            "freshAir" === e.type && (e.show = !0);
                        });
                    },
                    showCredit: function(e) {
                        console.log(e), "1" === e ? this.lists.forEach(function(e) {
                            "credit" === e.type && (e.show = !0);
                        }) : this.lists.forEach(function(e) {
                            "credit" === e.type && (e.show = !1);
                        });
                    },
                    toCredit: function() {
                        i.sensors.track("Xcx_My_click", {
                            Xcx_credit: "企业信用"
                        }), e.navigateTo({
                            url: "../webviews/webviews?url=" + encodeURIComponent("https://www.danke.com/about/credit.html")
                        });
                    },
                    changeList: function(e) {
                        var t = this;
                        switch (e) {
                          case "coupon":
                            t.coupon();
                            break;

                          case "rentConsult":
                            t.selectPhone();
                            break;

                          case "freshAir":
                            t.toNewTrendStatus();
                            break;

                          case "setting":
                            t.config();
                            break;

                          case "about":
                            t.toAbout();
                            break;

                          case "afterSale":
                            t.toSh();
                            break;

                          case "credit":
                            t.toCredit();
                        }
                    }
                }
            };
            t.default = u;
        }).call(this, n("543d").default);
    },
    d0ac: function(e, t, n) {
        n.r(t);
        var o = n("bd1d"), c = n.n(o);
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        t.default = c.a;
    },
    e936: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("e027"), t(n("66fd")), e(t(n("a143")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "e936", "common/runtime", "common/vendor" ] ] ]);