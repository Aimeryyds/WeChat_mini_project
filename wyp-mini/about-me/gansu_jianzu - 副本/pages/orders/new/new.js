function a(a) {
    return a && a.__esModule ? a : {
        default: a
    };
}

function e(a, e, t) {
    return e in a ? Object.defineProperty(a, e, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : a[e] = t, a;
}

var t = Object.assign || function(a) {
    for (var e = 1; e < arguments.length; e++) {
        var t = arguments[e];
        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (a[i] = t[i]);
    }
    return a;
}, i = a(require("../../../network/api")), r = a(require("../../../utils/util")), o = a(require("../../../utils/notification.js")), d = a(require("../../../utils/const.js")), s = require("../../../dist/index");

Page(Object.assign({}, s.Quantity, s.TopTips, s.Toast, s.Switch, {
    data: {
        num: {
            quantity: 0,
            min: 1,
            max: 999
        },
        order: {},
        peiSongType: [],
        peiSongTimeArray: [ [], [] ],
        peiSongTimeIndex: [ 0, 0 ],
        formData: {
            isMemberRechargeChecked: !1
        },
        isPaying: !1,
        cartItems: [],
        errGoodList: []
    },
    onLoad: function(a) {
        var e = this, t = r.default.parse(a.order), i = a.from, s = a.formData ? r.default.parse(a.formData) : {};
        console.log("formData----\x3e", s), t.consignee && t.consignee.idCard && (s.idCard = t.consignee.idCard), 
        this.setData({
            order: t,
            formData: s,
            cartItems: t.cartItems
        });
        var n = [];
        if (t && t.distributionType && t.distributionType.length > 0 && ((t.distributionType.indexOf("3") >= 0 || t.distributionType.indexOf(3) >= 0) && (n.push({
            label: "快递物流",
            value: "3",
            checked: "true"
        }), this.resetPeiSongTime(3, !0)), (t.distributionType.indexOf("2") >= 0 || t.distributionType.indexOf(2) >= 0) && (n.push({
            label: "送货上门",
            value: "2",
            checked: "true"
        }), s.distributionDate ? this.resetPeiSongTime(2, !0) : this.resetPeiSongTime(2, !1)), 
        (t.distributionType.indexOf("1") >= 0 || t.distributionType.indexOf(1) >= 0) && (t.distributionType.indexOf("2") >= 0 || t.distributionType.indexOf(2) >= 0 || t.distributionType.indexOf("3") >= 0 || t.distributionType.indexOf(3) >= 0 ? n.push({
            label: "门店自提",
            value: "1"
        }) : (s.distributionDate ? this.resetPeiSongTime(1, !0) : this.resetPeiSongTime(1, !1), 
        n.push({
            label: "门店自提",
            value: "1",
            checked: "true"
        })))), this.setData({
            num: {},
            peiSongType: n
        }), i && "address" == i) {
            var u = this.dealNotifyParamsData();
            u.customerCardId = this.data.order.userCardId || 0, u.couponId = this.data.order.coupon && this.data.order.coupon.id ? this.data.order.coupon.id : "", 
            this.data.order.cartItems && this.data.order.cartItems.length > 0 ? this.confirmCartOrder(u) : this.toOrder(u);
        }
        o.default.register(d.default.action.SELECT_CARD_AND_COUPON, this, function(a) {
            console.log("接收选择优惠劵和会员卡的通知settings.action.SELECT_CARD_AND_COUPON====", a.data);
            var t = e.dealNotifyParamsData();
            a.data && a.data.cardid && (t.customerCardId = a.data.cardid), a.data && a.data.couponid && (t.couponId = a.data.couponid), 
            e.data.order.cartItems && e.data.order.cartItems.length > 0 ? e.confirmCartOrder(t) : e.toOrder(t);
        }), o.default.register(d.default.action.SELECT_GIFTCARD, this, function(a) {
            console.log("接收选择礼品卡的通知settings.action.SSELECT_GIFTCARD====", a.data);
            var t = e.dealNotifyParamsData();
            t.customerCardId = e.data.order.userCardId || 0, t.couponId = e.data.order.coupon && e.data.order.coupon.id ? e.data.order.coupon.id : "", 
            a.data && (t.giftCardIds = a.data.giftCardIds), e.data.order.cartItems && e.data.order.cartItems.length > 0 ? e.confirmCartOrder(t) : e.toOrder(t);
        });
    },
    onShow: function() {
        var a = getApp().getFlash("item");
        a && (console.log(a, "item"), this.setData(e({}, "order.leaveMessage[" + a.index + "].value", a.value)));
    },
    dealNotifyParamsData: function() {
        return this.data.order.cartItems && this.data.order.cartItems.length > 0 ? {
            cartItems: r.default.stringify(this.data.order.cartItems),
            userDistributionType: this.data.formData.selectPeiSongType,
            consigneeId: 1 == this.data.formData.selectPeiSongType ? -1 : this.data.order.consignee && this.data.order.consignee.id ? this.data.order.consignee.id : -1,
            giftCardIds: this.data.order.giftCardIds || ""
        } : {
            goodsId: this.data.order.goodsList[0].id,
            propertiesId: this.data.order.goodsList[0].propertiesId,
            num: this.data.order.goodsTotal,
            userDistributionType: this.data.formData.selectPeiSongType,
            consigneeId: 1 == this.data.formData.selectPeiSongType ? -1 : this.data.order.consignee && this.data.order.consignee.id ? this.data.order.consignee.id : -1,
            giftCardIds: this.data.order.giftCardIds || ""
        };
    },
    showTopTips: function(a) {
        this.showZanTopTips(a);
    },
    toOrder: function(a) {
        var e = this;
        a = t({}, a, {
            groupId: this.data.order.groupId ? this.data.order.groupId : "",
            sponsorId: this.data.order.sponsorId ? this.data.order.sponsorId : "",
            useMemberRecharge: this.data.formData.isMemberRechargeChecked ? 1 : 2
        }), console.log("params---\x3e", a), a.shareCode = this.data.order.shareCode, wx.showLoading({
            title: "请稍候"
        });
        var r = this;
        i.default.checkoutSingleOrder(a).then(function(a) {
            wx.hideLoading();
            var t = a.data;
            t.shareCode = e.data.order.shareCode, t.leaveMessage = e.data.order.leaveMessage ? e.data.order.leaveMessage : t.leaveMessage, 
            e.setData({
                order: t
            });
        }).catch(function(a) {
            a.data && a.data.data && a.data.data.length > 0 ? (e.setData({
                errGoodList: a.data.data
            }), r.showDialog()) : r.showZanTopTips(i.default.errors(a.error) || a.errorMessage || "网络错误"), 
            wx.hideLoading();
        });
    },
    confirmCartOrder: function(a) {
        var e = this;
        a = t({}, a, {
            groupId: this.data.order.groupId ? this.data.order.groupId : "",
            sponsorId: this.data.order.sponsorId ? this.data.order.sponsorId : "",
            useMemberRecharge: this.data.formData.isMemberRechargeChecked ? 1 : 2
        }), console.log("params---\x3e", a), wx.showLoading({
            title: "请稍候"
        });
        var r = this;
        i.default.confirmCartOrder(a).then(function(a) {
            wx.hideLoading();
            var t = a.data;
            t.cartItems = e.data.order.cartItems, t.leaveMessage = e.data.order.leaveMessage ? e.data.order.leaveMessage : t.leaveMessage, 
            e.setData({
                order: t
            });
        }).catch(function(a) {
            console.log("err---\x3e", a), a.data && a.data.data && a.data.data.length > 0 ? (e.setData({
                errGoodList: a.data.data
            }), r.showDialog()) : r.showZanTopTips(i.default.errors(a.error) || a.errorMessage || "网络错误"), 
            wx.hideLoading();
        });
    },
    bindIdCardInput: function(a) {
        var e = this.data.formData;
        e.idCard = a.detail.value, this.setData({
            formData: e
        });
    },
    bindPickupManInput: function(a) {
        var e = this.data.formData;
        e.pickupman = a.detail.value, this.setData({
            formData: e
        });
    },
    bindPickupManMobileInput: function(a) {
        var e = this.data.formData;
        e.pickupmanMobile = a.detail.value, this.setData({
            formData: e
        });
    },
    bindUserMsgInput: function(a) {
        var e = this.data.formData;
        e.userMsg = a.detail.value, this.setData({
            formData: e
        });
    },
    resetPeiSongTime: function(a, e) {
        if (3 == a) {
            var t = this.data.formData;
            return t.selectPeiSongType = a, t.distributionDate = "", t.distributionTime = "", 
            void this.setData({
                formData: t
            });
        }
        var i = [ [], [] ], r = [ 0, 0 ], o = this.data.order;
        if (1 == a && o.distributionTime) {
            for (var d in o.distributionTime) i[0].push(d);
            i[1] = o.distributionTime[i[0][0]], this.setData({
                peiSongTimeArray: i,
                peiSongTimeIndex: r
            });
        } else if (2 == a && o.pickupTime) {
            for (var s in o.pickupTime) i[0].push(s);
            i[1] = o.pickupTime[i[0][0]], this.setData({
                peiSongTimeArray: i,
                peiSongTimeIndex: r
            });
        }
        if (!e) {
            var n = this.data.formData;
            n.selectPeiSongType = a, n.distributionDate = i[0] && i[0][r[0]] ? i[0][r[0]] : [], 
            n.distributionTime = i[1] && i[1][r[1]] ? i[1][r[1]] : [], console.log("resetPeiSongTime-------formData------------\x3e", n), 
            this.setData({
                formData: n
            });
        }
    },
    gopay: function() {
        if (2 == this.data.formData.selectPeiSongType && this.data.order.minSendFeeDifference > 0) this.showTopTips("购买金额未达到起送金额"); else {
            var a = this.data.order, e = a.leaveMessage, t = void 0 === e ? [] : e;
            if (1 != a.outRange) if (this.data.formData.selectPeiSongType) {
                if (a.isCrossBorder && 1 == a.isCrossBorder && 3 == this.data.formData.selectPeiSongType) {
                    if (!this.data.formData.idCard) return void this.showTopTips("跨境商品请输入身份证号");
                    if (!/^\d{17}(\d|x)$/i.test(this.data.formData.idCard)) return void this.showTopTips("请输入正确的身份证号");
                }
                if (3 == this.data.formData.selectPeiSongType || this.data.formData.distributionDate) {
                    if (1 == this.data.formData.selectPeiSongType) {
                        if (!this.data.formData.pickupman) return void this.showTopTips("请填写提货人姓名");
                        if (!this.data.formData.pickupmanMobile) return void this.showTopTips("请填写提货人电话");
                        if (!/^1[0-9]{10}$/.test(this.data.formData.pickupmanMobile)) return void this.showTopTips("请填写正确电话");
                    }
                    if (1 == this.data.formData.selectPeiSongType || (console.log("校验订单收货地址order.consignee---\x3e", a.consignee), 
                    a.consignee && a.consignee.id && a.consignee.id > 0)) {
                        for (var i = void 0, r = 0; r < t.length; r++) {
                            if (1 == t[r].required && 1 == t[r].verification && (!t[r].value || 0 == t[r].value.length)) {
                                i = "请输入" + t[r].fieldname + "的留言信息";
                                break;
                            }
                            if (1 == t[r].required && 2 == t[r].verification && !/^1[0-9]{10}$/.test(t[r].value)) {
                                i = "请输入正确的手机号";
                                break;
                            }
                            if (1 == t[r].required && 3 == t[r].verification && !/^\d{17}(\d|x)$/i.test(t[r].value)) {
                                i = "请输入正确的身份证号";
                                break;
                            }
                            if (1 == t[r].required && 4 == t[r].verification && !/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(t[r].value)) {
                                i = "请输入正确的邮箱地址";
                                break;
                            }
                        }
                        i ? this.showTopTips(i) : this.data.order.cartItems && this.data.order.cartItems.length > 0 ? this.payCartProducts(a) : this.paySingleProduct(a);
                    } else this.showTopTips("请选择收货地址");
                } else this.showTopTips("请选择配送时间");
            } else this.showTopTips("请选择配送方式"); else this.showTopTips("当前收货地址不支持配送，请修改收货地址");
        }
    },
    paySingleProduct: function(a) {
        var e = this;
        if (wx.showLoading({
            title: "请稍后"
        }), !this.data.isPaying) {
            this.setData({
                isPaying: !0
            });
            var t = this;
            console.log("getApp().globalData.newShareCode------", getApp().globalData.newShareCode);
            var r = {
                consigneeId: 1 == this.data.formData.selectPeiSongType ? -1 : a.consignee && a.consignee.id ? a.consignee.id : -1,
                goodsList: a.goodsList,
                couponId: a.coupon && a.coupon.id ? a.coupon.id : "",
                customerCardId: a.card && a.card.userCardId ? a.card.userCardId : "",
                distributionType: this.data.formData.selectPeiSongType || "",
                distributionDate: this.data.formData.distributionDate || "",
                distributionTime: this.data.formData.distributionTime,
                pickupman: this.data.formData.pickupman || "",
                token: getApp().globalData.token || "",
                pickupmanMobile: this.data.formData.pickupmanMobile || "",
                shareCode: this.data.order.shareCode || "",
                idCard: this.data.formData.idCard || "",
                distributerCode: getApp().globalData.newShareCode || "",
                groupId: this.data.order.groupId ? this.data.order.groupId : 0,
                sponsorId: this.data.order.sponsorId ? this.data.order.sponsorId : 0,
                giftCardIds: this.data.order.giftCardIds || "",
                useMemberRecharge: this.data.formData.isMemberRechargeChecked ? 1 : 2
            };
            this.data.order.leaveMessage && this.data.order.leaveMessage.length > 0 ? r.leaveMessage = this.data.order.leaveMessage : r.userMsg = this.data.formData.userMsg || "", 
            i.default.createSingleOrder(r).then(function(a) {
                console.log("===res.data.total - 0=======", a.data.total - 0), console.log("===res.data.total - 0=======", a.data.total - 0 == 0), 
                a.data.total - 0 == 0 ? t.dealPayWeiXin0Money(a) : t.dealPayWeiXin(a);
            }).catch(function(a) {
                wx.hideLoading(), t.setData({
                    isPaying: !1
                }), a.data && a.data.data && a.data.data.length > 0 ? (e.setData({
                    errGoodList: a.data.data
                }), t.showDialog()) : t.showZanTopTips(i.default.errors(a.error) || a.errorMessage || "订单创建失败");
            });
        }
    },
    payCartProducts: function(a) {
        var e = this;
        if (wx.showLoading({
            title: "请稍后"
        }), !this.data.isPaying) {
            this.setData({
                isPaying: !0
            });
            var t = this, r = {
                consigneeId: 1 == this.data.formData.selectPeiSongType ? -1 : a.consignee && a.consignee.id ? a.consignee.id : -1,
                cartItems: a.cartItems,
                isCrossBorder: a.isCrossBorder,
                couponId: a.coupon && a.coupon.id ? a.coupon.id : 0,
                customerCardId: a.card && a.card.userCardId ? a.card.userCardId : 0,
                distributionType: this.data.formData.selectPeiSongType || "",
                distributionDate: this.data.formData.distributionDate || "",
                distributionTime: this.data.formData.distributionTime || "",
                pickupman: this.data.formData.pickupman || "",
                token: getApp().globalData.token || "",
                pickupmanMobile: this.data.formData.pickupmanMobile || "",
                idCard: this.data.formData.idCard || "",
                distributerCode: getApp().globalData.newShareCode || "",
                groupId: this.data.order.groupId ? this.data.order.groupId : "",
                sponsorId: this.data.order.sponsorId ? this.data.order.sponsorId : "",
                giftCardIds: this.data.order.giftCardIds || "",
                useMemberRecharge: this.data.formData.isMemberRechargeChecked ? 1 : 2
            };
            this.data.order.leaveMessage && this.data.order.leaveMessage.length > 0 ? r.leaveMessage = this.data.order.leaveMessage : r.userMsg = this.data.formData.userMsg || "", 
            i.default.commitCartOrder(r).then(function(a) {
                o.default.post(d.default.action.ORDER_CREATED, {
                    storeId: e.data.order.storeId,
                    tab: {
                        selectedId: e.data.order.expressType
                    }
                }), a.data.total - 0 == 0 ? t.dealPayWeiXin0Money(a) : t.dealPayWeiXin(a);
            }).catch(function(a) {
                wx.hideLoading(), t.setData({
                    isPaying: !1
                }), a.data && a.data.data && a.data.data.length > 0 ? (e.setData({
                    errGoodList: a.data.data
                }), t.showDialog()) : t.showZanTopTips(i.default.errors(a.error) || a.errorMessage || "订单创建失败");
            });
        }
    },
    dealPayWeiXin0Money: function(a) {
        var e = this;
        wx.hideLoading();
        var t = a.data.id, o = a.data.autoPushCards;
        console.log("orderNo------\x3e", t);
        var d = this;
        i.default.toPay0Money({
            orderNo: a.data.orderNo
        }).then(function(a) {
            console.log("=========toPay0Money=============", a), 0 == a.status && a.data ? 2 == e.data.order.activityType ? d.timer = setInterval(function() {
                i.default.queryMyTuanId({
                    id: t
                }).then(function(a) {
                    0 == a.status && a.data.sponsorId > 0 ? wx.redirectTo({
                        url: "/pages/tuan/detail/index?id=" + a.data.sponsorId
                    }) : wx.redirectTo({
                        url: "/pages/orders/result/index?result=1&id=" + t + "&&iso2o=true&autoPushCards=" + r.default.stringify(o)
                    });
                }), clearInterval(d.timer), d.timer = void 0;
            }, 1500) : (console.log("=========redirectTo==========111==="), wx.redirectTo({
                url: "/pages/orders/result/index?result=1&id=" + t + "&&iso2o=true&autoPushCards=" + r.default.stringify(o)
            })) : (console.log("=========redirectTo==========111===", "0元订单支付失败"), d.showTopTips("0元订单支付失败"), 
            d.dealPayWeiXin(a)), d.setData({
                isPaying: !1
            });
        }).catch(function(e) {
            console.log("=========dealPayWeiXin0Money=============", e), wx.hideLoading(), d.setData({
                isPaying: !1
            }), d.dealPayWeiXin(a);
        });
    },
    dealPayWeiXin: function(a) {
        console.log("dealPayWeiXin------", a), wx.hideLoading();
        var e = a.data.id, t = a.data.autoPushCards;
        console.log("orderNo------\x3e", e);
        var o = this;
        i.default.queryPaySign({
            orderNo: a.data.orderNo
        }).then(function(a) {
            0 == a.status && a.data && a.data.nonceStr && wx.requestPayment({
                timeStamp: a.data.timeStamp + "",
                nonceStr: a.data.nonceStr,
                package: a.data.package,
                signType: a.data.signType,
                paySign: a.data.paySign,
                success: function() {
                    console.log("微信支付成功===========>"), 2 == o.data.order.activityType ? o.timer = setInterval(function() {
                        i.default.queryMyTuanId({
                            id: e
                        }).then(function(a) {
                            console.log("queryMyTuanId===========>", a), 0 == a.status && a.data.sponsorId > 0 ? wx.redirectTo({
                                url: "/pages/tuan/detail/index?id=" + a.data.sponsorId
                            }) : wx.redirectTo({
                                url: "/pages/orders/result/index?result=1&id=" + e + "&&iso2o=true&autoPushCards=" + r.default.stringify(t)
                            });
                        }), clearInterval(o.timer), o.timer = void 0;
                    }, 1500) : wx.redirectTo({
                        url: "/pages/orders/result/index?result=1&id=" + e + "&&iso2o=true&autoPushCards=" + r.default.stringify(t)
                    }), o.setData({
                        isPaying: !1
                    });
                },
                fail: function() {
                    wx.redirectTo({
                        url: "/pages/orders/result/index?result=0&id=" + e + "&&iso2o=true"
                    }), o.setData({
                        isPaying: !1
                    });
                }
            });
        }).catch(function(a) {
            wx.hideLoading(), o.setData({
                isPaying: !1
            }), o.showTopTips(i.default.errors(a.error) || "订单创建失败");
        });
    },
    addAddress: function() {
        3 == this.data.formData.selectPeiSongType ? wx.redirectTo({
            url: "/pages/address/list/list?type=order&&scoreorder=" + r.default.stringify(this.data.order) + "&&formData=" + r.default.stringify(this.data.formData)
        }) : wx.redirectTo({
            url: "/pages/address/list/list?type=order&&order=" + r.default.stringify(this.data.order) + "&&formData=" + r.default.stringify(this.data.formData)
        });
    },
    selectAddress: function() {
        3 == this.data.formData.selectPeiSongType ? wx.redirectTo({
            url: "/pages/address/list/list?type=order&&scoreorder=" + r.default.stringify(this.data.order) + "&&formData=" + r.default.stringify(this.data.formData)
        }) : wx.redirectTo({
            url: "/pages/address/list/list?type=order&&order=" + r.default.stringify(this.data.order) + "&&formData=" + r.default.stringify(this.data.formData)
        });
    },
    selectCard: function() {
        2 != this.data.order.isDiscountShare && this.data.order.cardCount && this.data.order.cardCount > 0 && wx.navigateTo({
            url: "/pages/orders/cards/cards?order=" + r.default.stringify(this.data.order)
        });
    },
    selectCoupon: function() {
        2 != this.data.order.isDiscountShare && this.data.order.couponCount && this.data.order.couponCount > 0 && wx.navigateTo({
            url: "/pages/orders/coupons/coupons?order=" + r.default.stringify(this.data.order)
        });
    },
    selectGiftCard: function() {
        console.log("========selectGiftCard========="), wx.navigateTo({
            url: "/pages/giftcard/choose/index?order=" + r.default.stringify(this.data.order)
        });
    },
    peiSongTypeChange: function(a) {
        console.log("e===>", a);
        var e = this.data.formData;
        e.selectPeiSongType = a.target.dataset.value;
        for (var t = this.data.peiSongType, i = 0; i < t.length; i++) t[i].value == a.target.dataset.value ? t[i].checked = !0 : t[i].checked = !1;
        if (this.setData({
            formData: e,
            peiSongType: t
        }), this.resetPeiSongTime(a.target.dataset.value, !1), this.data.order.cartItems && this.data.order.cartItems.length > 0) {
            var o = {
                cartItems: r.default.stringify(this.data.order.cartItems),
                userDistributionType: a.target.dataset.value,
                consigneeId: 1 == this.data.formData.selectPeiSongType ? -1 : this.data.order.consignee && this.data.order.consignee.id ? this.data.order.consignee.id : -1
            };
            this.data.order.card && this.data.order.card.userCardId && (o.customerCardId = this.data.order.card.userCardId), 
            this.data.order.coupon && this.data.order.coupon.id && (o.couponId = this.data.order.coupon.id), 
            this.confirmCartOrder(o);
        } else {
            var d = {
                goodsId: this.data.order.goodsList[0].id,
                propertiesId: this.data.order.goodsList[0].propertiesId,
                userDistributionType: a.target.dataset.value,
                num: this.data.order.goodsTotal,
                consigneeId: 1 == this.data.formData.selectPeiSongType ? -1 : this.data.order.consignee && this.data.order.consignee.id ? this.data.order.consignee.id : -1
            };
            this.data.order.card && this.data.order.card.userCardId && (d.customerCardId = this.data.order.card.userCardId), 
            this.data.order.coupon && this.data.order.coupon.id && (d.couponId = this.data.order.coupon.id), 
            this.toOrder(d);
        }
    },
    bindMultiPickerChange: function(a) {
        console.log("picker发送选择改变，携带值为", a.detail.value);
        var e = Object.assign({}, this.data.formData);
        e.distributionDate = this.data.peiSongTimeArray[0][a.detail.value[0]], e.distributionTime = this.data.peiSongTimeArray[1][a.detail.value[1]], 
        this.setData({
            peiSongTimeIndex: a.detail.value,
            formData: e
        });
    },
    bindMultiPickerColumnChange: function(a) {
        console.log("修改的列为", a.detail.column, "，值为", a.detail.value);
        var e = {
            peiSongTimeArray: this.data.peiSongTimeArray,
            peiSongTimeIndex: this.data.peiSongTimeIndex
        };
        switch (e.peiSongTimeIndex[a.detail.column] = a.detail.value, a.detail.column) {
          case 0:
            1 == this.data.formData.selectPeiSongType ? e.peiSongTimeArray[1] = this.data.order.distributionTime[e.peiSongTimeArray[0][e.peiSongTimeIndex[0]]] : 2 == this.data.formData.selectPeiSongType && (e.peiSongTimeArray[1] = this.data.order.pickupTime[e.peiSongTimeArray[0][e.peiSongTimeIndex[0]]]), 
            e.peiSongTimeIndex[1] = 0;
        }
        console.log("data-------------\x3e", e), this.setData(e);
    },
    onUnload: function() {
        o.default.remove(d.default.action.SELECT_CARD_AND_COUPON, this), o.default.remove(d.default.action.SELECT_GIFTCARD, this);
    },
    onSwitch: function(a) {
        var e = a.detail.value;
        console.log("onSwitch-----checked--=------\x3e", e), this.setData({
            formData: t({}, this.data.formData, {
                isMemberRechargeChecked: e
            })
        });
        var i = this.dealNotifyParamsData();
        i.customerCardId = this.data.order.userCardId || 0, i.couponId = this.data.order.coupon && this.data.order.coupon.id ? this.data.order.coupon.id : "", 
        this.data.order.cartItems && this.data.order.cartItems.length > 0 ? this.confirmCartOrder(i) : this.toOrder(i);
    },
    showDialog: function() {
        var a = this.selectComponent(".wxc-dialog");
        a && a.show();
    },
    hideDialog: function() {
        var a = this.selectComponent(".wxc-dialog");
        a && a.hide();
    },
    onConfirm: function() {
        console.log("点击了确认按钮"), this.hideDialog();
    },
    onCancel: function() {
        console.log("点击了取消按钮"), this.hideDialog();
    },
    onchangeValueMsg: function(a) {
        this.data.order.leaveMessage[a.target.id].value = a.detail.value, this.setData(e({}, "order.leaveMessage[" + a.target.id + "].value", a.detail.value));
    },
    jumpmsg: function(a) {
        console.log(a.currentTarget.dataset, "e");
        var e = a.currentTarget.dataset, i = e.item, o = e.index;
        wx.navigateTo({
            url: "/pages/orders/new/newmsg?item=" + r.default.stringify(t({}, i, {
                index: o
            }))
        });
    }
}));