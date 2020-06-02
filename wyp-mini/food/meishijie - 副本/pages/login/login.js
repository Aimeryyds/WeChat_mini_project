var a = getApp();

Page({
    data: {
        barHeight: wx.getSystemInfoSync().statusBarHeight + 44,
        enable: !1,
        noData: !1,
        requeseFail: !1,
        requeseFailTips: "请求失败，点击重试",
        requeseDone: !0,
        loginTip: "请点击按钮登录美食杰"
    },
    pageReload: function() {
        this.onLoad(this.data.option);
    },
    onLoad: function(a) {
        var e = this;
        this.setData({
            option: a
        }), "exceed" == a.r && e.setData({
            loginTip: "您的登录信息已过期，请重新登录"
        });
    },
    getInfo: function(e) {
        var t = this, o = e;
        "getUserInfo:fail auth deny" == e.detail.errMsg || (t.setData({
            requeseDone: !1
        }), wx.request({
            url: a.globalData.localhost + "/v9/winxin_auth.php",
            data: {
                source: "微信小程序",
                format: "json",
                site: "weixin",
                code: a.globalData.userCode
            },
            header: {
                "content-type": "application/json"
            },
            success: function(e) {
                var s = e.data.data.wx_sesson, n = o.detail.encryptedData, i = o.detail.iv;
                wx.setStorage({
                    key: "wx_sesson",
                    data: s
                }), wx.request({
                    url: a.globalData.newlocalhost + "/user/weixin_login/",
                    data: {
                        source: "微信小程序",
                        format: "json",
                        site: "weixin",
                        wx_sesson: s,
                        epd: n,
                        iv: i
                    },
                    header: {
                        "content-type": "application/json"
                    },
                    success: function(e) {
                        console.log("login:"), console.log(e), e.data.code < 1 ? wx.reLaunch({
                            url: "/pages/login/login?r=exceed"
                        }) : (wx.setStorage({
                            key: "userId",
                            data: e.data.data.user_id
                        }), wx.setStorage({
                            key: "token",
                            data: e.data.data.access_token
                        }), wx.setStorage({
                            key: "token_refresh",
                            data: e.data.data.refresh_token
                        }), wx.setStorage({
                            key: "userAvatar",
                            data: e.data.data.avatar
                        }), wx.setStorage({
                            key: "userNickName",
                            data: e.data.data.user_name
                        }), a.globalData.userNickName = e.data.data.user_name, console.log(a.globalData.userNickName), 
                        a.globalData.userAvatar = e.data.data.avatar, a.globalData.userId = e.data.data.user_id, 
                        a.globalData.token = e.data.data.access_token, a.globalData.tokenRefresh = e.data.data.refresh_token, 
                        t.setData({
                            requeseDone: !0
                        }), wx.showToast({
                            title: "登录成功",
                            icon: "success",
                            duration: 1e3
                        }), setTimeout(function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }, 1e3));
                    },
                    fail: function() {
                        t.setData({
                            requeseDone: !0
                        }), wx.showModal({
                            title: "提示",
                            content: "授权失败，请重试",
                            showCancel: !1
                        });
                    }
                });
            },
            fail: function() {}
        }));
    }
});