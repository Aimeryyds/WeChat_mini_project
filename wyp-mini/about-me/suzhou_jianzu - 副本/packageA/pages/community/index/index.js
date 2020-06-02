var t = require("../../../../utils/server"), e = wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(a) {
        e = wx.getStorageSync("utoken");
        var n = this;
        t.sendRequest({
            url: "?r=wxapp.sns",
            data: {
                utoken: e
            },
            method: "GET",
            success: function(t) {
                n.setData({
                    data: t.data.result
                });
            }
        });
    },
    toList: function(t) {
        wx.navigateTo({
            url: "../list/index/index?id=" + t.currentTarget.dataset.id
        });
    },
    toplate: function(t) {
        console.log(t.currentTarget.dataset.id), wx.navigateTo({
            url: "../plate/index?id=" + t.currentTarget.dataset.id
        });
    },
    plate: function(t) {
        wx.navigateTo({
            url: "../plate/index"
        });
    }
});