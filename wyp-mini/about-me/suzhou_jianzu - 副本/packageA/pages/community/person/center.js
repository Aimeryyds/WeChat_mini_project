var t = require("../../../../utils/server"), e = wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(a) {
        e = wx.getStorageSync("utoken"), console.log(a);
        var o = this;
        o.setData({
            pid: a.pid,
            bid: a.bid
        }), t.sendRequest({
            url: "?r=wxapp.sns.user",
            data: {
                id: a.pid,
                utoken: e
            },
            method: "GET",
            success: function(t) {
                console.log(t.data.result), o.setData({
                    data: t.data.result
                });
            }
        });
    },
    tolist: function(t) {
        console.log(t.currentTarget.dataset.bid), wx.navigateBack({
            delta: 2,
            bid: t.currentTarget.dataset.bid
        });
    },
    toTopic: function(t) {
        console.log(t.currentTarget.dataset.pid), wx.navigateBack({
            delta: 1,
            pid: t.currentTarget.dataset.pid
        });
    }
});