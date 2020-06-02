var e = require("../../58268180480303CF3E40E9872402F6C0.js");

getApp();

Page({
    data: {
        TabCur: 0,
        scrollLeft: 0
    },
    tabSelect: function(e) {
        this.setData({
            TabCur: e.currentTarget.dataset.id,
            scrollLeft: 60 * (e.currentTarget.dataset.id - 1)
        });
    },
    onLoad: function() {
        var o = wx.getStorageSync("token");
        null != o && "" != o && e.GetToken();
    },
    goPerfectInfo: function() {
        var o = wx.getStorageSync("userToken");
        if (null == o || "" == o) e.GetUserToken(); else {
            var t = wx.getStorageSync("phoneNumber");
            console.log(t), wx.navigateTo({
                url: "../perfectInfo/perfectInfo?phoneNumber=" + t
            });
        }
    },
    goOrder: function() {
        var o = wx.getStorageSync("userToken");
        null == o || "" == o ? e.GetUserToken() : wx.navigateTo({
            url: "../order/order"
        });
    },
    goProposal: function(o) {
        var t = wx.getStorageSync("userToken");
        null == t || "" == t ? e.GetUserToken() : wx.navigateTo({
            url: "../proposalList/proposalList"
        });
    },
    goLogout: function() {
        console.log("goLogout"), wx.showModal({
            title: "系统提示",
            content: "是否确认退出？",
            success: function(e) {
                e.confirm ? (wx.setStorageSync("userToken", ""), wx.redirectTo({
                    url: "../login/login"
                }), console.log("用户点击确定")) : e.cancel && console.log("用户点击取消");
            }
        });
    }
});