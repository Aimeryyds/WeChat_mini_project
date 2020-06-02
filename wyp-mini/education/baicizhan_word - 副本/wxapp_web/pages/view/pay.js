var _base = require("../../../we7/resource/js/base64"), _webview = require("../../../we7/resource/js/webview"), app = getApp();

Page({
    data: {},
    onLoad: function(a) {
        var t = this;
        app.util.request({
            url: "entry/wxapp/pay",
            data: {
                orderid: a.orderid,
                pay_type: "wechat",
                order_type: a.type || "goods"
            },
            cachetime: "0",
            success: function(e) {
                e.data && e.data.data && !e.data.errno && wx.requestPayment({
                    timeStamp: e.data.data.timeStamp,
                    nonceStr: e.data.data.nonceStr,
                    package: e.data.data.package,
                    signType: "MD5",
                    paySign: e.data.data.paySign,
                    success: function(e) {
                        app.util.request({
                            url: "entry/wxapp/payResult",
                            data: {
                                orderid: t.data.orderInfo.tid,
                                pay_type: "wechat",
                                order_type: t.data.type || "goods"
                            },
                            cachetime: "0",
                            success: function(e) {
                                e.data.errno ? wx.showModal({
                                    title: "系统提示",
                                    content: e.data.message ? e.data.message : "错误",
                                    success: function(e) {
                                        console.log(e), e.confirm && (0, _webview.backApp)();
                                    }
                                }) : wx.showToast({
                                    title: "支付成功",
                                    success: function() {
                                        (0, _webview.backApp)(a.back);
                                    }
                                });
                            }
                        });
                    },
                    fail: function(e) {
                        (0, _webview.backApp)();
                    }
                });
            },
            fail: function(e) {
                wx.showModal({
                    title: "系统提示",
                    content: e.data.message ? e.data.message : "错误",
                    showCancel: !1,
                    success: function(e) {
                        e.confirm && (0, _webview.backApp)();
                    }
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});