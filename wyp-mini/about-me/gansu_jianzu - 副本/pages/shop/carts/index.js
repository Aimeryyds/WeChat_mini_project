function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e, a) {
    return e in t ? Object.defineProperty(t, e, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = a, t;
}

var a = function() {
    function t(t, e) {
        var a = [], i = !0, d = !1, l = void 0;
        try {
            for (var n, s = t[Symbol.iterator](); !(i = (n = s.next()).done) && (a.push(n.value), 
            !e || a.length !== e); i = !0) ;
        } catch (t) {
            d = !0, l = t;
        } finally {
            try {
                !i && s.return && s.return();
            } finally {
                if (d) throw l;
            }
        }
        return a;
    }
    return function(e, a) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, a);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), i = t(require("../../../utils/util.js")), d = t(require("../../../component/quantity/index.js")), l = t(require("../../../network/api.js")), n = t(require("../../../utils/const.js")), s = t(require("../../../utils/notification")), o = t(require("../../../utils/es6-promise.min.js")), r = require("../../../dist/index"), c = {
    data: {
        tab: {
            list: [ {
                id: 0,
                title: "配送商品"
            }, {
                id: 1,
                title: "物流商品"
            } ],
            selectedId: 0,
            scroll: !1,
            height: 40
        },
        originalData: [],
        diningTableNo: "",
        cyType: ""
    }
};

