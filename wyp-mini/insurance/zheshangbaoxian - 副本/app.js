function e(e) {
    return function() {
        var n = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function o(r, i) {
                try {
                    var s = n[r](i), a = s.value;
                } catch (e) {
                    return void t(e);
                }
                if (!s.done) return Promise.resolve(a).then(function(e) {
                    o("next", e);
                }, function(e) {
                    o("throw", e);
                });
                e(a);
            }
            return o("next");
        });
    };
}

var n = require("./utils/http.js"), t = require("./utils/runtime");

App({
    onShow: function(e) {
        if (this.pay.isRealCheck = !1, "wx0891f9079fc2561b" === e.referrerInfo.appId) {
            console.log("实名结束----", e.referrerInfo);
            var n = e.referrerInfo.extraData.code, t = e.referrerInfo.extraData.message;
            if (0 != n) return this.pay.isRealCheck = !1, void wx.showToast({
                title: t,
                icon: "none"
            });
            this.pay.isRealCheck = !0;
        }
    },
    onLaunch: function() {
        var e = this, n = wx.getAccountInfoSync();
        console.log(n.miniProgram), console.log(__wxConfig), wx.login({
            success: function(n) {
                "login:ok" === n.errMsg && (wx.setStorageSync("wxCode", n.code), e.getUserInfo());
            },
            fail: function(e) {}
        });
    },
    getUserInfo: function() {
        var o = e(t.mark(function e() {
            var o, r, i, s, a, c;
            return t.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return o = wx.getStorageSync("wxCode"), e.prev = 1, e.next = 4, n({
                        url: "/api/cshop-pay/cshop-pay/controller/weixin/manager/getOpenIdByCode.noauth",
                        method: "GET",
                        data: {
                            code: o
                        }
                    });

                  case 4:
                    r = e.sent, i = r.data$, s = i.openid, a = i.session_key, c = i.unionid, "Successful" === r.status$ && (wx.setStorageSync("openid", s), 
                    wx.setStorageSync("session_key", a), wx.setStorageSync("unionid", c)), e.next = 12;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(1), console.log(e.t0);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 1, 9 ] ]);
        }));
        return function() {
            return o.apply(this, arguments);
        };
    }(),
    $http: n,
    globalData: {
        envVersion: __wxConfig.envVersion,
        baseUrl: "https://weixin.zsins.com",
        userInfo: null,
        webShowed: !1,
        webViewUrl: "https://weixin.zsins.com/cshop/"
    },
    pay: {
        isRealCheck: !1
    }
});