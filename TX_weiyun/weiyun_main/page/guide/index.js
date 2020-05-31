var n = require("../../external/mta_analysis.js"), e = require("../../external/format").param, o = (getApp() || {}).global;

Page({
    data: {},
    onLoad: function() {
        n.Page.init();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {
        o.guideBlock = !1;
    },
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    afterGetUserInfo: function(n) {
        if (-1 === ((n.detail || {}).errMsg || "fail").search("fail")) {
            var a = getCurrentPages(), t = a[a.length - 2];
            o.guideBlock = !1, wx.reLaunch({
                url: "/" + t.route + "?" + e(t.options)
            });
        }
    }
});