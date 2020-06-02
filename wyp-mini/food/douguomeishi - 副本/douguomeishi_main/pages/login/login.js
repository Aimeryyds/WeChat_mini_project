var n = require("../../utils/network.js");

require("../../utils/util.js"), getApp();

Page({
    data: {
        jumpURL: "",
        jumpToAuthorize: !1
    },
    loginButtonPressed: function(n) {
        this.loginAction();
    },
    loginAction: function() {
        var o = this;
        wx.showLoading({
            title: "加载中"
        }), wx.login({
            success: function(t) {
                wx.getUserInfo({
                    success: function(e) {
                        e.userInfo.nickName && wx.setStorageSync("nickName", e.userInfo.nickName), e.userInfo.avatarUrl && wx.setStorageSync("avatarUrl", e.userInfo.avatarUrl), 
                        n.request("https://passport.douguo.com/mitoSign/getwxsession", {
                            code: t.code,
                            iv: e.iv,
                            encryptedData: e.encryptedData
                        }, function(t) {
                            wx.hideLoading(), n.initSessionParams(t.union_id, t.third_session_key), wx.setStorageSync("open_id", t.openid), 
                            o.data.jumpToAuthorize = !0, wx.navigateTo({
                                url: "../authorize/authorize"
                            });
                        }, function(n) {
                            o.loginfailed(n);
                        });
                    },
                    fail: function(n) {
                        o.loginfailed(n);
                    }
                });
            }
        });
    },
    loginfailed: function(n) {
        wx.hideLoading(), wx.showToast({
            title: "授权失败",
            image: "../../images/error.png"
        });
    },
    onLoad: function(n) {
        if (n.url) {
            var o = decodeURIComponent(n.url);
            this.data.jumpURL = o;
        }
    },
    onReady: function() {},
    onShow: function() {
        if (this.data.jumpToAuthorize) this.data.jumpToAuthorize = !1, (n = wx.getStorageSync("user")) && n.user_id && (this.data.jumpURL.length ? wx.redirectTo({
            url: this.data.jumpURL
        }) : wx.navigateBack({})); else {
            var n = wx.getStorageSync("user");
            n && n.user_id && wx.navigateBack({});
        }
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {}
});