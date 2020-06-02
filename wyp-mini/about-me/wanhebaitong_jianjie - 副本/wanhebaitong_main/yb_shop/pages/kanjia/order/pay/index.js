var t = getApp(), e = t.requirejs("core");

Page({
    data: {
        icons: t.requirejs("icons"),
        success: !1,
        successData: {},
        button_color: t.config.button_color
    },
    onLoad: function(t) {
        this.setData({
            options: t
        });
    },
    onShow: function() {
        this.get_list();
    },
    get_list: function() {
        var t = this;
        e.get("Bargain/OrderInfo", {
            order_id: t.data.options.id
        }, function(o) {
            0 == o.code ? t.setData({
                list: o.info,
                show: !0
            }) : e.alert(o.msg);
        });
    },
    pay: function(t) {
        e.pdata(t).type;
        var o = this;
        e.get("Bargain/Pay", {
            out_trade_no: o.data.list.out_trade_no,
            openid: getApp().getCache("userinfo").openid
        }, function(t) {
            console.log(t), 0 == t.code ? wx.requestPayment({
                timeStamp: t.info.timeStamp,
                nonceStr: t.info.nonceStr,
                package: t.info.package,
                signType: "MD5",
                paySign: t.info.paySign,
                success: function(t) {
                    if (console.log(t), "requestPayment:ok" == t.errMsg) return wx.setNavigationBarTitle({
                        title: "支付成功"
                    }), void o.setData({
                        success: !0,
                        "list.order_status": 1
                    });
                    e.alert("支付失败！"), wx.redirectTo({
                        url: "/yb_shop/pages/kanjia/order/index"
                    });
                },
                fail: function(t) {
                    e.alert("您已经取消支付！"), wx.redirectTo({
                        url: "/yb_shop/pages/kanjia/order/index"
                    });
                }
            }) : e.alert(t.msg);
        });
    },
    phone: function(t) {
        e.phone(t);
    }
});