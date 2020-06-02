Page({
    data: {},
    onLoad: function(n) {},
    onReady: function() {},
    onShow: function() {
        var n = this;
        wx.getSetting({
            success: function(o) {
                o.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(o) {
                        n.authorize(o.userInfo);
                    }
                });
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    bindGetUserInfo: function(n) {
        var o = n.detail;
        "getUserInfo:ok" === o.errMsg && this.authorize(o.userInfo);
    },
    authorize: function(n) {
        wx.redirectTo({
            url: "/pages/index/index?redirectUrl=#/login?naik"
        });
    }
});