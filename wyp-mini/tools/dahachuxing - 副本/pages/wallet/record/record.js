var o = getApp(), t = require("../../../utils/util.js");

Page({
    data: {
        mainColor: "#81be48",
        textColor: "#000",
        historyRecord: []
    },
    onLoad: function(t) {
        var a = this;
        this.setData({
            mainColor: o.globalData.mainColor,
            textColor: o.globalData.textColor
        }), o.globalData.locationInfo ? this.getRecord() : o.getLocationInfo("gcj02", function(o) {
            a.getRecord();
        });
    },
    getRecord: function() {
        var a = this;
        o.checkToken(function(n) {
            if (n) {
                var e = o.globalData.baseUrl + "giftCard/query.do", l = {
                    token: n,
                    accountId: o.globalData.accountId,
                    lo: o.globalData.locationInfo.longitude,
                    la: o.globalData.locationInfo.latitude,
                    mapType: 2
                };
                console.log(e), t.request(e, l, function(o) {
                    o.ret && a.setData({
                        historyRecord: o.data
                    });
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});