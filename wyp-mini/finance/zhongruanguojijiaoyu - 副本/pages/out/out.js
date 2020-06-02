Page({
    data: {
        url: ""
    },
    onLoad: function(n) {
        var o = this;
        wx.getStorage({
            key: "outUrl",
            success: function(n) {
                o.setData({
                    url: n.data.outUrl
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