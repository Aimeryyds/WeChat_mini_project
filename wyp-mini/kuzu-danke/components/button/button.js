(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/button/button" ], {
    "0f49": function(n, t, o) {
        o.r(t);
        var e = o("ea4f"), u = o.n(e);
        for (var a in e) "default" !== a && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(a);
        t.default = u.a;
    },
    "1c0d": function(n, t, o) {
        var e = o("4f8e");
        o.n(e).a;
    },
    "4f8e": function(n, t, o) {},
    "5a52": function(n, t, o) {
        o.r(t);
        var e = o("98f0"), u = o("0f49");
        for (var a in u) "default" !== a && function(n) {
            o.d(t, n, function() {
                return u[n];
            });
        }(a);
        o("1c0d");
        var c = o("f0c5"), f = Object(c.a)(u.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        t.default = f.exports;
    },
    "98f0": function(n, t, o) {
        var e = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, u = [];
        o.d(t, "b", function() {
            return e;
        }), o.d(t, "c", function() {
            return u;
        }), o.d(t, "a", function() {});
    },
    ea4f: function(n, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var e = {
            data: function() {
                return {};
            },
            onLoad: function(n) {},
            props: {},
            methods: {
                rightTap: function() {
                    this.props.onRightTap();
                },
                leftTap: function() {
                    this.props.onLeftTap();
                }
            }
        };
        t.default = e;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/button/button-create-component", {
    "components/button/button-create-component": function(n, t, o) {
        o("543d").createComponent(o("5a52"));
    }
}, [ [ "components/button/button-create-component" ] ] ]);