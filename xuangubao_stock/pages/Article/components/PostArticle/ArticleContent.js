(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Article/components/PostArticle/ArticleContent" ], {
    "111d": function(e, n, t) {
        t.r(n);
        var o = t("6efa"), c = t("ebb0");
        for (var r in c) "default" !== r && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(r);
        var a = t("2877"), l = Object(a.a)(c.default, o.a, o.b, !1, null, null, null);
        n.default = l.exports;
    },
    "6efa": function(e, n, t) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
        t.d(n, "a", function() {
            return o;
        }), t.d(n, "b", function() {
            return c;
        });
    },
    ebb0: function(e, n, t) {
        t.r(n);
        var o = t("f4b2"), c = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        n.default = c.a;
    },
    f4b2: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            components: {
                UParse: function() {
                    return Promise.all([ t.e("common/vendor"), t.e("components/UParse/UParse") ]).then(t.bind(null, "0b70"));
                }
            },
            props: {
                content: String
            },
            methods: {
                preview: function(e, n) {},
                navigate: function(e) {
                    this.$emit("click-link", e);
                }
            }
        };
        n.default = o;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Article/components/PostArticle/ArticleContent-create-component", {
    "pages/Article/components/PostArticle/ArticleContent-create-component": function(e, n, t) {
        t("543d").createComponent(t("111d"));
    }
}, [ [ "pages/Article/components/PostArticle/ArticleContent-create-component" ] ] ]);