var t, e = require("../../utils/network.js"), a = require("../../utils/util.js"), o = (getApp(), 
{
    normal: 0,
    loading: 1,
    end: 2,
    noData: 3,
    error: 4
});

Page({
    data: {
        logined: !1,
        user: {},
        offset: 0,
        num: 20,
        array: [],
        total: 0,
        footerState: o.normal
    },
    onLoad: function(e) {
        t = this;
    },
    onReady: function() {},
    onPullDownRefresh: function() {
        t.setData({
            offset: 0
        }), this.request();
    },
    onShow: function() {
        wx.setStorageSync("selected_tabbar_path", "/pages/collection/collection");
        var e = wx.getStorageSync("user");
        e ? (this.data.footerState != o.end && this.request(), t.setData({
            logined: !0,
            user: e
        })) : t.setData({
            logined: !1
        });
    },
    request: function() {
        this.setData({
            footerState: o.loading
        });
        var n = "https://m.douguo.com/wxapp/collect/favoriteRecipes/" + this.data.offset + "/" + this.data.num;
        e.request(n, {}, function(e) {
            var n, i;
            a.isArray(e.list) ? (n = 0 == t.data.offset ? e.list : t.data.array.concat(e.list), 
            i = e.list.length < t.data.num ? o.end : o.normal, n.length <= 0 && (i = o.noData)) : (n = [], 
            i = o.noData), t.setData({
                footerState: i,
                array: n,
                total: e.total
            }), wx.stopPullDownRefresh();
        }, function(e) {
            wx.showModal({
                title: "",
                content: "别着急，网有点慢，再试试",
                showCancel: !1
            });
            var a = t.data.offset - t.data.num;
            a = a < 0 ? 0 : a, t.setData({
                offset: a,
                footerState: o.error
            }), wx.stopPullDownRefresh();
        });
    },
    onReachBottom: function() {
        if (console.log("onReachBottom"), !(this.data.array.length <= 0 || this.data.footerState == o.end)) {
            var t = this.data.offset + this.data.num;
            this.setData({
                offset: t
            }), this.request(), this.setData({
                footerState: o.loading
            });
        }
    },
    recipeItemPressed: function(t) {
        var e = t.currentTarget.dataset.recipeId;
        wx.navigateTo({
            url: "../recipe/recipe?rid=" + e
        });
    },
    loginButtonPressed: function(e) {
        t.loginAction();
    },
    loginAction: function() {
        wx.showLoading({
            title: "加载中"
        }), wx.login({
            success: function(a) {
                wx.getUserInfo({
                    success: function(o) {
                        o.userInfo.nickName && wx.setStorageSync("nickName", o.userInfo.nickName), o.userInfo.avatarUrl && wx.setStorageSync("avatarUrl", o.userInfo.avatarUrl), 
                        e.request("https://passport.douguo.com/mitoSign/getwxsession", {
                            code: a.code,
                            iv: o.iv,
                            encryptedData: o.encryptedData
                        }, function(t) {
                            wx.hideLoading(), e.initSessionParams(t.union_id, t.third_session_key), wx.setStorageSync("open_id", t.openid), 
                            wx.navigateTo({
                                url: "../authorize/authorize"
                            });
                        }, function(e) {
                            wx.showModal({
                                title: "",
                                content: "别着急，网有点慢，再试试",
                                showCancel: !1
                            }), t.loginfailed(e);
                        });
                    },
                    fail: function(e) {
                        t.loginfailed(e);
                    }
                });
            }
        });
    },
    loginfailed: function(t) {
        wx.hideLoading(), wx.showToast({
            title: "授权失败",
            image: "../../images/error.png"
        });
    }
});