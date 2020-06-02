var a = require("../../58268180480303CF3E40E9872402F6C0.js"), r = getApp();

Page({
    data: {
        cardzm: r.globalData.staticUrl + "/cardzm.png",
        orderInsrcardList: [],
        loadModal: !1
    },
    onLoad: function(e) {
        var t = this;
        t.setData({
            loadModal: !0
        });
        var d = wx.getStorageSync("userToken");
        a.GetTokenCallBack(function() {
            a.Requests_json(r.globalData.insuranceUrl + "/ebike/" + d + "/findOrderInsrcardList", {}).then(function(r) {
                t.setData({
                    loadModal: !1
                }), "0" == r.code ? t.setData({
                    orderInsrcardList: r.result
                }) : a.AlertMsg(r.msg);
            });
        });
    },
    getOrderDetail: function(a) {
        var r = a.currentTarget.dataset.orderid;
        console.info(r), wx.navigateTo({
            url: "../insrcardOrderDetail/insrcardOrderDetail?orderId=" + r
        });
    }
});