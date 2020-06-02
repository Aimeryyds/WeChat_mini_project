var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../network/api.js"));

Page({
    data: {
        orderstatus: {
            0: "全部",
            10: "待付款",
            20: "已关闭",
            30: "待核销",
            70: "已完成"
        },
        orderstatusinfo: {
            10: "超过30分钟未支付订单将自动取消",
            30: "支付成功请您准时到店用餐",
            70: "用餐已完成"
        },
        orderstatus1: {
            0: "全部",
            10: "待付款",
            20: "已关闭",
            30: "已付款",
            70: "已完成"
        },
        orderstatusinfo1: {
            10: "超过30分钟未支付订单将自动取消",
            30: "支付成功，马上将餐食送达您的面前",
            70: "用餐已完成"
        },
        isPaying: !1,
        isShow: !1
    },
    onLoad: function(t) {
        var a = t.id;
        this.setData({
            id: a
        }), wx.showLoading({
            title: "请稍后"
        });
    },
    onReady: function() {},
    onShow: function() {
        this.queryOrder();
    },
    queryOrder: function(a, e, n) {
        var o = this;
        e && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        })), t.default.cyOrderDetail({
            id: this.data.id
        }).then(function(t) {
            wx.hideLoading(), o.setData({
                detail: t.data,
                loading: !1,
                isShow: !0
            });
        });
    },
    makePhone: function(t) {
        console.log(t);
        var a = t.target.dataset.phone;
        console.log(a), a && wx.makePhoneCall({
            phoneNumber: a
        });
    },
    cancelOrder: function(a) {
        var e = this;
        console.log(a);
        var n = a.target.dataset.id;
        wx.showModal({
            title: "提示",
            content: "确定要取消支付吗？",
            cancelText: "取消",
            confirmText: "确认",
            success: function(a) {
                var o = this;
                a.confirm && (wx.showLoading({
                    title: "请稍候"
                }), t.default.cyOrderCancel({
                    id: n
                }).then(function(t) {
                    wx.hideLoading(), e.queryOrder();
                }).catch(function(a) {
                    wx.hideLoading(), o.showToast(t.default.errors(a.error) || "取消订单失败");
                }));
            }
        });
    },
    toPayOrder: function(a) {
        var e = this, n = this;
        if (!n.data.isPaying) {
            n.setData({
                isPaying: !0
            });
            var o = a.target.dataset.id;
            wx.showLoading({
                title: "请稍候"
            }), console.log(o, "orderIdorderId"), t.default.cyOrderPay({
                orderNo: o
            }).then(function(t) {
                wx.hideLoading(), 0 == t.status && t.data && t.data.nonceStr && wx.requestPayment({
                    timeStamp: t.data.timeStamp + "",
                    nonceStr: t.data.nonceStr,
                    package: t.data.package,
                    signType: "MD5",
                    paySign: t.data.paySign,
                    success: function(t) {
                        n.setData({
                            isPaying: !1
                        }), n.queryOrder();
                    },
                    fail: function(t) {
                        n.setData({
                            isPaying: !1
                        });
                    }
                });
            }).catch(function(a) {
                n.setData({
                    isPaying: !1
                }), wx.hideLoading(), console.log("------that---111----", a), e.showToast(t.default.errors(a.error) || "调起支付失败");
            });
        }
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});