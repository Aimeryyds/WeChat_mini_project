var a = getApp();

Page({
    data: {
        tip: " ",
        username: "",
        password: "",
        loading: !0,
        loading_fail: !1
    },
    onLoad: function(a) {
        wx.hideShareMenu();
    },
    login_u: function(a) {
        this.setData({
            username: a.detail.value
        });
    },
    login_p: function(a) {
        this.setData({
            password: a.detail.value
        });
    },
    login_drop: function() {
        wx.switchTab({
            url: "../my/my"
        });
    },
    login_do: function() {
        var t = this, e = t.data.username, s = t.data.password;
        if ("" == e || "" == s) return t.setData({
            tip: "用户名或密码不能为空"
        }), !1;
        wx.showToast({
            title: "操作中...",
            icon: "loading",
            duration: 1e4
        });
        var o = "user_userLogin", i = {
            username: e,
            password: s
        }, n = a.getParam(o, i);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: n
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(e) {
                if (0 == e.data[o].error) {
                    var s = new Date().getTime();
                    a.globalData.uid = e.data[o].data.uid, a.globalData.key = e.data[o].data.session, 
                    a.globalData.session = e.data[o].data.session, wx.setStorageSync("uid", e.data[o].data.uid), 
                    wx.setStorageSync("key", e.data[o].data.session), wx.setStorageSync("session", e.data[o].data.session), 
                    wx.setStorageSync("time", s), wx.showToast({
                        title: "操作成功",
                        icon: "success",
                        duration: 2e3
                    }), wx.setStorageSync("loginerror", 0), setTimeout(function() {
                        wx.hideToast(), wx.switchTab({
                            url: "../my/my"
                        });
                    }, 1e3);
                } else wx.hideToast(), t.setData({
                    tip: e.data[o].msg,
                    username: "",
                    password: ""
                });
            }
        });
    },
    onReady: function() {
        a.globalData.uid > 0 && wx.switchTab({
            url: "../my/my"
        });
    }
});