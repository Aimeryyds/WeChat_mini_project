var t = getApp(), e = t.requirejs("core"), a = t.requirejs("check");

Page({
    data: {
        route: "product",
        menu: t.tabBar,
        menu_show: !1,
        icons: t.requirejs("icons"),
        page: 1,
        loaded: !1,
        list: [],
        cate_id: "",
        cate_id1: "",
        cate_index: "",
        cate_id2: "",
        cate_id3: "",
        category: [],
        cate2: [],
        cate3: []
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
        });
        var a = t.id || "";
        this.setData({
            cate_id: a
        }), this.initCategory(), this.getList();
    },
    onShow: function() {},
    onPullDownRefresh: function() {
        this.setData({
            page: 1,
            loaded: !1,
            list: []
        }), this.initCategory(), this.getList(), wx.stopPullDownRefresh();
    },
    onReachBottom: function() {
        this.data.loaded || this.getList();
    },
    initCategory: function() {
        var t = this;
        e.get("goods/GetCate", {}, function(e) {
            t.setData({
                category: e.info
            });
        });
    },
    getList: function() {
        var t = this;
        e.get("goods/GoodsList", {
            page: t.data.page,
            cate_id: t.data.cate_id
        }, function(a) {
            if (0 == a.code) {
                if (0 == a.info.length) return t.setData({
                    loaded: !0
                }), !1;
                var i = {};
                0 < a.info.length && (i.page = t.data.page + 1, i.list = t.data.list.concat(a.info), 
                a.info.length < 10 && (i.loaded = !0)), t.setData(i);
            } else e.alert(a.msg);
        }, !0);
    },
    selected: function(t) {
        var a = e.pdata(t).index, i = e.pdata(t).type;
        this.setData({
            list: [],
            page: 1,
            loaded: !1,
            cate_id: i,
            scroll_left: 20 * a
        }), this.getList();
    },
    cate_select: function(t) {
        var a = this, i = a.data.category, s = e.pdata(t), n = {};
        console.log(s), 1 == s.level && (n.cate_index = s.index, n.cate_id2 = "", n.cate_id3 = "", 
        n.cate3 = [], "" == s.id ? n.cate2 = [] : n.cate2 = i[s.index].cate), 2 == s.level && (n.cate3 = i[a.data.cate_index].cate[s.index].cate), 
        n.cate_id = s.id, n["cate_id" + s.level] = s.id, a.setData(n);
    },
    confirm: function() {
        this.setData({
            list: [],
            page: 1,
            loaded: !1,
            isFilterShow: !1
        }), this.getList();
    },
    showFilter: function() {
        this.setData({
            isFilterShow: !this.data.isFilterShow
        });
    },
    onShareAppMessage: function() {
        return a.onShareAppMessage();
    }
});