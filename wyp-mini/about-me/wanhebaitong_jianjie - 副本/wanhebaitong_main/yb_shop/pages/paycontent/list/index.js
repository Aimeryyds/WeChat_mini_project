var t = getApp(), a = (t.requirejs("api/index"), t.requirejs("core"));

Page({
    data: {
        route: "find",
        menu: t.tabBar,
        menu_show: !1,
        loaded: !1,
        list: [],
        page: 1,
        class_id: "0",
        cate_index: "",
        cate: [],
        class_style: 2
    },
    menu_url: function(t) {
        a.menu_url(t, 2);
    },
    onLoad: function(t) {
        a.setting(), null != t && null != t && this.setData({
            tabbar_index: t.tabbar_index ? t.tabbar_index : -1
        }), this.setData({
            menu: getApp().tabBar,
            class_id: t.id ? t.id : "0"
        }), 0 <= this.data.tabbar_index && this.setData({
            showtabbar: !0
        }), this.getlist(), this.initCategory();
    },
    cate_select: function(t) {
        console.log(t);
        var e = this, i = (e.data.cate, a.pdata(t)), n = {};
        console.log(i), n.cate_index = i.index, n.class_id = i.id + "", n.list = [], n.page = 1, 
        n.loaded = !1, console.log(n), e.setData(n), e.getlist();
    },
    initCategory: function() {
        var t = this;
        a.get("product/productClass", {}, function(a) {
            t.setData({
                cate: a.info
            });
        });
    },
    getlist: function() {
        var t = this, e = t.data.class_id, i = t.data.page, n = {};
        a.get("product/product_list", {
            page: i,
            class_id: e
        }, function(e) {
            0 == e.code ? (e.info ? (0 < e.info.length && (n.page = i + 1, n.list = t.data.list.concat(e.info), 
            e.info.length < 10 && (n.loaded = !0)), 0 == e.info.length && (n.loaded = !0)) : n.loaded = !0, 
            n.show = !0, wx.setNavigationBarTitle({
                title: e.info.class_name ? decodeURIComponent(e.info.class_name) : "产品列表"
            }), t.setData(n)) : a.alert(e.msg, function() {});
        }, !0);
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
        var e = a.pdata(t), i = "";
        i = e.link ? "/yb_shop/pages/web/index?url=" + escape(e.link) + "&name=" + e.name : "/yb_shop/pages/find_info/index?id=" + e.id, 
        a.jump(i);
    },
    onShareAppMessage: function() {}
});