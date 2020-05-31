(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ChooseSubscription/ChooseSubscriptionFooter" ], {
    "0924": function(e, n, t) {
        var o = t("0925");
        t.n(o).a;
    },
    "0925": function(e, n, t) {},
    5420: function(e, n, t) {
        t.r(n);
        var o = t("f6e5"), c = t("60e1");
        for (var u in c) "default" !== u && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(u);
        t("0924");
        var r = t("2877"), i = Object(r.a)(c.default, o.a, o.b, !1, null, "9852e0a2", null);
        n.default = i.exports;
    },
    "60e1": function(e, n, t) {
        t.r(n);
        var o = t("74ee"), c = t.n(o);
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        n.default = c.a;
    },
    "74ee": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("4360")), c = {
            components: {
                PriceText: function() {
                    return t.e("components/PriceText").then(t.bind(null, "6011"));
                },
                XButton: function() {
                    return t.e("components/XButton").then(t.bind(null, "cef1"));
                }
            },
            props: {
                subject: {
                    type: Object
                },
                activeSubjectSubItem: {
                    type: Object
                }
            },
            computed: {
                preferentialPrice: function() {
                    return +o.default.state.subscribe.preferentialPrice;
                }
            },
            methods: {
                goToWebview: function() {
                    wx.navigateTo({
                        url: "/pages/WebViewPage/main?src=https://m.xuangubao.cn/agreements/subscribe"
                    });
                }
            }
        };
        n.default = c;
    },
    f6e5: function(e, n, t) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
        t.d(n, "a", function() {
            return o;
        }), t.d(n, "b", function() {
            return c;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ChooseSubscription/ChooseSubscriptionFooter-create-component", {
    "components/ChooseSubscription/ChooseSubscriptionFooter-create-component": function(e, n, t) {
        t("543d").createComponent(t("5420"));
    }
}, [ [ "components/ChooseSubscription/ChooseSubscriptionFooter-create-component" ] ] ]);