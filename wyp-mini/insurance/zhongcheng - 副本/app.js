App({
    onLaunch: function(o) {},
    globalData: {
        userInfo: null,
        domainPath: "https://prd.urtrust.com.cn/weixin/",
        projectName: "MiniProgramApi",
        sessionToken: "",
        facePersons: null,
        faceImg: "",
        meetingId: ""
    },
    toLogin: function(o) {
        var e = this;
        wx.login({
            success: function(n) {
                if (console.log(n), n.code) {
                    var a = e.globalData.domainPath + e.globalData.projectName + "/login.do";
                    wx.request({
                        url: a,
                        data: {
                            code: n.code
                        },
                        header: {
                            "content-type": "application/json"
                        },
                        success: function(n) {
                            console.log(n), n.data && n.data.token ? (e.globalData.sessionToken = n.data.token, 
                            wx.setStorage({
                                key: "sessionToken",
                                data: n.data.token
                            }), console.log(o), "function" == typeof o ? o() : wx.hideLoading()) : wx.hideLoading();
                        },
                        complete: function(o) {},
                        fail: function(o) {
                            console.log(o), wx.hideLoading(), wx.showToast({
                                title: "系统错误",
                                icon: "none"
                            });
                        }
                    });
                }
            }
        });
    },
    toCheckSession: function(o) {
        var e = this;
        wx.showLoading({
            title: "登录中...",
            mask: !0
        }), wx.checkSession({
            success: function(n) {
                if (console.log("session_key 未过期"), e.globalData.sessionToken && "" != e.globalData.sessionToken) "function" == typeof o ? o() : wx.hideLoading(); else {
                    console.log("sessionToken 为空，从本地获取...");
                    try {
                        var a = wx.getStorageSync("sessionToken");
                        a ? (console.log("sessionToken=" + a), wx.showLoading({
                            title: "登录中...",
                            mask: !0
                        }), e.checkSessionToken(a, o)) : (console.log("从本地获取失败，重新登录"), e.toLogin(o));
                    } catch (n) {
                        wx.hideLoading();
                    }
                }
            },
            fail: function(n) {
                console.log(n), e.toLogin(o);
            }
        });
    },
    checkSessionToken: function(o, e) {
        var n = this;
        wx.request({
            url: n.globalData.domainPath + n.globalData.projectName + "/checkSessionToken.do",
            data: {
                sessionToken: o
            },
            header: {
                "content-type": "application/json"
            },
            success: function(a) {
                console.log(a), "0000" == a.data.errcode ? (n.globalData.sessionToken = o, console.log("从本地获取sessionToken=" + n.globalData.sessionToken), 
                "function" == typeof e ? e() : wx.hideLoading()) : (console.log("从本地获取sessionToken失效，重新登录"), 
                n.toLogin(e));
            },
            fail: function(o) {
                console.log(o), wx.hideLoading(), wx.showToast({
                    title: "系统错误",
                    icon: "none"
                });
            }
        });
    },
    getAppSessionToken: function() {
        var o = this, e = "";
        if (o.globalData.sessionToken) return e = o.globalData.sessionToken;
        try {
            if (e = wx.getStorageSync("sessionToken")) return e;
        } catch (o) {}
    },
    sendRedirect: function(o, e, n) {
        var a = this;
        e || (e = ""), n || (n = "0"), wx.request({
            url: a.globalData.domainPath + a.globalData.projectName + "/redirect.do",
            data: {
                type: o,
                sessionToken: a.globalData.sessionToken,
                formId: e,
                num: n
            },
            header: {
                "content-type": "application/json"
            },
            success: function(t) {
                if (console.log(t), "0000" == t.data.errcode) {
                    var s = t.data.url;
                    console.log(s), s = encodeURIComponent(s), a.toUrl(s);
                } else "-1000" == t.data.errcode && "1" != n ? (n = "1", a.toLogin(function() {
                    a.sendRedirect(o, e, n);
                })) : (wx.hideLoading(), t.data.errmsg ? wx.showToast({
                    title: t.data.errmsg,
                    icon: "none"
                }) : wx.showToast({
                    title: "系统错误",
                    icon: "none"
                }));
            },
            complete: function(o) {},
            fail: function(o) {
                wx.hideLoading(), console.log(o), wx.showToast({
                    title: "系统错误",
                    icon: "none"
                });
            }
        });
    },
    toUrl: function(o) {
        wx.hideLoading(), wx.navigateTo({
            url: "/pages/webview/webview?url=" + o
        });
    },
    upUserInfo: function(o, e) {
        var n = this;
        o && (o.sessionToken = n.globalData.sessionToken, wx.request({
            url: n.globalData.domainPath + n.globalData.projectName + "/updateUserInfo.do",
            data: o,
            header: {
                "content-type": "application/json"
            },
            success: function(o) {
                console.log(o);
            }
        }));
    },
    saveFormId: function(o, e) {
        var n = this, a = "";
        e && (a = e), wx.request({
            url: n.globalData.domainPath + n.globalData.projectName + "/saveFormId.do",
            data: {
                sessionToken: n.globalData.sessionToken,
                formId: o,
                type: a
            },
            header: {
                "content-type": "application/json"
            },
            success: function(o) {}
        });
    }
});