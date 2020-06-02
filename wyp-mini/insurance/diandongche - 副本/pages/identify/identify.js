Page({
    data: {},
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    goRegister: function() {
        wx.navigateTo({
            url: "../register/register"
        });
    },
    goHome: function() {
        wx.navigateTo({
            url: "../home/home"
        });
    }
});