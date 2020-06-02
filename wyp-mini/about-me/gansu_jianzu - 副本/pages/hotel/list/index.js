function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var a = arguments[e];
        for (var o in a) Object.prototype.hasOwnProperty.call(a, o) && (t[o] = a[o]);
    }
    return t;
}, a = t(require("../../../network/api")), o = t(require("../../../utils/util.js")), i = t(require("../../../utils/const.js")), n = t(require("../../../utils/notification.js"));

Page({
    data: {
        hotels: [],
        loading: !1,
        loadmore: !1,
        isloadingmore: !1,
        query: {
            pageNo: 0
        },
        location: "北京市",
        city: "北京市",
        intime: {},
        isFirstOpen: !0
    },
    onLoad: function(t) {
        var e = this, a = {
            pageNo: 0
        };
        if (this.setData({
            query: a,
            intime: t.intime ? o.default.parse(t.intime) : {}
        }), !t.cityName && !t.location) {
            var s = wx.getStorageSync("location");
            console.log(s.location, "////////////////////"), this.setData({
                "query.cityName": s.cityName || "",
                "query.cityCode": s.cityCode || "",
                location: s.location || "",
                isLocation: 2,
                cityCode: s.cityCode || ""
            });
        }
        t.cityName && this.setData({
            "query.cityName": t.cityName,
            "query.cityCode": t.cityCode
        }), t.location && this.setData({
            location: t.location,
            isLocation: t.isLocation,
            cityCode: t.cityCode
        }), n.default.register(i.default.action.HOTEL_LOCATION_CHANGED, this, function(t) {
            console.log("酒店业务组件接受通知---地址变化settings.action.LOCATION_CHANGED====", t.data);
            var a = t.data;
            e.setData({
                "query.cityName": a.cityName || "",
                "query.cityCode": a.cityCode || "",
                location: a.location,
                isLocation: a.isLocation
            });
        });
    },
    onReady: function() {},
    onShow: function() {
        var t = this.data.title, a = getApp().getFlash("keyword");
        console.log(getApp().getFlash("keyword"), "++++++++++++++++", a);
        var o = e({}, this.data.query, {
            pageNo: 0,
            storeName: a || ""
        });
        this.setData({
            query: o
        }), this.data.isFirstOpen ? (this.queryHotelList(this.data.query, !0, !0), this.setData({
            isFirstOpen: !1
        })) : t != a ? this.queryHotelList(this.data.query, !0, !0) : this.queryHotelList(this.data.query, !1, !0);
    },
    handleTabQuery: function(t) {
        console.log("handleTabQuery---\x3e", t);
        var a = e({}, this.data.query, {
            pageNo: 0
        }, t.detail);
        this.setData({
            query: a
        }), this.queryHotelList(a, !0, !0);
    },
    queryHotelList: function(t, o, i) {
        var n = this;
        o && (wx.showLoading({
            title: "请稍候"
        }), this.setData({
            loading: !0
        })), a.default.queryHotelList(t).then(function(t) {
            var a = n;
            console.log(t, "++++"), wx.hideLoading(), n.setData({
                hotels: i ? t.data.data : n.data.hotels.concat(t.data.data),
                loadmore: t.data.nextCursor > 0,
                loading: !1,
                query: e({}, n.data.query, {
                    pageNo: t.data.nextCursor,
                    pageSize: t.data.pageSize
                })
            }, function() {
                wx.getSystemInfo({
                    success: function(t) {
                        var e = wx.createSelectorQuery();
                        e.select("#hotel-search").boundingClientRect(), e.select("#hotel-tab").boundingClientRect(), 
                        e.exec(function(e) {
                            null != e[0] && null != e[1] && a.setData({
                                scrollHeight: t.windowHeight - e[0].height - e[1].height - 28
                            });
                        });
                    }
                });
            });
        }).catch(function(t) {
            console.log(t), wx.stopPullDownRefresh(), wx.hideLoading(), n.setData({
                loading: !1,
                loadmore: !1,
                isloadingmore: !1
            });
        });
    },
    lower: function() {
        this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), this.queryHotelList(e({}, this.data.query), !1));
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindhotlesearch: function() {
        var t = (this.data.query || "").storeName;
        wx.navigateTo({
            url: "/pages/sources/newsinfo/newssearch?keyword=" + t
        });
    },
    gotoDetail: function(t) {
        console.log(t);
        var e = this.selectComponent("#hotel-tab");
        getApp().setFlash("inTimeObj", {
            startDate: e.data.startDate || 0,
            endDate: e.data.endDate,
            statistics_data: e.data.statistics_data,
            inTime_data: e.data.inTime_data,
            leaveTime_data: e.data.leaveTime_data
        }), console.log("--------gotoDetail-------------", e.data.statistics_data), wx.navigateTo({
            url: "/pages/shop/products/products?storeid=" + t.currentTarget.dataset.id
        });
    },
    onUnload: function() {
        n.default.remove(i.default.action.HOTEL_LOCATION_CHANGED, this), console.log("===========页面onUnload============");
    }
});