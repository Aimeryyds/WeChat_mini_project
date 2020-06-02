var t, a = require("../../../utils/server"), e = wx.getStorageSync("utoken"), s = 1, r = [];

Page({
    data: {
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        refresh: !1,
        loading: !0
    },
    onLoad: function(t) {
        var a = this;
        e = wx.getStorageSync("utoken"), a.setData({
            categoryid: t.categoryid
        }), a.loadPageData();
    },
    toDetail: function(t) {
        wx.navigateTo({
            url: "../detail/index?id=" + t.currentTarget.dataset.id
        });
    },
    loadPageData: function() {
        var t = this;
        a.sendRequest({
            url: "?r=wxapp.groups.category.get_list",
            showToast: !1,
            data: {
                utoken: e,
                category: t.data.categoryid,
                page: s
            },
            method: "GET",
            success: function(a) {
                t.setData({
                    data: a.data.result.list,
                    loading: !1
                });
                for (var e in a.data.result.list) r.push(a.data.result.list[e]);
            }
        });
    },
    bindinput: function(a) {
        console.log(a.detail.value), t = a.detail.value ? a.detail.value : "";
    },
    formSubmit: function(i) {
        r = [];
        var o = this;
        a.sendRequest({
            url: "?r=wxapp.groups.category.get_list",
            data: {
                utoken: e,
                category: o.data.categoryid,
                page: s,
                keyword: t
            },
            method: "GET",
            success: function(t) {
                o.setData({
                    data: t.data.result.list
                });
                for (var a in t.data.result.list) r.push(t.data.result.list[a]);
            }
        });
    },
    bottom: function(t) {
        var i = this;
        i.data.refresh || (i.setData({
            refresh: !0
        }), s += 1, a.sendRequest({
            url: "?r=wxapp.groups.category.get_list",
            data: {
                utoken: e,
                category: i.data.categoryid,
                page: s
            },
            method: "GET",
            success: function(t) {
                if ("" == t.data.result.list) s -= 1; else {
                    for (var a in t.data.result.list) r.push(t.data.result.list[a]);
                    i.setData({
                        refresh: !1
                    });
                }
                i.setData({
                    data: r
                });
            }
        }));
    }
});