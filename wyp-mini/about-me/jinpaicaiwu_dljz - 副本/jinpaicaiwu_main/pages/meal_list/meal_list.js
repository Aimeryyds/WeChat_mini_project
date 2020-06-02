var t = getApp();

Page({
    data: {
        meals: [],
        meal: [],
        categorys: [],
        shop_id: 0,
        carts: [],
        specs: [],
        ingredients: [],
        taste: [],
        selspec: [],
        selingred: [],
        seltaste: [],
        cartsLength: 0,
        cartsprice: 0,
        selectMenuid: 0,
        shop: {
            name: ""
        },
        total: {
            count: 0,
            money: 0
        },
        windowHeight: "",
        flag: !0,
        showModalStatus: !1,
        styles: {},
        text: {},
        takeaway: 1
    },
    onLoad: function(t) {
        var a = t.shop_id, e = this;
        e.parseStyle(), wx.getSystemInfo({
            success: function(t) {
                e.setData({
                    windowHeight: t.windowHeight
                });
            }
        });
        var i = {}, s = t.takeaway;
        if ("2" == s) {
            var r = wx.getStorageSync("mealDelivery") || "";
            e.setData({
                takeaway: s,
                mealDelivery: r
            });
        }
        a && (i.shop_id = a), s && (i.takeaway = s), e.data.shop_id = a, e.getMeals(i);
    },
    handletouchmove: function() {
        this.setData({
            flag: !0
        });
    },
    getMeals: function(a) {
        var e = this, i = a.shop_id ? a.shop_id : e.data.shop_id, s = a.cate_id ? a.cate_id : 0, r = e.data.takeaway, n = {};
        i && (n.shop_id = i), s && (n.cate_id = s), r && (n.takeaway = r), t.apiRequest("meal", "meal_list", {
            data: n,
            success: function(t) {
                if ("OK" == t.data.result) {
                    0 == t.data.shop.open && wx.showModal({
                        title: "门店已打烊",
                        content: "",
                        showCancel: !1,
                        success: function() {
                            wx.navigateBack({
                                delta: 1
                            });
                        }
                    });
                    var a = t.data.data, i = t.data.categorys;
                    !s && i.length > 0 && (s = i[0].id);
                    var n = s, o = e.data.carts, c = [];
                    for (var d in a) a[d].category_id == n && c.push(a[d]);
                    a = c;
                    for (var l in a) {
                        if ("2" == r && (a[l].price = a[l].takeout_price, a[l].discount_price = 0, a[l].spec)) {
                            var h = a[l].spec;
                            for (var p in h) h[p].price = h[p].takeout_price;
                            a[l].spec = h;
                        }
                        for (var u in o) parseInt(a[l].id) == parseInt(o[u].id) && (a[l].count = o[u].count);
                    }
                    !e.data.shop.name && t.data.shop.name && (e.setData({
                        shop: t.data.shop
                    }), wx.setNavigationBarTitle({
                        title: t.data.shop.name
                    })), e.setData({
                        meals: a,
                        selectMenuid: s,
                        categorys: i
                    });
                } else {
                    var f = t.data.errmsg || "请求失败";
                    wx.showModal({
                        title: f,
                        content: "",
                        showCancel: !1
                    });
                }
            }
        });
    },
    tapAttr: function(t) {
        var a = t.currentTarget.dataset, e = this.data.meal, i = this.data.total, s = a.index;
        if ("spec" == a.type) {
            var r = this.data.selspec, n = this.parsePrice(r.price), o = this.parsePrice(e.spec[s].price);
            i.money = this.parsePrice(i.money - n + o), r = e.spec[s], this.setData({
                selspec: r,
                total: i
            });
        } else if ("ingred" == a.type) {
            var c = [];
            e.ingred[s].sel ? (e.ingred[s].sel = !1, i.money = this.parsePrice(i.money) - this.parsePrice(e.ingred[s].price)) : (e.ingred[s].sel = !0, 
            i.money = this.parsePrice(i.money) + this.parsePrice(e.ingred[s].price));
            for (var d in e.ingred) e.ingred[d].sel && c.push(e.ingred[d]);
            i.money = this.parsePrice(i.money), this.setData({
                selingred: c,
                total: i,
                meal: e
            });
        } else if ("taste" == a.type) {
            var l = a.name, h = a.index, p = (a.tindex, this.data.seltaste);
            e.taste[h].sel = l, this.setData({
                seltaste: p,
                meal: e
            });
        }
    },
    parsePrice: function(t) {
        var a = parseFloat(t);
        return (a += 1e-7) ? parseFloat(a.toFixed(2)) : 0;
    },
    showModal: function() {
        var t = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.animation = t, t.translateY(300).step(), this.setData({
            animationData: t.export(),
            showModalStatus: !0
        }), setTimeout(function() {
            t.translateY(0).step(), this.setData({
                animationData: t.export()
            });
        }.bind(this), 200);
    },
    hideModal: function() {
        var t = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        });
        this.data.animation = t, t.translateY(300).step(), this.setData({
            animationData: t.export()
        }), setTimeout(function() {
            t.translateY(0).step(), this.setData({
                animationData: t.export(),
                showModalStatus: !1
            });
        }.bind(this), 200);
    },
    selectMenu: function(t) {
        var a = t.currentTarget.dataset, e = this;
        e.getMeals({
            cate_id: a.id
        }), e.data.selectMenuid = a.id;
    },
    addCount: function(t) {
        var a = t.currentTarget.dataset, e = a.index, i = a.type, s = this.data.meals, r = this.data.carts, n = [];
        if (s[e] && (n = s[e]), "cart" == i) {
            n = r[e];
            for (var o in s) s[o].id == n.id && (s[o].count += 1);
            return r[e].count += 1, this.setData({
                meals: s,
                carts: r
            }), this.dealCart(), !1;
        }
        "0" != n.price_type || n.taste_ids || n.ingredients || (s[e].count ? s[e].count += 1 : s[e].count = 1), 
        this.setData({
            meals: s,
            meal: n,
            carts: r
        });
        var c = this.data.total;
        c.money = 0;
        var d = [];
        "0" != n.price_type || n.ingredients || n.taste_ids ? ("1" == n.price_type ? d = n.spec : c.money = n.discount_price > 0 ? n.discount_price : n.price, 
        this.setData({
            flag: !1,
            specs: d,
            selspec: [],
            selingred: [],
            seltaste: [],
            total: c
        })) : (this.addCart(), this.dealCart()), this.animation = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 100,
            transformOrigin: "50% 50%",
            opacity: "1"
        });
    },
    dealCart: function() {
        var t = this.data.carts, a = (this.data.meal, this.data.meals), e = 0, i = 0;
        for (var s in t) if (t[s].id) {
            var r = t[s].count ? parseInt(t[s].count) : 1;
            e += r;
            var n = this.parsePrice(t[s].discount_price > 0 ? t[s].discount_price : t[s].price) + this.parsePrice(t[s].packing_fee);
            if (n *= r, t[s].ingred_id) for (var o in t[s].ingred_id) n += this.parsePrice(t[s].ingred_id[o].price) * r;
            i += n;
        }
        if (0 == t.length) for (var c in a) a[c].count > 0 && (a[c].count = 0);
        this.setData({
            cartsLength: e,
            cartsprice: this.parsePrice(i),
            meals: a
        });
    },
    submit: function() {
        var a = this.data.carts;
        if (a.length <= 0) return wx.showModal({
            title: "购物车不能为空",
            content: "",
            showCancel: !1
        }), !1;
        for (var e in a) a[e].spec && (a[e].spec = ""), a[e].ingred && (a[e].ingred = ""), 
        a[e].taste && (a[e].taste = "");
        var i = this.data.cartsprice, s = this.data.takeaway;
        if ("2" == s) {
            var r = this.data.mealDelivery;
            if (r.min_price > 0 && r.min_price > i) return wx.showModal({
                title: "满" + r.min_price + "起送",
                content: "",
                showCancel: !1
            }), !1;
        }
        t.globalData.mealCarts = a;
        var n = this.data.shop_id;
        this.setData({
            showModalStatus: !1
        }), wx.navigateTo({
            url: "../meal_order/meal_order?cartsprice=" + i + "&shop_id=" + n + "&takeaway=" + s
        });
    },
    addCart: function() {
        var t = Object.assign({}, this.data.meal), a = this.data.carts, e = this.data.meals;
        if ("0" != t.price_type || t.ingredients || t.taste_ids) {
            var i = "", s = [], r = [];
            if (this.data.selspec && (i = this.data.selspec.id), this.data.selingred) {
                var n = this.data.selingred;
                for (var o in n) n[o].id && s.push(n[o].id);
                s && (s = s.sort().join(""));
            }
            if (t.taste) {
                var c = t.taste;
                for (var d in c) c[d].sel && r.push(c[d].sel);
                r && (r = r.sort().join(""));
            }
            if (this.data.carts) {
                var l = this.data.carts, h = "", p = "", u = "";
                for (var f in l) if (l[f].id == t.id) {
                    var m = [], g = [];
                    if (l[f].spec_id && (h = l[f].spec_id.id), l[f].ingred_id) {
                        var v = l[f].ingred_id;
                        for (var _ in v) v[_].id && m.push(v[_].id);
                        m && (p = m.sort().join(""));
                    }
                    if (l[f].taste_id) {
                        var y = l[f].taste_id;
                        for (var w in y) y[w].sel && g.push(y[w].sel);
                        g && (u = g.sort().join(""));
                    }
                    if (i || (i = ""), s || (s = ""), r || (r = ""), h || (h = ""), p || (p = ""), u || (u = ""), 
                    i == h && s == p && r == u) {
                        l[f].count += 1;
                        var D = l[f].id;
                        for (var x in e) e[x].id == D && (e[x].count += 1);
                        return this.setData({
                            carts: l,
                            flag: !0,
                            meals: e
                        }), this.dealCart(), !1;
                    }
                }
            }
            if ("1" == t.price_type) {
                var M = this.data.selspec;
                if (!M.id) return wx.showModal({
                    title: "请选择规格",
                    content: "",
                    showCancel: !1
                }), !1;
                t.count = 1, t.price = M.price, t.spec_id = {
                    id: M.id,
                    name: M.name,
                    price: M.price
                };
            }
            if (t.ingredients) {
                var C = this.data.selingred;
                t.ingred_id = C, t.count = 1;
            }
            if (t.taste_ids) {
                var b = [], k = t.taste;
                for (var P in k) k[P].sel && b.push({
                    name: k[P].name,
                    sel: k[P].sel
                });
                t.taste_id = b, t.count || (t.count = 1);
            }
            for (var S in e) if (e[S].id == t.id) {
                e[S].count ? e[S].count += 1 : e[S].count = 1;
                break;
            }
            a.push(t), this.setData({
                meal: t,
                flag: !0,
                carts: a,
                meals: e
            }), this.dealCart();
        } else {
            var T = !1;
            for (var A in a) a[A].id == t.id && (a[A].count += 1, T = !0);
            T || (t.count || (t.count = 1), a.push(t));
        }
        this.setData({
            carts: a
        });
    },
    minusCount: function(t) {
        var a = t.currentTarget.dataset, e = a.index, i = a.type, s = this.data.meals, r = [];
        if (s[e] && (r = s[e]), "cart" == i && (r = this.data.carts[e]), "1" == r.price_type && "cart" != i) wx.showModal({
            title: "提示",
            content: "含有规格的商品只能在购物车里删减",
            showCancel: !1
        }); else {
            var n = this.data.carts;
            if ("cart" == i) for (var o in s) s[o].id == r.id && (s[o].count -= 1); else s[e].count && (s[e].count -= 1);
            for (var c in n) {
                n[c];
                if (n[c].id == r.id) {
                    n[c].count > 1 ? n[c].count -= 1 : n.splice(c, 1);
                    break;
                }
            }
            this.setData({
                meals: s,
                carts: n
            }), this.dealCart();
        }
    },
    onShow: function() {
        var a = t.globalData.mealCarts || [];
        wx.getStorageSync("mealDelivery");
        if (!a.length) {
            this.data.total;
            var e = this.data.meals;
            for (var i in e) e[i].count > 0 && (e[i].count = 0);
            this.setData({
                carts: a,
                cartsLength: 0,
                cartsprice: 0,
                meals: e
            });
        }
        this.setData({
            winzIndex: wx.canIUse("alert") ? 999 : 9e3
        });
    },
    truncateCarts: function() {
        var t = this.data.meals, a = [];
        for (var e in t) t[e].count = 0;
        this.setData({
            meals: t,
            showModalStatus: !1,
            cartsLength: 0,
            cartsprice: 0,
            carts: a
        });
    },
    parseStyle: function() {
        var a = this, e = t.globalData.config.wxmeal_inner_gstyle, i = this.data.text;
        e && ([ "category_actived", "background", "border_btm", "title", "desc", "price", "thumb", "boxer_space", "minusplus", "minusplus_icon", "carticon_bg", "shopping_cart", "buy" ].forEach(function(t) {
            var s = "", r = e[t] || {};
            for (var n in r) {
                var o = r[n];
                "text" != n ? ("number" != typeof o && "thumb" != t || (o = getApp().px2rpx(o)), 
                s += n + ": " + o + ";") : i[t] = o;
            }
            if (s.length > 0) {
                var c = a.data.styles;
                c[t] = s, a.setData({
                    styles: c
                });
            }
        }), this.setData({
            display: e.display,
            text: i
        }));
    }
});