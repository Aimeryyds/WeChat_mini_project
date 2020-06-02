getApp();

var a, t = require("../../utils/functions");

require("../../utils/util");

Page({
    data: function(a, t, e) {
        return t in a ? Object.defineProperty(a, t, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : a[t] = e, a;
    }({
        goods_list: [],
        showMore: !1,
        page: 1,
        size: 10,
        name: "",
        totalNum: 0,
        hasNextPage: !1
    }, "showMore", !1),
    onLoad: function(t) {
        a = this;
    },
    bindKeyInput: function(t) {
        t.detail.value != a.data.name && (a.setData({
            name: t.detail.value
        }), a.getGoodsList());
    },
    getGoodsList: function() {
        null != a.data.name && "" != a.data.name ? t.getGoodsList({
            name: a.data.name,
            p: a.data.page,
            s: a.data.size
        }, function(t) {
            var e = !1;
            t.page.totalPages > a.data.page && (e = !0);
            var o = t.page.list;
            o = o.map(function(a) {
                return a.thumb = a.thumb + "?imageslim", a;
            }), a.setData({
                showMore: !1,
                totalNum: t.page.totalRows,
                hasNextPage: e,
                goods_list: 1 == a.data.page ? o : a.data.goods_list.concat(o)
            });
        }) : a.setData({
            showMore: !1,
            totalNum: 0,
            hasNextPage: !1,
            goods_list: []
        });
    },
    onReachBottom: function() {
        a.data.hasNextPage && (a.setData({
            showMore: !0
        }), a.data.page++, a.getGoodsList());
    },
    onShareAppMessage: function() {}
});