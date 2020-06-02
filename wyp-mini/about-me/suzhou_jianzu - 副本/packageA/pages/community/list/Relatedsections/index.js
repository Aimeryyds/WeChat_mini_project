var t = require("../../../../../utils/server"), e = wx.getStorageSync("utoken");

Page({
    data: {},
    onLoad: function(a) {
        var n = this;
        t.sendRequest({
            url: "?r=wxapp.sns.board.relate",
            data: {
                id: a.id,
                utoken: e
            },
            method: "GET",
            success: function(t) {
                n.setData({
                    data: t.data.result.list
                });
            }
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    toIndex: function(t) {
        console.log(t.currentTarget.dataset.id), wx.navigateBack({
            delta: 1,
            id: t.currentTarget.dataset.id
        });
    }
});