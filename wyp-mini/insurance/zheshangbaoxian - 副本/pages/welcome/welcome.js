var n = getApp();

Page({
    data: {
        redirectUrl: "/pages/index/index"
    },
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {
        var o = this.data.redirectUrl;
        setTimeout(function() {
            n.globalData.webShowed ? wx.navigateBack({
                delta: 1
            }) : wx.redirectTo({
                url: o
            });
        }, 200);
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});