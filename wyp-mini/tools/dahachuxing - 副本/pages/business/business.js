require("../../utils/util.js");

var e = getApp();

Page({
    data: {
        business: "",
        address: "",
        sum: 0,
        available: 0,
        machines: [],
        height: ""
    },
    onLoad: function(t) {
        var a = this;
        console.log("商家id：" + JSON.stringify(t)), wx.request({
            url: "https://www.ynzhfw.com/seller/getById.do",
            data: {
                sessionKey: wx.getStorageSync("third_session"),
                sellerId: t.sellerId
            },
            method: "GET",
            success: function(t) {
                if (console.log("获取单个商家信息：" + JSON.stringify(t)), "request:ok" == t.errMsg) {
                    var s = t.data.data;
                    a.setData({
                        height: e.globalData.res_system.windowHeight + 55,
                        business: s.name,
                        address: s.address,
                        sum: s.canBorrowCnt + s.canReturnCnt,
                        available: s.canBorrowCnt,
                        tel: s.tel,
                        la: s.la,
                        lo: s.lo
                    });
                } else console.log("获取单个商家信息失败：" + t.errMsg);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    navigation: function() {
        var e = this;
        wx.openLocation({
            latitude: e.data.la,
            longitude: e.data.lo,
            scale: 28
        });
    },
    tel: function() {
        wx.makePhoneCall({
            phoneNumber: "13641473342"
        });
    }
});