require("../../wxParse/common.js");

var a = getApp();

Page({
    data: {
        motto: "用户登录",
        userInfo: {},
        userName: "",
        userPassword: "",
        boo: !1
    },
    bindViewTap: function() {
        wx.navigateTo({
            url: "../logs/logs"
        });
    },
    userNameInput: function(a) {
        this.setData({
            userName: a.detail.value
        });
    },
    userPasswordInput: function(a) {
        this.setData({
            userPassword: a.detail.value
        });
    },
    backHome: function() {
        var a = getApp().globalData.config.tabBar || {}, t = "/pages/page1/page1";
        a.list && (t = "/pages/" + a.list[0].pagePath), getApp().redirectTo({
            url: t
        });
    },
    logIn: function() {
        var t = wx.getStorageSync("openid");
        t.length > 1 ? a.apiRequest("weixin", "dologin", {
            data: {
                username: this.data.userName,
                password: this.data.userPassword,
                openid: t
            },
            success: function(t) {
                "OK" == t.data.result ? (a.globalData.APISESSID = t.data.APISESSID, a.globalData.hadlogin = !0, 
                wx.navigateBack({
                    delta: 1
                })) : wx.showModal({
                    title: "帐号或密码错误！",
                    content: ""
                });
            }
        }) : wx.showModal({
            title: "获取用户信息失败！",
            content: ""
        });
    },
    auto_registered: function(t) {
        var e = this, o = wx.getStorageSync("openid"), n = wx.getStorageSync("fxid");
        o.length > 1 ? a.apiRequest("weixin", "auto_registered", {
            data: {
                openid: o,
                headphoto: e.data.userInfo.avatarUrl,
                nickName: e.data.userInfo.nickName,
                fxid: n
            },
            success: function(t) {
                if ("OK" == t.data.result) a.globalData.APISESSID = t.data.APISESSID, a.globalData.hadlogin = !0, 
                wx.showToast({
                    title: "注册成功"
                }), wx.navigateBack({
                    delta: 1
                }); else {
                    var e = t.data.errmsg || "请求失败！";
                    wx.showModal({
                        title: e,
                        content: ""
                    });
                }
            }
        }) : wx.showModal({
            title: "自动注册失败！",
            content: ""
        });
    },
    onLoad: function() {
        var t = this;
        a.getUserInfo(function(a) {
            t.setData({
                userInfo: a
            });
        }), wx.getStorageSync("openid").length < 1 && wx.showModal({
            title: "获取用户信息失败！",
            content: ""
        });
    },
    onShow: function() {
        var t = wx.getStorageSync("openid");
        if (a.globalData.hadInLoginPage = !0, t) {
            var e = {
                openid: t
            };
            a.apiRequest("weixin", "signin", {
                data: e,
                success: function(t) {
                    "OK" == t.data.result && (a.globalData.cuser = t.data, wx.navigateBack());
                }
            });
        }
    },
    shuaxin: function() {
        wx.redirectTo({
            url: "../index/index"
        });
    },
    onReady: function() {},
    onHide: function() {},
    onUnload: function() {},
    boo: function() {
        this.setData({
            boo: !this.data.boo
        });
    },
    bindgetuserinfo: function(a) {
        var t = a.detail.userInfo;
        this.setData({
            userInfo: t
        }), this.auto_registered();
    }
});