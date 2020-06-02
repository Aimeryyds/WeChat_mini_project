var e = require("../../../utils/share.js"), n = require("../../../utils/channel.js"), a = require("../../../utils/mBuriedPoint.js"), t = getApp(), o = require("../../../utils/util.js"), i = (require("../../../utils/aes.js"), 
require("../../../utils/mpSDK.js"));

Page({
    data: {},
    comeback: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    wxpay: function() {
        i.onEvent("InsuranceMall_InsDetail_insure_n", "InsuranceMall_InsDetail_insure_n"), 
        (0, a.mBuriedPoint)("WX_Ins_Product_pay", "A100000013_平安e生保2020", "否，付款", "click", "P156/health/health", "P156/index/index");
        var o = new Object();
        o.orderId = this.data.orderId || wx.getStorageSync("orderId"), o.accessToken = wx.getStorageSync("accessToken");
        var r = (0, e.getFromParams)(), s = r.from_openId, c = r.from_unionId;
        o.from_openId = s, o.from_unionId = c, o.c = (0, n.getFromChannel)();
        var l = JSON.stringify(o) + "";
        console.log(l), wx.request({
            url: t.globalData.baseUrl + "/miniapp/wxpay?c=" + t.globalData.fromChannel,
            data: l,
            method: "POST",
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                if ("00" == e.data.status) {
                    var n = e.data.data;
                    wx.requestPayment({
                        timeStamp: n.timeStamp,
                        nonceStr: n.noncestr,
                        package: n.packaging,
                        signType: n.signType,
                        paySign: n.paySign,
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
                    success: function(n) {
                        n.confirm ? "04" == e.data.status && wx.navigateTo({
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
        var e = t.globalData.wm1Url + "/mgr/makePdf.do?filename=A100000013-22.pdf";
        o.getStaticPage(e);
    },
    onLoad: function(e) {
        console.log(e), this.setData({
            orderId: e.orderId
        });
    },
    onReady: function() {},
    onShow: function() {
        i.onShow();
    },
    onHide: function() {
        i.onHide();
    },
    onUnload: function() {}
});