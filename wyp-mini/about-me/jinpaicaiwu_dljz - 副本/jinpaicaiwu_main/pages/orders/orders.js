var a = getApp(), t = require("../../wxParse/common.js");

Page({
    data: {
        activeIndex: 0,
        order: {},
        prompt: {
            hidden: !0
        },
        orders: [ {}, {}, {}, {}, {} ],
        order_pro_rel: [],
        pageid: "orders/orders",
        show_homeBar: !1,
        refundswitch: "0",
        currentTab: 0,
        second_height: 0,
        actives: [ "all", "nopay", "delivery", "getit", "rating" ]
    },
    onLoad: function(a) {
        var t = this;
        a.activeIndex || (a.activeIndex = "all"), wx.getSystemInfo({
            success: function(a) {
                t.setData({
                    second_height: a.windowHeight
                });
            }
        }), t.setData({
            activeIndex: a.activeIndex
        });
    },
    onShow: function() {
        var t = this, e = t.data.activeIndex;
        a.apiRequest("user", "order_list", {
            data: {
                type: e
            },
            success: function(a) {
                if ("OK" == a.data.result) {
                    if ((a.data.data || []).length) for (var e = 0; e < a.data.data.length; e++) "2" == a.data.data[e].pay_status && "4" != a.data.data[e].delivery_status && "2" == a.data.data[e].ori_status && "0" != a.data.refundswitch && a.data.data[e].cash_key && "0" != a.data.data[e].cash_key && "2" != a.data.data[e].cash_key ? a.data.data[e].show_refundbtn = !0 : a.data.data[e].show_refundbtn = !1;
                    var r = t.data.orders;
                    r[0] = a.data.data || [], t.setData({
                        "prompt.hidden": !!a.data.data,
                        orders: r,
                        order_pro_rel: a.data.order_pro_rel,
                        refundswitch: a.data.refundswitch
                    });
                } else "2" == a.data.errmsg && wx.navigateTo({
                    url: "../login/login"
                });
                t.setData({
                    show_homeBar: 1 == getCurrentPages().length
                });
            }
        });
        var r = this.data.pageid, s = getApp().globalData.config.tabBar || {};
        if (s.list) {
            var d = !0, o = !1, i = void 0;
            try {
                for (var n, c = s.list[Symbol.iterator](); !(d = (n = c.next()).done); d = !0) {
                    var u = n.value;
                    u.type && "page" != u.type && (u.pagePath = "");
                }
            } catch (a) {
                o = !0, i = a;
            } finally {
                try {
                    !d && c.return && c.return();
                } finally {
                    if (o) throw i;
                }
            }
            if (this.setData({
                tabs: s
            }), "pageappoint" == s.applyPage && s.chooseList) {
                var l = s.chooseList.findIndex(function(a) {
                    return a == r;
                });
                this.setData({
                    showBar: l > -1
                });
            } else {
                var g = s.list.findIndex(function(a) {
                    return a.pagePath == r;
                });
                this.setData({
                    showBar: g > -1
                });
            }
        }
    },
    cancelOrders: function(t) {
        var e = t.currentTarget.dataset.oid, r = (t.currentTarget.dataset.index, this.data.activeIndex);
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认取消该订单",
            success: function(t) {
                t.confirm ? a.apiRequest("order", "remove", {
                    data: {
                        oid: e,
                        otype: "cancel"
                    },
                    success: function(a) {
                        "OK" == a.data.result ? (wx.showToast({
                            title: "操作成功"
                        }), wx.redirectTo({
                            url: "../orders/orders?activeIndex=" + r
                        })) : wx.showToast({
                            title: "取消失败"
                        });
                    }
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    confirmOrders: function(t) {
        var e = t.currentTarget.dataset.oid, r = t.currentTarget.dataset.index, s = this.data.orders, d = this;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认收货",
            success: function(t) {
                t.confirm ? a.apiRequest("order", "orderToGet", {
                    data: {
                        oid: e
                    },
                    success: function(a) {
                        if ("OK" == a.data.result) wx.showToast({
                            title: "确认成功"
                        }), s[r].delivery_status_no = 4, d.setData({
                            orders: s
                        }), d.reShow("4"); else {
                            var t = a.data.errmsg || "请求失败";
                            wx.showToast({
                                title: t
                            });
                        }
                    }
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    remind: function(t) {
        var e = t.currentTarget.dataset.oid;
        a.apiRequest("order", "order_notice", {
            data: {
                oid: e
            },
            success: function(a) {
                if ("OK" == a.data.result) wx.showToast({
                    title: "已提醒卖家及时发货",
                    icon: "none"
                }); else {
                    var t = a.data.errmsg || "请求失败";
                    wx.showModal({
                        content: t
                    });
                }
            }
        });
    },
    refund: function(t) {
        var e = t.currentTarget.dataset.oid, r = this;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认申请退款",
            success: function(t) {
                t.confirm ? a.apiRequest("order", "order_refund", {
                    data: {
                        oid: e
                    },
                    success: function(a) {
                        if ("OK" == a.data.result) wx.showToast({
                            title: "退款申请已提交"
                        }), r.reShow(); else {
                            var t = a.data.errmsg || "请求失败";
                            wx.showModal({
                                content: t
                            });
                        }
                    }
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    buyAgain: function(t) {
        var e = e = t.currentTarget.dataset.oid;
        e ? a.apiRequest("order", "buyAgain", {
            data: {
                oid: e
            },
            success: function(t) {
                if ("OK" == t.data.result) {
                    for (var e = a.globalData.carts || [], r = t.data.carts, s = [], d = [], o = 0; o < r.length; o++) s.push(r[o].cid), 
                    d.push(r[o].skuid);
                    for (var i = 0; i < e.length; i++) "-1" != s.indexOf(e[i].cid) && "-1" != d.indexOf(e[i].skuid) || r.push(e[i]);
                    a.globalData.carts = r, wx.redirectTo({
                        url: "../shopping_cart/shopping_cart"
                    });
                } else {
                    var n = t.data.errmsg || "请求失败";
                    wx.showModal({
                        content: n
                    });
                }
            }
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    viewLogistics: function(a) {
        var t = a.currentTarget.dataset.oid, e = a.currentTarget.dataset.orderid;
        t ? wx.navigateTo({
            url: "../view-logistics/view-logistics?oid=" + t + "&orderid=" + e
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    rating: function(a) {
        var t = t = a.currentTarget.dataset.oid;
        t ? wx.navigateTo({
            url: "../ratings/ratings?oid=" + t
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    changActive: function(t) {
        var e = this, r = t.currentTarget.dataset.id;
        e.setData({
            activeIndex: r
        });
        var s = r;
        a.apiRequest("user", "order_list", {
            data: {
                type: s
            },
            success: function(a) {
                "OK" == a.data.result && e.setData({
                    "prompt.hidden": !!a.data.data,
                    orders: a.data.data || [],
                    order_pro_rel: a.data.order_pro_rel
                });
            }
        });
    },
    deleteOrderList: function(t) {
        var e = t.currentTarget.dataset.oid, r = t.currentTarget.dataset.index, s = this;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认删除该订单",
            success: function(t) {
                t.confirm ? a.apiRequest("order", "remove", {
                    data: {
                        oid: e,
                        otype: "remove"
                    },
                    success: function(a) {
                        if ("OK" == a.data.result) {
                            wx.showToast({
                                title: "操作成功"
                            });
                            var t = s.data.orders;
                            t.splice(r, 1), s.setData({
                                orders: t
                            });
                        } else wx.showToast({
                            title: "删除失败"
                        });
                    }
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    payOrders: function(e) {
        var r = e.target.dataset.oid, s = this.data.orders, d = e.target.dataset.index;
        if (s[d]) {
            var o = s[d].cash_key || 0, i = s[d].cash_id || 0;
            if ("2" == o && i) {
                s[d].total_amount;
                return wx.navigateTo({
                    url: "/pages/showsuccess/showsuccess?id=" + i + "&oid=" + r
                }), !1;
            }
        }
        wx.showToast({
            title: "请求中...",
            icon: "loading",
            duration: 5e3
        });
        var n = wx.getStorageSync("openid");
        r && n ? a.apiRequest("order", "dopayment", {
            data: {
                oid: r,
                method: "POST",
                mark: "new"
            },
            success: function(e) {
                if ("OK" != e.data.result) {
                    var s = e.data.errmsg || "支付失败";
                    return wx.showToast({
                        title: s
                    }), !1;
                }
                if (e.data.wxPrice > 0) {
                    var d = {
                        oid: r,
                        openid: n,
                        mark: "new"
                    };
                    a.apiRequest("order", "getprepay_id", {
                        data: {
                            data: JSON.stringify(d),
                            method: "POST"
                        },
                        success: function(e) {
                            if ("OK" == e.data.result) a.globalData.carts = [], e.data.oid = r, t.pay(e.data); else {
                                var s = e.data.errmsg || "支付失败";
                                wx.showToast({
                                    title: s
                                });
                            }
                        }
                    });
                } else a.globalData.carts = [], wx.showToast({
                    title: "支付成功！",
                    icon: "success",
                    duration: 2500
                }), wx.redirectTo({
                    url: "../order_detail/order_detail?oid=" + r
                });
            }
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    switchTab: function(a) {
        var t = a.currentTarget.dataset.url, e = a.currentTarget.dataset.tab;
        "func" == e.type ? getApp().moduleBindTap(e) : getApp().turnToPage(t, !0);
    },
    backHome: function() {
        var a = getApp().globalData.config.tabBar || {}, t = "/pages/page1/page1";
        a.list && (t = "/pages/" + a.list[0].pagePath), getApp().redirectTo({
            url: t
        });
    },
    backTop: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    },
    swiperTab: function(a) {
        var t = this, e = a.detail.current, r = t.data.actives[e];
        t.setData({
            currentTab: e,
            activeIndex: r
        });
    },
    clickTab: function(a) {
        var t = this;
        if (this.data.activeIndex === a.target.dataset.current) return !1;
        var e = a.target.dataset.current, r = t.data.actives[e];
        t.getOrders(e), t.setData({
            activeIndex: r,
            currentTab: e
        });
    },
    getOrders: function(t) {
        var e = this, r = e.data.actives, s = e.data.orders, d = r[t];
        d && a.apiRequest("user", "order_list", {
            data: {
                type: d
            },
            success: function(a) {
                if ("OK" == a.data.result) {
                    if ((a.data.data || []).length) for (var r = 0; r < a.data.data.length; r++) "2" == a.data.data[r].pay_status && "4" != a.data.data[r].delivery_status && "2" == a.data.data[r].ori_status && "0" != a.data.refundswitch && a.data.data[r].cash_key && "0" != a.data.data[r].cash_key && "2" != a.data.data[r].cash_key ? a.data.data[r].show_refundbtn = !0 : a.data.data[r].show_refundbtn = !1;
                    s[t] = a.data.data, e.setData({
                        "prompt.hidden": !!a.data.data,
                        orders: s || [],
                        order_pro_rel: a.data.order_pro_rel || []
                    });
                }
            }
        });
    },
    goPage: function(t) {
        var e = t.currentTarget.dataset.page, r = t.currentTarget.dataset.param || "", s = t.currentTarget.dataset.arg || "", d = "../" + e + "/" + e;
        r && (d += "?" + r + "=" + s), a.navigateTo({
            url: d
        });
    },
    reShow: function(a) {
        var t = this.data.activeIndex, e = a || Math.max(0, (this.data.actives || []).indexOf(t));
        this.getOrders(e), this.setData({
            activeIndex: t,
            currentTab: e
        });
    }
});