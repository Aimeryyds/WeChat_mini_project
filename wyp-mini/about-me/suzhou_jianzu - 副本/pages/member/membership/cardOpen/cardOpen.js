require("../../../../utils/server"), wx.getStorageSync("utoken");

var a = "";

Page({
    data: {
        getCardList: [],
        name: "",
        recharge: "",
        money: "",
        id: ""
    },
    onLoad: function(e) {
        (a = this).setData({
            money: e.money,
            id: e.id
        });
    },
    realnameCont: function(a) {
        this.setData({
            realname: a.detail.value
        });
    },
    mobileCont: function(a) {
        this.setData({
            mobile: a.detail.value
        });
    },
    formSubmit: function(e) {
        if (console.log(e), a.data.realname) if (/^1(3|4|5|7|8)\d{9}$/.test(a.data.mobile)) {
            var t = a.data.realname, o = a.data.mobile;
            wx.navigateTo({
                url: "../cardInfo/cardInfo?money=" + a.data.money + "&cardid=" + a.data.id + "&realname=" + t + "&mobile=" + o
            });
        } else wx.showModal({
            title: "消息",
            content: "手机号格式不正确",
            showCancel: !1,
            confirmColor: "#ff6a6a"
        }); else wx.showModal({
            title: "消息",
            content: "姓名不能为空",
            showCancel: !1,
            confirmColor: "#ff6a6a"
        });
    }
});