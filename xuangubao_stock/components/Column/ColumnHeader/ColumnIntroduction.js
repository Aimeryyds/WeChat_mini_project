(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/Column/ColumnHeader/ColumnIntroduction" ], {
    "0f3b": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            components: {
                PreText: function() {
                    return t.e("components/PreText").then(t.bind(null, "96ef"));
                }
            },
            props: {
                subject: {
                    type: Object
                }
            },
            data: function() {
                return {
                    expanded: !1,
                    maxHeight: 44
                };
            },
            methods: {
                toggle: function() {
                    this.maxHeight = 1e3 === this.maxHeight ? 44 : 1e3;
                }
            }
        };
        e.default = o;
    },
    "69a4": function(n, e, t) {
        var o = t("c714");
        t.n(o).a;
    },
    "75ae": function(n, e, t) {
        t.r(e);
        var o = t("b51e"), u = t("d5ca");
        for (var a in u) "default" !== a && function(n) {
            t.d(e, n, function() {
                return u[n];
            });
        }(a);
        t("69a4");
        var c = t("2877"), r = Object(c.a)(u.default, o.a, o.b, !1, null, "6c3772f8", null);
        e.default = r.exports;
    },
    b51e: function(n, e, t) {
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
    c714: function(n, e, t) {},
    d5ca: function(n, e, t) {
        t.r(e);
        var o = t("0f3b"), u = t.n(o);
        for (var a in o) "default" !== a && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = u.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/Column/ColumnHeader/ColumnIntroduction-create-component", {
    "components/Column/ColumnHeader/ColumnIntroduction-create-component": function(n, e, t) {
        t("543d").createComponent(t("75ae"));
    }
}, [ [ "components/Column/ColumnHeader/ColumnIntroduction-create-component" ] ] ]);