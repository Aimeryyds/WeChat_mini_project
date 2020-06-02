var t = require("../../../@babel/runtime/helpers/interopRequireDefault"), e = require("../../../@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.locationAuth = function(t) {
    wx.canIUse("getSetting") && c().then(function(e) {
        var i = e.authSetting["scope.userLocation"];
        i ? h(t) : void 0 === i ? l({
            scope: "scope.userLocation"
        }).then(function(e) {
            c().then(function(e) {
                e.authSetting["scope.userLocation"] ? h(t) : d({
                    chlid: "",
                    chlname: ""
                }, t);
            });
        }, function(e) {
            d({
                chlid: "",
                chlname: ""
            }, t);
        }) : d({
            chlid: "",
            chlname: ""
        }, t);
    });
}, exports.getCityList = function(t, e) {
    var o = n.getStorage(i.STORAGE_LC_CITYLIST), a = n.getStorage(i.STORAGE_LC_LOCATION_CITYINFO);
    a.chlid || (a.chlid = i.defaultCityInfo.chlid, a.chlname = i.defaultCityInfo.chlname);
    var c = n.getStorage(i.STORAGE_LC_SELECTED_CITYINFO);
    c = c && c.chlid ? c : a, n.setStorage(i.STORAGE_LC_SELECTED_CITYINFO, c), o ? t.setData({
        cityList: o,
        locationCity: a,
        selectedCity: c
    }) : n.fetch(i.api.cityList, e).then(function(e) {
        e.data.allChl ? (n.setStorage(i.STORAGE_LC_CITYLIST, e.data.allChl), t.setData({
            locationCity: a,
            cityList: e.data.allChl,
            selectedCity: c
        })) : wx.showToast({
            title: "获取城市列表失败",
            icon: "warn",
            duration: 2e3
        });
    });
};

var i = e(require("../const")), n = e(require("../util")), o = require("../promisify"), a = new (t(require("../lib/wx-cookie")).default)(), c = (0, 
o.promisify)(wx.getSetting), l = (0, o.promisify)(wx.authorize), u = (0, o.promisify)(wx.getLocation), r = getApp().global, s = {
    chlid: "",
    chlname: "定位失败"
};

function h(t) {
    u({
        type: "wgs84"
    }).then(function(e) {
        r.comPostInfo.latitude = e.latitude, r.comPostInfo.longitude = e.longitude, n.setStorage(i.STORAGE_LC_LOCATION_LAT_LNG, e), 
        function(t, e) {
            n.fetch(i.api.getCity, t).then(function(t) {
                0 === t.data.ret ? d(t.data.cityChl, e) : d(s, e);
            }, function(t) {
                d(s, e);
            });
        }({
            latitude: e.latitude,
            longitude: e.longitude,
            openid: r.comPostInfo.openid
        }, t);
    }, function(e) {
        c().then(function(e) {
            e.authSetting["scope.userLocation"] ? d(s, t) : d({
                chlid: "",
                chlname: ""
            }, t);
        });
    });
}

function d(t, e) {
    t && (t.chlid || (t = {
        chlid: "news_news_bj",
        chlname: "北京"
    }), r.cityInfo = t, n.setStorage(i.STORAGE_LC_LOCATION_CITYINFO, t), a.set(i.LOCAL_LAST_LOCATE_INFO, t), 
    "function" == typeof e && e(t));
}