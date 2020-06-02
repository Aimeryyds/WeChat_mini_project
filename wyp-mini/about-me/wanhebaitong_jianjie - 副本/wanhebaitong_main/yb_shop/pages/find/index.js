var t = getApp(), a = t.requirejs("api/index"), e = t.requirejs("core");

Page({
    data: {
        route: "find",
        menu: t.tabBar,
        menu_show: !1,
        loaded: !1,
        list: [],
        page: 1,
        class_id: "",
        class_id1: "",
        class_id2: "",
        cate_index: "",
        cate: [],
        class_style: 2
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    onLoad: function(t) {
        e.setting(), null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), this.setData({
            menu: getApp().tabBar,
            class_id: t.id ? t.id : "",
            class_id1: t.id ? t.id : "",
            class_style: t.class_style ? t.class_style : 2
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.getlist(), this.initCategory();
    },
    cate_select: function(t) {
        var a = this, s = a.data.cate, i = e.pdata(t), l = {};
        console.log(i), 1 == i.level && (l.cate_index = i.index, (l.class_id2 = "") == i.id ? l.cate2 = [] : l.cate2 = s[i.index].cate), 
        l.class_style = i.class_style ? i.class_style : 2, l.class_id = i.id, l["class_id" + i.level] = i.id, 
        l.list = [], l.page = 1, l.loaded = !1, a.setData(l), a.getlist();
    },
    initCategory: function() {
        var t = this;
        e.get("Article/ArticleClass", {}, function(a) {
            t.setData({
                cate: a.info
            });
        });
    },
    getlist: function() {
        var t = this, e = t.data.class_id, s = t.data.page;
        a.article_list("", s, e, t, function(a) {
            t.setData(a);
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            list: [],
            page: 1,
            loaded: !1
        }), this.getlist(), this.initCategory(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        console.log("加载更多"), this.data.loaded || this.getlist();
    },
    to_url: function(t) {
        var a = e.pdata(t), s = "";
        s = a.link ? "/yb_shop/pages/web/index?url=" + escape(a.link) + "&name=" + a.name : "/yb_shop/pages/find_info/index?id=" + a.id, 
        e.jump(s);
    },
    onShareAppMessage: function() {}
});