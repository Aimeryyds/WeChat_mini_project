(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/SubjectPage/SubjectTimeline/SubjectTimelineEntity/SubjectTimelineArticle" ], {
    "2bf5": function(e, t, n) {
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, c = [];
        n.d(t, "a", function() {
            return i;
        }), n.d(t, "b", function() {
            return c;
        });
    },
    "7a07": function(e, t, n) {
        n.r(t);
        var i = n("a472"), c = n.n(i);
        for (var a in i) "default" !== a && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(a);
        t.default = c.a;
    },
    8600: function(e, t, n) {
        n.r(t);
        var i = n("2bf5"), c = n("7a07");
        for (var a in c) "default" !== a && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(a);
        n("b19a");
        var u = n("2877"), o = Object(u.a)(c.default, i.a, i.b, !1, null, "7e6e5e38", null);
        t.default = o.exports;
    },
    "9f9d": function(e, t, n) {},
    a472: function(e, t, n) {
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = i(n("4360")), a = n("ed08"), u = i(n("642b")), o = {
            name: "SubjectArticleListEntity",
            components: {
                ArticleListItemPurchase: function() {
                    return n.e("components/ArticleListEntity/ArticleListItemPurchase").then(n.bind(null, "fd1e"));
                },
                ArticleListItemFooterContainer: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/ArticleListEntity/ArticleListItemFooterContainer") ]).then(n.bind(null, "a268"));
                }
            },
            props: {
                article: {
                    type: Object
                },
                subject: {
                    type: Object
                },
                hidePremium: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                cropArticleImage: function() {
                    return this.article && this.article.image ? (0, u.default)(this.article.image, 375, 100) : "";
                }
            },
            methods: {
                purchase: function() {
                    (0, a.dataAnalytic)("unlock_click", {
                        frompage: "subject"
                    }), c.default.commit("subscribe/selectMessage", this.article), c.default.commit("subscribe/selectSubject", this.article.fromSubject), 
                    c.default.dispatch("subscribe/openPayMessageOverlay");
                },
                goToArticle: function() {
                    (0, a.dataAnalytic)("subject_article_click");
                    var e = this.article;
                    wx.navigateTo({
                        url: "/pages/Article/main?articleId=".concat(e.id, "&subjectId=").concat(e.fromSubject.id)
                    });
                },
                previewImg: function(e) {
                    e && wx.previewImage({
                        imgUrl: e,
                        urls: [ e ]
                    });
                }
            }
        };
        t.default = o;
    },
    b19a: function(e, t, n) {
        var i = n("9f9d");
        n.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/SubjectPage/SubjectTimeline/SubjectTimelineEntity/SubjectTimelineArticle-create-component", {
    "components/SubjectPage/SubjectTimeline/SubjectTimelineEntity/SubjectTimelineArticle-create-component": function(e, t, n) {
        n("543d").createComponent(n("8600"));
    }
}, [ [ "components/SubjectPage/SubjectTimeline/SubjectTimelineEntity/SubjectTimelineArticle-create-component" ] ] ]);