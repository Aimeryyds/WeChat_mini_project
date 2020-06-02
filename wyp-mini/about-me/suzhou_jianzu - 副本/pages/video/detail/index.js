var e = require("../../../utils/server");

wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(t) {
        var a = wx.getStorageSync("utoken"), o = this;
        e.sendRequest({
            url: "?r=wxapp.video&vid=" + t.id,
            method: "GET",
            data: {
                utoken: a
            },
            success: function(e) {
                console.log(e), o.setData({
                    data: e.data.result
                });
            }
        });
    }
});