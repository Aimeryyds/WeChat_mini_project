var t = getApp(), a = t.requirejs("core");

Page({
    data: {
        route: "book_list",
        menu: t.tabBar,
        menu_show: !1,
        loaded: !1,
        show: !1,
        list: [],
        page: 1
    },
    menu_url: function(t) {
        a.menu_url(t, 2);
    },
    onLoad: function(t) {
        null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), a.setting(), this.setData({
            menu: getApp().tabBar
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.getlist();
    },
    to_url: function(t) {
        var e = this.data.list, o = a.pdata(t).index;
        a.jump("/yb_shop/pages/book_info/index?data=" + JSON.stringify(e[o]));
    },
    getlist: function() {
        var t = this, e = t.data.page;
        a.get("Market/booklist", {
            page: e
        }, function(o) {
            0 == o.code ? 0 < o.info.length ? t.setData({
                list: t.data.list.concat(o.info),
                show: !0,
                page: e + 1
            }) : t.setData({
                loaded: !0
            }) : a.alert(o.msg);
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            list: [],
            page: 1,
            loaded: !1
        }), this.getlist(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        console.log("加载更多"), this.data.loaded || this.getlist();
    },
    onShow: function() {},
    onShareAppMessage: function() {}
});