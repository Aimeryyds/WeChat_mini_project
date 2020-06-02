var t = require("../../58268180480303CF3E40E9872402F6C0.js"), e = getApp();

Page({
    data: {
        logo: e.globalData.staticUrl + "/ava.png"
    },
    onLoad: function(t) {
        var e = t.phoneNumber;
        this.setData({
            phoneNumber: e
        });
    },
    goPerfectInfo: function() {
        var a = this.data.phoneNumber, o = this.data.password, n = {
            phoneNumber: a,
            password: o
        };
        t.Requests_json(e.globalData.authenticationUrl + "/authentication/editPassword", n).then(function(o) {
            "0" == o.code && (console.info("修改密码成功..."), t.Requests_json(e.globalData.authenticationUrl + "/authentication/login", n).then(function(t) {
                if ("0" == t.code) {
                    console.info("登录成功...");
                    var e = t.data.userToken;
                    console.info("用户Token：" + e), wx.setStorageSync("userToken", e), wx.navigateTo({
                        url: "../perfectInfo/perfectInfo?phoneNumber=" + a
                    });
                }
            }));
        });
    },
    getInputValue: function(t) {
        var e = t.currentTarget.id, a = t.detail.value, o = this.data;
        o[e] = a, this.setData(o);
    }
});