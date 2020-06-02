var a = require("../../../utils/server"), t = wx.getStorageSync("utoken");

Page({
    data: {
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        refresh: !1
    },
    onLoad: function(a) {
        var t = this;
        t.setData({
            mid: a.mid
        }), t.loadPageData();
    },
    toDetail: function(a) {
        wx.navigateTo({
            url: "../detail/index?id=" + a.currentTarget.dataset.id
        });
    },
    loadPageData: function() {
        var e = this;
        a.sendRequest({
            url: "?r=wxapp.activity.bargin.act",
            data: {
                mid: e.data.mid,
                utoken: t
            },
            method: "GET",
            success: function(a) {
                console.log(a), e.setData({
                    data: a.data.result
                });
            }
        });
    },
    tobargain: function(a) {
        var t = this;
        wx.navigateTo({
            url: "../bargain/index?id=" + a.currentTarget.dataset.id + "&mid=" + t.data.mid
        });
    }
});