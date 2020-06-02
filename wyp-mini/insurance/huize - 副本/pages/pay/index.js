Page({
    data: {},
    onLoad: function(e) {
        this.requestPayment(e);
    },
    onReady: function() {},
    requestPayment: function(e) {
        var n = {
            timeStamp: e.timeStamp,
            nonceStr: e.nonceStr,
            package: decodeURIComponent(e.package),
            signType: e.signType,
            paySign: e.paySign,
            success: function(n) {
                wx.navigateTo({
                    url: "/pages/transfer/index?url=" + encodeURIComponent("https://m.huize.com/orders/payment-success?orderNum=" + e.orderNum)
                });
            },
            fail: function(n) {
                var o = n.errMsg.indexOf("cancel") > -1, t = o ? "你已取消支付" : n.errMsg, r = "/pages/transfer/index?url=" + (o ? encodeURIComponent("https://m.huize.com/mysafe/order/detail?orderNum=" + e.orderNum) : encodeURIComponent("https://m.huize.com/orders/payment-fail?orderNum=" + e.orderNum));
                wx.showModal({
                    title: "提示",
                    content: t,
                    confirmText: "我知道了",
                    showCancel: !1,
                    success: function() {
                        wx.navigateTo({
                            url: r
                        });
                    }
                });
            }
        };
        wx.requestPayment(n);
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});