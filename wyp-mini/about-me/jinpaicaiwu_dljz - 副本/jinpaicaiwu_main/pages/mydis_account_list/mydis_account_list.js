var t = getApp();

Page({
    data: {},
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var a = this;
        t.globalData.userInfo ? t.apiRequest("user", "mydis_account_list", {
            data: [],
            success: function(t) {
                if ("OK" == t.data.result) {
                    if (t.data.tixian_accounts) {
                        var n = t.data.tixian_accounts, c = [], o = [];
                        for (var e in n) c.push(n[e].account_name + " " + n[e].account_info), o.push(n[e].id);
                        a.accounts = c, a.accids = o, a.setData({
                            accounts: c
                        }), a.setData({
                            accids: o
                        });
                    }
                } else {
                    var s = t.data.errmsg || "请求失败";
                    wx.showModal({
                        title: s,
                        content: "",
                        showCancel: !1,
                        success: function() {
                            wx.navigateBack();
                        }
                    });
                }
            }
        }) : wx.navigateTo({
            url: "../login/login"
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    add_account: function(t) {
        var a = t.currentTarget.dataset.id;
        if (a) n = "../mydis_add_account/mydis_add_account?id=" + a; else var n = "../mydis_add_account/mydis_add_account";
        wx.navigateTo({
            url: n
        });
    },
    del_account: function(a) {
        var n = a.currentTarget.dataset.id, c = this;
        if (n) wx.showModal({
            title: "温馨提示：",
            content: "是否确认删除该账户",
            success: function(a) {
                a.confirm ? t.apiRequest("user", "mydis_del_account", {
                    data: {
                        id: n
                    },
                    success: function(t) {
                        "OK" == t.data.result ? (wx.showToast({
                            title: "删除成功"
                        }), c.onShow()) : wx.showToast({
                            title: "删除失败"
                        });
                    }
                }) : a.cancel;
            }
        }); else {
            wx.showModal({
                title: "请求失败",
                content: "",
                showCancel: !1,
                success: function() {}
            });
        }
    },
    choose_account: function(t) {
        var a = t.currentTarget.dataset.index;
        if (!this.data.accounts[a]) return !1;
        wx.setStorage({
            key: "acount_index",
            data: a,
            success: function() {
                wx.navigateBack();
            }
        });
    }
});