var t, a = require("../../../utils/server"), e = require("../../../wxParse/wxParse.js"), n = wx.getStorageSync("utoken");

Page({
    data: {
        loading: !0
    },
    onLoad: function(a) {
        var e = this;
        t = a.id, n = wx.getStorageSync("utoken"), e.loadPageData();
    },
    loadPageData: function() {
        n = wx.getStorageSync("utoken");
        var o = this;
        a.sendRequest({
            url: "?r=wxapp.groups.goods",
            showToast: !1,
            data: {
                utoken: n,
                id: t
            },
            method: "GET",
            success: function(t) {
                if (t.data.result && o.setData({
                    data: t.data.result,
                    loading: !1
                }), "" != t.data.result.content) {
                    var a = t.data.result.content;
                    e.wxParse("contain", "html", a, o, 5);
                }
            }
        });
    },
    onShow: function() {
        this.loadPageData();
    },
    toback: function() {
        wx.navigateBack({
            delta: 1
        });
    },
    tocorder: function(t) {
        wx.reLaunch({
            url: "../confirmOrder/index?id=" + t.currentTarget.dataset.id + "&type=single"
        });
    },
    tooperation: function(t) {
        wx.navigateTo({
            url: "../openGroups/index?id=" + t.currentTarget.dataset.id + "&type=groups"
        });
    },
    onShareAppMessage: function() {
        var a = "/pages/groupbuy/detail/index?id=" + t;
        return {
            title: this.data.data.title,
            path: a
        };
    }
});