var e = require("../../../../utils/server"), t = wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        isrefund: 5
    },
    onLoad: function(t) {
        a = wx.getStorageSync("utoken");
        var r = this, a = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=wxapp.groups.orders.detail",
            showToast: !1,
            data: {
                utoken: a,
                orderid: t.orderid,
                teamid: t.teamid
            },
            method: "GET",
            success: function(e) {
                var t = e.data.result, a = parseFloat(t.order.price) + parseFloat(t.order.freight);
                r.setData({
                    loading: !1,
                    result: t,
                    price: a
                });
                var n = new Date(1e3 * parseFloat(e.data.result.order.createtime)), o = n.getFullYear() + "-" + (n.getMonth() + 1 > 10 ? n.getMonth() + 1 : "0" + (n.getMonth() + 1)) + "-" + (n.getDate() > 10 ? n.getDate() : "0" + n.getDate()) + " " + (n.getHours() > 10 ? n.getHours() : "0" + n.getHours()) + ":" + (n.getMinutes() > 10 ? n.getMinutes() : "0" + n.getMinutes()) + ":" + (n.getSeconds() > 10 ? n.getSeconds() : "0" + n.getSeconds());
                r.setData({
                    times: o
                });
            }
        });
    },
    pay: function(e) {
        var t = e.currentTarget.dataset.index;
        wx.navigateTo({
            url: "../orderpay/payment?order_id=" + t
        });
    },
    cancel: function(t) {
        var r = t.currentTarget.dataset.index;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定取消订单吗？",
            success: function(t) {
                if (t.confirm) {
                    var a = wx.getStorageSync("utoken");
                    e.sendRequest({
                        url: "?r=wxapp.order.op.cancel",
                        data: {
                            utoken: a,
                            id: r
                        },
                        method: "GET",
                        success: function(e) {
                            wx.showToast({
                                title: e.data.msg,
                                icon: "success",
                                duration: 2e3
                            }), wx.navigateTo({
                                url: "../list/list"
                            });
                        }
                    });
                }
            }
        });
    },
    evaluation: function(e) {
        var t = e.currentTarget.dataset.index;
        wx.navigateTo({
            url: "../pinjia/index?order_id=" + t
        });
    },
    logistics: function(e) {
        var t = e.currentTarget.dataset.index;
        wx.navigateTo({
            url: "../logistics/index?order_id=" + t
        });
    },
    viewprogress: function() {
        var e = this;
        wx.redirectTo({
            url: "/pages/order/refund/refundDetails/refundDetails?id=" + e.data.order_id + "&currIndex=" + e.data.currIndex
        });
    },
    withdraw: function() {
        var r = this;
        t = wx.getStorageSync("utoken"), wx.showModal({
            title: "提示",
            content: "您确定要取消申请么",
            success: function(a) {
                a.confirm ? e.sendRequest({
                    url: "?r=order.refund.cancel&utoken=" + t + "&id=" + r.data.order_id,
                    method: "GET",
                    success: function(e) {
                        wx.redirectTo({
                            url: "/pages/order/details/index?order_id=" + r.data.order_id + "&currIndex=" + r.data.currIndex
                        });
                    }
                }) : a.cancel;
            }
        });
    },
    applyRefund: function() {
        var e = this;
        wx.redirectTo({
            url: "../refund/refund?maxAmount=" + e.data.result.price + "&order_id=" + e.data.order_id + "&currIndex=" + e.data.currIndex
        });
    },
    complaint: function() {
        wx.redirectTo({
            url: "../complaint/complaint"
        });
    }
});