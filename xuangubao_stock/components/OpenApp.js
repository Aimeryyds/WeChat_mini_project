(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/OpenApp" ], {
    "1e6a": function(n, e, o) {
        o.r(e);
        var t = o("e57d"), c = o("5ea2");
        for (var a in c) "default" !== a && function(n) {
            o.d(e, n, function() {
                return c[n];
            });
        }(a);
        o("f0bc");
        var p = o("2877"), r = Object(p.a)(c.default, t.a, t.b, !1, null, "b17fc902", null);
        e.default = r.exports;
    },
    "5ea2": function(n, e, o) {
        o.r(e);
        var t = o("8c40"), c = o.n(t);
        for (var a in t) "default" !== a && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(a);
        e.default = c.a;
    },
    "8c40": function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = o("ed08"), c = {
            name: "OpenApp",
            props: {
                path: String
            },
            methods: {
                launchAppError: function() {
                    (0, t.showDownLoadReminder)();
                }
            }
        };
        e.default = c;
    },
    cc8b: function(n, e, o) {},
    e57d: function(n, e, o) {
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
        o.d(e, "a", function() {
            return t;
        }), o.d(e, "b", function() {
            return c;
        });
    },
    f0bc: function(n, e, o) {
        var t = o("cc8b");
        o.n(t).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/OpenApp-create-component", {
    "components/OpenApp-create-component": function(n, e, o) {
        o("543d").createComponent(o("1e6a"));
    }
}, [ [ "components/OpenApp-create-component" ] ] ]);