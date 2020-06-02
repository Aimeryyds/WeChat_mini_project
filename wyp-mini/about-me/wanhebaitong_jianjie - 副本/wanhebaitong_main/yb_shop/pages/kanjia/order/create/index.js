var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, a = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(a) {
    return void 0 === a ? "undefined" : t(a);
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : void 0 === a ? "undefined" : t(a);
}, o = ("function" == typeof Symbol && a(Symbol.iterator), getApp()), e = o.requirejs("core");

o.requirejs("check");

Page({
    data: {
        icons: o.requirejs("icons"),
        list: {},
        data: [],
        showPicker: !1,
        pvalOld: [ 0, 0, 0 ],
        pval: [ 0, 0, 0 ],
        areas: [],
        noArea: !0,
        submit: !0,
        button_color: o.config.button_color
    },
    onLoad: function(t) {
        e.setting();
        var a = this;
        this.data, this.setData({
            options: t,
            button_color: getApp().config.button_color
        }), e.get("Area/UserAddress", {
            uid: getApp().getCache("userinfo").uid
        }, function(t) {
            0 == t.code ? (a.setData({
                address: t.info.address
            }), e.get("Bargain/GoodsInfo", {
                id: a.data.options.bargain_id
            }, function(t) {
                0 == t.code ? (a.setData({
                    list: t.info.bargain_info,
                    show: !0
                }), a.caculate()) : e.alert(t.msg);
            }, !0)) : e.alert(t.msg);
        });
    },
    onShow: function() {
        var t = o.getCache("orderAddress");
        t && (this.setData({
            address: t
        }), this.caculate());
    },
    toggle: function(t) {
        var a = e.pdata(t), o = a.id, i = {};
        i[a.type] = 0 == o || void 0 === o ? 1 : 0, this.setData(i);
    },
    phone: function(t) {
        e.phone(t);
    },
    caculate: function() {
        var t = this, a = t.data.address;
        a.order_money = t.data.options.current_price, a.pay_money = t.data.options.current_price, 
        a.total = t.data.options.total, a.user_name = getApp().getCache("userinfo").nickName, 
        a.buyer_id = getApp().getCache("userinfo").uid, a.mch_id = t.data.list.mch_id, a.activity_order_type = t.data.options.activity_order_type ? t.data.options.activity_order_type : 0, 
        a.bargain_id = t.data.options.bargain_id, t.setData({
            data: a
        });
    },
    submit: function() {
        var t = this, a = this.data;
        if (a.submit) {
            if (!a.address.phone || "" == a.address.province) return e.alert("请选择收货地址！"), !1;
            e.get("Bargain/CreateOrder", a.data, function(a) {
                0 == a.code ? (t.setData({
                    submit: !1,
                    order_id: a.info
                }), wx.navigateTo({
                    url: "/yb_shop/pages/kanjia/order/pay/index?id=" + a.info
                })) : e.alert(a.msg);
            });
        } else wx.navigateTo({
            url: "/yb_shop/pages/kanjia/order/pay/index?id=" + t.data.order_id
        });
    },
    dataChange: function(t) {
        var a = this.data.data;
        switch (this.data.list, t.target.id) {
          case "buyer_message":
            a.buyer_message = t.detail.value;
        }
        this.setData({
            data: a
        });
    },
    radioChange: function(t) {
        this.setData({
            data: t
        });
    },
    url: function(t) {
        var a = e.pdata(t).url;
        wx.redirectTo({
            url: a
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    }
});