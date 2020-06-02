var a = require("./utils/StarUserIdList.js");

App({
    onLaunch: function() {
        var a = this;
        this.globalData.uid = wx.getStorageSync("uid"), this.globalData.username = wx.getStorageSync("username"), 
        this.globalData.key = wx.getStorageSync("key"), this.globalData.session = wx.getStorageSync("session"), 
        this.globalData.murl5 = "https://api5.meishichina.com/api.php", wx.getSystemInfo({
            success: function(t) {
                a.globalData.statusBarHeight = t.statusBarHeight, a.globalData.device = t.brand + t.model;
            },
            failure: function() {
                this.globalData.statusBarHeight = 0, this.globalData.device = "unknow";
            }
        });
    },
    onShow: function(a) {
        var t = this;
        if (1069 != a.scene && 1036 != a.scene || (this.globalData.openapp = !0), t.globalData.uid > 0 && "" == t.globalData.session) {
            var e = "user_renewSession", o = {
                autosession: 1
            }, n = t.getParam(e, o);
            wx.request({
                url: t.globalData.murl5,
                data: {
                    p: n
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    if (0 == a.data[e].error) {
                        var o = new Date().getTime();
                        t.globalData.session = a.data[e].data, t.globalData.key = a.data[e].data, wx.setStorageSync("key", a.data[e].data), 
                        wx.setStorageSync("session", a.data[e].data), wx.setStorageSync("time", o);
                    }
                }
            });
        }
        var s = new Date().getTime(), i = wx.getStorageSync("time");
        if (t.globalData.uid > 0 && t.globalData.session && s > i + 5184e6 && s < i + 7776e6) {
            var e = "user_renewSession", o = {}, n = t.getParam(e, o);
            wx.request({
                url: t.globalData.murl5,
                data: {
                    p: n
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    0 == a.data[e].error && t.user_deSession(a.data[e].data);
                }
            });
        }
    },
    user_deSession: function(a) {
        var t = this, e = {}, o = t.getParam("user_deSession", e);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(e) {
                if (0 != a) {
                    var o = new Date().getTime();
                    t.globalData.session = a, t.globalData.key = a, wx.setStorageSync("key", a), wx.setStorageSync("session", a), 
                    wx.setStorageSync("time", o);
                }
            }
        });
    },
    onHide: function() {},
    getId: function(a) {
        var t = this, e = new Date().getTime();
        return t.globalData.uid > 0 && e < wx.getStorageSync("time") + 7776e6 ? ("function" == typeof a && a(t.globalData.uid), 
        !1) : -2 == t.globalData.uid ? ("function" == typeof a && a(-2), !1) : (t.globalData.uid = -1, 
        wx.setStorageSync("uid", -1), void wx.login({
            success: function(e) {
                var o = e.code;
                wx.getUserInfo({
                    success: function(e) {
                        var n = e.encryptedData, s = e.iv, i = "user_weixinLogin", r = {
                            inviteuid: wx.getStorageSync("inviteuid") ? wx.getStorageSync("inviteuid") : "",
                            encryptedData: n,
                            code: o,
                            iv: s
                        }, l = t.getParam(i, r);
                        wx.request({
                            url: t.globalData.murl5,
                            data: {
                                p: l
                            },
                            header: {
                                "Content-Type": "application/json"
                            },
                            success: function(e) {
                                var o = new Date().getTime();
                                try {
                                    0 == e.data[i].error ? (t.globalData.uid = e.data[i].data.uid, t.globalData.key = e.data[i].data.key, 
                                    wx.setStorageSync("uid", e.data[i].data.uid), wx.setStorageSync("key", e.data[i].data.key), 
                                    e.data[i].data.session && (t.globalData.session = e.data[i].data.session, wx.setStorageSync("session", e.data[i].data.session)), 
                                    wx.setStorageSync("time", o), wx.setStorageSync("loginerror", 0)) : -3 == e.data[i].error ? (wx.showToast({
                                        icon: "none",
                                        title: "不合适的微信名！"
                                    }), wx.setStorageSync("loginerror", -3), wx.switchTab({
                                        url: "/pages/my/my"
                                    })) : (wx.showToast({
                                        icon: "none",
                                        title: "出现异常，请重试"
                                    }), wx.setStorageSync("loginerror", -1), wx.switchTab({
                                        url: "/pages/my/my"
                                    })), "function" == typeof a && a(t.globalData.uid);
                                } catch (t) {
                                    wx.showToast({
                                        icon: "none",
                                        title: "出现异常，请重试"
                                    }), wx.setStorageSync("loginerror", -1), "function" == typeof a && a(-1), wx.switchTab({
                                        url: "/pages/my/my"
                                    });
                                }
                            },
                            fail: function(a) {
                                wx.showToast({
                                    icon: "none",
                                    title: "出现异常，请重试"
                                });
                            },
                            complete: function() {}
                        });
                    }
                });
            },
            fail: function() {}
        }));
    },
    showstaruser: function(t) {
        return a.data.indexOf(t) > -1;
    },
    save_formid: function(a) {
        return !1;
    },
    getParam: function(a, t) {
        var e = {}, o = {};
        return o[a] = t, e.m = o, e.openudid = "meishichina", e.uid = this.globalData.uid > 0 ? this.globalData.uid : "", 
        e.appver = "3026", e.device = this.globalData.device, e.appname = "xcx_weixin", 
        e.session = this.globalData.session, e;
    },
    globalData: {
        open_v: 0,
        uid: null,
        key: null,
        session: "",
        openapp: !1
    }
});