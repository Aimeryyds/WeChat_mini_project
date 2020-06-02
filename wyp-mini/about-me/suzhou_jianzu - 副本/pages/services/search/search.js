var t, s, e = require("../../../utils/server"), o = 1, a = "shop_price", d = "desc", i = [ [ "highlight", "", "", "", "" ], [ "", "" ], [ "", "", "" ], [] ];

Page({
    data: {
        menu: [ "highlight", "", "", "" ],
        subMenuDisplay: [ "hidden", "hidden", "hidden", "hidden" ],
        subMenuHighLight: i,
        sort: [ [ "shop_price-desc", "shop_price-asc" ], [ "sales_sum-desc", "sales_sum-asc" ], "is_new-desc", "comment_count-asc" ],
        goods: [],
        empty: !1,
        style: !0,
        showL: !1
    },
    search: function(t) {
        s = this.data.keywords, o = 1, this.data.goods = [], this.getGoodsByKeywords(s, o, a + "-" + d);
    },
    bindChange: function(t) {
        var s = t.detail.value;
        this.setData({
            keywords: s
        });
    },
    onLoad: function(e) {
        console.log(e), console.log();
        var o = this;
        t = e.categoryId ? e.categoryId : "", (s = e.keywords ? e.keywords : "") ? o.getGoodsByKeywords(s, 0, this.data.sort[0][0]) : o.getGoods(t || 0, 0, this.data.sort[0][0]);
    },
    getGoodsByKeywords: function(t, s, o) {
        var i = this, h = o.split("-");
        a = h[0], d = h[1], e.sendRequest({
            url: "?r=wxapp.services",
            data: {
                keywords: t,
                page: s,
                sort: a,
                sort_asc: d
            },
            method: "GET",
            success: function(t) {
                var s = t.data.result.goods_list, e = i.data.goods;
                for (var o in s) e.push(s[o]);
                wx.stopPullDownRefresh(), 0 == e.length ? i.setData({
                    empty: !0
                }) : (i.setData({
                    empty: !1
                }), i.setData({
                    goods: e
                }));
            }
        });
    },
    getGoods: function(t, s, o) {
        var i = this, h = o.split("-");
        a = h[0], d = h[1], e.sendRequest({
            url: "?r=wxapp.services",
            data: {
                cate: t,
                page: s,
                sort: h[0],
                sort_asc: h[1]
            },
            method: "GET",
            success: function(t) {
                var s = t.data.result.goods_list, e = i.data.goods;
                for (var o in s) e.push(s[o]);
                0 == e.length ? i.setData({
                    empty: !0
                }) : (i.setData({
                    empty: !1
                }), wx.stopPullDownRefresh(), i.setData({
                    goods: e
                }));
            }
        });
    },
    tapGoods: function(t) {
        var s = t.currentTarget.dataset.objectId;
        wx.navigateTo({
            url: "../../../../../detail/index?objectId=" + s
        });
    },
    tapMainMenu: function(e) {
        var a = parseInt(e.currentTarget.dataset.index), d = [ "hidden", "hidden", "hidden", "hidden" ];
        "hidden" == this.data.subMenuDisplay[a] ? d[a] = "show" : d[a] = "hidden";
        var i = [ "", "", "", "" ];
        i[a] = "highlight", a >= 2 && (this.setData({
            goods: []
        }), o = 1, s ? this.getGoodsByKeywords(s, 0, this.data.sort[a]) : this.getGoods(t || 0, 0, this.data.sort[a])), 
        this.setData({
            menu: i,
            subMenuDisplay: d,
            showL: !1
        });
    },
    tapSubMenu: function(e) {
        this.setData({
            subMenuDisplay: [ "hidden", "hidden", "hidden", "hidden" ]
        });
        for (var a = e.currentTarget.dataset.index.split("-"), d = 0; d < i.length; d++) for (var h = 0; h < i[d].length; h++) i[d][h] = "";
        this.setData({
            goods: []
        }), o = 1, s ? this.getGoodsByKeywords(s, 0, this.data.sort[a[0]][a[1]]) : this.getGoods(t || 0, 0, this.data.sort[a[0]][a[1]]), 
        i[a[0]][a[1]] = "highlight", this.setData({
            subMenuHighLight: i,
            showL: !1
        });
    },
    onReachBottom: function() {
        s ? this.getGoodsByKeywords(s, ++o, a + "-" + d) : this.getGoods(t, ++o, a + "-" + d), 
        wx.showToast({
            title: "加载中",
            icon: "loading"
        });
    },
    onPullDownRefresh: function() {
        this.setData({
            goods: []
        }), o = 1, s ? this.getGoodsByKeywords(s, o, a + "-" + d) : this.getGoods(t, o, a + "-" + d);
    },
    styleSelect: function() {
        var t = this;
        t.data.style ? t.setData({
            style: !1
        }) : t.setData({
            style: !0
        }), t.setData({
            showL: !0
        });
    }
});