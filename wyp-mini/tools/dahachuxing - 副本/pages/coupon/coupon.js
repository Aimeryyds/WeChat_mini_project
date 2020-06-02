var o = getApp(), t = require("../../utils/util.js");

Page({
    data: {
        mainColor: "#81be48",
        textColor: "#000",
        couponList: [],
        showInput: !1
    },
    onLoad: function(t) {
        this.setData({
            mainColor: o.globalData.mainColor,
            textColor: o.globalData.textColor
        });
    },
    onReady: function() {
        var t = this;
        o.globalData.locationInfo ? this.getCoupon() : o.getLocationInfo("gcj02", function(o) {
            t.getCoupon();
        });
    },
    getCoupon: function() {
        var n = this;
        o.globalData.locationInfo ? o.checkToken(function(a) {
            var i = o.globalData.baseUrl + "couponUser/getByLocation.do", l = {
                accountId: o.globalData.accountId,
                lo: o.globalData.locationInfo.longitude,
                la: o.globalData.locationInfo.latitude,
                mapType: 2,
                token: a
            };
            t.request(i, l, function(o) {
                o.ret && n.setData({
                    couponList: o.data
                });
            });
        }) : t.showModal_nocancel("无法获取位置", function() {
            wx.navigateBack({});
        });
    },
    inputCtrl: function() {
        this.setData({
            showInput: !this.data.showInput
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});