i.default.registComp(c, r.Tab, d.default, r.TopTips, {
    onLoad: function(t) {
        var e = this;
        t.diningTableNo && this.setData({
            diningTableNo: t.diningTableNo
        }), t.cyType && this.setData({
            cyType: t.cyType
        }), s.default.register(n.default.action.LOCATION_CHANGED, this, function(t) {
            console.log(t, "data"), e.queryCarts(e.data.storeId, e.data.tab.selectedId);
        }), s.default.register(n.default.action.ORDER_CREATED, this, function(t) {
            console.log(t, "data"), e.queryCarts(e.data.storeId, e.data.tab.selectedId);
        });
        var a = t.storeId;
        this.setData({
            storeId: a
        }), wx.showLoading({
            title: "请稍后",
            mask: !0
        }), l.default.getStoreType({
            id: this.data.storeId
        }).then(function(t) {
            e.setData({
                shop: t.data
            });
            var a = e.data.shop;
            1 == a.storeType || 2 == a.storeType ? (e.setData({
                "tab.selectedId": "0"
            }), e.queryCarts(e.data.storeId, 0, !0)) : e.queryAllCarts(e.data.storeId);
        }), this.selectComponent("#cart").queryCartInfo();
    },
    queryCarts: function(t, a, i) {
        var d = this, n = this;
        l.default.queryStoreCarts({
            storeId: t,
            expressType: a
        }).then(function(t) {
            var l;
            t.data.valid.goodsList = d.setListAllSelect(t.data.valid.goodsList, i || !1), t.data.valid.fullreduction = d.formatLsit(t.data.valid.fullreduction), 
            t.data.valid.fullreduction.forEach(function(t) {
                return d.setListAllSelect(t.eventGoodsList, i || !1);
            });
            var s = {
                valid: t.data.valid.goodsList,
                invalid: t.data.invalid
            };
            wx.hideLoading(), d.data.cartItems || d.setData({
                cartItems: [ {} ]
            }), n.setData((l = {}, e(l, "cartItems[" + a + "].items", s), e(l, "cartItems[" + a + "].fullreduction", t.data.valid.fullreduction), 
            e(l, "cartItems[" + a + "].allSelected", i || !1), e(l, "originalData[" + a + "]", t.data), 
            l)), n.setTabNum(), n.handleUpdateNumTotal();
        }).catch(function() {
            wx.hideLoading();
        });
    },
    queryAllCarts: function(t) {
        var e = this;
        o.default.all([ l.default.queryStoreCarts({
            storeId: t,
            expressType: 0
        }), l.default.queryStoreCarts({
            storeId: t,
            expressType: 1
        }) ]).then(function(t) {
            wx.hideLoading(), console.log(t[0], t[1]);
            var i = a(t, 2), d = i[0], l = i[1];
            d.data.valid.goodsList = e.setListAllSelect(d.data.valid.goodsList), d.data.valid.fullreduction = e.formatLsit(d.data.valid.fullreduction), 
            d.data.valid.fullreduction.forEach(function(t) {
                return e.setListAllSelect(t.eventGoodsList);
            }), l.data.valid.goodsList = e.setListAllSelect(l.data.valid.goodsList), l.data.valid.fullreduction = e.formatLsit(l.data.valid.fullreduction), 
            l.data.valid.fullreduction.forEach(function(t) {
                return e.setListAllSelect(t.eventGoodsList);
            });
            var n = {
                valid: d.data.valid.goodsList,
                invalid: d.data.invalid
            }, s = {
                valid: l.data.valid.goodsList,
                invalid: l.data.invalid
            };
            e.setData({
                cartItems: [ {
                    items: n,
                    fullreduction: d.data.valid.fullreduction,
                    allSelected: !0
                }, {
                    items: s,
                    fullreduction: l.data.valid.fullreduction,
                    allSelected: !0
                } ],
                originalData: [ d.data, l.data ]
            }), d.data.valid.goodsList.length > 0 || d.data.valid.fullreduction.length > 0 ? e.setData({
                "tab.selectedId": "0"
            }) : l.data.valid.goodsList.length > 0 || l.data.valid.fullreduction.length > 0 ? e.setData({
                "tab.selectedId": "1"
            }) : e.setData({
                "tab.selectedId": "0"
            }), e.setTabNum(), e.handleUpdateNumTotal();
        }).catch(function(t) {
            console.log(t), wx.hideLoading();
        });
    },
    formatLsit: function(t) {
        return t && t.length > 0 ? t : [];
    },
    setListAllSelect: function(t) {
        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return t && t.length > 0 ? t.forEach(function(t) {
            return t.selected = e;
        }) : t = [], t;
    },
    setTabNum: function() {
        var t = this.data, e = t.cartItems, a = t.tab;
        a.list.forEach(function(t, a) {
            if (e[a]) {
                var i = 0;
                e[a].items.valid.forEach(function(t) {
                    i += t.quantity;
                }), e[a].fullreduction.forEach(function(t) {
                    t.eventGoodsList.forEach(function(t) {
                        i += t.quantity;
                    });
                }), t.title = (0 == t.id ? "配送商品" : "物流商品") + "（" + i + "）";
            }
        }), this.setData({
            "tab.list": a.list
        });
    },
    handleZanTabChange: function(t) {
        var a = t.componentId, i = t.selectedId;
        this.setData(e({}, a + ".selectedId", i)), this.handleUpdateNumTotal();
    },
    handleQuantityPlus: function(t) {
        var e = t.target.dataset.data, a = e.index, i = e.item, d = e.manjianitem, l = e.manjiangooditem, n = e.manjianIndex, s = e.manjianGoodIndex, o = this.data, r = o.cartItems, c = o.tab;
        if (i) {
            var u = r[c.selectedId].items.valid[a];
            console.log("cartItem", u), u.quantity < u.stock && this.updateCartItem(u.id, u.quantity + 1, a);
        } else l.quantity < l.stock && this.updateFullReductionItem(l.quantity + 1, d, l, n, s);
    },
    handleQuantityMinus: function(t) {
        var e = t.target.dataset.data, a = e.index, i = e.item, d = e.manjianitem, l = e.manjiangooditem, n = e.manjianIndex, s = e.manjianGoodIndex, o = this.data, r = o.cartItems, c = o.tab;
        if (i) {
            var u = r[c.selectedId].items.valid[a];
            1 == u.quantity ? this.destroyCartItem(u.id, a) : this.updateCartItem(u.id, u.quantity - 1, a);
        } else 1 == l.quantity ? this.destroyFullReductionItem(d, l, n, s) : this.updateFullReductionItem(l.quantity - 1, d, l, n, s);
    },
    handleTapDelete: function(t) {
        var e = t.target.dataset, a = e.item, i = e.index;
        this.destroyCartItem(a.id, i);
    },
    handleTapManJianDelete: function(t) {
        var e = t.target.dataset, a = e.manjianitem, i = e.manjiangooditem, d = e.manjianindex, l = e.manjiangoodindex;
        this.destroyFullReductionItem(a, i, d, l);
    },
    updateCartItem: function(t, a, i) {
        var d = this, n = this.data.tab;
        l.default.updateCartItem({
            cartId: t,
            quantity: a
        }).then(function() {
            d.setData(e({}, "cartItems[" + n.selectedId + "].items.valid[" + i + "].quantity", a)), 
            d.setTabNum(), d.handleUpdateNumTotal();
        });
    },
    updateFullReductionItem: function(t, a, i, d, n) {
        var s = this, o = this.data.tab;
        l.default.updateCartItem({
            cartId: i.id,
            quantity: t
        }).then(function() {
            s.setData(e({}, "cartItems[" + o.selectedId + "].fullreduction[" + d + "].eventGoodsList[" + n + "].quantity", t)), 
            s.setTabNum(), s.handleUpdateNumTotal();
        });
    },
    destroyCartItem: function(t, e) {
        var a = this, i = this.data, d = i.cartItems, n = i.tab;
        wx.showModal({
            title: "提示",
            content: "确定要删除该商品吗？",
            success: function(i) {
                i.confirm && (wx.showLoading({
                    title: "请稍后",
                    mask: !0
                }), l.default.destroyCartItem({
                    cartId: t
                }).then(function() {
                    wx.hideLoading(), d[n.selectedId].items.valid.splice(e, 1), a.setData({
                        cartItems: d
                    }), a.checkAllSelected(), a.setTabNum(), a.handleUpdateNumTotal();
                }));
            }
        });
    },
    destroyFullReductionItem: function(t, e, a, i) {
        var d = this, n = this.data, s = n.cartItems, o = n.tab;
        wx.showModal({
            title: "提示",
            content: "确定要删除该商品吗？",
            success: function(t) {
                t.confirm && (wx.showLoading({
                    title: "请稍后",
                    mask: !0
                }), l.default.destroyCartItem({
                    cartId: e.id
                }).then(function() {
                    wx.hideLoading(), s[o.selectedId].fullreduction[a].eventGoodsList.splice(i, 1), 
                    s[o.selectedId].fullreduction.forEach(function(t, e) {
                        (!t.eventGoodsList || t.eventGoodsList.length < 1) && s[o.selectedId].fullreduction.splice(e, 1);
                    }), d.setData({
                        cartItems: s
                    }), d.checkAllSelected(), d.setTabNum(), d.handleUpdateNumTotal();
                }));
            }
        });
    },
    selectAll: function() {
        var t = this, a = this.data, i = a.cartItems, d = a.tab;
        i[d.selectedId].items.valid.forEach(function(a, l) {
            t.setData(e({}, "cartItems[" + d.selectedId + "].items.valid[" + l + "].selected", !i[d.selectedId].allSelected));
        }), i[d.selectedId].fullreduction.forEach(function(a, l) {
            a.eventGoodsList.forEach(function(a, n) {
                t.setData(e({}, "cartItems[" + d.selectedId + "].fullreduction[" + l + "].eventGoodsList[" + n + "].selected", !i[d.selectedId].allSelected));
            });
        }), this.setData(e({}, "cartItems[" + d.selectedId + "].allSelected", !i[d.selectedId].allSelected)), 
        this.handleUpdateNumTotal();
    },
    selectItem: function(t) {
        var a = t.target.dataset, i = a.index, d = a.item;
        console.log(" index, item", i, d);
        var l = this.data, n = l.cartItems, s = l.tab;
        this.setData(e({}, "cartItems[" + s.selectedId + "].items.valid[" + i + "].selected", !n[s.selectedId].items.valid[i].selected)), 
        this.checkAllSelected();
    },
    selectManjianGoodItem: function(t) {
        var a = t.target.dataset, i = a.manjianindex, d = a.manjiangooditem, l = a.manjiangoodindex;
        console.log(" manjianindex, manjiangooditem,manjiangoodindex=====>", i, d, l);
        var n = this.data, s = n.cartItems, o = n.tab;
        this.setData(e({}, "cartItems[" + o.selectedId + "].fullreduction[" + i + "].eventGoodsList[" + l + "].selected", !s[o.selectedId].fullreduction[i].eventGoodsList[l].selected)), 
        this.checkAllSelected();
    },
    clearCarts: function() {
        var t = this, a = this.data.tab;
        wx.showModal({
            title: "提示",
            content: "确定要清空购物车所有商品吗？",
            success: function(i) {
                i.confirm && (wx.showLoading({
                    title: "请稍后",
                    mask: !0
                }), l.default.clearCart({
                    storeId: t.data.storeId,
                    expressType: t.data.tab.selectedId
                }).then(function() {
                    var i;
                    wx.hideLoading(), t.setData((i = {}, e(i, "cartItems[" + a.selectedId + "].items.valid", []), 
                    e(i, "cartItems[" + a.selectedId + "].fullreduction", []), i)), t.setTabNum(), t.handleUpdateNumTotal();
                }));
            }
        });
    },
    clearInvalid: function() {
        var t = this.data.tab;
        this.setData(e({}, "cartItems[" + t.selectedId + "].items.invalid", [])), l.default.clearInvalid({
            storeId: this.data.storeId,
            expressType: this.data.tab.selectedId
        });
    },
    checkAllSelected: function() {
        var t = this.data, a = t.cartItems, i = t.tab, d = a[i.selectedId], l = d.items, n = d.allSelected;
        n && l.valid.some(function(t) {
            return !t.selected;
        }) && this.setData(e({}, "cartItems[" + i.selectedId + "].allSelected", !1)), n || l.valid.some(function(t) {
            return !t.selected;
        }) || this.setData(e({}, "cartItems[" + i.selectedId + "].allSelected", !0)), this.handleUpdateNumTotal();
    },
    handleCheckout: function() {
        var t = this;
        console.log("handleCheckout==========>");
        for (var e = this.data, a = e.cartItems, d = e.tab, n = e.shop, s = a[d.selectedId].items.valid.filter(function(t) {
            return t.selected;
        }).map(function(t) {
            return {
                quantity: t.quantity,
                propertiesId: t.propertiesId,
                id: t.id,
                propertiesValue: t.propertiesValue,
                goodsId: t.goodsId
            };
        }), o = a[d.selectedId].fullreduction, r = 0; r < o.length; r++) for (var c = 0; c < o[r].eventGoodsList.length; c++) {
            var u = o[r].eventGoodsList[c];
            u.selected && s.push({
                quantity: u.quantity,
                propertiesId: u.propertiesId,
                id: u.id,
                propertiesValue: u.propertiesValue,
                goodsId: u.goodsId
            });
        }
        var f = this;
        wx.showLoading({
            title: "请稍候"
        }), 6 == n.storeType ? l.default.confirmFoodCartOrder({
            cartItems: JSON.stringify(s),
            consigneeId: -1
        }).then(function(e) {
            wx.hideLoading();
            var a = e.data;
            a.cartItems = s, wx.navigateTo({
                url: "/pages/food/createorder/index?from=cart&order=" + i.default.stringify(a) + "&diningTableNo=" + t.data.diningTableNo + "&storeId=" + t.data.storeId + "&cyType=" + t.data.cyType
            });
        }).catch(function(t) {
            console.log(t);
            var e = "";
            t.data && t.data.data && t.data.data.length > 0 ? (t.data.data.forEach(function(t) {
                var a = t.properties.split(";");
                console.log("prosList---\x3e", a);
                var i = "";
                a.forEach(function(t) {
                    console.log("value---\x3e", t), t && t.length > 0 && (i += t.split(":")[1] || "");
                }), e += "" != i ? t.goodsName + "(" + i + ")," : t.goodsName + ",";
            }), e += "超出购买范围") : e = t.data && t.data.msg ? t.data.msg : l.default.errors(t.error) || t.errorMessage || "订单创建失败", 
            wx.hideLoading(), f.showZanTopTips(e);
        }) : l.default.confirmCartOrder({
            cartItems: JSON.stringify(s),
            consigneeId: -1
        }).then(function(t) {
            wx.hideLoading();
            var e = t.data;
            e.cartItems = s, wx.navigateTo({
                url: "/pages/orders/new/new?from=cart&order=" + i.default.stringify(e)
            });
        }).catch(function(t) {
            console.log(t);
            var e = "";
            t.data && t.data.data && t.data.data.length > 0 ? (t.data.data.forEach(function(t) {
                var a = t.properties.split(";");
                console.log("prosList---\x3e", a);
                var i = "";
                a.forEach(function(t) {
                    console.log("value---\x3e", t), t && t.length > 0 && (i += t.split(":")[1] || "");
                }), e += "" != i ? t.goodsName + "(" + i + ")," : t.goodsName + ",";
            }), e += "超出购买范围") : e = t.data && t.data.msg ? t.data.msg : l.default.errors(t.error) || t.errorMessage || "订单创建失败", 
            wx.hideLoading(), f.showZanTopTips(e);
        });
    },
    handleUpdateNumTotal: function() {
        var t = this, a = 0, i = 0, d = 0, l = this.data.minSendFee || 0, n = this.data.cartItems[this.data.tab.selectedId], s = n.items.valid;
        s && s.forEach(function(t) {
            t.selected && (a += t.quantity, i += t.quantity * t.price, l -= t.quantity * t.price);
        }), n.fullreduction && n.fullreduction.length > 0 && n.fullreduction.forEach(function(n, s) {
            var o = 0;
            if (n.eventGoodsList.forEach(function(t) {
                t.selected && (a += t.quantity, o += t.quantity * t.price);
            }), console.log("满减之前价格==》", o), n.fullLimitMoneyList && n.fullLimitMoneyList.length > 0) for (var r = 0; r < n.fullLimitMoneyList.length; r++) {
                if (console.log("遍历满减,满减条件接口金额从大到小排序==》", n.fullLimitMoneyList[r].split(":")[0], n.fullLimitMoneyList[r].split(":")[1]), 
                console.log("是否符合==》", o >= n.fullLimitMoneyList[r].split("：")[0]), o >= n.fullLimitMoneyList[r].split(":")[0]) {
                    console.log("满", n.fullLimitMoneyList[r].split(":")[0], "减", n.fullLimitMoneyList[r].split(":")[1]), 
                    console.log("满减之后==》", o - n.fullLimitMoneyList[r].split(":")[1]), i += o - n.fullLimitMoneyList[r].split(":")[1], 
                    d += parseFloat(n.fullLimitMoneyList[r].split(":")[1]);
                    break;
                }
                r == n.fullLimitMoneyList.length - 1 && (i += o);
            } else i += o, l -= o;
            var c = t.data.originalData[t.data.tab.selectedId].valid.fullreduction[s].giveawayList;
            if (c && c.length > 0) for (var u = 0; u < c.length; u++) {
                if (console.log("遍历赠品，接口按金额从大到小排序==》", c), console.log("是否符合==》", o, ">=", c[u].fullLimitMoney, o >= c[u].fullLimitMoney), 
                o >= c[u].fullLimitMoney) {
                    console.log("满", c[u].fullLimitMoney, "送", c[u].giveawayName), t.setData(e({}, "cartItems[" + t.data.tab.selectedId + "].fullreduction[" + s + "].giveawayList", [ c[u] ]));
                    break;
                }
                t.setData(e({}, "cartItems[" + t.data.tab.selectedId + "].fullreduction[" + s + "].giveawayList", []));
            }
        }), console.log("sumPrice--------\x3e", i), console.log("selectFullMoney--------\x3e", d), 
        this.setData({
            numTotal: a,
            priceTotal: i.toFixed(2),
            selectFullMoney: d.toFixed(2),
            minSendFeeDifference: l.toFixed(2)
        });
    },
    changeSendFee: function(t) {
        var e = t.detail.data;
        console.log(t.detail.data, "eeee"), this.setData({
            minSendFeeDifference: e.minSendFeeDifference,
            minSendFee: e.minSendFee
        }), console.log(this.data.minSendFeeDifference, "----------------------");
    },
    onUnload: function() {
        s.default.remove(n.default.action.LOCATION_CHANGED, this), s.default.remove(n.default.action.ORDER_CREATED, this);
    }
}), Page(c);