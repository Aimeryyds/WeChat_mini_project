function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t, u) {
    return t in e ? Object.defineProperty(e, t, {
        value: u,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = u, e;
}

var u = function() {
    function e(e, t) {
        var u = [], a = !0, n = !1, r = void 0;
        try {
            for (var s, o = e[Symbol.iterator](); !(a = (s = o.next()).done) && (u.push(s.value), 
            !t || u.length !== t); a = !0) ;
        } catch (e) {
            n = !0, r = e;
        } finally {
            try {
                !a && o.return && o.return();
            } finally {
                if (n) throw r;
            }
        }
        return u;
    }
    return function(t, u) {
        if (Array.isArray(t)) return t;
        if (Symbol.iterator in Object(t)) return e(t, u);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), a = e(require("../../network/api.js")), n = e(require("../../behaviors/toast.js"));

Component({
    behaviors: [ n.default ],
    properties: {
        type: {
            type: String,
            value: void 0
        },
        currentGood: {
            type: Object,
            value: {}
        },
        showDialog: {
            type: Boolean,
            value: !1
        }
    },
    data: {},
    methods: {
        getCurrentGoodBuyMessage: function(e) {
            return e ? e.quantity <= 0 ? "暂无库存" : e.maxBuy > 0 && e.quantity <= e.maxBuy ? "剩余库存小于最小购买量" : e.minBuy > 0 && e.maxBuy > 0 ? "至少购买" + e.minBuy + "件，最多购买" + e.maxBuy + "件" : e.minBuy > 0 ? "至少购买" + e.minBuy + "件" : e.maxBuy > 0 ? "最多购买" + e.maxBuy + "件" : "" : "";
        },
        toggleDialog: function() {
            this.setData({
                showDialog: !this.data.showDialog
            });
        },
        handleSelectSpec: function(e) {
            var a, n = this, r = e.target.dataset, s = r.specindex, o = r.specvalueindex, i = this.data.currentGood, d = i.specs[s], c = d.values[o];
            if (!c.disabled && !c.selected) {
                i.specs[s].values.forEach(function(e, u) {
                    n.setData(t({}, "currentGood.specs[" + s + "].values[" + u + "].selected", !1));
                }), this.setData((a = {}, t(a, "currentGood.selectedSpec[" + s + "]", d.itemId + ":" + c.itemValueId), 
                t(a, "currentGood.specs[" + s + "].values[" + o + "].selected", !0), a));
                var l = "";
                i.selectedSpec.forEach(function(e) {
                    if (e) {
                        var t = e.split(":"), a = u(t, 2), n = a[0], r = a[1], s = i.specs.find(function(e) {
                            return e.itemId == n;
                        }).values.find(function(e) {
                            return e.itemValueId == r;
                        }).itemValue;
                        l += s + " ";
                    }
                }), this.setData({
                    "currentGood.selectedSpecValue": l
                });
                var h = i.skus.findIndex(function(e) {
                    return e.propertiesValue == i.selectedSpec.join(";");
                });
                -1 != h && (i.skus.forEach(function(e, u) {
                    n.setData(t({}, "currentGood.skus[" + u + "].selected", !1));
                }), this.setData({
                    "currentGood.selectedSku": i.skus[h],
                    "currentGood.num": this.setQuantity(i.skus[h].minBuy, i.skus[h].maxBuy, i.skus[h].quantity, i.num),
                    "currentGood.buyMessage": this.getCurrentGoodBuyMessage(i.skus[h])
                })), i.specs.forEach(function(e, u) {
                    e.values.forEach(function(a, r) {
                        var s = Array.from(i.selectedSpec);
                        s.splice(u, 1, e.itemId + ":" + a.itemValueId);
                        var o = i.skus.find(function(e) {
                            return e.propertiesValue == s.join(";");
                        });
                        n.setData(t({}, "currentGood.specs[" + u + "].values[" + r + "].disabled", o && o.quantity <= 0 || o && o.maxBuy > 0 && o.quantity < o.maxBuy ? 1 : 0));
                    });
                }), console.log("currentGood---------\x3e", this.data.currentGood);
            }
        },
        setQuantity: function(e, t, u, a) {
            return a >= e && a <= u && (t > 0 && a <= t || 0 == t) ? a : e > u || t > 0 && e > t ? 0 : e > 0 && a <= e ? e : t > 0 && a > t ? t > u ? u : t : 1;
        },
        handleQuantityPlus: function(e) {
            console.log(e, this.data);
            var t = this.data.currentGood;
            t.skus && t.skus.length > 0 ? t.selectedSku && t.selectedSku.quantity > t.num && (t.selectedSku.maxBuy ? (t.selectedSku.maxBuy > t.selectedSku.quantity ? t.selectedSku.quantity : t.selectedSku.maxBuy) > t.num && this.setData({
                "currentGood.num": t.num + 1
            }) : this.setData({
                "currentGood.num": t.num + 1
            })) : t.stock > t.num && this.setData({
                "currentGood.num": t.num + 1
            });
        },
        handleQuantityMinus: function(e) {
            this.data.currentGood.num < 2 || this.data.currentGood.num < (this.data.currentGood.selectedSku && this.data.currentGood.selectedSku.minBuy ? this.data.currentGood.selectedSku.minBuy : 2) || this.setData({
                "currentGood.num": this.data.currentGood.num - 1
            });
        },
        handleAddToCart: function(e) {
            var t = this, u = this.data.currentGood;
            return wx.showLoading({
                title: "请稍后",
                mask: !0
            }), a.default.addToCart({
                goodsId: u.id,
                propertiesId: u.selectedSku.propertiesId,
                quantity: u.num || 1
            }).then(function(e) {
                console.log("--------res------", e), wx.hideLoading(), 0 == e.status ? (t.showToast("加入购物车成功！"), 
                t.triggerEvent("addToCartSuccess", {}), t.toggleDialog()) : t.showToast("网络连接错误！");
            }).catch(function(e) {
                console.log("err---\x3e", e), t.showToast(e.data && e.data.msg ? e.data.msg : "网络连接错误！"), 
                wx.hideLoading();
            });
        },
        handleCreateTuan: function(e) {
            var t = this.data.currentGood;
            this.triggerEvent("createTuan", t);
        }
    }
});