(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/FullScreenVideo" ], {
    "0cb7": function(n, e, o) {
        var t = o("cba8");
        o.n(t).a;
    },
    7511: function(n, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = {
            props: {
                videoSrc: String
            }
        };
        e.default = t;
    },
    b888: function(n, e, o) {
        o.r(e);
        var t = o("7511"), c = o.n(t);
        for (var a in t) "default" !== a && function(n) {
            o.d(e, n, function() {
                return t[n];
            });
        }(a);
        e.default = c.a;
    },
    cba8: function(n, e, o) {},
    e121: function(n, e, o) {
        var t = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(n) {
                n.stopPropagation();
            });
        }, c = [];
        o.d(e, "a", function() {
            return t;
        }), o.d(e, "b", function() {
            return c;
        });
    },
    f044: function(n, e, o) {
        o.r(e);
        var t = o("e121"), c = o("b888");
        for (var a in c) "default" !== a && function(n) {
            o.d(e, n, function() {
                return c[n];
            });
        }(a);
        o("0cb7");
        var r = o("2877"), u = Object(r.a)(c.default, t.a, t.b, !1, null, "4f486962", null);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/FullScreenVideo-create-component", {
    "components/FullScreenVideo-create-component": function(n, e, o) {
        o("543d").createComponent(o("f044"));
    }
}, [ [ "components/FullScreenVideo-create-component" ] ] ]);