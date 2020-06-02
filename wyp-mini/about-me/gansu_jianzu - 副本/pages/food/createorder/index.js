function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var a = e(require("../../../utils/util")), t = e(require("../../../network/api")), o = e(require("../../../utils/notification.js")), i = e(require("../../../utils/const.js")), r = require("../../../dist/index");

Page(Object.assign({}, r.TopTips, {
    data: {
        storeId: void 0,
        cyType: void 0,
        table: {},
        order: {},
        timeArray: [],
        timeIndex: -1,
        times: {},
        userMsg: "",
        isPaying: !1
    },
    onLoad: function(e) {
        var t = this, r = a.default.parse(e.order), n = e.diningTableNo, s = e.storeId, d = e.cyType;
        this.setData({
            storeId: s,
            cyType: d,
            order: r
        }), 1 == d ? this.queryTable({
            diningTableNo: n,
            storeId: s
        }) : 0 == d && this.queryTimes({
            storeId: s
        }), o.default.register(i.default.action.SELECT_CARD_AND_COUPON, this, function(e) {
            console.log("接收选择优惠劵和会员卡的通知settings.action.SELECT_CARD_AND_COUPON====", e.data);
            var a = t.dealNotifyParamsData(!0);
            e.data && e.data.cardid && (console.log("---选择会员卡---", e.data.cardid), a.customerCardId = e.data.cardid), 
            e.data && e.data.couponid && (console.log("---选择优惠券---", e.data.couponid), a.couponId = e.data.couponid), 
            t.confirmCartOrder(a);
        });
    },
    onShow: function() {
        var e = getApp().getFlash("food-msg");
        e && (this.setData({
            userMsg: e
        }), getApp().setFlash("food-msg", ""));
    },
    onUnload: function() {
        o.default.remove(i.default.action.SELECT_CARD_AND_COUPON, this), o.default.remove(i.default.action.SELECT_GIFTCARD, this);
    },
    queryTable: function(e) {
        var a = this;
        wx.showLoading({
            title: "请稍候"
        }), console.log("queryTable", e), t.default.queryTableById(e).then(function(e) {
            a.setData({
                table: e.data
            }), wx.hideLoading();
        }).catch(function() {
            wx.hideLoading();
        });
    },
    queryTimes: function(e) {
        var a = this;
        wx.showLoading({
            title: "请稍候"
        }), t.default.queryCyTimes(e).then(function(e) {
            var t = e.data, o = t.timeData && t.timeData.length > 0 ? t.timeData.map(function(e) {
                return t.year + "." + t.month + "." + t.day + "(" + t.weekDay + ") " + e.startTime + "-" + e.endTime;
            }) : [];
            o.length > 0 && o.unshift("立即用餐(立即送达)"), a.setData({
                timeArray: o,
                times: t
            }), wx.hideLoading();
        }).catch(function() {
            wx.hideLoading();
        });
    },
    bindPickerChange: function(e) {
        this.setData({
            timeIndex: e.detail.value
        });
    },
    selectCard: function() {
        2 != this.data.order.isDiscountShare && this.data.order.cardCount && this.data.order.cardCount > 0 && wx.navigateTo({
            url: "/pages/orders/cards/cards?order=" + a.default.stringify(this.data.order)
        });
    },
    selectCoupon: function() {
        2 != this.data.order.isDiscountShare && this.data.order.couponCount && this.data.order.couponCount > 0 && wx.navigateTo({
            url: "/pages/orders/coupons/coupons?userDistributionType=&order=" + a.default.stringify(this.data.order)
        });
    },
    dealNotifyParamsData: function(e) {
        var t = this.data.order;
        return console.log("order---\x3e", t), {
            cartItems: e ? a.default.stringify(t.cartItems) : t.cartItems,
            customerCardId: t.card && t.card.id ? t.card.id : "",
            couponId: t.coupon && t.coupon.id ? t.coupon.id : ""
        };
    },
    confirmCartOrder: function(e) {
        var a = this;
        console.log("params---\x3e", e), wx.showLoading({
            title: "请稍候"
        });
        var o = this;
        t.default.confirmFoodCartOrder(e).then(function(e) {
            wx.hideLoading(), a.setData({
                order: e.data
            });
        }).catch(function(e) {
            console.log("err---\x3e", e), o.showZanTopTips(t.default.errors(e.error) || e.errorMessage || "网络错误"), 
            wx.hideLoading();
        });
    },
    commitOrder: function(e) {
        var a = this, r = e.detail.value, n = r.reserveName, s = r.reserveMobile, d = this.data, c = d.table, u = d.order, l = d.userMsg, g = d.times, h = d.timeIndex, f = d.cyType, y = d.isPaying;
        if (1 == u.isOrder) {
            var p = this.dealNotifyParamsData(!1);
            if (!(1 != f || c && c.id)) return this.showZanTopTips("请先扫码获取桌号");
            if (0 == f && -1 == h) return this.showZanTopTips("请选择用餐时间");
            if (console.log("---cyType---", f), 1 == f ? (console.log("----提交订单 有桌号----"), p.diningTableNo = c.diningTableNo) : 0 == f && (console.log("------提交订单 无桌号----"), 
            p.reserveName = n, p.reserveMobile = s, p.useStartTime = 0 == h ? "" : g.year + "-" + g.month + "-" + g.day + " " + g.timeData[h - 1].startTime + ":00", 
            p.useEndTime = 0 == h ? "" : g.year + "-" + g.month + "-" + g.day + " " + g.timeData[h - 1].endTime + ":00"), 
            p.cyType = f, p.userMsg = l, !y) {
                wx.showLoading({
                    title: "请稍后"
                }), this.setData({
                    isPaying: !0
                });
                var T = this;
                t.default.commitFoodCartOrder(p).then(function(e) {
                    o.default.post(i.default.action.ORDER_CREATED, {
                        storeId: a.data.order.storeId,
                        tab: {
                            selectedId: a.data.order.expressType
                        }
                    }), console.log("res---", e), e.data.total - 0 == 0 ? (console.log("0元付"), T.dealPayWeiXin0Money(e)) : (console.log("非0元付"), 
                    T.dealPayWeiXin(e));
                }).catch(function(e) {
                    wx.hideLoading(), T.setData({
                        isPaying: !1
                    }), T.showZanTopTips(t.default.errors(e.error) || e.errorMessage || "订单创建失败");
                });
            }
        } else this.showZanTopTips("很抱歉，现在餐厅还没有营业");
    },
    showDialog: function() {
        var e = this.selectComponent(".wxc-dialog");
        e && e.show();
    },
    hideDialog: function() {
        var e = this.selectComponent(".wxc-dialog");
        e && e.hide();
    },
    onConfirm: function() {
        console.log("点击了确认按钮"), this.hideDialog();
    },
    onCancel: function() {
        console.log("点击了取消按钮"), this.hideDialog();
    },
    handleScan: function() {
        var e = this;
        wx.scanCode({
            onlyFromCamera: !0,
            success: function(a) {
                var t = a.path, o = /\/pages\/shop\/products\/products\?storeid=(\d+)&diningTableNo=([\d\w]+)/.exec(t);
                if (console.log("桌号：", o, a), o && o.length > 2) {
                    var i = e.data, r = i.cyType;
                    if (i.storeId != o[1]) return;
                    1 == r && e.queryTable({
                        diningTableNo: o[2],
                        storeId: o[1]
                    });
                }
            }
        });
    },
    handleLeaveMessage: function() {
        var e = this.data.userMsg;
        wx.navigateTo({
            url: "/pages/food/foodtextarea/index?msg=" + e
        });
    },
    dealPayWeiXin0Money: function(e) {
        wx.hideLoading();
        var o = e.data, i = o.id, r = o.orderNo, n = o.autoPushCards;
        console.log("0元付------\x3e", e);
        var s = this;
        t.default.cyPay0Money({
            orderNo: r
        }).then(function(e) {
            console.log("=========0元付success=============", e), 0 == e.status && e.data ? wx.redirectTo({
                url: "/pages/food/result/index?result=1&id=" + i + "&autoPushCards=" + a.default.stringify(n)
            }) : (console.log("=========redirectTo==========111===", "0元订单支付失败"), s.showTopTips("0元订单支付失败"), 
            s.dealPayWeiXin(e)), s.setData({
                isPaying: !1
            });
        }).catch(function(a) {
            console.log("=========0元付error=============", a), wx.hideLoading(), s.setData({
                isPaying: !1
            }), s.dealPayWeiXin(e);
        });
    },
    dealPayWeiXin: function(e) {
        console.log("dealPayWeiXin------", e);
        var o = e.data.id, i = e.data.autoPushCards;
        wx.hideLoading();
        var r = this;
        t.default.cyOrderPay({
            orderNo: e.data.orderNo
        }).then(function(e) {
            0 == e.status && e.data && e.data.nonceStr && wx.requestPayment({
                timeStamp: e.data.timeStamp + "",
                nonceStr: e.data.nonceStr,
                package: e.data.package,
                signType: e.data.signType,
                paySign: e.data.paySign,
                success: function() {
                    console.log("微信支付成功===========>"), wx.redirectTo({
                        url: "/pages/food/result/index?result=1&id=" + o + "&autoPushCards=" + a.default.stringify(i)
                    }), r.setData({
                        isPaying: !1
                    });
                },
                fail: function() {
                    wx.redirectTo({
                        url: "/pages/food/result/index?result=0&id=" + o
                    }), r.setData({
                        isPaying: !1
                    });
                }
            });
        }).catch(function(e) {
            wx.hideLoading(), r.setData({
                isPaying: !1
            }), r.showTopTips(t.default.errors(e.error) || "订单创建失败");
        });
    }
}));