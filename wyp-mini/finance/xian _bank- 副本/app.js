App({
    onLaunch: function(n) {
        var e = this, s = n.scene, o = wx.getStorageSync("logs") || [];
        o.unshift(Date.now()), wx.setStorageSync("logs", o), console.log("value of:" + s), 
        wx.login({
            success: function(n) {}
        }), wx.getSetting({
            success: function(n) {
                n.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(n) {
                        e.globalData.userInfo = n.userInfo, e.userInfoReadyCallback && e.userInfoReadyCallback(n);
                    }
                });
            }
        });
    },
    globalData: {
        imgUrl: "https://weixin.xacbank.com.cn/wxyh/nfs/menuapplet/wx2723f910aa55845c/"
    }
});