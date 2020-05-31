(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Article/components/PostArticle/ArticleHeader" ], {
    "007f": function(e, t, n) {
        var r = n("63c7");
        n.n(r).a;
    },
    3049: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("2095")), o = {
            name: "ArticleHeader",
            props: {
                author: String,
                time: Number,
                title: String
            },
            computed: {
                formatedTime: function() {
                    return (0, r.default)(this.time);
                }
            }
        };
        t.default = o;
    },
    "48d6": function(e, t, n) {
        n.r(t);
        var r = n("8b92"), o = n("8b67");
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        n("007f");
        var a = n("2877"), i = Object(a.a)(o.default, r.a, r.b, !1, null, "ea3ae166", null);
        t.default = i.exports;
    },
    "63c7": function(e, t, n) {},
    "8b67": function(e, t, n) {
        n.r(t);
        var r = n("3049"), o = n.n(r);
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        t.default = o.a;
    },
    "8b92": function(e, t, n) {
        var r = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
        n.d(t, "a", function() {
            return r;
        }), n.d(t, "b", function() {
            return o;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Article/components/PostArticle/ArticleHeader-create-component", {
    "pages/Article/components/PostArticle/ArticleHeader-create-component": function(e, t, n) {
        n("543d").createComponent(n("48d6"));
    }
}, [ [ "pages/Article/components/PostArticle/ArticleHeader-create-component" ] ] ]);