var a = require("../../../utils/share.js"), e = require("../../../utils/channel.js"), n = getApp(), t = require("../../../utils/util.js");

require("../../../utils/aes.js");

Page({
    data: {},
    comeback: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    wxpay: function() {
        var t = new Object();
        t.orderId = this.data.orderId || wx.getStorageSync("orderId"), t.accessToken = wx.getStorageSync("accessToken");
        var o = (0, a.getFromParams)(), i = o.from_openId, r = o.from_unionId;
        t.from_openId = i, t.from_unionId = r, t.c = (0, e.getFromChannel)();
        var c = JSON.stringify(t) + "";
        console.log(c), wx.request({
            url: n.globalData.baseUrl + "/miniapp/wxpay?c=" + n.globalData.fromChannel,
            data: c,
            method: "POST",
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                if ("00" == a.data.status) {
                    var e = a.data.data;
                    wx.requestPayment({
                        timeStamp: e.timeStamp,
                        nonceStr: e.noncestr,
                        package: e.packaging,
                        signType: e.signType,
                        paySign: e.paySign,
                        success: function(a) {
                            wx.navigateTo({
                                url: "../../payResult/index?orderId=" + t.orderId
                            });
                        },
                        fail: function() {},
                        complete: function() {}
                    });
                } else wx.showModal({
                    title: "提示",
                    content: a.data.message,
                    success: function(e) {
                        e.confirm ? "04" == a.data.status && wx.navigateTo({
                            url: "../../login/login"
                        }) : a.cancel && console.log("用户点击取消");
                    }
                });
            },
            fail: function() {},
            complete: function() {}
        });
    },
    occupation: function() {
        var a = n.globalData.baseUrl + "/mgr/makePdf.do?filename=A000000082-6.pdf";
        t.getStaticPage(a);
    },
    onLoad: function(a) {
        this.setData({
            orderId: a.orderId
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});