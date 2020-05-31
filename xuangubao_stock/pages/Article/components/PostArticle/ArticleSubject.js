(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Article/components/PostArticle/ArticleSubject" ], {
    5671: function(e, t, n) {
        var o = n("9be7");
        n.n(o).a;
    },
    "6f49": function(e, t, n) {
        n.r(t);
        var o = n("f98c"), r = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = r.a;
    },
    "8e71": function(e, t, n) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, r = [];
        n.d(t, "a", function() {
            return o;
        }), n.d(t, "b", function() {
            return r;
        });
    },
    "9be7": function(e, t, n) {},
    f98c: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("642b")), r = n("ed08"), c = {
            name: "ArticleSubject",
            components: {
                XButton: function() {
                    return n.e("components/XButton").then(n.bind(null, "cef1"));
                }
            },
            props: {
                id: [ String, Number ],
                isTopic: Boolean,
                isSubscribable: Boolean,
                image: String,
                title: String,
                followerCount: Number,
                subscribeCount: Number,
                following: Boolean,
                isSubscribed: Boolean,
                introduction: String
            },
            computed: {
                displayImage: function() {
                    return (0, o.default)(this.image, 100, 100);
                },
                formattedSubscribeCount: function() {
                    return (0, r.numberToLocale)(this.subscribeCount, {
                        fixedDigit: 1
                    });
                },
                formattedFollowerCount: function() {
                    return (0, r.numberToLocale)(this.followerCount, {
                        fixedDigit: 1
                    });
                }
            }
        };
        t.default = c;
    },
    fff3: function(e, t, n) {
        n.r(t);
        var o = n("8e71"), r = n("6f49");
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        n("5671");
        var u = n("2877"), i = Object(u.a)(r.default, o.a, o.b, !1, null, "9684c2f0", null);
        t.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Article/components/PostArticle/ArticleSubject-create-component", {
    "pages/Article/components/PostArticle/ArticleSubject-create-component": function(e, t, n) {
        n("543d").createComponent(n("fff3"));
    }
}, [ [ "pages/Article/components/PostArticle/ArticleSubject-create-component" ] ] ]);