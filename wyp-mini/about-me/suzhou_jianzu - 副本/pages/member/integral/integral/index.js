var t = require("../../../../utils/server"), e = wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(t) {
        e = wx.getStorageSync("utoken"), this.loadingData(t);
    },
    loadingData: function(a) {
        e = wx.getStorageSync("utoken");
        var n = this;
        t.sendRequest({
            url: "?r=wxapp.creditshop.creditlog",
            data: {
                utoken: e
            },
            method: "GET",
            success: function(t) {
                n.setData({
                    credit: a.credit,
                    data: t.data.result
                });
            }
        });
    },
    torecording: function() {
        wx.navigateTo({
            url: "../recording/index"
        });
    }
});