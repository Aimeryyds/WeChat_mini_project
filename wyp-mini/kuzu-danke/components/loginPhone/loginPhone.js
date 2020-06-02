(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/loginPhone/loginPhone" ], {
    "0ad5": function(e, t, a) {
        a.r(t);
        var o = a("872a"), n = a.n(o);
        for (var i in o) "default" !== i && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = n.a;
    },
    3055: function(e, t, a) {
        a.r(t);
        var o = a("894f"), n = a.n(o);
        for (var i in o) "default" !== i && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = n.a;
    },
    "547b": function(e, t, a) {
        a.r(t);
        var o = a("c100"), n = a("3055");
        for (var i in n) "default" !== i && function(e) {
            a.d(t, e, function() {
                return n[e];
            });
        }(i);
        a("ea73");
        var r = a("f0c5"), c = Object(r.a)(n.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    },
    "5f7d": function(e, t, a) {},
    "797a": function(e, t, a) {},
    "872a": function(e, t, a) {
        (function(e) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = o(a("5f18")), i = o(a("733e"));
            getApp();
            var r = a("9cb3");
            r = r.default || r;
            var c = {
                globalData: {
                    cityName: [],
                    cityNum: [],
                    cityTelList: "",
                    config: n.default,
                    request_tool: i.default,
                    sensors: r,
                    longitude: "",
                    latitude: "",
                    currentCityName: "",
                    currentCityNum: "",
                    onLoadSwitch: !1,
                    houseOnMapCity: "",
                    houseOnMapFirst: !0,
                    index_leads: "",
                    utm_source: "",
                    utm_medium: "",
                    utm_campaign: "",
                    utm_content: "",
                    utm_term: "",
                    all_query: ""
                },
                onLaunch: function(e) {
                    var t = this;
                    t.city_info(), console.log("App Launch"), t.updateApp();
                },
                onShow: function(e) {
                    console.log("App Show");
                },
                onHide: function() {
                    console.log("App Hide");
                },
                methods: {
                    city_info: function() {
                        var t = this;
                        (0, i.default)(n.default.url_room + "/v1/room/cityId", {
                            app_id: "wx024695259e1a68cb",
                            city_id: ""
                        }, "GET", !1, "").then(function(a) {
                            var o = [], n = [], i = [];
                            for (var r in a.data.data) n.push(r), o.push(a.data.data[r]), i.push({
                                name: a.data.data[r],
                                id: r
                            });
                            t.$options.globalData.cityList = i, t.$options.globalData.cityNum = n, t.$options.globalData.cityName = o, 
                            e.setStorage({
                                key: "cityList",
                                data: i
                            }), e.setStorage({
                                key: "cityNum_arr",
                                data: n
                            }), e.setStorage({
                                key: "cityName_arr",
                                data: o
                            });
                        }), t.toGetLocation();
                    },
                    toGetLocation: function() {
                        var t = this;
                        e.getLocation({
                            type: "wgs84",
                            success: function(e) {
                                t.getBaiduLocal(e);
                            },
                            fail: function() {
                                e.setStorage({
                                    key: "cityStorageName",
                                    data: "北京市"
                                }), e.setStorage({
                                    key: "cityStorageNum",
                                    data: "1"
                                }), e.setStorage({
                                    key: "original_cityName",
                                    data: "北京市"
                                }), e.setStorage({
                                    key: "original_cityNum",
                                    data: "1"
                                }), t.$options.globalData.onLoadSwitch = !0, t.$options.globalData.currentCityName = "北京市", 
                                t.$options.globalData.currentCityNum = "1", t.city_tel("北京市");
                            }
                        });
                    },
                    getBaiduLocal: function(t) {
                        var a = this;
                        e.request({
                            url: "https://api.map.baidu.com/geoconv/v1/?coords=" + t.longitude + "," + t.latitude + "&from=1&to=5&ak=YY5lVvoVmMSw7AHA11VQvw57GVdA6fLp",
                            success: function(e) {
                                "0" == e.data.status && (a.$options.globalData.longitude = e.data.result[0].x, a.$options.globalData.latitude = e.data.result[0].y, 
                                a.reverse_geocoding(e));
                            }
                        });
                    },
                    reverse_geocoding: function(t) {
                        var a = this;
                        e.request({
                            url: "https://api.map.baidu.com/reverse_geocoding/v3/?ak=YY5lVvoVmMSw7AHA11VQvw57GVdA6fLp&output=json&coordtype=wgs84ll&location=" + t.data.result[0].y + "," + t.data.result[0].x,
                            success: function(o) {
                                var n = o.data.result.addressComponent.city, i = o.data.result.cityCode;
                                -1 != a.$options.globalData.cityName.indexOf(n) ? (e.setStorage({
                                    key: "cityLongitude",
                                    data: t.data.result[0].x
                                }), e.setStorage({
                                    key: "cityLatitude",
                                    data: t.data.result[0].y
                                }), e.setStorage({
                                    key: "cityStorageName",
                                    data: n
                                }), e.setStorage({
                                    key: "cityCode",
                                    data: i
                                }), e.setStorage({
                                    key: "cityStorageNum",
                                    data: a.$options.globalData.cityNum[a.$options.globalData.cityName.indexOf(n)]
                                }), e.setStorage({
                                    key: "original_cityName",
                                    data: n
                                }), e.setStorage({
                                    key: "original_cityNum",
                                    data: a.$options.globalData.cityNum[a.$options.globalData.cityName.indexOf(n)]
                                }), a.$options.globalData.currentCityName = n, a.$options.globalData.currentCityNum = a.$options.globalData.cityNum[a.$options.globalData.cityName.indexOf(n)], 
                                a.$options.globalData.onLoadSwitch = !0, a.city_tel(n)) : (e.setStorage({
                                    key: "cityStorageName",
                                    data: "北京市"
                                }), e.setStorage({
                                    key: "cityStorageNum",
                                    data: "1"
                                }), e.setStorage({
                                    key: "original_cityName",
                                    data: "北京市"
                                }), e.setStorage({
                                    key: "original_cityNum",
                                    data: "1"
                                }), a.$options.globalData.onLoadSwitch = !0, a.$options.globalData.currentCityName = "北京市", 
                                a.$options.globalData.currentCityNum = "1", a.city_tel("北京市"));
                            }
                        });
                    },
                    city_tel: function(t) {
                        var a = this;
                        (0, i.default)(n.default.url_room + "/v1/room/tel", {
                            app_id: "wx024695259e1a68cb",
                            city_id: "",
                            type: "weixin"
                        }, "GET", !1, "").then(function(o) {
                            "0000" == o.data.code && (a.cityTelList = o.data.data, a.$options.globalData.cityTelList = o.data.data, 
                            e.setStorage({
                                key: "cityTelNum",
                                data: a.cityTelList[t]
                            }));
                        });
                    },
                    appLoad: function(t) {
                        var a = this, o = setInterval(function() {
                            if (a.$options.globalData.onLoadSwitch) {
                                clearInterval(o);
                                try {
                                    var n = e.getStorageSync("cityStorageName"), i = e.getStorageSync("cityStorageNum");
                                    n && (a.currentCityName = n), i && (a.currentCityNum = i);
                                } catch (e) {}
                                t && t(a.currentCityName, a.currentCityNum);
                            }
                        }, 500);
                    },
                    merge: function() {
                        for (var e = "", t = 0; t < arguments.length; t++) e += JSON.stringify(arguments[t]).replace(/[{|}]/g, "") + ",";
                        return e = "{" + e.replace(/^,*|,*$/g, "").replace(/,,*/g, ",").replace(/\s*/g, "") + "}", 
                        JSON.parse(e);
                    },
                    updateApp: function() {
                        var t = e.getUpdateManager();
                        t.onCheckForUpdate(function(a) {
                            console.log("小程序是否有新版本", a.hasUpdate), a.hasUpdate && t.onUpdateReady(function(a) {
                                e.showModal({
                                    title: "更新提示",
                                    content: "新版本已经准备好，是否重启应用？",
                                    success: function(e) {
                                        e.confirm && t.applyUpdate();
                                    }
                                });
                            });
                        });
                    }
                }
            };
            t.default = c;
        }).call(this, a("543d").default);
    },
    "894f": function(e, t, a) {
        (function(e) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, o(a("5f18")), o(a("733e")), o(a("ba34"));
            var n = o(a("8e35")), i = null, r = {
                data: function() {
                    return {
                        time: "获取验证码",
                        currentTime: 61,
                        areaIndex: 0,
                        areaList: [],
                        areaNum: [],
                        userName: "",
                        phoneNum: "",
                        yzmInput: "",
                        xqInput: "",
                        yzmimgValue: "",
                        yzmimgInput: "",
                        errInfo: "",
                        errImg: [ "请输入图片所示内容" ],
                        dxyzm: "",
                        cityNum: [],
                        yzmNum: !0,
                        flag: !0,
                        clickNum: 1,
                        bg_con: "",
                        mobileNum: "",
                        userPrivacy: !1,
                        disabled: !1,
                        loginNum: !1,
                        loginUser: !0,
                        phoneLogin: !0,
                        showPhone: !1,
                        animationData: "",
                        path: "",
                        privacy_url: !1,
                        showimgVerifi: !1,
                        imgVerificaUrl: "",
                        imgVerificaValue: "",
                        imgTitle: "请输入下方图片验证码",
                        isGotVerCode: !1,
                        inputDisabled: !1
                    };
                },
                onLoad: function(e) {},
                components: {
                    imgverificate: function() {
                        a.e("components/img-verificate/img-verificate").then(function() {
                            return resolve(a("52c3"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                props: [ "active", "active_cb", "qa_active", "isClickOnline", "qa_active_cb", "new_to_detail", "recommend", "recommend_login", "bargain", "ownerUserId", "isSelfClick", "callback", "tocoupon", "tooldpullnew" ],
                methods: {
                    closeEvent: function() {
                        this.$parent.closeEvent();
                    },
                    phoneNumInput: function(e) {
                        this.phoneNum = e.detail.value;
                    },
                    yzmImgInput: function(e) {
                        var t = e.detail.value;
                        t.toString().length, this.confirm_bg = "#3DBCC6", 0 == t.toString().length && (this.confirm_bg = "#D8DBDF"), 
                        this.yzmimgInput = e.detail.value;
                    },
                    yzmInput_new: function(e) {
                        4 == e.detail.value.toString().length ? this.bg_con = "#3DBCC6" : this.bg_con = "#9EDDE2", 
                        this.yzmInput = e.detail.value;
                    },
                    getVerificationCode: function(e) {
                        console.log(999999);
                        var t = this;
                        this.yzmimgValue = "", this.errImg = [], t.yzmNum = !1;
                        var a = t.phoneNum;
                        "" == t.phoneNum ? (t.errInfo = "", t.errInfo = "手机号码不能为空", console.log(t.errInfo)) : /^1[3456789]\d{9}$/.test(a) ? (t.getImgVerCode(), 
                        this.showimgVerifi = !0, this.disabled = !0, this.inputDisabled = !0, t.errInfo = "") : (t.errInfo = "", 
                        t.errInfo = "手机号码格式不正确", console.log(t.errInfo));
                    },
                    getCode: function(e) {
                        var t = this, a = t.currentTime;
                        i = setInterval(function() {
                            a--, t.time = "重新发送(" + a + ")", a <= 0 && (clearInterval(i), t.time = "重新发送", t.currentTime = 61, 
                            t.disabled = !1);
                        }, 1e3);
                    },
                    sendText: function() {
                        var t = this;
                        e.request({
                            url: n.default.globalData.config.new_url + "/passport/secret-code",
                            method: "GET",
                            data: {
                                appId: "101",
                                purpose: "AUTHENTICATION",
                                mobile: t.phoneNum,
                                captcha: t.imgVerificaValue
                            },
                            success: function(a) {
                                console.log(a), 0 == a.data.code ? (console.log(a.data.codeType), "PHONE_CALL" == a.data.result.codeType ? e.showToast({
                                    title: "本次为语音验证码，请注意接听来电。",
                                    icon: "none",
                                    duration: 4e3
                                }) : "SMS" == a.data.result.codeType && e.showToast({
                                    title: "短信验证码发送成功。",
                                    icon: "none",
                                    duration: 4e3
                                }), t.isGotVerCode = !0, t.hideimgVerifi(), t.disabled = !0, t.errInfo = "", t.getCode(), 
                                t.errInfo = "") : (e.showToast({
                                    title: a.data.message,
                                    icon: "none",
                                    duration: 3e3
                                }), t.showimgVerifi = !0, t.getImgVerCode());
                            },
                            fail: function(a) {
                                t.errInfo = "", t.yzmNum = !1, t.showimgVerifi = !0, t.getImgVerCode(), e.showToast({
                                    title: a.data.message,
                                    icon: "none",
                                    duration: 3e3
                                });
                            }
                        });
                    },
                    yzmqd: function(e) {
                        var t = this;
                        t.errImg = [], n.default.globalData.request_tool(n.default.globalData.config.url + "/web-api/wechat-applets/img-code", {
                            city_id: "",
                            mobile: t.phoneNum,
                            verify_code: t.yzmimgInput,
                            app_id: "wx024695259e1a68cb"
                        }, "POST", !1, {
                            city_id: "",
                            app_id: "wx024695259e1a68cb"
                        }).then(function(e) {
                            e.data.success ? (t.flag = !0, t.sendText()) : (t.errImg = [], t.errImg.push(e.data.msg), 
                            t.errImg = t.errImg);
                        });
                    },
                    yzmImage: function() {
                        var e = this;
                        e.yzmPhone = n.default.globalData.config.url + "/get-img-code/345/125?mobile=" + e.phoneNum + "&time=" + new Date().getTime();
                    },
                    changeImg: function() {
                        this.yzmImage();
                    },
                    confirm: function() {
                        var t = this, a = t.phoneNum, o = t.yzmInput;
                        "" == a ? (t.errInfo = "", t.errInfo = "手机号不能为空") : "" == o ? (t.errInfo = "", t.errInfo = "验证码不能为空") : /^1[345678]\d{9}$/.test(a) ? (t.errInfo = "", 
                        e.request({
                            url: n.default.globalData.config.new_url + "/passport/access-token",
                            data: {
                                appId: "101",
                                appPlatform: "WXMP",
                                appSecret: "2fb27f927c216c0e5a1821dc94bd2a14",
                                mobile: t.phoneNum,
                                referralCode: "",
                                secretCode: t.yzmInput
                            },
                            method: "POST",
                            success: function(a) {
                                console.log("success;"), 0 == a.data.code ? (e.setStorageSync("access_token", a.data.result.tokenSchema + " " + a.data.result.accessToken), 
                                e.request({
                                    url: n.default.globalData.config.new_url + "/passport/userinfo",
                                    method: "GET",
                                    header: {
                                        Authorization: a.data.result.tokenSchema + " " + a.data.result.accessToken
                                    },
                                    success: function(o) {
                                        e.request({
                                            url: n.default.globalData.config.url + "/web-api/user/user-info",
                                            method: "GET",
                                            header: {
                                                Authorization: a.data.result.tokenSchema + " " + a.data.result.accessToken
                                            },
                                            success: function(n) {
                                                if (0 == o.data.code) if (o.data.result.comePhone = !0, e.setStorage({
                                                    key: "userInfo",
                                                    data: {
                                                        mobile: o.data.result.mobile,
                                                        nickname: o.data.result.displayName,
                                                        user_id: o.data.result.userId,
                                                        avatar: o.data.result.avatarUrl,
                                                        is_customer: n.data.is_customer,
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
                                                    data: n.data.is_customer
                                                }), e.setStorage({
                                                    key: "access_token",
                                                    data: a.data.result.tokenSchema + " " + a.data.result.accessToken
                                                }), e.setStorage({
                                                    key: "comePhone",
                                                    data: !0
                                                }), 0 != t.callback) {
                                                    var i = t.callback;
                                                    /detail\/detail/.test(i) && (e.setStorage({
                                                        key: "detailReload",
                                                        data: 1
                                                    }), e.navigateBack({
                                                        delta: 1
                                                    })), /interest\/interest/.test(i) && (e.setStorage({
                                                        key: "interestReload",
                                                        data: 1
                                                    }), e.switchTab({
                                                        url: "../interest/interest"
                                                    }));
                                                } else if (t.path) e.redirectTo({
                                                    url: t.path
                                                }); else if (t.tooldpullnew) e.redirectTo({
                                                    url: "../activity/oldpullnew"
                                                }); else if (t.isClickOnline) {
                                                    var r = getCurrentPages();
                                                    (r[r.length - 1], r[r.length - 2]).$vm.isClickOnline = 1, e.navigateBack();
                                                } else e.reLaunch({
                                                    url: "../user/user"
                                                }); else t.errInfo = "", t.yzmNum = !1, t.errInfo = o.data.message, e.showToast({
                                                    icon: "none",
                                                    title: o.data.message,
                                                    duration: 2e3
                                                });
                                                e.hideLoading();
                                            }
                                        });
                                    }
                                })) : (t.errInfo = "", t.yzmNum = !1, t.errInfo = a.data.message, e.showToast({
                                    icon: "none",
                                    title: a.data.message,
                                    duration: 2e3
                                }));
                            },
                            fail: function(a) {
                                console.log(a), t.errInfo = "", t.yzmNum = !1, t.errInfo = a.data.message, console.log("fail;"), 
                                e.showToast({
                                    icon: "none",
                                    title: a.data.message,
                                    duration: 2e3
                                });
                            }
                        })) : (t.errInfo = "", t.errInfo = "手机号码格式不正确");
                    },
                    onShareAppMessage: function() {
                        return {
                            title: "租的省心,住得舒心",
                            imageUrl: "../../images/share_img.png",
                            path: "pages/index/index"
                        };
                    },
                    toSecrecy: function() {
                        this.userPrivacy = !0, this.privacy_url = "https://www.danke.com/zhuanti/user-clause";
                    },
                    toProtect: function() {
                        this.userPrivacy = !0, this.privacy_url = "https://www.danke.com/zhuanti/user-privacy";
                    },
                    hideimgVerifi: function() {
                        var e = this;
                        e.showimgVerifi = !1, e.inputDisabled = !1, e.isGotVerCode ? e.disabled = !0 : e.disabled = !1, 
                        e.errInfo = "";
                    },
                    getImgVerCode: function() {
                        var e = this;
                        e.imgVerificaUrl = n.default.globalData.config.new_url + "/passport/secret-code/captcha?mobile=" + e.phoneNum + "&appId=101&time=" + new Date().getTime();
                    },
                    confirmVeri: function() {
                        var e = this;
                        e.imgVerificaValue.length >= 1 && e.sendText();
                    },
                    bindImgVerificaValue: function(e) {
                        this.imgVerificaValue = e;
                    }
                },
                computed: {},
                watch: {}
            };
            t.default = r;
        }).call(this, a("543d").default);
    },
    "8e35": function(e, t, a) {
        a.r(t);
        var o = a("0ad5");
        for (var n in o) "default" !== n && function(e) {
            a.d(t, e, function() {
                return o[e];
            });
        }(n);
        a("e480");
        var i = a("f0c5"), r = Object(i.a)(o.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = r.exports;
    },
    c100: function(e, t, a) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, n = [];
        a.d(t, "b", function() {
            return o;
        }), a.d(t, "c", function() {
            return n;
        }), a.d(t, "a", function() {});
    },
    e480: function(e, t, a) {
        var o = a("5f7d");
        a.n(o).a;
    },
    ea73: function(e, t, a) {
        var o = a("797a");
        a.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/loginPhone/loginPhone-create-component", {
    "components/loginPhone/loginPhone-create-component": function(e, t, a) {
        a("543d").createComponent(a("547b"));
    }
}, [ [ "components/loginPhone/loginPhone-create-component" ] ] ]);