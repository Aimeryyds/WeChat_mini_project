(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Bargain/ConfirmOrder" ], {
    "3c01": function(e, t, n) {
        n.r(t);
        var r = n("6021"), o = n("b9ad");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("ddd9");
        var i = n("2877"), d = Object(i.a)(o.default, r.a, r.b, !1, null, "04fea838", null);
        t.default = d.exports;
    },
    6021: function(e, t, n) {
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        n.d(t, "a", function() {
            return r;
        }), n.d(t, "b", function() {
            return o;
        });
    },
    9332: function(e, t, n) {},
    b582: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("4360")), o = n("f8c8"), a = {
            components: {
                TitleBar: function() {
                    return n.e("components/TitleBar").then(n.bind(null, "1e1d"));
                }
            },
            props: {
                selectedItem: Object,
                selectedSubItem: Object,
                bargainOrder: Object
            },
            computed: {
                activeAddress: function() {
                    return r.default.getters["address/activeAddress"];
                }
            },
            mounted: function() {
                r.default.dispatch("address/init");
            },
            methods: {
                goToAddressPage: function() {
                    wx.navigateTo({
                        url: "/pages/Address/main"
                    });
                },
                createNewOrder: function() {
                    var e = this;
                    this.activeAddress ? (0, o.createNewOrder)({
                        address_id: +this.activeAddress.id,
                        benefit_id: this.bargainOrder.orderNo,
                        benefit_type: "bargain",
                        platform: "mini",
                        product_id: this.selectedItem.id,
                        product_type: "mall_item",
                        sku_count: 1,
                        sku_id: +this.selectedSubItem.id
                    }).then(function(t) {
                        var n = t.order;
                        if ("NOTPAY" !== n.status) {
                            if ("SUCCESS" === n.status) return wx.showToast({
                                title: "即将跳转订单页...",
                                duration: 2e3
                            }), void setTimeout(function() {
                                wx.navigateTo({
                                    url: "/pages/UserCenter/MyOrders/main"
                                });
                            }, 2e3);
                            throw new Error(t);
                        }
                        e.payOrder(n.orderNo);
                    }).catch(function(e) {
                        console.error("createNewOrder error: ", e), wx.showToast({
                            title: "创建失败，请重新提交！",
                            icon: "none",
                            duration: 2e3
                        });
                    }) : wx.showToast({
                        title: "请选择收货地址！",
                        icon: "none",
                        duration: 1e3
                    });
                },
                payOrder: function(e) {
                    (0, o.getPayInfo)(e, JSON.stringify({
                        openid: r.default.getters["user/openId"]
                    })).then(function(e) {
                        if ("SUCCESS" !== e.code) throw new Error(resolveSoa);
                        var t = e.wechatJsapi;
                        wx.requestPayment({
                            timeStamp: t.timeStamp,
                            nonceStr: t.nonceStr,
                            package: t.package,
                            signType: t.signType,
                            paySign: t.paySign,
                            success: function(e) {
                                wx.showToast({
                                    title: "即将跳转订单页...",
                                    duration: 2e3
                                }), setTimeout(function() {
                                    wx.navigateTo({
                                        url: "/pages/UserCenter/MyOrders/main"
                                    });
                                }, 2e3);
                            },
                            fail: function(e) {
                                wx.showToast({
                                    title: "支付失败，请重新提交！",
                                    icon: "none",
                                    duration: 2e3
                                });
                            }
                        });
                    }).catch(function(e) {
                        console.error("payOrder error: ", e), wx.showToast({
                            title: "支付失败，请重新提交！",
                            icon: "none",
                            duration: 2e3
                        });
                    });
                }
            }
        };
        t.default = a;
    },
    b9ad: function(e, t, n) {
        n.r(t);
        var r = n("b582"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    ddd9: function(e, t, n) {
        var r = n("9332");
        n.n(r).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Bargain/ConfirmOrder-create-component", {
    "pages/Bargain/ConfirmOrder-create-component": function(e, t, n) {
        n("543d").createComponent(n("3c01"));
    }
}, [ [ "pages/Bargain/ConfirmOrder-create-component" ] ] ]);