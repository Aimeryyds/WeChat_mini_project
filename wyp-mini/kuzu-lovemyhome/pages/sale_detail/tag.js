Page({
    data: {
        loading: !0,
        cityId: ""
    },
    onLoad: function(n) {
        var o = wx.getStorageSync("imgsrc");
        console.log(o), this.setData({
            cityId: n.cityId,
            brokerSrc: o,
            loading: !1
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function(n) {}
});