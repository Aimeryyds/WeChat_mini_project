function e(e) {
    return function() {
        var a = e.apply(this, arguments);
        return new Promise(function(e, t) {
            function n(o, r) {
                try {
                    var i = a[o](r), s = i.value;
                } catch (e) {
                    return void t(e);
                }
                if (!i.done) return Promise.resolve(s).then(function(e) {
                    n("next", e);
                }, function(e) {
                    n("throw", e);
                });
                e(s);
            }
            return n("next");
        });
    };
}

var a = Object.assign || function(e) {
    for (var a = 1; a < arguments.length; a++) {
        var t = arguments[a];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
}, t = require("../../utils/util"), n = require("../../utils/runtime"), o = getApp(), r = o.$http;

Page({
    data: {
        payKey: !0,
        payWay: "07",
        orderNo: "",
        isRealCheck: !1,
        loading: !1,
        isFail: !1,
        isSuccess: !1,
        product: {
            name: "车险",
            price: "36333",
            date: "2020.01.01 - 2021.01.01",
            orderId: "2222222"
        }
    },
    onLoad: function(e) {
        this.setData(a({}, e));
    },
    onReady: function() {
        var a = e(n.mark(function e(a) {
            var t;
            return n.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    t = this.data.payWay, this.getPayway(function() {});

                  case 2:
                  case "end":
                    return e.stop();
                }
            }, e, this);
        }));
        return function(e) {
            return a.apply(this, arguments);
        };
    }(),
    onShow: function(e) {
        var a = this;
        if (console.log("show-----:::"), console.log("app.isRealCheck", o.pay.isRealCheck), 
        console.log("payKey::", a.data.payKey), o.pay.isRealCheck && a.data.payKey) return a.appIsRealCheck(), 
        a.setData({
            isRealCheck: !1,
            loading: !0,
            isFail: !1
        }), void a.payFunc();
    },
    getPayway: function(e) {
        var a = this.options, t = (a.orderNo, a.payWay);
        console.log("getPayway", t), "37" === t ? this.setData({
            isRealCheck: !0,
            loading: !1,
            fail: !1,
            success: !1
        }, function() {
            e && e();
        }) : this.setData({
            loading: !0,
            fail: !1,
            success: !1,
            isRealCheck: !1
        }, function() {
            this.payFunc(), e && e();
        });
    },
    onShareAppMessage: function() {},
    click: function() {
        var e = wx.getStorageSync("openid");
        wx.navigateToMiniProgram({
            appId: "wx0891f9079fc2561b",
            path: "pages/index/index",
            extraData: {
                openId: e,
                env: "release"
            },
            envVersion: "release",
            success: function(e) {
                console.log("navigateToMiniProgram 跳转成功！");
            }
        });
    },
    payFunc: function() {
        var e = this, t = wx.getStorageSync("openid");
        this.prepay(function(n) {
            console.log("prepay success");
            var o = n.data$;
            if ("" != o.reqData) {
                var r = JSON.parse(o.reqData);
                r.packet.body.appBase.remark = "openId=" + t, e.getPay(r, function(t) {
                    var n = t.packet;
                    if ("000000" === n.head.rsltCode) {
                        var o = n.body.base.miniprogramJson, r = JSON.parse(o);
                        e.pay(a({}, r, {
                            success: function(a) {
                                e.setData({
                                    payKey: !1,
                                    isSuccess: !0,
                                    loading: !1,
                                    isRealCheck: !1
                                }, function() {
                                    e.appIsRealCheck();
                                });
                            },
                            fail: function(a) {
                                e.setData({
                                    payKey: !1,
                                    isFail: !0,
                                    loading: !1,
                                    isRealCheck: !1
                                }, function() {
                                    e.appIsRealCheck();
                                });
                            }
                        }));
                    } else wx.showToast({
                        title: n.head.rsltMsg,
                        icon: "none",
                        duration: 2e3
                    });
                });
            } else wx.showToast({
                title: "申请支付内容错误，请重试",
                icon: "none"
            });
        });
    },
    pay: function(e) {
        wx.requestPayment(e);
    },
    getPay: function(e, a) {
        wx.getStorageSync("openid");
        console.log((0, t.formatTime)(new Date())), r({
            url: "/api/cshop-pay/cshop-pay/controller/pay/manager/payApply.noauth",
            method: "POST",
            data: e
        }).then(function(e) {
            var t = e.data$.connectDetail;
            a && a(t);
        });
    },
    getUserInfo: function() {
        var a = e(n.mark(function e() {
            var a, t, o, i, s, c;
            return n.wrap(function(e) {
                for (;;) switch (e.prev = e.next) {
                  case 0:
                    return a = wx.getStorageSync("wxCode"), e.prev = 1, e.next = 4, r({
                        url: "/api/cshop-pay/cshop-pay/controller/weixin/manager/getOpenIdByCode.noauth",
                        method: "GET",
                        data: {
                            code: a
                        }
                    });

                  case 4:
                    t = e.sent, o = t.data$, i = o.openid, s = o.session_key, c = o.unionid, "Successful" === t.status$ && (wx.setStorageSync("openid", i), 
                    wx.setStorageSync("session_key", s), wx.setStorageSync("unionid", c)), e.next = 12;
                    break;

                  case 9:
                    e.prev = 9, e.t0 = e.catch(1), console.log(e.t0);

                  case 12:
                  case "end":
                    return e.stop();
                }
            }, e, this, [ [ 1, 9 ] ]);
        }));
        return function() {
            return a.apply(this, arguments);
        };
    }(),
    prepay: function(e) {
        var a = this;
        r({
            url: "/api/cshop-pay/cshop-pay/controller/prePay/manager/findByOrderId",
            method: "GET",
            data: {
                orderId: this.data.orderNo
            }
        }).then(function(a) {
            e && e(a);
        }), r({
            url: "/api/cshop-server/cshop-server/controller/order/manager/findById",
            method: "GET",
            data: {
                id: this.data.orderNo
            }
        }).then(function(e) {
            var t = e.data$, n = t.prodName, o = t.payMoney, r = t.createDate, i = t.orderId;
            a.setData({
                product: {
                    name: n,
                    price: o / 100,
                    date: r,
                    orderId: i
                }
            });
        });
    },
    appIsRealCheck: function() {
        o.pay.isRealCheck = !1;
    },
    ckdd: function() {
        console.log(o.pay.isRealCheck), wx.redirectTo({
            url: "/pages/index/index?redirectUrl=" + o.globalData.webViewUrl + "#/cshop_policy_index"
        });
    },
    backHome: function() {
        console.log(o.pay.isRealCheck), wx.redirectTo({
            url: "/pages/index/index"
        });
    }
});