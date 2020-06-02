var a = getApp();

Page({
    data: {
        msg: "获取验证码",
        flag: !1,
        class_text: "time_out_change",
        username: "",
        password: ""
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
        var t = this, s = a.getSecret();
        "" != t.data.username ? /^(13[0-9]|14[5|7]|15[0-9]|17[0|1|3|5|6|7|8]|18[0-9])\d{8}$/.test(t.data.username) ? "" != t.data.password ? wx.getStorage({
            key: "code",
            success: function(e) {
                wx.showLoading({
                    mask: !0
                }), wx.request({
                    url: a.globalData.uchaozuBase + "/api/miniapps/login/bind",
                    data: {
                        mobile: t.data.username,
                        validCode: t.data.password,
                        currtime: s.currtime,
                        sign: s.sign,
                        code: e.data
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
                            title: e.data.msg + " !",
                            mask: !0
                        });
                    },
                    fail: function(a) {
                        wx.showModal({
                            content: "绑定失败，请重新绑定",
                            success: function(a) {
                                a.confirm ? wx.navigateTo({
                                    url: "/pages/bind/index"
                                }) : a.cancel;
                            }
                        });
                    }
                });
            }
        }) : wx.showToast({
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
    setTimeFn: function() {
        var e = this, t = a.getSecret();
        if ("" != e.data.username) if (/^(13[0-9]|14[5|7]|15[0-9]|17[0|1|3|5|6|7|8]|18[0-9])\d{8}$/.test(e.data.username)) {
            if (!this.data.flag) {
                wx.request({
                    url: a.globalData.uchaozuBase + "/api/valid/send?mobile=" + e.data.username,
                    data: {
                        currtime: t.currtime,
                        sign: t.sign
                    },
                    success: function(a) {},
                    fail: function(a) {}
                }), this.setData({
                    flag: !0
                });
                var s = 60;
                e.setData({
                    msg: "60",
                    class_text: "time_out"
                });
                var n = setInterval(function() {
                    s--, e.setData({
                        msg: s
                    }), 0 == s && (e.setData({
                        msg: "获取验证码",
                        flag: !1,
                        class_text: "time_out_change"
                    }), clearInterval(n));
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
    onLoad: function(a) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});