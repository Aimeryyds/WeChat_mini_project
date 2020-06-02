function t(a) {
    var s = null;
    a <= 0 ? clearTimeout(i) : (s = n.countdown(a), i = setTimeout(function() {
        t(a - 100, r);
    }, 100)), r.setData({
        clock: s
    });
}

function a(t, a) {
    return t.sort().toString() == a.sort().toString();
}

var r, i, s = function() {
    function t(t, a) {
        var r = [], i = !0, s = !1, e = void 0;
        try {
            for (var o, n = t[Symbol.iterator](); !(i = (o = n.next()).done) && (r.push(o.value), 
            !a || r.length !== a); i = !0) ;
        } catch (t) {
            s = !0, e = t;
        } finally {
            try {
                !i && n.return && n.return();
            } finally {
                if (s) throw e;
            }
        }
        return r;
    }
    return function(a, r) {
        if (Array.isArray(a)) return a;
        if (Symbol.iterator in Object(a)) return t(a, r);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}(), e = getApp(), o = require("../../../utils/functions"), n = require("../../../utils/util");

Page({
    data: {
        shop: null,
        storeBargain: null,
        storeBargainOrder: null,
        order_status: 0,
        surplus: null,
        alreadyCut: null,
        show_choose: !1,
        attrPic: null,
        attrPrice: 0,
        attrStock: 0,
        input_number: 1,
        attr_group: null,
        select_attr_arr: [],
        empty_bargain_show: 0,
        over_bargain_show: 0,
        down_bargain_show: 0,
        goods: null,
        cutPrice: null,
        self_bargain_show: 0,
        end_bargain_show: 0,
        firstCutFlag: 0,
        isMyCutFirst: 0,
        clock: null,
        progress: "100%",
        cutslist: [],
        shopList: [],
        is_show_purchase: 1,
        page: 1,
        cur_price_main: "0",
        cur_price_dot: "00"
    },
    onLoad: function(t) {
        r = this, n.loading(), e.getShopInfo(function(t) {
            r.setData({
                shop: t
            }), wx.setNavigationBarTitle({
                title: t.name
            });
        }), t.id && (this.data.bargain_id = t.id, this.data.order_id = t.order_id, this.getGroupGoodsList());
    },
    onShow: function() {
        var t = this;
        e.getUserInfo(function(a) {
            t.refresh(t.data.bargain_id, t.data.order_id);
        });
    },
    onHide: function() {
        clearTimeout(i);
    },
    onUnload: function() {
        clearTimeout(i);
    },
    refresh: function(t, a) {
        this.getBargainGoodsInfo(t, a);
    },
    getBargainGoodsInfo: function(a, r) {
        var s = this;
        o.getBargainGoodsInfo(a, function(e) {
            2 != e.storeBargain.status ? 3 != e.storeBargain.status ? 4 != e.storeBargain.status ? (s.attrPic = e.storeBargain.thumb, 
            null != e.storeBargain.attrs && (s.data.attr_group = JSON.parse(e.storeBargain.attrs), 
            null != s.data.attr_group && s.data.attr_group.length > 0 && 0 == s.data.select_attr_arr.length && s.data.attr_group.forEach(function() {
                s.data.select_attr_arr.push(0);
            })), e.timerOver > 0 ? (clearTimeout(i), t(e.timerOver)) : s.setData({
                end_bargain_show: 1
            }), s.setData({
                storeBargain: e.storeBargain,
                goods: e.storeBargain,
                attr_group: s.data.attr_group,
                select_attr_arr: s.data.select_attr_arr,
                show_stock: e.storeBargain.stock
            }), s.calAttrPrice(), s.getBargainOrderInfo(a, r)) : s.setData({
                down_bargain_show: 1
            }) : s.setData({
                end_bargain_show: 1
            }) : s.setData({
                empty_bargain_show: 1
            });
        });
    },
    getBargainOrderInfo: function(t, a) {
        var r = this;
        o.getBargainOrderInfo(t, a || 0, function(a) {
            wx.hideLoading(), wx.stopPullDownRefresh(), a.storeBargainOrder && a.storeBargainOrder.attrs && (a.storeBargainOrder.attrList = JSON.parse(a.storeBargainOrder.attrs).join(" · "), 
            r.data.order_id = a.storeBargainOrder.id), r.setData({
                storeBargainOrder: a.storeBargainOrder,
                surplus: a.surplus,
                alreadyCut: a.alreadyCut,
                firstCutFlag: a.firstCutFlag,
                isMyCutFirst: a.isMyCutFirst
            });
            var i = (r.data.storeBargain.purchasePrice - a.alreadyCut).toFixed(2).split("."), e = s(i, 2), o = e[0], n = e[1];
            r.setData({
                cur_price_main: o,
                cur_price_dot: n
            }), 0 != a.firstCutFlag ? (1 == a.isMyCutFirst ? r.setData({
                order_status: 1
            }) : r.setData({
                order_status: -1
            }), a.storeBargainOrder && (a.isMyCutFirst || r.setData({
                is_show_purchase: 0
            }), a.storeBargainOrder.attrs && r.setData({
                show_stock: a.storeBargainOrder.stock
            }), null != a.storeBargainOrder.ordersId && r.setData({
                over_bargain_show: 1
            }), r.data.order_id = a.storeBargainOrder.id, r.getHelpList(t, r.data.order_id)), 
            r.setData({
                progress: a.surplus / (a.alreadyCut + a.surplus) * 100 + "%"
            }), 0 == a.surplus && (a.isMyCutFirst ? r.setData({
                order_status: 4
            }) : r.setData({
                order_status: 5
            }))) : r.setData({
                order_status: 0
            });
        });
    },
    getHelpList: function(t, a) {
        var r = this;
        o.getBargainHelpList({
            bargainId: this.data.bargain_id,
            bargainOrderId: a
        }, function(t) {
            console.log(t), r.setData({
                cutslist: t.cutslist
            }), -1 == r.data.order_status && r.setData({
                order_status: t.isHelpCut ? 3 : 2
            });
        });
    },
    helpBargain: function() {
        var t = this;
        n.loading(), o.saveBargain({
            bargainId: this.data.bargain_id,
            bargainOrderId: this.data.order_id
        }, function(a) {
            wx.hideLoading(), t.setData({
                help_bargain_show: 1,
                cutPrice: a.storeBargainCuts.cutPrice
            }), t.refresh(t.data.bargain_id, t.data.order_id);
        });
    },
    createBargain: function(t, a) {
        var r = this;
        n.loading(), o.createBargain({
            bargainId: t,
            attrs: a,
            pic: this.data.attrPic
        }, function(t) {
            console.log(t), r.setData({
                cutPrice: t.cutPrice,
                self_bargain_show: 1
            }), wx.hideLoading(), r.data.order_id = t.bargainOrderId, r.refresh(r.data.bargain_id, r.data.order_id);
        });
    },
    closeBox: function() {
        this.setData({
            self_bargain_show: 0,
            help_bargain_show: 0
        });
    },
    showChoose: function(t) {
        this.setData({
            show_choose: !0
        }), t && this.setData({
            buy_type: t.currentTarget.dataset.type
        });
    },
    closeChoose: function() {
        this.setData({
            show_choose: !1
        });
    },
    redirctToList: function() {
        wx.redirectTo({
            url: "../bargain-list/bargain-list"
        });
    },
    bindAttrChange: function(t) {
        var a = t.currentTarget.id, r = parseInt(a.split(",")[0]), i = parseInt(a.split(",")[1]);
        this.data.select_attr_arr[r] = i, this.setData({
            select_attr_arr: this.data.select_attr_arr
        }), this.calAttrPrice();
    },
    calAttrPrice: function() {
        var t = this.data.attr_group, r = this.data.select_attr_arr;
        if (null != t && 0 != t.length) {
            var i = t[0].attr_objs[r[0]].pic;
            void 0 != i && null != i && "" != i || (i = this.data.goods.thumb), this.setData({
                attrPic: i
            }), this.data.attrs = [];
            for (var s = 0; s < r.length; s++) this.data.attrs.push(t[s].attr_objs[r[s]].name);
            var e = this.data.attrs.slice(), o = this.data.goods.skuList;
            if (null != o && o.length > 0) {
                var n = o.findIndex(function(t) {
                    return a(JSON.parse(t.attrs), e);
                });
                if (n >= 0) {
                    var d = o[n];
                    console.log(d), this.setData({
                        attrPrice: d.price,
                        attrStock: d.stock
                    });
                }
            }
        } else this.setData({
            attrStock: this.data.goods.stock,
            attrPic: this.data.goods.thumb,
            attrPrice: this.data.goods.price
        });
    },
    bindPlus: function(t) {
        this.data.input_number != this.data.attrStock && (this.data.input_number++, this.setData({
            input_number: this.data.input_number
        }));
    },
    bindMinus: function(t) {
        1 != this.data.input_number && (this.data.input_number--, this.setData({
            input_number: this.data.input_number
        }));
    },
    bindKeyInput: function(t) {
        var a = parseFloat(t.detail.value);
        a <= 0 ? a = 1 : a > this.data.attrStock && (a = this.data.attrStock), this.setData({
            input_number: a
        });
    },
    buy: function() {
        0 == this.data.firstCutFlag ? (this.showChoose(), this.setData({
            buy_type: 2
        })) : this.goToSettle(1);
    },
    confirm: function() {
        this.data.input_number > this.data.attrStock ? n.toast("库存不足") : (this.closeChoose(), 
        1 == this.data.buy_type ? (console.log(this.data.attrs), this.createBargain(this.data.storeBargain.id, JSON.stringify(this.data.attrs)), 
        console.log("砍价")) : 2 == this.data.buy_type && this.goToSettle(0));
    },
    goToSettle: function(t) {
        if (this.data.attrStock <= 0) n.toast("库存为0，不能购买"); else {
            var a = this.data.storeBargain, r = {
                goodsId: a.id,
                goods: {
                    name: a.name,
                    price: a.purchasePrice
                },
                pic: this.data.storeBargain.thumb,
                number: 1
            }, i = "";
            this.data.storeBargainOrder && ("undefined" == this.data.storeBargainOrder.attrs && (this.data.storeBargainOrder.attrs = ""), 
            r.attrs = this.data.storeBargainOrder.attrs ? this.data.storeBargainOrder.attrs : "", 
            i = r.attrs, this.data.storeBargainOrder.pic && (r.pic = this.data.storeBargainOrder.pic)), 
            console.log(i);
            var s = {
                totalPrice: a.purchasePrice,
                deliveryFee: a.carriage,
                cutPrice: this.data.alreadyCut,
                list: [ r ],
                bargain_id: this.data.bargain_id,
                order_id: this.data.order_id ? this.data.order_id : 0,
                attrs: i,
                buyType: t
            };
            wx.navigateTo({
                url: "../bargain-settle/bargain-settle?orders=" + encodeURIComponent(JSON.stringify(s))
            });
        }
    },
    getGroupGoodsList: function() {
        var t = this;
        r = this, o.getBargainRecList({
            p: this.data.page,
            s: 4
        }, function(a) {
            1 == t.data.page && (t.data.shopList = []), t.setData({
                shopList: t.data.shopList.concat(a.list)
            });
        });
    },
    onReachBottom: function() {
        2 != this.data.page && (this.data.page++, this.getGroupGoodsList());
    },
    onPullDownRefresh: function() {
        this.refresh(this.data.bargain_id, this.data.order_id);
    },
    onShareAppMessage: function() {
        this.closeBox();
        var t = "id=" + this.data.bargain_id;
        return this.data.order_id && (t = t + "&order_id=" + this.data.order_id), {
            title: r.data.goods.name,
            path: "/pages/bargain/bargain-detail/bargain-detail?" + t,
            success: function(t) {},
            fail: function(t) {}
        };
    },
    call: function(t) {
        wx.makePhoneCall({
            phoneNumber: r.data.shop.copyphone
        });
    }
}), Array.prototype.del = function(t) {
    return t < 0 ? this : this.slice(0, t).concat(this.slice(t + 1, this.length));
};