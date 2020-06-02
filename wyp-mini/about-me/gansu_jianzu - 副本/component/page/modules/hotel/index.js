function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var o = Object.assign || function(t) {
    for (var o = 1; o < arguments.length; o++) {
        var e = arguments[o];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
}, e = t(require("../common.js")), i = t(require("../../../../utils/notification.js")), a = t(require("../../../../utils/const.js")), n = t(require("../../../../utils/util"));

Component({
    behaviors: [ e.default ],
    properties: {
        module: {
            type: Object
        }
    },
    data: {
        location: {},
        indicatorDots: !1
    },
    ready: function() {
        var t = wx.getStorageSync("location");
        console.log(t.location, "////////////////////"), this.setData({
            location: o({}, t, {
                isLocation: t.locationType
            })
        });
    },
    attached: function() {
        this.init();
    },
    detached: function() {
        this.removeNotification();
    },
    methods: {
        handlesearch: function() {
            var t = this.data.keyword || "";
            wx.navigateTo({
                url: "/pages/sources/newsinfo/newssearch?keyword=" + t + "&type=indexsearch"
            });
        },
        handleSearchHotelList: function() {
            var t = this.selectComponent("#hoteltime");
            console.log("hoteltimeComponent===>", t), getApp().setFlash("keyword", this.data.keyword);
            var o = this.data.location, e = o.cityName, i = o.location, a = o.isLocation, c = o.cityCode;
            wx.navigateTo({
                url: "/pages/hotel/list/index?intime=" + n.default.stringify(t.data) + "&cityName=" + e + "&location=" + i + "&isLocation=" + a + "&cityCode=" + c
            });
        },
        init: function() {
            var t = this;
            i.default.register(a.default.action.HOTEL_SEARCH_DATA, this, function(o) {
                console.log("跳转搜索页settings.action.HOTEL_SEARCH_DATA====", o.data), t.setData({
                    keyword: o.data.keyword
                });
            }), i.default.register(a.default.action.HOTEL_LOCATION_CHANGED, this, function(o) {
                console.log("酒店业务组件接受通知---地址变化settings.action.LOCATION_CHANGED====", o.data);
                var e = o.data;
                t.setData({
                    "location.cityName": e.cityName,
                    "location.location": e.location,
                    "location.isLocation": e.isLocation,
                    "location.cityCode": e.cityCode
                });
            });
        },
        removeNotification: function() {
            i.default.remove(a.default.action.HOTEL_LOCATION_CHANGED, this), i.default.remove(a.default.action.LOCATION_CHANGED, this);
        }
    }
});