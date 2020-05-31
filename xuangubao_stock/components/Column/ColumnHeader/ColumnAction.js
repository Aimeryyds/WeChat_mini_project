(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Column/ColumnHeader/ColumnAction" ], {
    "0000": function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, u = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return u;
        });
    },
    "711f": function(n, e, t) {
        t.r(e);
        var o = t("0000"), u = t("ca31");
        for (var a in u) "default" !== a && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(a);
        t("90e4");
        var c = t("2877"), r = Object(c.a)(u.default, o.a, o.b, !1, null, "31e89b4e", null);
        e.default = r.exports;
    },
    "90e4": function(n, e, t) {
        var o = t("aad4");
        t.n(o).a;
    },
    aad4: function(n, e, t) {},
    abe3: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = function(n) {
            return n && n.__esModule ? n : {
                default: n
            };
        }(t("65b7")), u = {
            components: {
                XButton: function() {
                    return t.e("components/XButton").then(t.bind(null, "cef1"));
                }
            },
            props: {
                subject: {
                    type: Object
                }
            },
            computed: {
                displayImage: function() {
                    return (0, o.default)(this.subject.image, 375, 164);
                },
                displaySquareImage: function() {
                    return (0, o.default)(this.subject.image, 100, 100);
                }
            }
        };
        e.default = u;
    },
    ca31: function(n, e, t) {
        t.r(e);
        var o = t("abe3"), u = t.n(o);
        for (var a in o) "default" !== a && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = u.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Column/ColumnHeader/ColumnAction-create-component", {
    "components/Column/ColumnHeader/ColumnAction-create-component": function(n, e, t) {
        t("543d").createComponent(t("711f"));
    }
}, [ [ "components/Column/ColumnHeader/ColumnAction-create-component" ] ] ]);