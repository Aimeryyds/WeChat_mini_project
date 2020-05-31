(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Article/main" ], {
    "0e9d": function(t, e, n) {
        n.r(e);
        var i = n("6a3a"), r = n("445b");
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        n("9aab");
        var a = n("2877"), o = Object(a.a)(r.default, i.a, i.b, !1, null, "15e7a7ec", null);
        e.default = o.exports;
    },
    "255e": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), n("921b"), e(n("66fd")), t(e(n("0e9d")).default);
        }).call(this, n("543d").createPage);
    },
    "445b": function(t, e, n) {
        n.r(e);
        var i = n("7536"), r = n.n(i);
        for (var c in i) "default" !== c && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(c);
        e.default = r.a;
    },
    "644d": function(t, e, n) {},
    "6a3a": function(t, e, n) {
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, r = [];
        n.d(e, "a", function() {
            return i;
        }), n.d(e, "b", function() {
            return r;
        });
    },
    7536: function(t, e, n) {
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function r(t) {
            return o(t) || a(t) || c();
        }
        function c() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }
        function a(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
        }
        function o(t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
        }
        function s(t, e) {
            return d(t) || u(t, e) || l();
        }
        function l() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }
        function u(t, e) {
            var n = [], i = !0, r = !1, c = void 0;
            try {
                for (var a, o = t[Symbol.iterator](); !(i = (a = o.next()).done) && (n.push(a.value), 
                !e || n.length !== e); i = !0) ;
            } catch (t) {
                r = !0, c = t;
            } finally {
                try {
                    i || null == o.return || o.return();
                } finally {
                    if (r) throw c;
                }
            }
            return n;
        }
        function d(t) {
            if (Array.isArray(t)) return t;
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var h = i(n("4360")), f = n("f8c8"), m = n("ed08"), p = i(n("761b")), I = i(n("d05d")), g = n("bebd"), b = {
            components: {
                TitleBarWithCapsule: function() {
                    return n.e("components/TitleBarWithCapsule").then(n.bind(null, "3878"));
                },
                ArticlePage: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("pages/Article/Article") ]).then(n.bind(null, "cd11"));
                },
                SharePoster: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/SharePoster") ]).then(n.bind(null, "1fcd"));
                },
                SharePane: function() {
                    return n.e("components/SharePane").then(n.bind(null, "4d66"));
                },
                ShareCard: function() {
                    return Promise.all([ n.e("common/vendor"), n.e("components/ShareCard") ]).then(n.bind(null, "81fce"));
                },
                PopUpModal: function() {
                    return n.e("components/PopUpModal").then(n.bind(null, "d017"));
                },
                OpenApp: function() {
                    return n.e("components/OpenApp").then(n.bind(null, "1e6a"));
                },
                PayingFlow: function() {
                    return n.e("components/PayingFlow").then(n.bind(null, "355c"));
                },
                AuthFlow: function() {
                    return n.e("components/AuthFlow").then(n.bind(null, "0fc3"));
                }
            },
            data: function() {
                return {
                    relatedArticles: [],
                    commentsId: [],
                    articleId: null,
                    subjectId: null,
                    commentTotalCount: 0,
                    shareImage: "",
                    shareCard: "",
                    showModal: !1,
                    showOpenAppBtn: !1,
                    showPayFlow: !0,
                    selfShareKey: "",
                    shareKey: "",
                    traceId: "",
                    isLoadingRecommendArticles: !1,
                    mark: "",
                    trackArticle: !1
                };
            },
            computed: {
                article: function() {
                    var t = h.default.getters["entities/articleEntities"];
                    return h.default.commit("subscribe/selectMessage", t[this.articleId] || null), this.articleId && t[this.articleId] || null;
                },
                subject: function() {
                    return this.article ? (h.default.getters["entities/subjectEntities"] || {})[this.subjectId || this.article.fromSubject.id] || null : null;
                },
                comments: function() {
                    if (!this.commentsId.length) return [];
                    var t = h.default.getters["comments/comments"](this.articleId) || {};
                    return this.commentsId.map(function(e) {
                        return t[e.id];
                    }).filter(function(t) {
                        return t;
                    });
                },
                openId: function() {
                    return h.default.getters["user/openId"];
                }
            },
            watch: {
                openId: {
                    handler: function() {
                        this.openId && this.articleId && !this.trackArticle && (this.trackArticle = !0, 
                        (0, f.postMsgView)(this.articleId).then().catch());
                    },
                    immediate: !0
                },
                articleId: function() {
                    this.openId && this.articleId && !this.trackArticle && (this.trackArticle = !0, 
                    (0, f.postMsgView)(this.articleId).then().catch());
                }
            },
            mixins: [ I.default ],
            onShow: function() {
                var t = this, e = s(getCurrentPages().slice(-1), 1)[0];
                if (console.log("lastStack", e), e.options.scene) {
                    var n = decodeURIComponent(e.options.scene);
                    (0, f.getQueryByScene)(n).then(function(e) {
                        var n = e.query;
                        console.log("scenePromise1", n);
                        var i = JSON.parse(n);
                        console.log("scenePromise2", i), t.articleId = i.articleId, t.subjectId = i.subjectId, 
                        t.traceId = i.traceId || "", t.shareKey = i.shareKey ? decodeURIComponent(i.shareKey) : "", 
                        t.fetchArticleInfo();
                    }).catch(function() {
                        wx.navigateTo({
                            url: "/pages/Home/main"
                        });
                    });
                } else this.traceId = e.options.traceId || "", this.shareKey = e.options.shareKey ? decodeURIComponent(e.options.shareKey) : "", 
                this.articleId = e.options.articleId, e.options.subjectId && e.options.subjectId.includes("?") ? this.subjectId = e.options.subjectId.split("?")[0] : this.subjectId = e.options.subjectId, 
                this.fetchArticleInfo();
                this.showOpenAppBtn = (0, m.canOpenApp)(), this.$nextTick(function() {
                    t.startDrawCard();
                }), this.showPayFlow = !0, setTimeout(function() {
                    t.traceId && t.shareKey && (0, g.reportShareRelation)({
                        shareContentId: t.articleId,
                        shareContentType: "article",
                        shareKey: t.shareKey,
                        traceId: t.traceId
                    }), (0, g.produceShareKey)().then(function(e) {
                        t.selfShareKey = encodeURIComponent(e);
                    }).catch(function() {});
                }, 500);
            },
            onHide: function() {
                this.showPayFlow = !1;
            },
            onUnload: function() {
                h.default.commit("comments/CLEAR_COMMENTS", this.articleId), this.relatedArticles = [], 
                this.commentsId = [], this.articleId = null, this.subjectId = null, this.shareImage = "", 
                this.shareCard = "", this.showModal = !1, this.showOpenAppBtn = !1, this.selfShareKey = "", 
                this.shareKey = "", this.traceId = "", h.default.commit("subscribe/unSelectMessage"), 
                h.default.dispatch("overlay/clearOverlayStack"), this.showPayFlow = !1, this.isLoadingRecommendArticles = !1, 
                this.mark = "", this.trackArticle = !1;
            },
            onReachBottom: function() {
                this.fetchRecommendArticles(10);
            },
            onShareAppMessage: function(t) {
                if (this.article) return (0, p.default)("article_share_click"), {
                    title: "分享给你一篇不可错过的文章",
                    path: "/pages/Article/main?articleId=".concat(this.article.id, "&subjectId=").concat(this.article.fromSubject.id, "&traceId=").concat(this.traceId || (0, 
                    g.produceTraceId)(), "&shareKey=").concat(this.selfShareKey),
                    imageUrl: this.shareCard
                };
            },
            methods: {
                fetchArticleInfo: function() {
                    this.fetchRelatedInfo(), h.default.dispatch("entities/fetchArticle", {
                        articleId: this.articleId,
                        subjectId: this.subjectId
                    });
                },
                fetchRelatedInfo: function() {
                    var t = this, e = this.articleId;
                    this.fetchRecommendArticles(5), (0, f.getMessageComment)(e, 0, 5).then(function(n) {
                        if (t.commentTotalCount = n.totalCount, n.hotItems && n.hotItems.length) h.default.commit("comments/UPDATE_COMMENTS", {
                            articleId: e,
                            comments: n.hotItems
                        }), t.commentsId = n.hotItems; else {
                            if (!n.items || !n.items.length) return void (t.commentsId = []);
                            h.default.commit("comments/UPDATE_COMMENTS", {
                                articleId: e,
                                comments: n.items.slice(0, 3)
                            }), t.commentsId = n.items.slice(0, 3);
                        }
                    }).catch(function() {
                        t.commentsId = [];
                    });
                },
                fetchRecommendArticles: function(t) {
                    var e = this;
                    this.articleId && !this.isLoadingRecommendArticles && (this.isLoadingRecommendArticles = !0, 
                    (0, f.fetchMessageRelatedMessages_v3)(this.articleId, this.mark, t).then(function(t) {
                        e.isLoadingRecommendArticles = !1, t.items && t.items.length && (e.relatedArticles = [].concat(r(e.relatedArticles), r(t.items)), 
                        e.mark = t.nextToken || t.nextMark);
                    }).catch(function() {
                        e.isLoadingRecommendArticles = !1;
                    }));
                },
                savePic: function() {
                    var t = this;
                    this.shareImage && m.wxp.getSetting().then(function(e) {
                        !1 !== e.authSetting["scope.writePhotosAlbum"] ? m.wxp.saveImageToPhotosAlbum({
                            filePath: t.shareImage
                        }).then(function(t) {
                            wx.showToast({
                                title: "成功",
                                icon: "success",
                                duration: 1e3
                            });
                        }).catch() : wx.showModal({
                            title: "提示",
                            content: "去授权",
                            success: function(t) {
                                t.confirm ? wx.openSetting() : t.cancel;
                            }
                        });
                    });
                },
                finishDrawPoster: function(t) {
                    this.shareImage = t;
                },
                finishDrawCard: function(t) {
                    this.article && (this.shareCard = t);
                },
                startDrawCard: function() {
                    var t = this, e = 1, n = setInterval(function() {
                        if (t.$refs.card) {
                            if (clearInterval(n), t.shareCard || !t.article) return;
                            t.$refs.card.startDrawCard();
                        } else e > 5 && clearInterval(n);
                        e++;
                    }, 100);
                },
                savePoster: function() {
                    (0, p.default)("article_sharecard_click"), this.showModal = !0, !this.shareImage && this.article && this.$refs.poster && this.$refs.poster.startDrawPoster();
                },
                closeModal: function() {
                    this.showModal = !1;
                },
                goToComment: function() {
                    this.articleId && ((0, p.default)("article_comment_click"), wx.navigateTo({
                        url: "/pages/Comment/main?articleId=".concat(this.articleId)
                    }));
                },
                previewImg: function(t) {
                    var e = t.mp.target.dataset.src;
                    wx.previewImage({
                        current: e,
                        urls: [ e ]
                    });
                }
            }
        };
        e.default = b;
    },
    "9aab": function(t, e, n) {
        var i = n("644d");
        n.n(i).a;
    }
}, [ [ "255e", "common/runtime", "common/vendor" ] ] ]);