var t = getApp(), e = t.requirejs("core");

Page({
    data: {
        route: "member_coupon",
        menu: t.tabBar,
        menu_show: !1,
        now_time: Date.parse(new Date()) / 1e3,
        show: !1,
        loaded: !1,
        list: [],
        page: 1
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    onLoad: function(t) {
        null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), e.setting(), this.setData({
            menu: getApp().tabBar
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.getList();
    },
    getList: function() {
        var t = this;
        e.get("Market/UserCoupon", {
            page: t.data.page,
            user_id: getApp().getCache("userinfo").uid
        }, function(a) {
            if (console.log(a), 0 == a.code) {
                var n = {
                    show: !0
                };
                0 < a.info.length && (n.page = t.data.page + 1, n.list = t.data.list.concat(a.info), 
                a.info.length < 10 && (n.loaded = !0)), 0 == a.info.length && (n.loaded = !0), t.setData(n);
            } else e.alert(a.msg);
        }, !0);
    },
    onReachBottom: function() {
        this.data.loaded || this.getList();
    },
    url: function() {
        var t = "/yb_shop/pages/caregory/index";
        wx.navigateTo({
            url: t,
            fail: function(a) {
                0 <= a.errMsg.indexOf("tabbar") && e.jump(t, 4);
            }
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            page: 1,
            list: [],
            loaded: !1
        }), this.getList(), wx.stopPullDownRefresh();
    },
    onShareAppMessage: function() {}
});