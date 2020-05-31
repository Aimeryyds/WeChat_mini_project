(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/BuyMessage" ], {
    "253a": function(e, n, t) {
        t.r(n);
        var o = t("75a7"), u = t("54f1");
        for (var a in u) "default" !== a && function(e) {
            t.d(n, e, function() {
                return u[e];
            });
        }(a);
        var c = t("2877"), s = Object(c.a)(u.default, o.a, o.b, !1, null, null, null);
        n.default = s.exports;
    },
    "54f1": function(e, n, t) {
        t.r(n);
        var o = t("8857"), u = t.n(o);
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = u.a;
    },
    "75a7": function(e, n, t) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, u = [];
        t.d(n, "a", function() {
            return o;
        }), t.d(n, "b", function() {
            return u;
        });
    },
    8857: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(t("4360")), u = {
            components: {
                BuyMessageContent: function() {
                    return t.e("components/BuyMessage/BuyMessageContent").then(t.bind(null, "f180"));
                },
                Overlay: function() {
                    return t.e("components/Overlay").then(t.bind(null, "d9f8"));
                },
                Popup: function() {
                    return t.e("components/Popup").then(t.bind(null, "3905"));
                }
            },
            created: function() {
                o.default.commit("subscribe/clearCoupon"), o.default.dispatch("subscribe/fetchPreferentialPrice", "msg"), 
                o.default.dispatch("subscribe/fetchCouponList", "msg");
            },
            methods: {
                close: function() {
                    this.$emit("close");
                }
            }
        };
        n.default = u;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/BuyMessage-create-component", {
    "components/BuyMessage-create-component": function(e, n, t) {
        t("543d").createComponent(t("253a"));
    }
}, [ [ "components/BuyMessage-create-component" ] ] ]);