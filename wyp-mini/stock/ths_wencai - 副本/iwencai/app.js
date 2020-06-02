App(function(e, a, n) {
    return a in e ? Object.defineProperty(e, a, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[a] = n, e;
}({
    golbalData: {
        whiteList: [ "testm.10jqka.com.cn", "search.10jqka.com.cn", "ai.iwencai.com", "m.10jqka.com.cn", "news.10jqka.com.cn" ]
    },
    indexurl: "https://eq.10jqka.com.cn/ai/webapp/?source=ths_weixin_xiaochengxu&footer=1&miniprogram=1&preview=1&zzwp=1&place=shoujichaogu",
    globalData: {
        appid: "wx22d1466a657fcb78",
        secret: "3d0813488feb2c4d67b320b9e0ae33aa"
    },
    onLaunch: function() {
        var e = this, a = wx.getStorageSync("logs") || [];
        a.unshift(Date.now()), wx.setStorageSync("logs", a), wx.login({
            success: function(e) {}
        }), wx.getSetting({
            success: function(a) {
                a.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(a) {
                        e.globalData.userInfo = a.userInfo, e.userInfoReadyCallback && e.userInfoReadyCallback(a);
                    }
                });
            }
        });
    }
}, "globalData", {
    userInfo: null
}));