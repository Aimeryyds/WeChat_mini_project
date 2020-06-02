var a = require("../../../utils/server"), t = wx.getStorageSync("utoken");

Page({
    data: {
        refresh: !1,
        loading: !0,
        cpage: 1,
        recgoods: []
    },
    onLoad: function(a) {
        var e = this;
        t = wx.getStorageSync("utoken"), Math.ceil(wx.getSystemInfoSync().windowWidth), 
        e.loadPageData(e.data.cpage);
    },
    loadPageData: function(e) {
        var o = this;
        a.sendRequest({
            url: "?r=wxapp.groups",
            showToast: !1,
            data: {
                utoken: t,
                page: e
            },
            method: "GET",
            success: function(a) {
                if (console.log(a.data.result), a.data.result) {
                    if ("" != a.data.result.recgoods) {
                        for (var t in a.data.result.recgoods) o.data.recgoods.push(a.data.result.recgoods[t]);
                        o.setData({
                            refresh: !1
                        });
                    }
                    o.setData({
                        advs: a.data.result.advs,
                        category: a.data.result.category,
                        recgoods: o.data.recgoods,
                        loading: !1
                    });
                }
            }
        });
    },
    onShow: function() {},
    toDetail: function(a) {
        wx.navigateTo({
            url: "../detail/index?id=" + a.currentTarget.dataset.id
        });
    },
    onReachBottom: function() {
        var a = this;
        a.data.refresh || (a.setData({
            refresh: !0
        }), a.data.cpage += 1, a.loadPageData(a.data.cpage));
    },
    toList: function(a) {
        console.log(a.currentTarget.dataset.id), wx.navigateTo({
            url: "../list/index?categoryid=" + a.currentTarget.dataset.id
        });
    }
});