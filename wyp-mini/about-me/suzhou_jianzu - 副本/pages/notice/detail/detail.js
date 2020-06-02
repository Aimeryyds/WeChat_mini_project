var a = require("../../../utils/server"), t = require("../../../wxParse/wxParse.js");

Page({
    data: {
        detail: [],
        article: ""
    },
    onLoad: function(a) {
        var t = a.objectId;
        this.getDetail(t);
    },
    getDetail: function(e) {
        var i = this;
        a.sendRequest({
            url: "?r=wxapp.notice.detail&aid=" + e,
            method: "GET",
            success: function(a) {
                i.data.detail = a.data.result;
                var e = i.data.detail.detail;
                t.wxParse("article", "html", e, i, 5), i.setData({
                    detail: i.data.detail
                });
            }
        });
    }
});