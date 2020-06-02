var t = require("../../../utils/server"), a = wx.getStorageSync("utoken"), s = "", e = "", o = 1;

Page({
    data: {
        loading: !0,
        keywords: "",
        goods: [],
        empty: !1,
        style: !0,
        showL: !1,
        noMoreData: !1,
        refresh: !1,
        saleIndex: "0",
        saleArrowTop: "",
        priceArrowTop: "",
        submitData: {},
        showScrollTop: !1
    },
    onLoad: function(t) {
        var r = this;
        a = wx.getStorageSync("utoken"), o = 1;
        r.data.submitData = {
            utoken: a,
            page: 1,
            sort: "",
            sort_asc: "",
            cate: ""
        }, t.categoryId && (s = t.categoryId, r.data.submitData.cate = t.categoryId, r.setData({
            submitData: r.data.submitData
        })), t.keywords && "undefined" != t.keywords && (e = t.keywords, r.data.submitData.keywords = t.keywords, 
        r.setData({
            keywords: e
        }));
        var i = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
        if (i.tabBarPage) {
            var d = i.tabBarPage;
            for (var n in d) "/pages/goods/list/list" == d[n] || r.getList(r.data.submitData);
        }
    },
    onShow: function(t) {
        var a = this, s = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
        if (s.tabBarPage) {
            var e = s.tabBarPage;
            for (var o in e) "/pages/goods/list/list" == e[o] && a.getList(a.data.submitData);
        }
    },
    onHide: function() {
        var t = this, a = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
        if (a.tabBarPage) {
            var s = a.tabBarPage;
            for (var e in s) "/pages/goods/list/list" == s[e] && (t.data.submitData.cate = "", 
            t.data.submitData.page = 1, t.data.submitData.keywords = "", t.setData({
                submitData: t.data.submitData,
                goods: [],
                loading: !1,
                keywords: ""
            }));
        }
        t.setData({
            loading: !1
        });
    },
    onPageScroll: function(t) {
        var a = this;
        t.scrollTop > 500 ? a.setData({
            showScrollTop: !0
        }) : a.setData({
            showScrollTop: !1
        });
    },
    goToTop: function() {
        this.setData({
            showScrollTop: !1
        }), wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    },
    getList: function(a) {
        var s = this;
        wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.goods",
            showToast: !1,
            data: a,
            method: "GET",
            success: function(t) {
                var a = t.data.result.goods_list;
                if (t.data.result.goods_list) {
                    for (var e in a) a[e].title.length > 26 && (a[e].title = a[e].title.substring(0, 27) + "...");
                    s.setData({
                        refresh: !1,
                        goods: a,
                        empty: !1
                    });
                } else s.setData({
                    noMoreData: !0,
                    empty: !0
                });
                s.setData({
                    loading: !1
                });
            }
        });
    },
    getGoodsList: function(a, s) {
        var e = this, s = s;
        t.sendRequest({
            url: "?r=wxapp.goods",
            showToast: s,
            data: a,
            method: "GET",
            success: function(t) {
                var a = t.data.result.goods_list;
                t.data.result.goods_list ? e.setData({
                    refresh: !1
                }) : e.setData({
                    noMoreData: !0
                });
                var s = e.data.goods;
                for (var o in a) a[o].title.length > 26 && (a[o].title = a[o].title.substring(0, 27) + "..."), 
                s[o] != a[o] && s.push(a[o]);
                0 == s.length ? e.setData({
                    empty: !0
                }) : (e.setData({
                    empty: !1
                }), wx.stopPullDownRefresh(), e.setData({
                    goods: s
                })), e.setData({
                    loading: !1
                });
            }
        });
    },
    search: function(t) {
        var a = this;
        o = 1, a.data.goods = [], a.data.submitData.page = 1, a.data.submitData.keywords = e, 
        a.getGoodsList(a.data.submitData);
    },
    bindChange: function(t) {
        e = t.detail.value;
    },
    tapGoods: function(t) {
        var a = t.currentTarget.dataset.objectId;
        wx.navigateTo({
            url: "../../../../../detail/detail?objectId=" + a
        });
    },
    onReachBottom: function() {
        var t = this;
        t.data.refresh || (t.setData({
            refresh: !0,
            noMoreData: !1
        }), t.data.submitData.page = t.data.submitData.page + 1, t.getGoodsList(t.data.submitData), 
        wx.showToast({
            title: "加载中",
            icon: "loading"
        }));
    },
    onPullDownRefresh: function() {
        var t = this;
        t.setData({
            goods: []
        }), o = 1, t.data.submitData.page = 1, t.getGoodsList(t.data.submitData), wx.stopPullDownRefresh();
    },
    styleSelect: function() {
        var t = this;
        t.data.style ? t.setData({
            style: !1
        }) : t.setData({
            style: !0
        });
    },
    selectSalePri: function(t) {
        var a = this;
        a.data.submitData.page = 1, o = 1, a.data.submitData.keywords && "" == e && (a.data.submitData.keywords = ""), 
        "0" == t.currentTarget.dataset.index && (a.data.submitData.sort = "", a.data.submitData.sort_asc = "", 
        a.setData({
            goods: [],
            saleIndex: t.currentTarget.dataset.index,
            priceArrowTop: "",
            saleArrowTop: ""
        }), a.getGoodsList(a.data.submitData)), "1" == t.currentTarget.dataset.index && (a.data.submitData.sort = "sales_sum", 
        "" == a.data.saleArrowTop ? (a.data.submitData.sort_asc = "desc", a.setData({
            saleArrowTop: "true"
        })) : "true" == a.data.saleArrowTop ? (a.data.submitData.sort_asc = "asc", a.setData({
            saleArrowTop: "false"
        })) : (a.data.submitData.sort_asc = "desc", a.setData({
            saleArrowTop: "true"
        })), a.setData({
            goods: [],
            saleIndex: t.currentTarget.dataset.index,
            priceArrowTop: ""
        }), a.getGoodsList(a.data.submitData)), "2" == t.currentTarget.dataset.index && (a.data.submitData.sort = "is_new", 
        a.data.submitData.sort_asc = "", a.setData({
            goods: [],
            saleIndex: t.currentTarget.dataset.index,
            priceArrowTop: "",
            saleArrowTop: ""
        }), a.getGoodsList(a.data.submitData)), "3" == t.currentTarget.dataset.index && (a.data.submitData.sort = "shop_price", 
        "" == a.data.priceArrowTop ? (a.data.submitData.sort_asc = "desc", a.setData({
            priceArrowTop: "true"
        })) : "true" == a.data.priceArrowTop ? (a.data.submitData.sort_asc = "asc", a.setData({
            priceArrowTop: "false"
        })) : (a.data.submitData.sort_asc = "desc", a.setData({
            priceArrowTop: "true"
        })), a.setData({
            goods: [],
            saleIndex: t.currentTarget.dataset.index,
            saleArrowTop: ""
        }), a.getGoodsList(a.data.submitData));
    }
});