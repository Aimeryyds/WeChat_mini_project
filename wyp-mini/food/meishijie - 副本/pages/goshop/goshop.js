Page({
    data: {},
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {
        console.log(1), this.goapp();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    goapp: function() {
        wx.navigateToMiniProgram({
            appId: "wx93d17942795dec0e",
            path: "page/index/index",
            extraData: {
                foo: "bar"
            },
            envVersion: "develop",
            success: function(n) {}
        });
    }
});