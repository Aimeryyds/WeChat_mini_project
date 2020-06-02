var n = getApp();

Page({
    data: {
        path: "",
        showWebView: !1,
        url: n.globalData.webViewUrl
    },
    onLoad: function(n) {
        var o = n.path;
        this.setData({
            path: o
        });
        getCurrentPages();
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindload: function(n) {
        console.log("next:bindload", n);
    }
});