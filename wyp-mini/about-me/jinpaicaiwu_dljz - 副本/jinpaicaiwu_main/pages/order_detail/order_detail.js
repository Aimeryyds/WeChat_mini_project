var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../wxParse/util.js")), a = require("../../wxParse/common.js"), e = getApp();

Page({
    data: {
        carts: [],
        total_price: 0,
        nowtime: "",
        oid: "",
        cuser: [],
        address: [],
        lastPrice: 0,
        openid: "",
        product: [],
        order: [],
        disass: [],
        getStatusId: "",
        show_refundbtn: !1
    },
    addAddr: function() {
        wx.navigateTo({
            url: "../address/address"
        });
    },
    onLoad: function(t) {
        var a = t.oid, s = (e.globalData.carts, wx.getStorageSync("openid"), this);
        if (a) {
            s.getStatus(a);
            var r = setInterval(function() {
                return s.getStatus(a);
            }, 2e3);
            s.setData({
                getStatusId: r
            });
        } else wx.showToast({
            title: "参数错误！",
            duration: 2500
        }), wx.navigateBack({
            delta: 1
        });
    },
    onUnload: function() {
        var t = this.data.getStatusId;
        t && clearInterval(t);
    },
    onShow: function() {
        var a = t.default.formatTime2(new Date());
        this.setData({
            start_date: a,
            date: a
        });
    },
    getStatus: function(t) {
        var a = this, s = a.data.getStatusId;
        e.apiRequest("order", "getorder", {
            data: {
                oid: t
            },
            success: function(e) {
                if ("OK" == e.data.result) {
                    var r = e.data.order, d = e.data.product, o = e.data.disass;
                    if (2 == r.pay_status && clearInterval(s), r.ostr = "", 4 == r.pay_status) {
                        var i = "1" == r.delivery_status ? "未发货" : "2" == r.delivery_status ? "已发货" : "3" == r.delivery_status ? "已退货" : "";
                        r.ostr = i;
                    }
                    a.setData({
                        order: r,
                        product: d,
                        disass: o,
                        oid: t,
                        dis_title: e.data.dis_title,
                        trade_status: e.data.trade_status,
                        pickupaddrs: e.data.pickupaddrs,
                        pickupaddr: e.data.pickupaddr,
                        cash: e.data.cash
                    }), "2" == r.pay_status && "4" != r.delivery_status && "2" == r.order_status && "1" == e.data.refundswitch && e.data.cash.key && "0" != e.data.cash.key && "2" != e.data.cash.key && a.setData({
                        show_refundbtn: !0
                    }), e.data.address ? a.setData({
                        delivery_addr: !0,
                        address: e.data.address
                    }) : wx.getStorage({
                        key: "address",
                        success: function(t) {
                            a.setData({
                                delivery_addr: !0,
                                address: t.data
                            });
                        }
                    });
                } else wx.showToast({
                    title: "参数错误！",
                    duration: 2500
                }), wx.navigateBack({
                    delta: 1
                });
            }
        });
    },
    confirmOrders: function(t) {
        var a = t.currentTarget.dataset.oid, s = this.data.order, r = this;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认收货",
            success: function(t) {
                t.confirm ? e.apiRequest("order", "orderToGet", {
                    data: {
                        oid: a
                    },
                    success: function(t) {
                        if ("OK" == t.data.result) wx.showToast({
                            title: "确认成功"
                        }), s.delivery_status_no = 4, r.setData({
                            order: s
                        }); else {
                            var a = t.data.errmsg || "请求失败";
                            wx.showToast({
                                title: a
                            });
                        }
                    }
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    rating: function(t) {
        var a = t.currentTarget.dataset.oid;
        a ? wx.navigateTo({
            url: "../ratings/ratings?oid=" + a
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    payOrders: function(t) {
        var s = t.target.dataset.oid, r = this.data.cash || [];
        this.data.order;
        if ("2" == r.key) return wx.navigateTo({
            url: "/pages/showsuccess/showsuccess?id=" + r.id + "&oid=" + s
        }), !1;
        wx.showToast({
            title: "请求中...",
            icon: "loading",
            duration: 5e3
        });
        var d = wx.getStorageSync("openid");
        s && d ? e.apiRequest("order", "dopayment", {
            data: {
                oid: s,
                method: "POST",
                mark: "new"
            },
            success: function(t) {
                if ("OK" != t.data.result) {
                    var r = t.data.errmsg || "支付失败";
                    return wx.showToast({
                        title: r
                    }), !1;
                }
                if (t.data.wxPrice > 0) {
                    var o = {
                        oid: s,
                        openid: d,
                        mark: "new"
                    };
                    e.apiRequest("order", "getprepay_id", {
                        data: {
                            data: JSON.stringify(o),
                            method: "POST"
                        },
                        success: function(t) {
                            if ("OK" == t.data.result) e.globalData.carts = [], t.data.oid = s, a.pay(t.data); else {
                                var r = t.data.errmsg || "支付失败";
                                wx.showToast({
                                    title: r
                                });
                            }
                        }
                    });
                } else e.globalData.carts = [], wx.showToast({
                    title: "支付成功！",
                    icon: "success",
                    duration: 2500
                }), wx.redirectTo({
                    url: "../order_detail/order_detail?oid=" + s
                });
            }
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    cancelOrders: function() {
        var t = this.data.oid, a = this.data.order, s = this;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认取消该订单",
            success: function(r) {
                r.confirm ? e.apiRequest("order", "remove", {
                    data: {
                        oid: t,
                        otype: "cancel"
                    },
                    success: function(t) {
                        "OK" == t.data.result ? (a.order_status = 5, s.setData({
                            order: a
                        })) : wx.showToast({
                            title: "取消失败"
                        });
                    }
                }) : r.cancel && console.log("用户点击取消");
            }
        });
    },
    remind: function(t) {
        var a = t.currentTarget.dataset.oid;
        e.apiRequest("order", "order_notice", {
            data: {
                oid: a
            },
            success: function(t) {
                if ("OK" == t.data.result) wx.showToast({
                    title: "已提醒卖家及时发货"
                }); else {
                    var a = t.data.errmsg || "请求失败";
                    wx.showModal({
                        content: a
                    });
                }
            }
        });
    },
    refund: function(t) {
        var a = t.currentTarget.dataset.oid;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认申请退款",
            success: function(t) {
                t.confirm ? e.apiRequest("order", "order_refund", {
                    data: {
                        oid: a
                    },
                    success: function(t) {
                        if ("OK" == t.data.result) wx.showToast({
                            title: "退款申请已提交"
                        }); else {
                            var a = t.data.errmsg || "请求失败";
                            wx.showModal({
                                content: a
                            });
                        }
                    }
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    deleteOrderList: function() {
        var t = this.data.oid;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认删除该订单",
            success: function(a) {
                a.confirm ? e.apiRequest("order", "remove", {
                    data: {
                        oid: t,
                        otype: "remove"
                    },
                    success: function(t) {
                        "OK" == t.data.result ? wx.redirectTo({
                            url: "../orders/orders?activeIndex=all"
                        }) : wx.showToast({
                            title: "删除失败"
                        });
                    }
                }) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    viewLogistics: function(t) {
        var a = t.currentTarget.dataset.oid, e = t.currentTarget.dataset.orderid;
        a ? wx.navigateTo({
            url: "../view-logistics/view-logistics?oid=" + a + "&orderid=" + e
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    copyOrderId: function() {
        var t = this.data.order;
        wx.setClipboardData({
            data: t.oid,
            success: function(t) {
                wx.getClipboardData({
                    success: function(t) {
                        wx.showToast({
                            title: "复制成功",
                            duration: 1e3
                        });
                    }
                });
            }
        });
    }
});