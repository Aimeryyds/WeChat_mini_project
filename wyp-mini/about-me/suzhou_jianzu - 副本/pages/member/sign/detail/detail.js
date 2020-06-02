getApp();

var t = require("../../../../utils/server");

wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0,
        log: "",
        detailList: []
    },
    onLoad: function(a) {
        var e = this, s = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.sign.getrecords",
            showToast: !1,
            data: {
                utoken: s
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    loading: !1,
                    detailList: t.data.result.list
                });
                for (var a = 0; a < e.data.detailList.length; a++) e.data.detailList[a].date = e.data.detailList[a].date.substr(0, 10), 
                e.setData({
                    detailList: e.data.detailList
                });
            }
        });
    }
});