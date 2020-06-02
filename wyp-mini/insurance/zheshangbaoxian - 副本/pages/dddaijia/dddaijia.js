Page({
    data: {
        path: "",
        appid: ""
    },
    onLoad: function(n) {
        var a = n.path, o = n.appid;
        this.setData({
            path: a,
            appid: o
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    click: function() {
        var n = this.data, a = n.path, o = n.appid;
        wx.navigateToMiniProgram({
            appId: o,
            path: encodeURI(a)
        });
    }
});