(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/test" ], {
    "7bb8": function(t, e, n) {
        "use strict";
        n("6cdc");
        var a = o(n("9f5e")), i = o(n("bd8c"));
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Page((0, a.default)(i.default));
    },
    "82eb": function(t, e, n) {
        "use strict";
        var a = function() {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("view", [ n("button", {
                attrs: {
                    "open-type": "getUserInfo",
                    eventid: "6caea776-0"
                },
                on: {
                    click: t.getUserData
                }
            }, [ t._v("测试用户授权") ]), n("button", {
                attrs: {
                    eventid: "6caea776-1"
                },
                on: {
                    click: t.getLogin
                }
            }, [ t._v("测试login授权") ]), n("view", {
                staticStyle: {
                    "margin-top": "80rpx"
                }
            }, [ n("view", [ t._v("openId:" + t._s(t.openId || "")) ]), n("view", [ t._v("appId:" + t._s(t.appId || "")) ]), n("view", [ t._v("nonceStr:" + t._s(t.nonceStr || "")) ]), n("view", [ t._v("package:" + t._s(t.packAge || "")) ]), n("view", [ t._v("signType:" + t._s(t.signType || "")) ]), n("view", [ t._v("paySign:" + t._s(t.paySign || "")) ]), n("view", [ t._v("timeStamp:" + t._s(t.timeStamp || "")) ]), n("button", {
                attrs: {
                    eventid: "6caea776-2"
                },
                on: {
                    click: t.doPay
                }
            }, [ t._v("创建支付订单签名") ]), n("button", {
                attrs: {
                    eventid: "6caea776-3"
                },
                on: {
                    click: t.webPay
                }
            }, [ t._v("web支付") ]), n("button", {
                attrs: {
                    eventid: "6caea776-4"
                },
                on: {
                    click: t.nativePay
                }
            }, [ t._v("native支付") ]) ], 1) ], 1);
        }, i = [];
        n.d(e, "a", function() {
            return a;
        }), n.d(e, "b", function() {
            return i;
        });
    },
    "8e63": function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = i(n("9134"));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        var o = {
            name: "",
            data: function() {
                return {
                    appId: null,
                    openId: null,
                    nonceStr: null,
                    packAge: null,
                    signType: null,
                    paySign: null,
                    timeStamp: null
                };
            },
            onLoad: function() {
                var t = this;
                a.default.getAuthSilent().then(function(e) {
                    var n = e.openId;
                    t.openId = n;
                });
            },
            methods: {
                doPay: function() {
                    var t = this;
                    wx.request({
                        url: "https://api.mgzf.com/paytools/zfzlpay/toPay?openid=" + this.openId,
                        data: {
                            subType: 2
                        },
                        success: function(e) {
                            var n = e.data;
                            console.log(777, n);
                            var a = n.payInfo, i = a.appId, o = a.nonceStr, s = a.package, c = a.paySign, u = a.signType, p = a.timeStamp;
                            t.appId = i, t.nonceStr = o, t.packAge = s, t.signType = u, t.paySign = c, t.timeStamp = p, 
                            t.$toast.show("订单生成成功");
                        },
                        fail: function() {
                            t.$toast.show("订单生成失败");
                        }
                    });
                },
                webPay: function() {
                    var t = {
                        appId: this.appId,
                        nonceStr: this.nonceStr,
                        package: this.packAge,
                        signType: this.signType,
                        paySign: this.paySign,
                        timeStamp: this.timeStamp
                    };
                    this.$mgRouter.navigateTo("/pages/viewPage/index", {
                        url: this.$mgRouter.buildUrl("https://h5.mgzf.com/pay/console", t)
                    });
                },
                nativePay: function() {
                    var t = this;
                    if (this.appId && this.nonceStr) {
                        var e = {
                            appId: this.appId,
                            nonceStr: this.nonceStr,
                            package: this.packAge,
                            signType: this.signType,
                            paySign: this.paySign,
                            timeStamp: this.timeStamp
                        };
                        wx.requestPayment(Object.assign({}, e, {
                            success: function(t) {
                                console.log("支付成功", t);
                            },
                            fail: function(e) {
                                var n = e.errMsg.replace("requestPayment:fail ", "");
                                t.$toast.show(n);
                            }
                        }));
                    } else this.$toast.show("请先创建支付订单");
                },
                getLogin: function() {
                    a.default.getAuthSilent().then(function(t) {
                        console.log("login-code", t);
                    });
                },
                getUserData: function() {
                    wx.getSetting({
                        success: function(t) {
                            console.log(t);
                        },
                        fail: function() {}
                    });
                }
            }
        };
        e.default = o;
    },
    "9c0b": function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("8e63"), i = n.n(a);
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        e["default"] = i.a;
    },
    bd8c: function(t, e, n) {
        "use strict";
        n.r(e);
        var a = n("82eb"), i = n("9c0b");
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        var s = n("17cc"), c = Object(s["a"])(i["default"], a["a"], a["b"], !1, null, null, null);
        e["default"] = c.exports;
    }
}, [ [ "7bb8", "common/runtime", "common/vendor" ] ] ]);