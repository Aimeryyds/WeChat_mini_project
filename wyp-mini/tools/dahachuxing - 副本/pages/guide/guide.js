var n = getApp();

Page({
    data: {
        imgUrls: [ "../../images/guide/1.png", "../../images/guide/2.png", "../../images/guide/3.png" ],
        indicatorDots: !1,
        autoplay: !1,
        interval: 5e3,
        duration: 500
    },
    toMap: function() {
        wx.reLaunch({
            url: "../map/map"
        });
    },
    onLoad: function(o) {
        n.checkToken();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});