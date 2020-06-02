getApp();

var e, t = require("../../utils/functions"), a = require("../../utils/util"), s = require("../../wxParse/wxParse.js");

Page({
    data: {
        pages: {}
    },
    onLoad: function(t) {
        e = this, this.setData({
            "pages.id": t.pagesId
        });
    },
    onShow: function() {
        this.getPagesInfo();
    },
    getPagesInfo: function() {
        t.getPagesInfo(e.data.pages.id, function(t) {
            if (null == t.pages) return a.toast("页面不存在！"), void setTimeout(function() {
                wx.navigateBack();
            }, 1e3);
            t.pages.content && s.wxParse("description", "html", t.pages.content, e, 0), wx.setNavigationBarTitle({
                title: t.pages.title
            }), e.setData({
                pages: t.pages
            });
        });
    },
    onShareAppMessage: function() {
        return {
            title: e.data.pages.title,
            path: "/pages/singlepages/singlepages?pagesId=" + e.data.pages.id
        };
    }
});