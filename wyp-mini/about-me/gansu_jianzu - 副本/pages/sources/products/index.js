function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

var t = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (a[o] = e[o]);
    }
    return a;
}, e = a(require("../../../network/api")), o = a(require("../../../utils/util.js"));

Page({
    data: {
        sort: "sales",
        mode: "list",
        shop: {},
        products: [],
        loadmore: !1,
        loadingmore: !1,
        query: {
            pageNo: 1,
            pageSize: 20,
            sort: "saleNum"
        },
        order: "",
        type: "goodslist"
    },
    onLoad: function(a) {
        var e = getApp().globalConfig;
        this.setData(t({}, e)), a.dsId && "undefined" !== a.dsId && this.setData({
            "query.dsId": a.dsId
        }), a.brandsCategory && (console.log(o.default.parse(a.brandsCategory)), this.setData({
            "query.brandsCategory": o.default.parse(a.brandsCategory)
        })), a.categoryIds && this.setData({
            "query.categoryIds": a.categoryIds
        }), a.location && "undefined" !== a.location && this.setData({
            "query.location": a.location
        }), a.dataType && "undefined" !== a.dataType && this.setData({
            "query.dataType": a.dataType
        }), a.from && this.setData({
            from: a.from,
            navToDetail: !0
        }), console.log(this.data.query, "this.data.query"), "goodslist" == this.data.type ? this.queryGoodsList(this.data.query, !0) : this.queryProducts(this.data.query, !0);
    },
    handleSwitchSort: function(a) {
        console.log(this.data.query, "this.data.query"), console.log("+++++++++++");
        var e = a.currentTarget.dataset.sort;
        console.log(a.currentTarget, "++++++++++");
        var o = this.data.sort;
        "price" != e && e == o || ("price" == e ? e == o ? (this.setData({
            order: "asc" == this.data.order ? "desc" : "asc"
        }), this.setData({
            "query.pageNo": 1,
            "query.sort": e + ":" + this.data.order
        })) : (console.log(e), this.setData({
            sort: e,
            order: "asc",
            "query.pageNo": 1,
            "query.sort": e + ":asc"
        })) : this.setData({
            sort: e,
            "query.pageNo": 1,
            "query.sort": "new" == e ? "createTime" : "sales" == e ? "saleNum" : "evaluateCount"
        }), console.log(this.data.query, "this.data.query"), "goodslist" == this.data.type ? this.queryGoodsList(t({}, this.data.query), !0) : this.queryProducts(t({}, this.data.query), !0));
    },
    queryProducts: function(a, s) {
        var r = this;
        console.log(s, "clear"), wx.showLoading({
            title: "加载中"
        });
        var d = t({}, a, {
            brandsCategory: a.brandsCategory ? o.default.stringify(a.brandsCategory) : ""
        });
        this.data.products;
        e.default.queryDatasourceGoods(d).then(function(a) {
            wx.hideLoading(), r.setData({
                products: s ? a.data.data : r.data.products.concat(a.data.data),
                loadmore: a.data.nextCursor > 0,
                loadingmore: !1,
                query: t({}, r.data.query, {
                    pageNo: a.data.nextCursor,
                    pageSize: a.data.pageSize
                }),
                scrollTop: s ? 0 : void 0
            });
        }).catch(function(a) {
            console.log(a);
        });
    },
    queryGoodsList: function(a, o) {
        var s = this, r = this.data, d = r.from, i = r.navToDetail;
        wx.showLoading({
            title: "加载中"
        }), e.default.queryDatasourceGoodsListPost(a).then(function(a) {
            if (wx.hideLoading(), s.setData({
                products: o ? a.data.data : s.data.products.concat(a.data.data),
                loadmore: a.data.nextCursor > 0,
                loadingmore: !1,
                query: t({}, s.data.query, {
                    pageNo: a.data.nextCursor,
                    pageSize: a.data.pageSize
                }),
                scrollTop: o ? 0 : void 0
            }), "page" == d && i && a.data.data && 1 == a.data.data.length) {
                console.log("+++++++++++++++++++++++++-----------------------");
                var e = a.data.data[0];
                s.setData({
                    navToDetail: !1,
                    isShow: !1
                }), wx.redirectTo({
                    url: "/pages/products/show/show?id=" + e.id
                });
            } else s.setData({
                isShow: !0,
                navToDetail: !1
            });
        }).catch(function(a) {
            console.log(a);
        });
    },
    lower: function(a) {
        console.log(this.data.loadmore, !this.data.loadingmore, "+++++++++++++++++"), this.data.loadmore && !this.data.loadingmore && (this.setData({
            loadingmore: !0
        }), "goodslist" == this.data.type ? this.queryGoodsList(t({}, this.data.query), !1) : this.queryProducts(t({}, this.data.query), !1));
    },
    handleToggleMode: function() {
        this.setData({
            mode: "grid" == this.data.mode ? "list" : "grid"
        });
    },
    searchProducts: function(a) {
        console.log(a.detail.value);
    },
    makestore: function(a) {
        var t = a.currentTarget.dataset.goods;
        t.description = "", wx.navigateTo({
            url: "/pages/products/show/show?id=" + t.id
        });
    },
    handlesearch: function() {
        var a = this.data.type, t = this.data.query, e = t.dsId, s = void 0 === e ? "" : e, r = t.location, d = void 0 === r ? 1 : r, i = t.dataType, n = void 0 === i ? 1 : i, u = t.brandsCategory, l = void 0 === u ? "" : u, c = t.categoryIds, g = void 0 === c ? "" : c;
        wx.navigateTo({
            url: "/pages/shop/search/search?type=" + a + "&dsId=" + s + "&location=" + d + "&dataType=" + n + "&brandsCategory=" + (l ? o.default.stringify(l) : "") + "&categoryIds=" + g
        });
    }
});