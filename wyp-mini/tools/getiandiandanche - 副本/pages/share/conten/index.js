var e = require("../../../utils/qqmap-wx-jssdk.js"), t = require("../../../utils/https.js"), n = (new e({
    key: "BHIBZ-3BMR3-6BV3E-YSEFY-7KS4Z-4GBVE"
}), t.imgurl), o = 60, s = function e(t) {
    if (0 == o) return t.setData({
        is_show: !0
    }), void (o = 60);
    t.setData({
        is_show: !1,
        last_time: o
    }), o--, setTimeout(function() {
        e(t);
    }, 1e3);
};

Page({
    data: {
        resSuccess: !0,
        shareImg: n + "f_bg1.png",
        shareG: n + "f_g.png",
        shareB: n + "f_b.png",
        shareQ: n + "f_q.png",
        flogo: n + "logo2.png",
        sucban: n + "banner.png",
        username: "",
        lat: "",
        lng: "",
        city: "",
        province: "",
        adcode: "",
        is_show: !0,
        uid: ""
    },
    bindKeyInput: function(e) {
        this.setData({
            username: e.detail.value
        });
    },
    getcode: function() {
        var e = this, n = e.data.username;
        if (/^1[3456789]\d{9}$/.test(n)) {
            e.setData({
                is_show: !e.data.is_show
            }), s(e);
            var o = {
                account: n,
                type: 1
            };
            t.req("User/GetCode", o, function(e, t) {
                0 == t.data.code ? wx.showToast({
                    title: "发送成功",
                    icon: "success",
                    duration: 2e3
                }) : wx.showModal({
                    title: "操作失败",
                    content: t.data.retmsg,
                    showCancel: !1
                });
            });
        } else wx.showToast({
            title: "请正确填写手机号码",
            icon: "none",
            duration: 2e3
        });
    },
    formSubmit: function(e) {
        var n = this;
        if ("" != e.detail.value.phone) if ("" != e.detail.value.yzm) if (n.uid) {
            var o = {
                uid: n.uid,
                account: e.detail.value.phone,
                code: e.detail.value.yzm
            };
            t.req("User/Share", o, function(e, t) {
                0 == t.data.code ? (wx.showToast({
                    title: "注册成功",
                    icon: "success",
                    duration: 2e3
                }), n.setData({
                    resSuccess: !1
                }), setTimeout(function() {
                    wx.navigateTo({
                        url: "/pages/index/index"
                    });
                }, 2e3)) : wx.showModal({
                    title: "",
                    content: t.data.retmsg,
                    showCancel: !1,
                    success: function(e) {
                        e.confirm && n.setData({
                            value: ""
                        });
                    }
                });
            });
        } else wx.showToast({
            title: "未获取到分享者信息",
            icon: "none",
            duration: 2e3
        }); else wx.showToast({
            title: "请输入验证码",
            icon: "none",
            duration: 2e3
        }); else wx.showToast({
            title: "请填写手机号码",
            icon: "none",
            duration: 2e3
        });
    },
    onLoad: function(e) {
        this.uid = e.uid;
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});