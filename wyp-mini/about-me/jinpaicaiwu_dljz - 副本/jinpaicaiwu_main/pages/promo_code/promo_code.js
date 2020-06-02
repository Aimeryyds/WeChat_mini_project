var t = getApp();

Page({
    data: {
        activeIndex: "nouse",
        prompt: {
            hidden: !0
        },
        promo_codes: [],
        pageid: "promo_code/promo_code"
    },
    changActive: function(a) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", o = this, n = "", s = "";
        if (o.setData({
            promo_codes: {}
        }), e) s = e; else s = a.currentTarget.dataset.id;
        "nouse" == s ? n = "canuse" : "overdue" == s && (n = "invalid"), t.apiRequest("user", "promo_code", {
            data: {
                type: n
            },
            success: function(t) {
                (t.data.result = "OK") && o.setData({
                    promo_codes: t.data.data
                });
            }
        }), o.setData({
            activeIndex: s
        });
    },
    copy_nouse: function(t) {
        var a = t.currentTarget.dataset.promo;
        wx.setClipboardData({
            data: a,
            success: function(t) {
                wx.showToast({
                    title: "复制成功",
                    icon: "success",
                    duration: 1e3
                });
            }
        });
    },
    get_query_info: function(t) {
        wx.showModal({
            title: "提示",
            content: "复制按钮高亮代表该优惠码未达到使用次数上限",
            showCancel: !1
        });
    },
    onLoad: function(t) {},
    onReady: function() {},
    onShow: function() {
        var a = this;
        0 == t.globalData.cuser.length && wx.navigateTo({
            url: "../login/login"
        }), t.apiRequest("user", "promo_code", {
            data: {},
            success: function(t) {
                "OK" == t.data.result && a.setData({
                    promo_codes: t.data.data
                });
            }
        });
        var e = this.data.pageid, o = getApp().globalData.config.tabBar || {};
        if (o.list) {
            var n = !0, s = !1, i = void 0;
            try {
                for (var r, c = o.list[Symbol.iterator](); !(n = (r = c.next()).done); n = !0) {
                    var u = r.value;
                    u.type && "page" != u.type && (u.pagePath = "");
                }
            } catch (t) {
                s = !0, i = t;
            } finally {
                try {
                    !n && c.return && c.return();
                } finally {
                    if (s) throw i;
                }
            }
            if (this.setData({
                tabs: o
            }), "pageappoint" == o.applyPage && o.chooseList) {
                var d = o.chooseList.findIndex(function(t) {
                    return t == e;
                });
                this.setData({
                    showBar: d > -1
                });
            } else {
                var p = o.list.findIndex(function(t) {
                    return t.pagePath == e;
                });
                this.setData({
                    showBar: p > -1
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