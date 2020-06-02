var t = getApp().$http;

Page({
    data: {
        imageUrl: "https://weixin.zsins.com/api/cshop-server/cshop-server/images/activity/zclhb/card.jpeg",
        openid: wx.getStorageSync("openid"),
        encryptedData: "",
        iv: "",
        session_key: "",
        loginName: "",
        auth: !1,
        authPopup: !1
    },
    onLoad: function(t) {
        var e = t.loginName;
        this.setData({
            loginName: e
        });
    },
    onReady: function() {},
    onShow: function() {
        wx.getStorageSync("unionid") && this.setData({
            auth: !0
        });
    },
    openauth: function() {
        this.setData({
            authPopup: !0
        });
    },
    getUserInfo: function(e) {
        var n = this, o = wx.getStorageSync("session_key"), a = e.detail, i = a.encryptedData, s = a.iv;
        "getUserInfo:ok" === a.errMsg ? (this.setData({
            encryptedData: i,
            iv: s,
            session_key: o
        }), t({
            url: "/api/cshop-token/cshop-token/controller/wxUser/manager/getAndSaveUnionId.noauth",
            method: "POST",
            data: {
                encryptDataB64: i,
                sessionKeyB64: o,
                ivB64: s
            }
        }).then(function(t) {
            n.setData({
                auth: !0
            });
        })) : wx.showModal({
            title: "",
            content: "取消授权将无法提现新人红包哦",
            success: function(t) {
                t.confirm ? console.log("用户点击确定") : t.cancel && console.log("用户点击取消");
            }
        });
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});