var t = require("../../../utils/server"), e = wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(a) {
        e = wx.getStorageSync("utoken");
        var s = this;
        t.sendRequest({
            url: "?r=wxapp.commission.log.orders&utoken=" + e + "&id=" + a.id,
            data: "",
            success: function(t) {
                console.log(t);
                var e = t.data.result.list;
                s.setData({
                    data: e
                });
            }
        });
    }
});