!function(a) {
    a && a.__esModule;
}(require("../../wxParse/util.js"));

var a = require("../../wxParse/common.js"), t = require("../../static/config.js"), e = getApp();

Page({
    data: {
        Selectp: !1,
        Select: !1,
        appoitinfo: {},
        userinfo: {},
        clerk: "",
        service_time: "",
        payid: "0",
        payment: "",
        frmdata: {},
        region: [ "**省", "**市", "**区（县）" ],
        unsubscribe_date: "",
        amount: 1,
        coupon_mode: [],
        index_mode: 0,
        index_time: 0,
        index_coupon: 0,
        delivery_money: 0,
        integral_money: 0,
        coupon: 0,
        integral: 0,
        balance: 0,
        lastPrice: 0,
        openid: "",
        usercinfo: [],
        ujfdata: [],
        perdata: [],
        yhjid: 0,
        yhjdid: 0,
        yhjprice: 0,
        yhm_enable: !1,
        yhm_money: 0,
        yhmcode: "",
        yhm_type_data: "",
        bsprice: 0,
        isAliApp: !1,
        show_integral: 0,
        point_money: 0,
        max_money: 0,
        jsq: 0,
        ops: 0
    },
    parsePrice: function(a) {
        var t = parseFloat(a);
        return (t += 1e-7) ? parseFloat(t.toFixed(2)) : 0;
    },
    sumprice: function(a) {
        this.parsePrice;
        var t = (parseFloat(this.data.lastPrice) || 0) - 1 * this.data.yhjprice - 1 * this.data.integral_money - parseFloat(this.data.balance);
        t = this.parsePrice(t), this.setData({
            total_price: t.toFixed(2)
        });
    },
    changepoimoy: function(a) {
        a.data.total_price, a.parsePrice;
        var t = a.data.integral_money, e = a.data.yhjprice, i = a.data.lastPrice, n = a.data.point_money, r = a.data.Select, o = a.data.Selectp;
        if (o) {
            var s = i - e;
            s > (n = a.data.point_money) && (s = n), (t = s) <= 0 && (o = !1), t == parseInt(t) && (t = parseInt(t) + ".00");
            var c = a.data.perdata, d = parseInt(t * c.redeem_credits * 100 / c.redeem_money / 100) || 0;
            a.setData({
                Selectp: o,
                integral: d,
                integral_money: t
            });
        }
        if (r) {
            t = a.data.integral_money;
            var p = a.data.balance, l = a.data.max_money, u = i - e - t;
            u < l && (l = u), (p = l) <= 0 && (r = !1), p == parseInt(p) && (p = parseInt(p) + ".00"), 
            a.setData({
                Select: r,
                balance: p
            });
        }
        this.sumprice("sumpjs");
    },
    bindCouponChange: function(a) {
        this.parsePrice;
        var t = this.data.coupon_mode[a.detail.value], e = (parseFloat(this.data.lastPrice), 
        parseFloat((1 * t.money).toFixed(2)) || 0), i = 0, n = 0, r = 0;
        a.detail.value > 0 && (i = t.u_id, n = t.ut_id, r = e), this.setData({
            index_coupon: a.detail.value,
            yhjid: i,
            yhjdid: n,
            yhjprice: r
        }), this.sumprice("yhq"), this.changepoimoy(this), this.sumprice("yhqChangePoint");
    },
    bindIntegralChange: function() {
        var a = this, t = (a.parsePrice, a.data.Selectp), e = a.data.Select, i = (a.data.jsq, 
        0);
        if (!t) {
            var n = a.data.yhjprice, r = a.data.lastPrice, o = a.data.point_money;
            (i = r - n) > o && (i = o);
        }
        var s = a.data.perdata, c = parseInt(i * s.redeem_credits * 100 / s.redeem_money / 100) || 0;
        if (a.setData({
            Selectp: !t,
            integral: c,
            integral_money: i.toFixed(2)
        }), a.sumprice("point"), a.data.total_price < 0) {
            var d = a.data.integral_money, n = a.data.yhjprice, p = (r = a.data.lastPrice) - n - d, e = a.data.Select;
            0 == p && (e = !1), a.setData({
                Select: e,
                balance: p.toFixed(2)
            }), a.sumprice("pointChangeMoney");
        }
        a.changepoimoy(a);
    },
    onLoad: function(a) {
        this.parameters = Object.assign({}, a);
        var t = e.globalData.userInfo;
        this.setData({
            isAliApp: wx.canIUse("alert")
        }), t || wx.navigateTo({
            url: "../login/login"
        });
    },
    onShow: function() {
        var a = Object.assign({}, this.parameters);
        Object.keys(a).length > 0 ? this.getOrderInfo(a) : wx.showModal({
            title: "非法请求",
            content: "",
            showCancel: !1,
            success: function() {
                wx.navigateBack();
            }
        });
    },
    tapAttr: function() {
        var a = this, t = (a.parsePrice, a.data.Select), e = (a.data.jsq, 0);
        if (!t) {
            var i = a.data.yhjprice, n = a.data.lastPrice, r = a.data.integral_money, o = a.data.max_money;
            (e = n - r - i) > o && (e = o);
        }
        a.setData({
            balance: e.toFixed(2),
            Select: !t
        }), a.sumprice("money"), a.data.balance <= 0 && (a.setData({
            Select: !1,
            balance: 0
        }), a.sumprice("moneyChangeMoney"));
    },
    getMarkactive: function(a, t, i) {
        e.apiRequest("appoit", "markactive", {
            data: {
                amount: t,
                discount: i
            },
            method: "POST",
            success: function(e) {
                var n = e.data || {};
                if ("OK" == n.result) {
                    a.parsePrice;
                    for (var r = n.usercinfo, o = i * t, s = 0, c = [ {
                        name: "未使用"
                    } ], d = 0; d < r.length; d++) s++, c[d + 1] = JSON.parse(r[d]);
                    var p = a.data.index_coupon;
                    if (p > s) {
                        var l = {
                            detail: {
                                value: 0
                            }
                        };
                        p = 0, a.bindCouponChange(l), a.sumprice("poinit");
                    }
                    var u = n.ujfdata, m = n.perdata, h = 0;
                    (parseInt(m.limit_val) || 0) && ("2" == m.limit_type ? (h = o * m.limit_val / 100 * (m.redeem_credits / m.redeem_money)) < u.account_points && (u.account_points = h) : (h = 1 * o * (m.redeem_credits / m.redeem_money), 
                    parseInt(u.account_points) > parseInt(m.limit_val) && (u.account_points = m.limit_val))), 
                    h = parseInt(h);
                    var y = 1 * u.account_points;
                    y > h && (y = h);
                    var g = parseInt(y * m.redeem_money * 100) / m.redeem_credits / 100, f = parseFloat(u.account_money) > o ? o : parseFloat(u.account_money);
                    f = a.parsePrice(f), a.setData({
                        ujfdata: u,
                        perdata: m,
                        coupon: s,
                        coupon_mode: c,
                        index_coupon: p,
                        total_price: o,
                        lastPrice: o,
                        show_integral: y,
                        max_money: f,
                        point_money: g
                    }), a.sumprice("change"), a.changepoimoy(a);
                    var _ = a.data.jsq;
                    if (1 == _) {
                        var v = f;
                        v == parseInt(v) && (v = parseInt(v) + ".00"), a.setData({
                            Select: !0,
                            balance: v
                        }), a.sumprice("change jsq", _);
                    }
                }
            }
        });
    },
    getOrderInfo: function(a) {
        var i = this, n = a.service_time;
        e.apiRequest("appoit", "index", {
            data: {
                id: a.product_id,
                cid: a.clerk_id,
                service_time: n,
                apptype: i.data.isAliApp ? "alipay" : "wechat"
            },
            method: "POST",
            success: function(a) {
                var e = a.data || {};
                if ("OK" == e.result) {
                    var r = e.detail;
                    if (Array.isArray(r) && !r.length) return wx.showModal({
                        title: "非法请求",
                        content: "",
                        showCancel: !1,
                        success: function() {
                            wx.navigateBack();
                        }
                    }), !1;
                    var o = r.discount, s = 1;
                    r.min_count && parseInt(r.min_count) > 1 && (s = parseInt(r.min_count)), o = parseFloat(o) > 0 ? o : r.price, 
                    r.relprice = o * s;
                    var c = t.insidepage_themecolor, d = i.data.jsq;
                    d++, i.setData({
                        appoitinfo: r,
                        clerk: e.clerk,
                        service_time: n,
                        payid: r.payment || "0",
                        payment: i.getPayAlias(r.payment || "0"),
                        userinfo: JSON.parse(r.userinfo_fields || "{}"),
                        unsubscribe_date: r.unsubscribe_date || "1",
                        amount: s,
                        insidepage_themecolor: c,
                        bsprice: o,
                        jsq: d
                    }), i.getMarkactive(i, s, o);
                } else {
                    var p = !0, l = e.errmsg;
                    "unlogin" == l && (p = !1, l = "请先登录"), wx.showModal({
                        title: l || "请求失败",
                        content: "",
                        showCancel: !1,
                        success: function() {
                            p ? wx.navigateBack() : wx.navigateTo({
                                url: "../login/login"
                            });
                        }
                    });
                }
            }
        });
    },
    getPayAlias: function(a) {
        return {
            1: "微信支付",
            2: "到店支付",
            4: "支付宝支付"
        }[a] || "";
    },
    regionChange: function(a) {
        var t = a.detail.value, e = Object.assign(this.data.frmdata, {
            region: t
        });
        this.setData({
            region: t,
            frmdata: e
        });
    },
    wxPay: function(a, t) {
        var i = wx.getStorageSync("openid");
        if (0 == i.trim().length) return wx.showModal({
            title: '"用户标识(Openid)"异常',
            content: "",
            showCancel: !1,
            complete: function() {
                wx.navigateTo({
                    url: "../login/login"
                });
            }
        }), !1;
        wx.showLoading({
            mask: !0,
            title: "微信支付"
        }), e.apiRequest("appoit", "getprepayid", {
            data: {
                oid: a,
                total_price: t,
                openid: i
            },
            method: "POST",
            success: function(a) {
                var t = a.data || {};
                if ("OK" == t.result) wx.requestPayment({
                    timeStamp: t.timeStamp,
                    nonceStr: t.nonceStr,
                    package: t.package,
                    signType: t.signType,
                    paySign: t.paySign,
                    success: function(a) {
                        wx.navigateTo({
                            url: "../ucenter/ucenter"
                        });
                    },
                    fail: function(a) {
                        var t = a.errMsg;
                        "requestPayment:fail cancel" == t && (t = "已取消订单"), wx.showModal({
                            title: t,
                            content: "",
                            showCancel: !1
                        });
                    }
                }); else if ("ERROR" == t.result) switch (t.errmsg) {
                  case "unlogin":
                    wx.navigateTo({
                        url: "../login/login"
                    });
                    break;

                  default:
                    wx.showModal({
                        title: "支付失败，请稍后重试",
                        content: "",
                        showCancel: !1
                    });
                }
            },
            fail: function() {
                wx.showModal({
                    title: "支付失败，请稍后重试(fail)",
                    content: "",
                    showCancel: !1
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    onInput: function(a) {
        var t = {}, e = {}, i = this.data.userinfo;
        t[a.target.id] = a.detail.value.trim(), i[a.target.id].error = !1, e = Object.assign(this.data.frmdata, t), 
        this.setData({
            frmdata: e,
            userinfo: i
        });
    },
    onSubmit: function(t) {
        var i = this, n = !1, r = i.data.frmdata, o = i.data.userinfo, s = t.detail.formId;
        for (var c in o) {
            var d = o[c];
            "true" != d.required || (r[c] || "").length ? d.error = !1 : (n = !0, d.error = !0);
        }
        if (i.setData({
            userinfo: o
        }), n) return !1;
        wx.showLoading({
            mask: !0,
            title: "处理中..."
        });
        var p = this.data.amount;
        p > 0 && (i.parameters.amount = p);
        var l = this.data.yhmcode, u = this.data.yhm_money, m = 0;
        m = this.data.integral || 0;
        var h = {
            total_price: this.data.total_price,
            lastPrice: this.data.lastPrice,
            yeprice: this.data.balance,
            jfnum: m,
            jfprice: this.data.integral_money,
            yhjid: this.data.yhjid,
            yhjdid: this.data.yhjdid,
            yhjprice: this.data.yhjprice,
            yhmcode: l,
            yhm_money: u
        };
        e.apiRequest("appoit", "create_order", {
            data: {
                frmdata: JSON.stringify(r),
                options: JSON.stringify(i.parameters),
                formId: s,
                order_data: JSON.stringify(h),
                apptype: i.data.isAliApp ? "alipay" : "wechat"
            },
            method: "POST",
            success: function(t) {
                var e = t.data || {};
                if ("OK" == e.result) {
                    var n = i.data.payid;
                    ("1" == n || "4" == n) && e.total_price > 0 ? a.wxPay(e.id, e.total_price) : wx.navigateTo({
                        url: "../ucenter/ucenter"
                    });
                } else wx.showModal({
                    title: e.errmsg || "请求失败",
                    content: "",
                    showCancel: !1
                });
            },
            complete: function() {
                wx.hideLoading();
            }
        });
    },
    subtract: function() {
        var a = this.data.appoitinfo, t = parseInt(this.data.amount), e = parseInt(a.min_count);
        if (t < 2) return !1;
        t -= 1, e && e > t && (t = e), a.relprice = a.discount * t, a.amount = t, this.setData({
            amount: t,
            appoitinfo: a
        });
        var i = this.data.bsprice, n = this.data.jsq;
        n++, this.setData({
            jsq: n,
            ops: -1
        }), this.getMarkactive(this, t, i);
    },
    add: function() {
        var a = this.data.appoitinfo, t = parseInt(this.data.amount) + 1, e = parseInt(a.max_count);
        e && e < t && (t = e), a.relprice = a.discount * t, a.amount = t, this.setData({
            amount: t,
            appoitinfo: a
        });
        var i = this.data.bsprice, n = this.data.jsq;
        n++, this.setData({
            jsq: n,
            ops: 1
        }), this.getMarkactive(this, t, i);
    }
});