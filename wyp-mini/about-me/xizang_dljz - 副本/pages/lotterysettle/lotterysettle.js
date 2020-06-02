getApp();

var e, t = require("../../utils/functions"), r = require("../../utils/util");

Page({
    data: {
        deliveryAddr: null,
        lottery: null,
        lotteryId: null,
        goods: null
    },
    onLoad: function(t) {
        (e = this).data.lotteryId = t.lotteryId, e.getLotteryInfo();
    },
    onShow: function() {
        null == e.data.deliveryAddr && e.getDelivery();
    },
    getDelivery: function() {
        t.getDefaultAddr(function(t) {
            null != t.address && e.setData({
                deliveryAddr: t.address
            });
        });
    },
    getLotteryInfo: function() {
        r.loading(), t.getLotteryInfo(e.data.lotteryId, function(t) {
            var r = t.lottery.ext.split("-");
            r.length > 1 && (t.goods.attrs = JSON.parse(r[1]), t.goods.attrsStr = t.goods.attrs.join(" & ")), 
            wx.hideToast(), e.setData({
                lottery: t.lottery,
                goods: t.goods
            });
        });
    },
    chooseAddress: function() {
        var t = e.data.deliveryAddr, r = "../addresslist/addresslist?chooseId=" + (null == t ? 0 : t.id);
        wx.navigateTo({
            url: r
        });
    },
    confirmPay: function(o) {
        var d = e.data.deliveryAddr;
        if (d) {
            r.loading();
            var a = e.data.goods, s = {
                cartId: null,
                goodsId: a.id,
                goodsSn: a.goodsSn,
                name: a.name,
                pic: a.thumb,
                number: 1,
                amount: a.price,
                attrs: a.attrs
            }, i = {
                lotteryId: e.data.lotteryId,
                list: JSON.stringify([ s ]),
                deliveryFee: 0,
                totalPrice: a.price,
                price: 0,
                couponPrice: a.price,
                username: d.username,
                phone: d.phone,
                address: d.province + d.city + d.district + d.address,
                message: o.detail.value.message,
                payWay: 3
            };
            i.message = void 0 == i.message ? "" : i.message, console.log(i), t.lotteryCreateOrders(i, function(e) {
                wx.hideToast(), i.id = e.ordersId, i.orderNo = e.orderNo, wx.redirectTo({
                    url: "../orderdetail/orderdetail?orderNo=" + i.orderNo
                });
            });
        } else r.toast("请选择收货地址");
    }
});