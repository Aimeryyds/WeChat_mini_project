(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/share_login" ], {
    "05c3": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var u = {
            onLoad: function(e) {
                this.$mgRouter.redirectTo("/pages/partner/login", e);
            }
        };
        n.default = u;
    },
    "793d": function(e, n, t) {
        "use strict";
        t.r(n);
        var u = t("fa02"), r = t("ae53");
        for (var a in r) "default" !== a && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(a);
        var o = t("17cc"), c = Object(o["a"])(r["default"], u["a"], u["b"], !1, null, null, null);
        n["default"] = c.exports;
    },
    ae53: function(e, n, t) {
        "use strict";
        t.r(n);
        var u = t("05c3"), r = t.n(u);
        for (var a in u) "default" !== a && function(e) {
            t.d(n, e, function() {
                return u[e];
            });
        }(a);
        n["default"] = r.a;
    },
    b597: function(e, n, t) {
        "use strict";
        t("6cdc");
        var u = a(t("9f5e")), r = a(t("793d"));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Page((0, u.default)(r.default));
    },
    fa02: function(e, n, t) {
        "use strict";
        var u = function() {
            var e = this, n = e.$createElement, t = e._self._c || n;
            return t("view");
        }, r = [];
        t.d(n, "a", function() {
            return u;
        }), t.d(n, "b", function() {
            return r;
        });
    }
}, [ [ "b597", "common/runtime", "common/vendor" ] ] ]);