var e = require("../../58268180480303CF3E40E9872402F6C0.js"), t = getApp();

Page({
    data: {
        userName: "",
        cardId: ""
    },
    onLoad: function(e) {
        var t = e.phoneNumber;
        this.setData({
            phoneNumber: t
        });
    },
    getInputValue: function(e) {
        var t = e.currentTarget.id, a = e.detail.value, r = this.data;
        r[t] = a, this.setData(r);
    },
    perfectInfo: function(a) {
        var r = this.data.phoneNumber, n = this.data.userName, u = this.data.cardId;
        if (!/^[\u4E00-\u9FA5]{2,10}$/.test(n)) return e.AlertMsg("请输入中文姓名"), !1;
        if (u.length < 1) return e.AlertMsg("身份证号不能为空"), !1;
        if (!e.CheckBirthday(u)) return e.AlertMsg("身份证号格式有误"), !1;
        var i = {
            phoneNumber: r,
            userName: n,
            cardId: u
        };
        e.Requests_json(t.globalData.authenticationUrl + "/authentication/perfectingInfo", i).then(function(e) {
            if ("0" == e.code) {
                console.info("完善信息成功...");
                var t = e.data.userToken;
                wx.setStorageSync("isCert", "0"), wx.setStorageSync("userToken", t), wx.redirectTo({
                    url: "../home/home"
                });
            }
        });
    }
});