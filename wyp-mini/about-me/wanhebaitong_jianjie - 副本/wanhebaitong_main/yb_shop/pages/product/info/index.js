var t = getApp(), e = (t.requirejs("api/index"), t.requirejs("core")), a = t.requirejs("wxParse/wxParse");

Page({
    data: {
        route: "find_info",
        menu: t.tabBar,
        menu_show: !1,
        show: !1,
        use_wxParse: !0
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
        }), this.getinfo();
    },
    getinfo: function() {
        var t = this, i = t.data.id, s = {};
        e.get("product/product_info", {
            id: i
        }, function(i) {
            if (wx.setNavigationBarTitle({
                title: i.info.title ? decodeURIComponent(i.info.title) : "产品详情"
            }), 0 == i.code) {
                try {
                    a.wxParse("wxParseData", "html", i.info.content, t, "0"), s.use_wxParse = !0, console.log("use wxParse !!!");
                } catch (i) {
                    s.use_wxParse = !1, console.log("not use wxParse !!!");
                }
                s.detail = i.info, s.show = !0, t.setData(s);
            } else e.alert(i.msg);
        }, !0);
    },
    onShow: function() {},
    onPullDownRefresh: function() {
        this.getinfo(), wx.stopPullDownRefresh();
    },
    onShareAppMessage: function() {
        return {
            title: this.data.detail.title,
            path: "/yb_shop/pages/product/info/index?id=" + this.data.detail.id
        };
    }
});