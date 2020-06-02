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
}, a = t(require("../../network/api")), o = t(require("../../utils/const.js")), i = t(require("../../utils/notification")), c = t(require("../../utils/location.js"));

Page({
    data: {},
    onLoad: function(t) {
        t.city && this.setData({
            city: t.city
        }), t.isLocation && this.setData({
            isLocation: t.isLocation
        }), t.from && this.setData({
            type: t.from
        });
        var e = wx.getStorageSync("config");
        this.setData({
            config: e
        }), this.querycitys();
    },
    hotCity: function() {
        this.setData({
            scrollTop: 0
        });
    },
    clickLetter: function(t) {
        console.log(t.currentTarget.dataset.letter);
        var e = t.currentTarget.dataset.letter;
        this.setData({
            showLetter: e,
            isShowLetter: !0,
            scrollTopId: e
        });
        var a = this;
        setTimeout(function() {
            a.setData({
                isShowLetter: !1
            });
        }, 1e3);
    },
    querycitys: function() {
        var t = this;
        wx.showLoading({
            title: "加载中"
        }), a.default.queryIndexCityV2().then(function(e) {
            wx.stopPullDownRefresh(), t.setData({
                isShow: !0,
                cityList: e.data.cityList,
                shortNames: e.data.shortNames,
                hots: e.data.hotCityList
            }, function() {
                wx.hideLoading();
            }), console.log(e, "+++++++++++");
        }).catch(function(t) {
            return console.log(t);
        });
    },
    bindCity: function(t) {
        var c = t.currentTarget.dataset.city;
        if (console.log(c, "+++++++++++++++++++++"), this.setData({
            searchShow: !1,
            searchlist: [],
            city: c.cityName
        }), wx.showLoading({
            title: "加载中"
        }), "hotel" == this.data.type) i.default.post(o.default.action.HOTEL_LOCATION_CHANGED, {
            location: c.cityName,
            cityName: c.cityName,
            isLocation: 2,
            cityCode: c.cityCode
        }), wx.navigateBack(); else if ("search" == this.data.type) i.default.post(o.default.action.SEARCH_CITY, c.cityName), 
        wx.navigateBack(); else {
            var n = wx.getStorageSync("location"), s = n.latitude, l = void 0 === s ? "" : s, r = n.longitude, u = void 0 === r ? "" : r;
            a.default.selectIndexCityV2({
                cityCode: c.cityCode,
                latitude: "" + l,
                longitude: "" + u
            }).then(function(t) {
                if (wx.stopPullDownRefresh(), wx.hideLoading(), t.data.result) {
                    var a = getApp().globalData.location, n = e({}, a, {
                        location: c.cityName,
                        cityName: c.cityName,
                        cityCode: c.cityCode
                    });
                    getApp().globalData.location = n, wx.setStorageSync("location", n), i.default.post(o.default.action.HOTEL_LOCATION_CHANGED, {
                        location: c.cityName,
                        cityName: c.cityName,
                        isLocation: 2,
                        cityCode: c.cityCode
                    }), i.default.post(o.default.action.LOCATION_CHANGED, n), wx.navigateBack();
                }
            }).catch(function(t) {
                return console.log(t);
            });
        }
    },
    searchCtiy: function(t) {
        var e = this;
        if (console.log(t.detail.value), "" !== t.detail.value) {
            var o = {
                keyword: t.detail.value
            };
            a.default.queryIndexSearchCity(o).then(function(t) {
                wx.stopPullDownRefresh(), wx.hideLoading(), e.setData({
                    searchShow: !0,
                    searchlist: t.data
                }), console.log(t, "+++++++++++");
            }).catch(function(t) {
                return console.log(t);
            });
        }
    },
    removesearch: function(t) {
        "" == t.detail.value && this.setData({
            searchShow: !1,
            searchlist: []
        });
    },
    getLocation: function() {
        var t = this, e = this;
        wx.showLoading({
            title: "定位中..."
        }), c.default.getLocationInfo().then(function(e) {
            console.log(e, "res"), "hotel" == t.data.type && i.default.post(o.default.action.HOTEL_LOCATION_CHANGED, {
                cityName: e.cityName,
                location: e.location,
                isLocation: 1,
                cityCode: e.cityCode
            }), wx.hideLoading(), wx.navigateBack();
        }).catch(function(t) {
            wx.hideLoading(), console.log(t), e.showZanToast("定位失败，请重试定位或选择其他城市");
        });
    },
    makesetting: function() {
        var t = this;
        wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userLocation"] ? t.getLocation() : wx.openSetting({
                    success: function(e) {
                        e.authSetting["scope.userLocation"] && t.getLocation();
                    }
                });
            }
        });
    },
    hideSearch: function() {
        this.setData({
            searchShow: !1
        });
    }
});