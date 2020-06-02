var e = require("../../utils/network.js"), t = require("../../utils/util.js"), a = {
    normal: 0,
    loading: 1,
    end: 2,
    noData: 3,
    error: 4,
    standby: 5
}, n = {
    unpurchase: 0,
    animation: 1,
    purchased: 2
};

Page({
    data: {
        animationData: "",
        focused: !1,
        purchaseState: n.purchased,
        logined: !1,
        searchAnimation: function() {},
        offset: 0,
        num: 20,
        footerState: a.normal,
        requestCount: 1,
        array: [],
        tags: [],
        banners: [],
        indicatorDots: !1,
        autoplay: !1,
        interval: 2e3,
        duration: 500
    },
    onShow: function() {
        wx.setStorageSync("selected_tabbar_path", "/pages/home/home"), wx.getStorageSync("user") ? self.setData({
            logined: !0
        }) : self.setData({
            logined: !1
        });
    },
    onLoad: function(t) {
        self = this;
        var o = 1, s = new Date(), r = s.getFullYear() + "-" + (s.getMonth() + 1) + "-" + s.getDate();
        if ((i = wx.getStorageSync("homeRequestInfo")) && i.date == r) o = i.requestCount; else {
            var i = {
                date: r,
                requestCount: o
            };
            wx.setStorageSync("homeRequestInfo", i);
        }
        if (self.setData({
            requestCount: o
        }), this.data.footerState != a.end && this.request(), wx.getStorageSync("user")) {
            var u = wx.getStorageSync("purchased");
            if (u) self.setData({
                purchaseState: "0" == u ? n.unpurchase : n.purchased
            }); else {
                var c = wx.getStorageSync("open_id");
                e.request("https://wapi.douguo.com/wxapp/getrecipepurchase", {
                    open_id: c
                }, function(e) {
                    wx.setStorageSync("purchased", e.form_id), self.setData({
                        purchaseState: "0" == e.form_id ? n.unpurchase : n.purchased
                    });
                }, function(e) {
                    wx.showModal({
                        title: "",
                        content: "别着急，网有点慢，再试试",
                        showCancel: !1
                    });
                });
            }
        } else self.setData({
            purchaseState: n.unpurchase
        });
    },
    request: function() {
        this.setData({
            footerState: a.loading
        });
        var n = this, o = "https://wapi.douguo.com/wxapp/home/" + this.data.offset + "/" + this.data.num;
        e.request(o, {
            request_count: n.data.requestCount
        }, function(e) {
            var o, s, r = n.data.requestCount + 1;
            t.isArray(e.list) ? (o = 0 == n.data.offset ? e.list : n.data.array.concat(e.list), 
            s = e.end > 0 ? a.end : a.normal, o.length <= 0 && (s = a.noData)) : (o = [], s = a.noData), 
            n.setData({
                footerState: s,
                array: o,
                requestCount: r
            });
            var i = {
                date: wx.getStorageSync("homeRequestInfo").date,
                requestCount: r
            };
            if (wx.setStorageSync("homeRequestInfo", i), t.isArray(e.header.banners)) {
                var u = e.header.banners;
                n.setData({
                    banners: u
                });
                var c = u.length > 1;
                n.setData({
                    indicatorDots: c
                });
            }
            t.isArray(e.header.tags) && n.setData({
                tags: e.header.tags
            }), wx.stopPullDownRefresh();
        }, function(e) {
            wx.showModal({
                title: "",
                content: "别着急，网有点慢，再试试",
                showCancel: !1
            });
            var t = n.data.offset - n.data.num;
            t = t < 0 ? 0 : t, n.setData({
                offset: t,
                footerState: a.error
            }), wx.stopPullDownRefresh();
        });
    },
    onPullDownRefresh: function() {
        self.setData({
            offset: 0
        }), this.request();
    },
    onReachBottom: function() {
        if (console.log("onReachBottom"), !(this.data.array.length <= 0 || this.data.footerState == a.end)) {
            var e = this.data.offset + this.data.num;
            this.setData({
                offset: e
            }), this.request();
        }
    },
    searchBlur: function(e) {
        e.detail.value.length > 0 || this.setData({
            focused: !1
        });
    },
    searchButtonPressed: function(e) {
        var t = e.detail.value.searchinput;
        t.length <= 0 || wx.navigateTo({
            url: "../search/search?keyword=" + t
        });
    },
    searchConfirm: function(e) {
        var t = e.detail.value;
        t.length <= 0 || wx.navigateTo({
            url: "../search/search?keyword=" + t
        });
    },
    searchPressed: function() {
        this.setData({
            focused: !0
        });
    },
    hotItemPressed: function(e) {
        this.setData({
            focused: !1
        });
        var t = e.currentTarget.dataset.hotSearch;
        t.action_url && t.action_url.length > 0 && wx.navigateTo({
            url: t.action_url
        });
    },
    recipeItemPressed: function(e) {
        this.setData({
            focused: !1
        });
        var t = e.currentTarget.dataset.recipeId;
        t.length <= 0 || wx.navigateTo({
            url: "../recipe/recipe?rid=" + t
        });
    },
    menuItemPressed: function(e) {
        this.setData({
            focused: !1
        });
        var t = e.currentTarget.dataset.menuId;
        t.length <= 0 || wx.navigateTo({
            url: "../menu/menu?id=" + t
        });
    },
    noteItemPressed: function(e) {
        var t = e.currentTarget.dataset.noteId;
        t.length <= 0 || (console.log("noteItemPressed"), wx.navigateTo({
            url: "../note/note?id=" + t
        }));
    },
    swiperItemPressed: function(e) {
        this.setData({
            focused: !1
        });
        var t = e.currentTarget.dataset.swiperUrl;
        if (!(t.length <= 0)) {
            var a = t.split("://");
            if (2 == a.length) {
                var n = a[0], o = a[1];
                if (n.startsWith("wx")) wx.navigateToMiniProgram({
                    appId: n,
                    path: o
                }); else if (n.startsWith("http")) {
                    var s = encodeURIComponent(t);
                    wx.navigateTo({
                        url: "../browser/browser?url=" + s
                    });
                }
            } else wx.navigateTo({
                url: t
            });
        }
    },
    forbid: function() {},
    hidePurchaseAnimation: function() {
        var e = wx.createAnimation({
            duration: 250,
            timingFunction: "ease",
            delay: 2e3
        });
        this.animation = e, e.opacity(0).step(), this.setData({
            animationData: e.export(),
            purchaseState: n.animation
        }), setTimeout(function() {
            this.setData({
                purchaseState: n.purchased
            });
        }.bind(this), 2250);
    },
    submitPurchase: function(t) {
        console.log(t);
        var a = wx.getStorageSync("user"), n = wx.getStorageSync("open_id");
        if (a && n.length > 0) {
            wx.showLoading({
                title: "开启中",
                mask: !0
            });
            var o = t.detail.formId;
            e.request("https://wapi.douguo.com/wxapp/recipepurchase", {
                open_id: n,
                form_id: o
            }, function(e) {
                wx.hideLoading(), wx.setStorageSync("purchased", e.form_id), self.hidePurchaseAnimation();
            }, function(e) {
                wx.showModal({
                    title: "",
                    content: "别着急，网有点慢，再试试",
                    showCancel: !1
                }), wx.hideLoading(e), wx.showToast({
                    title: e.message,
                    duration: 1500,
                    image: "../../images/error.png"
                });
            });
        } else self.onlogin();
    },
    onlogin: function(e) {
        self.loginAction();
    },
    loginAction: function() {
        wx.showLoading({
            title: "加载中"
        }), wx.login({
            success: function(t) {
                wx.getUserInfo({
                    success: function(a) {
                        wx.setStorageSync("nickName", a.userInfo.nickName), wx.setStorageSync("avatarUrl", a.userInfo.avatarUrl), 
                        e.request("https://passport.douguo.com/mitoSign/getwxsession", {
                            code: t.code,
                            iv: a.iv,
                            encryptedData: a.encryptedData
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
                            }), wx.hideLoading(), self.loginfailed(e);
                        });
                    },
                    fail: function(e) {
                        wx.hideLoading(), self.loginfailed(e);
                    }
                });
            }
        });
    },
    loginfailed: function(e) {
        wx.hideLoading(), wx.showToast({
            title: "授权失败",
            image: "/images/error.png"
        });
    },
    onShareAppMessage: function() {
        return {
            title: "豆果美食 - \b精选菜谱 厨房必备",
            desc: "豆果美食 开启美味生活",
            path: "/pages/home/home"
        };
    }
});