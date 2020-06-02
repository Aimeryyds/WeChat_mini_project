var e, t, r = require("../../../utils/server"), a = wx.getStorageSync("utoken");

Page({
    data: {
        isrefund: 5,
        width: 2 * Math.ceil(wx.getSystemInfoSync().windowWidth),
        customerserver: "",
        show: 1
    },
    onLoad: function(n, s) {
        var d = this;
        if (a = wx.getStorageSync("utoken"), t = "", e = "", wx.getStorageSync("customerserver") && d.setData({
            customerserver: wx.getStorageSync("customerserver")
        }), n.order_id && (e = n.order_id, d.setData({
            order_id: e
        })), n.currIndex && (t = n.currIndex, d.setData({
            currIndex: t
        })), n.myIndex && d.setData({
            myIndex: n.myIndex
        }), void 0 !== n.scene) {
            for (var o = {}, u = decodeURIComponent(n.scene).split("&"), i = 0; i < u.length; i++) {
                var c = u[i].split("=");
                o[c[0]] = c[1];
            }
            e = o.oid, d.setData({
                hexiao: 1
            }), a = wx.getStorageSync("utoken"), r.sendRequest({
                url: "?r=wxapp.order.detail",
                data: {
                    id: e,
                    type: "verify"
                },
                method: "GET",
                success: function(e) {
                    var t = e.data.result;
                    d.setData({
                        result: t,
                        refundstate: t.refundstate,
                        status: t.status
                    }), t.refund && d.setData({
                        refundMsg: t.refund.msg,
                        refundReply: t.refund.reply
                    });
                    var r = new Date(1e3 * parseFloat(e.data.result.createtime)), a = r.getFullYear() + "-" + (r.getMonth() + 1 > 10 ? r.getMonth() + 1 : "0" + (r.getMonth() + 1)) + "-" + (r.getDate() > 10 ? r.getDate() : "0" + r.getDate()) + " " + (r.getHours() > 10 ? r.getHours() : "0" + r.getHours()) + ":" + (r.getMinutes() > 10 ? r.getMinutes() : "0" + r.getMinutes()) + ":" + (r.getSeconds() > 10 ? r.getSeconds() : "0" + r.getSeconds());
                    d.setData({
                        times: a
                    });
                }
            });
        } else r.sendRequest({
            url: "?r=wxapp.order.detail",
            data: {
                utoken: a,
                id: e
            },
            method: "GET",
            success: function(t) {
                var n = t.data.result;
                d.setData({
                    result: n,
                    refundstate: n.refundstate,
                    status: n.status
                }), n.refund && d.setData({
                    refundMsg: n.refund.msg,
                    refundReply: n.refund.reply
                });
                var s = new Date(1e3 * parseFloat(t.data.result.createtime)), o = s.getFullYear() + "-" + (s.getMonth() + 1 > 10 ? s.getMonth() + 1 : "0" + (s.getMonth() + 1)) + "-" + (s.getDate() > 10 ? s.getDate() : "0" + s.getDate()) + " " + (s.getHours() > 10 ? s.getHours() : "0" + s.getHours()) + ":" + (s.getMinutes() > 10 ? s.getMinutes() : "0" + s.getMinutes()) + ":" + (s.getSeconds() > 10 ? s.getSeconds() : "0" + s.getSeconds());
                d.setData({
                    times: o
                }), "1" == n.isverify && r.sendRequest({
                    url: "?r=wxapp.order.op.getQrcode",
                    data: {
                        utoken: a,
                        orderid: e
                    },
                    method: "GET",
                    success: function(e) {
                        e.data.result && e.data.result.url && d.setData({
                            url: e.data.result.url
                        });
                    }
                });
            }
        });
    },
    to_use: function() {
        a = wx.getStorageSync("utoken"), r.sendRequest({
            url: "?r=wxapp.order.op.confirm",
            data: {
                utoken: a,
                orderid: e
            },
            method: "GET",
            success: function(e) {
                console.log(e), "-1" == e.data.status.errno ? wx.showModal({
                    title: "提示",
                    content: e.data.status.message,
                    showCancel: !1,
                    success: function(e) {
                        e.confirm && wx.reLaunch({
                            url: "../../index/index"
                        });
                    }
                }) : wx.showModal({
                    title: "提示",
                    content: "核销成功",
                    showCancel: !1,
                    success: function(e) {
                        e.confirm && wx.reLaunch({
                            url: "../../index/index"
                        });
                    }
                });
            }
        });
    },
    show: function() {
        var e = this;
        1 == e.data.show ? e.setData({
            show: 2
        }) : e.setData({
            show: 1
        });
    },
    pay: function(e) {
        var t = e.currentTarget.dataset.index;
        wx.navigateTo({
            url: "../orderpay/payment?order_id=" + t
        });
    },
    cancel: function(e) {
        var t = e.currentTarget.dataset.index;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定取消订单吗？",
            success: function(e) {
                if (e.confirm) {
                    var a = wx.getStorageSync("utoken");
                    r.sendRequest({
                        url: "?r=wxapp.order.op.cancel",
                        data: {
                            utoken: a,
                            id: t
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
        var e = this;
        a = wx.getStorageSync("utoken"), wx.showModal({
            title: "提示",
            content: "您确定要取消申请么",
            success: function(t) {
                t.confirm ? r.sendRequest({
                    url: "?r=order.refund.cancel&utoken=" + a + "&id=" + e.data.order_id,
                    method: "GET",
                    success: function(t) {
                        wx.redirectTo({
                            url: "/pages/order/details/index?order_id=" + e.data.order_id + "&currIndex=" + e.data.currIndex + "&myIndex=" + e.data.myIndex
                        });
                    }
                }) : t.cancel;
            }
        });
    },
    applyRefund: function() {
        var e = this;
        wx.redirectTo({
            url: "../refund/refund?maxAmount=" + e.data.result.price + "&order_id=" + e.data.order_id + "&currIndex=" + e.data.currIndex + "&myIndex=" + e.data.myIndex + "&dispatchprice=" + e.data.result.dispatchprice
        });
    },
    complaint: function() {
        wx.redirectTo({
            url: "../complaint/complaint"
        });
    },
    joinDetail: function(e) {
        wx.redirectTo({
            url: "../../goods/detail/detail?objectId=" + e.currentTarget.dataset.id
        });
    }
});