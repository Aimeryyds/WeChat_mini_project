var e = require("../../../utils/share.js"), a = require("../../../utils/channel.js"), n = require("../../../utils/mBuriedPoint.js"), t = getApp(), o = require("../../../utils/util.js");

require("../../../utils/aes.js");

Page({
    data: {},
    comeback: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    wxpay: function() {
        (0, n.mBuriedPoint)("WX_Ins_Product_pay", "A100000023_i康保.老年医疗(三高版)", "否，付款", "click", "P160/health/health", "P160/index/index");
        var o = new Object();
        o.orderId = this.data.orderId || wx.getStorageSync("orderId"), o.accessToken = wx.getStorageSync("accessToken");
        var i = (0, e.getFromParams)(), r = i.from_openId, c = i.from_unionId;
        o.from_openId = r, o.from_unionId = c, o.c = (0, a.getFromChannel)();
        var s = JSON.stringify(o) + "";
        console.log(s), wx.request({
            url: t.globalData.baseUrl + "/miniapp/wxpay?c=" + t.globalData.fromChannel,
            data: s,
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
                                url: "../../payResult/index?orderId=" + o.orderId
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
        var e = t.globalData.baseUrl + "/mgr/makePdf.do?filename=A100000023-22.pdf";
        o.getStaticPage(e);
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