var n = getApp();

Page({
    data: {
        domain: "bj",
        citys: []
    },
    onLoad: function(o) {
        this.setData({
            domain: n.globalData.domain,
            citys: n.globalData.citys
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