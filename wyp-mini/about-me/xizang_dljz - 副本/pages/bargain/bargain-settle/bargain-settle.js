var e = getApp(), r = require("../../../utils/functions"), t = require("../../../utils/util");

Page({
    data: {
        list: [],
        enabled_coupon: !0,
        deliveryAddr: null,
        carriage: 0,
        totalPrice: 0,
        payPrice: 0,
        originalPrice: 0,
        settle_over: 1,
        show_stock: 0
    },
    onLoad: function(r) {
        var t = this, a = JSON.parse(decodeURIComponent(r.orders));
        console.log(a);
        var i = [];
        a.list = a.list.map(function(e) {
            return e.attrs && "" != e.attrs && (e.attrsStr = JSON.parse(e.attrs).join(" & ")), 
            i.push(e), e;
        }), this.data.bargain_id = a.bargain_id, this.data.order_id = a.order_id, this.data.attrs = a.attrs, 
        this.data.buyType = a.buyType, e.getUserInfo(function(e) {
            t.setData({
                deliveryAddr: {
                    username: e.username,
                    phone: e.phone,
                    province: e.province,
                    city: e.city,
                    district: e.disctrict ? e.district : "",
                    address: e.address
                }
            });
        });
        var s = parseFloat(a.totalPrice) - parseFloat(a.cutPrice) + parseFloat(a.deliveryFee);
        this.setData({
            list: a.list,
            payPrice: s.toFixed(2),
            cutPrice: a.cutPrice,
            carriage: a.deliveryFee,
            totalPrice: a.totalPrice
        });
    },
    confirmPay: function(e) {
        var a = this, i = this.data.deliveryAddr;
        if (i) if (i.username && i.phone && null !== i.province && null !== i.city && i.address) {
            if (0 != this.data.settle_over) {
                this.data.settle_over = 0;
                var s = this.data.bargain_id, o = this.data.order_id, d = this.data.attrs, n = this.data.buyType, c = i.username, l = i.phone, u = i.province + i.city + i.district + i.address, p = e.detail.value.message;
                t.loading(), r.createBargainOrder({
                    bargainId: s,
                    id: o,
                    attrs: d,
                    buyType: n,
                    address: u,
                    username: c,
                    phone: l,
                    message: p,
                    formId: e.detail.formId
                }, function(e) {
                    if (console.log(e), wx.hideLoading(), a.data.settle_over = 1, 0 != a.data.payPrice) {
                        var r = JSON.parse(e.payJson);
                        wx.requestPayment({
                            appId: r.appId,
                            timeStamp: r.timeStamp,
                            nonceStr: r.nonceStr,
                            package: r.package,
                            signType: r.signType,
                            paySign: r.paySign,
                            success: function(r) {
                                wx.redirectTo({
                                    url: "../../orderdetail/orderdetail?orderNo=" + e.orderNo
                                });
                            },
                            fail: function(r) {
                                t.alert("提示", "您已取消或支付失败!", function() {
                                    wx.redirectTo({
                                        url: "../../orderdetail/orderdetail?orderNo=" + e.orderNo
                                    });
                                });
                            }
                        });
                    } else wx.redirectTo({
                        url: "../../orderdetail/orderdetail?orderNo=" + e.orderNo
                    });
                });
            }
        } else t.toast("请先完善收货地址信息"); else t.toast("请选择收货地址");
    },
    chooseAddress: function() {
        var t = this;
        wx.chooseAddress({
            success: function(a) {
                var i = {
                    username: a.userName,
                    phone: a.telNumber,
                    province: a.provinceName,
                    city: a.cityName,
                    district: a.countyName,
                    address: a.detailInfo
                };
                t.setData({
                    deliveryAddr: i
                }), r.updateAddr(i, function(r) {
                    e.globalData.userInfo.username = i.username, e.globalData.userInfo.phone = i.phone, 
                    e.globalData.userInfo.province = i.province, e.globalData.userInfo.city = i.city, 
                    e.globalData.userInfo.district = i.district ? i.district : "", e.globalData.userInfo.address = i.address;
                });
            }
        });
    }
});