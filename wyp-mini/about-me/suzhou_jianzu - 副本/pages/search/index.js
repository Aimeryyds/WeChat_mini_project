var t = require("../../utils/server");

Page({
    search: function(t) {
        var e = this.data.keywords;
        wx.navigateTo({
            url: "../../../../goods/list/list?keywords=" + e
        });
    },
    bindChange: function(t) {
        var e = t.detail.value;
        this.setData({
            keywords: e
        });
    },
    onLoad: function(e) {
        var s = this;
        t.sendRequest({
            url: "?r=wxapp.goods.get_hot_keywords",
            method: "GET",
            success: function(t) {
                console.dir(t);
                var e = t.data.result.hot_keywords;
                s.setData({
                    keyword: e
                });
            }
        });
    },
    click: function(t) {
        var e = t.currentTarget.dataset.word;
        wx.navigateTo({
            url: "../../../../goods/list/list?keywords=" + e
        });
    }
});