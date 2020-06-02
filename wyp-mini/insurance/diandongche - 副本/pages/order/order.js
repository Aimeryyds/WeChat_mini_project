var r = require("../../58268180480303CF3E40E9872402F6C0.js"), e = getApp();

Page({
    data: {
        currentIndex: "0",
        orderList: [],
        isPayOrderList: [],
        noPayOrderList: [],
        actions: [ {
            type: "primary",
            text: "再次激活"
        } ],
        loadModal: !1
    },
    onLoad: function(t) {
        r.GetToken();
        var a = this, n = {
            userToken: wx.getStorageSync("userToken")
        };
        a.setData({
            loadModal: !0
        }), r.GetTokenCallBack(function() {
            r.Requests_json(e.globalData.insuranceUrl + "/api/order/findOrderList", n).then(function(r) {
                a.setData({
                    loadModal: !1
                }), "0" == r.code && a.setData({
                    orderList: r.result.orderList,
                    isPayOrderList: r.result.isPayOrderList,
                    noPayOrderList: r.result.noPayOrderList
                });
            });
        });
    },
    onTabsChange: function(r) {
        this.setData({
            currentIndex: r.detail.key
        });
    },
    onSwiperChange: function(r) {
        this.setData({
            currentIndex: r.detail.current
        });
    },
    orderDetail: function(r) {
        var e = r.currentTarget.id;
        wx.navigateTo({
            url: "../orderDetail/orderDetail?orderId=" + e
        });
    },
    onAction: function(r) {
        var e = '{ "orderId":' + r.currentTarget.id + "}";
        wx.navigateTo({
            url: "../cform/cform?paramsData=" + e
        });
    }
});