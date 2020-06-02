var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, e = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
    return void 0 === e ? "undefined" : t(e);
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : t(e);
}, a = ("function" == typeof Symbol && e(Symbol.iterator), getApp()), o = a.requirejs("core");

a.requirejs("check");

Page({
    data: {
        icons: a.requirejs("icons"),
        list: {},
        cart_list: [],
        data: [],
        showPicker: !1,
        pvalOld: [ 0, 0, 0 ],
        pval: [ 0, 0, 0 ],
        areas: [],
        noArea: !0,
        submit: !0,
        coupon_display: !1,
        coupon_num: 0,
        send_type: "express",
        is_mention: 1,
        date: "",
        time: "00:00",
        formid: "",
        button_color: a.config.button_color
    },
    dispatchtype: function(t) {
        var e = this, a = o.pdata(t);
        e.setData(a), e.data.options.type && "cart" == e.data.options.type ? e.cart_caculate() : e.caculate();
    },
    bindDateChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value), o.time_str(t.detail.value + " " + this.data.time) < Date.parse(new Date()) / 1e3 ? o.error("不小于当前时间") : this.setData({
            date: t.detail.value
        });
    },
    bindTimeChange: function(t) {
        console.log("picker发送选择改变，携带值为", t.detail.value), this.setData({
            time: t.detail.value
        });
    },
    onLoad: function(t) {
        o.setting();
        var e = this;
        this.data, this.setData({
            options: t,
            button_color: getApp().config.button_color,
            font_color: getApp().config.font_color,
            config: getApp().config
        }), o.get("user/About", {
            user_id: getApp().getCache("userinfo").uid
        }, function(t) {
            if (0 == t.code) {
                var a = e.data.send_type;
                2 == t.info.is_mention && (a = "selftake"), e.setData({
                    user_level: t.info.user_level,
                    user_rebate: t.info.user_rebate,
                    is_mention: t.info.is_mention,
                    send_type: a
                });
            }
        }), e.data.options.type && "cart" == e.data.options.type ? o.get("goods/CartGoods", e.data.options, function(t) {
            0 == t.code ? (e.setData({
                cart_list: t.info.info,
                "list.address": t.info.address,
                "list.activity": t.info.activity,
                show: !0
            }), e.cart_caculate()) : o.alert(t.msg);
        }) : o.get("goods/GetGoods", e.data.options, function(t) {
            0 == t.code ? (e.setData({
                list: t.info,
                show: !0
            }), e.caculate()) : o.alert(t.msg);
        });
    },
    onShow: function() {
        var t = this, e = a.getCache("orderAddress");
        e && (this.setData({
            "list.address": e
        }), t.data.options.cart_id ? t.cart_caculate() : t.caculate());
    },
    CouponApi: function(t) {
        var e = this, a = [];
        o.get("Market/UserCoupon", {
            user_id: getApp().getCache("userinfo").uid
        }, function(o) {
            if (0 == o.code && 0 < o.info.length) {
                for (var n = Date.parse(new Date()) / 1e3, i = 0; i < o.info.length; i++) t >= o.info[i].satisfy_money && 0 == o.info[i].status && o.info[i].end_time >= n && a.push(o.info[i]);
                a.sort(function(t, e) {
                    return parseFloat(e.satisfy_money) - parseFloat(t.satisfy_money);
                }), e.setData({
                    coupon: a,
                    coupon_num: a.length
                });
            }
        });
    },
    select: function(t) {
        var e = this, a = e.data.data.order_money, n = e.data.discount_money, i = o.pdata(t);
        1 == i.together ? (e.setData({
            "data.discount_money": 0
        }), n = 0) : (n || (n = 0), e.setData({
            "data.discount_money": n
        }));
        var s = parseFloat(a) - parseFloat(n) - parseFloat(i.coupon_money);
        e.setData({
            "data.coupon_id": i.id,
            "data.coupon_money": i.coupon_money,
            "data.pay_money": parseFloat(s).toFixed(2),
            coupon_display: !1
        });
    },
    open_coupon: function() {
        var t = !this.data.coupon_display;
        this.setData({
            coupon_display: t
        });
    },
    toggle: function(t) {
        var e = o.pdata(t), a = e.id, n = {};
        n[e.type] = 0 == a || void 0 === a ? 1 : 0, this.setData(n);
    },
    phone: function(t) {
        o.phone(t);
    },
    number: function(t) {
        var e = "", a = o.data(t).action;
        "minus" == a ? e = parseInt(this.data.options.total) - 1 : "plus" == a && (e = parseInt(this.data.options.total) + 1), 
        this.setData({
            "options.total": e
        }), this.caculate();
    },
    cart_number: function(t) {
        o.pdata(t).id;
        var e = o.pdata(t).key, a = this.data.cart_list, n = o.data(t).action;
        "minus" == n ? a[e].num = parseInt(a[e].num) - 1 : "plus" == n && (a[e].num = parseInt(a[e].num) + 1), 
        this.setData({
            cart_list: a
        }), this.cart_caculate();
    },
    caculate: function() {
        var t = this, e = 0, a = t.data.list.activity, o = t.data.list.address;
        o.order_money = parseFloat(t.data.options.total * t.data.list.price).toFixed(2), 
        t.CouponApi(o.order_money), console.log(o.order_money);
        for (var n = 0; n < a.length; n++) if (console.log(a[n].satisfy_money), console.log(o.order_money), 
        parseFloat(o.order_money) >= parseFloat(a[n].satisfy_money)) {
            e = a[n].discount_money, o.discount_money = a[n].discount_money, o.discount_id = a[n].id;
            break;
        }
        var i = 0;
        if (t.data.user_level && 0 != t.data.user_level && t.data.user_rebate && t.data.user_rebate < 10 && (i = (i = parseFloat(o.order_money) * (1 - parseFloat(t.data.user_rebate) / 10)).toFixed(2)), 
        o.rebate_money = i, "express" == t.data.send_type && "selftake" != t.data.send_type) if (null != t.data.list.post_fee && null != t.data.list.post_fee) {
            var s = t.data.list.post_fee, r = Math.ceil((parseInt(t.data.options.total) - parseInt(s.bynum_snum)) / parseInt(s.bynum_xnum)), d = 0 < r ? r * parseFloat(s.bynum_xprice) : 0;
            o.shipping_money = parseFloat(s.bynum_sprice) + parseFloat(d);
        } else o.shipping_money = 0; else o.shipping_money = 0;
        o.pay_money = parseFloat(parseInt(t.data.options.total) * parseFloat(t.data.list.price) + o.shipping_money - parseFloat(e) - parseFloat(i)).toFixed(2), 
        parseFloat(o.pay_money) < 0 && (o.pay_money = 0), o.sku_id = t.data.options.sku_id + ":" + t.data.options.total, 
        o.user_name = getApp().getCache("userinfo").nickName, o.buyer_id = getApp().getCache("userinfo").uid, 
        t.setData({
            data: o,
            discount_money: e || 0,
            rebate_money: i
        });
    },
    cart_caculate: function() {
        var t = this, e = 0, a = t.data.list.activity, o = 0, n = this.data.options, i = this.data.cart_list, s = t.data.list.address, r = 0, d = 0, p = 0, u = "";
        i.forEach(function(e) {
            if (r += parseFloat(e.num * e.price.price), null != e.post_fee && null != e.post_fee && "selftake" != t.data.send_type) {
                var a = e.post_fee, n = Math.ceil((parseInt(e.num) - parseInt(a.bynum_snum)) / parseInt(a.bynum_xnum)), i = 0 < n ? n * parseFloat(a.bynum_xprice) : 0;
                d += parseFloat(a.bynum_sprice) + parseFloat(i);
            }
            u += e.sku_id + ":" + e.num + ",", o += e.num;
        }), t.CouponApi(r);
        for (var l = 0; l < a.length; l++) if (r >= a[l].satisfy_money) {
            e = a[l].discount_money, s.discount_money = a[l].discount_money, s.discount_id = a[l].id;
            break;
        }
        var c = 0;
        t.data.user_level && 0 != t.data.user_level && t.data.user_rebate && t.data.user_rebate < 10 && (c = (c = parseFloat(r) * (1 - parseFloat(t.data.user_rebate) / 10)).toFixed(2)), 
        s.rebate_money = c, p = parseFloat(r + d - e - c).toFixed(2), s.order_money = parseFloat(r).toFixed(2), 
        "express" == t.data.send_type ? s.shipping_money = d : s.shipping_money = 0, parseFloat(p) < 0 && (p = 0), 
        s.pay_money = p, s.sku_id = u, s.user_name = getApp().getCache("userinfo").nickName, 
        s.buyer_id = getApp().getCache("userinfo").uid, t.setData({
            data: s,
            discount_money: e || 0,
            rebate_money: c
        }), n.total = o, t.setData({
            options: n
        });
    },
    submit: function(t) {
        var e = this, a = this.data;
        if (e.setData({
            formid: t.detail.formId
        }), a.submit) {
            if ("selftake" == a.send_type) {
                if (!a.data.phone) return o.error("请填写姓名"), !1;
                if (!a.data.phone) return o.error("请填写电话"), !1;
                if (!a.date) return o.error("请选择自提时间"), !1;
                a.data.mention_time = o.time_str(a.date + " " + a.time), a.data.mailing_type = 2;
            } else {
                if (!a.list.address.phone || "" == a.list.address.province) return o.error("请选择收货地址！"), 
                !1;
                a.data.mailing_type = 1;
            }
            o.get("Order/CreateOrder", a.data, function(t) {
                0 == t.code ? (o.get("Wxpush/CreateOrderPush", {
                    order_id: t.info,
                    formid: e.data.formid,
                    uid: getApp().getCache("userinfo").uid
                }, function(t) {
                    console.log(t);
                }), e.setData({
                    order_id: t.info
                }), e.data.options.cart_id && o.get("Cart/DelCart", {
                    cart_id: e.data.options.cart_id
                }, function(t) {
                    t.code, console.log(t);
                }), e.setData({
                    submit: !1
                }), wx.navigateTo({
                    url: "/yb_shop/pages/order/pay/index?id=" + t.info
                })) : o.alert(t.msg);
            });
        } else wx.navigateTo({
            url: "/yb_shop/pages/order/pay/index?id=" + e.data.order_id
        });
    },
    dataChange: function(t) {
        var e = this.data.data;
        switch (this.data.list, t.target.id) {
          case "buyer_message":
            e.buyer_message = t.detail.value;
            break;

          case "consigner":
            e.consigner = t.detail.value;
            break;

          case "phone":
            e.phone = t.detail.value;
        }
        this.setData({
            data: e
        });
    },
    radioChange: function(t) {
        this.setData({
            data: t
        });
    },
    url: function(t) {
        var e = o.pdata(t).url;
        wx.redirectTo({
            url: e
        });
    },
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh();
    }
});