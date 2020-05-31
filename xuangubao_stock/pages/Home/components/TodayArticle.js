(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Home/components/TodayArticle" ], {
    "0ea6": function(e, t, n) {},
    "2d2e": function(e, t, n) {
        var o = n("0ea6");
        n.n(o).a;
    },
    "42bf": function(e, t, n) {
        n.r(t);
        var o = n("4dfb"), a = n("f42b");
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        n("2d2e");
        var c = n("2877"), i = Object(c.a)(a.default, o.a, o.b, !1, null, "e80ed376", null);
        t.default = i.exports;
    },
    "4dfb": function(e, t, n) {
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
    e9e1: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("4360")), a = n("4578"), r = n("ed08"), c = {
            name: "TodayArticle",
            components: {
                Layout: function() {
                    return n.e("pages/Home/components/Layout").then(n.bind(null, "53b2"));
                },
                ArticleItem: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("pages/Home/components/TodayArticle/TodayArticleItem") ]).then(n.bind(null, "f97e"));
                }
            },
            props: {
                hotMessages: {
                    type: Array,
                    default: []
                }
            },
            computed: {
                articleEntities: function() {
                    var e = o.default.getters["entities/articleEntities"] || {};
                    return this.hotMessages.map(function(t) {
                        return (0, a.filterArticle)(e[t]);
                    }).filter(function(e) {
                        return e;
                    });
                }
            },
            methods: {
                jumpToMoreArticles: function() {
                    (0, r.dataAnalytic)("main_hotmore_click"), wx.navigateTo({
                        url: "/pages/MoreHotArticlesList/main"
                    });
                }
            }
        };
        t.default = c;
    },
    f42b: function(e, t, n) {
        n.r(t);
        var o = n("e9e1"), a = n.n(o);
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Home/components/TodayArticle-create-component", {
    "pages/Home/components/TodayArticle-create-component": function(e, t, n) {
        n("543d").createComponent(n("42bf"));
    }
}, [ [ "pages/Home/components/TodayArticle-create-component" ] ] ]);