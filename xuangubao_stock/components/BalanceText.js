(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/BalanceText" ], {
    2082: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = t("4be4"), o = {
            props: {
                balance: {
                    type: Number,
                    default: 0
                }
            },
            computed: {
                balanceDesc: function() {
                    return (0, a.toFixed)(this.balance, 2);
                }
            }
        };
        e.default = o;
    },
    "27c3": function(n, e, t) {
        var a = t("57f5");
        t.n(a).a;
    },
    "57f5": function(n, e, t) {},
    "65d8": function(n, e, t) {
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
        t.d(e, "a", function() {
            return a;
        }), t.d(e, "b", function() {
            return o;
        });
    },
    "7a32": function(n, e, t) {
        t.r(e);
        var a = t("65d8"), o = t("fa92");
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        t("27c3");
        var u = t("2877"), r = Object(u.a)(o.default, a.a, a.b, !1, null, "6c29b56f", null);
        e.default = r.exports;
    },
    fa92: function(n, e, t) {
        t.r(e);
        var a = t("2082"), o = t.n(a);
        for (var c in a) "default" !== c && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        e.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/BalanceText-create-component", {
    "components/BalanceText-create-component": function(n, e, t) {
        t("543d").createComponent(t("7a32"));
    }
}, [ [ "components/BalanceText-create-component" ] ] ]);