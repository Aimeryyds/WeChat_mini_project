(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/orderPay/orderPay" ], {
    "0e84": function(t, e, a) {
        var o = a("a0d9");
        a.n(o).a;
    },
    "1b1e": function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("e027"), e(a("66fd")), t(e(a("9166")).default);
        }).call(this, a("543d").createPage);
    },
    9166: function(t, e, a) {
        a.r(e);
        var o = a("df2c"), n = a("f64a");
        for (var i in n) "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(i);
        a("0e84");
        var c = a("f0c5"), d = Object(c.a)(n.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = d.exports;
    },
    a0d9: function(t, e, a) {},
    dd78: function(t, e, a) {
        (function(t) {
            function o(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o(a("5f18")), i = o(a("af1c")), c = o(a("0a9e"));
            o(a("733e"));
            var d = new i.default(), u = {
                data: function() {
                    return {
                        loadFlag: !1,
                        successFlag: !1,
                        serviceFlag: !1,
                        firstPaymentFlag: !0,
                        orderPayData: {},
                        idList: "",
                        payId: ""
                    };
                },
                components: {
                    bottombutton: function() {
                        a.e("components/button/button").then(function() {
                            return resolve(a("5a52"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                onLoad: function(t) {
                    var e = this;
                    if (t.contract_id) e.getidList(t.contract_id); else if (t.idList) {
                        var a = t.idList.split(",");
                        e.idList = t.idList, t.couponIds ? e.couponDetail(a, t.couponIds, t.idList) : e.noCouponDetail(a, t.idList);
                    }
                },
                methods: {
                    noCouponDetail: function(e, a) {
                        var o = this;
                        t.getStorageSync("userId"), t.request({
                            url: n.default.url + "/web-api/applet-api/bill/detail/" + e,
                            method: "GET",
                            data: {
                                app_id: "wx024695259e1a68cb",
                                city_id: t.getStorageSync("cityStorageNum"),
                                user_id: t.getStorageSync("userId"),
                                sign: c.default.gettoken({
                                    app_id: "wx024695259e1a68cb",
                                    city_id: t.getStorageSync("cityStorageNum"),
                                    user_id: t.getStorageSync("userId")
                                })
                            },
                            success: function(t) {
                                console.log(t), "0000" == t.data.code && (o.orderPayData = t.data, o.payId = t.data.data.pay_channels[0].code, 
                                o.idList = a, o.loadFlag = !0, o.firstPaymentFlag = t.data.data.is_support_coupon, 
                                o.orderPayData.data.bill_list.forEach(function(t) {
                                    "服务费" != t.type && "后续租金" != t.type || (o.serviceFlag = !0);
                                }));
                            }
                        });
                    },
                    couponDetail: function(e, a, o) {
                        var i = this;
                        t.request({
                            url: n.default.url + "/web-api/applet-api/bill/detail/" + e,
                            method: "POST",
                            data: {
                                app_id: "wx024695259e1a68cb",
                                city_id: t.getStorageSync("cityStorageNum"),
                                user_id: t.getStorageSync("userId"),
                                sign: c.default.gettoken({
                                    app_id: "wx024695259e1a68cb",
                                    city_id: t.getStorageSync("cityStorageNum"),
                                    user_id: t.getStorageSync("userId")
                                }),
                                couponIds: a
                            },
                            success: function(t) {
                                console.log(t), "0000" == t.data.code && (i.orderPayData = t.data, i.payId = t.data.data.pay_channels[0].code, 
                                i.idList = o, i.loadFlag = !0, i.orderPayData.data.bill_list.forEach(function(t) {
                                    "服务费" != t.type && "后续租金" != t.type || i.setData({
                                        serviceFlag: !0
                                    });
                                }));
                            }
                        });
                    },
                    getidList: function(e) {
                        var a = this;
                        d.get(n.default.url + "/api/v4/contract/first-bill-ids", {
                            contract_id: e
                        }).then(function(e) {
                            if ("0000" === e.code) {
                                t.hideLoading(), console.log(e.data);
                                var o = e.data.bill_ids.split(",");
                                a.noCouponDetail(o);
                            } else t.showToast({
                                content: e.msg || "请求出错"
                            });
                        });
                    },
                    submitPay: function() {
                        var e = this;
                        t.getAuthCode({
                            success: function(a) {
                                var o = Math.round(new Date().getTime() / 1e3), i = {
                                    app_id: "wx024695259e1a68cb",
                                    city_id: t.getStorageSync("cityStorageNum"),
                                    user_id: t.getStorageSync("userId"),
                                    sign: c.default.gettoken({
                                        app_id: "wx024695259e1a68cb",
                                        city_id: t.getStorageSync("cityStorageNum"),
                                        user_id: t.getStorageSync("userId")
                                    }),
                                    channel: "alipay_lite",
                                    code: e.payId,
                                    timestamp: o,
                                    auth_code: a.authCode
                                };
                                t.request({
                                    url: n.default.url + "/web-api/applet-api/bill/paybill",
                                    method: "POST",
                                    data: i,
                                    success: function(a) {
                                        t.hideLoading(), t.tradePay({
                                            tradeNO: a.data.data.transaction_no,
                                            success: function(a) {
                                                if (console.log(a), "9000" == a.resultCode) e.successFlag = !0; else switch (a.resultCode) {
                                                  case "4000":
                                                  case "6001":
                                                  case "99":
                                                    t.showToast({
                                                        content: "支付失败",
                                                        duration: 2e3
                                                    });
                                                    break;

                                                  case "8000":
                                                  case "6002":
                                                  case "6004":
                                                    t.alert({
                                                        title: "支付状态更新失败，请重试"
                                                    });
                                                }
                                            },
                                            fail: function(e) {
                                                t.alert({
                                                    content: "支付失败"
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    },
                    toCoupon: function() {
                        console.log(123);
                        var e = this;
                        t.redirectTo({
                            url: "../coupon/coupon?choose=ture&idList=" + e.idList
                        });
                    },
                    backToUser: function() {
                        t.reLaunch({
                            url: "../user/user"
                        });
                    }
                }
            };
            e.default = u;
        }).call(this, a("543d").default);
    },
    df2c: function(t, e, a) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, n = [];
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return n;
        }), a.d(e, "a", function() {});
    },
    f64a: function(t, e, a) {
        a.r(e);
        var o = a("dd78"), n = a.n(o);
        for (var i in o) "default" !== i && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = n.a;
    }
}, [ [ "1b1e", "common/runtime", "common/vendor" ] ] ]);