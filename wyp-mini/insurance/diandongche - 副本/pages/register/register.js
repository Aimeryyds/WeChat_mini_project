var t = require("../../58268180480303CF3E40E9872402F6C0.js"), e = getApp();

Page({
    data: {
        count: 60,
        code: "获取验证码",
        phoneValue: "",
        disabled: !1,
        logo: e.globalData.staticUrl + "/ava.png",
        passtext: "",
        phonetext: "",
        registerType: ""
    },
    onLoad: function(e) {
        var a = e.registerType;
        this.setData({
            registerType: a
        }), "new" == a ? (wx.setNavigationBarTitle({
            title: "用户注册"
        }), this.setData({
            phonetext: "请输入手机号",
            passtext: "请设置登录密码"
        })) : "back" == a ? (wx.setNavigationBarTitle({
            title: "修改密码"
        }), this.setData({
            phonetext: "请输入注册时的手机号",
            passtext: "请输入新的密码"
        })) : "renew" == a && (wx.setNavigationBarTitle({
            title: "重置密码"
        }), this.setData({
            phonetext: "请输入注册时的手机号",
            passtext: "请输入新的密码"
        }), t.GetToken());
    },
    goPassword: function() {
        var a = this, o = this.data.verificationCode, i = this.data.phoneNumber, n = this.data.password, s = this.data.registerType, r = wx.getStorageSync("openId");
        if (null == o || null == i || null == n) return t.AlertMsg("请输入完整信息"), !1;
        var l = {
            phoneNumber: i,
            verificationCode: o,
            password: n,
            registerType: s,
            openId: r
        };
        t.Requests_json(e.globalData.authenticationUrl + "/authentication/register", l).then(function(e) {
            "0" == e.code ? (console.info("注册成功..."), "new" == a.data.registerType ? wx.navigateTo({
                url: "../perfectInfo/perfectInfo?phoneNumber=" + i
            }) : (t.AlertMsg("密码修改成功"), setTimeout(function() {
                wx.redirectTo({
                    url: "../login/login"
                });
            }, 1e3))) : t.AlertMsg(e.msg.msg);
        });
    },
    goLogin: function() {
        wx.redirectTo({
            url: "../login/login"
        });
    },
    textcode: function() {
        var t = this;
        return !!/^1[3456789]\d{9}$/.test(t.data.phoneNumber) || (wx.showToast({
            title: "输入手机号有误",
            icon: "none",
            duration: 2e3
        }), !1);
    },
    sendRegistCode: function(t) {
        if (console.log("sendRegistCode"), !this.textcode()) return !1;
        this.getVerificationCode();
        var e, a = this, o = a.data.count;
        a.setData({
            code: o + "秒",
            disabled: !0
        }), e = setInterval(function() {
            a.setData({
                code: o - 1 + " 秒"
            }), --o <= 0 && (clearInterval(e), a.setData({
                code: "重新获取",
                count: 60,
                disabled: !1
            }));
        }, 1e3);
    },
    goHome: function() {
        wx.redirectTo({
            url: "../home/home"
        });
    },
    getVerificationCode: function(a) {
        var o = {
            phoneNumber: this.data.phoneNumber,
            signId: "AP03"
        };
        t.Requests_json(e.globalData.authenticationUrl + "/authentication/verificationCode", o).then(function(t) {
            "0" == t.code && console.info(t);
        });
    },
    getInputValue: function(t) {
        var e = t.currentTarget.id, a = t.detail.value, o = this.data;
        o[e] = a, this.setData(o);
    }
});