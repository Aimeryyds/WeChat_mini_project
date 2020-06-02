(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/pay/webPay" ], {
    "3e0d": function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("8b60"), c = n("b61c");
        for (var o in c) "default" !== o && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(o);
        var u = n("17cc"), r = Object(u["a"])(c["default"], a["a"], a["b"], !1, null, null, null);
        t["default"] = r.exports;
    },
    "8b60": function(e, t, n) {
        "use strict";
        var a = function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("view");
        }, c = [];
        n.d(t, "a", function() {
            return a;
        }), n.d(t, "b", function() {
            return c;
        });
    },
    9274: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = c(n("4e35"));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        var o = {
            name: "webPay",
            onLoad: function(e) {
                Object.keys(e).forEach(function(t) {
                    e[t] = decodeURIComponent(e[t]);
                }), this.doWxPay(e);
            },
            methods: {
                doWxPay: function(e) {
                    var t = this;
                    if (!wx || !wx.requestPayment) return this.$toast.show("支付异常", "fail");
                    wx.requestPayment({
                        timeStamp: e.timeStamp,
                        nonceStr: e.nonceStr,
                        package: e.package,
                        signType: e.signType,
                        paySign: e.paySign,
                        success: function(n) {
                            a.default.set("webPay", "https://h5.mgzf.com/pay/success?tradeLogId=".concat(e.tradeLogId, "&orderId=").concat(e.contractId, "$sourceType=").concat(e.sourceType)), 
                            t.$mgRouter.navigateBack();
                        },
                        fail: function(e) {
                            var n = e.errMsg.replace("requestPayment:fail ", "");
                            "cancel" == n ? t.$mgRouter.navigateBack() : t.$toast.show(n).then(function() {
                                t.$mgRouter.navigateBack();
                            });
                        }
                    });
                }
            }
        };
        t.default = o;
    },
    a8dd: function(e, t, n) {
        "use strict";
        n("6cdc");
        var a = o(n("9f5e")), c = o(n("3e0d"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Page((0, a.default)(c.default));
    },
    b61c: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n("9274"), c = n.n(a);
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        t["default"] = c.a;
    }
}, [ [ "a8dd", "common/runtime", "common/vendor" ] ] ]);