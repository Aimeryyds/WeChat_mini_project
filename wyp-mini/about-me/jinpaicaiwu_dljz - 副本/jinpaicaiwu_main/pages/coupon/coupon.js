var t = getApp();

Page({
    data: {
        activeIndex: "all",
        prompt: {
            hidden: !0
        },
        coupons: [],
        pageid: "coupon/coupon"
    },
    changActive: function(a) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = this, o = "", s = "events_coupons", i = "";
        if (n.setData({
            coupons: {}
        }), e) i = e; else i = a.currentTarget.dataset.id;
        "all" == i ? o = "canuse" : "overdue" == i ? o = "expired" : "nouse" != i && "hasuse" != i || (s = "coupons", 
        o = i), t.apiRequest("user", s, {
            data: {
                type: o
            },
            success: function(t) {
                (t.data.result = "OK") && n.setData({
                    coupons: t.data.data
                });
            }
        }), n.setData({
            activeIndex: i
        });
    },
    get_coupons: function(a) {
        var e = this, n = a.currentTarget.dataset.id;
        t.apiRequest("user", "gotcoupon", {
            data: {
                cid: n
            },
            success: function(t) {
                if ("OK" == t.data.result) wx.showToast({
                    title: "领取成功",
                    icon: "success",
                    duration: 2e3
                }), e.changActive("", "nouse"); else if ("2" == t.data.errmsg) wx.showToast({
                    title: "请先登录",
                    icon: "loading",
                    duration: 2e3
                }), wx.navigateTo({
                    url: "../login/login"
                }); else {
                    t.data.errmsg;
                    wx.showToast({
                        title: "领取失败",
                        icon: "none",
                        duration: 2e3
                    });
                }
            }
        });
    },
    show_des: function(t) {
        var a = this, e = t.currentTarget.dataset.index, n = a.data.coupons[e].description;
        wx.showModal({
            title: "使用规则",
            content: n,
            showCancel: !1,
            success: function(t) {}
        });
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var a = this;
        0 == t.globalData.cuser.length && wx.navigateTo({
            url: "../login/login"
        }), t.apiRequest("user", "events_coupons", {
            data: {},
            success: function(t) {
                "OK" == t.data.result && a.setData({
                    coupons: t.data.data
                });
            }
        });
        var e = this.data.pageid, n = getApp().globalData.config.tabBar || {};
        if (n.list) {
            var o = !0, s = !1, i = void 0;
            try {
                for (var u, c = n.list[Symbol.iterator](); !(o = (u = c.next()).done); o = !0) {
                    var r = u.value;
                    r.type && "page" != r.type && (r.pagePath = "");
                }
            } catch (t) {
                s = !0, i = t;
            } finally {
                try {
                    !o && c.return && c.return();
                } finally {
                    if (s) throw i;
                }
            }
            if (this.setData({
                tabs: n
            }), "pageappoint" == n.applyPage && n.chooseList) {
                var d = n.chooseList.findIndex(function(t) {
                    return t == e;
                });
                this.setData({
                    showBar: d > -1
                });
            } else {
                var l = n.list.findIndex(function(t) {
                    return t.pagePath == e;
                });
                this.setData({
                    showBar: l > -1
                });
            }
        }
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    switchTab: function(t) {
        var a = t.currentTarget.dataset.url, e = t.currentTarget.dataset.tab;
        "func" == e.type ? getApp().moduleBindTap(e) : getApp().turnToPage(a, !0);
    }
});