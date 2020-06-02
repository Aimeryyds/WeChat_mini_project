var e = require("../../../utils/share.js"), a = require("../../../utils/channel.js"), n = getApp(), t = require("../../../utils/util.js");

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
        var o = (0, e.getFromParams)(), i = o.from_openId, c = o.from_unionId;
        t.from_openId = i, t.from_unionId = c, t.c = (0, a.getFromChannel)();
        var r = JSON.stringify(t) + "";
        console.log(r), wx.request({
            url: n.globalData.baseUrl + "/miniapp/wxpay?c=" + n.globalData.fromChannel,
            data: r,
            method: "POST",
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if ("00" == e.data.status) {
                    var a = e.data.data;
                    wx.requestPayment({
                        timeStamp: a.timeStamp,
                        nonceStr: a.noncestr,
                        package: a.packaging,
                        signType: a.signType,
                        paySign: a.paySign,
                        success: function(e) {
                            wx.navigateTo({
                                url: "../../payResult/index?orderId=" + t.orderId
                            });
                        },
                        fail: function() {},
                        complete: function() {}
                    });
                } else wx.showModal({
                    title: "提示",
                    content: e.data.message,
                    success: function(a) {
                        a.confirm ? "04" == e.data.status && wx.navigateTo({
                            url: "../../login/login"
                        }) : e.cancel && console.log("用户点击取消");
                    }
                });
            },
            fail: function() {},
            complete: function() {}
        });
    },
    occupation: function() {
        var e = n.globalData.wm1Url + "/mgr/makePdf.do?filename=A000000053-6.pdf";
        t.getStaticPage(e);
    },
    onLoad: function(e) {
        console.log(e), this.setData({
            orderId: e.orderId
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {}
});