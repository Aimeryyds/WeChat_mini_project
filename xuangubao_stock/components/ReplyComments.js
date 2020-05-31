(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ReplyComments" ], {
    "6d99": function(n, e, t) {},
    "969d": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "ReplyComments",
            components: {
                ReplyComment: function() {
                    return t.e("components/ReplyComment").then(t.bind(null, "74fc"));
                }
            },
            props: {
                comments: Array
            },
            computed: {
                visibleComments: function() {
                    return this.comments.slice(0, 2);
                }
            }
        };
        e.default = o;
    },
    "9e69": function(n, e, t) {
        t.r(e);
        var o = t("bf64"), c = t("a582");
        for (var a in c) "default" !== a && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(a);
        t("da3c");
        var u = t("2877"), r = Object(u.a)(c.default, o.a, o.b, !1, null, "08f5e2f4", null);
        e.default = r.exports;
    },
    a582: function(n, e, t) {
        t.r(e);
        var o = t("969d"), c = t.n(o);
        for (var a in o) "default" !== a && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = c.a;
    },
    bf64: function(n, e, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
        t.d(e, "a", function() {
            return o;
        }), t.d(e, "b", function() {
            return c;
        });
    },
    da3c: function(n, e, t) {
        var o = t("6d99");
        t.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ReplyComments-create-component", {
    "components/ReplyComments-create-component": function(n, e, t) {
        t("543d").createComponent(t("9e69"));
    }
}, [ [ "components/ReplyComments-create-component" ] ] ]);