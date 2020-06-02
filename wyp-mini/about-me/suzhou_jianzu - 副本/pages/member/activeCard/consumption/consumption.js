var t = require("../../../../utils/server");

wx.getStorageSync("utoken");

Page({
    data: {
        loading: !1,
        list: [ "消费记录", "充值记录" ]
    },
    onLoad: function(t) {},
    onShow: function() {
        var e = this;
        e.setData({
            sub: 0
        });
        var a = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.member.vipcard.getVipcardLog&utoken=" + a + "&typeid=2",
            showToast: !1,
            method: "GET",
            success: function(t) {
                t.data.result && e.setData({
                    loading: !1,
                    consumption: t.data.result
                });
            }
        });
    },
    clickTitle: function(e) {
        var a = this, s = e.currentTarget.dataset.index;
        if (a.setData({
            sub: s
        }), 0 == a.data.sub) r = 2; else var r = 1;
        var n = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.member.vipcard.getVipcardLog&utoken=" + n + "&typeid=" + r,
            data: {},
            method: "GET",
            success: function(t) {
                t.data.result && a.setData({
                    consumption: t.data.result
                });
            }
        });
    }
});