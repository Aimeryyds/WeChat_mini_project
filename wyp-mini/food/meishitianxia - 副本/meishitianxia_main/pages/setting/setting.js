var a = getApp();

Page({
    data: {
        username: "",
        avatar: ""
    },
    onLoad: function(a) {
        this.setData({
            username: a.username,
            avatar: unescape(a.avatar.replace("c320", "c640ms"))
        }), wx.hideShareMenu();
    },
    onShow: function() {
        wx.setStorageSync("showmy", 1);
    },
    do_logout: function() {
        wx.showModal({
            content: "确定要退出登录吗？",
            confirmColor: "#ff6767",
            success: function(e) {
                e.confirm ? (a.user_deSession(0), wx.clearStorage({
                    success: function(e) {
                        wx.setStorageSync("showmy", 1), a.globalData.uid = -2, wx.setStorageSync("uid", -2), 
                        setTimeout(function() {
                            wx.hideToast(), wx.reLaunch({
                                url: "../index/index"
                            });
                        }, 1e3);
                    }
                })) : e.cancel;
            }
        });
    },
    chooseImage: function() {
        var a = this;
        wx.chooseImage({
            count: 1,
            success: function(e) {
                a.upload_file(e.tempFilePaths, 0);
            },
            fail: function(a) {}
        });
    },
    upload_file: function(e, t) {
        var o = this, n = "user_updateUserAvatar", s = {}, i = a.getParam(n, s);
        wx.showLoading({
            title: "加载中",
            mask: !0
        }), wx.uploadFile({
            url: a.globalData.murl5 + "?p=" + JSON.stringify(i),
            filePath: e[t],
            name: "pic",
            formData: {},
            header: {
                "content-type": "multipart/form-data"
            },
            success: function(a) {
                wx.hideLoading();
                var e = JSON.parse(a.data);
                if (0 == e[n].error) {
                    var t = e[n].data.avatar;
                    o.setData({
                        avatar: t.replace("c640", "c640ms")
                    });
                } else wx.showToast({
                    icon: "none",
                    title: e[n].msg ? e[n].msg : "操作失败,请重试",
                    duration: 2e3
                });
            },
            fail: function(a) {
                wx.hideLoading(), wx.showToast({
                    icon: "none",
                    title: "操作失败,请重试"
                });
            },
            complete: function(a) {}
        });
    },
    onReady: function() {}
});