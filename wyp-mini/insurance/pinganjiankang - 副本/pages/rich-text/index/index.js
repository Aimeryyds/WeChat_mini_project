require("../../../utils/mBuriedPoint.js");

var t = getApp();

require("../../../utils/util.js");

Page({
    data: {
        nodes: ""
    },
    getStaticPage: function() {
        var e = this;
        wx.request({
            url: t.globalData.baseUrl + "/mgr/getStaticPage.do",
            data: {
                typeId: 2,
                productId: "A100000034"
            },
            method: "POST",
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            success: function(t) {
                console.log(t), t.data.content && e.setData({
                    nodes: t.data.content
                });
            },
            fail: function() {},
            complete: function() {}
        });
    },
    onLoad: function() {
        this.getStaticPage();
    }
});