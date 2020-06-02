var a = getApp();

Page({
    data: {
        drawlist: [],
        triallist: [],
        loading: !0,
        loading_end: !1,
        loading_fail: !1,
        userInfo: "",
        myuid: "",
        isSign: 0
    },
    onLoad: function(t) {
        var i = this;
        i.setData({
            myuid: a.globalData.uid
        }), a.globalData.uid > 0 ? i.getUserIsSign() : i.loadMore();
    },
    getUserIsSign: function() {
        var t = this, i = "user_getUserIsSign", n = {}, e = a.getParam(i, n);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: e
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                if (0 == a.data[i].error) {
                    var n = a.data[i].data;
                    t.setData({
                        isSign: n
                    }), t.getUserinfo(1);
                } else t.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            fail: function() {
                t.setData({
                    loading: !1,
                    loading_fail: !0
                });
            }
        });
    },
    getUserinfo: function(t) {
        var i = this, n = "user_getUserinfo", e = {
            uid: a.globalData.uid
        }, o = a.getParam(n, e);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: o
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                if (0 == a.data[n].error) {
                    var e = a.data[n].data;
                    i.setData({
                        userInfo: e
                    }), 1 == t && i.loadMore();
                } else i.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            fail: function() {
                i.setData({
                    loading: !1,
                    loading_fail: !0
                });
            }
        });
    },
    loadMore: function() {
        var t = this, i = "goods_index", n = {}, e = a.getParam(i, n);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: e
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[i].error ? t.setData({
                    loading: !1,
                    drawlist: a.data[i].data.drawlist,
                    triallist: a.data[i].data.triallist
                }) : t.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            fail: function() {
                t.setData({
                    loading: !1,
                    loading_fail: !0
                });
            },
            complete: function() {}
        });
    },
    do_sign: function() {
        var t = this, i = "user_runsign", n = {}, e = a.getParam(i, n);
        wx.request({
            url: a.globalData.murl5,
            data: {
                p: e
            },
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                0 == a.data[i].error ? (t.setData({
                    isSign: 1
                }), t.getUserinfo(), wx.showToast({
                    title: "签到成功",
                    icon: "success"
                })) : wx.showToast({
                    title: a.data[i].msg ? a.data[i].msg : "操作失败",
                    icon: "none"
                });
            },
            fail: function() {
                wx.showToast({
                    title: "操作失败，请重试",
                    icon: "none"
                });
            }
        });
    },
    clickinfo: function(t) {
        var i = this;
        a.globalData.uid = -1, wx.getUserInfo({
            success: function(t) {
                console.log("sss"), a.getId(function(a) {
                    a > 0 && i.getUserIsSign();
                });
            }
        });
    },
    btn_phone_login: function() {
        wx.redirectTo({
            url: "../phone_login1/phone_login1?ref=goods"
        });
    },
    onShareAppMessage: function() {
        return {
            title: "福利社",
            path: "/pages/index/index?type=goods&inviteuid=" + a.globalData.uid
        };
    }
});