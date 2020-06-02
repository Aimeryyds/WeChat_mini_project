function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function a(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}

t(require("../../../../utils/util.js"));

var e = t(require("../../../../network/api")), o = t(require("../../../../behaviors/toast.js"));

Component({
    behaviors: [ o.default ],
    properties: {
        shopId: {
            type: String,
            value: ""
        }
    },
    data: {
        shopDefault: {
            loading: !0,
            store: {},
            totalNumber: 0,
            query: {
                pageNo: 0
            },
            goodList: [],
            defaultImg: "http://global.zuzuche.com/assets/images/common/zzc-logo.png"
        }
    },
    attached: function() {
        this.initStoreo2o();
    },
    methods: {
        initStoreo2o: function() {
            console.log("this.data.shopId;---------------\x3e", this.data.shopId);
            var t = void 0, a = this.data.shopDefault;
            a.shopId = this.data.shopId, a.loading = !0, a.classifySelectedId = 0, a.classifySelectedName = "", 
            a.classifySelectedSecondId = 0, a.classifySelectedSecondName = "", a.selectGood = t, 
            a.searchUrl = "/pages/shop/search/search?storeid=" + this.data.shopId, this.setData({
                shopDefault: a
            }), this.queryCategoryList(a.shopId);
        },
        queryGoodsList: function(t, a, o) {
            var s = this, d = t || {};
            a && wx.showLoading({
                title: "请稍候",
                mask: !0
            }), e.default.getStoreGoodsListByCategory(d).then(function(e) {
                a && wx.hideLoading();
                var i = s.data.shopDefault.goodList;
                if (s.data.selectGood) {
                    if (o && ((i = [])[0] = s.data.selectGood, console.log("goodList---00->", i)), e.data.data) {
                        var r = e.data.data.filter(function(t) {
                            return t.id != s.data.selectGood.id;
                        });
                        i = i.concat(r);
                    }
                } else i = o ? e.data.data : i.concat(e.data.data);
                var c = s.data.shopDefault;
                c.totalNumber = e.data.total, c.selectGood = null, c.isloadingmore = !1, c.goodList = i, 
                c.loading = !1, c.loadmore = e.data.nextCursor > 0, c.query = {
                    pageNo: e.data.nextCursor,
                    categoryId: t.categoryId,
                    storeId: s.data.shopDefault.shopId,
                    pId: d.pId || "0"
                }, s.setData({
                    shopDefault: c
                });
            }).catch(function(t) {
                console.log(t), wx.hideLoading();
            });
        },
        queryCategoryList: function(t) {
            var a = this;
            t && e.default.getStorecategoryList({
                storeId: t
            }).then(function(t) {
                wx.hideLoading();
                var e = a.data.shopDefault;
                if (e.store = t.data, e.loading = !1, console.log("tempShopDefault------------\x3e", e), 
                a.setData({
                    shopDefault: e
                }, function() {}), 0 == a.data.shopDefault.classifySelectedId && 0 == a.data.shopDefault.classifySelectedSecondId && t.data.categoryData.length > 0) {
                    var o = t.data.categoryData[0].id, s = t.data.categoryData[0].name, d = 0, i = "";
                    t.data.categoryData[0].categoryList && t.data.categoryData[0].categoryList.length > 0 ? (d = t.data.categoryData[0].categoryList[0].id, 
                    i = t.data.categoryData[0].categoryList[0].name, -30 == o ? a.queryGoodsList({
                        pId: -30,
                        categoryId: d,
                        storeId: a.data.shopDefault.shopId,
                        pageNo: 1
                    }, !1, !0) : a.queryGoodsList({
                        categoryId: d,
                        storeId: a.data.shopDefault.shopId,
                        pageNo: 1
                    }, !1, !0)) : a.queryGoodsList({
                        categoryId: o,
                        storeId: a.data.shopDefault.shopId,
                        pageNo: 1
                    }, !1, !0);
                    var r = a.data.shopDefault;
                    r.classifySelectedId = o, r.classifySelectedName = s.trim().split(" "), r.classifySelectedSecondId = d, 
                    r.classifySelectedSecondName = i.trim().split(" "), a.setData({
                        shopDefault: r
                    });
                } else if (a.data.classifySelectedId > 0 && "" == a.data.classifySelectedName) {
                    var c = t.data.categoryData.filter(function(t) {
                        return t.id == a.data.classifySelectedId;
                    });
                    if (c && c.length > 0 && (a.data.shopDefault.classifySelectedName = c[0].name, a.setData({
                        shopDefault: classifySelectedName
                    }), a.data.shopDefault.classifySelectedSecondId > 0 && "" == a.data.shopDefault.classifySelectedSecondName && c[0].categoryList && c[0].categoryList.length > 0)) {
                        var l = c[0].categoryList.filter(function(t) {
                            return t.id == a.data.shopDefault.classifySelectedSecondId;
                        });
                        l && l.length > 0 && a.setData({
                            classifySelectedSecondName: l[0].name.trim().split(" ")
                        });
                    }
                }
            }).catch(function(t) {
                console.log(t), wx.hideLoading();
            });
        },
        tapClassify: function(t) {
            var a = t.target.dataset.id, e = t.target.dataset.category;
            console.log("tapClassify", t.target.dataset);
            var o = this.data.shopDefault;
            o.classifySelectedId = e.id, o.classifySelectedName = e.name.trim().split(" "), 
            o.classifySelectedSecondId = 0, o.classifySelectedSecondName = "", this.setData({
                shopDefault: o
            }), e.categoryList && e.categoryList.length > 0 ? (o.classifySelectedSecondId = e.categoryList[0].id, 
            o.classifySelectedSecondName = e.categoryList[0].name.trim().split(" "), this.setData({
                shopDefault: o
            }), -30 == a ? this.queryGoodsList({
                pId: -30,
                categoryId: e.categoryList[0].id,
                storeId: this.data.shopDefault.shopId,
                pageNo: 1
            }, !0, !0) : this.queryGoodsList({
                categoryId: e.categoryList[0].id,
                storeId: this.data.shopDefault.shopId,
                pageNo: 1
            }, !0, !0)) : this.queryGoodsList({
                categoryId: a,
                storeId: this.data.shopDefault.shopId,
                pageNo: 1
            }, !0, !0);
        },
        tapSecondClassify: function(t) {
            var a = t.target.dataset.pid, e = t.target.dataset.id, o = t.target.dataset.name;
            console.log("tapSecondClassify", t.target.dataset);
            var s = this.data.shopDefault;
            s.classifySelectedSecondId = e, s.classifySelectedSecondName = o.trim().split(" "), 
            this.setData({
                shopDefault: s
            }), -30 == a ? this.queryGoodsList({
                pId: -30,
                categoryId: e,
                storeId: this.data.shopDefault.shopId,
                pageNo: 1
            }, !0, !0) : this.queryGoodsList({
                categoryId: e,
                storeId: this.data.shopDefault.shopId,
                pageNo: 1
            }, !0, !0);
        },
        goodDetail: function(t) {
            console.log("e---》", t);
            var a = t.currentTarget.dataset.id;
            wx.navigateTo({
                url: "/pages/products/show/show?id=" + a + "&&isFromShop=true&&from=normal"
            });
        },
        addToCart: function(t) {
            var o = this, s = this, d = t.target.dataset, i = (d.index, d.good);
            this.setData({
                currentGood: i
            }), wx.showLoading({
                title: "请稍后",
                mask: !0
            }), e.default.queryGoodSku({
                goodsId: i.id
            }).then(function(t) {
                if (wx.hideLoading(), 0 == t.status) {
                    var d = t.data;
                    if (d && d.specs && d.specs.length > 0) {
                        if (o.setData({
                            "currentGood.num": 0,
                            "currentGood.specs": d.specs,
                            "currentGood.skus": d.skus,
                            "currentGood.selectedSpec": new Array(d.specs.length)
                        }), s.toggleDialog(), 1 == d.specs.length) d.specs.forEach(function(t, e) {
                            var s = t.itemId;
                            t.values.forEach(function(t, i) {
                                var r = s + ":" + t.itemValueId;
                                d.skus.find(function(t) {
                                    return t.propertiesValue == r;
                                }).quantity <= 0 && o.setData(a({}, "currentGood.specs[" + e + "].values[" + i + "].disabled", !0));
                            });
                        });
                    } else i.stock <= 0 ? s.showToast("该商品库存不足！") : e.default.addToCart({
                        goodsId: i.id,
                        quantity: 1
                    }).then(function(t) {
                        wx.hideLoading(), 0 == t.status ? (s.showToast("加入购物车成功！"), s.queryCartInfo(o.data.shopId)) : s.showToast("网络连接错误！");
                    }).catch(function(t) {
                        console.log("err---\x3e", t), s.showToast(t.data && t.data.msg ? t.data.msg : "网络连接错误！"), 
                        wx.hideLoading();
                    });
                }
            }).catch(function(t) {
                wx.hideLoading(), console.log(t);
            });
        },
        toggleDialog: function() {
            console.log("----O2O----");
            var t = this.selectComponent("#cartpop");
            t && t.toggleDialog();
        },
        handleAddToCartSuccess: function() {
            this.queryCartInfo();
        },
        queryCartInfo: function() {
            var t = this.selectComponent("#cart");
            t && t.queryCartInfo();
        },
        lower: function(t) {
            this.data.shop;
            this.data.shopDefault.loadmore && !this.data.shopDefault.isloadingmore && (this.setData({
                "shopDefault.isloadingmore": !0
            }), this.queryGoodsList(this.data.shopDefault.query, !1, !1));
        },
        setStoreDetail: function(t) {
            this.setData({
                store: t.detail.store
            }), console.log(this.data.store, "+++");
        },
        getStoreDetail: function() {
            return this.data.store;
        }
    }
});