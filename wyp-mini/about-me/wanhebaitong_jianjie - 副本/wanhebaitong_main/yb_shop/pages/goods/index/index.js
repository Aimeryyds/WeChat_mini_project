var t = getApp(), a = t.requirejs("core"), e = t.requirejs("check");

Page({
    data: {
        route: "goods_index",
        menu: t.tabBar,
        menu_show: !1,
        icons: t.requirejs("icons"),
        page: 1,
        list: [],
        defaults: {
            keywords: "",
            isrecommand: "",
            ishot: "",
            isnew: "",
            cate_id: "",
            order: "",
            by: "desc"
        },
        listmode: "block",
        fromsearch: !1,
        isFilterShow: !1,
        params: []
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
        });
        var e = this.data.defaults;
        e.keywords = t.key || "", e.cate_id = t.cate || "", this.setData({
            filterBtns: t,
            fromsearch: t.fromsearch || !1,
            defaults: t
        }), this.initCategory(), this.data.fromsearch || this.getList();
    },
    onShow: function() {},
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
    initCategory: function() {
        var t = this;
        a.get("goods/GetCate", {}, function(a) {
            console.log(a), t.setData({
                category: a.info
            });
        });
    },
    getList: function() {
        var t = this;
        t.setData({
            loading: !0
        }), t.data.defaults.page = t.data.page, a.get("goods/GoodsList", t.data.defaults, function(e) {
            if (0 == e.code) {
                if (0 == e.info.length) return t.setData({
                    loading: !1
                }), !1;
                var s = {
                    loading: !1
                };
                0 < e.info.length && (s.page = t.data.page + 1, s.list = t.data.list.concat(e.info), 
                e.info.length < 10 && (s.loaded = !0)), t.setData(s);
            } else a.alert(e.msg);
        });
    },
    bindSearch: function(t) {
        this.setData({
            list: [],
            loading: !0
        });
        var a = e.trim(t.detail.value), s = this.data.defaults;
        s.keywords = "" != a ? a : "", this.setData({
            page: 1,
            defaults: s,
            fromsearch: !1
        }), this.getList();
    },
    bindFilterSubmit: function() {
        var t = this.data.params, a = this.data.filterBtns;
        for (var s in a) t[s] = a[s];
        e.isEmptyObject(a) && (t = this.data.defaults), t.cate = this.data.category_selected, 
        this.setData({
            page: 1,
            params: t,
            isFilterShow: !1,
            filterBtns: a,
            list: [],
            loading: !0
        }), this.getList();
    },
    bindSort: function(t) {
        var e = a.pdata(t).order, s = this.data.defaults;
        if ("" == e) {
            if (s.order == e) return;
            s.order = "";
        } else if ("price" == e) s.order == e ? "desc" == s.by ? s.by = "asc" : s.by = "desc" : s.by = "asc", 
        s.order = e; else if ("sales" == e) {
            if (s.order == e) return;
            s.order = "sales", s.by = "desc";
        }
        this.setData({
            defaults: s,
            page: 1,
            list: [],
            loading: !0
        }), this.getList();
    },
    bindCategoryEvents: function(t) {
        var a = t.target.dataset.id;
        this.setData({
            "defaults.cate_id": a
        });
    },
    btnFilterBtns: function(t) {
        var a = t.target.dataset.type, e = this.data.defaults;
        a && (e.hasOwnProperty(a) || (e[a] = ""), e[a] ? e[a] = "" : e[a] = 1, this.setData({
            defaults: e
        }));
    },
    bindFilterCancel: function() {
        this.setData({
            isFilterShow: !1
        });
    },
    showFilter: function() {
        this.setData({
            isFilterShow: !this.data.isFilterShow
        });
    },
    bindback: function() {
        wx.navigateBack();
    }
});