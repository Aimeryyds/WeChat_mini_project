require("utils/ald-stat.js");

console.log = function() {}, App({
    onLaunch: function(e) {
        var a = this, t = this;
        wx.login({
            success: function(e) {
                e.code && (a.globalData.userCode = e.code), console.log("code:"), console.log(e.code);
            }
        }), wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] ? (wx.getStorage({
                    key: "userId",
                    success: function(e) {
                        t.globalData.userId = e.data;
                    }
                }), wx.getStorage({
                    key: "userAvatar",
                    success: function(e) {
                        t.globalData.userAvatar = e.data;
                    }
                }), wx.getStorage({
                    key: "userNickName",
                    success: function(e) {
                        t.globalData.userNickName = e.data;
                    }
                }), wx.getStorage({
                    key: "token_refresh",
                    success: function(e) {
                        t.globalData.tokenRefresh = e.data, wx.request({
                            url: t.globalData.newlocalhost + "/user/refresh_token",
                            data: {
                                refresh_token: t.globalData.tokenRefresh
                            },
                            method: "GET",
                            dataType: "json",
                            success: function(e) {
                                "-106" == e.data.code ? (console.log("登录信息过期"), wx.navigateTo({
                                    url: "/pages/login/login"
                                })) : (wx.setStorage({
                                    key: "token",
                                    data: e.data.data.access_token
                                }), t.globalData.token = e.data.data.access_token);
                            },
                            fail: function() {},
                            complete: function() {}
                        });
                    }
                })) : a.globalData.userIfSq = !1;
            }
        });
    },
    globalData: {
        userInfo: null,
        userCode: null,
        userIfSq: !0,
        userId: "",
        token: "",
        tokenRefresh: "",
        recipeSet: {},
        wxxcc_v: "7.0.0",
        localhost: "https://api.meishi.cc",
        newlocalhost: "https://newapi.meishi.cc",
        apph5localhost: "https://apph5.meishi.cc"
    }
});