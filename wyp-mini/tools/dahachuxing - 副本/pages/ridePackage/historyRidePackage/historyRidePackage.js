var o = getApp(), t = require("../../../utils/util.js");

require("../../../utils/config.js").appColor;

Page({
    data: {
        type: null,
        pageSize: 50,
        currentPage: 1,
        orderList: null,
        mainColor: "",
        textColor: ""
    },
    onLoad: function(t) {
        var a = this;
        this.setData({
            type: t.type,
            mainColor: o.globalData.mainColor,
            textColor: o.globalData.textColor
        }), o.globalData.locationInfo ? this.getHistoryOrder() : o.getLocationInfo("gcj02", function(o) {
            a.getHistoryOrder();
        });
    },
    getHistoryOrder: function() {
        var a = this;
        o.globalData.locationInfo ? o.checkToken(function(e) {
            if (e.length > 0) {
                var n = o.globalData.baseUrl + "rideCardUser/queryPage.do", i = {
                    pageNO: a.data.currentPage,
                    rowCount: a.data.pageSize,
                    accountId: o.globalData.accountId,
                    lo: o.globalData.locationInfo.longitude,
                    la: o.globalData.locationInfo.latitude,
                    mapType: 2,
                    token: e
                };
                1 == a.data.type && (n = o.globalData.baseUrl + "memberFee/findHistory.do"), t.request(n, i, function(o) {
                    o.ret && (o.data.map(function(o) {
                        var a = o.expireTime, e = t.formatTime(new Date(), !0);
                        new Date(e).getTime() - new Date(a).getTime() > 0 ? o.overTime = !0 : o.overTime = !1;
                    }), a.setData({
                        orderList: o.data
                    }));
                });
            }
        }) : t.showModal_nocancel("无法获取位置", function() {
            wx.navigateBack({});
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