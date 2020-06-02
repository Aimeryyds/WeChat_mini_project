function t(t, o, e) {
    return o in t ? Object.defineProperty(t, o, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[o] = e, t;
}

function o(t) {
    return t < 10 ? "0" + t : t;
}

var e, s, a, i, r = require("../../../utils/server"), d = require("../../../wxParse/wxParse.js"), n = (getApp(), 
wx.getStorageSync("utoken")), c = [], l = [], g = [], u = [], p = 1, _ = [], h = "all", m = [], f = [];

Page((e = {
    data: {
        loading: !0,
        goods: {},
        current: 0,
        tabStates: [ !0, !1, !1 ],
        tabClasss: [ "text-select", "text-normal", "text-normal" ],
        galleryHeight: getApp().screenWidth,
        tab: 0,
        goods_num: 1,
        optionid: 0,
        textStates: [ "view-btns-text-normal", "view-btns-text-select" ],
        favorite: "",
        cost_price: "",
        store_count: "",
        select: "all",
        currIndex: 1,
        isclick: "",
        cashD: "",
        qualityD: "",
        sevenD: "",
        invoiceD: "",
        repairD: "",
        cash: "货到付款",
        quality: "正品保证",
        seven: "七天无理由退货",
        invoice: "发票",
        repair: "保修",
        buy: "",
        index: 0,
        height: 2 * Math.ceil(wx.getSystemInfoSync().screenHeight),
        refresh: !1,
        total: "",
        customerserver: "",
        price: ""
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    onLoad: function(t) {
        var o = this;
        if (n = wx.getStorageSync("utoken"), wx.getStorageSync("customerserver") && o.setData({
            customerserver: wx.getStorageSync("customerserver")
        }), i = t.objectId, t.myshop && o.setData({
            myshop: t.myshop
        }), void 0 !== t.scene) {
            for (var e = {}, s = decodeURIComponent(t.scene).split("&"), a = 0; a < s.length; a++) {
                var r = s[a].split("=");
                e[r[0]] = r[1];
            }
            if (i = e.goodsid, void 0 !== e.mid) {
                o.setData({
                    mid: e.mid,
                    goodsId: i
                });
                wx.setStorageSync("mid", e.mid), wx.getStorageSync("mid");
            }
        }
        o.setData({
            goodsId: i
        }), o.getGoodsById(i), o.getEvaluation(i), g = [];
    },
    onShow: function() {
        var t = this;
        n = wx.getStorageSync("utoken"), u = [], m = [], c = [], l = [], g = [], p = 1, 
        _ = [], h = "all", f = [], t.getTotal();
    },
    onReachBottom: function() {
        2 == this.data.tab && this.bottom();
    },
    getTotal: function() {
        var t = this;
        n = wx.getStorageSync("utoken"), r.sendRequest({
            url: "?r=wxapp.member.cart.getCartNum",
            showToast: !1,
            data: {
                utoken: n
            },
            method: "GET",
            success: function(o) {
                o.data.result && t.setData({
                    total: o.data.result
                });
            }
        });
    },
    bottom: function() {
        var o = this;
        o.data.refresh || (o.setData({
            refresh: !0
        }), p += 1, console.log(o.data.goodsId), r.sendRequest({
            url: "?r=wxapp.goods.detail.get_comment_list",
            showToast: !1,
            data: t({
                id: o.data.goodsId,
                page: 1,
                level: h,
                showImage: !1
            }, "page", p),
            method: "GET",
            success: function(t) {
                var e = [];
                for (var s in o.data.list) e.push(o.data.list[s]);
                if ("" != t.data.result.list) {
                    for (var a in t.data.result.list) e.push(t.data.result.list[a]);
                    o.setData({
                        refresh: !1
                    });
                } else p -= 1;
                for (var i = 0; i < e.length; i++) d.wxParse("reply" + i, "html", e[i].content, o), 
                i === e.length - 1 && d.wxParseTemArray("replyTemArray", "reply", e.length, o);
                o.setData({
                    list: e
                }), console.log(o.data.list);
            }
        }));
    },
    joinskillList: function() {
        wx.redirectTo({
            url: "../priceKill/priceKill"
        });
    },
    nav1: function() {
        var t = wx.getExtConfigSync ? wx.getExtConfigSync() : {}, o = t.tabBarPage;
        t.tabBarPage ? -1 != o.indexOf("/pages/cart/cart") ? (console.log(111), wx.reLaunch({
            url: "../../cart/cart"
        })) : (console.log(222), wx.navigateTo({
            url: "../../cart/cart"
        })) : (console.log(333), wx.navigateTo({
            url: "../../cart/cart"
        }));
    },
    select: function(t) {
        var o = this;
        h = t.currentTarget.dataset.index, o.setData({
            refresh: !1
        }), p = 1, o.getEvaluationData(o.data.goodsId, t.currentTarget.dataset.index), o.setData({
            select: t.currentTarget.dataset.index
        });
    },
    propClick: function(t) {
        var o = this, e = t.currentTarget.dataset.pos, s = t.currentTarget.dataset.index;
        a == s && o.setData({
            index: e
        }), g[s], g[s] = t.currentTarget.dataset.name, o.setData({
            name_arr: g
        });
        var i = this.data.goods;
        i.spec_goods_price && "null" != i.spec_goods_price[e].price ? this.setData({
            cost_price: i.spec_goods_price[e].price,
            store_count: i.spec_goods_price[e].store_count
        }) : this.setData({
            cost_price: i.goods.cost_price,
            store_count: i.goods.store_count
        });
        for (var r = 0; r < i.goods.goods_spec_list[s].length; r++) r == e ? (i.goods.goods_spec_list[s][e].isClick = 1, 
        c[s] = t.currentTarget.id) : i.goods.goods_spec_list[s][r].isClick = 0, c[s] = i.goods.goods_spec_list[s][0].item_id;
        for (var d = void 0, n = new Array(), l = 0; l < i.goods.goods_spec_list.length; l++) for (var u = 0; u < i.goods.goods_spec_list[l].length; u++) if (1 == i.goods.goods_spec_list[l][u].isClick) {
            var p = 0;
            p = i.goods.goods_spec_list[l].length + "_" + i.goods.goods_spec_list[l][u].item_id, 
            n.push(p), d = i.goods.goods_spec_list[l][u].item_id;
        }
        var _ = [];
        for (var h in o.data.goods.goods.goods_spec_list) {
            var v = [];
            v.push(o.data.goods.goods.goods_spec_list[h].length), v.push(h), m.length < o.data.goods.goods.goods_spec_list.length && m.push(v);
        }
        m.sort(function(t, o) {
            return t[0] - o[0];
        });
        for (var w in m) s == m[w][1] && (m[w][2] = t.currentTarget.id);
        for (var x in m) f[x] = m[x][2];
        _ = f.join("_"), this.setData({
            goods: i
        }), this.checkPrice();
        for (var D in o.data.goods.spec_goods_price) o.data.goods.spec_goods_price[D].key == _ && o.setData({
            cost_price: o.data.goods.spec_goods_price[D].price,
            store_count: o.data.goods.spec_goods_price[D].store_count,
            market_price: o.data.goods.spec_goods_price[D].productprice
        });
        if (n.length != i.goods.goods_spec_list.length) {
            var k = void 0, T = void 0, y = void 0;
            for (var I in o.data.goods.spec_goods_price) if (k = o.data.goods.spec_goods_price[I].price, 
            T = o.data.goods.spec_goods_price[I].store_count, y = o.data.goods.spec_goods_price[I].productprice, 
            o.data.goods.spec_goods_price[I].key.indexOf(d) > -1) break;
            o.setData({
                cost_price: k,
                store_count: T,
                market_price: y
            });
        }
    },
    joinshop: function() {
        var t = this;
        t.data.isclick && wx.navigateTo({
            url: "../shop/shop?id=" + t.data.shopId
        });
    },
    addCollect: function(t) {
        var o = t.currentTarget.dataset.id, e = this;
        1 == e.data.favorite ? e.data.favorite = 0 : e.data.favorite = 1, r.sendRequest({
            url: "?r=wxapp.member.favorite.toggle",
            data: {
                utoken: n,
                id: o,
                isfavorite: e.data.favorite
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    favorite: t.data.result.isfavorite
                }), wx.showToast({
                    title: t.data.msg,
                    icon: "success",
                    duration: 2e3
                });
            }
        });
    },
    bindMinus: function(t) {
        var o = this.data.goods_num;
        o > 1 && o--, this.setData({
            goods_num: o
        });
    },
    bindManual: function(t) {
        parseInt(t.currentTarget.dataset.index);
        var o = t.detail.value;
        this.setData({
            goods_num: o
        });
    },
    bindPlus: function(t) {
        var o = this.data.goods_num;
        o++, this.setData({
            goods_num: o
        });
    },
    getEvaluationData: function(t, o) {
        var e = this;
        r.sendRequest({
            url: "?r=wxapp.goods.detail.get_comment_list",
            showToast: !1,
            data: {
                id: t,
                page: 1,
                level: o,
                showImage: !1
            },
            method: "GET",
            success: function(t) {
                e.setData({
                    list: t.data.result.list
                });
                for (var o in e.data.list) c.push(e.data.list[o].content);
                for (var s = 0; s < c.length; s++) d.wxParse("reply" + s, "html", c[s], e), s === c.length - 1 && d.wxParseTemArray("replyTemArray", "reply", c.length, e);
            }
        });
    },
    getEvaluation: function(t) {
        var o = this;
        r.sendRequest({
            url: "?r=wxapp.goods.detail.get_comments&id=" + t,
            showToast: !1,
            method: "GET",
            success: function(t) {
                o.setData({
                    Evaluation: t.data.result
                });
                var e = t.data.result.count;
                "0" == e.all && "0" == e.bad && "0" == e.good && "0" == e.normal && "0" == e.pic || o.getEvaluationData(i, "all");
            }
        });
    },
    register: function(t) {
        r.sendRequest({
            method: "POST",
            url: "?r=wxapp.commission.register&utoken=" + n + "&mid=" + t,
            data: {},
            success: function(t) {}
        });
    },
    tabClick: function(t) {
        var o = t.currentTarget.dataset.index, e = [ "text-normal", "text-normal", "text-normal" ];
        e[o] = "text-select", this.setData({
            tabClasss: e,
            tab: o
        });
    },
    count_down: function(t) {
        if (t.setData({
            clock: t.date_format(t.data.total_micro_second)
        }), t.data.total_micro_second <= 0) return t.data.clock.clock_hasTime = "", t.data.clock = t.data.clock.clock_hasTime, 
        void t.setData({
            clock: t.data.clock,
            isSkill: !1
        });
        s = setTimeout(function() {
            t.data.total_micro_second -= 1e3, t.count_down(t);
        }, 1e3);
    },
    date_format: function(t) {
        var e = Math.floor(t / 1e3), s = o(Math.floor(e / 3600)), a = o(Math.floor((e - 3600 * s) / 60)), i = o(e - 3600 * s - 60 * a);
        return {
            clock_hour: s,
            clock_min: a,
            clock_sec: i,
            micro_sec: o(Math.floor(t % 1e3 / 10)),
            clock_all: s + ":" + a + ":" + i,
            clock_end: "已结束",
            clock_hasTime: !0
        };
    },
    getGoodsById: function(t) {
        var o, e, s = this, i = wx.getStorageSync("utoken");
        r.sendRequest({
            url: "?r=wxapp.goods.detail&id=" + t + "&utoken=" + i,
            showToast: !1,
            method: "GET",
            success: function(t) {
                if (s.setData({
                    loading: !1,
                    goods_attr_list: t.data.result.goods_attr_list,
                    name_shop: t.data.result.shop.merchname,
                    description_shop: t.data.result.shop.desc,
                    skillGoods: t.data.result.goods,
                    showtotal: t.data.result.goods.showtotal
                }), t.data.result.shop.logo && s.setData({
                    logo_shop: t.data.result.shop.logo
                }), null != t.data.result.spec_goods_price ? (s.data.skillGoods.cost_price = t.data.result.spec_goods_price[0].price, 
                s.setData({
                    skillGoods: s.data.skillGoods
                })) : s.setData({
                    skillGoods: s.data.skillGoods
                }), 1 == s.data.skillGoods.seckill) {
                    var i = 1e3 * s.data.skillGoods.seckill_endtime, r = 1e3 * s.data.skillGoods.seckill_nowtime, n = 1e3 * s.data.skillGoods.seckill_starttime, c = i - r;
                    n <= r && i >= r ? (s.setData({
                        isSkill: !0,
                        total_micro_second: c
                    }), s.count_down(s)) : i < r ? s.setData({
                        isSkill: !1
                    }) : n > r && s.setData({
                        isSkill: !1
                    });
                } else s.setData({
                    isSkill: !1
                });
                if (t.data.result.shop.id ? s.setData({
                    isclick: !0,
                    shopId: t.data.result.shop.id
                }) : s.setData({
                    isclick: !1
                }), 1 == t.data.result.goods.cash && s.setData({
                    cashD: s.data.cash
                }), 1 == t.data.result.goods.quality && s.setData({
                    qualityD: s.data.quality
                }), 1 == t.data.result.goods.seven && s.setData({
                    sevenD: s.data.seven
                }), 1 == t.data.result.goods.invoice && s.setData({
                    invoiceD: s.data.invoice
                }), 1 == t.data.result.goods.repair && s.setData({
                    repairD: s.data.repair
                }), t.data.result.goods.keywords1 && s.setData({
                    keywords: t.data.result.goods.keywords1
                }), "" != t.data.result.goods.goods_content && (o = t.data.result.goods.goods_content, 
                d.wxParse("contain", "html", o, s, 5)), (e = t.data.result).goods.cost_price) s.setData({
                    cost_price: e.goods.cost_price
                }); else {
                    var l = e.spec_goods_price[0].price;
                    s.setData({
                        cost_price: l,
                        market_price: e.spec_goods_price[0].productprice
                    }), console.log(s.data.market_price);
                }
                new Array();
                var g = new Array();
                if (e.goods.goods_spec_list && e.goods.goods_spec_list.length) {
                    for (var p = 0; p < e.goods.goods_spec_list.length; p++) {
                        for (var _ = 0; _ < e.goods.goods_spec_list[p].length; _++) if (1 == e.goods.goods_spec_list[p][_].isClick) {
                            var h = {}, m = 0;
                            m = e.goods.goods_spec_list[p].length + "_" + e.goods.goods_spec_list[p][_].item_id, 
                            g.push(m);
                        }
                        if (e.goods.goods_spec_list[p][0] && e.goods.goods_spec_list[p][0].src) {
                            a = p;
                            for (var f in e.goods.goods_spec_list[p]) u.push(e.goods.goods_spec_list[p][f].src);
                        }
                    }
                    s.setData({
                        img_arr: u
                    });
                    var v = [];
                    for (var w in g) {
                        w = g[w].split("_");
                        v.push(w);
                    }
                    v.sort();
                    h = [];
                    for (var w in v) h.push(v[w][1]);
                    h = h.join("_");
                }
                if (e.spec_goods_price) for (var w in e.spec_goods_price) e.spec_goods_price[w].key == h && s.setData({
                    store_count: e.spec_goods_price[w].store_count
                });
                if ("0" == t.data.result.isfavorite) x = 0; else var x = 1;
                s.setData({
                    goods: e,
                    favorite: x,
                    store_count: e.goods.store_count
                }), s.checkPrice();
            }
        });
    },
    checkPrice: function() {
        var t = this, o = this.data.goods, e = "";
        if (o.goods && o.goods.goods_spec_list) {
            o.goods.shop_price && this.setData({
                price: o.goods.shop_price
            });
            for (d = 0; d < o.goods.goods_spec_list.length; d++) for (var s = 0; s < o.goods.goods_spec_list[d].length; s++) 1 == o.goods.goods_spec_list[d][s].isClick && (e = "" == e ? o.goods.goods_spec_list[d][s].item_id : e + "_" + o.goods.goods_spec_list[d][s].item_id);
            if (e.split("_").length == o.goods.goods_spec_list.length) {
                for (var a = e.split("_").sort().join("_"), i = o.spec_goods_price, r = 0, d = 0; d < i.length; d++) {
                    var n = i[d].key.split("_").sort().join("_");
                    if (a.indexOf(n) >= "0") {
                        t.setData({
                            optionid: i[d].id
                        }), r = i[d].price;
                        break;
                    }
                }
                this.setData({
                    price: r
                });
            }
        }
    },
    bug: function() {
        var t = this.data.store_count, o = this.data.goods_num;
        if (t <= 0 || o > t) return wx.showModal({
            title: "提示",
            content: "该商品库存不足，无法完成下单！",
            showCancel: !1,
            success: function() {
                return !1;
            }
        }), !1;
        var e = this, s = e.data.goods;
        n = wx.getStorageSync("utoken");
        var a = e.data.optionid, i = e.data.goods.goods.goods_id, d = e.data.goods_num;
        if ("" == n) wx.openSetting({
            success: function(t) {
                console.log(t), t.authSetting["scope.userInfo"] && wx.login({
                    success: function(t) {
                        var o = t.code;
                        console.log(o), wx.getUserInfo({
                            success: function(t) {
                                r.sendRequest({
                                    url: "?r=wxapp.logs.slogin",
                                    data: {
                                        code: o,
                                        encryptedData: t.encryptedData,
                                        iv: t.iv
                                    },
                                    method: "POST",
                                    success: function(o) {
                                        var s = wx.getStorageSync("mid");
                                        if (o.data) return 1 == o.data.status ? (n = o.data.result.utoken, wx.setStorageSync("utoken", n), 
                                        r.globalData.login = !0, r.globalData.userInfo = t.userInfo, t.userInfo.avatar = t.userInfo.avatarUrl, 
                                        t.userInfo.nickname = t.userInfo.nickName, s && e.sendRequest({
                                            method: "POST",
                                            url: "?r=wxapp.commission.register&utoken=" + n + "&mid=" + s,
                                            data: {},
                                            success: function(t) {}
                                        }), void ("function" == typeof cb && cb(n))) : -1 == o.data.status ? void 0 : void o.data.status;
                                    }
                                });
                            }
                        });
                    }
                });
            }
        }); else {
            if (null != s.goods.goods_spec_list) for (var c in e.data.goods.goods.goods_spec_list) if (!e.data.name_arr[c]) return void wx.showModal({
                showCancel: !1,
                content: "请选择规格",
                success: function(t) {
                    t.confirm && console.log("用户点击确定");
                }
            });
            e.data.mid ? wx.navigateTo({
                url: "../../order/checkout/checkout?cartIds=" + e.data.goodsId + "&mid=" + e.data.mid
            }) : wx.navigateTo({
                url: "../../order/ordersubmit/index?id=" + i + "&optionid=" + a + "&total=" + d
            });
        }
    },
    addCart: function(t) {
        var o = this, e = t.detail.formId;
        if (null != o.data.goods.goods.goods_spec_list) for (var s in o.data.goods.goods.goods_spec_list) if (!o.data.name_arr[s]) return void wx.showModal({
            showCancel: !1,
            content: "请选择规格",
            success: function(t) {
                t.confirm && console.log("用户点击确定");
            }
        });
        r.sendRequest({
            url: "?r=wxapp.formid.getFormidList",
            data: {
                utoken: n,
                formId: e
            },
            method: "GET",
            success: function(t) {}
        }), this.addbuyCart({
            success: function(t) {
                1 == t.data.status ? (o.none(), o.getTotal(), wx.showToast({
                    title: "已加入购物车",
                    icon: "success",
                    duration: 2e3
                })) : wx.showToast({
                    title: t.data.msg,
                    icon: "error",
                    duration: 1e3
                });
            }
        });
    },
    addCart1: function(t) {
        var o = this;
        if (t.detail.formId) {
            var e = t.detail.formId;
            r.sendRequest({
                url: "?r=wxapp.formid.getFormidList",
                data: {
                    utoken: n,
                    formId: e
                },
                method: "GET",
                success: function(t) {
                    1 == t.data.status ? (wx.showToast({
                        title: "已加入购物车",
                        icon: "success",
                        duration: 2e3
                    }), o.none(), o.getTotal()) : wx.showToast({
                        title: t.data.msg,
                        icon: "error",
                        duration: 1e3
                    });
                }
            });
        }
        this.addbuyCart({
            success: function(t) {
                1 == t.data.status ? (wx.showToast({
                    title: "已加入购物车",
                    icon: "success",
                    duration: 1e3
                }), o.none(), o.getTotal()) : wx.showToast({
                    title: t.data.msg,
                    icon: "error",
                    duration: 1e3
                });
            }
        });
    },
    addbuyCart: function(t) {
        var o = this, e = o.data.goods, s = o.data.optionid, a = o.data.goods.goods.goods_id, i = o.data.goods_num;
        null == e.goods.goods_spec_list || 0 != s ? r.sendRequest({
            url: "?r=wxapp.member.cart.add",
            data: {
                utoken: n,
                id: a,
                optionid: s,
                total: i,
                diyformdata: !1
            },
            method: "GET",
            success: function(o) {
                "function" == typeof t.success && t.success(o);
            }
        }) : o.move();
    },
    showCartToast: function() {
        wx.showToast({
            title: "已加入购物车",
            icon: "success",
            duration: 1e3
        }), wx.reLaunch({
            url: "../../cart/cart"
        });
    },
    previewImage: function(t) {
        wx.previewImage({
            current: this.data.goods.get("images")[parseInt(t.currentTarget.dataset.current)],
            urls: this.data.goods.get("images")
        });
    },
    onShareAppMessage: function() {
        var t = this;
        if (t.data.mid) o = "/pages/goods/detail/detail?objectId=" + t.data.goodsId + "&mid=" + t.data.mid; else var o = "/pages/goods/detail/detail?objectId=" + t.data.goodsId;
        return {
            title: t.data.goods.goods.goods_name,
            path: o,
            imageUrl: t.data.goods.gallery[0].image_url
        };
    },
    currChange: function(t) {
        this.setData({
            currImage: t.detail.current,
            currIndex: t.detail.current + 1
        });
    },
    getImgIndex: function(t) {
        var o = this, e = t.currentTarget.dataset.index;
        o.setData({
            imgUrlIndex: e,
            currIndex: e + 1
        });
    },
    joinImage: function(t) {
        var o = this;
        o.setData({
            imgUrls: t.currentTarget.dataset.img,
            imgLength: t.currentTarget.dataset.img.length
        }), o.data.showImage || o.setData({
            showImage: !0
        });
    },
    move: function() {
        this.setData({
            buy: 1
        });
        var t = wx.createAnimation({
            timingFunction: "ease-in"
        }).translate(0, -600).step({
            duration: 500
        }), o = wx.createAnimation({
            duration: 500
        }).opacity(1).step();
        this.setData({
            animationData: t.export(),
            anima2: o.export()
        }), this.setData({
            pf: !0
        });
    },
    none: function() {
        var t = wx.createAnimation({
            timingFunction: "ease-in"
        }).translate(0, 600).step({
            duration: 300
        }), o = wx.createAnimation({
            duration: 100
        }).opacity(0).step();
        this.setData({
            animationData: t.export(),
            anima2: o.export(),
            pf: !1
        }), this.setData({
            buy: ""
        });
    },
    showImages: function() {
        this.setData({
            showImage: !1
        });
    },
    onUnload: function() {
        clearTimeout(s);
    },
    onHide: function() {
        clearTimeout(s);
    },
    openShare: function(t) {
        this.setData({
            isShare: !0,
            isbottom: !0,
            showPoster: !1
        });
    },
    closeShare: function() {
        this.setData({
            isShare: !1,
            showPoster: !1
        });
    },
    closeTop: function() {
        this.setData({
            isShare: !1
        });
    },
    poster: function() {
        var t = {}, o = this;
        o.setData({
            isbottom: !1,
            showPoster: !0
        }), t = o.data.myshop ? {
            utoken: n,
            goodsid: o.data.goodsId,
            comefrom: "commission"
        } : {
            utoken: n,
            goodsid: o.data.goodsId
        }, r.sendRequest({
            url: "?r=poster",
            data: t,
            method: "GET",
            success: function(t) {
                t.data.result && (o.setData({
                    posterImg: t.data.result.url
                }), setTimeout(function() {
                    o.setData({
                        showPosterImg: !0
                    });
                }, 1e3));
            }
        });
    },
    wiatSecond: function() {},
    saveImg: function() {
        var t = this;
        wx.downloadFile({
            url: t.data.posterImg,
            success: function(o) {
                console.log(o), wx.saveImageToPhotosAlbum({
                    filePath: o.tempFilePath,
                    success: function(o) {
                        console.log(o), t.setData({
                            showPosterImg: !0
                        }), wx.showModal({
                            title: "提示",
                            content: "图片保存成功",
                            confirmColor: "#FF6A6A",
                            showCancel: !1,
                            success: function(o) {
                                o.confirm && t.setData({
                                    isShare: !1
                                });
                            }
                        });
                    }
                });
            }
        });
    }
}, t(e, "previewImage", function() {
    var t = this;
    wx.previewImage({
        urls: [ t.data.posterImg ]
    });
}), t(e, "noMove", function() {
    return !1;
}), t(e, "closeShare", function(t) {
    this.setData({
        isShare: !1
    });
}), e));