var t = getApp(), e = (t.requirejs("api/index"), t.requirejs("core"));

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
        class_style: 2,
        isvip: !1
    },
    menu_url: function(t) {
        e.menu_url(t, 2);
    },
    onLoad: function(t) {
        e.setting(), null != t && null != t && this.setData({
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
        var a = this, i = (a.data.cate, e.pdata(t)), n = {};
        console.log(i), wx.setNavigationBarTitle({
            title: i.name
        }), n.cate_index = i.index, n.class_id = i.id + "", n.list = [], n.page = 1, n.loaded = !1, 
        console.log(n), a.setData(n), a.getlist();
    },
    initCategory: function() {
        var t = this;
        e.get("paycontent/paycontentClass", {}, function(e) {
            t.setData({
                cate: e.info
            });
        });
    },
    onShow: function() {
        this.checkuser();
    },
    checkuser: function() {
        var a = this, i = {};
        e.get("paycontent/checkuser", {
            uid: t.getCache("userinfo").uid
        }, function(t) {
            0 == t.code ? (i.isvip = t.info, a.setData(i)) : e.alert(t.msg);
        }, !0);
    },
    getlist: function() {
        var a = this, i = a.data.class_id, n = a.data.page, s = {};
        e.get("paycontent/paycontent_list", {
            page: n,
            class_id: i,
            uid: t.getCache("userinfo").uid
        }, function(t) {
            0 == t.code ? (t.info ? (0 < t.info.length && (s.page = n + 1, s.list = a.data.list.concat(t.info), 
            t.info.length < 10 && (s.loaded = !0)), 0 == t.info.length && (s.loaded = !0)) : s.loaded = !0, 
            s.show = !0, a.setData(s)) : e.alert(t.msg, function() {});
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
        var a = e.pdata(t), i = "";
        i = a.link ? "/yb_shop/pages/web/index?url=" + escape(a.link) + "&name=" + a.name : "/yb_shop/pages/find_info/index?id=" + a.id, 
        e.jump(i);
    },
    onShareAppMessage: function() {}
});