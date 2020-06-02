var e, t = require("../../../utils/server"), r = wx.getStorageSync("utoken"), a = {};

Page({
    data: {
        isrefund: 5,
        width: 2 * Math.ceil(wx.getSystemInfoSync().windowWidth),
        show: 1
    },
    onLoad: function(d, s) {
        r = wx.getStorageSync("utoken");
        var n = this;
        if (a = d, e = a.order_id, a.currIndex) {
            var o = a.currIndex;
            n.setData({
                currIndex: o
            });
        }
        if (a.orderid ? n.setData({
            order_id: orderid
        }) : a.order_id && n.setData({
            order_id: e
        }), void 0 !== d.scene) {
            var i = decodeURIComponent(d.scene);
            a = {}, temp1 = i.split("&");
            for (var u = 0; u < temp1.length; u++) {
                var c = temp1[u].split("=");
                a[c[0]] = c[1];
            }
            e = a.oid, console.log(a), t.sendRequest({
                url: "?r=wxapp.services.order.allow",
                data: {
                    utoken: r,
                    orderid: e
                },
                method: "GET",
                success: function(e) {
                    "-1" == e.data.status ? wx.showModal({
                        title: "提示",
                        content: "核销身份不符",
                        showCancel: !1,
                        success: function(e) {
                            e.confirm && wx.reLaunch({
                                url: "../../index/index"
                            });
                        }
                    }) : n.setData({
                        hexiao: 1
                    });
                }
            });
        } else t.sendRequest({
            url: "?r=wxapp.services.order.getQrcode",
            data: {
                utoken: r,
                orderid: e
            },
            method: "GET",
            success: function(e) {
                e.data.result && e.data.result.url && n.setData({
                    url: e.data.result.url
                });
            }
        });
        t.sendRequest({
            url: "?r=wxapp.services.order.detail",
            data: {
                utoken: r,
                id: e
            },
            method: "GET",
            success: function(e) {
                var t = e.data.result;
                n.setData({
                    result: t
                }), t.refund && n.setData({
                    refundMsg: t.refund.msg,
                    refundReply: t.refund.reply
                });
                e.data.result.goods.timestart;
                var r = n.timex(e.data.result.goods.timestart), a = n.timex(e.data.result.log.order_start_time);
                if ("0" != e.data.result.log.order_end_time) d = n.timex(e.data.result.log.order_end_time); else var d = "";
                n.setData({
                    times: r,
                    start: a,
                    end: d
                }), n.data.result.order_status_desc && "2" == n.data.result.order_status_desc.indexOf("完成") ? n.setData({
                    status: 1
                }) : n.setData({
                    status: 2
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
    to_use: function() {
        t.sendRequest({
            url: "?r=wxapp.services.order.complete",
            data: {
                utoken: r,
                orderid: e
            },
            method: "GET",
            success: function(e) {
                wx.showModal({
                    title: "提示",
                    content: e.data.msg,
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
    timex: function(e) {
        var t = new Date(1e3 * parseFloat(e));
        return t.getFullYear() + "-" + (t.getMonth() + 1 > 10 ? t.getMonth() + 1 : "0" + (t.getMonth() + 1)) + "-" + (t.getDate() > 10 ? t.getDate() : "0" + t.getDate()) + " " + (t.getHours() > 10 ? t.getHours() : "0" + t.getHours()) + ":" + (t.getMinutes() > 10 ? t.getMinutes() : "0" + t.getMinutes()) + ":" + (t.getSeconds() > 10 ? t.getSeconds() : "0" + t.getSeconds());
    },
    pay: function(e) {
        var t = e.currentTarget.dataset.index;
        wx.navigateTo({
            url: "../orderpay/payment?order_id=" + t
        });
    },
    cancel: function(e) {
        var r = e.currentTarget.dataset.index;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定取消订单吗？",
            success: function(e) {
                if (e.confirm) {
                    var a = wx.getStorageSync("utoken");
                    t.sendRequest({
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
        var e = this;
        r = wx.getStorageSync("utoken"), wx.showModal({
            title: "提示",
            content: "您确定要取消申请么",
            success: function(a) {
                a.confirm ? t.sendRequest({
                    url: "?r=order.refund.cancel&utoken=" + r + "&id=" + e.data.order_id,
                    method: "GET",
                    success: function(t) {
                        wx.redirectTo({
                            url: "/pages/order/details/index?order_id=" + e.data.order_id + "&currIndex=" + e.data.currIndex
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