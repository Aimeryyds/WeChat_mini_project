Page({
    data: {
        houseinfo: ""
    },
    onLoad: function(n) {
        var o = wx.getStorageSync("houseinfo");
        this.setData({
            houseinfo: o
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