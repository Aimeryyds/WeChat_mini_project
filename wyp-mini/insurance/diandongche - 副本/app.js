var e = require("08D8FD42480303CF6EBE9545A5F1F6C0.js");

App({
    onLaunch: function(t) {
        var n = this, o = wx.getStorageSync("logs") || [];
        o.unshift(Date.now()), wx.setStorageSync("logs", o), wx.getSystemInfo({
            success: function(e) {
                n.globalData.deviceInfo = e.platform;
            }
        }), wx.login({
            success: function(t) {
                var o = n.globalData.authenticationUrl, a = n.globalData.secret, s = {
                    code: t.code
                };
                e.GetTokenCallBack(o, a, function() {
                    e.Requests_json(o + "/authentication/getSessionKeyOrOpenId", s).then(function(e) {
                        "0" == e.code && (console.info("获取到openId：" + e.data.openid), wx.setStorageSync("openId", e.data.openid));
                    });
                });
            }
        }), wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] && wx.getUserInfo({
                    success: function(e) {
                        console.log(e.userInfo), n.globalData.userInfo = e.userInfo, n.userInfoReadyCallback && n.userInfoReadyCallback(e);
                    }
                });
            }
        });
    },
    globalData: {
        userInfo: null,
        deviceInfo: null,
        secret: {
            appId: "dealer1",
            appSecret: "123456"
        },
        insuranceUrl: "https://api.zsra.com.cn/insurance-api",
        authenticationUrl: "https://api.zsra.com.cn/UAMS",
        staticUrl: "https://h5.zbins.com/static-resource/ebike",
        productUrl: "https://h5.zbins.com/static-resource"
    }
});