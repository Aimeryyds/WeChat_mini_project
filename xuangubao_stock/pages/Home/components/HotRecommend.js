(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Home/components/HotRecommend" ], {
    "0e9c": function(e, t, n) {
        n.r(t);
        var o = n("8916"), r = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = r.a;
    },
    "351b": function(e, t, n) {
        var o = n("3cfb");
        n.n(o).a;
    },
    "3cfb": function(e, t, n) {},
    8916: function(e, t, n) {
        function o(e) {
            for (var t = 1; t < arguments.length; t++) if (t % 2) {
                var n = null != arguments[t] ? arguments[t] : {}, o = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }))), o.forEach(function(t) {
                    r(e, t, n[t]);
                });
            } else Object.defineProperties(e, Object.getOwnPropertyDescriptors(arguments[t]));
            return e;
        }
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("4360")), u = n("4578"), a = {
            name: "HotRecommend",
            components: {
                Layout: function() {
                    return n.e("pages/Home/components/Layout").then(n.bind(null, "53b2"));
                },
                ArticleTimeline: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/ArticleTimeline") ]).then(n.bind(null, "c2aa"));
                }
            },
            props: {
                items: {
                    type: Array,
                    default: []
                }
            },
            computed: {
                articles: function() {
                    var e = c.default.getters["entities/articleEntities"], t = c.default.getters["entities/subjectEntities"];
                    return this.items.map(function(n) {
                        return o({}, (0, u.filterArticle)(e[n]), {
                            fromSubject: (0, u.filterSubject)(t[e[n].fromSubject.id])
                        });
                    });
                }
            }
        };
        t.default = a;
    },
    "91a6": function(e, t, n) {
        n.r(t);
        var o = n("d1ec"), r = n("0e9c");
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        n("351b");
        var u = n("2877"), a = Object(u.a)(r.default, o.a, o.b, !1, null, "5f2eeb14", null);
        t.default = a.exports;
    },
    d1ec: function(e, t, n) {
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
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Home/components/HotRecommend-create-component", {
    "pages/Home/components/HotRecommend-create-component": function(e, t, n) {
        n("543d").createComponent(n("91a6"));
    }
}, [ [ "pages/Home/components/HotRecommend-create-component" ] ] ]);