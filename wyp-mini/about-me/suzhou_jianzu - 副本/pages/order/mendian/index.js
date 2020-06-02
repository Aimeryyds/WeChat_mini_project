var t, e, a, s = require("../../../utils/server"), n = 1, r = 1;

Page({
    data: {
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        navindex: 0,
        refresh: !1
    },
    onLoad: function(n) {
        var r = this;
        console.log(n), n.men && (a = n.men), n.merchid ? wx.getLocation({
            type: "wgs84",
            success: function(a) {
                t = a.latitude, e = a.longitude, s.sendRequest({
                    url: "?r=wxapp.shop.list.getshop&lat=" + a.latitude + "&lng=" + a.longitude + "&site=1",
                    data: {
                        merchid: n.merchid
                    },
                    method: "GET",
                    success: function(t) {
                        r.setData({
                            data: t.data.result
                        });
                    }
                });
            }
        }) : wx.getLocation({
            type: "wgs84",
            success: function(a) {
                t = a.latitude, e = a.longitude, s.sendRequest({
                    url: "?r=wxapp.shop.list.getshop&lat=" + a.latitude + "&lng=" + a.longitude + "&site=1",
                    data: {
                        merchid: "0"
                    },
                    method: "GET",
                    success: function(t) {
                        r.setData({
                            data: t.data.result
                        });
                    }
                });
            }
        });
    },
    onPullDownRefresh: function(t) {
        wx.stopPullDownRefresh();
    },
    merch: function(t) {
        if ("1" == a) {
            var e = {
                active: "2",
                carrierid: t.currentTarget.id,
                realname: t.currentTarget.dataset.realname,
                mobile: t.currentTarget.dataset.moblie,
                storename: t.currentTarget.dataset.storename,
                address: t.currentTarget.dataset.address
            };
            wx.setStorageSync("carrierData", e), console.log(wx.getStorageSync("carrierData")), 
            wx.navigateBack({
                delta: 1
            });
        }
    },
    sort: function(t) {
        var e = this;
        e.setData({
            navindex: t.currentTarget.id
        }), wx.getLocation({
            type: "wgs84",
            success: function(t) {
                s.sendRequest({
                    url: "?r=wxapp.shop.list.getshop",
                    method: "GET",
                    data: {
                        lat: t.latitude,
                        lng: t.longitude,
                        site: 1,
                        sorttype: 1,
                        range: n
                    },
                    success: function(t) {
                        e.setData({
                            data: t.data.result
                        });
                    }
                });
            }
        });
    },
    down: function(t) {
        this.setData({
            navindex: t.currentTarget.id
        });
    },
    distance: function(t) {
        n = t.target.dataset.index;
        var e = this;
        wx.getLocation({
            type: "wgs84",
            success: function(a) {
                s.sendRequest({
                    url: "?r=wxapp.shop.list.getshop",
                    method: "GET",
                    data: {
                        lat: a.latitude,
                        lng: a.longitude,
                        site: 1,
                        range: t.target.dataset.index
                    },
                    success: function(t) {
                        e.setData({
                            data: t.data.result
                        });
                    }
                });
            }
        }), e.setData({
            navindex: 0
        });
    },
    formSubmit: function(t) {
        var e = this;
        wx.getLocation({
            type: "wgs84",
            success: function(a) {
                s.sendRequest({
                    url: "?r=wxapp.shop.list.getshop",
                    method: "GET",
                    data: {
                        lat: a.latitude,
                        lng: a.longitude,
                        site: 1,
                        keyword: t.detail.value
                    },
                    success: function(t) {
                        e.setData({
                            data: t.data.result
                        });
                    }
                });
            }
        });
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
            scale: 28,
            success: function(t) {}
        });
    },
    bottom: function(a) {
        var n = this;
        n.data.refresh || (n.setData({
            refresh: !0
        }), r += 1, wx.getLocation({
            type: "wgs84",
            success: function(a) {
                t = a.latitude, e = a.longitude, s.sendRequest({
                    url: "?r=wxapp.shop.list.getshop&lat=" + a.latitude + "&lng=" + a.longitude + "&site=1",
                    data: {
                        page: r
                    },
                    method: "GET",
                    success: function(t) {
                        var e = [];
                        for (var a in n.data.data) e.push(n.data.data[a]);
                        if ("" == t.data.result) r -= 1; else {
                            for (var s in t.data.result) e.push(t.data.result[s]);
                            n.setData({
                                data: e,
                                refresh: !1
                            });
                        }
                        if (t.statusCode && 200 != t.statusCode) return wx.hideToast(), void n.showModal({
                            content: "" + t.errMsg
                        });
                    }
                });
            }
        }));
    }
});