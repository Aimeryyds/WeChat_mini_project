var o = "https://api.k.sohu.com/", e = require("lib/store"), t = wx.getSystemInfoSync(), n = "111", a = "NjM3MzgyNTk4ODcwNjg3MzM1OA==", s = require("./lib/event-hub.js");

require("./lib/ald-stat/ald-stat.js");

App({
    onLaunch: function(o) {
        console.log("onlaunch.."), console.log(o), console.log(t);
        var e = this;
        this.initData(o), console.log(this.globalData), e.getNetworkType().then(function() {
            return e.login();
        }).then(function() {
            return e.getAppConfig();
        }).then(function() {
            e.getLocationData();
        }).then(function() {
            e.order.onFinish("onLaunch");
        }), console.log("进入小程序");
    },
    onShow: function(o) {
        this.globalData.sceneId = o ? o.scene : "", console.log("场景值: " + this.globalData.sceneId), 
        this.order.onFinish("onShow");
    },
    getNetworkType: function() {
        var o = this;
        return new Promise(function(e, t) {
            wx.getNetworkType({
                success: function(e) {
                    o.globalData.nettype = e.networkType, console.log("---aaa", o.globalData.nettype);
                },
                complete: function() {
                    e();
                }
            });
        });
    },
    initData: function(o) {
        this.globalData.shareFrom = o ? o.query.shareToken : "", this.globalData.shareFromNewsType = o ? o.query.newsType : "", 
        this.globalData.sceneId = o ? o.scene : "", console.log("场景值: " + this.globalData.sceneId);
        var e = wx.getStorageSync("logs") || [];
        e.unshift(Date.now()), wx.setStorageSync("logs", e), wx.setStorageSync("enterTime", 1 + (wx.getStorageSync("enterTime") || 0)), 
        this.globalData.usrKey = wx.getStorageSync("usrKey") || "", this.globalData.usrLoc = wx.getStorageSync("usrLoc") || "", 
        this.globalData.userInfo = wx.getStorageSync("userInfo") || "";
    },
    rpxToPxRatio: t.windowWidth / 750,
    store: new e(),
    checkAbleLaunchApp: null,
    login: function() {
        var o = this, e = function(o) {
            return new Promise(function(e, t) {
                wx.request({
                    url: "https://api.k.sohu.com/api/applet/profile/login.go",
                    data: {
                        code: o
                    },
                    success: function(o) {
                        var n = {
                            getUserInfoUrl: o
                        };
                        console.log(n), o.data.data.openid || (wx.showToast({
                            title: "获取openid失败，请退出重进",
                            icon: "success",
                            duration: 2e3
                        }), t(new Error("获取openid失败，请退出重进"))), getApp().globalData.usrKey = o.data.data, 
                        wx.setStorageSync("usrKey", o.data.data), e();
                    },
                    fail: function(o) {
                        console.log("用户拒绝授权，获取openid失败！："), console.log(o), t(new Error(o.message));
                    }
                });
            });
        }, t = function() {
            return new Promise(function(o, t) {
                wx.login({
                    success: function(n) {
                        console.log(n), n.code ? e(n.code).then(function() {
                            o();
                        }) : (console.log("获取用户登录态失败！" + n.errMsg), t(new Error(n.errMsg)));
                    },
                    fail: function(o) {
                        console.log("登录出错！" + o.message), t(new Error(o.message));
                    }
                });
            });
        };
        return new Promise(function(e, n) {
            wx.checkSession({
                success: function() {
                    console.log("session 未过期，并且在本生命周期一直有效"), o.globalData.usrKey.openid ? e() : t().then(function() {
                        e();
                    });
                },
                fail: function() {
                    t().then(function() {
                        e();
                    });
                }
            });
        });
    },
    getAppConfig: function() {
        var o = this;
        return new Promise(function(e, t) {
            wx.request({
                url: "https://api.k.sohu.com/api/applet/lightApp/setting.go",
                data: {
                    openId: o.globalData.usrKey.openid,
                    p1: a,
                    u: n
                },
                success: function(t) {
                    console.log("获取配置信息:"), console.log(t), "200" == t.statusCode && (o.globalData.isRelevanceOpen = "0" != t.data.data["smc.h5.wechat.relevance.isOpen"], 
                    o.globalData.activityData = JSON.parse(t.data.data["smc.h5.wechat.activity.config"])), 
                    e();
                },
                fail: function(o) {
                    t(new Error("获取配置信息失败: " + o.message));
                }
            });
        });
    },
    getLocationData: function() {
        var o = this;
        return new Promise(function(e, t) {
            o.auth.locationInfo(function() {
                o.globalData.usrLoc = {}, wx.getLocation({
                    success: function(e) {
                        o.globalData.usrLoc.latitude = e.latitude, o.globalData.usrLoc.longitude = e.longitude, 
                        o.globalData.usrLoc.accuracy = e.accuracy, o.globalData.usrLoc.speed = e.speed, 
                        wx.request({
                            url: "https://api.k.sohu.com/api/function/location.go",
                            data: {
                                openId: o.globalData.usrKey.openid,
                                p1: a,
                                u: n,
                                cdma_lng: o.globalData.usrLoc.longitude,
                                cdma_lat: o.globalData.usrLoc.latitude,
                                cdma_acc: o.globalData.usrLoc.accuracy,
                                cdma_sTime: Date.now(),
                                apiVersion: 38
                            },
                            success: function(e) {
                                o.globalData.usrLoc.gbcode = e.data.gbcode || "";
                            }
                        });
                    },
                    complete: function() {
                        e();
                    }
                });
            });
        });
    },
    getUserData: function() {
        var o = this;
        return new Promise(function(e, t) {
            o.auth.usrinfo(function() {
                o.globalData.usrLoc = {}, wx.getUserInfo({
                    success: function(o) {},
                    complete: function() {
                        e();
                    }
                });
            });
        });
    },
    auth: {
        usrinfo: function(o) {
            wx.getSetting({
                success: function(e) {
                    e.authSetting["scope.userInfo"] ? o() : wx.authorize({
                        scope: "scope.userInfo",
                        fail: function() {
                            console.log("fail");
                        },
                        complete: function() {
                            console.log("compelete"), o();
                        }
                    });
                }
            });
        },
        locationInfo: function(o) {
            wx.getSetting({
                success: function(e) {
                    e.authSetting["scope.userLocation"] ? o() : wx.authorize({
                        scope: "scope.userLocation",
                        complete: function() {
                            o();
                        }
                    });
                }
            });
        }
    },
    order: {
        funcMap: {
            onLaunch: {
                status: !1,
                callbacks: []
            },
            onShow: {
                status: !1,
                callbacks: []
            }
        },
        ordering: function(o, e, t) {
            var n = this;
            n.funcMap[t].status ? e() : n.funcMap[t].callbacks.push({
                name: o,
                callback: e
            });
        },
        onFinish: function(o) {
            var e = this;
            e.funcMap[o].status = !0, e.funcMap[o].callbacks.forEach(function(o, e) {
                o.callback();
            });
        }
    },
    globalData: {
        version: "1.3.3",
        h: 9127,
        userInfo: null,
        sceneId: null,
        baseUrl: o,
        u: n,
        usrLoc: {},
        usrKey: {},
        shareFrom: "",
        systemInfo: t,
        unReadMsgNum: 0,
        nettype: null,
        reqParam: {
            apiVersion: "41",
            channelId: 1,
            gid: -1,
            p1: a,
            busiCode: 2,
            pid: -1
        },
        isRelevanceOpen: !1,
        activityData: {}
    },
    EventHub: s
});