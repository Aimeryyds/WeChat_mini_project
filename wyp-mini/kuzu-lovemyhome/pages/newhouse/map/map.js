var e, t = require("../../../js/qqmap-wx-jssdk.min.js");

Page({
    data: {
        tabArr: [],
        markers: [],
        locationMakers: [],
        lon: "",
        lat: "",
        tabindex: ""
    },
    onLoad: function(a) {
        var n = [ {
            name: "地铁",
            imgurl: "https://res.5i5j.com/cache/weixin/newhouse/search-dt.png",
            tag: "search-dt"
        }, {
            name: "公交",
            imgurl: "https://res.5i5j.com/cache/weixin/newhouse/search-gj.png",
            tag: "search-gj"
        }, {
            name: "银行",
            imgurl: "https://res.5i5j.com/cache/weixin/newhouse/search-yh.png",
            tag: "search-yh"
        }, {
            name: "学校",
            imgurl: "https://res.5i5j.com/cache/weixin/newhouse/search-xx.png",
            tag: "search-xx"
        }, {
            name: "医院",
            imgurl: "https://res.5i5j.com/cache/weixin/newhouse/search-yy.png",
            tag: "search-yy"
        } ];
        this.setData({
            lon: a.lon,
            lat: a.lat,
            tabArr: n
        }), e = new t({
            key: "PHJBZ-23WC3-WZH3J-YCJHE-ZOSVV-FXBOB"
        }), this.setLocationMarkers();
    },
    setLocationMarkers: function() {
        var e = {
            iconPath: "https://res.5i5j.com/cache/weixin/newhouse/location.png",
            id: 0,
            latitude: this.data.lat,
            longitude: this.data.lon,
            width: 21,
            height: 27
        }, t = [];
        t.push(e), this.setData({
            markers: t,
            locationMakers: t
        });
    },
    nearbySearch: function(t) {
        var a = this, n = t.currentTarget.dataset.tabindex, o = t.currentTarget.dataset.name, s = t.currentTarget.dataset.tag;
        this.setData({
            tabindex: n
        });
        var i = [];
        if (wx.getStorageSync(s)) i = wx.getStorageSync(s), console.log("有缓存"), this.setData({
            markers: i
        }); else {
            console.log("没缓存");
            var c = this.data.locationMakers;
            i = i.concat(c);
            var r = this.data.lat + "," + this.data.lon, h = "";
            "地铁" == o ? h = "https://res.5i5j.com/cache/weixin/newhouse/maker-dt.png" : "公交" == o ? h = "https://res.5i5j.com/cache/weixin/newhouse/maker-gj.png" : "银行" == o ? h = "https://res.5i5j.com/cache/weixin/newhouse/maker-yh.png" : "学校" == o ? h = "https://res.5i5j.com/cache/weixin/newhouse/maker-xx.png" : "医院" == o && (h = "https://res.5i5j.com/cache/weixin/newhouse/maker-yy.png"), 
            console.log(n, o), e.search({
                keyword: o,
                location: r,
                success: function(e) {
                    console.log(e);
                    for (var t = [], n = 0; n < e.data.length; n++) t.push({
                        title: e.data[n].title,
                        id: e.data[n].id,
                        latitude: e.data[n].location.lat,
                        longitude: e.data[n].location.lng,
                        iconPath: h,
                        width: 32,
                        height: 37
                    });
                    t = t.concat(i), wx.setStorageSync(s, t), a.setData({
                        markers: t
                    });
                },
                fail: function(e) {
                    console.log(e);
                },
                complete: function(e) {}
            });
        }
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {
        console.log("onhide");
    },
    onUnload: function() {
        console.log("unload");
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});