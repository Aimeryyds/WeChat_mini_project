var t = require("../../utils/util.js"), a = getApp();

Page({
    data: {
        src: "" + a.globalData.imagesUrl + a.globalData.accountId + "/login/bg.png",
        mode: "scaleToFill",
        authCodeBtn: "获取验证码",
        phone: "",
        timer: null,
        disabled: !0,
        display: !1,
        mainColor: "",
        textColor: "",
        isWXLogin: !0,
        loginCount: 0,
        confirmText: 3,
        showRetry: !1,
        hideDialogBackground: !0,
        secretDetail: null
    },
    onLoad: function(t) {
        this.unknowUrl = null, this.setData({
            mainColor: a.globalData.mainColor,
            textColor: a.globalData.textColor
        }), t.unknowUrl && (this.unknowUrl = t.unknowUrl);
    },
    denyLogin: function() {
        wx.navigateBack();
    },
    changeLoginType: function() {
        this.setData({
            isWXLogin: !this.data.isWXLogin,
            phone: "",
            disabled: !0
        });
    },
    getPhoneNumber: function(t) {
        t.detail.errMsg.indexOf("ok") > -1 ? this.wxLogin(t.detail) : wx.navigateBack();
    },
    cancelTip: function() {
        var t = this;
        this.setData({
            showRetry: !1
        }), setTimeout(function() {
            t.setData({
                hideDialogBackground: !1,
                confirmText: 3
            });
        }, 300);
    },
    retry: function() {
        "重试" == this.data.confirmText && (this.wxLogin(this.data.secretDetail), this.cancelTip());
    },
    toAgreement: function() {
        wx.navigateTo({
            url: "../agreement/agreement"
        });
    },
    dialogCount: function() {
        var t = this, a = this.data.confirmText;
        a = Number(a), isNaN(a) || (a > 0 ? setTimeout(function() {
            t.setData({
                confirmText: --a
            }), t.dialogCount();
        }, 1024) : this.setData({
            confirmText: "重试"
        }));
    },
    wxLogin: function(t) {
        var o = this;
        wx.showToast({
            title: "登录中",
            icon: "loading",
            mask: !0,
            duration: 1e6
        }), wx.login({
            success: function(e) {
                var n = a.globalData.baseUrl + "user/wxLogin.do", i = {
                    accountId: a.globalData.accountId,
                    code: e.code,
                    encryptedData: t.encryptedData,
                    iv: t.iv
                };
                wx.request({
                    url: n,
                    data: i,
                    method: "POST",
                    header: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    success: function(t) {
                        (t = t.data).ret ? (a.getAdAccountId(), console.log(t.data), wx.setStorageSync("token", t.data.token), 
                        a.globalData.userInfo = t.data, wx.hideToast(), o.unknowUrl ? wx.redirectTo({
                            url: o.unknowUrl
                        }) : t.data.nameAuth || 1 != a.globalData.pushNameAuth ? ("scan" == a.globalData.autoAction && (a.globalData.autoAction = "auto"), 
                        wx.navigateBack({
                            delta: 2
                        })) : wx.redirectTo({
                            url: "../authentication/authentication"
                        })) : "-1005" == t.code ? (wx.hideToast(), wx.showModal({
                            title: "温馨提示",
                            content: "小程序授权登录失败，请稍候重试！",
                            showCancel: !1,
                            success: function(t) {
                                t.confirm;
                            }
                        })) : (wx.hideToast(), console.log(t), wx.showToast({
                            title: t.msg,
                            icon: "none"
                        }));
                    }
                });
            }
        });
    },
    inputPhone: function(t) {
        this.setData({
            phone: t.detail.value
        });
    },
    inputAuth: function(t) {
        4 == t.detail.value.length && 11 == this.data.phone.length ? this.setData({
            disabled: !1
        }) : this.setData({
            disabled: !0
        });
    },
    formSubmit: function(o) {
        var e = this, n = o.detail.value.authCode, i = this;
        if (console.log(i.data.phone), 4 == n.length) {
            wx.showToast({
                title: "登录中",
                icon: "loading",
                mask: !0
            });
            var l = a.globalData.baseUrl + "user/login.do", s = {
                accountId: a.globalData.accountId,
                phone: i.data.phone,
                authCode: n
            };
            t.request(l, s, function(t) {
                1 == t.ret && (a.getAdAccountId(), wx.hideToast(), console.log("登录token!" + t.data.token), 
                wx.setStorageSync("token", t.data.token), a.globalData.userInfo = t.data, e.unknowUrl ? wx.redirectTo({
                    url: e.unknowUrl
                }) : t.data.nameAuth || 1 != a.globalData.pushNameAuth ? ("scan" == a.globalData.autoAction && (a.globalData.autoAction = "auto"), 
                wx.navigateBack({
                    delta: 2
                })) : wx.redirectTo({
                    url: "../authentication/authentication"
                }));
            });
        } else t.showModal("请输入正确的四位验证码!");
    },
    getAuth: function() {
        var o = this;
        if (!o.data.timer) {
            if (11 != o.data.phone.length) return void t.showModal("请输入正确的手机号码!");
            var e = a.globalData.baseUrl + "sms/sendAuthCode.do", n = {
                accountId: a.globalData.accountId,
                phone: o.data.phone
            };
            t.request(e, n, function(t) {
                1 == t.ret && console.log("发送成功!");
            });
            var i = 60;
            o.setData({
                authCodeBtn: i + "S重新发送",
                color: "#e5e5e5"
            }), o.data.timer ? clearInterval(o.data.timer) : o.data.timer = setInterval(function() {
                1 == i ? (clearInterval(o.data.timer), o.setData({
                    authCodeBtn: "获取验证码",
                    timer: null
                })) : (i--, o.setData({
                    authCodeBtn: i + "S重新发送"
                }));
            }, 1e3);
        }
    },
    onShareAppMessage: function() {
        return {
            title: "",
            path: "/pages/map/map",
            success: function(t) {},
            fail: function(t) {}
        };
    }
});