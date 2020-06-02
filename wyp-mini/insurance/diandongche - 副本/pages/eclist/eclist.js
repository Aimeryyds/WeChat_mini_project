var e = require("../../58268180480303CF3E40E9872402F6C0.js"), r = getApp();

Page({
    data: {
        currentIndex: "0",
        orderList: [],
        isPayOrderList: [],
        noPayOrderList: [],
        loadModal: !1
    },
    onLoad: function(t) {
        console.log("options=" + t.currentIndex);
        var a = this, n = {
            userToken: wx.getStorageSync("userToken")
        };
        a.setData({
            loadModal: !0,
            currentIndex: t.currentIndex
        }), e.GetTokenCallBack(function() {
            e.Requests_json(r.globalData.insuranceUrl + "/api/order/findOrderList", n).then(function(e) {
                a.setData({
                    loadModal: !1
                }), "0" == e.code && a.setData({
                    orderList: e.result.orderList,
                    isPayOrderList: e.result.isPayOrderList,
                    noPayOrderList: e.result.noPayOrderList
                });
            });
        });
    },
    onTabsChange: function(e) {
        this.setData({
            currentIndex: e.detail.key
        });
    },
    onSwiperChange: function(e) {
        this.setData({
            currentIndex: e.detail.current
        });
    },
    orderDetail: function(e) {
        var r = e.currentTarget.id;
        wx.navigateTo({
            url: "../orderDetail/orderDetail?orderId=" + r
        });
    }
});