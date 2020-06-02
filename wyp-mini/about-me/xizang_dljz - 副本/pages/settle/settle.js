var e, r = getApp(), a = require("../../utils/functions"), t = require("../../utils/util");

Page({
    data: {
        list: [],
        enabled_coupon: !0,
        coupon: null,
        deliveryAddr: null,
        groupAddress: null,
        carriage: 0,
        totalPrice: 0,
        payPrice: 0,
        originalPrice: 0,
        rebatePrice: 0,
        isDeliveryFee: !1,
        rebateItemIds: "",
        show_explain: !1,
        delivery_type: 1,
        tip_message: "",
        tip_detail_message: "",
        masterReceive: 0,
        isGroup: 0
    },
    onLoad: function(a) {
        e = this;
        var t = JSON.parse(decodeURIComponent(a.orders));
        console.log(t);
        var o = [];
        if (t.list = t.list.map(function(e) {
            return e.attrs && (e.attrsStr = e.attrs.join(" & ")), o.push(e), e;
        }), this.setData({
            is_self_buy: t.is_self_buy
        }), t.groupOrderId && (e.data.groupOrderId = t.groupOrderId), t.groupMarketId && (e.data.groupMarketId = t.groupMarketId), 
        t.groupOrderId && t.masterReceive && 0 != t.masterReceive && this.getGroupMasterAddress(function(r) {
            e.setData({
                deliveryAddr: {
                    username: r.username,
                    phone: r.phone,
                    province: "",
                    city: "",
                    district: "",
                    address: r.groupMasterAddress
                }
            });
        }), e.setData({
            enabled_coupon: t.enabled_coupon,
            isGroup: t.isGroup
        }), t.masterReceive) {
            var i = t.masterReceive, s = t.isGroup;
            this.dealWithGroup(i, s), this.setData({
                masterReceive: i
            });
        }
        r.getUserInfo(function(r) {
            e.setData({
                deliveryAddr: {
                    username: r.username,
                    phone: r.phone,
                    province: r.province,
                    city: r.city,
                    district: r.disctrict ? r.district : "",
                    address: r.address
                }
            });
        });
        var d = parseFloat(t.totalPrice).toFixed(2);
        d = e.data.isDeliveryFee ? (d - t.deliveryFee).toFixed(2) : d, e.setData({
            list: t.list,
            payPrice: d,
            originalPrice: d,
            carriage: e.data.isDeliveryFee ? 0 : t.deliveryFee,
            totalPrice: (t.totalPrice - t.deliveryFee).toFixed(2)
        }), t.enabled_coupon && e.getCouponDiscount(e.data.payPrice, 0);
    },
    getCouponDiscount: function(r, t) {
        a.getCouponDiscount(r, t, function(r) {
            var a = r.coupon ? r.coupon.amount : 0, t = (e.data.payPrice - a).toFixed(2);
            e.setData({
                payPrice: t < 0 ? 0 : t,
                coupon: r.coupon
            });
        });
    },
    chooseCoupon: function() {
        var r = {
            payPrice: e.data.originalPrice,
            chooseId: e.data.coupon ? e.data.coupon.id : 0
        };
        wx.navigateTo({
            url: "../couponchoose/couponchoose?orders=" + JSON.stringify(r)
        });
    },
    chooseAddress: function() {
        2 == this.data.masterReceive || 1 == this.data.masterReceive && 1 == this.data.delivery_type || wx.chooseAddress({
            success: function(t) {
                var o = {
                    username: t.userName,
                    phone: t.telNumber,
                    province: t.provinceName,
                    city: t.cityName,
                    district: t.countyName,
                    address: t.detailInfo
                };
                e.setData({
                    deliveryAddr: o
                }), a.updateAddr(o, function(e) {
                    r.globalData.userInfo.username = o.username, r.globalData.userInfo.phone = o.phone, 
                    r.globalData.userInfo.province = o.province, r.globalData.userInfo.city = o.city, 
                    r.globalData.userInfo.district = o.district ? o.district : "", r.globalData.userInfo.address = o.address;
                });
            }
        });
    },
    confirmPay: function(r) {
        var o = e.data.deliveryAddr;
        if (o) if (o.username && o.phone && null !== o.province && null !== o.city && o.address) {
            o.district || (o.district = ""), t.loading();
            var i = [];
            e.data.list.forEach(function(e) {
                var r = {
                    cartId: void 0 != e.id ? e.id : null,
                    goodsId: e.goodsId,
                    goodsSn: e.goods.goodsSn,
                    name: e.goods.name,
                    pic: e.pic,
                    number: e.number,
                    amount: e.goods.price
                };
                null != e.attrs && "" != e.attrs && (r.attrs = JSON.stringify(e.attrs)), i.push(r);
            });
            var s = {
                list: JSON.stringify(i),
                deliveryFee: e.data.carriage,
                totalPrice: e.data.totalPrice,
                rebatePrice: e.data.rebatePrice,
                rebateItemIds: e.data.rebateItemIds,
                price: e.data.payPrice,
                username: o.username,
                phone: o.phone,
                address: o.province + o.city + o.district + o.address,
                message: r.detail.value.message,
                payWay: 1,
                formId: r.detail.formId
            }, d = e.data.isGroup ? e.data.isGroup : 0;
            s.isGroup = d, e.data.groupMarketId && (s.groupMarketId = e.data.groupMarketId), 
            e.data.groupOrderId && (s.groupOrderId = e.data.groupOrderId), (2 == e.data.masterReceive || 1 == e.data.masterReceive && 2 == d && 1 == e.data.delivery_type) && (s.deliveryType = 1), 
            console.log(s), s.message = void 0 == s.message ? "" : s.message, e.data.enabled_coupon && e.data.coupon && (s.couponId = e.data.coupon.id, 
            s.couponPrice = e.data.coupon.amount), console.log(s), a.createOrders(s, function(e) {
                if (s.id = e.ordersId, s.orderNo = e.orderNo, 0 != s.price) {
                    var r = JSON.parse(e.payJson);
                    wx.hideToast(), wx.requestPayment({
                        appId: r.appId,
                        timeStamp: r.timeStamp,
                        nonceStr: r.nonceStr,
                        package: r.package,
                        signType: r.signType,
                        paySign: r.paySign,
                        success: function(e) {
                            console.log(e), wx.redirectTo({
                                url: "../orderdetail/orderdetail?orderNo=" + s.orderNo
                            });
                        },
                        fail: function(e) {
                            t.alert("提示", "您已取消或支付失败!", function() {
                                wx.redirectTo({
                                    url: "../orderdetail/orderdetail?orderNo=" + s.orderNo
                                });
                            });
                        }
                    });
                } else wx.redirectTo({
                    url: "../orderdetail/orderdetail?orderNo=" + s.orderNo
                });
            });
        } else t.toast("请先完善收货地址信息"); else t.toast("请选择收货地址");
    },
    showExplain: function() {
        this.setData({
            show_explain: !0
        });
    },
    closeExplain: function() {
        this.setData({
            show_explain: !1
        });
    },
    chooseDeliveryway: function(a) {
        var t = a.currentTarget.dataset.way;
        this.setData({
            delivery_type: t
        }), 0 == t ? r.getUserInfo(function(r) {
            e.setData({
                deliveryAddr: {
                    username: r.username,
                    phone: r.phone,
                    province: r.province,
                    city: r.city,
                    district: r.disctrict ? r.district : "",
                    address: r.address
                }
            });
        }) : this.getGroupMasterAddress(function(r) {
            e.setData({
                deliveryAddr: {
                    username: r.username,
                    phone: r.phone,
                    province: "",
                    city: "",
                    district: "",
                    address: r.groupMasterAddress
                }
            });
        });
    },
    getGroupMasterAddress: function(r) {
        e.data.groupAddress ? r(e.data.groupAddress) : a.getGroupAddress(e.data.groupOrderId, function(a) {
            e.setData({
                groupAddress: a
            }), r(e.data.groupAddress);
        });
    },
    dealWithGroup: function(e, r) {
        1 == r && (1 == e ? this.setData({
            tip_message: "若团员选择团长代收，团员商品将一起发货给你哦",
            tip_detail_message: "拼团商品可以在提交订单时选择团长代收, 这样也可以免除团员的邮费哦\n团长收货后会发给团员, 团员也可以向团长领取哦"
        }) : 2 == e && this.setData({
            tip_message: "所有团员购买的商品都由团长你代收",
            tip_detail_message: "该拼团商品商家设置必须由团长代收, 成团后商品统一发货给团长, 这样也可以免除团员的邮费哦\n团长收货后会分发给团员, 团员也可以向团长领取哦"
        }));
    }
});