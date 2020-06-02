var a = getApp();

Page({
    data: {
        username: "",
        newusername: "",
        allowadd: !0
    },
    onLoad: function(a) {
        wx.hideShareMenu();
        this.setData({
            username: a.name,
            newusername: a.name
        });
    },
    login_u: function(a) {
        this.setData({
            newusername: a.detail.value,
            allowadd: !(a.detail.value.length < 2)
        });
    },
    do_changename: function() {
        var a = this;
        a.data.allowadd && a.changename();
    },
    changename: function() {
        var e = this, t = e.data.newusername;
        wx.showToast({
            title: "操作中...",
            icon: "loading",
            duration: 1e4
        });
        var n = "user_updateUsername", s = {
            uid: a.globalData.uid,
            key: a.globalData.key,
            newusername: t,
            username: e.data.username
        }, o = a.getParam(n, s);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[n].error ? (wx.setStorageSync("showmy", 1), wx.showToast({
                    title: "操作成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.hideToast(), wx.switchTab({
                        url: "../my/my"
                    });
                }, 1e3)) : (wx.hideToast(), wx.showToast({
                    icon: "none",
                    title: "操作失败" + (a.data[n].msg ? "，" + a.data[n].msg : "")
                }));
            }
        });
    },
    onReady: function() {}
});