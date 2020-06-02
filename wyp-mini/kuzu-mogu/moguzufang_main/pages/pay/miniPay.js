(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/pay/miniPay" ], {
    "5a33": function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("a61b"), s = a.n(n);
        for (var r in n) "default" !== r && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(r);
        e["default"] = s.a;
    },
    "5f7f": function(t, e, a) {},
    6545: function(t, e, a) {
        "use strict";
        a("6cdc");
        var n = r(a("9f5e")), s = r(a("739a"));
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Page((0, n.default)(s.default));
    },
    "739a": function(t, e, a) {
        "use strict";
        a.r(e);
        var n = a("9fa3"), s = a("5a33");
        for (var r in s) "default" !== r && function(t) {
            a.d(e, t, function() {
                return s[t];
            });
        }(r);
        a("f46c");
        var o = a("17cc"), i = Object(o["a"])(s["default"], n["a"], n["b"], !1, null, null, null);
        e["default"] = i.exports;
    },
    "9fa3": function(t, e, a) {
        "use strict";
        var n = function() {
            var t = this, e = t.$createElement, a = t._self._c || e;
            return 0 == t.status ? a("view") : 1 === t.status ? a("view", {
                staticClass: "payView"
            }, [ a("icon", {
                attrs: {
                    type: "success",
                    size: "70"
                }
            }), a("view", [ t._v("支付成功") ]), a("button", {
                attrs: {
                    type: "primary",
                    "open-type": "launchApp",
                    "app-parameter": "0"
                }
            }, [ t._v("返回App") ]) ], 1) : 2 === t.status ? a("view", {
                staticClass: "payView"
            }, [ a("icon", {
                attrs: {
                    type: "warn",
                    size: "70"
                }
            }), a("view", [ t._v("您已取消支付") ]), a("button", {
                attrs: {
                    type: "primary",
                    eventid: "237389f4-0"
                },
                on: {
                    click: function(e) {
                        t.doWxPay();
                    }
                }
            }, [ t._v("再次支付") ]), a("button", {
                attrs: {
                    "open-type": "launchApp",
                    "app-parameter": "-2"
                }
            }, [ t._v("返回App") ]) ], 1) : 3 === t.status ? a("view", {
                staticClass: "payView"
            }, [ a("icon", {
                attrs: {
                    type: "warn",
                    size: "70"
                }
            }), a("view", [ t._v("支付失败") ]), a("button", {
                attrs: {
                    type: "primary",
                    "open-type": "launchApp",
                    "app-parameter": "-1"
                }
            }, [ t._v("返回App") ]) ], 1) : t._e();
        }, s = [];
        a.d(e, "a", function() {
            return n;
        }), a.d(e, "b", function() {
            return s;
        });
    },
    a61b: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var n = o(a("353c")), s = o(a("4e35")), r = o(a("9134"));
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function i(t, e, a, n, s, r, o) {
            try {
                var i = t[r](o), u = i.value;
            } catch (c) {
                return void a(c);
            }
            i.done ? e(u) : Promise.resolve(u).then(n, s);
        }
        function u(t) {
            return function() {
                var e = this, a = arguments;
                return new Promise(function(n, s) {
                    var r = t.apply(e, a);
                    function o(t) {
                        i(r, n, s, o, u, "next", t);
                    }
                    function u(t) {
                        i(r, n, s, o, u, "throw", t);
                    }
                    o(void 0);
                });
            };
        }
        var c = {
            name: "miniPay",
            data: function() {
                return {
                    status: 0,
                    payParams: null
                };
            },
            onLoad: function(t) {
                Object.keys(t).forEach(function(e) {
                    t[e] = decodeURIComponent(t[e]);
                }), this.init(t);
            },
            methods: {
                init: function() {
                    var t = u(n.default.mark(function t(e) {
                        var a, o, i, u;
                        return n.default.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                              case 0:
                                if (console.log(e), a = e.tradeNo, o = e.payChannel, i = s.default.get("openId", !0) || "", 
                                i) {
                                    t.next = 8;
                                    break;
                                }
                                return t.next = 6, r.default.getAuthSilent();

                              case 6:
                                u = t.sent, i = u.openId;

                              case 8:
                                a && o && i ? this.getPayInfo({
                                    tradeNo: a,
                                    payChannel: o,
                                    openId: i
                                }) : (this.status = 3, this.$toast.show("获取支付参数失败！"));

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    function e(e) {
                        return t.apply(this, arguments);
                    }
                    return e;
                }(),
                getPayInfo: function(t) {
                    var e = this;
                    wx.request({
                        url: "https://pay.api.mgzf.com/mogoroom-payapi/v1/paycenter/order/params",
                        method: "POST",
                        header: {
                            "content-type": "application/x-www-form-urlencoded"
                        },
                        data: t,
                        success: function(t) {
                            var a = t.data, n = a.code, s = a.content, r = a.message;
                            if ("10000" === n) {
                                var o = JSON.parse(s);
                                e.doWxPay(o), e.payParams = o;
                            } else e.status = 3, e.$toast.show(r);
                        },
                        fail: function() {
                            e.status = 3, e.$toast.show("网络请求错误！");
                        }
                    });
                },
                doWxPay: function(t) {
                    var e = this;
                    if (t || (t = this.payParams), console.log(t), !wx || !wx.requestPayment || !t) return this.status = 3, 
                    this.$toast.show("支付异常", "fail");
                    wx.requestPayment({
                        timeStamp: t.timeStamp,
                        nonceStr: t.nonceStr,
                        package: t.package,
                        signType: t.signType,
                        paySign: t.paySign,
                        success: function(t) {
                            e.status = 1, e.$toast.show("支付成功");
                        },
                        fail: function(t) {
                            var a = t.errMsg.replace("requestPayment:fail ", "");
                            "cancel" == a ? (e.status = 2, e.$toast.show("用户取消")) : e.status = 3;
                        }
                    });
                }
            }
        };
        e.default = c;
    },
    f46c: function(t, e, a) {
        "use strict";
        var n = a("5f7f"), s = a.n(n);
        s.a;
    }
}, [ [ "6545", "common/runtime", "common/vendor" ] ] ]);