var a = getApp();

Page({
    data: {
        page: 1,
        loading: !0,
        loading_end: !1,
        loading_fail: !1,
        userlist: [],
        status: !0
    },
    onReachBottom: function() {
        this.loadMore();
    },
    loadMore: function() {
        var t = this;
        if (!t.data.loading_end && t.data.status) {
            t.data.page;
            t.setData({
                loading: !0,
                loading_end: !1,
                loading_fail: !1,
                status: !1
            });
            var o = "follow_getMyFollowingUserList", e = {
                pageindex: t.data.page
            }, n = a.getParam(o, e);
            wx.request({
                url: a.globalData.murl5,
                data: {
                    p: n
                },
                header: {
                    "Content-Type": "application/json"
                },
                success: function(a) {
                    0 == a.data[o].error ? t.setData({
                        userlist: t.data.userlist.concat(a.data[o].data),
                        loading: !1,
                        page: t.data.page + 1
                    }) : t.setData({
                        loading: !1,
                        loading_fail: !0
                    }), 0 == a.data[o].data.length && t.setData({
                        loading: !1,
                        loading_end: !0
                    });
                },
                fail: function() {
                    t.setData({
                        loading: !1,
                        loading_fail: !0
                    });
                },
                complete: function() {
                    t.setData({
                        status: !0
                    });
                }
            });
        }
    },
    onLoad: function(a) {
        wx.hideShareMenu(), this.loadMore();
    },
    onReady: function() {},
    do_unfollow: function(t) {
        var o = this, e = t.currentTarget.dataset.idx, n = o.data.userlist, i = "follow_unfollowMe", s = {
            otheruid: o.data.userlist[e].uid
        }, l = a.getParam(i, s);
        wx.showModal({
            content: "确定要取消关注吗？",
            confirmColor: "#ff6767",
            success: function(t) {
                t.confirm ? wx.request({
                    url: a.globalData.murl5,
                    data: {
                        p: l
                    },
                    header: {
                        "Content-Type": "application/json"
                    },
                    success: function(a) {
                        0 == a.data[i].error ? (n[e].hidden = !0, o.setData({
                            userlist: n
                        }), wx.setStorageSync("showmy", 1)) : wx.showToast({
                            title: "操作失败，请重试",
                            icon: "none"
                        });
                    },
                    fail: function() {
                        wx.showToast({
                            title: "操作失败，请重试",
                            icon: "none"
                        });
                    }
                }) : t.cancel;
            }
        });
    },
    shareSubmit: function(t) {
        a.save_formid(t.detail.formId);
    }
});