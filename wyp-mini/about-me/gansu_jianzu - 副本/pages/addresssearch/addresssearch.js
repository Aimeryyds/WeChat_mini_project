function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = t(require("../../network/api")), e = t(require("../../utils/const")), i = t(require("../../utils/notification"));

Page({
    data: {},
    onLoad: function(t) {
        var a = this;
        this.queryCitys();
        var o = getApp().globalData.location;
        console.log(o, "location"), o && this.setData({
            cityName: o.cityName
        }), i.default.register(e.default.action.SEARCH_CITY, this, function(t) {
            console.log("get notiffffffffffffffffffffff", t), a.setData({
                cityName: t.data
            });
        });
    },
    changevalue: function(t) {
        console.log(t.detail.value), this.setData({
            inputValue: t.detail.value
        });
    },
    clearValue: function() {
        this.setData({
            inputValue: ""
        });
    },
    searchCtiy: function(t) {
        console.log(t.detail.value);
        var a = {
            cityName: this.data.cityName,
            keyword: "" + t.detail.value
        };
        this.queryMap(a);
    },
    handleSearch: function() {
        var t = {
            cityName: this.data.cityName,
            keyword: this.data.inputValue
        };
        this.queryMap(t);
    },
    queryMap: function(t) {
        var e = this;
        wx.showLoading({
            title: "加载中"
        }), a.default.queryMap(t).then(function(t) {
            wx.hideLoading(), wx.stopPullDownRefresh(), console.log("bingooooooooooooo", t), 
            e.setData({
                addresslist: t.data
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    makeCitys: function() {
        wx.navigateTo({
            url: "/pages/citys/citys?city=" + this.data.cityName + "&from=search"
        });
    },
    queryCitys: function() {
        var t = this;
        a.default.getIndexCities().then(function(a) {
            wx.stopPullDownRefresh();
            for (var e = a.data.cityList, i = [], o = 0; o < e.length; o++) i = i.concat(e[o].cities);
            t.data.cityName || t.setData({
                cityName: i[0]
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    bindaddress: function(t) {
        console.log("item", t.currentTarget.dataset.item);
        var o = t.currentTarget.dataset.item, n = {
            latitude: o.location.lat,
            longitude: o.location.lng,
            location: o.title,
            cityName: o.city,
            addressId: o.id
        };
        getApp().globalData.location = n, wx.setStorageSync("location", n), a.default.getUserLocation({
            latitude: o.location.lat,
            longitude: o.location.lng,
            type: 0
        }).then(function(t) {
            i.default.post(e.default.action.LOCATION_CHANGED, n), wx.navigateBack();
        });
    },
    onUnload: function() {
        i.default.remove(e.default.action.SEARCH_CITY, this);
    }
});