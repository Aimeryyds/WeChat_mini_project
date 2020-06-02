function a(a) {
    var t = new Date(1e3 * a);
    return t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate() + " " + t.getHours() + ":" + t.getMinutes() + ":" + t.getSeconds();
}

var t = require("../../../../utils/server"), e = wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0
    },
    onLoad: function(a) {
        e = wx.getStorageSync("utoken");
        var t = this;
        t.setData({
            id: a.id
        }), t.loadingData();
    },
    loadingData: function() {
        e = wx.getStorageSync("utoken");
        var o = this;
        t.sendRequest({
            url: "?r=wxapp.creditshop.log.detail&id=" + o.data.id,
            showToast: !1,
            data: {
                utoken: e
            },
            method: "GET",
            success: function(t) {
                var e = t.data.result;
                if (e.log.createtime = a(e.log.createtime), e.log.paytime && (e.log.paytime = a(e.log.paytime)), 
                o.setData({
                    loading: !1,
                    data: e
                }), o.data.data.goods.money || o.data.data.goods.money) {
                    var d = parseFloat(o.data.data.goods.money) + parseFloat(o.data.data.goods.dispatch);
                    o.setData({
                        sum: d
                    });
                }
            }
        });
    },
    pay: function() {
        var a = this;
        wx.reLaunch({
            url: "../../../groupbuy/cashier/index?orderid=" + a.data.data.goods.id + "&addressid=" + a.data.data.log.address.id + "&name=integral"
        });
    },
    toindex: function() {
        wx.reLaunch({
            url: "../../../index/index"
        });
    }
});