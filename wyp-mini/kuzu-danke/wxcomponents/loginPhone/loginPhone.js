var e = getApp(), a = null;

e.sensors || (e.sensors = e.globalData.sensors), Component({
    options: {
        multipleSlots: !0
    },
    properties: {
        active: {
            type: null,
            value: ""
        },
        active_cb: {
            type: null,
            value: ""
        },
        qa_active: {
            type: null,
            value: ""
        },
        isClickOnline: {
            type: null,
            value: ""
        },
        qa_active_cb: {
            type: null,
            value: ""
        },
        new_to_detail: {
            type: null,
            value: ""
        },
        recommend: {
            type: null,
            value: ""
        },
        recommend_login: {
            type: null,
            value: ""
        },
        bargain: {
            type: null,
            value: ""
        },
        ownerUserId: {
            type: null,
            value: ""
        },
        isSelfClick: {
            type: null,
            value: ""
        },
        callback: {
            type: null,
            value: 0
        },
        tocoupon: {
            type: null,
            value: !1
        },
        tooldpullnew: {
            type: null,
            value: !1
        }
    },
    data: {
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
        errInfo: [],
        errImg: [ "请输入图片所示内容" ],
        dxyzm: "",
        cityNum: [],
        yzmNum: !0,
        flag: !0,
        clickNum: 1,
        bg_con: "",
        disable_con: !1,
        mobileNum: "",
        userPrivacy: !1,
        userProtect: !1,
        privacy_url: !1,
        is_customer_data: ""
    },
    created: function() {},
    methods: {
        phoneNumInput: function(e) {
            this.setData({
                phoneNum: e.detail.value
            });
        },
        yzmimgInput: function(e) {
            var a = e.detail.value;
            a.toString().length, this.setData({
                confirm_bg: "#3DBCC6",
                disable_con: !0
            }), 0 == a.toString().length && this.setData({
                confirm_bg: "#D8DBDF"
            }), this.setData({
                yzmimgInput: e.detail.value
            });
        },
        yzmInput: function(e) {
            4 == e.detail.value.toString().length ? this.setData({
                bg_con: "#3DBCC6",
                disable_con: !0
            }) : this.setData({
                bg_con: "#9EDDE2",
                disable_con: !1
            }), this.setData({
                yzmInput: e.detail.value
            });
        },
        getVerificationCode: function(e) {
            var a = this;
            this.setData({
                yzmimgValue: "",
                errImg: []
            }), a.data.yzmNum = !1;
            var t = a.data.phoneNum;
            console.log(t), "" == t ? (a.data.errInfo = [], a.data.errInfo.push("手机号码不能为空"), 
            a.setData({
                errInfo: a.data.errInfo
            })) : /^1[3456789]\d{9}$/.test(t) ? (a.data.errInfo = [], a.data.errInfo.push(), 
            a.setData({
                errInfo: a.data.errInfo
            }), a.getCode(), a.setData({
                disabled: !0
            }), a.sendText()) : (a.data.errInfo = [], a.data.errInfo.push("手机号码格式不正确"), a.setData({
                errInfo: a.data.errInfo
            }));
        },
        getCode: function(e) {
            var t = this, r = t.data.currentTime;
            a = setInterval(function() {
                r--, t.setData({
                    time: "重新发送(" + r + ")"
                }), r <= 0 && (clearInterval(a), t.setData({
                    time: "重新发送",
                    currentTime: 61,
                    disabled: !1
                }));
            }, 1e3);
        },
        sendText: function() {
            var a = this;
            wx.request({
                url: e.globalData.config.new_url + "/passport/secret-code",
                data: {
                    appId: "101",
                    purpose: "AUTHENTICATION",
                    mobile: a.data.phoneNum
                },
                method: "GET",
                success: function(e) {
                    console.log(e), 0 == e.data.code ? (console.log(e.data.codeType), "PHONE_CALL" == e.data.result.codeType ? wx.showToast({
                        title: "本次为语音验证码，请注意接听来电。",
                        icon: "none",
                        duration: 4e3
                    }) : "SMS" == e.data.result.codeType && wx.showToast({
                        title: "短信验证码发送成功。",
                        icon: "none",
                        duration: 4e3
                    })) : wx.showToast({
                        title: e.data.message,
                        icon: "none",
                        duration: 4e3
                    });
                },
                fail: function(e) {
                    wx.showToast({
                        title: e.data.message,
                        icon: "none",
                        duration: 3e3
                    });
                }
            });
        },
        yzmqd: function(a) {
            var t = this;
            t.data.errImg = [], e.globalData.request_tool(e.globalData.config.url + "/web-api/wechat-applets/img-code", {
                city_id: "",
                mobile: t.data.phoneNum,
                verify_code: t.data.yzmimgInput,
                app_id: "wx024695259e1a68cb"
            }, "POST", !1, {
                city_id: "",
                app_id: "wx024695259e1a68cb"
            }).then(function(e) {
                console.log(e), e.data.success ? (t.setData({
                    flag: !0
                }), t.sendText()) : (t.data.errImg = [], t.data.errImg.push(e.data.msg), t.setData({
                    errImg: t.data.errImg
                }), t.yzmImage());
            });
        },
        yzmImage: function() {
            var a = this;
            a.setData({
                yzmPhone: e.globalData.config.url + "/get-img-code/345/125?mobile=" + a.data.phoneNum + "&time=" + new Date().getTime()
            });
        },
        changeImg: function() {
            this.yzmImage();
        },
        formatDateTime: function(e) {
            var a = new Date(e), t = a.getFullYear(), r = a.getMonth() + 1;
            r = r < 10 ? "0" + r : r;
            var o = a.getDate();
            o = o < 10 ? "0" + o : o;
            var n = a.getHours();
            n = n < 10 ? "0" + n : n;
            var s = a.getMinutes(), i = a.getSeconds();
            return s = s < 10 ? "0" + s : s, i = i < 10 ? "0" + i : i, t + "-" + r + "-" + o + " " + n + ":" + s + ":" + i;
        },
        confirm: function() {
            var a = this, t = this, r = t.data.phoneNum, o = t.data.yzmInput;
            "" == r ? (t.data.errInfo = [], t.data.errInfo.push("手机号不能为空"), t.setData({
                errInfo: t.data.errInfo
            })) : "" == o ? (t.data.errInfo = [], t.data.errInfo.push("验证码不能为空"), t.setData({
                errInfo: t.data.errInfo
            })) : /^1[3456789]\d{9}$/.test(r) ? (t.data.errInfo = [], t.data.errInfo.push(), 
            t.setData({
                errInfo: t.data.errInfo
            }), wx.showLoading({
                title: "加载中"
            }), wx.request({
                url: e.globalData.config.new_url + "/passport/access-token",
                data: {
                    appId: "101",
                    appPlatform: "WXMP",
                    appSecret: "2fb27f927c216c0e5a1821dc94bd2a14",
                    mobile: t.data.phoneNum,
                    referralCode: "",
                    secretCode: t.data.yzmInput
                },
                method: "POST",
                success: function(r) {
                    console.log(r), 0 == r.data.code ? (wx.setStorageSync("access_token", r.data.result.tokenSchema + " " + r.data.result.accessToken), 
                    wx.request({
                        url: e.globalData.config.new_url + "/passport/userinfo",
                        method: "GET",
                        header: {
                            Authorization: r.data.result.tokenSchema + " " + r.data.result.accessToken
                        },
                        success: function(o) {
                            wx.request({
                                url: e.globalData.config.url + "/web-api/user/user-info",
                                method: "GET",
                                header: {
                                    Authorization: r.data.result.tokenSchema + " " + r.data.result.accessToken
                                },
                                success: function(r) {
                                    if (console.log(r), a.is_customer_data = r.data.is_customer, 0 == o.data.code) {
                                        e.sensors.track("Xcx_login", {
                                            Xcx_phone_login_success: "手机登录成功"
                                        }), o.data.result.comePhone = !0, wx.setStorage({
                                            key: "userInfo",
                                            data: {
                                                mobile: o.data.result.mobile,
                                                nickname: o.data.result.displayName,
                                                user_id: o.data.result.userId,
                                                avatar: o.data.result.avatarUrl,
                                                is_customer: r.data.is_customer
                                            }
                                        });
                                        var n;
                                        if (n = r.data.is_customer && r.data.is_landlord ? "租户&业主" : r.data.is_customer ? "租户" : r.data.is_landlord ? "业主" : r.data.is_customer && r.data.is_landlord ? "游客" : "非租户", 
                                        e.sensors.registerApp({
                                            cid: wx.getStorageSync("cityStorageName"),
                                            platformType: "wx_xcx",
                                            version: "2.0",
                                            openId: wx.getStorageSync("openId"),
                                            unionId: wx.getStorageSync("unionId"),
                                            user_type: n
                                        }), e.sensors.setProfile({
                                            cid: wx.getStorageSync("cityStorageName"),
                                            openId: wx.getStorageSync("openId"),
                                            unionId: wx.getStorageSync("unionId"),
                                            visitTime: t.formatDateTime(Date.parse(new Date())).toString(),
                                            user_type: n
                                        }), e.sensors.login(o.data.result.userId), e.sensors.setOpenid(wx.getStorageSync("openId")), 
                                        e.sensors.init(), wx.setStorage({
                                            key: "userMobile",
                                            data: o.data.result.mobile
                                        }), wx.setStorage({
                                            key: "userNickname",
                                            data: o.data.result.displayName
                                        }), wx.setStorage({
                                            key: "userAvatar",
                                            data: o.data.result.avatarUrl
                                        }), wx.setStorage({
                                            key: "userId",
                                            data: o.data.result.userId
                                        }), wx.setStorage({
                                            key: "is_customer",
                                            data: r.data.is_customer
                                        }), wx.setStorage({
                                            key: "comePhone",
                                            data: !0
                                        }), 0 != t.data.callback) {
                                            var s = t.data.callback;
                                            /detail\/detail/.test(s) && wx.setStorage({
                                                key: "detailReload",
                                                data: 1
                                            }), /interest\/interest/.test(s) && wx.setStorage({
                                                key: "interestReload",
                                                data: 1
                                            }), wx.reLaunch({
                                                url: "../interest/interest"
                                            });
                                        } else 1 == t.data.active ? wx.reLaunch({
                                            url: "../active/active"
                                        }) : 1 == t.data.active_cb ? wx.navigateBack({
                                            delta: -1
                                        }) : 1 == t.data.qa_active ? wx.reLaunch({
                                            url: "../qa_active/qa_active"
                                        }) : 1 == t.data.recommend ? wx.redirectTo({
                                            url: "../recommend/recommend"
                                        }) : t.data.new_to_detail ? wx.redirectTo({
                                            url: "../detail/detail?back_to_detail=1"
                                        }) : t.data.isClickOnline ? wx.redirectTo({
                                            url: "../detail/detail?isClickOnline=1"
                                        }) : 1 == t.data.bargain ? wx.redirectTo({
                                            url: "../bargain_start/bargain_start?isSelfClick=" + t.data.isSelfClick + "&ownerUserId=" + t.data.ownerUserId
                                        }) : 1 == t.data.recommend_login ? wx.redirectTo({
                                            url: "../coupon/coupon"
                                        }) : t.data.tocoupon ? wx.redirectTo({
                                            url: "../coupon/coupon"
                                        }) : t.data.tooldpullnew ? wx.redirectTo({
                                            url: "../activity/oldpullnew"
                                        }) : wx.reLaunch({
                                            url: "../user/user"
                                        });
                                    } else t.data.errInfo = [], t.data.yzmNum = !1, t.data.errInfo.push(o.data.message), 
                                    t.setData({
                                        errInfo: t.data.errInfo
                                    });
                                    wx.hideLoading();
                                }
                            });
                        }
                    })) : (t.data.errInfo = [], t.data.yzmNum = !1, t.data.errInfo.push(r.data.message), 
                    t.setData({
                        errInfo: t.data.errInfo
                    }));
                }
            })) : (t.data.errInfo = [], t.data.errInfo.push("手机号码格式不正确"), t.setData({
                errInfo: t.data.errInfo
            }));
        },
        toSecrecy: function() {
            this.setData({
                userPrivacy: !0,
                privacy_url: "https://www.danke.com/zhuanti/user-clause"
            });
        },
        toProtect: function() {
            this.setData({
                userPrivacy: !0,
                privacy_url: "https://www.danke.com/zhuanti/user-privacy"
            });
        },
        onShareAppMessage: function() {
            return {
                title: "租的省心,住得舒心",
                imageUrl: "../../images/share_img.png",
                path: "pages/index/index"
            };
        },
        closeEvent: function() {
            this.triggerEvent("closeEvent");
        }
    }
});