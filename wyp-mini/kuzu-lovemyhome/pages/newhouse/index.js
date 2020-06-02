var e = require("../../utils/gio-minp/index.js").default, t = require("../../sdk/gioConfig.js").default;

e("setConfig", t), Page({
    data: {
        loadstatus: !1,
        imgurlhost: "https://res.5i5j.com",
        cityid: 1,
        cityname: "北京",
        data: "",
        navArr: [ {
            url: "https://res.5i5j.com/cache/weixin/newhouse/allhouse.png",
            text: "全部楼盘",
            pathto: "list"
        }, {
            url: "https://res.5i5j.com/cache/weixin/newhouse/newopen.png",
            text: "最近开盘",
            pathto: "list",
            opendataid: 5
        }, {
            url: "https://res.5i5j.com/cache/weixin/newhouse/mapsearch.png",
            text: "地图找房",
            pathto: "map"
        }, {
            url: "https://res.5i5j.com/cache/weixin/newhouse/knowledge.png",
            text: "新房百科",
            pathto: "wiki"
        } ]
    },
    onLoad: function(e) {
        console.log(e), this.setData({
            cityid: e.cityId,
            cityname: e.cityname
        }), this.getData();
    },
    routerview: function(e) {
        var t = [ "banner", "guide" ], a = e.currentTarget.dataset.routename;
        if (-1 != t.indexOf(a)) {
            var i = JSON.stringify(e.currentTarget.dataset.targeturl);
            i = encodeURIComponent(i), console.log(i), wx.navigateTo({
                url: "../webview/webview?url=" + i
            });
        } else console.log("跳转详情页");
    },
    getData: function() {
        var e = this, t = this.data.cityid;
        wx.request({
            url: "https://appapi.5i5j.com/home/" + t + "/info",
            data: {
                cityid: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                console.log(t.data.data);
                var a = t.data.data;
                e.setData({
                    data: t.data.data,
                    loadstatus: !0
                }), console.log(a.bannerInfo.length), 0 == a.bannerInfo.length && 0 == a.dynamic.length && 0 == a.guide.length && 0 == a.hotEstate.length && (console.log("此城市没有新房频道"), 
                wx.navigateBack());
            }
        });
    },
    routego: function(e) {
        var t = e.currentTarget.dataset.path;
        if ("list" == t) {
            var a = {
                page: 1,
                pageSize: 15,
                keyword: "",
                areaID: "",
                priceID: "",
                customPriceLow: "",
                customPriceTop: "",
                houseTypeID: "",
                propertyTypeID: "",
                trafficID: "",
                tagID: "",
                otherID: "",
                openDate: "",
                budingArea: "",
                totalPrice: "",
                customTotalPriceLow: "",
                customTotalPriceTop: "",
                sortID: "",
                swLat: "",
                swLng: "",
                neLng: "",
                neLat: ""
            }, i = e.currentTarget.dataset.opendataid;
            a.openDate = i;
            var o = this.data.cityid;
            wx.navigateTo({
                url: "/pages/newhouse/list/list?condition=" + JSON.stringify(a) + "&cityid=" + o
            });
        } else if ("detail" == t) {
            var n = e.currentTarget.dataset.estateid, s = e.currentTarget.dataset.propertytypeid;
            wx.navigateTo({
                url: "/pages/newhouse/detail/detail?estateid=" + n + "&propertytypeid=" + s
            });
        } else if ("map" == t) wx.showToast({
            icon: "none",
            title: "敬请期待"
        }); else if ("wiki" == t) {
            var r = JSON.stringify("https://m.5i5j.com/appcms/wiki?city_id=" + this.data.cityid);
            r = encodeURIComponent(r), wx.navigateTo({
                url: "../webview/webview?url=" + r
            });
        } else "choosecity" == t && wx.navigateTo({
            url: "../choosecity/choosecity?from=newhouse"
        });
    },
    routesearch: function() {
        wx.navigateTo({
            url: "/pages/newhouse/search/search?cityid=" + this.data.cityid
        });
    },
    onReady: function() {
        e("setPage", {
            pagename: "新房首页",
            businessline_pvar: "新房"
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});