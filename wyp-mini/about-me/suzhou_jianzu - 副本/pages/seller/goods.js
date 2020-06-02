var t, s, e, o = require("../../utils/server"), a = 0, d = "shop_price", i = "desc", h = [ [ "highlight", "", "", "", "" ], [ "", "" ], [ "", "", "" ], [] ];

Page({
    data: {
        menu: [ "highlight", "", "", "" ],
        subMenuDisplay: [ "hidden", "hidden", "hidden", "hidden" ],
        subMenuHighLight: h,
        sort: [ [ "shop_price-desc", "shop_price-asc" ], [ "sales_sum-desc", "sales_sum-asc" ], [ "is_new-desc", "is_new-asc" ], "comment_count-asc" ],
        goods: [],
        empty: !1
    },
    search: function(t) {
        s = this.data.keywords, a = 0, this.data.goods = [], this.getGoodsByKeywords(s, a, d + "-" + i);
    },
    bindChange: function(t) {
        var s = t.detail.value;
        this.setData({
            keywords: s
        });
    },
    onLoad: function(o) {
        t = o.categoryId, e = o.id, (s = o.keywords) ? this.getGoodsByKeywords(s, 0, this.data.sort[0][0]) : this.getGoods(t, 0, this.data.sort[0][0]);
    },
    getGoodsByKeywords: function(t, s, a) {
        var h = this, n = a.split("-");
        d = n[0], i = n[1], o.getJSON("/Store/storeGoods", {
            store_id: e,
            p: s,
            sort: n[0],
            sort_asc: n[1],
            key: t
        }, function(t) {
            var s = t.data.result.goods_list, e = h.data.goods;
            for (var o in s) e.push(s[o]);
            0 == e.length ? h.setData({
                empty: !0
            }) : h.setData({
                empty: !1
            }), wx.stopPullDownRefresh(), h.setData({
                goods: e
            });
        });
    },
    getGoods: function(t, s, a) {
        var h = this, n = a.split("-");
        d = n[0], i = n[1], o.getJSON("/Store/storeGoods", {
            store_id: e,
            p: s,
            sort: n[0],
            sort_asc: n[1]
        }, function(t) {
            var s = t.data.result.goods_list, e = h.data.goods;
            for (var o in s) e.push(s[o]);
            0 == e.length ? h.setData({
                empty: !0
            }) : h.setData({
                empty: !1
            }), wx.stopPullDownRefresh(), h.setData({
                goods: e
            });
        });
    },
    tapGoods: function(t) {
        var s = t.currentTarget.dataset.objectId;
        wx.navigateTo({
            url: "../goods/detail/detail?objectId=" + s
        });
    },
    tapMainMenu: function(e) {
        var o = parseInt(e.currentTarget.dataset.index), d = [ "hidden", "hidden", "hidden", "hidden" ];
        "hidden" == this.data.subMenuDisplay[o] ? d[o] = "show" : d[o] = "hidden";
        var i = [ "", "", "", "" ];
        i[o] = "highlight", 3 == o && (this.setData({
            goods: []
        }), a = 0, s ? this.getGoodsByKeywords(s, 0, this.data.sort[o]) : this.getGoods(t, 0, this.data.sort[o])), 
        this.setData({
            menu: i,
            subMenuDisplay: d
        });
    },
    tapSubMenu: function(e) {
        this.setData({
            subMenuDisplay: [ "hidden", "hidden", "hidden", "hidden" ]
        });
        for (var o = e.currentTarget.dataset.index.split("-"), d = 0; d < h.length; d++) for (var i = 0; i < h[d].length; i++) h[d][i] = "";
        this.setData({
            goods: []
        }), a = 0, s ? this.getGoodsByKeywords(s, 0, this.data.sort[o[0]][o[1]]) : this.getGoods(t, 0, this.data.sort[o[0]][o[1]]), 
        h[o[0]][o[1]] = "highlight", this.setData({
            subMenuHighLight: h
        });
    },
    onReachBottom: function() {
        s ? this.getGoodsByKeywords(s, ++a, d + "-" + i) : this.getGoods(t, ++a, d + "-" + i), 
        wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            goods: []
        }), a = 0, s ? this.getGoodsByKeywords(s, a, d + "-" + i) : this.getGoods(t, a, d + "-" + i);
    }
});