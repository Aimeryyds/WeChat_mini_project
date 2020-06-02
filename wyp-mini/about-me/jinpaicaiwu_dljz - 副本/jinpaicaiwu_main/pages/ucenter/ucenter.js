require("../../wxParse/common.js"), require("../../static/config.js");

var a = getApp();

Page({
    data: {
        thumb: "",
        nickname: "",
        orders: [],
        hasAddress: !1,
        address: {},
        order_pro_rel: [],
        userInfo: [],
        cuserInfo: [],
        cartleng: 0,
        pageid: "ucenter/ucenter",
        canIUseNickName: wx.canIUse("open-data.type.userNickName"),
        canIUseAvatarUrl: wx.canIUse("open-data.type.userAvatarUrl"),
        isdistrib: 0,
        show_homeBar: !1,
        blockshow: []
    },
    goToCart: function() {
        wx.navigateTo({
            url: "../cart/cart"
        });
    },
    backHome: function() {
        a.goToHome(!0);
    },
    backTop: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    },
    onLoad: function() {
        var a = getApp().globalData.config.blockshow || {};
        this.setData({
            blockshow: a,
            show_homeBar: 1 == getCurrentPages().length
        });
    },
    onShow: function() {
        var t = this, e = a.globalData.userInfo;
        if (e) {
            a.apiRequest("user", "order_list", {
                data: [],
                success: function(r) {
                    if ("OK" == r.data.result) {
                        if (r.data.userInfo) {
                            var o = r.data.userInfo;
                            e.account_money = o.account_money, e.account_points = o.account_points, e.user_lever_name = o.user_lever_name;
                        }
                        t.setData({
                            cartleng: a.globalData.carts.length,
                            order_num_state: r.data.order_num_state,
                            userInfo: e,
                            isdistrib: r.data.isdistrib
                        });
                    } else "2" == r.data.errmsg && wx.navigateTo({
                        url: "../login/login"
                    });
                }
            });
            var r = this.data.pageid, o = getApp().globalData.config.tabBar || {};
            if (o.list) {
                var n = !0, s = !1, i = void 0;
                try {
                    for (var c, u = o.list[Symbol.iterator](); !(n = (c = u.next()).done); n = !0) {
                        var l = c.value;
                        l.type && "page" != l.type && (l.pagePath = "");
                    }
                } catch (a) {
                    s = !0, i = a;
                } finally {
                    try {
                        !n && u.return && u.return();
                    } finally {
                        if (s) throw i;
                    }
                }
                if (this.setData({
                    tabs: o
                }), "pageappoint" == o.applyPage && o.chooseList) {
                    var g = o.chooseList.findIndex(function(a) {
                        return a == r;
                    });
                    this.setData({
                        showBar: g > -1
                    });
                } else {
                    var d = o.list.findIndex(function(a) {
                        return a.pagePath == r;
                    });
                    this.setData({
                        showBar: d > -1
                    });
                }
            }
        } else wx.navigateTo({
            url: "../login/login"
        });
    },
    payOrders: function(a) {
        wx.showToast({
            title: "请求中...",
            icon: "loading",
            duration: 5e3
        });
        var t = a.target.dataset.oid;
        t ? wx.navigateTo({
            url: "../order_confirm/order_confirm?fr=u&oid=" + t
        }) : wx.showToast({
            title: "请求失败",
            icon: "loading",
            duration: 5e3
        });
    },
    onPullDownRefresh: function() {
        this.onShow(), wx.stopPullDownRefresh();
    },
    toCart: function(a) {
        wx.redirectTo({
            url: "../shopping_cart/shopping_cart"
        });
    },
    switchTab: function(a) {
        var t = a.currentTarget.dataset.url, e = a.currentTarget.dataset.tab;
        "func" == e.type ? getApp().moduleBindTap(e) : getApp().turnToPage(t, !0);
    },
    goPage: function(t) {
        var e = t.currentTarget.dataset.page, r = t.currentTarget.dataset.active || "", o = "../" + e + "/" + e;
        r && (o += "?activeIndex=" + r), a.navigateTo({
            url: o
        });
    }
});