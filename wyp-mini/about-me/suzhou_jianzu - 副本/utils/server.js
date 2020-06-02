var t = require("./data.js");

module.exports = {
    liu_data: t.liu_data,
    setLog: function(t) {
        var o = this;
        o.sendRequest({
            url: "?r=wxapp.logs",
            showToast: !1,
            data: {
                utoken: t
            },
            method: "GET",
            success: function(t) {
                -1 == t.data.status ? o.getNewToken(function(t) {
                    o.setLog(t);
                }) : (o.globalData.userInfo = t.data, o.globalData.utoken = t.data.token, o.globalData.login = !0);
            }
        });
    },
    getNewToken: function(t) {
        var o = this, e = wx.getStorageSync("utoken");
        wx.getSetting({
            success: function(n) {
                n["scope.userInfo"] || wx.login({
                    success: function(n) {
                        var a = n.code;
                        wx.getUserInfo({
                            success: function(n) {
                                var i = wx.getExtConfigSync ? wx.getExtConfigSync() : {}, s = void 0;
                                s = i.is_cloud ? i.is_cloud : "?r=wxapp.logs.slogin", o.sendRequest({
                                    url: s,
                                    data: {
                                        code: a,
                                        encryptedData: n.encryptedData,
                                        iv: n.iv
                                    },
                                    method: "POST",
                                    success: function(a) {
                                        var i = wx.getStorageSync("mid");
                                        if (a.data) return 1 == a.data.status ? (e = a.data.result.utoken, wx.setStorageSync("utoken", e), 
                                        o.globalData.login = !0, o.globalData.userInfo = n.userInfo, n.userInfo.avatar = n.userInfo.avatarUrl, 
                                        n.userInfo.nickname = n.userInfo.nickName, i && o.sendRequest({
                                            method: "POST",
                                            showToast: !1,
                                            url: "?r=wxapp.commission.register&utoken=" + e + "&mid=" + i,
                                            data: {},
                                            success: function(t) {}
                                        }), void ("function" == typeof t && t(e))) : -1 == a.data.status ? void 0 : void a.data.status;
                                    }
                                });
                            }
                        });
                    },
                    fail: function() {}
                });
            }
        });
    },
    getUserInfo: function(t) {
        var o = this;
        this.globalData.userInfo ? "function" == typeof t && t(this.globalData.userInfo) : wx.login({
            success: function() {
                wx.getUserInfo({
                    success: function(e) {
                        o.globalData.userInfo = e.userInfo, "function" == typeof t && t(o.globalData.userInfo);
                    }
                });
            }
        }), console.log(111);
    },
    globalData: {
        userInfo: null,
        utoken: null,
        login: !1
    },
    getToPage: function(t, o) {
        var e = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
        if (e.tabBarPage) {
            var n = e.tabBarPage;
            if (t = t.currentTarget.dataset.link) {
                var a = t.split("?");
                if (-1 != n.indexOf(a[0])) return void wx.reLaunch({
                    url: t
                });
            }
            o ? wx.redirectTo({
                url: t
            }) : wx.navigateTo({
                url: t
            });
        } else {
            var t = t.currentTarget.dataset.link;
            wx.navigateTo({
                url: t
            });
        }
    },
    sendRequest: function(o, e) {
        var n, a = this, i = o.data || {}, s = o.header, c = void 0 == o.showToast, u = (wx.getExtConfigSync ? wx.getExtConfigSync() : {}).uniacid;
        n = e ? e + o.url : t.liu_data.host_url + o.url + "&i=" + u, o.method && ("post" == o.method.toLowerCase() && (i = a.modifyPostParam(i), 
        s = s || {
            "content-type": "application/x-www-form-urlencoded;"
        }), o.method = o.method.toUpperCase()), c && a.showToast({
            title: "读取中...",
            icon: "loading",
            duration: 3e3
        }), wx.request({
            url: n,
            data: i,
            method: o.method || "GET",
            header: s || {
                "content-type": "application/json"
            },
            success: function(t) {
                if (t.statusCode && 200 != t.statusCode) return a.hideToast(), void a.showModal({
                    content: "" + t.errMsg
                });
                "function" == typeof o.success && o.success(t), wx.hideToast();
            },
            fail: function(t) {
                return a.showToast({
                    title: "玩命加载中...",
                    image: "https://tws.cnweisou.com/images/loading.gif",
                    duration: 3e10
                }), "function" == typeof o.fail && o.fail(t), wx.onNetworkStatusChange(function(t) {
                    t.isConnected && a.sendRequest(o, e);
                }), !1;
            },
            complete: function(t) {
                "function" == typeof o.complete && o.complete(t);
            }
        });
    },
    modifyPostParam: function(t) {
        var o = "", e = void 0, n = void 0, a = void 0, i = void 0, s = void 0, c = void 0;
        for (e in t) if ((n = t[e]) instanceof Array) for (c = 0; c < n.length; ++c) i = n[c], 
        (s = {})[e + "[" + c + "]"] = i, o += this.modifyPostParam(s) + "&"; else if (n instanceof Object) for (a in n) i = n[a], 
        (s = {})[e + "[" + a + "]"] = i, o += this.modifyPostParam(s) + "&"; else void 0 !== n && null !== n && (o += encodeURIComponent(e) + "=" + encodeURIComponent(n) + "&");
        return o.length ? o.substr(0, o.length - 1) : o;
    },
    showModal: function(t) {
        wx.showModal({
            title: t.title || "提示",
            content: t.content,
            showCancel: t.showCancel || !1,
            cancelText: t.cancelText || "取消",
            cancelColor: t.cancelColor || "#000000",
            confirmText: t.confirmText || "确定",
            confirmColor: t.confirmColor || "#3CC51F",
            success: function(o) {
                o.confirm ? "function" == typeof t.confirm && t.confirm(o) : "function" == typeof t.cancel && t.cancel(o);
            },
            fail: function(o) {
                "function" == typeof t.fail && t.fail(o);
            },
            complete: function(o) {
                "function" == typeof t.complete && t.complete(o);
            }
        });
    },
    showToast: function(t) {
        t.icon ? wx.showToast({
            title: t.title,
            icon: t.icon,
            duration: t.duration || 1500,
            success: function(o) {
                "function" == typeof t.success && t.success(o);
            },
            fail: function(o) {
                "function" == typeof t.fail && t.fail(o);
            },
            complete: function(o) {
                "function" == typeof t.complete && t.complete(o);
            }
        }) : wx.showToast({
            title: t.title,
            image: t.image,
            duration: t.duration || 1500,
            success: function(o) {
                "function" == typeof t.success && t.success(o);
            },
            fail: function(o) {
                "function" == typeof t.fail && t.fail(o);
            },
            complete: function(o) {
                "function" == typeof t.complete && t.complete(o);
            }
        });
    }
};