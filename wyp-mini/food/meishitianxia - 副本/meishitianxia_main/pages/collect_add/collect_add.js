var t = getApp();

Page({
    data: {
        subject: "",
        message: "",
        id: 0,
        allowadd: !1
    },
    onLoad: function(e) {
        wx.hideShareMenu();
        var a = this, o = e.id ? e.id : 0, s = e.subject ? e.subject : "", c = !(!o && !s);
        if (a.setData({
            id: o,
            subject: s,
            allowadd: c
        }), o > 0) {
            var n = "collect_getCollectInfo", i = {
                id: o
            }, l = t.getParam(n, i);
            wx.request({
                url: t.globalData.murl5,
                data: {
                    p: l
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(t) {
                    a.setData({
                        subject: t.data[n].data.subject,
                        message: t.data[n].data.message
                    });
                }
            });
        }
    },
    onShow: function() {},
    collect_subject: function(t) {
        this.setData({
            subject: t.detail.value
        }), this.check_allow();
    },
    collect_message: function(t) {
        this.setData({
            message: t.detail.value
        });
    },
    check_allow: function() {
        var t = this, e = !0;
        "" == t.data.subject && (e = !1), t.setData({
            allowadd: e
        });
    },
    collect_add_drop: function() {
        var t = this;
        "" != t.data.subject || "" != t.data.message ? wx.showModal({
            content: "确定退出编辑吗？退出后内容不保存",
            success: function(t) {
                if (t.confirm) wx.navigateBack(); else if (t.cancel) return !1;
            }
        }) : wx.navigateBack();
    },
    collect_add_do: function() {
        var e = this;
        wx.showToast({
            title: "创建中...",
            icon: "loading",
            duration: 1e4
        });
        var a = "collect_createCollect", o = {
            subject: e.data.subject,
            message: e.data.message
        }, s = t.getParam(a, o);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: s
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                0 == t.data[a].error ? (wx.setStorageSync("showmy", 1), wx.setStorageSync("showmy_collect", 1), 
                wx.showToast({
                    title: "创建成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.hideToast(), wx.navigateBack();
                }, 1e3)) : (wx.hideToast(), wx.showToast({
                    image: "../../image/delete_popmenu.png",
                    title: "创建失败"
                }));
            }
        });
    },
    collect_edit_do: function() {
        var e = this;
        wx.showToast({
            title: "编辑中...",
            icon: "loading",
            duration: 1e4
        });
        var a = "collect_editCollectInfo", o = {
            id: e.data.id,
            subject: e.data.subject,
            message: e.data.message
        }, s = t.getParam(a, o);
        wx.request({
            url: t.globalData.murl5,
            data: {
                p: s
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(t) {
                0 == t.data[a].error ? (wx.setStorageSync("showmy", 1), wx.setStorageSync("showmy_collect", 1), 
                wx.showToast({
                    title: "编辑成功",
                    icon: "success",
                    duration: 2e3
                }), setTimeout(function() {
                    wx.hideToast(), wx.navigateBack();
                }, 1e3)) : (wx.hideToast(), wx.showToast({
                    image: "../../image/delete_popmenu.png",
                    title: "编辑失败"
                }));
            }
        });
    },
    collect_del: function() {
        var e = this;
        wx.showModal({
            content: "确定要删除本菜单吗？",
            confirmColor: "#ff6767",
            success: function(a) {
                if (a.confirm) {
                    var o = "collect_deleteCollect", s = {
                        collectid: e.data.id
                    }, c = t.getParam(o, s);
                    wx.request({
                        url: t.globalData.murl5,
                        data: {
                            p: c
                        },
                        header: {
                            "Content-Type": "application/json"
                        },
                        success: function(t) {
                            0 == t.data[o].error && (wx.setStorageSync("showmy", 1), wx.showToast({
                                title: "删除成功",
                                icon: "success",
                                duration: 2e3
                            }), setTimeout(function() {
                                wx.hideToast(), wx.switchTab({
                                    url: "../my/my"
                                });
                            }, 1e3));
                        },
                        fail: function() {},
                        complete: function() {}
                    });
                } else a.cancel;
            }
        });
    },
    onReady: function() {}
});