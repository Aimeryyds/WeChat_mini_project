var t = require("../../../../utils/server");

wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        list: [ "消费记录", "充值记录" ],
        creditType: "",
        sub: "0",
        typeid: "2"
    },
    onLoad: function(t) {
        var e = this, a = t.creditType;
        e.setData({
            creditType: a
        }), "credit1" == t.creditType ? wx.setNavigationBarTitle({
            title: "积分明细"
        }) : wx.setNavigationBarTitle({
            title: "余额明细"
        });
    },
    onShow: function() {
        var t = this;
        t.getIntegralSum(t.data.typeid, t.data.creditType);
    },
    getIntegralSum: function(e, a) {
        var i = this, r = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.member.vipcard.getCreditLog",
            showToast: !1,
            data: {
                utoken: r,
                typeid: e,
                credittype: a
            },
            method: "GET",
            success: function(t) {
                t.data.result && i.setData({
                    consumption: t.data.result
                }), i.setData({
                    loading: !1
                });
            }
        });
    },
    clickTitle: function(t) {
        var e = this, a = t.currentTarget.dataset.index, i = e.data.creditType;
        if (e.setData({
            sub: a
        }), 0 == e.data.sub) r = 2; else var r = 1;
        e.getIntegralSum(r, i);
    }
});