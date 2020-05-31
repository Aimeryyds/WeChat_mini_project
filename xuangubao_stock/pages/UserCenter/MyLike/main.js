(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/UserCenter/MyLike/main" ], {
    "10a9": function(t, e, n) {},
    4205: function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function o(t) {
            for (var e = 1; e < arguments.length; e++) if (e % 2) {
                var n = null != arguments[e] ? arguments[e] : {}, i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                }))), i.forEach(function(e) {
                    r(t, e, n[e]);
                });
            } else Object.defineProperties(t, Object.getOwnPropertyDescriptors(arguments[e]));
            return t;
        }
        function r(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = i(n("4360")), u = n("4578"), c = n("f8c8"), s = {
            name: "MyLike",
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
            mixins: [ i(n("d05d")).default ],
            data: function() {
                return {
                    items: [],
                    nextMark: "",
                    hasMore: !0,
                    loadingMore: !1,
                    showPayFlow: !0
                };
            },
            computed: {
                articles: function() {
                    var t = a.default.getters["entities/articleEntities"], e = a.default.getters["entities/subjectEntities"];
                    return this.items.map(function(n) {
                        return o({}, (0, u.filterArticle)(t[n]), {
                            fromSubject: (0, u.filterSubject)(e[t[n].fromSubject.id])
                        });
                    });
                }
            },
            onShow: function() {
                this.showPayFlow = !0;
            },
            mounted: function() {
                this.getMyFavoritesList();
            },
            onHide: function() {
                this.showPayFlow = !1;
            },
            onUnload: function() {
                this.items = [], this.nextMark = "", this.hasMore = !0, this.loadingMore = !1, this.showPayFlow = !1;
            },
            onReachBottom: function() {
                this.getMyFavoritesList();
            },
            methods: {
                getMyFavoritesList: function() {
                    var t = this;
                    this.hasMore && !this.loadingMore && (this.loadingMore = !0, (0, c.getMyFavoritesList)(this.nextMark).then(function(e) {
                        e.messages && e.messages.length ? (a.default.commit("entities/UPDATE_ARTICLE_ENTITY_MULTI", e.messages), 
                        a.default.commit("entities/UPDATE_SUBJECT_ENTITY_MULTI", e.messages.map(function(t) {
                            return t.fromSubject;
                        })), t.items = t.items.concat(e.messages.filter(function(t) {
                            return t.fromSubject;
                        }).map(function(t) {
                            return t.id;
                        })), t.nextMark = e.nextMark) : t.hasMore = !1, t.loadingMore = !1;
                    }).catch(function() {
                        t.loadingMore = !1;
                    }));
                }
            }
        };
        e.default = s;
    },
    "5fa2": function(t, e, n) {
        n.r(e);
        var i = n("b575"), o = n("d40d");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("c0c2");
        var a = n("2877"), u = Object(a.a)(o.default, i.a, i.b, !1, null, "ad671f5a", null);
        e.default = u.exports;
    },
    b575: function(t, e, n) {
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return o;
        });
    },
    c0c2: function(t, e, n) {
        var i = n("10a9");
        n.n(i).a;
    },
    d40d: function(t, e, n) {
        n.r(e);
        var i = n("4205"), o = n.n(i);
        for (var r in i) "default" !== r && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(r);
        e.default = o.a;
    },
    d49b: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), n("921b"), e(n("66fd")), t(e(n("5fa2")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "d49b", "common/runtime", "common/vendor" ] ] ]);