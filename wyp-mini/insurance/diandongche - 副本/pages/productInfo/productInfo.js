var a = require("../../58268180480303CF3E40E9872402F6C0.js"), e = getApp();

Page({
    data: {
        imgcase: e.globalData.staticUrl + "/timg8.png"
    },
    onLoad: function() {},
    goCardVaildate: function() {
        var e = wx.getStorageSync("userToken");
        null == e || "" == e ? a.GetUserToken() : wx.showModal({
            title: "投保须知",
            content: "投保的电动自行车必须有南京牌照及行驶证。被保险人必须是车主本人。否则自行承担责任。",
            showCancel: !0,
            cancelText: "拒绝",
            cancelColor: "black",
            confirmText: "同意",
            confirmColor: "#0081ff",
            success: function(a) {
                a.cancel || a.confirm && wx.navigateTo({
                    url: "/pages/cardvaildate/cardvaildate"
                });
            }
        });
    }
});