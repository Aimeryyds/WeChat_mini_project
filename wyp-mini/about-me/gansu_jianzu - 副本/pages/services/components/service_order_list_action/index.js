function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../../../network/api")), e = t(require("../../../../behaviors/toast.js"));

Component({
    behaviors: [ e.default ],
    properties: {
        actionList: {
            type: Array,
            value: []
        },
        orderid: {
            type: String,
            value: ""
        },
        showType: {
            type: String,
            value: "list"
        },
        orderType: {
            type: Number,
            value: 0
        },
        orderNo: {
            type: String,
            value: ""
        }
    },
    data: {
        isPaying: !1
    },
    methods: {
        cancelOrder: function(t) {
            var e = this, i = t.currentTarget.dataset.id;
            console.log("that===111", e), wx.showModal({
                title: "提示",
                content: 2 == this.data.orderType ? "您已支付预约金额，确认商家已退还您所支付的金额了吗？" : 3 == this.data.orderType ? "您已支付订金，取消后订金将不予以退还，确定要取消该优质服务吗？" : "确定要取消该优质服务吗？",
                cancelText: "点错了",
                confirmText: "确认",
                success: function(t) {
                    var n = this;
                    t.confirm && (wx.showLoading({
                        title: "请稍候"
                    }), a.default.seviceCancelOrder({
                        id: i
                    }).then(function(t) {
                        wx.hideLoading(), console.log("that---111", e), e.triggerEvent("ordercanceled", {});
                    }).catch(function(t) {
                        wx.hideLoading(), n.showToast(a.default.errors(t.error) || "取消订单失败");
                    }));
                }
            });
        },
        toPayOrder: function(t) {
            var e = this, i = this;
            if (!i.data.isPaying) {
                i.setData({
                    isPaying: !0
                });
                var n = t.currentTarget.dataset.id;
                wx.showLoading({
                    title: "请稍候"
                }), a.default.seviceToPay({
                    orderId: n
                }).then(function(t) {
                    wx.hideLoading(), 0 == t.status && t.data && t.data.nonceStr && wx.requestPayment({
                        timeStamp: t.data.timeStamp + "",
                        nonceStr: t.data.nonceStr,
                        package: t.data.package,
                        signType: "MD5",
                        paySign: t.data.paySign,
                        success: function(t) {
                            i.triggerEvent("orderpaied", {}), i.setData({
                                isPaying: !1
                            });
                        },
                        fail: function(t) {
                            i.setData({
                                isPaying: !1
                            });
                        }
                    });
                }).catch(function(t) {
                    i.setData({
                        isPaying: !1
                    }), wx.hideLoading(), console.log("------that---111----", t), e.showToast(a.default.errors(t.error) || "调起支付失败");
                });
            }
        },
        toTailPayOrder: function(t) {
            var e = this, i = this;
            if (!i.data.isPaying) {
                i.setData({
                    isPaying: !0
                });
                var n = t.currentTarget.dataset.id;
                wx.showLoading({
                    title: "请稍候"
                }), a.default.seviceTailPay({
                    orderId: n
                }).then(function(t) {
                    wx.hideLoading(), 0 == t.status && t.data && t.data.nonceStr && wx.requestPayment({
                        timeStamp: t.data.timeStamp + "",
                        nonceStr: t.data.nonceStr,
                        package: t.data.package,
                        signType: "MD5",
                        paySign: t.data.paySign,
                        success: function(t) {
                            i.triggerEvent("ordertailpaied", {}), i.setData({
                                isPaying: !1
                            });
                        },
                        fail: function(t) {
                            i.setData({
                                isPaying: !1
                            });
                        }
                    });
                }).catch(function(t) {
                    i.setData({
                        isPaying: !1
                    }), wx.hideLoading(), console.log("------that---111----", t), e.showToast(a.default.errors(t.error) || "调起支付失败");
                });
            }
        }
    }
});