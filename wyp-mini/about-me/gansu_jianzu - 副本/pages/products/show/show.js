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

var e = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
    }
    return t;
}, o = t(require("../../../network/api")), i = t(require("../../../component/open_tuan/index.js")), s = t(require("../../../utils/const.js")), n = t(require("../../../utils/notification")), r = t(require("../../../utils/util.js")), d = require("../../../utils/wxParse/wxParse.js"), h = require("../../../dist/index");

Page(Object.assign({}, h.Quantity, h.Tab, h.TopTips, h.Toast, i.default, {
    data: {
        loading: !0,
        showDialog: !1,
        action: 0,
        cartCount: 0,
        formData: {
            num: {
                quantity: 1,
                min: 1,
                max: 9999,
                hasSelect: !1
            },
            sku: {
                price: 0,
                quantity: 0
            },
            selectSku: {},
            selectSkuText: ""
        },
        tabs: {
            list: [ {
                id: "2",
                title: "商品详情"
            } ],
            selectedId: "1",
            scroll: !1,
            height: 42
        },
        tabs2: {
            list: [ {
                id: "3",
                title: "购物须知"
            } ],
            selectedId: "1",
            scroll: !1,
            height: 42
        },
        goods: {
            id: 0,
            name: "",
            price: 0,
            props: [],
            content: "",
            images: [],
            coverImg: "",
            specs: [],
            skus: []
        },
        relativeModule: {
            pttext: {
                listType: "type2",
                cartType: "type1",
                goods: []
            }
        },
        toggle: !0,
        isFirstLoading: !0
    },
    onLoad: function(t) {
        var a = this;
        console.log("-options.shareCode--------------\x3e", t.shareCode || ""), this.setData({
            id: t.id,
            shareCode: t.shareCode || "",
            isFromShop: t.isFromShop,
            from: t.from,
            height: 750,
            isService: t.isService || !1
        });
        var e = wx.getStorageSync("config");
        console.log("+++++++++config", e), this.setData({
            config: e
        }), n.default.register(s.default.action.QUERY_CONFIG_SUCCESS, this, function(t) {
            a.setData({
                config: t.data
            });
        });
    },
    onShow: function() {
        this.data.isFirstLoading ? (this.queryProductById(!0), this.setData({
            isFirstLoading: !1
        })) : this.queryProductById(!1);
    },
    onUnload: function() {
        clearInterval(this.seckKilltimer), this.seckKilltimer = void 0, clearInterval(this.timerMore), 
        this.timerMore = void 0, clearInterval(this.openTuanTimer), this.openTuanTimer = void 0, 
        n.default.remove(s.default.action.QUERY_CONFIG_SUCCESS, this);
    },
    handleDistribution: function() {
        this.onShareAppMessage();
    },
    onShare: function() {
        this.onShareAppMessage();
    },
    onShareAppMessage: function() {
        var t = this, a = "/pages/products/show/show?id=" + this.data.id;
        this.data.goods.shareCode && this.data.goods.shareCode.length > 0 && (a = "/pages/products/show/show?id=" + this.data.id + "&&from=share&&shareCode=" + this.data.goods.shareCode), 
        console.log("===path=====onShareAppMessage", a, this.data.goods.storeId);
        var e = this.data.goods.name;
        return 2 == this.data.goods.activityType && (e = "【" + this.data.goods.groupEvent.limitPeople + "人团】" + this.data.goods.price + "元拼 " + e + "，快来拼团吧!"), 
        {
            title: e,
            path: a,
            success: function() {
                1 != t.data.goods.isShare ? t.collection() : o.default.onShareStore({
                    storeId: t.data.goods.storeId
                });
            }
        };
    },
    startSecKillCount: function() {
        var t = this, a = this;
        this.seckKilltimer = setInterval(function() {
            if (0 == a.data.goods.overTime) return clearInterval(t.timer), void t.queryProductById(!1);
            var e = a.data.goods.overTime - 1;
            if (e < 1) return clearInterval(t.timer), void (t.timer = void 0);
            a.setData({
                "goods.overTime": e,
                "goods.leftTime": r.default.renderTimer(e)
            });
        }, 1e3);
    },
    call: function() {
        wx.makePhoneCall({
            phoneNumber: this.data.store.areaNum + this.data.store.tel
        });
    },
    queryProductById: function(t) {
        var a = this, i = {};
        i.id = this.data.id, "distribution" != this.data.from && "share" != this.data.from || (i.from = "fenxiaoList"), 
        i.shareCode = this.data.shareCode, t && wx.showLoading({
            title: "请稍候"
        }), o.default.getStoreGoodDetail(i).then(function(o) {
            wx.stopPullDownRefresh(), wx.hideLoading();
            var i = o.data.imgUrl.map(function(t) {
                return {
                    imgUrl: t,
                    link: t,
                    title: t
                };
            }), s = [], n = "";
            if (o.data.item && o.data.item.length > 0) {
                console.log("res.data.item.length>0");
                for (var h = 0; h < o.data.item.length; h++) if (o.data.item[h] && o.data.item[h].values && o.data.item[h].values.length > 0) {
                    for (var u = [], l = 0; l < o.data.item[h].values.length; l++) u[l] = {
                        id: o.data.item[h].values[l].itemValueId,
                        name: o.data.item[h].values[l].itemValue
                    };
                    console.log("-specsList--------------\x3e", u), s[h] = {
                        id: o.data.item[h].itemId,
                        name: o.data.item[h].name,
                        specsList: u
                    }, 0 != h ? n += "," + o.data.item[h].name : n = o.data.item[h].name;
                }
            } else n = "数量";
            console.log("-tempSpecs--------------\x3e", s);
            var c = [];
            if (o.data.storeItem && o.data.storeItem.length > 0) for (var g = 0; g < o.data.storeItem.length; g++) {
                var m = o.data.storeItem[g].price, f = o.data.storeItem[g].groupPrice || 0;
                !a.data.from || "distribution" != a.data.from && "share" != a.data.from || (m = o.data.storeItem[g].sharePrice), 
                c[g] = {
                    id: o.data.storeItem[g].id,
                    properties: o.data.storeItem[g].properties,
                    quantity: o.data.storeItem[g].stock,
                    price: m,
                    groupPrice: f,
                    minBuy: o.data.storeItem[g].minBuy,
                    maxBuy: o.data.storeItem[g].maxBuy
                };
            }
            a.setData({
                goods: e({}, o.data, {
                    gstock: o.data.stock,
                    images: i,
                    imgs: o.data.imgUrl,
                    content: o.data.description,
                    coverImg: o.data.imgUrl ? o.data.imgUrl[0] : "",
                    specs: s,
                    skus: c,
                    shareCode: o.data.shareCode || "",
                    isShare: o.data.isShare,
                    seckillStatus: o.data.seckillStatus,
                    overTime: o.data.overTime || 0,
                    leftTime: 1 == o.data.activityType ? r.default.renderTimer(o.data.overTime) : {}
                }),
                store: o.data.store,
                loading: !1,
                skustexts: n,
                formData: {
                    num: {
                        quantity: 0 == o.data.stock ? 0 : o.data.minBuy > 0 ? o.data.minBuy : 1,
                        min: 0 == o.data.stock ? 0 : 1,
                        max: o.data.stock,
                        minBuy: 0 == o.data.stock ? 0 : o.data.minBuy > 0 ? o.data.minBuy : 1,
                        maxBuy: o.data.maxBuy > 0 && o.data.maxBuy < o.data.stock ? o.data.maxBuy : o.data.stock,
                        hasSelect: !1
                    },
                    sku: {
                        id: 0,
                        price: !a.data.from || "distribution" != a.data.from && "share" != a.data.from ? 2 == o.data.activityType ? o.data.originalPrice : o.data.price : o.data.sharePrice,
                        quantity: o.data.stock,
                        groupPrice: o.data.price
                    },
                    selectSku: {},
                    selectSkuText: ""
                }
            }), t && (d.wxParse("content", "html", o.data.description ? o.data.description : "暂无", a, 5), 
            d.wxParse("shopNotice", "html", o.data.shopNotice ? o.data.shopNotice : "暂无", a, 5)), 
            1 == o.data.activityType && o.data.overTime && o.data.overTime > 0 ? a.startSecKillCount() : 2 == o.data.activityType && o.data.groupEvent && o.data.groupEvent.sponsoringList && o.data.groupEvent.sponsoringList.length > 0 && a.startOpenTuanCount();
        }).catch(function() {
            wx.stopPullDownRefresh(), wx.hideLoading();
        });
    },
    gotoshop: function() {
        console.log(this.data.isFromShop, "this.data.isFromShop"), 0 == this.data.config.bottomMenu ? wx.switchTab({
            url: "/tabs/home/index"
        }) : this.data.isFromShop ? wx.navigateBack({
            delta: 1
        }) : wx.redirectTo({
            url: "/pages/shop/products/products?storeid=" + this.data.store.id
        });
    },
    onTapCarousel: function(t) {
        wx.previewImage({
            current: t.currentTarget.dataset.link,
            urls: this.data.goods.imgs
        });
    },
    toogleSpecDialog: function() {
        var t = this.data.showDialog ? 0 : 1, a = Object.assign({}, this.data.formData);
        a.num.hasSelect = !0, this.setData({
            showDialog: !this.data.showDialog,
            action: t,
            formData: a
        });
    },
    hideDialog: function() {
        this.setData({
            showDialog: !1,
            action: 0
        });
    },
    handleZanQuantityChange: function(t) {
        var e = parseInt(t.quantity), o = isNaN(e) ? 1 : e;
        o == this.data.formData.num.max && this.showZanTopTips("已达最大库存数量"), this.setData(a({}, "formData.num.quantity", o));
    },
    handleBuyNow: function() {
        this.normalBuyNow();
    },
    resetSku: function() {
        var t = this.data.goods.storeItem;
        console.log("storeItem====>", t);
        var a = [], o = this.data.goods;
        o = e({}, o, {
            skus: a
        }), this.setData({
            goods: o
        });
    },
    normalBuyNow: function() {
        var t = this, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3, s = wx.getStorageSync("userinfo");
        if (s && s.mobile) {
            var n = this.data.formData.selectSku, d = this.data.formData.num.hasSelect, h = this.data.formData.num.quantity, u = this.data.goods.specs.length == Object.getOwnPropertyNames(n).length;
            if (0 == this.data.goods.gstock) this.showZanTopTips("库存为零"); else if (d && u) wx.showLoading({
                title: "请稍候"
            }), this.setData({
                showDialog: !1,
                action: 0
            }), o.default.checkoutSingleOrder(e({
                goodsId: this.data.goods.id,
                propertiesId: this.data.formData.sku.id,
                num: h,
                consigneeId: -1
            }, a)).then(function(e) {
                wx.hideLoading(), t.setData({
                    showDialog: !1,
                    action: 0
                });
                var o = e.data;
                o.shareCode = a.shareCode || "", console.log("checkoutSingleOrder====>", o), 1 == o.buyLimit ? wx.showModal({
                    title: "提示",
                    content: "活动期间每人限购" + t.data.goods.limitedCount + "件，\n超出" + t.data.goods.limitedCount + "件恢复原价",
                    success: function() {
                        wx.navigateTo({
                            url: "/pages/orders/new/new?order=" + r.default.stringify(o)
                        });
                    }
                }) : wx.navigateTo({
                    url: "/pages/orders/new/new?order=" + r.default.stringify(o)
                });
            }).catch(function(a) {
                console.log("err----\x3e", a);
                var e = "";
                a.data && a.data.data && a.data.data.length > 0 ? (a.data.data.forEach(function(t) {
                    var a = "";
                    t.properties.split(";").forEach(function(t) {
                        t && t.length > 0 && (a += t.split(":")[1] || "");
                    });
                    var o = t.maxBuy ? "最多购买" + t.maxBuy + "件" : "" + t.maxBuy ? "最少购买" + t.maxBuy + "件" : "";
                    e += t.goodsName + ":" + a + o + "  ";
                }), e += "超出购买范围") : e = a.data && a.data.msg ? a.data.msg : o.default.errors(a.error) || a.errorMessage || "订单创建失败", 
                t.showZanTopTips(e), wx.hideLoading(), t.setData({
                    showDialog: !1,
                    action: 0
                });
            }); else if (!this.data.showDialog) {
                var l = Object.assign({}, this.data.formData);
                l.num.hasSelect = !0, this.setData({
                    showDialog: !0,
                    action: i,
                    formData: l
                });
            }
        } else this.setData({
            showModal: !0,
            url: "/pages/login/login"
        });
    },
    handleAddCart: function() {
        var t = this, a = this.data.formData.selectSku, e = this.data.formData.num.hasSelect, i = this.data.formData.num.quantity, s = this.data.goods.specs.length == Object.getOwnPropertyNames(a).length;
        if (console.log("----handleAddCart--------", s, e), 0 == this.data.goods.gstock) this.showZanTopTips("库存为零"); else if (e && s) {
            wx.showLoading({
                title: "请稍候"
            }), this.setData({
                showDialog: !1,
                action: 0
            });
            var n = this;
            o.default.addToCart({
                goodsId: this.data.goods.id,
                propertiesId: this.data.formData.sku.id,
                quantity: i
            }).then(function() {
                wx.hideLoading(), n.showZanTopTips(t.data.goods.name + "加入购物车成功"), t.setData({
                    showDialog: !1,
                    action: 0
                });
            }).catch(function(a) {
                console.log("err===============", a);
                var e = a.data && a.data.msg ? a.data.msg : "加入购物车失败";
                t.showZanTopTips(e), wx.hideLoading(), t.setData({
                    showDialog: !1,
                    action: 0
                });
            });
        } else if (console.log("--------"), !this.data.showDialog) {
            var r = Object.assign({}, this.data.formData);
            r.num.hasSelect = !0, this.setData({
                showDialog: !0,
                action: 2,
                formData: r
            });
        }
    },
    handleFenXiaoBuyNow: function() {
        var t = "";
        this.data.goods.isDist && 1 == this.data.goods.isDist && this.data.from && "distribution" == this.data.from ? t = this.data.goods.shareCode : this.data.goods.isDist && 1 == this.data.goods.isDist && this.data.from && "share" == this.data.from && (t = this.data.shareCode), 
        this.normalBuyNow({
            shareCode: t
        }, 4);
    },
    handleOpenTuan: function() {
        this.normalBuyNow({
            groupId: this.data.goods.groupEvent && this.data.goods.groupEvent.groupId || "0"
        }, 6);
    },
    handleMiaoShaBuyNow: function() {
        this.normalBuyNow({}, 6);
    },
    handleMakeSure: function() {
        console.log("+++++");
        var t = this.data.action, a = this.data.formData.selectSku, e = this.data.goods.specs.length == Object.getOwnPropertyNames(a).length;
        if ([ 2, 3, 4, 5, 6 ].indexOf(t) > -1 && !e) this.showZanToast("请选择规格"); else switch (t) {
          case 2:
            this.handleAddCart();
            break;

          case 3:
            this.handleBuyNow();
            break;

          case 4:
            this.handleFenXiaoBuyNow();
            break;

          case 5:
            this.handleBuyNow();
            break;

          case 6:
            this.handleOpenTuan();
        }
    },
    handleSpecClick: function(t) {
        var a = t.currentTarget.dataset;
        if (!a.disabled) {
            var e = Object.assign({}, this.data.formData.selectSku);
            e[a.pid] = {
                id: a.id,
                name: a.name
            };
            var o = "";
            this.data.goods.specs.forEach(function(t) {
                o += e[t.id] ? e[t.id].name : "", o += e[t.id] ? "," : "";
            });
            var i = Object.assign({}, this.data.goods);
            i.specs = i.specs.map(function(t) {
                return e[t.id] && (t.specsList = t.specsList.map(function(a) {
                    return e[t.id].id == a.id ? a.selected = !0 : a.selected = !1, a;
                })), t;
            });
            var s = Object.getOwnPropertyNames(e), n = void 0;
            i.skus.forEach(function(t) {
                t.properties.filter(function(t) {
                    return s.filter(function(a) {
                        return t[a] == e[a].id;
                    }).length > 0;
                }).length == t.properties.length && (n = t);
            }), console.log(n), i.specs.length - s.length == 1 ? i.specs.map(function(t) {
                return e[t.id] || (t.specsList = t.specsList.map(function(a) {
                    var o = Object.assign({}, e);
                    o[t.id] = {
                        id: a.id,
                        name: a.name
                    };
                    var s = Object.getOwnPropertyNames(o), n = void 0;
                    return i.skus.forEach(function(t) {
                        var e = t.properties.filter(function(t) {
                            return s.filter(function(a) {
                                return t[a] == o[a].id;
                            }).length > 0;
                        }).length == t.properties.length;
                        console.log("result====>", e), e && (n = t, a.disabled = n && 0 == n.quantity);
                    }), a;
                })), t;
            }) : i.specs.length - s.length == 0 && i.specs.map(function(t) {
                return t.specsList = t.specsList.map(function(a) {
                    var o = Object.assign({}, e);
                    o[t.id] = {
                        id: a.id,
                        name: a.name
                    };
                    var s = Object.getOwnPropertyNames(o), n = void 0;
                    return i.skus.forEach(function(t) {
                        t.properties.filter(function(t) {
                            return s.filter(function(a) {
                                return t[a] == o[a].id;
                            }).length > 0;
                        }).length == t.properties.length && (n = t, a.disabled = n && 0 == n.quantity);
                    }), a;
                }), t;
            }), this.setData({
                goods: i,
                formData: {
                    num: {
                        quantity: n && this.data.formData.num.quantity > n.quantity ? n.quantity : this.data.formData.num.quantity > 0 ? this.data.formData.num.quantity : 1,
                        min: this.data.formData.num.min,
                        max: n ? n.quantity : this.data.formData.num.max,
                        minBuy: n && n.minBuy > 0 ? n.minBuy : 1,
                        maxBuy: n && n.maxBuy > 0 && n.maxBuy < n.quantity ? n.maxBuy : n ? n.quantity : 99999,
                        hasSelect: this.data.formData.num.hasSelect
                    },
                    sku: n ? {
                        price: n.price,
                        groupPrice: n.groupPrice,
                        quantity: n.quantity,
                        id: n.id,
                        maxBuy: n.maxBuy,
                        minBuy: n.minBuy
                    } : this.data.formData.sku,
                    selectSku: e,
                    selectSkuText: o
                }
            }), console.log("selectSku----------\x3e", e);
        }
    },
    collection: function() {
        var t = this, a = this.data.goods.id;
        o.default.shareGoodsList({
            goodsId: a,
            type: 1 == this.data.goods.isShare ? "cancel" : "share"
        }).then(function(a) {
            if (a && a.data.result) {
                var o = t.data.goods, i = 1 == o.isShare ? 0 : 1;
                t.setData({
                    goods: e({}, o, {
                        isShare: i
                    })
                });
            }
        }).catch(function(t) {
            return console.log(t);
        });
    },
    collectionGoods: function() {
        var t = this, e = this.data.goods, i = e.id;
        e.hasCollection ? o.default.unfollowGoods({
            goodsId: i
        }).then(function() {
            t.setData(a({}, "goods.hasCollection", 0));
        }) : o.default.followGoods({
            goodsId: i
        }).then(function() {
            t.setData(a({}, "goods.hasCollection", 1));
        });
    },
    wxParseTagATap: function(t) {
        console.log(t, "++++++++++++");
        var a = t.currentTarget.dataset.src;
        wx.redirectTo({
            url: "/pages/webview/index?url=" + r.default.stringify(a)
        });
    }
}));