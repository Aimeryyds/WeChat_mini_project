var a = getApp();

Page({
    data: {
        msg: "获取验证码",
        flag: !1,
        class_text: "time_out_change",
        show: !0,
        phone: "176****0091",
        phone_err_show: !0,
        username: "",
        password: "",
        resPhone: ""
    },
    phone_input_fn: function(a) {
        this.setData({
            username: a.detail.value
        });
    },
    pass_input_fn: function(a) {
        this.setData({
            password: a.detail.value
        });
    },
    login_btn: function(e) {
        var t = this, s = a.getSecret(), n = t.data.resPhone || t.data.username;
        "" != n ? /^(13[0-9]|14[5|7]|15[0-9]|17[0|1|3|5|6|7|8]|18[0-9])\d{8}$/.test(n) ? "" != t.data.password ? (wx.showLoading({
            mask: !0
        }), wx.request({
            url: a.globalData.uchaozuBase + "/api/miniapps/login/login",
            data: {
                mobile: n,
                validCode: t.data.password,
                currtime: s.currtime,
                sign: s.sign
            },
            success: function(e) {
                wx.hideLoading(), 200 == e.data.code ? (wx.setStorage({
                    key: "userInfo",
                    data: e.data.data
                }), a.globalData.userInfo = e.data.data, wx.getStorage({
                    key: "browse",
                    success: function(e) {
                        wx.request({
                            url: "https://uc.haozu.com/api/miniapps/view/add",
                            data: {
                                uid: a.globalData.userInfo.user_id,
                                currtime: s.currtime,
                                sign: s.sign,
                                data: e.data
                            },
                            success: function(a) {
                                wx.removeStorage({
                                    key: "browse",
                                    success: function(a) {}
                                }), wx.removeStorage({
                                    key: "building",
                                    success: function(a) {}
                                }), wx.removeStorage({
                                    key: "space",
                                    success: function(a) {}
                                });
                            }
                        });
                    }
                }), wx.reLaunch({
                    url: "/pages/my/index?phone=" + e.data.data.mobile
                })) : wx.showToast({
                    icon: "none",
                    title: e.data.msg,
                    mask: !0
                });
            },
            fail: function(a) {
                wx.showModal({
                    content: "登录失败，请重新登录",
                    success: function(a) {
                        a.confirm ? wx.navigateTo({
                            url: "/pages/login/index"
                        }) : a.cancel;
                    }
                });
            }
        })) : wx.showToast({
            icon: "none",
            title: "验证码不能为空！",
            mask: !0
        }) : wx.showToast({
            icon: "none",
            title: "手机号码格式错误！",
            mask: !0
        }) : wx.showToast({
            icon: "none",
            title: "手机号码不能为空！",
            mask: !0
        });
    },
    wxAccount: function() {
        wx.navigateTo({
            url: "/pages/getinfo/index"
        });
    },
    setTimeFn: function() {
        var e = this, t = a.getSecret(), s = e.data.resPhone || e.data.username;
        if ("" != s) if (/^(13[0-9]|14[5|7]|15[0-9]|17[0|1|3|5|6|7|8]|18[0-9])\d{8}$/.test(e.data.resPhone || e.data.username)) {
            if (!this.data.flag) {
                wx.request({
                    url: a.globalData.uchaozuBase + "/api/valid/send?mobile=" + s,
                    data: {
                        currtime: t.currtime,
                        sign: t.sign
                    },
                    success: function(a) {},
                    fail: function(a) {}
                }), this.setData({
                    flag: !0
                });
                var n = 60;
                e.setData({
                    msg: "60",
                    class_text: "time_out"
                });
                var o = setInterval(function() {
                    n--, e.setData({
                        msg: n
                    }), 0 == n && (e.setData({
                        msg: "获取验证码",
                        flag: !1,
                        class_text: "time_out_change"
                    }), clearInterval(o));
                }, 1e3);
            }
        } else wx.showToast({
            icon: "none",
            title: "手机号码格式错误！",
            mask: !0
        }); else wx.showToast({
            icon: "none",
            title: "手机号码不能为空！",
            mask: !0
        });
    },
    onLoad: function(e) {
        var t = this, s = this;
        e.phone && s.setData({
            username: e.phone
        }), a.globalDataLoad(s, "tel-phone"), a.globalData.userInfo ? this.setData({
            userInfo: a.globalData.userInfo,
            resPhone: a.globalData.userInfo.mobile,
            hasUserInfo: !0
        }) : this.data.canIUse ? a.userInfoReadyCallback = function(e) {
            t.setData({
                userInfo: e.userInfo,
                resPhone: a.globalData.userInfo.mobile,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(e) {
                a.globalData.userInfo = e.userInfo, t.setData({
                    userInfo: e.userInfo,
                    resPhone: a.globalData.userInfo.mobile,
                    hasUserInfo: !0
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});