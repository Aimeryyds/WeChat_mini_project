function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
        var o = arguments[e];
        for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (t[a] = o[a]);
    }
    return t;
}, o = t(require("../../network/api")), a = t(require("../../utils/const.js")), i = t(require("../../utils/notification")), n = t(require("../../utils/location.js")), s = t(require("../../utils/util.js")), r = require("../../dist/index"), d = s.default.registComp({}, r.Toast, {
    onLoad: function(t) {
        var e = t.addressid;
        this.setData({
            id: e
        }), wx.showLoading({
            title: "加载中"
        });
    },
    onShow: function() {
        this.queryAddressList({
            pageSize: 1e3,
            pageNo: 1,
            gpsType: "gps"
        });
    },
    editaddress: function(t) {
        console.log(t.currentTarget.dataset, "+++++++++");
        var e = t.currentTarget.dataset.address;
        wx.navigateTo({
            url: "/pages/address/new/new?type=edit&isAddress=true&item=" + s.default.stringify(e)
        });
    },
    newaddress: function() {
        wx.getStorageSync("userinfo").mobile ? wx.navigateTo({
            url: "/pages/address/new/new?type=new&isAddress=true"
        }) : this.setData({
            showModal: !0,
            url: "/pages/login/login"
        });
    },
    queryAddressList: function(t) {
        var e = this;
        o.default.queryAddressList(t).then(function(t) {
            wx.stopPullDownRefresh(), wx.hideLoading(), console.log("bingooooooooooooo", t), 
            e.setData({
                list: t.data.data,
                isShow: !0
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    getLocation: function() {
        var t = this;
        wx.showLoading({
            title: "定位中..."
        }), n.default.getLocation().then(function() {
            wx.hideLoading(), wx.navigateBack();
        }).catch(function(e) {
            wx.hideLoading(), console.log(e), t.showZanToast("定位失败，请重试定位或选择其他收货地址");
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
    addressLocation: function(t) {
        var n = t.currentTarget.dataset.address;
        o.default.getUserLocation({
            latitude: n.lat,
            longitude: n.lng,
            type: 0
        }).then(function(t) {
            var o = wx.getStorageSync("location"), s = e({}, o, {
                latitude: n.lat,
                longitude: n.lng,
                location: n.title,
                cityName: n.city,
                addressId: n.id,
                cityCode: t.data.cityCode
            });
            getApp().globalData.location = s, wx.setStorageSync("location", s), i.default.post(a.default.action.LOCATION_CHANGED, s);
        }), wx.navigateBack();
    },
    makesearch: function() {
        wx.redirectTo({
            url: "/pages/addresssearch/addresssearch"
        });
    }
});

Page(d);