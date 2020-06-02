function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

var a, e = getApp(), r = require("../../wxParse/common.js");

Page({
    data: (a = {
        activeIndex: 0,
        orders: [ {}, {}, {}, {}, {}, {} ],
        prompt: {
            hidden: !0
        }
    }, t(a, "orders", []), t(a, "pageid", "collage_order_list/collage_order_list"), 
    t(a, "show_homeBar", !1), t(a, "refundswitch", "0"), t(a, "currentTab", 0), t(a, "second_height", 0), 
    t(a, "actives", [ "all", "nopay", "collage", "delivery", "getit", "rating" ]), a),
    onLoad: function(t) {
        var a = this;
        t.activeIndex || (t.activeIndex = "all"), wx.getSystemInfo({
            success: function(t) {
                a.setData({
                    second_height: t.windowHeight
                });
            }
        }), a.setData({
            activeIndex: t.activeIndex
        });
    },
    onShow: function() {
        var t = this, a = t.data.activeIndex;
        e.apiRequest("collage_order", "order_list", {
            data: {
                type: a
            },
            success: function(a) {
                if ("OK" == a.data.result) {
                    if (a.data.data.length) for (var e = 0; e < a.data.data.length; e++) "2" == a.data.data[e].pay_status && "4" != a.data.data[e].delivery_status && "2" == a.data.data[e].ori_status && a.data.refundswitch && a.data.data[e].cash_key && "0" != a.data.data[e].cash_key && "2" != a.data.data[e].cash_key ? a.data.data[e].show_refundbtn = !0 : a.data.data[e].show_refundbtn = !1;
                    var r = t.data.orders;
                    r[0] = a.data.data || [], t.setData({
                        "prompt.hidden": !!a.data.data,
                        orders: r
                    });
                } else "2" == a.data.errmsg && wx.navigateTo({
                    url: "../login/login"
                });
                t.setData({
                    show_homeBar: 1 == getCurrentPages().length
                });
            }
        });
        var r = this.data.pageid, o = getApp().globalData.config.tabBar || {};
        if (o.list) {
            var s = !0, i = !1, d = void 0;
            try {
                for (var n, c = o.list[Symbol.iterator](); !(s = (n = c.next()).done); s = !0) {
                    var l = n.value;
                    l.type && "page" != l.type && (l.pagePath = "");
                }
            } catch (t) {
                i = !0, d = t;
            } finally {
                try {
                    !s && c.return && c.return();
                } finally {
                    if (i) throw d;
                }
            }
            if (this.setData({
                tabs: o
            }), "pageappoint" == o.applyPage && o.chooseList) {
                var u = o.chooseList.findIndex(function(t) {
                    return t == r;
                });
                this.setData({
                    showBar: u > -1
                });
            } else {
                var g = o.list.findIndex(function(t) {
                    return t.pagePath == r;
                });
                this.setData({
                    showBar: g > -1
                });
            }
        }
    },
    cancelOrders: function(t) {
        var a = t.currentTarget.dataset.oid, r = (t.currentTarget.dataset.index, this.data.activeIndex);
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认取消该订单",
            success: function(t) {
                t.confirm ? e.apiRequest("collage_order", "remove", {
                    data: {
                        oid: a,
                        otype: "cancel"
                    },
                    success: function(t) {
                        "OK" == t.data.result ? (wx.showToast({
                            title: "操作成功"
                        }), wx.redirectTo({
                            url: "../collage_order_list/collage_order_list?activeIndex=" + r
                        })) : wx.showToast({
                            title: "取消失败"
                        });
                    }
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    confirmOrders: function(t) {
        var a = t.currentTarget.dataset.oid, r = t.currentTarget.dataset.index, o = this.data.orders, s = this;
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
                        }), o.splice(r, 1), s.setData({
                            orders: o
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
    rating: function(t) {
        var a = a = t.currentTarget.dataset.oid;
        a ? wx.navigateTo({
            url: "../ratings/ratings?type=collage&oid=" + a
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    changeStatus: function() {
        var t = this.data.activeIndex, a = "";
        "nopay" == t ? a = "待付款" : "nopay" == t ? a = "待付款" : "collage" == t ? a = "待成团" : "delivery" == t ? a = "待发货" : "getit" == t ? a = "待收货" : "rating" == t && (a = "待评价"), 
        this.setData({
            statusstr: a
        });
    },
    changActive: function(t) {
        var a = this, r = t.currentTarget.dataset.id;
        a.setData({
            activeIndex: r
        });
        var o = r;
        e.apiRequest("collage_order", "order_list", {
            data: {
                type: o
            },
            success: function(t) {
                "OK" == t.data.result && a.setData({
                    "prompt.hidden": !!t.data.data,
                    orders: t.data.data || []
                });
            }
        }), a.changeStatus();
    },
    deleteOrderList: function(t) {
        var a = t.currentTarget.dataset.oid, r = t.currentTarget.dataset.index, o = this;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认删除该订单",
            success: function(t) {
                t.confirm ? e.apiRequest("collage_order", "remove", {
                    data: {
                        oid: a,
                        otype: "remove"
                    },
                    success: function(t) {
                        if ("OK" == t.data.result) {
                            wx.showToast({
                                title: "操作成功"
                            });
                            var a = o.data.orders;
                            a.splice(r, 1), o.setData({
                                orders: a
                            });
                        } else wx.showToast({
                            title: "删除失败"
                        });
                    }
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    payOrders: function(t) {
        var a = t.target.dataset.oid, o = this.data.orders[0], s = t.target.dataset.index;
        if (o[s]) {
            var i = o[s].cash_key || 0, d = o[s].cash_id || 0;
            if ("2" == i && d) {
                o[s].total_amount;
                return wx.navigateTo({
                    url: "/pages/showsuccess/showsuccess?id=" + d + "&oid=" + a
                }), !1;
            }
        }
        wx.showToast({
            title: "请求中...",
            icon: "loading",
            duration: 5e3
        });
        var n = wx.getStorageSync("openid");
        if (a && n) {
            var c = o[s].total_price, l = o[s].group_id;
            if (c > 0) {
                var u = {
                    oid: a,
                    openid: n,
                    total_price: c
                };
                e.apiRequest("collage_order", "getprepayid", {
                    data: {
                        data: JSON.stringify(u),
                        method: "POST"
                    },
                    success: function(t) {
                        if (t.data.prepay_id) e.globalData.carts = [], t.data.oid = a, r.pay(t.data); else {
                            var o = t.data.errmsg || "支付失败";
                            wx.showToast({
                                title: o
                            });
                        }
                    }
                });
            } else e.globalData.carts = [], wx.showToast({
                title: "支付成功！",
                icon: "success",
                duration: 2500
            }), wx.redirectTo({
                url: "../collage_detail/collage_detail?oid=" + a + "&group_id=" + l
            });
        } else wx.showToast({
            title: "订单异常！",
            icon: "loading",
            duration: 5e3
        });
    },
    switchTab: function(t) {
        var a = t.currentTarget.dataset.url, e = t.currentTarget.dataset.tab;
        "func" == e.type ? getApp().moduleBindTap(e) : getApp().turnToPage(a, !0);
    },
    backHome: function() {
        var t = getApp().globalData.config.tabBar || {}, a = "/pages/page1/page1";
        t.list && (a = "/pages/" + t.list[0].pagePath), getApp().redirectTo({
            url: a
        });
    },
    backTop: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    },
    clickTab: function(t) {
        var a = this;
        if (this.data.activeIndex === t.target.dataset.current) return !1;
        var e = t.target.dataset.current, r = a.data.actives[e];
        a.getOrders(e), a.setData({
            activeIndex: r,
            currentTab: e
        });
    },
    getOrders: function(t) {
        var a = this, r = a.data.actives, o = a.data.orders, s = r[t];
        s && e.apiRequest("collage_order", "order_list", {
            data: {
                type: s
            },
            success: function(e) {
                "OK" == e.data.result && (o[t] = e.data.data, a.setData({
                    "prompt.hidden": !!e.data.data,
                    orders: o || []
                }));
            }
        });
    },
    goPage: function(t) {
        var a = t.currentTarget.dataset.page, r = t.currentTarget.dataset.param || "", o = t.currentTarget.dataset.arg || "", s = t.currentTarget.dataset.oid || "", i = "../" + a + "/" + a;
        return r && (i += "?" + r + "=" + o + "&oid=" + s, e.navigateTo({
            url: i
        })), !1;
    }
});