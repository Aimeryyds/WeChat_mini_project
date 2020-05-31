(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/ArticleTimeline" ], {
    1431: function(e, t, n) {},
    "25a8": function(e, t, n) {
        n.r(t);
        var i = n("6e06"), r = n.n(i);
        for (var o in i) "default" !== o && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(o);
        t.default = r.a;
    },
    5543: function(e, t, n) {
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(t) {
                e.showFullVideo = !1, e.videoSrc = "";
            });
        }, r = [];
        n.d(t, "a", function() {
            return i;
        }), n.d(t, "b", function() {
            return r;
        });
    },
    "6e06": function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function r(e, t) {
            return a(e) || c(e, t) || o();
        }
        function o() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function c(e, t) {
            var n = [], i = !0, r = !1, o = void 0;
            try {
                for (var c, a = e[Symbol.iterator](); !(i = (c = a.next()).done) && (n.push(c.value), 
                !t || n.length !== t); i = !0) ;
            } catch (e) {
                r = !0, o = e;
            } finally {
                try {
                    i || null == a.return || a.return();
                } finally {
                    if (r) throw o;
                }
            }
            return n;
        }
        function a(e) {
            if (Array.isArray(e)) return e;
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var l = i(n("4360")), u = i(n("642b")), m = i(n("b216")), s = i(n("8219")), d = n("ed08"), f = {
            name: "ArticleTimeline",
            components: {
                StockGroupContainer: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/StockGroupContainer") ]).then(n.bind(null, "38a3"));
                },
                ArticleListItemPurchase: function() {
                    return n.e("components/ArticleListEntity/ArticleListItemPurchase").then(n.bind(null, "fd1e"));
                },
                ArticleListItemFooter: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/ArticleListEntity/ArticleListItemFooter") ]).then(n.bind(null, "c3ab"));
                },
                ArticleTimelineItemComments: function() {
                    return n.e("components/ArticleTimelineItem/ArticleTimelineItemComments").then(n.bind(null, "1be9"));
                },
                ArticleTimelineItemSubjectInfo: function() {
                    return n.e("components/ArticleTimelineItem/ArticleTimelineItemSubjectInfo").then(n.bind(null, "c36c"));
                },
                FullScreenVideo: function() {
                    return n.e("components/FullScreenVideo").then(n.bind(null, "f044"));
                }
            },
            mixins: [ m.default, s.default ],
            props: {
                articles: Array
            },
            data: function() {
                return {
                    showFullVideo: !1,
                    videoSrc: ""
                };
            },
            computed: {
                cropedImageList: function() {
                    return this.articles.map(function(e) {
                        return e.image && (0, u.default)(e.image, 375, 100);
                    });
                }
            },
            onUnload: function() {
                this.showFullVideo = !1, this.videoSrc = "";
            },
            methods: {
                goToArticle: function(e) {
                    var t = this.currentPage();
                    "Home" === t && (0, d.dataAnalytic)("recommender_article_click"), "MoreHotArticlesList" === t && (0, 
                    d.dataAnalytic)("hot_article_click"), wx.navigateTo({
                        url: "/pages/Article/main?articleId=".concat(e.id, "&subjectId=").concat(e.fromSubject.id)
                    });
                },
                goToSubject: function(e) {
                    var t = e.id;
                    "Home" === this.currentPage() && (0, d.dataAnalytic)("recommender_subject_click"), 
                    wx.navigateTo({
                        url: "/pages/Subject/main?subjectId=".concat(t)
                    });
                },
                purchase: function(e) {
                    var t = this.currentPage();
                    "Home" === t && (0, d.dataAnalytic)("unlock_click", {
                        frompage: "recommender"
                    }), "MoreHotArticlesList" === t && (0, d.dataAnalytic)("unlock_click", {
                        frompage: "hot"
                    }), e && e.fromSubject && (l.default.commit("subscribe/selectMessage", e), l.default.commit("subscribe/selectSubject", e.fromSubject), 
                    l.default.dispatch("subscribe/openPayMessageOverlay"));
                },
                previewImg: function(e) {
                    var t = e.image;
                    if (2 === e.mediaType && e.mediaUrl) return this.videoSrc = e.mediaUrl, void (this.showFullVideo = !0);
                    t && wx.previewImage({
                        imgUrl: t,
                        urls: [ t ]
                    });
                },
                currentPage: function() {
                    return r(getCurrentPages().slice(-1), 1)[0].route.match(/pages\/(\S*)\/main/)[1];
                }
            }
        };
        t.default = f;
    },
    bf26: function(e, t, n) {
        var i = n("1431");
        n.n(i).a;
    },
    c2aa: function(e, t, n) {
        n.r(t);
        var i = n("5543"), r = n("25a8");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("bf26");
        var c = n("2877"), a = Object(c.a)(r.default, i.a, i.b, !1, null, "44c42ef2", null);
        t.default = a.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/ArticleTimeline-create-component", {
    "components/ArticleTimeline-create-component": function(e, t, n) {
        n("543d").createComponent(n("c2aa"));
    }
}, [ [ "components/ArticleTimeline-create-component" ] ] ]);