(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Article/components/PostArticle/ArticleRelatedSubjects" ], {
    "328a": function(e, t, n) {
        var c = n("e950");
        n.n(c).a;
    },
    "59c3": function(e, t, n) {
        n.r(t);
        var c = n("9ae2"), a = n("d500");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("328a");
        var r = n("2877"), l = Object(r.a)(a.default, c.a, c.b, !1, null, "7b6e2f87", null);
        t.default = l.exports;
    },
    "9ae2": function(e, t, n) {
        var c = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
        n.d(t, "a", function() {
            return c;
        }), n.d(t, "b", function() {
            return a;
        });
    },
    a894: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = {
            name: "ArticleRelatedSubjects",
            components: {
                ArticleRelatedSubject: function() {
                    return n.e("pages/Article/components/PostArticle/ArticleRelatedSubjects/ArticleRelatedSubject").then(n.bind(null, "fb41"));
                }
            },
            props: {
                subjects: Array
            }
        };
        t.default = c;
    },
    d500: function(e, t, n) {
        n.r(t);
        var c = n("a894"), a = n.n(c);
        for (var o in c) "default" !== o && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(o);
        t.default = a.a;
    },
    e950: function(e, t, n) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Article/components/PostArticle/ArticleRelatedSubjects-create-component", {
    "pages/Article/components/PostArticle/ArticleRelatedSubjects-create-component": function(e, t, n) {
        n("543d").createComponent(n("59c3"));
    }
}, [ [ "pages/Article/components/PostArticle/ArticleRelatedSubjects-create-component" ] ] ]);