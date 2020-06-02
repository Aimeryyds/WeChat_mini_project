App({
    onLaunch: function() {
        var o = wx.getStorageSync("logs") || [];
        o.unshift(Date.now()), wx.setStorageSync("logs", o);
    },
    getOpenId: function(o) {
        var t = this;
        this.login(function(n) {
            var a = {
                url: "https://api.weixin.qq.com/sns/jscode2session",
                data: {
                    appid: t.globalData.appId,
                    secret: t.globalData.secret,
                    js_code: n.code,
                    grant_type: "authorization_code"
                },
                method: "GET",
                success: function(n) {
                    t.globalData.openId = n.data.openid || "", t.globalData.sessionKey = n.data.session_key || "", 
                    "function" == typeof o && o(t.globalData.openId);
                }
            };
            wx.request(a);
        });
    },
    login: function(o) {
        var t = this, n = {
            success: function(n) {
                "function" == typeof o && o(n), t.globalData.code = n.code;
            },
            fail: function(o) {
                wx.showToast({
                    icon: "none",
                    title: o.errMsg
                });
            }
        };
        wx.login(n);
    },
    globalData: {
        userInfo: null,
        code: "",
        scene: ""
    }
});