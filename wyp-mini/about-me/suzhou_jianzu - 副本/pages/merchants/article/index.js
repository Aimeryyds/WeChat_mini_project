var t = require("../../../utils/server");

Page({
    data: {},
    onLoad: function(t) {
        this.loadPageData();
    },
    loadPageData: function() {
        var a = this;
        t.sendRequest({
            url: "?r=wxarticle.list.getmerchlist&merchid=3",
            method: "GET",
            success: function(t) {
                console.log(t), a.setData({
                    data: t.data
                });
            }
        });
    },
    getToPage: function(a) {
        t.getToPage(a);
    }
});