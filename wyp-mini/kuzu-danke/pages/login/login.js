(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/login/login" ], {
    "145f": function(e, a, t) {
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        t.d(a, "b", function() {
            return n;
        }), t.d(a, "c", function() {
            return o;
        }), t.d(a, "a", function() {});
    },
    "3b3a": function(e, a, t) {},
    "522d": function(e, a, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var o = n(t("5f18")), i = n(t("733e")), s = getApp();
            s.sensors || (s.sensors = s.globalData.sensors);
            var r = {
                data: function() {
                    return {
                        currentCityName: "",
                        userInfo: {},
                        hasUserInfo: !1,
                        session_key: "",
                        nickname: "",
                        sex: "",
                        headimgurl: "",
                        province: "",
                        wxcity: "",
                        user_data: "",
                        user_iv: "",
                        phone_data: "",
                        phone_iv: "",
                        loginNum: !1,
                        loginUser: !0,
                        phoneLogin: !0,
                        active: "",
                        active_cb: "",
                        qa_active: "",
                        qa_active_cb: "",
                        new_to_detail: "",
                        recommend: "",
                        recommend_login: "",
                        bargain: "",
                        ownerUserId: "",
                        isSelfClick: "",
                        callback: 0,
                        showPhone: !1,
                        animationData: "",
                        tocoupon: !1,
                        tooldpullnew: !1,
                        loginAlipayIn: null,
                        allUserSell: 0,
                        noPhone: 0,
                        detailToOpenId: 0,
                        userData: "",
                        userIv: "",
                        isClickOnline: ""
                    };
                },
                onShareAppMessage: function() {
                    return {
                        title: "租的省心,住得舒心",
                        imageUrl: "../../images/share_img.png",
                        path: "pages/index/index"
                    };
                },
                onLoad: function(e) {
                    this.active = e.active || "", this.active_cb = e.active_cb || "", this.qa_active = e.qa_active || "", 
                    this.qa_active_cb = e.qa_active_cb || "", this.bargain = e.bargain || "", this.ownerUserId = e.ownerUserId || "", 
                    this.isSelfClick = e.isSelfClick || "", this.callback = e.callback || 0, this.tocoupon = e.tocoupon || !1, 
                    this.tooldpullnew = e.tooldpullnew || !1, this.recommend = e.recommend || "", this.recommend_login = e.recommend_login || "", 
                    this.allUserSell = e.allusersell || "", this.noPhone = e.noPhone || "", this.detailToOpenId = e.detailToOpenId || "", 
                    this.detailToUserMobile = e.detailToUserMobile || "", this.data_options = e.data_options || "", 
                    this.index_leads = e.index_leads || "", this.new_to_detail = e.new_to_detail || "", 
                    this.isClickOnline = e.isClickOnline || "", this.detail_openId = e.detail_openId || "", 
                    console.log(this.callback);
                },
                components: {
                    loginphone: function() {
                        Promise.all([ t.e("common/vendor"), t.e("components/loginPhone/loginPhone") ]).then(function() {
                            return resolve(t("547b"));
                        }.bind(null, t)).catch(t.oe);
                    }
                },
                props: {},
                methods: {
                    getphonenumber: function(a) {
                        s.sensors.track("Xcx_login", {
                            Xcx_authorize_phonenumber: "点击手机号码授权"
                        });
                        var t = this;
                        e.showLoading({
                            title: "努力加载中..."
                        }), "getPhoneNumber:fail user deny" == a.detail.errMsg ? e.hideLoading() : (t.phone_iv = a.detail.iv, 
                        t.phone_data = a.detail.encryptedData, t.getuserinfo());
                    },
                    formatDateTime: function(e) {
                        var a = new Date(e), t = a.getFullYear(), n = a.getMonth() + 1;
                        n = n < 10 ? "0" + n : n;
                        var o = a.getDate();
                        o = o < 10 ? "0" + o : o;
                        var i = a.getHours();
                        i = i < 10 ? "0" + i : i;
                        var s = a.getMinutes(), r = a.getSeconds();
                        return s = s < 10 ? "0" + s : s, r = r < 10 ? "0" + r : r, t + "-" + n + "-" + o + " " + i + ":" + s + ":" + r;
                    },
                    getuserinfo: function(a) {
                        s.sensors.track("Xcx_login", {
                            Xcx_wechat_login: "点击微信登录"
                        }), e.showLoading({
                            title: "努力加载中..."
                        });
                        var t = this;
                        t.formatDateTime(new Date().getTime()), t.getUserUnionId(), e.login({
                            success: function(a) {
                                console.log(a), e.getUserInfo({
                                    success: function(n) {
                                        console.log(n), t.userData = n.encryptedData, t.userIv = n.iv;
                                        var i = o.default.new_url + "/passport/access-token";
                                        e.request({
                                            url: i,
                                            method: "POST",
                                            header: {
                                                "Content-Type": "application/json;charset=UTF-8"
                                            },
                                            data: {
                                                appId: "101",
                                                appPlatform: "WXMP",
                                                appSecret: "2fb27f927c216c0e5a1821dc94bd2a14",
                                                socialAuthCode: a.code,
                                                socialIdentityDetails: {
                                                    source: "WECHAT",
                                                    phoneData: t.phone_data,
                                                    phoneIv: t.phone_iv,
                                                    userData: t.userData,
                                                    userIv: t.userIv
                                                }
                                            },
                                            success: function(a) {
                                                console.log(a);
                                                var o = a.statusCode, r = a.data;
                                                200 !== o && 201 !== o && 401 !== o && s.globalData.sensors.track("MP_errorLog", {
                                                    statusCode: o || "",
                                                    errorCode: r.code || "",
                                                    errorMessage: r.message || "",
                                                    content: JSON.stringify(r),
                                                    api: i
                                                }), 60001 == a.data.code ? (t.loginNum = !0, t.loginUser = !1, t.phoneLogin = !1, 
                                                e.hideLoading()) : 0 == a.data.code ? (e.setStorageSync("Authorization", a.data.result.tokenSchema + " " + a.data.result.accessToken), 
                                                e.request({
                                                    url: s.globalData.config.new_url + "/passport/userinfo",
                                                    method: "GET",
                                                    header: {
                                                        Authorization: a.data.result.tokenSchema + " " + a.data.result.accessToken
                                                    },
                                                    success: function(o) {
                                                        console.log(o), e.request({
                                                            url: s.globalData.config.url + "/web-api/user/user-info",
                                                            method: "GET",
                                                            header: {
                                                                Authorization: a.data.result.tokenSchema + " " + a.data.result.accessToken
                                                            },
                                                            success: function(i) {
                                                                var r, l;
                                                                if (console.log(i), e.hideLoading(), r = i.data.is_customer && i.data.is_landlord ? "租户&业主" : i.data.is_customer ? "租户" : i.data.is_landlord ? "业主" : i.data.is_customer && i.data.is_landlord ? "游客" : "非租户", 
                                                                1 == n.userInfo.gender ? l = "男" : 2 == n.userInfo.gender ? l = "女" : 0 == n.userInfo.gender && (l = "未知"), 
                                                                s.sensors.registerApp({
                                                                    cid: e.getStorageSync("cityStorageName"),
                                                                    platformType: "wx_xcx",
                                                                    version: "2.0",
                                                                    openId: e.getStorageSync("openId"),
                                                                    unionId: e.getStorageSync("unionId"),
                                                                    user_type: r
                                                                }), s.sensors.setProfile({
                                                                    cid: e.getStorageSync("cityStorageName"),
                                                                    gender: l,
                                                                    city: n.userInfo.city,
                                                                    openId: e.getStorageSync("openId"),
                                                                    unionId: e.getStorageSync("unionId"),
                                                                    visitTime: t.formatDateTime(Date.parse(new Date())).toString(),
                                                                    user_type: r
                                                                }), s.sensors.setOpenid(e.getStorageSync("openId")), s.sensors.login(o.data.result.userId), 
                                                                s.sensors.init(), e.setStorage({
                                                                    key: "userInfo",
                                                                    data: {
                                                                        mobile: o.data.result.mobile,
                                                                        nickname: o.data.result.displayName,
                                                                        user_id: o.data.result.userId,
                                                                        avatar: o.data.result.avatarUrl,
                                                                        is_customer: i.data.is_customer,
                                                                        access_token: a.data.result.tokenSchema + " " + a.data.result.accessToken
                                                                    }
                                                                }), e.setStorage({
                                                                    key: "userMobile",
                                                                    data: o.data.result.mobile
                                                                }), e.setStorage({
                                                                    key: "userNickname",
                                                                    data: o.data.result.displayName
                                                                }), e.setStorage({
                                                                    key: "userAvatar",
                                                                    data: o.data.result.avatarUrl
                                                                }), e.setStorage({
                                                                    key: "userId",
                                                                    data: o.data.result.userId
                                                                }), e.setStorage({
                                                                    key: "is_customer",
                                                                    data: i.data.is_customer
                                                                }), e.setStorage({
                                                                    key: "access_token",
                                                                    data: a.data.result.tokenSchema + " " + a.data.result.accessToken
                                                                }), t.callback && 0 != t.callback) {
                                                                    var d = t.callback;
                                                                    /detail\/detail/.test(d) && e.setStorage({
                                                                        key: "detailReload",
                                                                        data: 1
                                                                    }), /interest\/interest/.test(d) && (e.setStorage({
                                                                        key: "interestReload",
                                                                        data: 1
                                                                    }), e.switchTab({
                                                                        url: "../interest/interest"
                                                                    })), /index\/index/.test(d) && e.reLaunch({
                                                                        url: "../index/index"
                                                                    }), e.navigateBack({
                                                                        delta: 1
                                                                    });
                                                                } else if (1 == t.active) e.reLaunch({
                                                                    url: "../active/active"
                                                                }); else if (1 == t.active_cb) e.navigateBack({
                                                                    delta: 1
                                                                }); else if (1 == t.qa_active) e.reLaunch({
                                                                    url: "../qa_active/qa_active"
                                                                }); else if (1 == t.recommend) e.redirectTo({
                                                                    url: "../recommend/recommend"
                                                                }); else if (1 == t.new_to_detail) e.redirectTo({
                                                                    url: "../detail/detail?back_to_detail=1"
                                                                }); else if (1 == t.detailToOpenId) e.redirectTo({
                                                                    url: "../detail/detail"
                                                                }); else if (1 == t.isClickOnline) {
                                                                    var c = getCurrentPages();
                                                                    (c[c.length - 1], c[c.length - 2]).$vm.isClickOnline = 1, e.navigateBack();
                                                                } else if (1 == t.index_leads) s.globalData.index_leads = t.index_leads, e.switchTab({
                                                                    url: "../index/index"
                                                                }); else if (1 == t.qa_active_cb) e.navigateBack({
                                                                    delta: 1
                                                                }); else if (1 == t.bargain) e.redirectTo({
                                                                    url: "../bargain_start/bargain_start?isSelfClick=" + t.isSelfClick + "&ownerUserId=" + t.ownerUserId
                                                                }); else if (t.noPhone) e.redirectTo({
                                                                    url: "../allUserSell/allUserSell"
                                                                }); else {
                                                                    if (t.tocoupon) return void e.redirectTo({
                                                                        url: "../coupon/coupon"
                                                                    });
                                                                    if (t.tooldpullnew) return void e.redirectTo({
                                                                        url: "../activity/oldpullnew"
                                                                    });
                                                                    e.reLaunch({
                                                                        url: "../user/user"
                                                                    });
                                                                }
                                                            }
                                                        });
                                                    }
                                                })) : (e.hideLoading(), e.showToast({
                                                    title: "登录授权失败,请重新登录。",
                                                    icon: "none",
                                                    duration: 2e3
                                                }));
                                            },
                                            fail: function(a) {
                                                console.log(res.err), e.hideLoading(), e.showToast({
                                                    title: "登录授权失败,请重新登录。",
                                                    icon: "none",
                                                    duration: 2e3
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    getUserUnionId: function() {
                        var a = this;
                        e.login({
                            success: function(t) {
                                console.log(t), e.request({
                                    url: o.default.new_url + "/passport/social-identity",
                                    method: "GET",
                                    data: {
                                        socialAuthCode: t.code,
                                        appPlatform: "WXMP",
                                        source: "WECHAT"
                                    },
                                    success: function(t) {
                                        console.log(t), a.openId = t.data.result.openId, a.unionId = t.data.result.unionId, 
                                        e.setStorage({
                                            key: "openId",
                                            data: t.data.result.openId
                                        }), e.setStorage({
                                            key: "unionId",
                                            data: t.data.result.unionId
                                        });
                                    }
                                });
                            }
                        });
                    },
                    phone_login: function() {
                        var a = e.createAnimation({
                            duration: 300,
                            timingFunction: "ease"
                        });
                        this.animation = a, this.animation.top(0).step(), this.showPhone = !0, this.animationData = this.animation.export(), 
                        s.sensors.track("Xcx_login", {
                            Xcx_phone_login: "点击手机号登录"
                        });
                    },
                    closeEvent: function(a) {
                        var t = this;
                        t.showPhone = !1;
                        var n = e.createAnimation({
                            duration: 300,
                            timingFunction: "ease"
                        });
                        this.animation = n, this.animation.top("100%").step(), this.animationData = this.animation.export(), 
                        setTimeout(function() {
                            t.showPhone = !1;
                        }, 300);
                    },
                    toUser: function() {
                        var a = this;
                        (0, i.default)(o.default.url + "/web-api/wechat-applets/wechat-login", {
                            app_id: "wx024695259e1a68cb",
                            city_id: "",
                            session_3rd: a.session_key,
                            user_data: a.user_data,
                            user_iv: a.user_iv,
                            phone_data: a.phone_data,
                            phone_iv: a.phone_iv
                        }, "POST", !1, {
                            app_id: "wx024695259e1a68cb",
                            city_id: ""
                        }).then(function(t) {
                            0 == t.data.success ? e.showToast({
                                title: t.data.msg,
                                icon: "none",
                                duration: 2e3
                            }) : (s.sensors.track("Xcx_login", {
                                Xcx_wechat_login_success_isPhone: "微信登录有授权手机情况登录成功"
                            }), e.setStorage({
                                key: "userInfo",
                                data: t.data.data
                            }), e.setStorage({
                                key: "userMobile",
                                data: t.data.data.mobile
                            }), e.setStorage({
                                key: "userNickname",
                                data: t.data.data.nickname
                            }), e.setStorage({
                                key: "userAvatar",
                                data: t.data.data.avatar
                            }), e.setStorage({
                                key: "userId",
                                data: t.data.data.user_id
                            }), 1 == a.active ? e.reLaunch({
                                url: "../active/active"
                            }) : 1 == a.active_cb ? e.navigateBack({
                                delta: 1
                            }) : e.reLaunch({
                                url: "../user/user"
                            }), e.hideLoading());
                        });
                    },
                    login_zfb: function() {
                        var a = this;
                        e.showLoading({
                            title: "努力加载中..."
                        }), e.getAuthCode({
                            scopes: "auth_user",
                            success: function(t) {
                                a.authCode = t.authCode;
                                var n = {
                                    login_type: "ali-applet",
                                    code: t.authCode
                                }, i = JSON.stringify(n);
                                e.request({
                                    url: o.default.url_room + "/v1/user/login",
                                    method: "POST",
                                    data: i,
                                    success: function(t) {
                                        if ("0000" == t.data.code) if (e.setStorage({
                                            key: "userInfo",
                                            data: {
                                                mobile: t.data.data.mobile,
                                                nickname: t.data.data.nickname,
                                                user_id: t.data.data.id,
                                                avatar: t.data.data.avatar,
                                                is_customer: t.data.data.is_customer,
                                                access_token: t.data.data.access_token
                                            }
                                        }), e.setStorage({
                                            key: "userNickname",
                                            data: t.data.data.nickname
                                        }), e.setStorage({
                                            key: "userAvatar",
                                            data: t.data.data.avatar
                                        }), e.setStorage({
                                            key: "userMobile",
                                            data: t.data.data.mobile
                                        }), e.setStorage({
                                            key: "userId",
                                            data: t.data.data.id
                                        }), e.setStorage({
                                            key: "is_customer",
                                            data: t.data.data.is_customer
                                        }), e.setStorage({
                                            key: "access_token",
                                            data: t.data.data.access_token
                                        }), a.callback) {
                                            var n = a.callback;
                                            "pages/detail_aliPay/detail_aliPay" != n && "pages/detail/detail" != n || e.setStorage({
                                                key: "detailReload",
                                                data: 1
                                            }), /interest\/interest/.test(n) && e.setStorage({
                                                key: "interestReload",
                                                data: 1
                                            }), e.navigateBack({
                                                delta: 1
                                            });
                                        } else if (1 == a.active) e.reLaunch({
                                            url: "../active/active"
                                        }); else if (1 == a.active_cb) e.navigateBack({
                                            delta: 1
                                        }); else if (1 == a.qa_active) e.reLaunch({
                                            url: "../qa_active/qa_active"
                                        }); else if (1 == a.new_to_detail) e.reLaunch({
                                            url: "../detail/detail?back_to_detail=1"
                                        }); else if (1 == a.isClickOnline) e.redirectTo({
                                            url: "../detail/detail?isClickOnline=1"
                                        }); else if (1 == a.qa_active_cb) e.navigateBack({
                                            delta: 1
                                        }); else {
                                            if (a.tocoupon) return void e.redirectTo({
                                                url: "../coupon/coupon"
                                            });
                                            if (a.tooldpullnew) return void e.redirectTo({
                                                url: "../activity/oldpullnew"
                                            });
                                            a.path ? e.redirectTo({
                                                url: a.path
                                            }) : e.reLaunch({
                                                url: "../user/user"
                                            });
                                        } else e.showToast({
                                            content: t.data.msg,
                                            icon: "none",
                                            duration: 2e3
                                        });
                                        e.hideLoading();
                                    },
                                    fail: function(a) {
                                        e.alert({
                                            content: "登录失败"
                                        });
                                    }
                                });
                            },
                            fail: function(a) {
                                e.alert({
                                    content: "登录授权失败,请重新登录。"
                                }), e.hideLoading();
                            }
                        });
                    }
                },
                computed: {},
                watch: {}
            };
            a.default = r;
        }).call(this, t("543d").default);
    },
    "732a": function(e, a, t) {
        t.r(a);
        var n = t("145f"), o = t("df95");
        for (var i in o) "default" !== i && function(e) {
            t.d(a, e, function() {
                return o[e];
            });
        }(i);
        t("746b");
        var s = t("f0c5"), r = Object(s.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        a.default = r.exports;
    },
    "746b": function(e, a, t) {
        var n = t("3b3a");
        t.n(n).a;
    },
    df95: function(e, a, t) {
        t.r(a);
        var n = t("522d"), o = t.n(n);
        for (var i in n) "default" !== i && function(e) {
            t.d(a, e, function() {
                return n[e];
            });
        }(i);
        a.default = o.a;
    },
    f187: function(e, a, t) {
        (function(e) {
            function a(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("e027"), a(t("66fd")), e(a(t("732a")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "f187", "common/runtime", "common/vendor" ] ] ]);