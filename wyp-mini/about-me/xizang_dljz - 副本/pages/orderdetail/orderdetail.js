function e(o) {
    var n = null;
    o <= 0 ? (clearTimeout(r), t.getOrdersDetail()) : (n = a.countdown(o), r = setTimeout(function() {
        e(o - 10);
    }, 10)), t.setData({
        clock: n
    });
}

var t, r, o = getApp(), a = require("../../utils/util"), n = require("../../utils/functions");

Page({
    data: {
        shop: null,
        orders: {},
        clock: null
    },
    onLoad: function(e) {
        t = this, o.getShopInfo(function(e) {
            t.setData({
                shop: e
            });
        }), t.data.orders.orderNo = e.orderNo, t.getOrderDetail();
    },
    onShow: function() {},
    onHide: function() {
        clearTimeout(r);
    },
    onUnload: function() {
        clearTimeout(r);
    },
    getOrderDetail: function() {
        a.loading(), n.getOrdersDetail(t.data.orders.orderNo, function(r) {
            wx.hideToast();
            var o = r.orders;
            1 == o.status && null != r.msec && r.msec > 0 && e(r.msec), o.totalPrice = o.totalPrice.toFixed(2), 
            o.deliveryFee = o.deliveryFee.toFixed(2), o.couponPrice = o.couponPrice.toFixed(2), 
            o.price = o.price.toFixed(2), o.itemList.forEach(function(e) {
                e.attrs && (e.attrsStr = JSON.parse(e.attrs).join(" & "));
            }), o.deliveryInfo = r.deliveryInfo, t.setData({
                orders: r.orders
            });
        });
    },
    pay: function() {
        n.getPayJson({
            ordersNo: t.data.orders.orderNo
        }, function(e) {
            var r = JSON.parse(e.payJson);
            wx.requestPayment({
                appId: r.appId,
                timeStamp: r.timeStamp,
                nonceStr: r.nonceStr,
                package: r.package,
                signType: r.signType,
                paySign: r.paySign,
                success: function(e) {
                    a.toast("支付成功！", function() {
                        t.data.orders.status = 2, t.data.orders.payTime = a.formatTime(new Date()), t.setData({
                            orders: t.data.orders
                        });
                    });
                },
                fail: function(e) {
                    a.alert("提示", "您已取消或支付失败!");
                }
            });
        });
    },
    cancel: function(e) {
        a.confirm("确认取消该订单？", "", function() {
            n.deleteOrders(t.data.orders.orderNo, function(e) {
                a.toast("订单已取消", function() {
                    t.data.orders.status = 6, t.data.orders.cancelTime = a.formatTime(new Date()), t.setData({
                        orders: t.data.orders
                    });
                });
            });
        });
    },
    receive: function(e) {
        a.confirm("确认商品已送达？", "", function() {
            n.receiptOrders(t.data.orders.orderNo, function(e) {
                t.data.orders.status = 4, t.data.orders.finishTime = a.formatTime(new Date()), t.setData({
                    orders: t.data.orders
                });
            });
        });
    },
    go2Comment: function(e) {
        var t = this.data.orders, r = {
            id: t.id,
            username: t.username,
            phone: t.phone,
            ordersNo: t.orderNo,
            itemList: t.itemList
        };
        wx.navigateTo({
            url: "../comment/comment?orders=" + encodeURIComponent(JSON.stringify(r))
        });
    },
    go2CommentDetail: function(e) {
        var t = e.currentTarget.id;
        wx.navigateTo({
            url: "../commentdetail/commentdetail?commentId=" + t
        });
    },
    concat: function() {
        o.concat();
    },
    clickShopItem: function(e) {
        var t = e.currentTarget.dataset.id, r = e.currentTarget.dataset.barurl;
        if (t) wx.redirectTo({
            url: r
        }); else {
            var o = e.currentTarget.dataset.url;
            wx.redirectTo({
                url: o
            });
        }
    }
});