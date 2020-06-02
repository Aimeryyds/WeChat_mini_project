var t = require("../../utils/server.js"), e = wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(a) {
        var n = this, i = (wx.getExtConfigSync ? wx.getExtConfigSync() : {}).uniacid;
        e = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.indexpage.getdetail",
            data: {
                id: a.cate
            },
            method: "GET",
            success: function(s) {
                var c = a.cate;
                n.setData({
                    wl: {
                        i: i,
                        r: "adactivity",
                        cate: a.cate,
                        utoken: e,
                        temp_id: s.data.result.temp_id
                    }
                }), t.sendRequest({
                    url: "?r=wxapp.indexpage.getUrl",
                    data: {
                        cate: c
                    },
                    method: "GET",
                    success: function(t) {
                        n.setData({
                            wl: {
                                url: t.data.result.domain
                            }
                        });
                    }
                });
            }
        });
    }
});