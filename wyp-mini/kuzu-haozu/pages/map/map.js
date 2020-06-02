var t = getApp(), a = require("../../utils/qqmap-wx-jssdk.min.js"), e = require("../../utils/point.js"), n = new a({
    key: t.globalData.tencentMapKey
});

Page({
    data: {
        contHeight: 940,
        bottomHeight: 264,
        curr: 1,
        point: {},
        lat: "",
        lng: "",
        name: "",
        address: "",
        share: 0,
        markers: []
    },
    onLoad: function(t) {
        var a = this;
        a.setData({
            share: t.share ? t.share : 0
        });
        var i = wx.createSelectorQuery();
        i.select("#map_area").boundingClientRect(), i.exec(function(t) {
            a.setData({
                contHeight: t[0].height
            });
        });
        var o = wx.createSelectorQuery();
        o.select("#map_text").boundingClientRect(), o.exec(function(t) {
            a.setData({
                bottomHeight: t[0].height
            });
        }), a.setData({
            name: t.name,
            address: t.address,
            lat: t.lat,
            lng: t.lng
        }), e.getPoint({
            lat: t.lat,
            lng: t.lng
        }).then(function(t) {
            a.setData({
                point: t,
                markers: [ {
                    id: 100001,
                    latitude: t.lat,
                    longitude: t.lng
                } ]
            });
            var e = [ {
                id: 100001,
                latitude: t.lat,
                longitude: t.lng
            } ];
            n.search({
                keyword: "地铁",
                location: {
                    latitude: t.lat,
                    longitude: t.lng
                },
                distance: "1000",
                page_size: 30,
                success: function(t) {
                    for (var n = t.data, i = 0; i < n.length; i++) {
                        var o = n[i], l = {
                            id: i,
                            width: 25,
                            height: 25,
                            latitude: o.location.lat,
                            longitude: o.location.lng,
                            iconPath: "/images/map/ditie.png"
                        };
                        e.push(l);
                    }
                    a.setData({
                        markers: e
                    });
                },
                fail: function(t) {}
            });
        });
    },
    searchThat: function(t) {
        var a = t.currentTarget, e = this;
        e.setData({
            curr: Number(a.dataset.id)
        });
        var i = e.data.point, o = [ {
            id: 100001,
            latitude: i.lat,
            longitude: i.lng
        } ];
        n.search({
            keyword: a.dataset.search,
            location: {
                latitude: i.lat,
                longitude: i.lng
            },
            distance: "1000",
            page_size: 30,
            success: function(t) {
                for (var n = t.data, i = 0; i < n.length; i++) {
                    var l = n[i], s = {
                        id: i,
                        width: 25,
                        height: 25,
                        latitude: l.location.lat,
                        longitude: l.location.lng,
                        iconPath: "/images/map/" + a.dataset.icon + ".png"
                    };
                    o.push(s);
                }
                e.setData({
                    markers: o
                });
            },
            fail: function(t) {}
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(t) {
        var a = this;
        return {
            title: "办公选址上好租，专业靠谱",
            desc: "办公选址上好租，专业靠谱",
            path: "/pages/map/map?share=1&name=" + a.data.name + "&address=" + a.data.address + "&lat=" + a.data.lat + "&lng=" + a.data.lng
        };
    }
});