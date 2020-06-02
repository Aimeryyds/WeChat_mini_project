var t, a = getApp(), e = require("../../utils/functions");

require("../../utils/util");

Page({
    data: {
        categories: [],
        goods_list: [],
        shop: null,
        cid: null,
        cate: {},
        page: 1,
        size: 6,
        hasNextPage: !1,
        showMore: !1
    },
    onLoad: function(e) {
        t = this;
        var o = a.globalData.cid;
        null != o && 0 != o && (t.data.cid = o), a.getShopInfo(function(a) {
            2 == a.openStat && wx.redirectTo({
                url: "/pages/noAuth/noAuth"
            }), t.setData({
                shop: a
            }), t.getCategories();
        });
    },
    onShow: function() {
        a.getShopInfo(function(a) {
            2 == a.openStat && wx.redirectTo({
                url: "/pages/noAuth/noAuth"
            }), t.setData({
                shop: a
            });
        });
    },
    getCategories: function() {
        t.data.cid && (t.setData({
            cid: t.data.cid
        }), t.getGoodsList()), e.getCategories({
            pid: 0
        }, function(a) {
            if (t.data.cid) {
                var e = a.list.findIndex(function(a) {
                    return a.id == t.data.cid;
                });
                t.data.cate = a.list[e];
            } else t.data.cid = a.list[0].id, t.data.cate = a.list[0], t.getGoodsList();
            t.setData({
                categories: a.list,
                cid: t.data.cid ? t.data.cid : a.list[0].id,
                cate: t.data.cate
            });
        });
    },
    getGoodsList: function() {
        e.getGoodsList({
            cid: t.data.cid,
            p: t.data.page,
            s: t.data.size
        }, function(a) {
            wx.hideToast();
            var e = !1;
            a.page.totalPages > t.data.page && (e = !0);
            var o = a.page.list;
            o = o.map(function(t) {
                return t.thumb = t.thumb + "?imageslim", t;
            }), t.setData({
                showMore: !1,
                hasNextPage: e,
                goods_list: 1 == t.data.page ? o : t.data.goods_list.concat(o)
            });
        });
    },
    go2Detail: function(t) {
        var a = t.currentTarget.id;
        wx.navigateTo({
            url: "/pages/shopdetail/shopdetail?goodsSn=" + a
        });
    },
    join2Cart: function(t) {
        var a = t.currentTarget.id;
        wx.navigateTo({
            url: "/pages/shopdetail/shopdetail?show_choose=true&goodsSn=" + a
        });
    },
    switchCate: function(e) {
        var o = e.currentTarget.id, i = e.currentTarget.dataset.idx;
        o != t.data.cid && (a.globalData.cid = o, t.setData({
            cid: o,
            cate: t.data.categories[i],
            goods_list: [],
            page: 1,
            hasNextPage: !1,
            showMore: !1
        }), t.getGoodsList());
    },
    onShareAppMessage: function() {
        return {
            title: t.data.shop.intro,
            path: "/pages/catelist/catelist"
        };
    },
    refresh: function() {},
    loadmore: function(a) {
        console.log(a), t.data.hasNextPage && (t.setData({
            showMore: !0
        }), t.data.page++, t.getGoodsList());
    },
    onReachBottom: function() {
        this.loadmore();
    }
});