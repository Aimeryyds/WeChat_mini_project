Page({
    data: {},
    onLoad: function(n) {
        var o = JSON.parse(wx.getStorageSync("huodong"));
        this.setData({
            url: o.activityurl
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