function e(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../network/api"));

require("../../dist/index");

exports.default = {
    cancelOrder: function(e) {
        var a = this, o = e.currentTarget.dataset.id;
        console.log("that===111", a), wx.showModal({
            title: "提示",
            content: "确定要取消该订单吗？",
            success: function(e) {
                e.confirm && (wx.showLoading({
                    title: "请稍候"
                }), t.default.cancelOrder({
                    id: o
                }).then(function(e) {
                    wx.hideLoading(), console.log("that---111", a), a.showZanToast("订单已取消"), a.onOrderCanceled();
                }).catch(function(e) {
                    console.log(e), wx.hideLoading();
                }));
            }
        });
    },
    confirmOrder: function(e) {
        var a = this, o = e.currentTarget.dataset.id;
        wx.showModal({
            title: "提示",
            content: "确认您已收到商品？",
            success: function(e) {
                e.confirm && (wx.showLoading({
                    title: "请稍候"
                }), o && t.default.confirmOrder({
                    orderId: o
                }).then(function(e) {
                    wx.hideLoading(), 0 == e.status && e.data.result ? (a.showZanToast("已确认收货"), a.onOrderConfirmed()) : a.showZanToast(e.data.msg || "确认收货失败");
                }).catch(function(e) {
                    wx.hideLoading(), console.log(e);
                }));
            }
        });
    },
    payOrder: function(e) {
        var a = this, o = this;
        if (!o.data.isPaying) {
            o.setData({
                isPaying: !0
            });
            var n = e.currentTarget.dataset.id, i = e.currentTarget.dataset.no, r = e.currentTarget.dataset.oto;
            console.log("支付-----iso2o", r), wx.showLoading({
                title: "请稍候"
            }), t.default.checkBeforePay({
                orderId: n
            }).then(function(e) {
                e.data.result && t.default.queryPaySign({
                    orderNo: i
                }).then(function(e) {
                    wx.hideLoading(), 0 == e.status && e.data && e.data.nonceStr && wx.requestPayment({
                        timeStamp: e.data.timeStamp + "",
                        nonceStr: e.data.nonceStr,
                        package: e.data.package,
                        signType: "MD5",
                        paySign: e.data.paySign,
                        success: function(e) {
                            o.onOrderPaid(n, !!r && 1 == r), o.setData({
                                isPaying: !1
                            });
                        },
                        fail: function(e) {
                            o.setData({
                                isPaying: !1
                            });
                        }
                    });
                });
            }).catch(function(e) {
                e.data && e.data.data && e.data.data.length > 0 ? (a.setData({
                    errGoodList: e.data.data
                }), o.showDialog()) : o.showZanTopTips(t.default.errors(e.error) || e.errorMessage || "网络错误"), 
                o.setData({
                    isPaying: !1
                }), wx.hideLoading();
            });
        }
    },
    logisticsDetail: function(e) {
        console.log("logisticsDetail---》"), console.log("e---》", e);
        var t = e.currentTarget.dataset.id;
        console.log("orderId---》", t), wx.navigateTo({
            url: "/pages/orders/showlogistics/showlogistics?id=" + t
        });
    },
    showDialog: function() {
        var e = this.selectComponent(".wxc-dialog");
        e && e.show();
    },
    hideDialog: function() {
        var e = this.selectComponent(".wxc-dialog");
        e && e.hide();
    },
    onConfirm: function() {
        console.log("点击了确认按钮"), this.hideDialog();
    },
    onCancel: function() {
        console.log("点击了取消按钮"), this.hideDialog();
    },
    onchangeValueMsg: function(t) {
        this.data.order.leaveMessage[t.target.id].value = t.detail.value, this.setData(e({}, "order.leaveMessage[" + t.target.id + "].value", t.detail.value));
    }
};