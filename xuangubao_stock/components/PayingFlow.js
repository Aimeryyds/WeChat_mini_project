(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/PayingFlow" ], {
    "355c": function(e, t, n) {
        n.r(t);
        var o = n("4d23"), c = n("c566");
        for (var i in c) "default" !== i && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(i);
        var a = n("2877"), u = Object(a.a)(c.default, o.a, o.b, !1, null, null, null);
        t.default = u.exports;
    },
    "39e9": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("4360")), c = n("ed08"), i = {
            components: {
                BuyMessage: function() {
                    return n.e("components/BuyMessage").then(n.bind(null, "253a"));
                },
                BuySubject: function() {
                    return n.e("components/BuySubject").then(n.bind(null, "4983"));
                },
                ChooseCoupon: function() {
                    return n.e("components/ChooseCoupon").then(n.bind(null, "4fcd"));
                },
                ChooseSubscription: function() {
                    return n.e("components/ChooseSubscription").then(n.bind(null, "023a"));
                },
                BuySubjectSuccess: function() {
                    return n.e("components/BuySubjectSuccess").then(n.bind(null, "9ece"));
                }
            },
            computed: {
                isPayingMessage: function() {
                    return o.default.getters["overlay/isPayingMessage"];
                },
                isChoosingSubscription: function() {
                    return o.default.getters["overlay/isChoosingSubscription"];
                },
                isChooseCoupon: function() {
                    return o.default.getters["overlay/isChooseCoupon"];
                },
                isPayingSubject: function() {
                    return o.default.getters["overlay/isPayingSubject"];
                },
                isSucceededInBuyingSubject: function() {
                    return o.default.getters["overlay/isSucceededInBuyingSubject"];
                },
                isVerifingMobile: function() {
                    return o.default.getters["overlay/isVerifingMobile"];
                },
                devicePlatformIOS: function() {
                    return o.default.getters["device/devicePlatform"]("ios");
                }
            },
            watch: {
                isPayingMessage: function() {
                    if (this.isPayingMessage) {
                        if (this.devicePlatformIOS) return o.default.dispatch("overlay/clearOverlayStack"), 
                        void wx.showModal({
                            title: "温馨提示",
                            content: "小程序不支持解锁喔！",
                            showCancel: !1,
                            confirmText: "好的"
                        });
                        this.login();
                    }
                },
                isChoosingSubscription: function() {
                    if (this.isChoosingSubscription) {
                        if (this.devicePlatformIOS) return o.default.dispatch("overlay/clearOverlayStack"), 
                        void wx.showModal({
                            title: "温馨提示",
                            content: "小程序不支持订阅喔！",
                            showCancel: !1,
                            confirmText: "好的"
                        });
                        this.login();
                    }
                }
            },
            created: function() {
                var e = wx.getStorageSync("_cacheStack");
                e && (0, c.ifLogin)() && (e.forEach(function(e) {
                    o.default.commit("overlay/pushOverlayStack", e);
                }), wx.removeStorageSync("_cacheStack"));
            },
            methods: {
                login: function() {
                    (0, c.ifLogin)() || (wx.setStorage({
                        key: "_cacheStack",
                        data: o.default.state.overlay.stack
                    }), (0, c.goToLogin)(), o.default.commit("overlay/clearOverlayStack"));
                },
                unSelectMessage: function() {
                    o.default.commit("subscribe/unSelectMessage");
                },
                popOverlayStack: function() {
                    o.default.dispatch("overlay/popOverlayStack");
                },
                closeBuyMessage: function() {
                    this.unSelectMessage(), this.popOverlayStack();
                },
                closeChooseSubscription: function() {
                    this.popOverlayStack();
                },
                closeBuySubject: function() {
                    this.popOverlayStack();
                }
            }
        };
        t.default = i;
    },
    "4d23": function(e, t, n) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
        n.d(t, "a", function() {
            return o;
        }), n.d(t, "b", function() {
            return c;
        });
    },
    c566: function(e, t, n) {
        n.r(t);
        var o = n("39e9"), c = n.n(o);
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/PayingFlow-create-component", {
    "components/PayingFlow-create-component": function(e, t, n) {
        n("543d").createComponent(n("355c"));
    }
}, [ [ "components/PayingFlow-create-component" ] ] ]);