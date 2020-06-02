function t(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t;
}

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("../../network/api.js"));

Page({
    data: {},
    onLoad: function(t) {
        var e = t.provinceCode, i = t.cityCode, a = t.districtCode;
        this.setData({
            provinceCode: e,
            cityCode: i,
            districtCode: a
        }), wx.showLoading({
            title: "请稍后"
        }), this.queryAreas("provinces", {
            parentId: "-1"
        });
    },
    queryAreas: function(i, a) {
        var n = this;
        this.setData({
            current: i
        }), e.default.queryRegions(a).then(function(e) {
            wx.hideLoading(), n.setData(t({}, "" + i, e.data)), 0 == e.data.length && "districts" == i && (getApp().setFlash("address", {
                province: n.data.province,
                city: n.data.city,
                district: {}
            }), wx.navigateBack());
        }).catch(function(e) {
            wx.hideLoading(), n.setData(t({}, "" + i, res.data));
        });
    },
    beginAnim: function() {
        var t = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = t, t.translateX(-750).step(), this.setData({
            animationData: t.export()
        });
    },
    handleProvinceTap: function(t) {
        var e = t.currentTarget.dataset.province;
        this.setData({
            province: e,
            provinceCode: e.code
        }), wx.showLoading({
            title: "请稍后"
        }), this.queryAreas("cities", {
            parentId: e.code
        });
    },
    handleCityTap: function(t) {
        var e = t.currentTarget.dataset.city;
        this.setData({
            city: e,
            cityCode: e.code
        }), wx.showLoading({
            title: "请稍后"
        }), this.queryAreas("districts", {
            parentId: e.code
        });
    },
    handleDistrictTap: function(t) {
        var e = t.currentTarget.dataset.district;
        this.setData({
            district: e,
            districtCode: e.code
        }), getApp().setFlash("address", {
            province: this.data.province,
            city: this.data.city,
            district: this.data.district
        }), wx.navigateBack();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {}
});