function e(e, t, o) {
    return t in e ? Object.defineProperty(e, t, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = o, e;
}

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../../network/api"));

Page({
    data: {
        tabs: {
            collectionTabs: [ {
                title: "商品"
            }, {
                title: "门店"
            } ],
            storesTabs: [ {
                title: "关注优先"
            }, {
                title: "促销优先"
            } ]
        },
        tabType: {
            collectionType: {
                type: "goods",
                key: 0
            },
            storeType: {
                type: "show",
                key: 0
            },
            goodsType: {
                sort: "sales",
                mode: "grid"
            }
        },
        goodsList: [],
        storesList: [],
        query: {
            goods: {
                pageSize: 10,
                pageNo: 1,
                scrollTop: 0,
                loadmore: !1
            },
            stores: {
                pageSize: 10,
                pageNo: 1,
                scrollTop: 0,
                loadmore: !1
            }
        },
        loadingmore: !1
    },
    onLoad: function(e) {
        wx.showLoading({
            title: "加载中"
        }), this.queryGoods({
            pageNo: 1,
            pageSize: 10
        }, !0);
    },
    onTabChange: function(t) {
        if ("collection" == t.detail.componentId && this.data.tabType.collectionType.key !== t.detail.key) {
            var o;
            this.setData((o = {}, e(o, "tabType.collectionType.type", 0 == t.detail.key ? "goods" : "stores"), 
            e(o, "tabType.collectionType.key", 0 == t.detail.key ? 0 : 1), o));
        }
        1 == t.detail.key && 0 == this.data.storesList.length && (wx.showLoading({
            title: "加载中"
        }), this.queryStores({
            pageNo: 1,
            pageSize: 10
        }, !0));
    },
    handleTabStoreChange: function(t) {
        var o;
        this.setData((o = {}, e(o, "tabType.storeType.type", 0 == t.currentTarget.dataset.key ? "show" : "active"), 
        e(o, "tabType.storeType.key", 0 == t.currentTarget.dataset.key ? 0 : 1), o)), wx.showLoading({
            title: "加载中"
        }), this.queryStores({
            pageNo: 1,
            pageSize: 10
        }, !0);
    },
    handleSwitchSort: function(t) {
        var o = t.currentTarget.dataset.sort;
        console.log(t.currentTarget, "++++++++++");
        var a = this.data.tabType.goodsType.sort;
        "price" != o && o == a || ("price" == o ? "price:asc" == a || "price:desc" == a ? (console.log("++++++++++"), 
        this.setData(e({}, "tabType.goodsType.sort", "price:asc" == a ? "price:desc" : "price:asc")), 
        console.log(this.data.tabType, "-")) : (console.log(o), this.setData(e({}, "tabType.goodsType.sort", o + ":asc"))) : this.setData(e({}, "tabType.goodsType.sort", o)), 
        wx.showLoading({
            title: "加载中"
        }), this.queryGoods({
            pageNo: 1,
            pageSize: 10
        }, !0));
    },
    handleToggleMode: function() {
        this.setData(e({}, "tabType.goodsType.mode", "grid" == this.data.tabType.goodsType.mode ? "list" : "grid"));
    },
    queryGoods: function(o, a) {
        var s = this, r = o.pageNo, i = void 0 === r ? 1 : r, d = o.pageSize, n = void 0 === d ? 10 : d, l = this.data.tabType.goodsType.sort, c = {
            sales: 1,
            new: 2,
            "price:asc": 3,
            "price:desc": 4
        };
        t.default.queryCollectionGoods({
            pageNo: i,
            pageSize: n,
            sort: c[l]
        }).then(function(t) {
            wx.hideLoading(), s.setData(e({
                goodsList: a ? t.data.data : s.data.goodsList.concat(t.data.data)
            }, "query.goods", {
                pageNo: t.data.nextCursor,
                pageSize: t.data.pageSize,
                loadmore: t.data.nextCursor > 0,
                scrollTop: a ? 0 : void 0,
                loadingmore: !1
            })), console.log(t, "res");
        }).catch(function(e) {
            return console.log(e, "err");
        });
    },
    queryStores: function(o, a) {
        var s = this, r = o.pageNo, i = void 0 === r ? 1 : r, d = o.pageSize, n = void 0 === d ? 10 : d, l = this.data.tabType.storeType.type, c = {
            show: 1,
            active: 2
        };
        t.default.queryCollectionStore({
            pageNo: i,
            pageSize: n,
            sort: c[l]
        }).then(function(t) {
            wx.hideLoading(), s.setData(e({
                storesList: a ? t.data.data : s.data.storesList.concat(t.data.data)
            }, "query.stores", {
                pageNo: t.data.nextCursor,
                pageSize: t.data.pageSize,
                loadmore: t.data.nextCursor > 0,
                scrollTop: a ? 0 : void 0,
                loadingmore: !1
            })), console.log(t, "res");
        }).catch(function(e) {
            return console.log(e, "err");
        });
    },
    lower: function(t) {
        var o = this.data.tabType.collectionType.type;
        console.log(this.data.query[o].loadmore, !this.data.query[o].loadingmore, "+++++++++++++++++"), 
        this.data.query[o].loadmore && !this.data.loadingmore && ("goods" == o ? (this.setData(e({}, "query.goods.loadingmore", !0)), 
        this.queryGoods(this.data.query[o], !1)) : (this.setData(e({}, "query.stores.loadingmore", !0)), 
        this.queryStores(this.data.query[o], !1)));
    },
    jumpstore: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/shop/products/products?storeid=" + t
        });
    },
    jumpgood: function(e) {
        var t = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/products/show/show?id=" + t
        });
    },
    goodscollection: function(e) {
        var o = this, a = e.currentTarget.dataset, s = a.id, r = a.index;
        t.default.unfollowGoods({
            goodsId: s
        }).then(function(e) {
            if (e && 0 == e.status && e.data.result) {
                var t = o.data.goodsList;
                t.splice(r, 1), o.setData({
                    goodsList: t
                });
            }
        });
    },
    storecollection: function(e) {
        var o = this, a = e.currentTarget.dataset, s = a.id, r = a.index;
        t.default.unfollowStore({
            storeId: s
        }).then(function(e) {
            if (e && 0 == e.status && e.data.result) {
                var t = o.data.storesList;
                t.splice(r, 1), o.setData({
                    storesList: t
                });
            }
        });
    }
});