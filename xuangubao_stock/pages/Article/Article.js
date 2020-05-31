(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Article/Article" ], {
    "14d0": function(t, e, c) {
        var n = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
        c.d(e, "a", function() {
            return n;
        }), c.d(e, "b", function() {
            return i;
        });
    },
    "53bc": function(t, e, c) {
        c.r(e);
        var n = c("e0f1"), i = c.n(n);
        for (var r in n) "default" !== r && function(t) {
            c.d(e, t, function() {
                return n[t];
            });
        }(r);
        e.default = i.a;
    },
    "9d00": function(t, e, c) {
        var n = c("df63");
        c.n(n).a;
    },
    cd11: function(t, e, c) {
        c.r(e);
        var n = c("14d0"), i = c("53bc");
        for (var r in i) "default" !== r && function(t) {
            c.d(e, t, function() {
                return i[t];
            });
        }(r);
        c("9d00");
        var a = c("2877"), o = Object(a.a)(i.default, n.a, n.b, !1, null, "32550ebf", null);
        e.default = o.exports;
    },
    df63: function(t, e, c) {},
    e0f1: function(t, e, c) {
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function i(t) {
            return o(t) || a(t) || r();
        }
        function r() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }
        function a(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
        }
        function o(t) {
            if (Array.isArray(t)) {
                for (var e = 0, c = new Array(t.length); e < t.length; e++) c[e] = t[e];
                return c;
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = n(c("4360")), l = c("ed08"), s = {
            components: {
                PostArticle: function() {
                    return Promise.all([ c.e("common/vendor"), c.e("pages/Article/components/PostArticle") ]).then(c.bind(null, "b6d1"));
                },
                PostRelatedArticles: function() {
                    return c.e("pages/Article/components/PostRelatedArticles").then(c.bind(null, "31ca"));
                },
                ArticleComments: function() {
                    return c.e("pages/Article/components/ArticleComments").then(c.bind(null, "9a18"));
                }
            },
            mixins: [ n(c("b216")).default ],
            props: {
                article: Object,
                subject: Object,
                comments: Array,
                relatedArticles: Array,
                commentTotalCount: Number
            },
            computed: {
                isVip: function() {
                    return 1 === this.article.subscribeType;
                },
                isKuaiXun: function() {
                    return !!this.article.labels && this.article.labels.includes(3);
                },
                summary: function() {
                    return this.isKuaiXun ? "" : this.article.summary || "";
                },
                content: function() {
                    if (this.isKuaiXun) return this.article.summary || "";
                    return (this.article.content ? "对不起，您没有这篇文章的阅读权限" === this.article.content ? this.article.previewContent || "" : this.article.content || "" : this.article.prettyContent || "").replace(/\n|\r/g, "");
                },
                showSourceink: function() {
                    return !!this.article.labels && !!(this.isKuaiXun && this.article.originalUrl && this.article.source);
                },
                isSubscribed: function() {
                    return !!(this.subject.isSubscribed && this.subject.remainingDays >= 0);
                }
            },
            methods: {
                goToSubject: function() {
                    (0, l.dataAnalytic)("article_subject_click"), wx.navigateTo({
                        url: "/pages/Subject/main?subjectId=".concat(this.subject.id)
                    });
                },
                subscribeSubject: function() {
                    u.default.commit("subscribe/selectSubject", this.subject), u.default.dispatch("subscribe/chooseSubscribeItem");
                },
                goToSource: function() {},
                purchase: function() {
                    (0, l.dataAnalytic)("unlock_click", {
                        frompage: "article"
                    }), u.default.commit("subscribe/selectMessage", this.article), u.default.commit("subscribe/selectSubject", this.subject), 
                    u.default.dispatch("subscribe/openPayMessageOverlay");
                },
                goToRelatedSubject: function(t) {
                    (0, l.dataAnalytic)("article_relatedsubject_click"), wx.navigateTo({
                        url: "/pages/Subject/main?subjectId=".concat(t)
                    });
                },
                goToRelatedArticle: function(t) {
                    var e = t.articleId, c = t.subjectId;
                    (0, l.dataAnalytic)("article_relatedarticle_click"), wx.navigateTo({
                        url: "/pages/Article/main?articleId=".concat(e, "&subjectId=").concat(c)
                    });
                },
                goToComment: function() {
                    (0, l.dataAnalytic)("article_comment_click"), wx.navigateTo({
                        url: "/pages/Comment/main?articleId=".concat(this.article.id)
                    });
                },
                clickLink: function(t) {
                    if (t) {
                        var e, c;
                        try {
                            var n = i(t.match(/https:\/\/\S*xuangubao.cn\/(\w*)\/(\d*)/));
                            e = n[1], c = n[2];
                        } catch (t) {
                            return void console.error(t);
                        }
                        switch (e) {
                          case "article":
                            wx.navigateTo({
                                url: "/pages/Article/main?articleId=".concat(c)
                            });
                            break;

                          case "subject":
                            wx.navigateTo({
                                url: "/pages/Subject/main?subjectId=".concat(c)
                            });
                        }
                    }
                },
                previewImg: function(t) {
                    t && wx.previewImage({
                        imgUrl: t,
                        urls: [ t ]
                    });
                }
            }
        };
        e.default = s;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "pages/Article/Article-create-component", {
    "pages/Article/Article-create-component": function(t, e, c) {
        c("543d").createComponent(c("cd11"));
    }
}, [ [ "pages/Article/Article-create-component" ] ] ]);