function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var a = Object.assign || function(t) {
    for (var a = 1; a < arguments.length; a++) {
        var e = arguments[a];
        for (var d in e) Object.prototype.hasOwnProperty.call(e, d) && (t[d] = e[d]);
    }
    return t;
}, e = t(require("../../../network/api.js")), d = t(require("../../../utils/util")), o = t(require("../../../utils/const.js")), r = t(require("../../../utils/notification.js"));

Page({
    data: {
        datalist: [],
        money: {
            total: 0,
            discount: 0,
            paid: 0
        },
        selectIds: [],
        checkedId: []
    },
    onLoad: function(t) {
        var a = d.default.parse(t.order);
        console.log(a, "order");
        var e = a.goodsList, o = a.storeId;
        this.setData({
            "money.total": a.toPayTotal,
            order: a,
            defaultCheck: a.giftCards.map(function(t) {
                return t.id;
            }),
            isShow: !0
        });
        var r = {
            goodsIds: e.map(function(t) {
                return t.id;
            }).join(","),
            storeId: o
        };
        wx.showLoading({
            title: "加载中"
        }), this.queryOrderGiftCardList(r);
    },
    chooseOn: function(t) {
        var a = t.currentTarget.dataset, e = a.item, d = a.index;
        if (console.log(e, d), 0 == e.isChecked) {
            var o = this.data, r = o.selectIds, i = o.money, s = i.discount, n = i.total, c = o.toggle, u = o.checkedId;
            (s < n || c[d]) && (c[d] ? (r.splice(r.indexOf(e.id), 1), u.length > 0 ? this.queryOrder(r) : s -= e.balance) : (r.push(e.id), 
            s += e.balance), console.log(e, d), c[d] = !c[d], this.setData({
                toggle: c,
                selectIds: r,
                "money.discount": Math.round(100 * s) / 100,
                "money.paid": Math.round(100 * (this.data.money.total - s)) / 100
            }));
        }
    },
    queryOrderGiftCardList: function(t) {
        var a = this;
        e.default.queryOrderGiftCardList(t).then(function(t) {
            console.log(t, "res"), wx.hideLoading();
            for (var e = [], d = 0; d < t.data.length; d++) t.data[d].isChecked && e.push(t.data[d].id);
            if (e.length > 0) {
                var o = e.concat(a.data.defaultCheck).filter(function(t, a, e) {
                    return e.indexOf(t) === a;
                });
                a.setData({
                    isShow: !1,
                    checkedId: e
                }), a.queryOrder(o);
            }
            var r = t.data.map(function(t) {
                return t.isChecked ? (a.setData({
                    selectIds: a.data.selectIds.concat([ t.id ])
                }), !0) : 0 == t.isChecked ? (console.log(a.data.selectIds, a.data.defaultCheck.indexOf(t.id), "this.data.selectIds"), 
                -1 != a.data.defaultCheck.indexOf(t.id) && (a.setData({
                    "money.discount": a.data.money.discount + t.balance,
                    selectIds: a.data.selectIds.concat([ t.id ])
                }), !0)) : void 0;
            });
            a.setData({
                datalist: t.data,
                toggle: r,
                "money.paid": Math.round(100 * (a.data.money.total - a.data.money.discount)) / 100
            });
        }).catch(function(t) {
            return console.log(t);
        });
    },
    onSubmitGift: function() {
        console.log(this.data.selectIds), r.default.post(o.default.action.SELECT_GIFTCARD, {
            giftCardIds: this.data.selectIds.join(",")
        }), wx.navigateBack();
    },
    queryOrder: function(t) {
        var a = this.dealNotifyParamsData();
        a.customerCardId = this.data.order.userCardId || 0, a.couponId = this.data.order.userCouponId || 0, 
        a.giftCardIds = t.join(","), wx.showLoading({
            title: "加载中"
        }), this.data.order.cartItems && this.data.order.cartItems.length > 0 ? this.confirmCartOrder(a) : this.toOrder(a);
    },
    dealNotifyParamsData: function() {
        return this.data.order.cartItems && this.data.order.cartItems.length > 0 ? {
            cartItems: d.default.stringify(this.data.order.cartItems),
            userDistributionType: this.data.order.userDistributionType,
            consigneeId: 1 == this.data.order.userDistributionType ? -1 : this.data.order.consignee && this.data.order.consignee.id ? this.data.order.consignee.id : -1,
            giftCardIds: this.data.order.giftCardIds || ""
        } : {
            goodsId: this.data.order.goodsList[0].id,
            propertiesId: this.data.order.goodsList[0].propertiesId,
            num: this.data.order.goodsTotal,
            userDistributionType: this.data.order.userDistributionType,
            consigneeId: 1 == this.data.order.userDistributionType ? -1 : this.data.order.consignee && this.data.order.consignee.id ? this.data.order.consignee.id : -1,
            giftCardIds: this.data.order.giftCardIds || ""
        };
    },
    toOrder: function(t) {
        var d = this;
        t = a({}, t, {
            groupId: this.data.order.groupId ? this.data.order.groupId : "",
            sponsorId: this.data.order.sponsorId ? this.data.order.sponsorId : ""
        }), console.log("params---\x3e", t), t.shareCode = this.data.order.shareCode;
        e.default.checkoutSingleOrder(t).then(function(t) {
            wx.hideLoading(), t && d.setData({
                isShow: !0,
                money: {
                    total: t.data.toPayTotal,
                    discount: t.data.giftCardDiscount,
                    paid: t.data.total
                }
            });
        }).catch(function(t) {
            wx.hideLoading();
        });
    },
    confirmCartOrder: function(t) {
        var d = this;
        t = a({}, t, {
            groupId: this.data.order.groupId ? this.data.order.groupId : "",
            sponsorId: this.data.order.sponsorId ? this.data.order.sponsorId : ""
        }), console.log("params---\x3e", t);
        e.default.confirmCartOrder(t).then(function(t) {
            wx.hideLoading(), t && d.setData({
                isShow: !0,
                money: {
                    total: t.data.toPayTotal,
                    discount: t.data.giftCardDiscount,
                    paid: t.data.total
                }
            });
        }).catch(function(t) {
            wx.hideLoading();
        });
    }
});