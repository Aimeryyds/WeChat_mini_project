var t = require("../../utils/server");

Page({
    data: {},
    onLoad: function(e) {
        var a = this;
        t.getJSON("/Store/getStoreClass", function(t) {
            for (var e = t.data, s = 0; s < e.length; s++) 0 == s ? (e[s].select = 1, a.getStoreList(e[s].sc_id)) : e[s].select = 0;
            a.setData({
                store_class: e
            });
        });
    },
    getStoreList: function(e) {
        var a = this;
        t.getJSON("/Store/getStores", {
            cid: e
        }, function(t) {
            var e = t.data;
            a.setData({
                stores: e
            });
        });
    },
    goods: function(t) {
        var e = t.currentTarget.dataset.id;
        wx.navigateTo({
            url: "goods?id=" + e
        });
    },
    take: function(t) {
        var e = t.currentTarget.dataset.phone;
        wx.makePhoneCall({
            phoneNumber: e
        });
    },
    onClickClass: function(t) {
        for (var e = t.currentTarget.dataset.id, a = this.data.store_class, s = 0; s < a.length; s++) a[s].sc_id == e ? (a[s].select = 1, 
        this.getStoreList(a[s].sc_id)) : a[s].select = 0;
        this.setData({
            store_class: a
        });
    }
});