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
    login_btn: function(t) {
        var n = this, s = a.getSecret();
        "" != n.data.username ? /^(13[0-9]|14[5|7]|15[0-9]|17[0|1|3|5|6|7|8]|18[0-9])\d{8}$/.test(n.data.username) ? "" != n.data.password ? (wx.showLoading({
            mask: !0
        }), wx.request({
            url: a.globalData.uchaozuBase + "/api/miniapps/login/login",
            data: {
                mobile: n.data.username,
                validCode: n.data.password,
                currtime: s.currtime,
                sign: s.sign
            },
            success: function(t) {
                wx.hideLoading(), 200 == t.data.code ? (wx.setStorage({
                    key: "userInfo",
                    data: t.data.data
                }), a.globalData.userInfo = t.data.data, wx.getStorage({
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
                }), e(t.data.data.mobile).then(function() {
                    wx.reLaunch({
                        url: "/pages/evaluate/evaluate?phone=" + t.data.data.mobile
                    });
                }, function() {
                    wx.reLaunch({
                        url: "/pages/index/index"
                    });
                })) : wx.showToast({
                    icon: "none",
                    title: t.data.msg,
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
                var n = 60;
                e.setData({
                    msg: "60",
                    class_text: "time_out"
                });
                var s = setInterval(function() {
                    n--, e.setData({
                        msg: n
                    }), 0 == n && (e.setData({
                        msg: "获取验证码",
                        flag: !1,
                        class_text: "time_out_change"
                    }), clearInterval(s));
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

var e = function(e) {
    return new Promise(function(t, n) {
        var s = a.getCrmSecret("/api/ucenter/sales-evaluate/", {
            telephone: e
        });
        wx.request({
            url: a.globalData.crmhaozuBase + "/api/ucenter/sales-evaluate/",
            data: s,
            success: function(a) {
                if (0 !== a.data.errorno) return n("fail"), !1;
                var e = function(a) {
                    for (var e = 0; e < a.length; e++) a[e].checked = !1;
                    return a;
                }, s = a.data.data;
                for (var o in s.evaluat_level) s.evaluat_level[o] = e(s.evaluat_level[o]);
                var i = {
                    adviser_info: s.adviser_info,
                    evaluat_label: s.evaluat_label,
                    evaluat_level: e(s.evaluat_level),
                    verify_token: s.verify_token
                };
                wx.setStorage({
                    key: "quest",
                    data: JSON.stringify(i)
                }), t("success");
            }
        });
    });
};