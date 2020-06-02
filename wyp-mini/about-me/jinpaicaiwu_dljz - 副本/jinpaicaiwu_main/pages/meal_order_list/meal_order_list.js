var t = getApp(), e = require("../../wxParse/common.js");

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
        var e = this, a = e.data.activeIndex;
        t.apiRequest("meal", "order_list", {
            data: {
                type: a
            },
            success: function(t) {
                console.log("res", t), "OK" == t.data.result ? e.setData({
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
    cancelOrders: function(e) {
        var a = e.currentTarget.dataset.oid, r = (e.currentTarget.dataset.index, this.data.activeIndex);
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认取消该订单",
            success: function(e) {
                e.confirm ? t.apiRequest("meal", "orderOperation", {
                    data: {
                        oid: a,
                        otype: "cancel"
                    },
                    success: function(t) {
                        "OK" == t.data.result ? (wx.showToast({
                            title: "操作成功"
                        }), wx.redirectTo({
                            url: "../meal_order_list/meal_order_list?activeIndex=" + r
                        })) : wx.showToast({
                            title: "取消失败"
                        });
                    }
                }) : e.cancel && console.log("用户点击取消");
            }
        });
    },
    refund: function(e) {
        var a = e.currentTarget.dataset.oid, r = (e.currentTarget.dataset.index, this.data.activeIndex);
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认退款",
            success: function(e) {
                e.confirm ? t.apiRequest("meal", "orderOperation", {
                    data: {
                        oid: a,
                        otype: "refund"
                    },
                    success: function(t) {
                        "OK" == t.data.result ? (wx.showToast({
                            title: "操作成功"
                        }), wx.redirectTo({
                            url: "../meal_order_list/meal_order_list?activeIndex=" + r
                        })) : wx.showToast({
                            title: "取消失败"
                        });
                    }
                }) : e.cancel && console.log("用户点击取消");
            }
        });
    },
    confirmOrders: function(e) {
        var a = this.data.orders, r = e.currentTarget.dataset.oid, i = e.currentTarget.dataset.index, o = this.data.activeIndex, s = this;
        r ? wx.showModal({
            title: "温馨提示：",
            content: "是否确认完成",
            success: function(e) {
                e.confirm ? t.apiRequest("meal", "orderOperation", {
                    data: {
                        oid: r,
                        otype: "confirm"
                    },
                    success: function(t) {
                        if ("OK" == t.data.result) wx.showToast({
                            title: "确认成功"
                        }), a[i].order_status = 3, s.setData({
                            orders: a
                        }), wx.redirectTo({
                            url: "../meal_order_list/meal_order_list?activeIndex=" + o
                        }); else {
                            var e = t.data.errmsg || "请求失败";
                            wx.showToast({
                                title: e
                            });
                        }
                    }
                }) : e.cancel && console.log("用户点击取消");
            }
        }) : wx.showToast({
            title: "参数错误"
        });
    },
    remind: function(t) {},
    buyAgain: function(t) {
        var e = t.currentTarget.dataset.oid;
        if (e) {
            var a = "";
            if (wx.canIUse("alert")) {
                var r = (this.data.orders || []).find(function(t) {
                    return t.id == e;
                });
                r && (a = "&shop_id=" + r.shop_id);
            }
            wx.redirectTo({
                url: "../meal_list/meal_list?oid=" + e + a
            });
        } else wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    viewLogistics: function(t) {},
    rating: function(t) {
        var e = e = t.currentTarget.dataset.oid;
        e ? wx.navigateTo({
            url: "../ratings/ratings?oid=" + e
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    changActive: function(e) {
        var a = this, r = e.currentTarget.dataset.id;
        a.setData({
            activeIndex: r
        });
        var i = r;
        t.apiRequest("meal", "order_list", {
            data: {
                type: i
            },
            success: function(t) {
                "OK" == t.data.result && a.setData({
                    "prompt.hidden": !!t.data.data,
                    orders: t.data.data || []
                });
            }
        });
    },
    deleteOrderList: function(e) {
        var a = e.currentTarget.dataset.oid, r = e.currentTarget.dataset.index, i = this;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认删除该订单",
            success: function(e) {
                e.confirm ? t.apiRequest("meal", "orderOperation", {
                    data: {
                        oid: a,
                        otype: "remove"
                    },
                    success: function(t) {
                        if ("OK" == t.data.result) {
                            wx.showToast({
                                title: "操作成功"
                            });
                            var e = i.data.orders;
                            e.splice(r, 1), i.setData({
                                orders: e
                            });
                        } else wx.showToast({
                            title: "删除失败"
                        });
                    }
                }) : e.cancel && console.log("用户点击取消");
            }
        });
    },
    payOrders: function(t) {
        var a = this.data.orders, r = t.target.dataset.index;
        if (a[r]) {
            var i = a[r], o = i.id, s = i.total_price;
            o && s ? e.wxPay(o, s, "meal") : wx.showModal({
                title: "订单异常",
                content: "",
                showCancel: !1
            });
        }
    },
    switchTab: function(t) {
        var e = t.currentTarget.dataset.url;
        getApp().turnToPage(e, !0);
    }
});