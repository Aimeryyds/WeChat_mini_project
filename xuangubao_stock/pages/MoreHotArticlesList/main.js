(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/MoreHotArticlesList/main" ], {
    "3e46": function(e, t, n) {
        n.r(t);
        var o = n("9d13"), i = n.n(o);
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = i.a;
    },
    "44d5": function(e, t, n) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
        n.d(t, "a", function() {
            return o;
        }), n.d(t, "b", function() {
            return i;
        });
    },
    "7a1c": function(e, t, n) {
        var o = n("8919");
        n.n(o).a;
    },
    8919: function(e, t, n) {},
    "9d13": function(e, t, n) {
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(e) {
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
        var u = o(n("4360")), c = n("4578"), a = n("f8c8"), s = {
            name: "MoreHotArticlesList",
            components: {
                TitleBarCapsule: function() {
                    return n.e("components/TitleBarWithCapsule").then(n.bind(null, "3878"));
                },
                ArticleTimeline: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/ArticleTimeline") ]).then(n.bind(null, "c2aa"));
                },
                PayingFlow: function() {
                    return n.e("components/PayingFlow").then(n.bind(null, "355c"));
                },
                AuthFlow: function() {
                    return n.e("components/AuthFlow").then(n.bind(null, "0fc3"));
                }
            },
            mixins: [ o(n("d05d")).default ],
            data: function() {
                return {
                    items: [],
                    nextToken: "",
                    hasMore: !0,
                    loadingMore: !1,
                    showPayFlow: !0
                };
            },
            computed: {
                articles: function() {
                    var e = u.default.getters["entities/articleEntities"], t = u.default.getters["entities/subjectEntities"];
                    return this.items.map(function(n) {
                        return i({}, (0, c.filterArticle)(e[n]), {
                            fromSubject: (0, c.filterSubject)(t[e[n].fromSubject.id])
                        });
                    });
                }
            },
            onShow: function() {
                this.showPayFlow = !0;
            },
            onHide: function() {
                this.showPayFlow = !1;
            },
            mounted: function() {
                this.getMessageHot();
            },
            onUnload: function() {
                this.items = [], this.nextToken = "", this.hasMore = !0, this.loadingMore = !1, 
                this.showPayFlow = !1;
            },
            onReachBottom: function() {
                this.items.length >= 80 || this.getMessageHot();
            },
            methods: {
                getMessageHot: function() {
                    var e = this;
                    this.hasMore && !this.loadingMore && (this.loadingMore = !0, (0, a.getMessageHot)(this.nextToken).then(function(t) {
                        t.messages && t.messages.length ? (u.default.commit("entities/UPDATE_ARTICLE_ENTITY_MULTI", t.messages), 
                        u.default.commit("entities/UPDATE_SUBJECT_ENTITY_MULTI", t.messages.map(function(e) {
                            return e.fromSubject;
                        })), e.items = e.items.concat(t.messages.filter(function(e) {
                            return e.fromSubject;
                        }).map(function(e) {
                            return e.id;
                        })), e.nextToken = t.nextMark) : e.hasMore = !1, e.loadingMore = !1;
                    }).catch(function() {
                        e.loadingMore = !1;
                    }));
                }
            }
        };
        t.default = s;
    },
    b696: function(e, t, n) {
        n.r(t);
        var o = n("44d5"), i = n("3e46");
        for (var r in i) "default" !== r && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        n("7a1c");
        var u = n("2877"), c = Object(u.a)(i.default, o.a, o.b, !1, null, "43c34932", null);
        t.default = c.exports;
    },
    b993: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("6cdc"), n("921b"), t(n("66fd")), e(t(n("b696")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "b993", "common/runtime", "common/vendor" ] ] ]);