(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Article/components/PostArticle/ArticleThirdParty" ], {
    "16b0": function(t, e, n) {
        n.r(e);
        var r = n("b9935"), o = n("6e16");
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        n("7c83");
        var a = n("2877"), i = Object(a.a)(o.default, r.a, r.b, !1, null, "8c3cd312", null);
        e.default = i.exports;
    },
    "5adb": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r = {
            name: "ArticleThirdParty",
            components: {
                XButton: function() {
                    return n.e("components/XButton").then(n.bind(null, "cef1"));
                }
            },
            props: {
                url: String,
                label: {
                    type: String,
                    default: "查看原文"
                }
            }
        };
        e.default = r;
    },
    "6e16": function(t, e, n) {
        n.r(e);
        var r = n("5adb"), o = n.n(r);
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        e.default = o.a;
    },
    "7c83": function(t, e, n) {
        var r = n("9d10");
        n.n(r).a;
    },
    "9d10": function(t, e, n) {},
    b9935: function(t, e, n) {
        var r = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
        n.d(e, "a", function() {
            return r;
        }), n.d(e, "b", function() {
            return o;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Article/components/PostArticle/ArticleThirdParty-create-component", {
    "pages/Article/components/PostArticle/ArticleThirdParty-create-component": function(t, e, n) {
        n("543d").createComponent(n("16b0"));
    }
}, [ [ "pages/Article/components/PostArticle/ArticleThirdParty-create-component" ] ] ]);