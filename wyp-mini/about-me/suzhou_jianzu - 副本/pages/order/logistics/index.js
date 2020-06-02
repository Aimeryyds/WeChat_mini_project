var t = require("../../../utils/server"), a = wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(t) {
        a = wx.getStorageSync("utoken");
        var e = this;
        e.setData({
            orderid: t.order_id
        }), e.loadData();
    },
    toStart: function() {
        wx.reLaunch({
            url: "../../index/index"
        });
    },
    loadData: function() {
        var e = this;
        t.sendRequest({
            url: "?r=wxapp.order.index.express",
            data: {
                utoken: a,
                id: e.data.orderid
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    data: t.data.result,
                    length: t.data.result[1].length
                });
                var a;
                a = e.data.data[2].expresssn ? "配送中" : "待发货", "" != t.data.result[1] && t.data.result[1][0].step.indexOf("已签收") > 0 && (a = "已签收"), 
                e.setData({
                    str: a
                });
            }
        });
    }
});