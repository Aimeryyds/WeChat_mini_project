Page({
    data: {},
    onLoad: function(n) {
        if (n) {
            var o = JSON.parse(n.aboutmine);
            this.setData({
                about: o
            });
        }
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});