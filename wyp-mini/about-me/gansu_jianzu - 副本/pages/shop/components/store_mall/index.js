function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, a, o) {
    return a in t ? Object.defineProperty(t, a, {
        value: o,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = o, t;
}

var o = t(require("../../../../network/api")), s = t(require("../../../../behaviors/toast.js"));

Component({
    behaviors: [ s.default ],
    properties: {
        shopId: {
            type: String,
            value: ""
        },
        category: {
            type: Object,
            value: {
                id: -1,
                name: ""
            }
        }
    },
    data: {
        shopMall: {
            sort: "saleNum",
            mode: "grid",
            shop: {},
            products: {
                data: [],
                nextCursor: 1
            },
            loading: !0,
            loadmore: !1,
            category: {
                id: -1,
                name: ""
            }
        }
    },
    attached: function() {
        this.setData(a({}, "shopMall.category", this.data.shopMall.category || {})), this.queryMallProducts({
            shopId: this.data.shopId
        }, !0);
    },
    methods: {
        setQueryCategory: function(t) {
            this.setData(a({}, "shopMall.category", t || {})), wx.showLoading({
                title: "请稍候",
                mask: !0
            }), this.queryMallProducts({
                shopId: this.data.shopId
            }, !0), wx.hideLoading();
        },
        queryMallProducts: function(t, a) {
            var s = this;
            this.setData({
                "shopMall.loading": !0
            });
            var e = this.data.shopMall, r = e.sort, d = e.order, i = e.category, l = t.shopId, n = t.pageNo, h = void 0 === n ? 1 : n, c = this.data.shopMall.products;
            o.default.queryStoreGoodsList({
                storeId: l,
                pageNo: h,
                pageSize: 10,
                sort: "price" == r ? r + ":" + d : r,
                categoryId: i.id
            }).then(function(t) {
                wx.hideLoading(), a && (c.data = []);
                var o = void 0;
                t && t.data && t.data.data && t.data.data.length > 0 && c.pageNo != t.data.nextCursor && (o = c.data.concat(t.data.data)), 
                s.setData({
                    "shopMall.loadmore": !1,
                    "shopMall.products": t.data,
                    "shopMall.products.data": o,
                    "shopMall.loading": !1
                });
            }).catch(function(t) {
                console.log(t), wx.hideLoading(), s.setData({
                    "shopMall.loadmore": !1
                });
            });
        },
        handleSwitchSort: function(t) {
            var a = t.target.dataset.sort, o = this.data.shopMall.sort;
            "price" != a && a == o || ("price" == a ? a == o ? this.setData({
                "shopMall.order": "asc" == this.data.shopMall.order ? "desc" : "asc"
            }) : (console.log(a), this.setData({
                "shopMall.sort": a,
                "shopMall.order": "asc"
            })) : this.setData({
                "shopMall.sort": a
            }), wx.showLoading({
                title: "请稍后",
                mask: !0
            }), this.queryMallProducts({
                shopId: this.data.shopId,
                sort: this.data.shopMall.sort,
                order: this.data.shopMall.order
            }, !0));
        },
        handleToggleMode: function(t) {
            var a = t.target.dataset.mode;
            this.setData({
                "shopMall.mode": a
            });
        },
        bindmallsearch: function() {
            console.log(this.data.shopId), wx.navigateTo({
                url: "/pages/shop/search/search?storeid=" + this.data.shopId
            });
        },
        onReachMallBottom: function() {
            this.data.shopMall.products.nextCursor > 0 && !this.data.shopMall.loadmore && (this.setData({
                "shopMall.loadmore": !0
            }), this.queryMallProducts({
                shopId: this.data.shopId,
                pageNo: this.data.shopMall.products.nextCursor,
                pageSize: 10
            }));
        },
        onMallScroll: function(t) {
            this.setData({
                "shopMall.fixHeader": t.detail.scrollTop > 156
            });
        },
        handleClassify: function() {
            var t = this.data.shopMall.category;
            wx.navigateTo({
                url: "/pages/shop/classify/index?storeid=" + this.data.shopId + "&categoryId=" + t.id
            });
        },
        addToCart: function(t) {
            var s = this, e = this, r = t.target.dataset.good;
            this.setData({
                currentGood: r
            }), wx.showLoading({
                title: "请稍后",
                mask: !0
            }), o.default.queryGoodSku({
                goodsId: r.id
            }).then(function(t) {
                if (wx.hideLoading(), 0 == t.status) {
                    var d = t.data;
                    d && d.specs && d.specs.length > 0 ? (s.setData({
                        "currentGood.num": 0,
                        "currentGood.specs": d.specs,
                        "currentGood.skus": d.skus,
                        "currentGood.selectedSpec": new Array(d.specs.length)
                    }), e.toggleDialog(), 1 == d.specs.length && d.specs.forEach(function(t, o) {
                        var e = t.itemId;
                        t.values.forEach(function(t, r) {
                            var i = e + ":" + t.itemValueId;
                            d.skus.find(function(t) {
                                return t.propertiesValue == i;
                            }).quantity <= 0 && s.setData(a({}, "currentGood.specs[" + o + "].values[" + r + "].disabled", !0));
                        });
                    })) : r.stock <= 0 ? e.showToast("该商品库存不足！") : o.default.addToCart({
                        goodsId: r.id,
                        quantity: 1
                    }).then(function(t) {
                        wx.hideLoading(), 0 == t.status ? (e.showToast("加入购物车成功！"), e.queryCartInfo(s.data.shopId)) : e.showToast("网络连接错误！");
                    }).catch(function(t) {
                        console.log("err---\x3e", t), e.showToast(t.data && t.data.msg ? t.data.msg : "网络连接错误！"), 
                        wx.hideLoading();
                    });
                }
            }).catch(function(t) {
                wx.hideLoading(), console.log(t);
            });
        },
        handleAddToCartSuccess: function() {
            this.queryCartInfo();
        },
        queryCartInfo: function() {
            var t = this.selectComponent("#cart");
            t && t.queryCartInfo();
        },
        goodDetail: function(t) {
            var a = t.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/products/show/show?id=" + a + "&&isFromShop=true&&from=normal"
            });
        },
        toggleDialog: function() {
            var t = this.selectComponent("#cartpop");
            t && t.toggleDialog();
        },
        setStoreDetail: function(t) {
            this.setData({
                store: t.detail.store
            });
        },
        getStoreDetail: function() {
            return this.data.store;
        }
    }
});