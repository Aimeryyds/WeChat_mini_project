var t, s, e = require("../../../utils/server"), o = 0, a = "shop_price", d = "desc", i = [ [ "highlight", "", "", "", "" ], [ "", "" ], [ "", "", "" ], [] ];

Page({
    data: {
        loading: !1,
        menu: [ "highlight", "", "", "" ],
        subMenuDisplay: [ "hidden", "hidden", "hidden", "hidden" ],
        subMenuHighLight: i,
        sort: [ [ "shop_price-desc", "shop_price-asc" ], [ "sales_sum-desc", "sales_sum-asc" ], [ "is_new-desc", "is_new-asc" ], "comment_count-asc" ],
        goods: [],
        empty: !1
    },
    search: function(t) {
        s = this.data.keywords, o = 0, this.data.goods = [], this.getGoodsByKeywords(s, o, a + "-" + d);
    },
    bindChange: function(t) {
        var s = t.detail.value;
        this.setData({
            keywords: s
        });
    },
    onLoad: function(e) {
        t = e.categoryId, (s = e.keywords) ? this.getGoodsByKeywords(s, 0, this.data.sort[0][0]) : this.getGoods(t, 0, this.data.sort[0][0]);
    },
    getGoodsByKeywords: function(t, s, e) {
        var o = this, i = e.split("-");
        a = i[0], d = i[1], getApp().sendRequest({
            url: "?r=wxapp.goods&id=" + goodsId,
            showToast: !1,
            data: {
                keywords: t,
                page: s,
                sort: sort_asc,
                sort_asc: d
            },
            method: "GET",
            success: function(t) {
                var s = t.data.result.goods_list, e = o.data.goods;
                for (var a in s) e.push(s[a]);
                wx.stopPullDownRefresh(), 0 == e.length ? o.setData({
                    empty: !0
                }) : (o.setData({
                    empty: !1
                }), o.setData({
                    goods: e,
                    loading: !1
                }));
            }
        });
    },
    getGoods: function(t, s, o) {
        var i = this, n = o.split("-");
        a = n[0], d = n[1], e.getJSON("/Activity/group_list/p/" + s, function(t) {
            var s = t.data.result, e = i.data.goods;
            for (var o in s) e.push(s[o]);
            0 == e.length ? i.setData({
                empty: !0
            }) : i.setData({
                empty: !1
            }), wx.stopPullDownRefresh(), i.setData({
                goods: s,
                loading: !1
            });
        });
    },
    tapGoods: function(t) {
        var s = t.currentTarget.dataset.objectId;
        wx.navigateTo({
            url: "../../../../../groupDetail/detail?objectId=" + s
        });
    },
    tapMainMenu: function(e) {
        var a = parseInt(e.currentTarget.dataset.index), d = [ "hidden", "hidden", "hidden", "hidden" ];
        "hidden" == this.data.subMenuDisplay[a] ? d[a] = "show" : d[a] = "hidden";
        var i = [ "", "", "", "" ];
        i[a] = "highlight", 3 == a && (this.setData({
            goods: []
        }), o = 0, s ? this.getGoodsByKeywords(s, 0, this.data.sort[a]) : this.getGoods(t, 0, this.data.sort[a])), 
        this.setData({
            menu: i,
            subMenuDisplay: d
        });
    },
    tapSubMenu: function(e) {
        this.setData({
            subMenuDisplay: [ "hidden", "hidden", "hidden", "hidden" ]
        });
        for (var a = e.currentTarget.dataset.index.split("-"), d = 0; d < i.length; d++) for (var n = 0; n < i[d].length; n++) i[d][n] = "";
        this.setData({
            goods: []
        }), o = 0, s ? this.getGoodsByKeywords(s, 0, this.data.sort[a[0]][a[1]]) : this.getGoods(t, 0, this.data.sort[a[0]][a[1]]), 
        i[a[0]][a[1]] = "highlight", this.setData({
            subMenuHighLight: i
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
        }), o = 0, s ? this.getGoodsByKeywords(s, o, a + "-" + d) : this.getGoods(t, o, a + "-" + d);
    }
});