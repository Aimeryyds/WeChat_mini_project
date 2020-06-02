var t = getApp(), a = require("../../wxParse/common.js");

Page({
    data: {
        activeIndex: 0,
        order: {},
        prompt: {
            hidden: !0
        },
        orders: [],
        pageid: "orders/orders"
    },
    onLoad: function(t) {
        t.activeIndex || (t.activeIndex = "all"), this.setData({
            activeIndex: t.activeIndex
        });
    },
    onShow: function() {
        var a = this, e = a.data.activeIndex;
        t.apiRequest("takeaway", "order_list", {
            data: {
                type: e
            },
            success: function(t) {
                "OK" == t.data.result ? a.setData({
                    "prompt.hidden": !!t.data.data,
                    orders: t.data.data || []
                }) : "2" == t.data.errmsg && wx.navigateTo({
                    url: "../login/login"
                });
            }
        });
        var r = this.data.pageid, i = getApp().globalData.config.tabBar || {};
        if (i.list) {
            this.setData({
                tabs: i
            });
            var o = i.list.findIndex(function(t) {
                return t.pagePath == r;
            });
            this.setData({
                showBar: o > -1
            });
        }
    },
    cancelOrders: function(a) {
        var e = a.currentTarget.dataset.oid, r = (a.currentTarget.dataset.index, this.data.activeIndex);
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认取消该订单",
            success: function(a) {
                a.confirm ? t.apiRequest("takeaway", "orderOperation", {
                    data: {
                        oid: e,
                        otype: "cancel"
                    },
                    success: function(t) {
                        "OK" == t.data.result ? (wx.showToast({
                            title: "操作成功"
                        }), wx.redirectTo({
                            url: "../takeaway_order_list/takeaway_order_list?activeIndex=" + r
                        })) : wx.showToast({
                            title: "取消失败"
                        });
                    }
                }) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    refund: function(a) {
        var e = a.currentTarget.dataset.oid, r = (a.currentTarget.dataset.index, this.data.activeIndex);
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认退款",
            success: function(a) {
                a.confirm ? t.apiRequest("takeaway", "orderOperation", {
                    data: {
                        oid: e,
                        otype: "refund"
                    },
                    success: function(t) {
                        "OK" == t.data.result ? (wx.showToast({
                            title: "操作成功"
                        }), wx.redirectTo({
                            url: "../takeaway_order_list/takeaway_order_list?activeIndex=" + r
                        })) : wx.showToast({
                            title: "取消失败"
                        });
                    }
                }) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    confirmOrders: function(a) {
        var e = this.data.orders, r = a.currentTarget.dataset.oid, i = a.currentTarget.dataset.index, o = this.data.activeIndex, s = this;
        r ? wx.showModal({
            title: "温馨提示：",
            content: "是否确认完成",
            success: function(a) {
                a.confirm ? t.apiRequest("takeaway", "orderOperation", {
                    data: {
                        oid: r,
                        otype: "confirm"
                    },
                    success: function(t) {
                        if ("OK" == t.data.result) wx.showToast({
                            title: "确认成功"
                        }), e[i].order_status = 3, s.setData({
                            orders: e
                        }), wx.redirectTo({
                            url: "../takeaway_order_list/takeaway_order_list?activeIndex=" + o
                        }); else {
                            var a = t.data.errmsg || "请求失败";
                            wx.showToast({
                                title: a
                            });
                        }
                    }
                }) : a.cancel && console.log("用户点击取消");
            }
        }) : wx.showToast({
            title: "参数错误"
        });
    },
    remind: function(t) {},
    buyAgain: function(t) {
        var a = t.currentTarget.dataset.oid, e = t.currentTarget.dataset.spid;
        a ? wx.redirectTo({
            url: "../meal_list/meal_list?oid=" + a + "&shop_id=" + e + "&takeaway=2"
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    viewLogistics: function(t) {},
    rating: function(t) {
        var a = a = t.currentTarget.dataset.oid;
        a ? wx.navigateTo({
            url: "../ratings/ratings?oid=" + a
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    changActive: function(a) {
        var e = this, r = a.currentTarget.dataset.id;
        e.setData({
            activeIndex: r
        });
        var i = r;
        t.apiRequest("takeaway", "order_list", {
            data: {
                type: i
            },
            success: function(t) {
                "OK" == t.data.result && e.setData({
                    "prompt.hidden": !!t.data.data,
                    orders: t.data.data || []
                });
            }
        });
    },
    deleteOrderList: function(a) {
        var e = a.currentTarget.dataset.oid, r = a.currentTarget.dataset.index, i = this;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认删除该订单",
            success: function(a) {
                a.confirm ? t.apiRequest("takeaway", "orderOperation", {
                    data: {
                        oid: e,
                        otype: "remove"
                    },
                    success: function(t) {
                        if ("OK" == t.data.result) {
                            wx.showToast({
                                title: "操作成功"
                            });
                            var a = i.data.orders;
                            a.splice(r, 1), i.setData({
                                orders: a
                            });
                        } else wx.showToast({
                            title: "删除失败"
                        });
                    }
                }) : a.cancel && console.log("用户点击取消");
            }
        });
    },
    payOrders: function(t) {
        var e = this.data.orders, r = t.target.dataset.index;
        if (e[r]) {
            var i = e[r], o = i.id, s = i.total_price;
            o && s ? a.wxPay(o, s, "takeaway") : wx.showModal({
                title: "订单异常",
                content: "",
                showCancel: !1
            });
        }
    },
    switchTab: function(t) {
        var a = t.currentTarget.dataset.url;
        getApp().turnToPage(a, !0);
    }
});