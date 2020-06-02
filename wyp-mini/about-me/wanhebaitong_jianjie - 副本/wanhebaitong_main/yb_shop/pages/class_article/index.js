var t = getApp(), e = t.requirejs("api/index"), a = t.requirejs("core");

Page({
    data: {
        route: "class_article",
        menu: t.tabBar,
        menu_show: !1,
        show: !1,
        default_img: "http://ddfwz.sssvip.net/asmce/yigou/class_icon.png",
        height: 160
    },
    menu_url: function(t) {
        a.menu_url(t, 2);
    },
    onLoad: function(t) {
        null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), this.setData({
            menu: getApp().tabBar
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), a.setting(), this.getlist();
    },
    getlist: function() {
        var a = this;
        t.get_menu(function(t) {
            e.Article_Class("class_article_1", a);
        });
    },
    onPullDownRefresh: function() {
        this.getlist(), wx.stopPullDownRefresh();
    },
    onShareAppMessage: function() {}
});