require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 33 ], {
    "79kI": function(t, e, n) {
        "use strict";
        var i = n("W///"), r = n("TpbZ");
        var a = function(t) {
            n("Ve9t");
        }, c = n("ybqe")(i.a, r.a, a, "data-v-83146012", null);
        e.a = c.exports;
    },
    Ev9B: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = n("5nAL"), r = n.n(i), a = n("79kI");
        new r.a(a.a).$mount();
    },
    TpbZ: function(t, e, n) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return t.articleKnowledges.length ? n("div", {
                    staticClass: "container",
                    style: {
                        backgroundImage: "url(" + t.bookplanInfo.cover_url + ")"
                    }
                }, [ n("div", {
                    staticClass: "img-overlay"
                }), t._v(" "), n("div", {
                    staticClass: "logo"
                }), t._v(" "), n("div", {
                    staticClass: "article-tabs"
                }, t._l(t.books, function(e, i) {
                    return n("div", {
                        key: e.bookId,
                        staticClass: "tab",
                        attrs: {
                            eventid: "0-" + i
                        },
                        on: {
                            click: function(n) {
                                t.clickTab(e.bookId);
                            }
                        }
                    }, [ n("span", [ t._v(t._s(e.title)) ]), t._v(" "), e.bookId === t.currentBookId ? n("div", {
                        staticClass: "border"
                    }) : t._e() ]);
                })), t._v(" "), n("div", {
                    staticClass: "cards-area"
                }, [ n("scrollView", {
                    staticClass: "article-list list",
                    attrs: {
                        "scroll-y": "",
                        "scroll-with-animation": "",
                        "scroll-into-view": t.currentArticleId,
                        mpcomid: "0"
                    }
                }, t._l(t.articleKnowledges, function(e, i) {
                    return n("div", {
                        key: e.article_id,
                        staticClass: "item",
                        class: {
                            active: e.article_id === t.currentArticleId
                        },
                        attrs: {
                            id: e.article_id,
                            eventid: "1-" + i
                        },
                        on: {
                            click: function(n) {
                                t.clickArticle(e.article_id);
                            }
                        }
                    }, [ t._v("第" + t._s(i + 1) + "章") ]);
                })), t._v(" "), n("scrollView", {
                    staticClass: "card-list list",
                    attrs: {
                        "scroll-y": "",
                        "scroll-with-animation": "",
                        "scroll-into-view": t.articleKnowledges[t.currentArticleIndex].article_knowledges[0].id,
                        mpcomid: "1"
                    }
                }, t._l(t.articleKnowledges[t.currentArticleIndex].article_knowledges, function(e, i) {
                    return n("div", {
                        key: i,
                        staticClass: "item-card",
                        attrs: {
                            id: e.id
                        }
                    }, [ n("div", {
                        staticClass: "card-meta"
                    }, [ n("div", [ n("div", {
                        staticClass: "title title-en"
                    }, [ t._v(t._s(e.title_en)) ]), t._v(" "), n("div", {
                        staticClass: "title title-cn"
                    }, [ n("span", [ t._v(t._s(e.title_cn)) ]), t._v(" "), n("div", {
                        staticClass: "border"
                    }) ]) ]), t._v(" "), n("button", {
                        staticClass: "btn-save",
                        attrs: {
                            eventid: "2-" + i
                        },
                        on: {
                            click: function(n) {
                                t.shareKnowledge(e);
                            }
                        }
                    }, [ n("div", {
                        staticClass: "download"
                    }), t._v("保存精美卡片\n                    ") ]) ], 1), t._v(" "), n("div", {
                        staticClass: "definition"
                    }, [ t._v(t._s(e.content_cn)) ]), t._v(" "), e.image_url ? n("img", {
                        staticClass: "img",
                        attrs: {
                            src: e.image_url,
                            mode: "widthFix"
                        }
                    }) : t._e() ]);
                })) ], 1) ]) : t._e();
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    Ve9t: function(t, e) {},
    "W///": function(t, e, n) {
        "use strict";
        var i = n("Dd8w"), r = n.n(i), a = n("mvHQ"), c = n.n(a), o = n("Xxa5"), s = n.n(o), l = n("Gu7T"), d = n.n(l), u = n("exGp"), v = n.n(u), _ = n("NYxO"), k = n("IcnI"), b = n("apOE"), f = n("Apws"), p = n("1zHM"), I = n("/WWA");
        e.a = {
            store: k.a,
            data: function() {
                return {
                    currentBookId: "",
                    currentArticleId: "",
                    currentArticleIndex: 0,
                    articleKnowledges: [],
                    scrollTop: 0
                };
            },
            mounted: function() {
                var t = this.$route.query.scene;
                t && f.a.track({
                    event_code: "bookplan-knowledgecard-view",
                    event_value: {
                        bookplan_title: this.bookplanInfo.title,
                        scene: t
                    }
                }), this.currentBookId = this.books[0].bookId, this.fetchArticleKnowledges();
            },
            methods: {
                fetchArticleKnowledges: function() {
                    var t = this;
                    return v()(s.a.mark(function e() {
                        var n, i;
                        return s.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, b.a.listKnowledgeCardsByBookId(t.currentBookId);

                              case 2:
                                n = e.sent, i = n.objects, t.articleKnowledges = [].concat(d()(i)), t.currentArticleId = i[0].article_id;

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                clickTab: function(t) {
                    t !== this.currentBookId && (this.currentBookId = t, this.fetchArticleKnowledges(), 
                    this.currentArticleIndex = 0);
                },
                clickArticle: function(t) {
                    var e = this;
                    this.currentArticleId = t, this.currentArticleIndex = this.articleKnowledges.findIndex(function(t) {
                        return e.currentArticleId === t.article_id;
                    });
                },
                shareKnowledge: function(t) {
                    var e = this;
                    return v()(s.a.mark(function n() {
                        var i, r, a, o, l, d, u, v;
                        return s.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return i = t.title_en, r = t.title_cn, a = t.content_cn, o = t.book_name_cn, l = {
                                    bgUrl: e.bookplanInfo.background_url,
                                    titleEn: i,
                                    titleCn: r,
                                    contentCn: a,
                                    bookName: o
                                }, d = I.f + "/reading/bookplan/knowledge-share?shareOptions=" + encodeURIComponent(c()(l)), 
                                n.next = 5, p.a.genImage({
                                    url: d,
                                    width: 375,
                                    height: 100
                                });

                              case 5:
                                return u = n.sent, v = u.url, n.next = 9, f.a.track({
                                    event_code: "bookplan-saveknowledgecard",
                                    event_value: {
                                        bookplan_title: e.bookplanInfo.title,
                                        book_title: o,
                                        knowledgecard_name: r
                                    }
                                });

                              case 9:
                                e.$router.push({
                                    path: "/pages/shareCaptureImage/main",
                                    query: {
                                        type: "knowledge",
                                        url: v
                                    }
                                });

                              case 10:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                }
            },
            computed: r()({}, Object(_.c)({
                bookplanInfo: function(t) {
                    return t.bookplanData.bookplanInfo;
                }
            }), {
                books: function() {
                    return this.bookplanInfo.books.map(function(t) {
                        return {
                            bookId: t.book_id,
                            title: t.name_cn
                        };
                    });
                }
            })
        };
    }
}, [ "Ev9B" ]);