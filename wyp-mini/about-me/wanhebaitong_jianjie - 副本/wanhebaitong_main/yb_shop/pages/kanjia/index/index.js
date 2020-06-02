var t = getApp(), a = t.requirejs("core"), e = t.requirejs("api/kjb");

Page({
    data: {
        indicatorDots: !0,
        autoplay: !0,
        interval: 5e3,
        duration: 1e3,
        page: 1,
        kj_type: 1,
        show: !1,
        loaded: !1,
        list: [],
        route: "kanjia_index",
        menu: t.tabBar,
        menu_show: !1,
        config: t.config
    },
    menu_url: function(t) {
        a.menu_url(t, 2);
    },
    onLoad: function(i) {
        a.setting(), null != i && null != i && this.setData({
            tabbar_index: i.tabbar_index ? i.tabbar_index : -1
        }), this.setData({
            menu: getApp().tabBar
        }), wx.setNavigationBarTitle({
            title: getApp().tabBar.name ? decodeURIComponent(getApp().tabBar.name) : "砍价首页"
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        });
        var n = this, s = t.isInArray(getApp().tabBar.list, n.data.route);
        i.key && 1 == i.key && s && n.setData({
            tabbar_index: s,
            showtabbar: !!getApp().tabBar.IsDiDis && getApp().tabBar.IsDiDis
        }), n.getList(), e.BarIndex(function(t) {
            n.setData(t);
        });
    },
    getList: function() {
        var t = this, a = t.data.page, i = t.data.kj_type;
        e.kj_list("", i, a, t, function(a) {
            console.log(a), t.setData(a);
        });
    },
    swichNav: function(t) {
        var e = a.pdata(t);
        e.list = [], e.page = 1, e.loaded = !1, this.setData(e), this.getList();
    },
    onPullDownRefresh: function() {
        this.setData({
            list: [],
            page: 1,
            loaded: !1
        }), this.getList(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        this.data.loaded || this.getList();
    },
    url: function(t) {
        var e = a.pdata(t);
        2 == e.goods_type && wx.navigateTo({
            url: "/yb_shop/pages/kanjia/goods_info/index?id=" + e.id
        });
    }
});