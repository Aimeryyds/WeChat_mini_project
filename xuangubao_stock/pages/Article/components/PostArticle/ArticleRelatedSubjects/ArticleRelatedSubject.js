(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Article/components/PostArticle/ArticleRelatedSubjects/ArticleRelatedSubject" ], {
    "7eda": function(e, t, n) {
        var c = n("e5f2");
        n.n(c).a;
    },
    9678: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = {
            name: "ArticleRelatedSubject",
            props: {
                id: [ String, Number ],
                type: Number,
                title: String
            },
            methods: {
                renderSubjectTitle: function(e, t) {
                    return 1 === e ? "#".concat(t) : t;
                }
            }
        };
        t.default = c;
    },
    b1f0: function(e, t, n) {
        n.r(t);
        var c = n("9678"), r = n.n(c);
        for (var a in c) "default" !== a && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(a);
        t.default = r.a;
    },
    e5f2: function(e, t, n) {},
    e62d: function(e, t, n) {
        var c = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, r = [];
        n.d(t, "a", function() {
            return c;
        }), n.d(t, "b", function() {
            return r;
        });
    },
    fb41: function(e, t, n) {
        n.r(t);
        var c = n("e62d"), r = n("b1f0");
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        n("7eda");
        var o = n("2877"), l = Object(o.a)(r.default, c.a, c.b, !1, null, "9b827402", null);
        t.default = l.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Article/components/PostArticle/ArticleRelatedSubjects/ArticleRelatedSubject-create-component", {
    "pages/Article/components/PostArticle/ArticleRelatedSubjects/ArticleRelatedSubject-create-component": function(e, t, n) {
        n("543d").createComponent(n("fb41"));
    }
}, [ [ "pages/Article/components/PostArticle/ArticleRelatedSubjects/ArticleRelatedSubject-create-component" ] ] ]);