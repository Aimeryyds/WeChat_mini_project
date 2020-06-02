var e = require("../../58268180480303CF3E40E9872402F6C0.js"), t = getApp();

Page({
    data: {
        loadModal: !1,
        logo: t.globalData.staticUrl + "/ava.png"
    },
    onLoad: function(e) {},
    goRegister: function(e) {
        var t = e.currentTarget.dataset.registertype;
        console.log("registerType:" + t), wx.redirectTo({
            url: "../register/register?registerType=" + t
        });
    },
    insuranceLogin: function() {
        var r = this, o = this.data.phoneNumber, a = this.data.password;
        if (null == o || null == a) return e.AlertMsg("请输入完整信息"), !1;
        this.setData({
            loadModal: !0
        });
        var n = {
            phoneNumber: o,
            password: a,
            openId: wx.getStorageSync("openId")
        };
        console.info(n), e.Requests_json(t.globalData.authenticationUrl + "/authentication/login", n).then(function(t) {
            if ("0" == t.code) if ("0" != t.data.code) {
                var o = r.data.phoneNumber;
                wx.redirectTo({
                    url: "../perfectInfo/perfectInfo?phoneNumber=" + o
                });
            } else {
                console.info("登录成功...");
                var a = t.data.userToken;
                console.info("用户Token：" + a), wx.setStorageSync("userToken", a), wx.setStorageSync("phoneNumber", o), 
                wx.setStorageSync("userType", t.data.userType), r.setData({
                    loadModal: !1
                }), "1" == t.data.userType ? wx.redirectTo({
                    url: "../dealerhome/dealerhome"
                }) : wx.redirectTo({
                    url: "../home/home"
                });
            } else console.info("登录失败..."), "50002" == t.msg.code ? (e.AlertMsg("用户名不存在,请先注册"), 
            setTimeout(function() {
                wx.redirectTo({
                    url: "../register/register?registerType=new"
                });
            }, 2e3)) : e.AlertMsg("用户名或密码错误"), r.setData({
                loadModal: !1
            });
        });
    },
    goHome: function() {
        wx.redirectTo({
            url: "../home/home"
        });
    },
    getInputValue: function(e) {
        var t = e.currentTarget.id, r = e.detail.value, o = this.data;
        o[t] = r, this.setData(o);
    }
});