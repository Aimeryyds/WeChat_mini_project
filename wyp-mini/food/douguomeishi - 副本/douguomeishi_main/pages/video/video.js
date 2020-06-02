var n;

Page({
    data: {
        URL: ""
    },
    onLoad: function(o) {
        n = this;
        var e = decodeURIComponent(o.url);
        console.log("decoded url " + e), n.setData({
            URL: e
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