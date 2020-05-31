(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Article/components/PostRelatedArticles" ], {
    "31ca": function(e, t, n) {
        n.r(t);
        var o = n("8e97"), a = n("c746");
        for (var c in a) "default" !== c && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        n("a35b");
        var r = n("2877"), l = Object(r.a)(a.default, o.a, o.b, !1, null, "3f409238", null);
        t.default = l.exports;
    },
    5508: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            name: "PostRelatedArticles",
            components: {
                PostRelatedArticle: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/PostRelatedArticle") ]).then(n.bind(null, "35d8"));
                },
                XHeader: function() {
                    return n.e("components/XHeader").then(n.bind(null, "639e"));
                }
            },
            props: {
                articles: {
                    type: Array
                }
            }
        };
        t.default = o;
    },
    "8e97": function(e, t, n) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
        n.d(t, "a", function() {
            return o;
        }), n.d(t, "b", function() {
            return a;
        });
    },
    a35b: function(e, t, n) {
        var o = n("b530");
        n.n(o).a;
    },
    b530: function(e, t, n) {},
    c746: function(e, t, n) {
        n.r(t);
        var o = n("5508"), a = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Article/components/PostRelatedArticles-create-component", {
    "pages/Article/components/PostRelatedArticles-create-component": function(e, t, n) {
        n("543d").createComponent(n("31ca"));
    }
}, [ [ "pages/Article/components/PostRelatedArticles-create-component" ] ] ]);