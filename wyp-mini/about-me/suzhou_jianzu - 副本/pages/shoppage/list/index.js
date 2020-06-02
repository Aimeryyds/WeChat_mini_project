var t, a, e = require("../../../utils/server"), s = 1, n = "", i = 1;

Page({
    data: {
        loading: !0,
        navindex: 1,
        refresh: !1,
        myKeyWord: ""
    },
    onLoad: function(t) {
        t && t.cateid && (n = t.cateid), i = 1, this.getList(i);
    },
    getList: function(s) {
        var i = this;
        wx.getLocation({
            type: "wgs84",
            success: function(d) {
                t = d.latitude, a = d.longitude, e.sendRequest({
                    url: "?r=wxapp.shop.list",
                    method: "GET",
                    showToast: !1,
                    data: {
                        lat: d.latitude,
                        lng: d.longitude,
                        site: 1,
                        keyword: i.data.myKeyWord,
                        cateid: n,
                        page: s
                    },
                    success: function(t) {
                        i.setData({
                            loading: !1,
                            data: t.data.result,
                            list: t.data.result.list
                        });
                    }
                });
            }
        });
    },
    onShow: function() {
        i = 1;
    },
    onPullDownRefresh: function(t) {
        this.getList(i);
    },
    onReachBottom: function() {
        var s = this;
        s.data.refresh || (s.setData({
            refresh: !0
        }), i += 1, e.sendRequest({
            url: "?r=wxapp.shop.list&lat=" + t + "&lng=" + a + "&site=1",
            data: {
                cateid: n,
                page: i,
                keyword: s.data.myKeyWord
            },
            method: "GET",
            success: function(t) {
                var a = [];
                for (var e in s.data.list) a.push(s.data.list[e]);
                if ("" != t.data.result.list) {
                    for (var n in t.data.result.list) a.push(t.data.result.list[n]);
                    s.setData({
                        refresh: !1
                    });
                } else i -= 1;
                s.setData({
                    list: a
                });
            }
        }));
    },
    merch: function(t) {
        wx.navigateTo({
            url: "../../goods/shop/shop?id=" + t.currentTarget.id
        });
    },
    sort: function(t) {
        var a = this;
        a.setData({
            navindex: t.currentTarget.id
        }), wx.getLocation({
            type: "wgs84",
            success: function(t) {
                e.sendRequest({
                    url: "?r=wxapp.shop.list",
                    method: "GET",
                    data: {
                        lat: t.latitude,
                        lng: t.longitude,
                        site: 1,
                        sorttype: 1,
                        range: s
                    },
                    success: function(t) {
                        a.setData({
                            data: t.data.result,
                            navindex: a.data.navindex
                        });
                    }
                });
            }
        });
    },
    down: function(t) {
        var a = this;
        a.setData({
            navindex: t.currentTarget.id
        }), 1 == a.data.navindex && a.setData({
            distance: !0
        });
    },
    distance: function(t) {
        s = t.target.dataset.index;
        var a = this;
        a.setData({
            distance: !1
        }), wx.getLocation({
            type: "wgs84",
            success: function(s) {
                e.sendRequest({
                    url: "?r=wxapp.shop.list",
                    method: "GET",
                    data: {
                        lat: s.latitude,
                        lng: s.longitude,
                        site: 1,
                        range: t.target.dataset.index
                    },
                    success: function(t) {
                        a.setData({
                            data: t.data.result,
                            navindex: a.data.navindex
                        });
                    }
                });
            }
        });
    },
    formSubmit: function(t) {
        var a = this;
        a.setData({
            myKeyWord: t.detail.value
        }), a.getList(i);
    },
    list_bd: function() {
        this.setData({
            navindex: 0
        });
    },
    phone: function(t) {
        wx.makePhoneCall({
            phoneNumber: t.target.dataset.index
        });
    },
    addr: function(t) {
        wx.openLocation({
            latitude: parseFloat(t.target.dataset.lat),
            longitude: parseFloat(t.target.dataset.lng),
            name: t.currentTarget.dataset.name,
            scale: 28
        });
    }
});