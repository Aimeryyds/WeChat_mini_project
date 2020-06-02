var t = getApp(), a = t.requirejs("api/index"), e = t.requirejs("core");

Page({
    data: {
        route: "find_info",
        menu: t.tabBar,
        menu_show: !1,
        show: !1
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    onLoad: function(a) {
        null != a && null != a && this.setData({
            tabbar_index: a.tabbar_index ? a.tabbar_index : -1
        }), e.setting(), this.setData({
            menu: getApp().tabBar
        }), t.isInArray(getApp().tabBar.list, this.data.route) && this.setData({
            menu_show: !0
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.setData({
            id: a.id
        });
    },
    onShow: function() {
        var t = this, e = t.data.id;
        a.ArticleInfo("", e, t, function(a) {
            t.setData(a);
        });
    },
    onPullDownRefresh: function() {
        this.onShow(), wx.stopPullDownRefresh();
    },
    onShareAppMessage: function() {
        return {
            title: this.data.detail.title,
            path: "/yb_shop/pages/find_info/index?id=" + this.data.detail.article_id
        };
    }
});