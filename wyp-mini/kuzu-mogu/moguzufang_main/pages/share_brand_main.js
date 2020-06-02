(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/share_brand_main" ], {
    "52ee": function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var r = {
            onLoad: function(e) {
                var n, t = this;
                n = e.scene ? decodeURIComponent(e.scene).split("@")[0] : e.landlordNo, n && this.$api.fetch("renterOperation.getLandordInfoByKey", {
                    keyNo: n
                }).then(function(e) {
                    var n = e.content;
                    t.$mgRouter.redirectTo("/pages/shop/landlord", {
                        landlordId: n,
                        fromType: 2,
                        q: "http"
                    });
                }).catch(function(e) {});
            }
        };
        n.default = r;
    },
    "965a": function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t("dd43"), o = t("abf8");
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        var u = t("17cc"), c = Object(u["a"])(o["default"], r["a"], r["b"], !1, null, null, null);
        n["default"] = c.exports;
    },
    abf8: function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t("52ee"), o = t.n(r);
        for (var a in r) "default" !== a && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(a);
        n["default"] = o.a;
    },
    d74e: function(e, n, t) {
        "use strict";
        t("6cdc");
        var r = a(t("9f5e")), o = a(t("965a"));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Page((0, r.default)(o.default));
    },
    dd43: function(e, n, t) {
        "use strict";
        var r = function() {
            var e = this, n = e.$createElement, t = e._self._c || n;
            return t("view");
        }, o = [];
        t.d(n, "a", function() {
            return r;
        }), t.d(n, "b", function() {
            return o;
        });
    }
}, [ [ "d74e", "common/runtime", "common/vendor" ] ] ]);