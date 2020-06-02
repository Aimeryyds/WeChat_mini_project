var t = getApp();

Page({
    data: {
        currentTab: 0,
        orderList: [],
        allLength: 0,
        to_be_paidLength: 0,
        has_paidLength: 0,
        finishLength: 0,
        baseUrl: t.globalData.baseUrl,
        to_be_paidSel: !1
    },
    requestOrders: function() {
        var e = this;
        wx.getStorageSync("accessToken") || t.getUserInfo(), wx.request({
            url: t.globalData.baseUrl + "/miniapp/user/orders",
            method: "POST",
            data: {
                accessToken: wx.getStorageSync("accessToken")
            },
            success: function(a) {
                if ("03" != a.data.status) {
                    var n = a.data.data, s = 0, o = 0, r = 0, c = 0;
                    if (n.length > 0) {
                        s = 1;
                        for (var i = 0; i < n.length; i++) {
                            var l = n[i].state;
                            "to_be_paid" == l || "01" == l || "02" == l || "03" == l ? (o = 1, n[i].stateName = "待付款") : "has_paid" == l || "04" == l || "05" == l || "06" == l || "07" == l || "08" == l ? (r = 1, 
                            n[i].stateName = "已付款") : "finish" == l || "09" == l ? (c = 1, n[i].stateName = "已完成") : "cancel" == l ? (c = 1, 
                            n[i].stateName = "订单取消") : "overdue" == l && (c = 1, n[i].stateName = "订单过期"), n[i].imgIcon = n[i].imgUrl ? n[i].imgUrl : "".concat(t.globalData.baseUrl, "/image/product_icon/").concat(n[i].imgIcon || n[i].productId, ".jpg");
                        }
                    }
                    e.setData({
                        orderList: n,
                        allLength: s,
                        to_be_paidLength: o,
                        has_paidLength: r,
                        finishLength: c
                    });
                } else wx.showModal({
                    content: "登录超时，请重新登录",
                    showCancel: !1,
                    success: function(t) {
                        t.confirm ? wx.navigateTo({
                            url: "../login/login"
                        }) : t.cancel && console.log("用户点击取消");
                    }
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "请求失败，请稍候再试"
                });
            }
        });
    },
    onLoad: function() {},
    onShow: function() {
        this.requestOrders(), wx.getStorageSync("to_be_paidSel") && this.setData({
            currentTab: 1
        });
    },
    swichNav: function(t) {
        if (this.data.currentTab === t.target.dataset.current) return !1;
        this.setData({
            currentTab: t.target.dataset.current
        });
    },
    payOrder: function(t) {
        var e = t.currentTarget.dataset.orderid;
        this.wxpay(e);
    },
    orderDetail: function(t) {
        wx.setStorageSync("orderDetail", t.currentTarget.dataset.orderthis), wx.navigateTo({
            url: "../orderdetail/orderdetail"
        });
    },
    wxpay: function(e) {
        var a = new Object();
        a.orderId = e, a.accessToken = wx.getStorageSync("accessToken");
        var n = JSON.stringify(a) + "";
        console.log(n), wx.request({
            url: t.globalData.baseUrl + "/miniapp/wxpay?c=" + t.globalData.fromChannel,
            data: n,
            method: "POST",
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if ("00" == t.data.status) {
                    var a = t.data.data;
                    wx.requestPayment({
                        timeStamp: a.timeStamp,
                        nonceStr: a.noncestr,
                        package: a.packaging,
                        signType: a.signType,
                        paySign: a.paySign,
                        success: function(t) {
                            wx.navigateTo({
                                url: "../payResult/index?orderId=" + e
                            });
                        },
                        fail: function() {},
                        complete: function() {}
                    });
                } else wx.showModal({
                    title: "提示",
                    content: t.data.message
                });
            },
            fail: function() {},
            complete: function() {}
        });
    },
    cancelOrder: function(e) {
        var a = this, n = e.currentTarget.dataset.orderid;
        console.log(n), wx.request({
            url: t.globalData.baseUrl + "/miniapp/user/cancelOrder",
            method: "POST",
            data: {
                orderId: n,
                accessToken: wx.getStorageSync("accessToken")
            },
            success: function(t) {
                console.log(t), "00" == t.data.status && (wx.showToast({
                    title: "取消成功",
                    duration: 1e3
                }), a.requestOrders()), "01" == t.data.status && wx.showToast({
                    title: "取消失败，请稍候再试"
                });
            },
            fail: function(t) {
                wx.showToast({
                    title: "请求失败，请稍候再试"
                });
            }
        });
    }
});