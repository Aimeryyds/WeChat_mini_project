(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/share_detail" ], {
    1690: function(e, t, n) {
        "use strict";
        n("6cdc");
        var r = o(n("9f5e")), u = o(n("b3e3"));
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Page((0, r.default)(u.default));
    },
    5215: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = {
            onLoad: function(e) {
                var t = e.scene;
                if (t) {
                    var n = parseInt(decodeURIComponent(t).split("@")[0]);
                    n && (e.roomId = n);
                }
                this.$mgRouter.redirectTo("/pages/room/detail", e);
            }
        };
        t.default = r;
    },
    b3e3: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("b48e"), u = n("f31f");
        for (var o in u) "default" !== o && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(o);
        var a = n("17cc"), c = Object(a["a"])(u["default"], r["a"], r["b"], !1, null, null, null);
        t["default"] = c.exports;
    },
    b48e: function(e, t, n) {
        "use strict";
        var r = function() {
            var e = this, t = e.$createElement, n = e._self._c || t;
            return n("view");
        }, u = [];
        n.d(t, "a", function() {
            return r;
        }), n.d(t, "b", function() {
            return u;
        });
    },
    f31f: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n("5215"), u = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t["default"] = u.a;
    }
}, [ [ "1690", "common/runtime", "common/vendor" ] ] ]);