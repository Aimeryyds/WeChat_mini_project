var t = require("../../../../utils/server"), e = wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function() {
        e = wx.getStorageSync("utoken"), this.loadingData();
    },
    loadingData: function() {
        e = wx.getStorageSync("utoken");
        var a = this;
        t.sendRequest({
            url: "?r=wxapp.creditshop.log",
            data: {
                utoken: e
            },
            method: "GET",
            success: function(t) {
                console.log(t), a.setData({
                    data: t.data.result
                });
            }
        });
    },
    toreceived: function(t) {
        console.log(t.currentTarget.dataset.id), wx.navigateTo({
            url: "../received/index?id=" + t.currentTarget.dataset.id
        });
    }
});