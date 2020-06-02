var e = require("../../../utils/server");

Page({
    data: {
        loading: !0
    },
    onLoad: function(t) {
        var a = this, r = wx.getStorageSync("utoken");
        e.sendRequest({
            url: "?r=wxapp.services.order.get_list",
            showToast: !1,
            data: {
                utoken: r
            },
            method: "GET",
            success: function(e) {
                a.setData({
                    loading: !1,
                    data: e.data.result
                });
            }
        });
    },
    test: function(e) {
        wx.navigateTo({
            url: "../list_detail/index?order_id=" + e.currentTarget.id
        });
    },
    pay: function(e) {
        var t = e.currentTarget.dataset.index, a = this.data.data.list[t].orderid;
        wx.navigateTo({
            url: "../../order/orderpay/payment?order_id=" + a + "&tabindex=1"
        });
    },
    delete: function(t) {
        var a = this, r = t.currentTarget.dataset.index, s = this.data.data.list[r].orderid;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定删除订单吗？",
            success: function(t) {
                if (t.confirm) {
                    var r = wx.getStorageSync("utoken");
                    e.sendRequest({
                        url: "?r=wxapp.services.order.delete",
                        data: {
                            utoken: r,
                            id: s
                        },
                        method: "GET",
                        success: function(t) {
                            e.sendRequest({
                                url: "?r=wxapp.services.order.get_list",
                                data: {
                                    utoken: r
                                },
                                method: "GET",
                                success: function(e) {
                                    a.setData({
                                        data: e.data.result
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    },
    evaluation: function(e) {
        var t = e.currentTarget.dataset.index;
        wx.navigateTo({
            url: "../services_pinjia/index?order_id=" + t
        });
    },
    cancel: function(t) {
        var a = t.currentTarget.dataset.index, r = this.data.data.list[a].orderid, s = this;
        wx.showModal({
            title: "提示",
            showCancel: !0,
            content: "确定取消订单吗？",
            success: function(t) {
                if (t.confirm) {
                    var a = wx.getStorageSync("utoken");
                    e.sendRequest({
                        url: "?r=wxapp.services.order.cancle",
                        data: {
                            utoken: a,
                            id: r
                        },
                        method: "GET",
                        success: function(t) {
                            e.sendRequest({
                                url: "?r=wxapp.services.order.get_list",
                                data: {
                                    utoken: a
                                },
                                method: "GET",
                                success: function(e) {
                                    s.setData({
                                        data: e.data.result
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    }
});