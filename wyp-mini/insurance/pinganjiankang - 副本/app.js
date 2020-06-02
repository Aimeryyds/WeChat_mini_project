var o = require("./config/default");

App({
    onLaunch: function(n) {
        if (console.log(n), this.globalData = {
            sdkOpenId: wx.getStorageSync("openId"),
            referrerInfo: n.referrerInfo,
            launchOptions: n,
            fromChannel: "WXXCX",
            appId: "wx1e1c86669aaabea1"
        }, "wx18792702155c772e" === this.globalData.appId ? this.globalData = Object.assign({}, this.globalData, o.testUrlConfig) : this.globalData = Object.assign({}, this.globalData, o.prodUrlConfig), 
        wx.cloud) try {
            wx.cloud.init({
                traceUser: !0,
                env: this.globalData.cloudEnv
            });
        } catch (o) {
            console.log(o);
        } else wx.showToast({
            title: "请升级微信版本，部分功能可能无法正常使用",
            icon: "none",
            duration: 2e3
        }), console.error("请使用 2.2.3 或以上的基础库以使用云能力");
        this.cloudLogin(n), this.getUserInfo(), this.getSystemInfo();
    },
    cloudLogin: function(o) {
        var n = this;
        wx.cloud.callFunction({
            name: "login",
            data: {}
        }).then(function(e) {
            console.log(e), n.bindChannel(e.result.openid, o.referrerInfo);
        }).catch(function(o) {});
    },
    getSystemInfo: function() {
        try {
            var o = wx.getSystemInfoSync();
            wx.setStorageSync("systemInfo", o);
        } catch (o) {}
    },
    getUserInfo: function(o) {
        var n = this;
        n.globalData.userInfo ? "function" == typeof o && o(this.globalData.userInfo) : wx.login({
            success: function(e) {
                var t = e.code;
                wx.getUserInfo({
                    success: function(e) {
                        wx.setStorageSync("rawData", e.rawData);
                        var a = encodeURIComponent(e.encryptedData), c = e.iv;
                        wx.request({
                            url: n.globalData.baseUrl + "/miniapp/oauth2/getWxUserInfo?encryptedData=" + a + "&iv=" + c + "&jscode=" + t + "&appId=" + n.globalData.appId,
                            method: "GET",
                            success: function(o) {
                                console.log(o.data), 1102 == o.data.status ? wx.showToast({
                                    title: "登录失败，请稍候再试",
                                    icon: "loading",
                                    duration: 1e3
                                }) : "0000" == o.data.status && (console.log(o.data.data.accessToken), wx.setStorageSync("accessToken", o.data.data.accessToken), 
                                wx.setStorageSync("unionId", o.data.data.unionId), wx.setStorageSync("openId", o.data.data.openId), 
                                wx.hideToast());
                            },
                            fail: function(o) {
                                console.log(o);
                            }
                        }), console.log(e), n.globalData.userInfo = e.userInfo, n.globalData.unionId = e.unionId, 
                        "function" == typeof o && o(n.globalData.userInfo);
                    },
                    fail: function(o) {
                        console.log(o);
                    }
                });
            }
        });
    },
    bindChannel: function(o, n) {
        wx.showLoading({
            title: "加载中"
        });
        var e = wx.cloud.database();
        e.collection("userInfo").where({
            _openid: o
        }).get({
            success: function(t) {
                e.collection("userInfo").doc(o).set({
                    data: {
                        referrerInfo: n,
                        addTime: new Date()
                    },
                    success: function(o) {
                        wx.hideLoading();
                    },
                    fail: function(o) {},
                    complete: function(o) {}
                });
            }
        });
    },
    updateVersion: function() {
        var o = wx.getUpdateManager();
        o.onCheckForUpdate(function(o) {
            console.log(o), console.log(o.hasUpdate);
        }), o.onUpdateReady(function() {
            wx.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否重启应用？",
                success: function(n) {
                    n.confirm && o.applyUpdate();
                }
            });
        }), o.onUpdateFailed(function() {});
    },
    getQrCode: function(o) {
        wx.request({
            url: "https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token=" + o,
            method: "POST",
            success: function(o) {
                console.log(o);
            },
            fail: function() {},
            complete: function() {}
        });
    },
    onLoad: function(o) {
        console.log(o);
        if (o.scene) decodeURIComponent(o.scene), o.scene.split("&")[0], o.scene.split("&")[1];
    }
});