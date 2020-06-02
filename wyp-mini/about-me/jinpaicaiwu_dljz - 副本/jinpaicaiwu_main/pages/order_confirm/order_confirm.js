var a, t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
    return typeof a;
} : function(a) {
    return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
}, e = Object.assign || function(a) {
    for (var t = 1; t < arguments.length; t++) {
        var e = arguments[t];
        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (a[i] = e[i]);
    }
    return a;
}, i = (function(a) {
    a && a.__esModule;
}(require("../../wxParse/util.js")), require("../../wxParse/common.js")), d = require("../../static/config.js"), s = getApp(), r = [], n = [];

Page({
    data: {
        Select: !1,
        flag: !0,
        animationData: {},
        carts: [],
        selectCarts: [],
        total_price: 0,
        base_price: 0,
        nowtime: "",
        oid: "",
        cuser: [],
        order: {
            id: 1,
            number: "A4501354410893725",
            url: "/image/o1.jpg",
            name: "坚果零食大礼包",
            count: "3个",
            status: 0,
            money: "450",
            time: "2017-7-5 17:30"
        },
        pay_ways: [ {
            way_id: 1,
            src: "../../../image/wx.png"
        } ],
        pay_way_id: 1,
        delivery_mode: [],
        delivery_time: [],
        coupon_mode: [ {
            name: "未使用"
        } ],
        integral_mode: [ 0 ],
        balance_mode: [ 0 ],
        index_mode: 0,
        index_time: 0,
        index_coupon: 0,
        index_integral: 0,
        index_balance: 0,
        delivery_money: 20,
        integral_money: 0,
        delivery_addr: !1,
        start_date: "",
        end_date: "",
        date: "",
        time: "9:00-12:00",
        message: "",
        address: {
            name: "",
            phone: "",
            detail: ""
        },
        coupon: 0,
        integral: 0,
        balance: 0,
        invoice_mode: [ "不需要", "需要" ],
        index_invoice: 0,
        invoice: "",
        pay_mode: [ "在线支付" ],
        index_pay: 0,
        lastPrice: 0,
        openid: "",
        usercinfo: [],
        ujfdata: [],
        perdata: [],
        yhjid: 0,
        yhjdid: 0,
        yhjprice: 0,
        MessageSwitch: "",
        pickaddrindex: 0,
        TextModification: "",
        dis_key: !1,
        dis_id: 0,
        yhm_enable: !1,
        yhm_money: 0,
        yhmcode: "",
        yhm_type_data: "",
        taxmoney: 0,
        tax_rate: 0,
        taxpayerID: ""
    },
    submitOrder: function(a) {
        wx.showLoading({
            title: "请求中",
            mask: !0
        });
        var t = wx.getStorageSync("openid"), e = this.data.delivery_addr, d = this.data.MessageSwitch, r = this.data.dis_key, n = a.detail.formId;
        if ("1" == d) {
            var o = this.data.message, c = this.data.TextModification;
            if ("" == o || 0 == o.length) return wx.showToast({
                icon: "none",
                title: "请先添加" + c
            }), !1;
        }
        h = !1;
        if (!r) return wx.showToast({
            title: "请选择配送方式"
        }), !1;
        if (r > 1 && !e) return wx.showToast({
            title: "请先添加收货人信息"
        }), !1;
        if (1 == r && this.data.pickupaddrs && this.data.pickupaddrs.length > 0) {
            if (this.data.pickaddrindex < this.data.pickupaddrs.length) var h = this.data.pickupaddrs[this.data.pickaddrindex].id;
            var l = this.data.pickname, _ = this.data.pickphone;
            if (!l || !_) return wx.showToast({
                title: "请先添加联系人信息"
            }), !1;
        }
        var p = this.data.total_price, u = this.data.index_time, f = this.data.delivery_time, y = this.data.selectCarts, m = this.data.carts, v = this.data.fr, g = this.data.yhmcode, x = this.data.yhm_money, w = {
            delivery_date: this.data.date,
            delivery_time: f[u],
            address: this.data.address,
            message: this.data.message,
            invoice: this.data.invoice,
            total_price: this.data.total_price,
            lastPrice: this.data.lastPrice,
            yeprice: this.data.balance,
            jfnum: this.data.integral,
            jfprice: this.data.integral_money,
            yhjid: this.data.yhjid,
            yhjdid: this.data.yhjdid,
            yhjprice: this.data.yhjprice,
            dis_key: this.data.dis_key,
            dis_id: this.data.dis_id,
            ifee: this.data.ifee,
            cashval: this.data.cashval,
            pickname: l,
            pickphone: _,
            taxmoney: this.data.taxmoney,
            tax_rate: this.data.tax_rate,
            base_price: this.data.base_price,
            taxpayerID: this.data.taxpayerID
        };
        h && (w.pickupval = h), l && (w.pickname = l), _ && (w.pickphone = _);
        var b = wx.getStorageSync("fxid"), k = this;
        s.apiRequest("order", "createOrder", {
            data: {
                cart: JSON.stringify(y),
                order_data: JSON.stringify(w),
                fr: k.data.fr,
                formId: n,
                fxid: b,
                yhmcode: g,
                yhm_money: x
            },
            success: function(a) {
                if ("OK" == a.data.result) {
                    var e = a.data.oid;
                    if (s.apiRequest("order", "createOrderNotice", {
                        data: {
                            oid: e
                        },
                        success: function() {}
                    }), "cart" == v) {
                        var d = [];
                        m.forEach(function(a) {
                            a.selected || d.push(a);
                        }), s.globalData.carts = d;
                    }
                    var r = k.data.index_pay, n = k.data.cashresult;
                    if (n[r]) {
                        var o = n[r];
                        if ("2" == o.key || "0" == o.key) return wx.hideLoading(), "0" == o.paraval.paytype || "0" == o.key ? wx.redirectTo({
                            url: "/pages/order_detail/order_detail?oid=" + e
                        }) : wx.redirectTo({
                            url: "/pages/showsuccess/showsuccess?id=" + o.id + "&oid=" + e + "&total_price=" + p
                        }), !1;
                    }
                    s.apiRequest("order", "dopayment", {
                        data: {
                            oid: e,
                            method: "POST",
                            mark: "new"
                        },
                        success: function(a) {
                            if ("OK" != a.data.result) {
                                var d = a.data.errmsg || "支付失败";
                                return wx.showToast({
                                    title: d
                                }), !1;
                            }
                            if (wx.hideLoading(), a.data.wxPrice > 0) {
                                var r = {
                                    oid: e,
                                    openid: t,
                                    mark: "new"
                                };
                                s.apiRequest("order", "getprepay_id", {
                                    data: {
                                        data: JSON.stringify(r),
                                        method: "POST"
                                    },
                                    success: function(a) {
                                        if ("OK" == a.data.result) a.data.oid = e, i.pay(a.data); else {
                                            var t = a.data.errmsg || "支付失败";
                                            wx.showToast({
                                                title: t
                                            });
                                        }
                                    }
                                });
                            } else wx.showToast({
                                title: "支付成功！",
                                icon: "success",
                                duration: 2500
                            }), wx.redirectTo({
                                url: "../order_detail/order_detail?oid=" + e
                            });
                        }
                    });
                } else "2" == a.data.errmsg ? (wx.showToast({
                    title: "请先登录"
                }), wx.navigateTo({
                    url: "../login/login"
                })) : wx.showToast({
                    title: a.data.errmsg
                });
            }
        });
    },
    addCount: function(a) {
        this.setData({
            flag: !1
        });
        var t = wx.createAnimation({
            duration: 200,
            timingFunction: "ease",
            delay: 100,
            transformOrigin: "50% 50%",
            opacity: "1"
        });
        this.setData({
            animationData: t.export()
        });
    },
    hide: function() {
        this.setData({
            flag: !0
        });
    },
    deal_des_cash: function(a) {
        var t = this.data.address, e = this.data.dis_plus_cash || [], i = this.data.dis_plus_area || [];
        if (!e || !i) return !1;
        var d = e[a], s = "", r = t.dist_id, n = t.city_id, o = t.prov_id;
        for (var c in i) i[c].area_id == o && (s = i[c].distribution_ext_id), i[c].area_id == n && (s = i[c].distribution_ext_id), 
        i[c].area_id == r && (s = i[c].distribution_ext_id);
        return !(!s || !d[s]) && d[s];
    },
    parsePrice: function(a) {
        var t = parseFloat(a);
        return (t += 1e-7) ? parseFloat(t.toFixed(2)) : 0;
    },
    changeBalanceMode: function() {
        var a = this.parsePrice, t = this.data.ujfdata, e = a(this.data.balance), i = a(this.data.base_price);
        i = a(i + (a(this.data.ifee) || 0) + (a(this.data.payfee) || 0) + (a(this.data.taxmoney) || 0) - (a(this.data.yhm_money) || 0) - (a(this.data.yhjprice) || 0) - (a(this.data.integral_money) || 0));
        var d = a(t.account_money) > i ? i : a(t.account_money);
        e > d && (e = d), i -= e;
        var s = [ 0 ];
        if (d < 1) s.unshift(d); else if (d < 10) {
            for (r = 1; r <= d; r += 1) s.unshift(r);
            s[0] = d;
        } else {
            for (var r = 10; r <= d; r += 10) s.unshift(r);
            s[0] = d;
        }
        this.setData({
            balance_mode: s,
            balance: e.toFixed(2),
            total_price: i.toFixed(2)
        });
    },
    bindpickupaddrChange: function(a) {
        this.setData({
            pickaddrindex: a.detail.value
        });
    },
    bindPickerChange: function(a) {
        var t = this.parsePrice;
        this.parsePrice;
        if (a) i = a.detail.value; else var i = this.data.index_mode;
        var d = t(this.data.weight), s = this.data.disresult;
        if (!s || !s[i]) return !1;
        var r = e({}, s[i]);
        if (r.id) {
            var n = this.deal_des_cash(r.id);
            n ? (r.f_fee = n.f_fee, r.f_weight = n.f_weight, r.r_fee = n.r_fee, 1 * n.free_fee > 0 && (r.free_fee = 1 * n.free_fee), 
            r.r_weight = n.r_weight) : r = s[i];
        }
        var o = t(this.data.ifee) || 0, c = t(this.data.payfee) || 0, h = t(this.data.total_price) - o - c, l = t(this.data.lastPrice) - o - c, _ = t(this.data.payInfo.unity_set);
        r.key > 1 && (!r.free_fee || l < r.free_fee) ? (h += o = _ && "1" == _ ? t(this.data.payInfo.unity_fee) : 0 == d ? 0 : d < r.f_weight ? t(r.f_fee) : 0 == t(r.r_weight) ? t(r.f_fee) : t(r.f_fee) + (d - t(r.f_weight)) / t(r.r_weight) * t(r.r_fee), 
        l += o) : o = 0, h += c, l += c, this.setData({
            index_mode: i,
            total_price: h.toFixed(2),
            dis_key: r.key,
            dis_id: r.id,
            delivery_title: r.title,
            ifee: o.toFixed(2),
            lastPrice: l.toFixed(2)
        }), this.changeBalanceMode();
    },
    bindDateChange: function(t) {
        t.detail.value == a ? this.setData({
            date: t.detail.value,
            index_time: 0,
            index: 0,
            delivery_time: r
        }) : this.setData({
            date: t.detail.value,
            index_time: 0,
            index: 0,
            delivery_time: n
        });
    },
    bindTimeChange: function(a) {
        this.setData({
            index_time: a.detail.value
        });
    },
    tapAttr: function() {
        var a = this;
        a.selye(a);
    },
    selye: function(a) {
        var t = a.data.Select;
        a.setData({
            Select: !t
        });
        a.parsePrice;
        var e = a.data.total_price, i = a.data.integral_money, d = a.data.ujfdata, s = parseFloat(d.account_money) > e ? e : parseFloat(d.account_money);
        t && (s = 0);
        var r = a.data.yhjprice, n = a.data.lastPrice, o = a.data.yhm_money, c = Number(s);
        c > (n = n - i - r - o) && (c = n), e = n - c, a.setData({
            total_price: e.toFixed(2),
            balance: c.toFixed(2)
        });
    },
    addAddr: function() {
        (!this.data.dis_key || this.data.dis_key > 1) && wx.navigateTo({
            url: "../address-list/address-list"
        });
    },
    pickupEdit: function() {
        1 == this.data.dis_key && wx.navigateTo({
            url: "../pickup_edit/pickup_edit?pickname=" + this.data.pickname + "&pickphone=" + this.data.pickphone
        });
    },
    cancelYhm: function() {
        this.setData({
            flag: !0
        });
    },
    getYhmcode: function() {
        var a = this, t = (a.parsePrice, a.data.yhmcode);
        if ("" == t || t.length < 6 || t.length > 12) return wx.showToast({
            icon: "none",
            title: "请输入正确的优惠码"
        }), !1;
        var e = a.data.yhm_type_data;
        s.apiRequest("order", "get_yhmcode", {
            data: {
                code: t,
                codedata: e,
                version: 1
            },
            success: function(t) {
                var e = !1, i = a.data.total_price, d = a.data.yhjprice, s = a.data.yhm_money, r = 0, n = a.data.lastPrice, o = a.data.balance, c = "优惠码过期或不存在";
                if ("OK" == t.data.result) {
                    var h = t.data.cdata;
                    if (h && 0 != h.length) {
                        var l = h.discount, _ = h.dsum, p = _;
                        if (1 == 1 * h.dis_type) {
                            var u = 1 * h.full, f = 1 * h.money;
                            _ < u ? (c = "优惠码使用条件不满足，还差" + (u - _).toFixed(2) + "元", r = 0, e = !0) : r = f;
                        } else r = (10 - l) * p / 10;
                        i = (i = 1 * i + 1 * d + 1 * s - (r = r.toFixed(2))).toFixed(2);
                        var y = a.data.perdata, m = parseInt(y.redeem_credits) / parseInt(y.redeem_money), v = a.data.integral_money, g = a.data.integral;
                        i < 0 && (g > 0 && (n - r < v && (v = (v = n - r).toFixed(2)), (g = v * m) != parseInt(g) && (v = (v = (g = Math.floor(g)) / m).toFixed(2))), 
                        o > 0 && n - r - v < o && (o = (o = n - r - v).toFixed(2)), i = (i = n - r - v - o).toFixed(2)), 
                        a.setData({
                            integral: g,
                            integral_money: v,
                            yeprice: o,
                            balance: o,
                            yhm_money: r,
                            coupon: 0,
                            index_coupon: 0,
                            yhjid: 0,
                            yhjdid: 0,
                            yhjprice: 0,
                            total_price: i
                        });
                    } else {
                        e = !0;
                        i = (i = 1 * i + 1 * s - r).toFixed(2), a.setData({
                            yhm_money: r,
                            yhmcode: "",
                            total_price: i
                        });
                    }
                    a.changeBalanceMode();
                }
                if (e) return wx.showToast({
                    title: c
                }), !1;
                a.setData({
                    flag: !0
                });
            }
        });
    },
    bindYhmcodeChange: function(a) {
        this.setData({
            yhmcode: a.detail.value
        });
    },
    bindInvoiceChange: function(a) {
        this.setData({
            index_invoice: a.detail.value
        }), this.bindPayChange("");
    },
    bindPayChange: function(a) {
        var t = this.parsePrice, e = (this.parsePrice, a ? a.detail.value : 0), i = this.data.cashresult, d = t(this.data.ifee) || 0, s = t(this.data.payfee) || 0, r = this.data.cashval || 0, n = t(this.data.taxmoney) || 0, o = this.data.tax_rate || 0, c = t(this.data.yhm_money) || 0, h = t(this.data.yhjprice) || 0, l = t(this.data.balance) || 0, _ = t(this.data.integral_money) || 0, p = t(this.data.base_price), u = t(this.data.base_price), f = this.data.index_invoice, y = "";
        if (i[e]) {
            var m = i[e];
            if (r = m.id, m.description && (y = m.description), s = "1" == m.paraval.base_type ? p * m.paraval.base_fee / 100 : m.paraval.base_fee ? t(m.paraval.base_fee) : 0, 
            isNaN(s) && (s = 0), 1 == f) {
                var v = this.data.payInfo.fax_rate;
                n = t(u * v / 100), o = v;
            } else n = 0, o = 0;
            u = u + d + s + n, p = p + d + s + n - c - h - l - _;
        }
        this.setData({
            payfee: s.toFixed(2),
            cashval: r,
            index_pay: e,
            total_price: p.toFixed(2),
            lastPrice: u.toFixed(2),
            description: y,
            taxmoney: n,
            tax_rate: o
        }), this.changeBalanceMode();
    },
    changePay: function(a) {
        var t = a.target.dataset.id;
        this.setData({
            pay_way_id: t
        });
    },
    binkMessageConfirm: function(a) {
        this.setData({
            message: a.detail.value
        });
    },
    bindCouponChange: function(a) {
        this.parsePrice;
        var t = this.data.coupon_mode[a.detail.value], e = this.data.integral_money, i = parseFloat(this.data.lastPrice) || 0, d = this.data.balance, s = parseFloat((1 * t.money).toFixed(2)) || 0, r = this.data.total_price || 0, n = 0;
        if (i >= s) {
            n = i - e - d;
            var o = 0, c = 0, h = 0;
            0 == a.detail.value ? r = n : (r = n - s, o = t.u_id, c = t.ut_id, h = s);
            var l = this.data.perdata, _ = parseInt(l.redeem_credits) / parseInt(l.redeem_money), p = this.data.integral;
            r < 0 && (p > 0 && (i - s < e && (e = (e = i - s).toFixed(2)), (p = e * _) != parseInt(p) && (e = (e = (p = Math.floor(p)) / _).toFixed(2))), 
            d > 0 && i - s - e < d && (d = (d = i - s - e).toFixed(2))), r = (r = i - s - e - d).toFixed(2), 
            this.setData({
                integral: p,
                integral_money: e,
                yeprice: d,
                balance: d,
                yhm_money: 0,
                yhmcode: "",
                index_coupon: a.detail.value,
                yhjid: o,
                yhjdid: c,
                yhjprice: h,
                total_price: r
            }), this.changeBalanceMode();
        } else wx.showToast({
            title: "不满足使用条件！"
        });
    },
    bindIntegralChange: function(a) {
        this.parsePrice;
        var t = this.data.perdata;
        if (0 == t.length) return !1;
        var e = this.data.total_price, i = this.data.lastPrice, d = this.data.integral_money, s = this.data.integral_mode, r = (this.data.integral, 
        this.data.balance), n = this.data.yhjprice, o = this.data.yhm_money, c = s[a.detail.value], h = parseInt(t.redeem_credits) / parseInt(t.redeem_money), l = parseInt(t.limit_val) || 0;
        if (0 == e) return !1;
        if (l > 0) if ("2" == t.limit_type) {
            var _ = parseInt(t.limit_val) / 100, p = parseInt(i * _ * h);
            c > p && (c = p);
        } else c > parseInt(t.limit_val) && (c = parseInt(t.limit_val));
        if (c > i * h && (c = i * h), c >= 1 || 0 == c) {
            if (d = c / h, (i = i - r - n - o) > 0) if (d > i) {
                if (d = i, (c = d * h) % 1 != 0) return wx.showModal({
                    title: "",
                    content: "使用积分数量只能为整数"
                }), !1;
                e = 0;
            } else e = i - d;
            this.setData({
                index_integral: c,
                integral_money: d.toFixed(2),
                total_price: e.toFixed(2),
                integral: c
            }), this.changeBalanceMode();
        } else wx.showModal({
            title: "",
            content: "使用积分数量不可小于1"
        });
    },
    bindBalanceChange: function(a) {
        this.parsePrice;
        var t = this.data.total_price, e = this.data.integral_money, i = this.data.balance_mode, d = (this.data.balance, 
        this.data.yhjprice), s = this.data.lastPrice, r = this.data.yhm_money, n = Number(i[a.detail.value]);
        n > (s = s - e - d - r) && (n = s), t = s - n, this.setData({
            index_balance: n,
            total_price: t.toFixed(2),
            balance: n.toFixed(2)
        });
    },
    onLoad: function(a) {
        var t = s.globalData.carts, e = s.globalData.selectCarts, r = (wx.getStorageSync("openid"), 
        0);
        i.get_now();
        "buy" == a.fr && (e = s.globalData.dcarts);
        for (var n = 0; n < e.length; n++) r += e[n].num * e[n].price;
        this.setData({
            carts: t,
            selectCarts: e,
            fr: a.fr,
            total_price: r,
            base_price: r,
            insidepage_themecolor: d.insidepage_themecolor
        }), this.showOrderInterface(e);
    },
    showOrderInterface: function(e) {
        var i = this, d = i.data.total_price, o = (i.data.fr, e);
        s.apiRequest("order", "showOrderInterface2", {
            data: {
                total_amount: d,
                cart: JSON.stringify(o)
            },
            success: function(e) {
                if ("OK" == e.data.result) {
                    var d = e.data.pickupinfo, s = "", o = "";
                    t("undefined" != d._pickup_name) && void 0 !== d._pickup_phone && (s = d._pickup_name, 
                    o = d._pickup_phone);
                    var c = e.data.yhm_enable, h = e.data.yhm_type_data;
                    r = e.data.aviltime, a = e.data.start_date;
                    for (var l = e.data.usercinfo, _ = e.data.total_price, p = i.data.delivery_mode, u = 0, f = i.data.coupon_mode, y = 0; y < l.length; y++) f[y + 1] = JSON.parse(l[y]);
                    u += l.length, f = f;
                    var m = e.data.ujfdata, v = e.data.perdata;
                    if (parseInt(v.limit_val) || 0) if ("2" == v.limit_type) {
                        var g = _ * v.limit_val / 100 * (v.redeem_credits / v.redeem_money);
                        g < m.account_points && (m.account_points = g);
                    } else parseInt(m.account_points) > parseInt(v.limit_val) && (m.account_points = v.limit_val);
                    m.account_points < 1 && (m.account_points = 0);
                    var x = [];
                    if (m.account_points < 1) x.push(m.account_points); else if (m.account_points < 10) for (y = 1; y <= m.account_points; y += 1) x.push(y); else for (y = 10; y <= m.account_points; y += 10) x.push(y);
                    var w = !0;
                    0 == e.data.delivery.length && (w = !1);
                    var b = e.data.disresult;
                    if (b) {
                        p = [];
                        for (y = 0; y < b.length; y++) p.push(b[y].title);
                    }
                    if (e.data.receipt) {
                        var k = [], D = e.data.receipt;
                        for (var y in D) k.push(D[y].title);
                        k && (n = k, 0 == r.length && (r = k), i.setData({
                            delivery_time: r
                        }));
                    }
                    if (e.data.cashresult) {
                        var I = [], P = e.data.cashresult;
                        for (var F in P) "18" == P[F].key ? I.push("微信支付") : I.push(P[F].title);
                    }
                    i.setData({
                        pickname: s,
                        pickphone: o,
                        start_date: e.data.start_date,
                        date: e.data.start_date,
                        end_date: e.data.end_date,
                        coupon: u,
                        ujfdata: m,
                        perdata: v,
                        integral_mode: x,
                        coupon_mode: f,
                        lastPrice: _,
                        total_price: _,
                        base_price: _,
                        MessageSwitch: e.data.MessageSwitch,
                        TextModification: e.data.TextModification,
                        address: e.data.delivery,
                        delivery_addr: w,
                        delivery_mode: p,
                        disresult: b,
                        weight: e.data.weight,
                        pickupaddrs: e.data.pickupaddrs,
                        payInfo: e.data.payInfo,
                        pay_mode: I,
                        cashresult: e.data.cashresult,
                        dis_plus_cash: e.data.dis_plus.area || "",
                        dis_plus_area: e.data.dis_plus.disresultxz_area || "",
                        yhm_enable: c,
                        yhm_type_data: h
                    }), i.changeBalanceMode(), i.bindPayChange(""), 1 == p.length && i.bindPickerChange("");
                } else wx.navigateBack({});
            }
        });
    },
    onShow: function() {
        void 0 === this.options.fr && wx.switchTab({
            url: "../ucenter/ucenter"
        });
        var a = this;
        wx.getStorage({
            key: "address",
            success: function(t) {
                t.data ? (a.setData({
                    delivery_addr: !0,
                    address: t.data
                }), a.bindPickerChange("")) : a.setData({
                    delivery_addr: !1
                });
            }
        });
    },
    binkInvoiceText: function(a) {
        this.setData({
            invoice: a.detail.value
        });
    },
    binkTaxpayerIDText: function(a) {
        this.setData({
            taxpayerID: a.detail.value
        });
    },
    subtract: function(a) {
        var t = a.target.dataset.index, e = this.data.selectCarts;
        if (e[t]) {
            var i = parseInt(e[t].num), d = 0;
            if (e[t].min_purchase_num && (d = parseInt(e[t].min_purchase_num)), i < 2) return !1;
            if (d && i <= d) return wx.showModal({
                title: "已达最低限购量",
                content: "",
                showCancel: !1
            }), !1;
            i -= 1, e[t].num = i, this.setData({
                selectCarts: e
            }), this.showOrderInterface(e);
        }
    },
    add: function(a) {
        var t = a.target.dataset.index, e = this.data.selectCarts;
        if (e[t]) {
            var i = parseInt(e[t].num), d = 0;
            if (e[t].max_purchase_num && (d = parseInt(e[t].max_purchase_num)), d && i >= d) return wx.showModal({
                title: "已达最大限购量",
                content: "",
                showCancel: !1
            }), !1;
            i += 1, e[t].num = i, this.setData({
                selectCarts: e
            }), this.showOrderInterface(e);
        }
    }
});