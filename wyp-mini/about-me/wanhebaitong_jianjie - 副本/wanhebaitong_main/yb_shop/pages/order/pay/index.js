var t = getApp(), o = t.requirejs("core");

Page({
    data: {
        icons: t.requirejs("icons"),
        success: !1,
        successData: {},
        button_color: t.config.button_color
    },
    onLoad: function(t) {
        o.setting(), this.setData({
            options: t,
            button_color: getApp().config.button_color,
            font_color: getApp().config.font_color,
            config: getApp().config
        });
    },
    onShow: function() {
        this.get_list();
    },
    get_list: function() {
        var t = this;
        o.get("pay/OrderInfo", {
            order_id: t.data.options.id
        }, function(e) {
            0 == e.code ? t.setData({
                list: e.info,
                show: !0
            }) : (o.alert(e.msg), setTimeout(function() {
                wx.navigateBack();
            }, 1e3));
        });
    },
    pay: function(t) {
        var e = this;
        e.setData({
            formid: t.detail.formId
        }), o.get("Pay/Pay", {
            out_trade_no: e.data.list.out_trade_no,
            openid: getApp().getCache("userinfo").openid
        }, function(t) {
            console.log(t), 0 == t.code ? wx.requestPayment({
                timeStamp: t.info.timeStamp,
                nonceStr: t.info.nonceStr,
                package: t.info.package,
                signType: "MD5",
                paySign: t.info.paySign,
                success: function(t) {
                    "requestPayment:ok" == t.errMsg ? (wx.setNavigationBarTitle({
                        title: "支付成功"
                    }), e.setData({
                        success: !0,
                        "list.order_status": 1
                    }), o.get("Wxpush/PayOrderPush", {
                        out_trade_no: e.data.list.out_trade_no,
                        formid: e.data.formid,
                        uid: getApp().getCache("userinfo").uid
                    }, function(t) {
                        console.log(t);
                    })) : (o.alert("支付失败！"), wx.redirectTo({
                        url: "/yb_shop/pages/order/index"
                    }));
                },
                fail: function(t) {
                    o.alert("您已经取消支付！"), wx.redirectTo({
                        url: "/yb_shop/pages/order/index"
                    });
                }
            }) : (o.alert(t.msg), setTimeout(function() {
                wx.navigateBack();
            }, 1e3));
        });
    },
    phone: function(t) {
        o.phone(t);
    }
});