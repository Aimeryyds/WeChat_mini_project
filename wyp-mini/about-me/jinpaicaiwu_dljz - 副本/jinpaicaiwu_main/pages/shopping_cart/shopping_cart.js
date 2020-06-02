var t = require("../../wxParse/common.js"), a = require("../../static/config.js"), e = getApp();

Page({
    data: {
        foods: [],
        hasList: !1,
        totalPrice: 0,
        selectAllStatus: "",
        jsStatus: !1,
        totleNum: 0,
        insidepage_themecolor: "#c71f3b",
        prompt: {
            hidden: !1,
            icon: "../../../image/asset-img/iconfont-cart-empty.png",
            title: "购物车空空如也",
            text: "来挑几件好货吧",
            buttons: [ {
                text: "随便逛",
                bindtap: "bindtap"
            } ]
        },
        pageid: "shopping_cart/shopping_cart",
        show_homeBar: !1
    },
    bindtap: function() {
        wx.switchTab({
            url: "../category/category"
        });
    },
    onShow: function() {
        var t = this;
        this.setData({
            show_homeBar: 1 == getCurrentPages().length
        });
        wx.getStorageSync("openid");
        if (e.globalData.carts && e.globalData.carts.length) {
            var s = !0, o = !1, r = void 0;
            try {
                for (var i, n = e.globalData.carts[Symbol.iterator](); !(s = (i = n.next()).done); s = !0) {
                    var l = i.value;
                    l.min_purchase_num && l.num < l.min_purchase_num && (l.num = l.min_purchase_num);
                }
            } catch (t) {
                o = !0, r = t;
            } finally {
                try {
                    !s && n.return && n.return();
                } finally {
                    if (o) throw r;
                }
            }
        }
        this.setData({
            foods: e.globalData.carts,
            insidepage_themecolor: a.insidepage_themecolor
        }), this.getCartProducts(function(a) {
            t.setData({
                foods: a
            }), t.getSkuName(), a && a.length || t.setData({
                "prompt.hidden": 0
            });
        }), e.globalData.carts.length ? e.globalData.carts.length > 0 && (this.setData({
            "prompt.hidden": e.globalData.carts.length
        }), this.isSelectAll(), this.getTotalPrice()) : this.setData({
            "prompt.hidden": !1
        });
        var c = this.data.pageid, u = getApp().globalData.config.tabBar || {};
        if (u.list) {
            var d = !0, h = !1, f = void 0;
            try {
                for (var g, p = u.list[Symbol.iterator](); !(d = (g = p.next()).done); d = !0) {
                    var m = g.value;
                    m.type && "page" != m.type && (m.pagePath = "");
                }
            } catch (t) {
                h = !0, f = t;
            } finally {
                try {
                    !d && p.return && p.return();
                } finally {
                    if (h) throw f;
                }
            }
            if (this.setData({
                tabs: u
            }), "pageappoint" == u.applyPage && u.chooseList) {
                var v = u.chooseList.findIndex(function(t) {
                    return t == c;
                });
                this.setData({
                    showBar: v > -1
                });
            } else {
                var w = u.list.findIndex(function(t) {
                    return t.pagePath == c;
                });
                this.setData({
                    showBar: w > -1
                });
            }
        }
        wx.hideLoading();
    },
    getSkuName: function() {
        var t = this.data.foods, a = [];
        if (t && t.length > 0) {
            var s = !0, o = !1, r = void 0;
            try {
                for (var i, n = t[Symbol.iterator](); !(s = (i = n.next()).done); s = !0) {
                    var l = i.value.skuid;
                    l > 0 && a.push(l);
                }
            } catch (t) {
                o = !0, r = t;
            } finally {
                try {
                    !s && n.return && n.return();
                } finally {
                    if (o) throw r;
                }
            }
        }
        if (a.length) {
            var c = this;
            e.apiRequest("product_detail", "getCartSkuName", {
                data: {
                    skuids: a.join(",")
                },
                success: function(a) {
                    var e = a.data.data || [];
                    if ("OK" == a.data.result) for (var s = 0; s < t.length; s++) {
                        var o = t[s].skuid;
                        if (o) {
                            var r = e[o];
                            if (r) {
                                var i = {};
                                i["foods[" + s + "].skuchecked"] = r, c.setData(i);
                            }
                        }
                    }
                }
            });
        }
    },
    getCartProducts: function(t) {
        var a = e.globalData.carts;
        if (a && 0 != a.length) {
            var s = [], o = !0, r = !1, i = void 0;
            try {
                for (var n, l = a[Symbol.iterator](); !(o = (n = l.next()).done); o = !0) {
                    var c = n.value;
                    s.push({
                        pid: c.cid,
                        skuid: c.skuid
                    });
                }
            } catch (t) {
                r = !0, i = t;
            } finally {
                try {
                    !o && l.return && l.return();
                } finally {
                    if (r) throw i;
                }
            }
            e.apiRequest("product_detail", "cart_products", {
                data: {
                    products: JSON.stringify(s)
                },
                success: function(e) {
                    var s = e.data.data || [], o = [];
                    if ("OK" == e.data.result) {
                        var r = !0, i = !1, n = void 0;
                        try {
                            for (var l, c = a[Symbol.iterator](); !(r = (l = c.next()).done); r = !0) {
                                var u = l.value, d = s[u.cid + "_" + (u.skuid || 0)];
                                if (d) {
                                    var h = [ "title", "image", "max_kc", "min_purchase_num", "max_purchase_num" ], f = !0, g = !1, p = void 0;
                                    try {
                                        for (var m, v = h[Symbol.iterator](); !(f = (m = v.next()).done); f = !0) {
                                            var w = m.value;
                                            u[w] = "title" == w || "image" == w ? d[w] : parseInt(d[w]) || 0;
                                        }
                                    } catch (t) {
                                        g = !0, p = t;
                                    } finally {
                                        try {
                                            !f && v.return && v.return();
                                        } finally {
                                            if (g) throw p;
                                        }
                                    }
                                    o.push(u);
                                }
                            }
                        } catch (t) {
                            i = !0, n = t;
                        } finally {
                            try {
                                !r && c.return && c.return();
                            } finally {
                                if (i) throw n;
                            }
                        }
                    }
                    t(o);
                }
            });
        } else t(a);
    },
    toConfirm: function() {
        var a = [];
        if (this.data.foods.forEach(function(t) {
            t.selected && a.push(t);
        }), e.globalData.selectCarts = a, !a || 0 === a.length) return wx.hideToast(), void wx.showModal({
            title: "未选购商品",
            content: "您需要将商品加入购物车后才能支付",
            showCancel: !1,
            success: function(t) {}
        });
        wx.showLoading({
            title: "请求中",
            mask: !0
        }), t.get_cuser({
            success: function(t) {
                0 == t ? (wx.showToast({
                    title: "请先登录"
                }), wx.navigateTo({
                    url: "../login/login"
                })) : e.apiRequest("order", "addcart", {
                    data: {
                        data: JSON.stringify(a),
                        fr: "cart"
                    },
                    success: function(t) {
                        "OK" == t.data.result ? wx.navigateTo({
                            url: "../order_confirm/order_confirm?fr=cart"
                        }) : "2" == t.data.errmsg ? wx.navigateTo({
                            url: "../login/login"
                        }) : (wx.hideLoading(), wx.showToast({
                            title: "请求失败"
                        }));
                    }
                });
            }
        });
    },
    selectList: function(t) {
        var a = t.currentTarget.dataset.index, s = this.data.foods, o = s[a].selected;
        s[a].selected = !o, e.globalData.carts = s, this.setData({
            foods: s
        }), this.isSelectAll(), this.getTotalPrice();
    },
    deleteList: function(t) {
        var a = t.currentTarget.dataset.index, s = this.data.foods, o = this;
        wx.showModal({
            title: "温馨提示：",
            content: "是否确认删除该商品",
            success: function(t) {
                t.confirm ? (console.log("用户点击确定"), s.splice(a, 1), o.setData({
                    foods: s
                }), e.globalData.carts = s, wx.showToast({
                    title: "删除成功"
                }), s.length ? (o.isSelectAll(), o.getTotalPrice()) : o.setData({
                    hasList: !1,
                    "prompt.hidden": !1
                })) : t.cancel && console.log("用户点击取消");
            }
        });
    },
    selectAll: function(t) {
        var a = this.data.selectAllStatus;
        a = !a;
        for (var s = this.data.foods, o = 0; o < s.length; o++) s[o].selected = a;
        e.globalData.carts = s, this.setData({
            selectAllStatus: a,
            foods: s
        }), this.getTotalPrice();
    },
    addCount: function(t) {
        var a = t.currentTarget.dataset.index, s = this.data.foods, o = s[a].num, r = s[a].max_kc, i = s[a].max_purchase_num || 0;
        o += 1, i > 0 && o > i && (o = i, wx.showToast({
            title: "超出最大购买量~"
        })), o > r && (o = r, wx.showToast({
            title: "数量超出范围~"
        })), (!o || o < 1) && (o = 1), s[a].num = o, this.setData({
            foods: s
        }), e.globalData.carts = s, this.getTotalPrice();
    },
    minusCount: function(t) {
        var a = t.currentTarget.dataset.index, s = this.data.foods, o = s[a].num, r = s[a].min_purchase_num;
        if (o <= 1) return !1;
        o -= 1, r > 0 && o < r && (o = r, wx.showToast({
            title: "最小购买量:" + r
        })), (!o || o < 1) && (o = 1), s[a].num = o, this.setData({
            foods: s
        }), e.globalData.carts = s, this.getTotalPrice();
    },
    bindManual: function(t) {
        var a = t.currentTarget.dataset.index, s = this.data.foods, o = parseInt(t.detail.value), r = s[a].max_kc, i = s[a].max_purchase_num || 0, n = s[a].min_purchase_num;
        isNaN(o) && (o = n > 0 ? n : 1), n > 0 && o < n && (o = n, wx.showToast({
            title: "最小购买量:" + n
        })), i > 0 && o > i && (o = i, wx.showToast({
            title: "超出最大购买量~"
        })), o > r && (o = r, wx.showToast({
            title: "数量超出范围~"
        })), (!o || o < 1) && (o = 1), s[a].num = o, this.setData({
            foods: s
        }), e.globalData.carts = s, this.getTotalPrice();
    },
    isSelectAll: function() {
        for (var t = this.data.selectAllStatus, a = this.data.foods, e = 0; e < a.length; e++) {
            if (!a[e].selected) {
                t = !1;
                break;
            }
            t = !0;
        }
        this.setData({
            selectAllStatus: t
        });
    },
    getTotalPrice: function() {
        for (var t = this.data.foods, a = 0, e = 0, s = this.data.jsStatus, o = 0; o < t.length; o++) t[o].selected && (a += t[o].num * t[o].price, 
        e += t[o].num);
        s = a > 0, this.setData({
            totleNum: e,
            jsStatus: s,
            foods: t,
            totalPrice: a.toFixed(2)
        });
    },
    onPullDownRefresh: function() {
        this.onShow(), wx.stopPullDownRefresh();
    },
    switchTab: function(t) {
        var a = t.currentTarget.dataset.url, e = t.currentTarget.dataset.tab;
        "func" == e.type ? getApp().moduleBindTap(e) : getApp().turnToPage(a, !0);
    },
    backHome: function() {
        var t = getApp().globalData.config.tabBar || {}, a = "/pages/page1/page1";
        t.list && (a = "/pages/" + t.list[0].pagePath), getApp().redirectTo({
            url: a
        });
    },
    backTop: function() {
        wx.pageScrollTo({
            scrollTop: 0,
            duration: 300
        });
    }
});