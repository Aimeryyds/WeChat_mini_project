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
        orders: [ {}, {}, {}, {}, {} ],
        prompt: {
            hidden: !0
        }
    }, t(a, "orders", []), t(a, "pageid", "orders/orders"), t(a, "refundswitch", "0"), 
    t(a, "currentTab", 0), t(a, "second_height", 0), t(a, "actives", [ "all", "nopay", "forService", "refused", "rating" ]), 
    a),
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
        e.apiRequest("appoit", "order_list", {
            data: {
                type: a
            },
            success: function(a) {
                if ("OK" == a.data.result) {
                    var e = t.data.orders;
                    e[0] = a.data.data || [], t.setData({
                        "prompt.hidden": !!a.data.data,
                        orders: e
                    });
                } else "2" == a.data.errmsg && wx.navigateTo({
                    url: "../login/login"
                });
            }
        });
        var r = this.data.pageid, i = getApp().globalData.config.tabBar || {};
        if (i.list) {
            var s = !0, n = !1, o = void 0;
            try {
                for (var d, c = i.list[Symbol.iterator](); !(s = (d = c.next()).done); s = !0) {
                    var u = d.value;
                    u.type && "page" != u.type && (u.pagePath = "");
                }
            } catch (t) {
                n = !0, o = t;
            } finally {
                try {
                    !s && c.return && c.return();
                } finally {
                    if (n) throw o;
                }
            }
            this.setData({
                tabs: i
            });
            var l = i.list.findIndex(function(t) {
                return t.pagePath == r;
            });
            this.setData({
                showBar: l > -1
            });
        }
    },
    cancelOrders: function(t) {
        var a = t.currentTarget.dataset.oid, r = (t.currentTarget.dataset.index, this.data.activeIndex);
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认取消该订单",
            success: function(t) {
                t.confirm ? e.apiRequest("appoit", "orderOperation", {
                    data: {
                        oid: a,
                        otype: "cancel"
                    },
                    success: function(t) {
                        "OK" == t.data.result ? (wx.showToast({
                            title: "操作成功"
                        }), wx.redirectTo({
                            url: "../appiont_order_list/appiont_order_list?activeIndex=" + r
                        })) : wx.showToast({
                            title: "取消失败"
                        });
                    }
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    confirmOrders: function(t) {
        var a = this.data.order.id, r = this;
        a ? wx.showModal({
            title: "温馨提示：",
            content: "是否确认服务",
            success: function(t) {
                t.confirm ? e.apiRequest("appoit", "orderOperation", {
                    data: {
                        oid: a,
                        type: "confirm"
                    },
                    success: function(t) {
                        if ("OK" == t.data.result) wx.showToast({
                            title: "确认成功"
                        }), orders[order_index].order_status = 3, r.setData({
                            orders: orders
                        }); else {
                            var a = t.data.errmsg || "请求失败";
                            wx.showToast({
                                title: a
                            });
                        }
                    }
                }) : t.cancel && console.log("用户点击取消");
            }
        }) : wx.showToast({
            title: "参数错误"
        });
    },
    remind: function(t) {},
    buyAgain: function(t) {},
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
    changActive: function(t) {
        var a = this, r = t.currentTarget.dataset.id;
        a.setData({
            activeIndex: r
        });
        var i = r;
        e.apiRequest("appoit", "order_list", {
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
    deleteOrderList: function(t) {
        var a = t.currentTarget.dataset.oid, r = t.currentTarget.dataset.index, i = this;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认删除该订单",
            success: function(t) {
                t.confirm ? e.apiRequest("appoit", "orderOperation", {
                    data: {
                        oid: a,
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
                }) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    payOrders: function(t) {
        t.target.dataset.oid;
        var a = this.data.orders[0], e = t.target.dataset.index;
        if (a[e]) {
            var i = a[e], s = i.id, n = i.real_price;
            s && n ? r.wxPay(s, n) : wx.showModal({
                title: "订单异常",
                content: "",
                showCancel: !1
            });
        }
    },
    switchTab: function(t) {
        var a = t.currentTarget.dataset.url, e = t.currentTarget.dataset.tab;
        "func" == e.type ? getApp().moduleBindTap(e) : getApp().turnToPage(a, !0);
    },
    swiperTab: function(t) {
        var a = this, e = t.detail.current, r = a.data.actives[e];
        a.setData({
            currentTab: e,
            activeIndex: r
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
        var a = this, r = a.data.actives, i = a.data.orders, s = r[t];
        s && e.apiRequest("appoit", "order_list", {
            data: {
                type: s
            },
            success: function(e) {
                "OK" == e.data.result && (i[t] = e.data.data, a.setData({
                    "prompt.hidden": !!e.data.data,
                    orders: i || [],
                    order_pro_rel: e.data.order_pro_rel || []
                }));
            }
        });
    },
    goPage: function(t) {
        var a = t.currentTarget.dataset.page, r = t.currentTarget.dataset.param || "", i = t.currentTarget.dataset.arg || "", s = "../" + a + "/" + a;
        if (r) s += "?" + r + "=" + i, console.log(s), e.navigateTo({
            url: s
        }); else if ("appoint_ratings" == a) {
            var n = t.currentTarget.dataset.img || "", o = t.currentTarget.dataset.oid || "", d = t.currentTarget.dataset.id || "";
            o && d && (s += "?img=" + n + "&oid=" + o + "&id=" + d, e.navigateTo({
                url: s
            }));
        }
        return !1;
    }
});