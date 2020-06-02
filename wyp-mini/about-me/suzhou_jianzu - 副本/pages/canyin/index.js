var t = require("../../utils/server"), a = (require("../../wxParse/wxParse"), require("../../utils/add"), 
wx.getStorageSync("mid"), wx.getStorageSync("utoken"), wx.getExtConfigSync && wx.getExtConfigSync(), 
1), e = [], o = 0, d = 0, s = [];

Page({
    data: {
        bannerHeight: Math.ceil(290 / 750 * getApp().screenWidth),
        width: 2 * Math.ceil(wx.getSystemInfoSync().windowWidth),
        swiperArr: "",
        id: "",
        selectedTitle: 0,
        index: 0,
        headPhoto: "",
        showView: !1,
        phone: "",
        total: "",
        carts: [],
        goodsList: [],
        empty: !0,
        minusStatuses: [ "disabled", "disabled", "normal", "normal", "disabled" ],
        selectedAllStatus: !0,
        skillPriceList: {},
        refresh: !1,
        twoindex: 0,
        isClick: "",
        myNum: 0
    },
    clickCont: function() {
        this.setData({
            isClick: !0
        });
    },
    clickContAgain: function() {
        this.setData({
            isClick: !1
        });
    },
    onLoad: function(t) {
        var a = this;
        if (t.mid) {
            a.setData({
                mid: t.mid
            });
            wx.setStorageSync("mid", t.mid), wx.getStorageSync("mid");
        }
        a.setData({
            options: t
        }), this.loadPageData(t);
    },
    loadPageData: function(a) {
        var o = this;
        o.setData({
            news: 4
        }), t.sendRequest({
            url: "?r=wxapp.shop.takingOrder&news=4",
            method: "GET",
            success: function(t) {
                var a, d, s = [];
                wx.getSystemInfo({
                    success: function(t) {
                        a = .1 * t.windowHeight, d = .9 * t.windowHeight;
                    }
                });
                for (var l in t.data.result.category) {
                    s[l] = [];
                    for (var r in t.data.result.category[l].goods) s[l].push(t.data.result.category[l].goods[r]);
                }
                e = t.data.result.category, o.setData({
                    dataonload: {
                        test: t.data.result,
                        topHeight: a,
                        swiperHeight: d,
                        arr: s
                    },
                    data: {
                        test: t.data.result,
                        topHeight: a,
                        swiperHeight: d,
                        arr: s
                    },
                    selectedTitle: o.data.selectedTitle
                });
            }
        }), wx.getStorageSync("selectGoods") && (console.log("有缓存喔"), console.log(wx.getStorageSync("data")), 
        o.setData({
            selectGoods: wx.getStorageSync("selectGoods"),
            Allprice: wx.getStorageSync("Allprice"),
            Allnum: wx.getStorageSync("Allnum")
        }));
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    },
    bottom: function(o) {
        var d = this;
        d.data.refresh || (d.setData({
            refresh: !0
        }), a += 1, t.sendRequest({
            url: "?r=wxapp.shop.takingOrder&news=4",
            data: {
                page: a
            },
            method: "GET",
            success: function(t) {
                var a, o, s = [];
                for (var l in e) {
                    s[l] = [];
                    for (var r in e[l].goods) s[l].push(e[l].goods[r]);
                }
                for (var c in t.data.result.category) for (var n in t.data.result.category[c].goods) s[c].push(t.data.result.category[c].goods[n]), 
                e[c].goods.push(t.data.result.category[c].goods[n]);
                wx.getSystemInfo({
                    success: function(t) {
                        a = .1 * t.windowHeight, o = .9 * t.windowHeight;
                    }
                }), d.setData({
                    data: {
                        test: t.data.result,
                        topHeight: a,
                        swiperHeight: o,
                        arr: s
                    },
                    selectedTitle: d.data.selectedTitle
                }), t.data.result.category && t.data.result.category[d.data.twoindex] && "" != t.data.result.category[d.data.twoindex].goods && d.setData({
                    refresh: !1
                });
            }
        }));
    },
    reduce: function(t) {
        var a = this;
        wx.getStorageSync("selectGoods") && (console.log("有缓存喔--------------------"), console.log(wx.getStorageSync("data")), 
        a.setData({
            selectGoods: wx.getStorageSync("selectGoods"),
            Allprice: wx.getStorageSync("Allprice"),
            Allnum: wx.getStorageSync("Allnum")
        }));
        var e = t.currentTarget.dataset.index;
        if (a.data.data.arr[a.data.selectedTitle][e].mytotal >= 1) {
            a.data.data.arr[a.data.selectedTitle][e].mytotal--, o -= a.data.data.arr[a.data.selectedTitle][e].marketprice, 
            d--, a.setData({
                data: a.data.data,
                Allprice: o,
                Allnum: d
            });
            for (var l = 0; l < a.data.selectGoods.length; l++) a.data.selectGoods[l].id == a.data.data.arr[a.data.selectedTitle][e].id && (s.splice(l, 1, a.data.data.arr[a.data.selectedTitle][e]), 
            a.setData({
                selectGoods: s
            }));
            wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
            wx.setStorageSync("Allnum", a.data.Allnum);
        }
        if (a.data.data.arr[a.data.selectedTitle][e].mytotal <= 0) {
            a.data.data.arr[a.data.selectedTitle][e].mytotal = 0;
            for (var r = 0; r < a.data.selectGoods.length; r++) 0 == a.data.selectGoods[r].mytotal && (s.splice(r, 1), 
            a.setData({
                selectGoods: s
            }));
        }
        wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
        wx.setStorageSync("Allnum", a.data.Allnum);
    },
    add: function(a) {
        var e = this, l = parseInt(a.currentTarget.dataset.id), r = a.currentTarget.dataset.index;
        if (e.setData({
            nowid: l,
            nowcurrIndex: r
        }), wx.getStorageSync("selectGoods") && (console.log("有缓存喔--------------------"), 
        console.log(wx.getStorageSync("selectGoods")), e.setData({
            selectGoods: wx.getStorageSync("selectGoods"),
            Allprice: wx.getStorageSync("Allprice"),
            Allnum: wx.getStorageSync("Allnum")
        })), console.log(e.data.selectGoods), e.data.data.arr[e.data.selectedTitle][r].mytotal) if (1 == e.data.data.arr[e.data.selectedTitle][r].hasoption) e.setData({
            isSecond: !0
        }); else {
            e.data.data.arr[e.data.selectedTitle][r].mytotal++, o += parseInt(e.data.data.arr[e.data.selectedTitle][r].marketprice), 
            d++, e.setData({
                data: e.data.data,
                Allprice: o,
                Allnum: d
            });
            for (var c = 0; c < e.data.selectGoods.length; c++) e.data.selectGoods[c].id == e.data.data.arr[e.data.selectedTitle][r].id && (s.splice(c, 1, e.data.data.arr[e.data.selectedTitle][r]), 
            e.setData({
                selectGoods: s
            }));
            wx.setStorageSync("selectGoods", e.data.selectGoods), wx.setStorageSync("Allprice", e.data.Allprice), 
            wx.setStorageSync("Allnum", e.data.Allnum);
        } else {
            if (1 == e.data.data.arr[e.data.selectedTitle][r].hasoption) {
                var n = wx.getStorageSync("utoken");
                t.sendRequest({
                    url: "?r=wxapp.goods.detail&id=" + e.data.data.arr[e.data.selectedTitle][r].id + "&utoken=" + n,
                    method: "GET",
                    success: function(t) {
                        console.log(t), console.log(t.data.result.spec_goods_price), e.setData({
                            goods_spec_list: t.data.result.goods.goods_spec_list,
                            spec_goods_price: t.data.result.spec_goods_price,
                            isSecond: !0,
                            mygoodLen: t.data.result.goods.goods_spec_list.length,
                            goods_name: t.data.result.goods.goods_name
                        });
                        for (var a = [], o = 0; o < e.data.goods_spec_list.length; o++) for (var d = 0; d < e.data.goods_spec_list[o].length; d++) 1 == e.data.goods_spec_list[o][d].isClick && a.push(e.data.goods_spec_list[o][d].item_id);
                        if (1 == a.length) for (l = 0; l < e.data.spec_goods_price.length; l++) e.data.spec_goods_price[l].key == a[0] && e.setData({
                            nowPrice: e.data.spec_goods_price[l].price
                        }); else for (var s = a.reverse().join("_"), l = 0; l < e.data.spec_goods_price.length; l++) e.data.spec_goods_price[l].key == s && e.setData({
                            nowPrice: e.data.spec_goods_price[l].price
                        });
                    }
                });
            } else e.data.data.arr[e.data.selectedTitle][r].mytotal = 0, e.data.data.arr[e.data.selectedTitle][r].mytotal++, 
            o += parseInt(e.data.data.arr[e.data.selectedTitle][r].marketprice), d++, s.push(e.data.data.arr[e.data.selectedTitle][r]), 
            e.setData({
                data: e.data.data,
                Allprice: o,
                Allnum: d,
                selectGoods: s
            });
            wx.setStorageSync("selectGoods", e.data.selectGoods), wx.setStorageSync("Allprice", e.data.Allprice), 
            wx.setStorageSync("Allnum", e.data.Allnum);
        }
    },
    selectSpecif: function(t) {
        for (var a = this, e = t.currentTarget.dataset.index, o = t.currentTarget.dataset.spec_name, d = 0; d < a.data.goods_spec_list.length; d++) for (var s = 0; s < a.data.goods_spec_list[d].length; s++) a.data.goods_spec_list[d][s].spec_name == o && (a.data.goods_spec_list[d][s].isClick = e == s ? 1 : 0);
        for (var l = [], r = 0; r < a.data.goods_spec_list.length; r++) for (var c = 0; c < a.data.goods_spec_list[r].length; c++) 1 == a.data.goods_spec_list[r][c].isClick && l.push(a.data.goods_spec_list[r][c].item_id);
        if (1 == l.length) {
            console.log(a.data.spec_goods_price);
            for (i = 0; i < a.data.spec_goods_price.length; i++) a.data.spec_goods_price[i].key == l[0] && a.setData({
                nowPrice: a.data.spec_goods_price[i].price
            });
        } else for (var n = l.reverse().join("_"), i = 0; i < a.data.spec_goods_price.length; i++) a.data.spec_goods_price[i].key == n && a.setData({
            nowPrice: a.data.spec_goods_price[i].price
        });
        a.setData({
            goods_spec_list: a.data.goods_spec_list
        });
    },
    selectOk: function(t) {
        var a = this;
        if (a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].mytotal) {
            a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].mytotal++, a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].marketprice = a.data.nowPrice, 
            o += parseInt(a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].marketprice), 
            d++, a.setData({
                data: a.data.data,
                Allprice: o,
                Allnum: d
            });
            for (var e = 0; e < a.data.selectGoods.length; e++) a.data.selectGoods[e].id == a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].id && (s.splice(e, 1, a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex]), 
            a.setData({
                selectGoods: s,
                isSecond: !1
            }));
            wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
            wx.setStorageSync("Allnum", a.data.Allnum);
        } else a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].mytotal = 0, a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].mytotal++, 
        a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].marketprice = a.data.nowPrice, 
        o += parseInt(a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex].marketprice), 
        d++, s.push(a.data.data.arr[a.data.selectedTitle][a.data.nowcurrIndex]), a.setData({
            data: a.data.data,
            Allprice: o,
            Allnum: d,
            selectGoods: s,
            isSecond: !1
        });
        wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
        wx.setStorageSync("Allnum", a.data.Allnum);
    },
    closeSecond: function(t) {
        this.setData({
            isSecond: !1
        });
    },
    allAdd: function(t) {
        var a = this;
        wx.getStorageSync("selectGoods") && (console.log("有缓存喔--------------------"), console.log(wx.getStorageSync("data")), 
        a.setData({
            selectGoods: wx.getStorageSync("selectGoods"),
            Allprice: wx.getStorageSync("Allprice"),
            Allnum: wx.getStorageSync("Allnum")
        }));
        var e = t.currentTarget.dataset.index;
        a.data.selectGoods[e].mytotal++, o += parseInt(a.data.selectGoods[e].marketprice), 
        a.setData({
            selectGoods: a.data.selectGoods,
            Allprice: o
        }), a.data.data.arr[0][0] = a.data.selectGoods[e], a.setData({
            data: a.data.data
        });
        for (var d = 0; d < a.data.data.length; d++) for (var s in a.data.data.arr[d][s]) a.data.selectGoods[e].id == a.data.data.arr[d][s].id && (a.data.data.arr[d][s] = a.data.selectGoods[e], 
        a.setData({
            data: a.data.data
        }));
        wx.setStorageSync("selectGoods", a.data.selectGoods), wx.setStorageSync("Allprice", a.data.Allprice), 
        wx.setStorageSync("Allnum", a.data.Allnum);
    },
    allDelete: function(t) {
        var a = this;
        wx.getStorageSync("selectGoods") && (console.log("有缓存喔--------------------"), console.log(wx.getStorageSync("data")), 
        a.setData({
            selectGoods: wx.getStorageSync("selectGoods"),
            Allprice: wx.getStorageSync("Allprice"),
            Allnum: wx.getStorageSync("Allnum")
        })), console.log(a.data.selectGoods), console.log(a.data.Allprice), console.log("that.data.selectGoods-------------------------------");
        var e = t.currentTarget.dataset.index;
        if (a.data.selectGoods[e].mytotal--, o -= parseInt(a.data.selectGoods[e].marketprice), 
        console.log(a.data.Allprice), d--, a.data.selectGoods[e].mytotal >= 1) {
            console.log(a.data.selectGoods[e].mytotal), console.log("that.data.selectGoods[currIndex].mytotal>=1"), 
            a.setData({
                selectGoods: a.data.selectGoods,
                Allprice: o,
                Allnum: d
            });
            for (l = 0; l < a.data.data.arr.length; l++) for (r = 0; r < a.data.data.arr[l].length; r++) a.data.data.arr[l][r].id == a.data.selectGoods[e].id && (a.data.data.arr[l][r] = a.data.selectGoods[e], 
            a.setData({
                data: a.data.data
            }));
            console.log(a.data.selectGoods), wx.setStorageSync("selectGoods", a.data.selectGoods), 
            wx.setStorageSync("Allprice", a.data.Allprice), wx.setStorageSync("Allnum", a.data.Allnum), 
            console.log(wx.getStorageSync("selectGoods")), console.log("wx.getStorageSync随后----------------------");
        } else if (a.data.selectGoods[e].mytotal <= 0) {
            console.log("that.data.selectGoods[currIndex].mytotal <=0----------------------");
            for (var l = 0; l < a.data.data.arr.length; l++) for (var r = 0; r < a.data.data.arr[l].length; r++) a.data.data.arr[l][r].id == a.data.selectGoods[e].id && (a.data.data.arr[l][r].mytotal = 0, 
            a.setData({
                data: a.data.data
            }));
            a.data.selectGoods.splice(e, 1), a.setData({
                selectGoods: a.data.selectGoods,
                Allprice: o,
                Allnum: d
            }), 0 == a.data.selectGoods.length && (a.setData({
                showView: !1
            }), a.data.data = a.data.dataonload, a.setData({
                selectGoods: [],
                showView: !1,
                Allnum: 0,
                Allprice: 0,
                data: a.data.data
            }), d = 0, o = 0, s = [], wx.removeStorageSync("selectGoods"), wx.removeStorageSync("Allprice"), 
            wx.removeStorageSync("Allnum")), wx.setStorageSync("selectGoods", a.data.selectGoods), 
            wx.setStorageSync("Allprice", a.data.Allprice), wx.setStorageSync("Allnum", a.data.Allnum), 
            wx.setStorageSync("data", a.data.data), console.log(wx.getStorageSync("selectGoods"));
        }
    },
    show: function(t) {
        var e = this, o = (parseInt(t.currentTarget.dataset.index), t.currentTarget.id);
        this.data.data.selectedTitle = o, this.setData({
            selectedTitle: o,
            twoindex: o
        }), e.setData({
            refresh: !1
        }), a = 1;
    },
    click_phone: function() {
        var t = this;
        wx.makePhoneCall({
            phoneNumber: t.data.data.test.shopinfo.phone
        });
    },
    topShow: function() {
        this.setData({
            showView: !1
        });
    },
    bindCheckout: function() {
        for (var a = this, e = 0; e < a.data.selectGoods.length; e++) for (var l in a.data.selectGoods[e]) "id" != l && "merchid" != l && "mytotal" != l && "marketprice" != l && delete a.data.selectGoods[e][l];
        var r = wx.getStorageSync("utoken");
        t.sendRequest({
            url: "?r=wxapp.member.cart.updateCart",
            data: {
                utoken: r,
                goodslist: a.data.selectGoods
            },
            method: "POST",
            success: function(t) {
                a.data.data = a.data.dataonload, a.setData({
                    selectGoods: [],
                    showView: !1,
                    Allnum: 0,
                    Allprice: 0,
                    data: a.data.data
                }), d = 0, o = 0, s = [], wx.removeStorageSync("selectGoods"), wx.removeStorageSync("Allprice"), 
                wx.removeStorageSync("Allnum"), wx.navigateTo({
                    url: "../../../../order/checkout/checkout"
                });
            }
        });
    },
    deleteCart: function() {
        var t = this;
        t.data.data = t.data.dataonload, t.setData({
            selectGoods: [],
            showView: !1,
            Allnum: 0,
            Allprice: 0,
            data: t.data.data
        }), d = 0, o = 0, s = [], wx.removeStorageSync("selectGoods"), wx.removeStorageSync("Allprice"), 
        wx.removeStorageSync("Allnum"), console.log(wx.getStorageInfoSync("selectGoods")), 
        console.log(wx.getStorageInfoSync("Allprice")), console.log("wx.getStorageInfoSync");
    },
    getCarts: function() {
        this.data.Allnum ? this.setData({
            showView: !0
        }) : wx.showToast({
            title: "请勾选商品",
            icon: "success",
            duration: 1e3
        });
    }
});