var t = getApp(), e = t.requirejs("core");

Page({
    data: {
        route: "shop_coupon",
        menu: t.tabBar,
        menu_show: !1,
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
        e.get("Market/BusCoupon", {
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
    onPullDownRefresh: function() {
        this.setData({
            page: 1,
            list: [],
            loaded: !1
        }), this.getList(), wx.stopPullDownRefresh();
    },
    getCoupon: function(t) {
        var a = this, n = e.pdata(t);
        e.get("Market/GetCoupon", {
            coupon_id: n.id,
            end_time: n.endtime,
            user_id: getApp().getCache("userinfo").uid
        }, function(t) {
            0 == t.code ? e.alert("领券成功", function() {
                a.setData({
                    page: 1,
                    list: []
                }), a.getList();
            }) : e.alert(t.msg);
        });
    },
    onShareAppMessage: function() {}
});