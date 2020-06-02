Page({
    data: {},
    onLoad: function(n) {
        var o = wx.getSystemInfoSync();
        this.setData({
            height: 880 / 750 * o.windowWidth,
            potHeight: 530 / 750 * o.windowWidth,
            appId: n.appid
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function(n) {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    go: function() {
        wx.navigateToMiniProgram({
            appId: this.data.appId,
            path: "/pages/gift/index"
        });
    },
    onShareAppMessage: function() {}
});