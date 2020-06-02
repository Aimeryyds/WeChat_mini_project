var t = require("../../../utils/server"), a = wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(e) {
        a = wx.getStorageSync("utoken");
        var r = this;
        t.sendRequest({
            url: "?r=wxapp.activity.bargin",
            data: {
                utoken: a
            },
            method: "GET",
            success: function(t) {
                if (console.log(t), r.setData({
                    data: t.data.result.res
                }), t.data.result.res) {
                    var a = [];
                    for (var e in t.data.result.res) a.push(t.data.result.res[e]);
                    r.setData({
                        mid: a[0].mid
                    });
                }
            }
        });
    },
    todetail: function(t) {
        wx.navigateTo({
            url: "../detail/index?id=" + t.currentTarget.dataset.id + "&mid=" + t.currentTarget.dataset.mid
        });
    },
    formSubmit: function(e) {
        var r = this;
        t.sendRequest({
            url: "?r=wxapp.activity.bargin",
            data: {
                utoken: a,
                keywords: e.detail.value
            },
            method: "POST",
            success: function(t) {
                r.setData({
                    data: t.data.result.res
                });
            }
        });
    }
});