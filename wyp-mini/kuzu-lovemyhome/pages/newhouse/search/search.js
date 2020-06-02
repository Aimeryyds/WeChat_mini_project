var t = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../../utils/tool"));

Page({
    data: {
        cityid: 1,
        hotkeywords: "",
        value: "",
        mindsearchdata: "",
        history: ""
    },
    onLoad: function(t) {
        console.log(t), this.setData({
            cityid: t.cityid
        });
        var e = "searchHistory" + t.cityid, a = "";
        wx.getStorageSync(e) ? a = wx.getStorageSync(e) : (a = "", wx.setStorageSync(e, [])), 
        this.setData({
            history: a
        }), console.log("history", this.data.history), this.getKeywords();
    },
    getKeywords: function() {
        var t = this.data.cityid, e = "https://appapi.5i5j.com/keyword/" + t + "/index", a = this;
        wx.request({
            url: e,
            method: "post",
            data: {
                cityid: t
            },
            success: function(t) {
                200 == t.data.status ? a.setData({
                    hotkeywords: t.data.data
                }) : 204 == t.data.status && a.setData({
                    hotkeywords: ""
                }), console.log(t);
            }
        });
    },
    hotkeywordsclick: function(t) {
        var e = t.currentTarget.dataset.estateid, a = t.currentTarget.dataset.properytypeid, i = {
            properytypeid: a,
            estateid: e,
            type: 3,
            name: t.currentTarget.dataset.name,
            cityid: this.data.cityid
        };
        this.addHistory(i), wx.navigateTo({
            url: "/pages/newhouse/detail/detail?estateid=" + e + "&propertytypeid=" + a
        });
    },
    addHistory: function(t) {
        var e = "searchHistory" + this.data.cityid, a = wx.getStorageSync(e);
        console.log(a), -1 == JSON.stringify(a).indexOf(t.estateid) && (a.length < 10 ? a.push(t) : (a.shift(), 
        a.push(t)), wx.setStorageSync(e, a), this.setData({
            history: a
        }));
    },
    getinputvalue: t.default.debounce(function(t) {
        var e = t[0].detail.value;
        this.setData({
            value: e
        });
        var a = this, i = this.data.cityid;
        wx.request({
            url: "https://appapi.5i5j.com/newhousesearch/" + i + "/index",
            method: "post",
            data: {
                cityid: i,
                keyword: e
            },
            success: function(t) {
                console.log(t), 200 == t.data.status ? a.setData({
                    mindsearchdata: t.data.data
                }) : a.setData({
                    mindsearchdata: "empty"
                });
            }
        });
    }),
    delsearch: function() {
        this.setData({
            mindsearchdata: "",
            value: ""
        });
    },
    routergo: function(t) {
        console.log(t);
        var e = t.currentTarget.dataset.type, a = t.currentTarget.dataset.searchid, i = t.currentTarget.dataset.properttypeid, o = {
            properytypeid: i,
            estateid: a,
            type: e,
            name: t.currentTarget.dataset.name,
            cityid: this.data.cityid
        };
        if (this.addHistory(o), 3 == e) console.log("321321121321", a, i), wx.navigateTo({
            url: "/pages/newhouse/detail/detail?estateid=" + a + "&propertytypeid=" + i
        }); else if (1 == e) {
            var a = t.currentTarget.dataset.searchid, s = {
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
            };
            s.areaID = a, wx.navigateTo({
                url: "/pages/newhouse/list/list?condition=" + JSON.stringify(s) + "&cityid=" + this.data.cityid
            });
        }
    },
    backpage: function() {
        wx.navigateBack();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});