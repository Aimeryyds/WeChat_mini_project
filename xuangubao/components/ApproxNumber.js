(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ApproxNumber" ], {
    2402: function(n, e, t) {
        t.r(e);
        var o = t("f3f6"), u = t.n(o);
        for (var r in o) "default" !== r && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = u.a;
    },
    "2a15": function(n, e, t) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return u;
        });
    },
    "6ec9": function(n, e, t) {
        t.r(e);
        var o = t("2a15"), u = t("2402");
        for (var r in u) "default" !== r && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(r);
        t("cbbc");
        var c = t("2877"), a = Object(c.a)(u.default, o.a, o.b, !1, null, null, null);
        e.default = a.exports;
    },
    bac3: function(n, e, t) {},
    cbbc: function(n, e, t) {
        var o = t("bac3");
        t.n(o).a;
    },
    f3f6: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(t("f32a"));
        var u = {
            props: {
                num: {
                    type: [ Number, String ]
                },
                classes: String
            },
            computed: {
                number: function() {
                    return "string" == typeof this.num ? this.num : (0, o.default)(+this.num || 0);
                }
            }
        };
        e.default = u;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ApproxNumber-create-component", {
    "components/ApproxNumber-create-component": function(n, e, t) {
        t("543d").createComponent(t("6ec9"));
    }
}, [ [ "components/ApproxNumber-create-component" ] ] ]);