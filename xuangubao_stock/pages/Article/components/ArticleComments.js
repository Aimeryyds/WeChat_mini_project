(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Article/components/ArticleComments" ], {
    "0405": function(n, e, t) {},
    "71c2": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            components: {
                Comments: function() {
                    return t.e("components/Comments").then(t.bind(null, "62a9"));
                }
            },
            props: {
                comments: Array,
                total: {
                    type: Number,
                    default: 0
                }
            }
        };
        e.default = o;
    },
    "742f": function(n, e, t) {
        t.r(e);
        var o = t("71c2"), c = t.n(o);
        for (var a in o) "default" !== a && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = c.a;
    },
    "9a18": function(n, e, t) {
        t.r(e);
        var o = t("cad6"), c = t("742f");
        for (var a in c) "default" !== a && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(a);
        t("e053");
        var r = t("2877"), u = Object(r.a)(c.default, o.a, o.b, !1, null, null, null);
        e.default = u.exports;
    },
    cad6: function(n, e, t) {
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
    e053: function(n, e, t) {
        var o = t("0405");
        t.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Article/components/ArticleComments-create-component", {
    "pages/Article/components/ArticleComments-create-component": function(n, e, t) {
        t("543d").createComponent(t("9a18"));
    }
}, [ [ "pages/Article/components/ArticleComments-create-component" ] ] ]);