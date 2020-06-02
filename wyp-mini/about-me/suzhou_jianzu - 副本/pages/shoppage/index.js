var e = require("../../utils/server");

Page({
    data: {
        id: ""
    },
    onLoad: function(e) {
        console.log(e);
        this.setData({
            id: e.id
        }), this.loadPageData();
    },
    loadPageData: function() {
        var t = this;
        e.sendRequest({
            url: "?r=wxapp.indexpage.getmerchpage&merchid=" + t.data.id,
            method: "GET",
            success: function(e) {
                console.log(e), t.setData({
                    data: e.data
                });
            }
        });
    },
    getToPage: function(t) {
        e.getToPage(t);
    },
    search: function(e) {
        wx.navigateTo({
            url: "../search/index"
        });
    },
    getInviteCode: function(e) {
        void 0 != e.uid && wx.showToast({
            title: "来自用户:" + e.uid + "的分享",
            icon: "success",
            duration: 2e3
        });
    },
    onShareAppMessage: function() {
        return console.dir(this.userinfo), {
            title: "小程序：" + this.userinfo.name,
            path: "/pages/index/index?uid=4719784"
        };
    }
});