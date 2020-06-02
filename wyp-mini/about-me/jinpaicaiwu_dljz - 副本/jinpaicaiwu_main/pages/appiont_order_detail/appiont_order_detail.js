!function(t) {
    t && t.__esModule;
}(require("../../wxParse/util.js"));

var t = require("../../wxParse/common.js"), a = getApp();

Page({
    data: {
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
        getStatusId: ""
    },
    onLoad: function(t) {
        var e = t.oid, o = (wx.getStorageSync("openid"), this);
        e ? a.apiRequest("appoit", "order_detail", {
            data: {
                oid: e
            },
            success: function(t) {
                if ("OK" == t.data.result) {
                    var a = t.data.data.disass;
                    o.setData({
                        order: t.data.data,
                        disass: a
                    });
                } else "2" == t.data.errmsg && wx.navigateTo({
                    url: "../login/login"
                });
            }
        }) : (wx.showToast({
            title: "参数错误！",
            duration: 2500
        }), wx.navigateBack({
            delta: 1
        }));
    },
    onUnload: function() {},
    onShow: function() {},
    confirmOrders: function(t) {
        var e = this.data.order, o = this;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认服务",
            success: function(t) {
                t.confirm ? a.apiRequest("appoit", "orderToGet", {
                    data: {
                        oid: order_id
                    },
                    success: function(t) {
                        if ("OK" == t.data.result) wx.showToast({
                            title: "确认成功"
                        }), e.delivery_status_no = 4, o.setData({
                            order: e
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
    rating: function(t) {},
    payOrders: function(a) {
        var e = this.data.order.id, o = this.data.disass.total_price;
        e && o ? t.wxPay(e, o) : wx.showModal({
            title: "订单异常",
            content: "",
            showCancel: !1
        });
    },
    cancelOrders: function() {
        var t = this, e = t.data.order, o = e.id;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认取消该订单",
            success: function(s) {
                s.confirm ? a.apiRequest("appoit", "orderOperation", {
                    data: {
                        oid: o,
                        otype: "cancel"
                    },
                    success: function(a) {
                        "OK" == a.data.result ? (e.order_status = 4, t.setData({
                            order: e
                        })) : wx.showToast({
                            title: "取消失败"
                        });
                    }
                }) : s.cancel && console.log("用户点击取消");
            }
        });
    },
    deleteOrderList: function() {
        var t = this.data.oid;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认删除该订单",
            success: function(e) {
                e.confirm ? a.apiRequest("appoit", "orderOperation", {
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
                }) : e.cancel && console.log("用户点击取消");
            }
        });
    },
    goPage: function(t) {
        var e = t.currentTarget.dataset.page, o = t.currentTarget.dataset.img || "", s = t.currentTarget.dataset.oid || "", r = t.currentTarget.dataset.id || "", i = "../" + e + "/" + e;
        s && r && (i += "?img=" + o + "&oid=" + s + "&id=" + r, a.navigateTo({
            url: i
        }));
    }
});