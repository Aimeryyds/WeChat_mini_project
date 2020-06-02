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
        order: [],
        disass: [],
        getStatusId: "",
        status_str: "",
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
        e.apiRequest("collage_order", "getorder", {
            data: {
                oid: t
            },
            success: function(e) {
                if ("OK" == e.data.result) {
                    var r = e.data.order;
                    if (2 == r.pay_status && clearInterval(s), r.ostr = "", 2 == r.pay_status && 1 == r.order_status) {
                        var o = "1" == r.order_status ? "未发货" : "2" == r.order_status ? "已发货" : "4" == r.order_status ? "已退货" : "";
                        r.ostr = o;
                    }
                    var d = "";
                    r.hadnum && "1" == r.order_status && "2" == r.pay_status && parseInt(r.number) - parseInt(r.hadnum) > 0 && (d = "待拼团"), 
                    a.setData({
                        order: r,
                        oid: t,
                        dis_title: e.data.dis_title,
                        trade_status: e.data.trade_status,
                        pickupaddrs: e.data.pickupaddrs,
                        pickupaddr: e.data.pickupaddr,
                        status_str: d
                    }), "2" == r.pay_status && "1" == r.order_status && "1" == e.data.refundswitch && a.setData({
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
                t.confirm ? e.apiRequest("collage_order", "orderToGet", {
                    data: {
                        oid: a
                    },
                    success: function(t) {
                        if ("OK" == t.data.result) wx.showToast({
                            title: "确认成功"
                        }), s.status = 5, s.status_str = "待评价", r.setData({
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
            url: "../ratings/ratings?type=collage&oid=" + a
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    payOrders: function(t) {
        var s = t.target.dataset.oid, r = (this.data.cash, this.data.order);
        wx.showToast({
            title: "请求中...",
            icon: "loading",
            duration: 5e3
        });
        var o = wx.getStorageSync("openid");
        if (s && o) {
            var d = r.total_price;
            if (d > 0) {
                var i = {
                    oid: s,
                    openid: o,
                    total_price: d
                };
                e.apiRequest("collage_order", "getprepayid", {
                    data: {
                        data: JSON.stringify(i),
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
                url: "../collage_order_detail/collage_order_detail?oid=" + s
            });
        } else wx.showToast({
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
                r.confirm ? e.apiRequest("collage_order", "remove", {
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
        e.apiRequest("collage_order", "order_notice", {
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
                t.confirm ? e.apiRequest("collage_order", "order_refund", {
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
                a.confirm ? e.apiRequest("collage_order", "remove", {
                    data: {
                        oid: t,
                        otype: "remove"
                    },
                    success: function(t) {
                        "OK" == t.data.result ? wx.redirectTo({
                            url: "../collage_order_list/collage_order_list?activeIndex=all"
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
            url: "../view-logistics/view-logistics?type=collage&oid=" + a + "&orderid=" + e
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    }
});