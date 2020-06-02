require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 4 ], {
    "/1a9": function(t, a) {},
    "0ILS": function(t, a, e) {
        "use strict";
        var n = e("Dd8w"), s = e.n(n), i = e("NYxO");
        a.a = {
            props: [ "avatarUrl", "nickname", "isSmall", "card" ],
            computed: s()({}, Object(i.c)({
                bookplanInfo: function(t) {
                    return t.bookplanData.bookplanInfo;
                },
                todayTask: function(t) {
                    return t.bookplanData.todayTask;
                }
            }), Object(i.b)([ "currentBook", "usedMinTime" ]))
        };
    },
    "2Zyj": function(t, a, e) {
        "use strict";
        var n = e("XhDW");
        a.a = {
            components: {
                ShareCard: n.a
            },
            props: [ "cards", "nickname", "avatarUrl", "current" ],
            methods: {
                setCurrent: function(t) {
                    var a = t.target.current;
                    this.$emit("swipe", a);
                }
            }
        };
    },
    NVr6: function(t, a, e) {
        "use strict";
        var n = e("2Zyj"), s = e("kwTE");
        var i = function(t) {
            e("SMKL");
        }, r = e("ybqe")(n.a, s.a, i, "data-v-5d3e8c1c", null);
        a.a = r.exports;
    },
    PHt1: function(t, a, e) {
        "use strict";
        var n = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return t.loading ? t._e() : e("div", {
                    staticClass: "plan-achievement"
                }, [ t.isError ? e("div", {
                    staticClass: "error-display"
                }, [ t._v("网络错误，请下拉刷新试一试~") ]) : t._e(), t._v(" "), t.todayTask.article_amount ? t._e() : e("div", {
                    staticClass: "need-more-container"
                }, [ e("img", {
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/1561afb9b2b25158a3ae3cad3b2724a4.5e3a1389bbf3743e0fc6108585d1e53c.png"
                    }
                }), t._v(" "), e("div", {
                    staticClass: "tip-title"
                }, [ t._v("温馨提示") ]), t._v(" "), e("div", {
                    staticClass: "tip"
                }, [ t._v("这章你之前已经读过啦") ]), t._v(" "), e("div", {
                    staticClass: "tip"
                }, [ t._v("今天还需要读" + t._s(t.bookplanInfo.daily_amount) + "章新内容哦~") ]), t._v(" "), e("button", {
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(a) {
                            t.showArticle("CATALOG");
                        }
                    }
                }, [ t._v("查看目录") ]) ], 1), t._v(" "), t.inProgerss ? e("div", {
                    staticClass: "need-more-container"
                }, [ e("img", {
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/4e25f9bcf8c7f7af08b53765c27b79a5.d07c35a770df5a3bb758a3dc84ed05ce.png"
                    }
                }), t._v(" "), e("div", {
                    staticClass: "step-wrap"
                }, t._l(t.steps, function(a, n) {
                    return e("div", {
                        key: n,
                        staticClass: "step"
                    }, [ 0 !== n ? e("div", {
                        staticClass: "line",
                        class: {
                            finished: a
                        }
                    }) : t._e(), t._v(" "), e("div", {
                        staticClass: "check-mark",
                        class: {
                            finished: a
                        }
                    }, [ e("i", {
                        staticClass: "ib ib-check",
                        staticStyle: {
                            "font-weight": "bold"
                        }
                    }) ], 1) ]);
                })), t._v(" "), e("div", {
                    staticClass: "tip-title"
                }, [ t._v("太棒了，你已经读完" + t._s(t.todayTask.article_amount) + "章啦") ]), t._v(" "), e("div", {
                    staticClass: "tip"
                }, [ t._v("今日任务" + t._s(t.bookplanInfo.daily_amount) + "章") ]), t._v(" "), e("button", {
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(a) {
                            t.showArticle("ARTICLE");
                        }
                    }
                }, [ t._v("下一章") ]) ], 1) : t._e(), t._v(" "), t.todayTask.is_finished ? e("div", {
                    staticClass: "share",
                    class: {
                        pt34: !t.bookplanInfo.has_knowledge_card
                    }
                }, [ t.lectures.length ? e("div", {
                    staticClass: "lectures"
                }, [ e("div", {
                    staticClass: "header"
                }, [ t._v("今日章节精讲") ]), t._v(" "), t._l(t.lectures, function(a, n) {
                    return e("div", {
                        key: a.article_lecture_id,
                        staticClass: "lecture"
                    }, [ e("div", {
                        staticClass: "title"
                    }, [ t._v(t._s(a.title_cn)) ]), t._v(" "), e("div", {
                        staticClass: "nav",
                        attrs: {
                            eventid: "2-" + n
                        },
                        on: {
                            click: function(e) {
                                t.nav(a.article_id);
                            }
                        }
                    }, [ e("span", {
                        staticClass: "nav-text"
                    }, [ t._v("查看") ]), t._v(" "), e("i", {
                        staticClass: "nav-icon ib ib-chevron-right"
                    }) ], 1) ]);
                }) ], 2) : t._e(), t._v(" "), t.bookplanInfo.has_knowledge_card ? e("KnowledgeCardPoster", {
                    attrs: {
                        cards: t.cards,
                        avatarUrl: t.avatarUrl,
                        nickname: t.nickname,
                        current: t.currentPosterIndex,
                        eventid: "3",
                        mpcomid: "1"
                    },
                    on: {
                        swipe: t.swipe
                    }
                }) : e("ShareCard", {
                    attrs: {
                        avatarUrl: t.avatarUrl,
                        nickname: t.nickname,
                        mpcomid: "0"
                    }
                }), t._v(" "), e("div", {
                    staticClass: "button-container"
                }, [ e("button", {
                    staticClass: "button-wechat",
                    attrs: {
                        "open-type": "share"
                    }
                }, [ e("i", {
                    staticClass: "ib ib-wechat"
                }), t._v("转发给好友\n            ") ], 1), t._v(" "), e("button", {
                    staticClass: "button-wechat-moments",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: t.sharePoster
                    }
                }, [ e("i", {
                    staticClass: "ib ib-wechat-moments"
                }), t._v("生成海报分享\n            ") ], 1) ], 1) ], 1) : t._e(), t._v(" "), t.bookplanInfo.has_knowledge_card && t.isShowSlideGuide ? e("div", {
                    staticClass: "fullscreen",
                    attrs: {
                        eventid: "5"
                    },
                    on: {
                        click: t.closeGuide
                    }
                }, [ e("img", {
                    staticClass: "guide",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kdbdns/67e35e157ce00adf6a4748899a90d174.495d27d139be7ac0c4d9ce4d1b4cf5d7.png"
                    }
                }) ]) : t._e() ]);
            },
            staticRenderFns: []
        };
        a.a = n;
    },
    SMKL: function(t, a) {},
    XhDW: function(t, a, e) {
        "use strict";
        var n = e("0ILS"), s = e("ukgC");
        var i = function(t) {
            e("iD7k");
        }, r = e("ybqe")(n.a, s.a, i, "data-v-1eb972a6", null);
        a.a = r.exports;
    },
    iD7k: function(t, a) {},
    kwTE: function(t, a, e) {
        "use strict";
        var n = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {
                    staticClass: "container"
                }, [ e("div", {
                    staticClass: "card-index"
                }, [ t._v("今日知识卡片：" + t._s(t.current + 1) + " / " + t._s(t.cards.length)) ]), t._v(" "), e("swiper", {
                    staticClass: "swiper",
                    attrs: {
                        current: t.current,
                        "previous-margin": "30px",
                        "next-margin": "30px",
                        eventid: "0"
                    },
                    on: {
                        change: t.setCurrent
                    }
                }, t._l(t.cards, function(a, n) {
                    return e("swiper-item", {
                        key: n,
                        staticClass: "item",
                        attrs: {
                            mpcomid: "1-" + n
                        }
                    }, [ e("ShareCard", {
                        attrs: {
                            card: a,
                            nickname: t.nickname,
                            avatarUrl: t.avatarUrl,
                            isSmall: n !== t.current,
                            mpcomid: "0-" + n
                        }
                    }) ], 1);
                })) ], 1);
            },
            staticRenderFns: []
        };
        a.a = n;
    },
    opVf: function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("5nAL"), s = e.n(n), i = e("wV9k");
        new s.a(i.a).$mount();
    },
    qNfx: function(t, a, e) {
        "use strict";
        var n = e("mvHQ"), s = e.n(n), i = e("Dd8w"), r = e.n(i), o = e("Xxa5"), c = e.n(o), l = e("//Fk"), d = e.n(l), u = e("d7EF"), v = e.n(u), _ = e("exGp"), p = e.n(_), h = e("NYxO"), k = e("MPG0"), f = e("1zHM"), m = e("apOE"), b = e("Apws"), g = e("4VVH"), C = e("IcnI"), w = e("XhDW"), I = e("NVr6");
        a.a = {
            store: C.a,
            data: function() {
                return {
                    userBookPlanId: "",
                    nickname: "",
                    avatarUrl: "",
                    nextArticleId: "",
                    specialEntryInfo: null,
                    shareOptions: null,
                    isError: !1,
                    loading: !0,
                    isShowNewPoster: !0,
                    isShowSlideGuide: !1,
                    currentPosterIndex: 0,
                    cards: [],
                    startTime: 0,
                    endTime: 0,
                    lectures: []
                };
            },
            components: {
                ShareCard: w.a,
                KnowledgeCardPoster: I.a
            },
            onShow: function() {
                this.startTime = Date.now();
                var t = this.bookplanInfo, a = t.book_plan_id, e = t.title;
                b.a.sensorLog({
                    event_code: "RDbookplan_PlanAchievement_PV",
                    event_value: {
                        bookplan_id: a,
                        bookplan_name: e
                    }
                });
            },
            onHide: function() {
                this.endTime = Date.now(), this.todayTask.is_finished && b.a.track({
                    event_code: "bookplan-finishpage-view",
                    event_value: {
                        bookplan_title: this.bookplanInfo.title,
                        duration: (this.endTime - this.startTime) / 1e3
                    }
                });
            },
            mounted: function() {
                var t = this;
                return p()(c.a.mark(function a() {
                    var e, n, s, i, r, o, l, u;
                    return c.a.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return a.prev = 0, e = t.$route.query, n = e.userBookPlanId, s = e.articleId, a.next = 4, 
                            d.a.all([ k.a.listDailyLectures(n), C.a.dispatch("fetchBookplan", n) ]);

                          case 4:
                            if (i = a.sent, r = v()(i, 1), o = r[0].objects, t.userBookPlanId = n, t.lectures = o, 
                            t.loading = !0, !t.todayTask.is_finished) {
                                a.next = 15;
                                break;
                            }
                            return a.next = 13, t.fetchShareInfo();

                          case 13:
                            return t.checkIsShowGuide(), a.abrupt("return");

                          case 15:
                            if (!t.inProgerss) {
                                a.next = 21;
                                break;
                            }
                            return a.next = 18, f.a.achieveArticle(s);

                          case 18:
                            l = a.sent, u = l.next_article_id, t.nextArticleId = u;

                          case 21:
                            a.next = 26;
                            break;

                          case 23:
                            a.prev = 23, a.t0 = a.catch(0), t.isError = !0;

                          case 26:
                            return a.prev = 26, t.loading = !1, a.finish(26);

                          case 29:
                          case "end":
                            return a.stop();
                        }
                    }, a, t, [ [ 0, 23, 26, 29 ] ]);
                }))();
            },
            onPullDownRefresh: function() {
                this.fetchShareInfo();
            },
            computed: r()({}, Object(h.c)({
                bookplanInfo: function(t) {
                    return t.bookplanData.bookplanInfo;
                },
                todayTask: function(t) {
                    return t.bookplanData.todayTask;
                }
            }), Object(h.b)([ "currentBook", "usedMinTime" ]), {
                bgUrl: function() {
                    return this.bookplanInfo.background_url;
                },
                steps: function() {
                    for (var t = new Array(this.bookplanInfo.daily_amount).fill(0), a = 0; a < this.todayTask.article_amount; a += 1) t[a] = 1;
                    return t;
                },
                inProgerss: function() {
                    return this.todayTask.article_amount > 0 && this.todayTask.article_amount < this.bookplanInfo.daily_amount;
                }
            }),
            methods: {
                fetchShareInfo: function() {
                    var t = this;
                    return p()(c.a.mark(function a() {
                        var e, n, s, i, r, o;
                        return c.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                if (e = t.bookplanInfo.has_knowledge_card, n = Object(g.a)(), s = n.nickname, i = n.avatar_url, 
                                t.nickname = s, t.avatarUrl = i, !e) {
                                    a.next = 13;
                                    break;
                                }
                                return a.next = 7, m.a.listKnowledgeCardsByArticleIds(t.todayTask.article_ids);

                              case 7:
                                r = a.sent, o = r.objects, t.cards = o, t.genShareOptions(t.cards[t.currentPosterIndex]), 
                                a.next = 14;
                                break;

                              case 13:
                                t.genShareOptions();

                              case 14:
                                t.isError = !1;

                              case 15:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                showArticle: function(t) {
                    var a = "CATALOG" === t ? this.currentBook.book_id : "", e = "CATALOG" === t ? this.currentBook.current_read.article_id : this.nextArticleId;
                    this.$router.push({
                        path: "/pages/article/main",
                        query: {
                            bookId: a,
                            articleId: e,
                            paraId: "",
                            userBookPlanId: this.userBookPlanId
                        }
                    });
                },
                sharePoster: function() {
                    var t = this;
                    return p()(c.a.mark(function a() {
                        var e, n, i, r, o, l, d;
                        return c.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return e = t.bookplanInfo, n = e.title, i = e.book_plan_id, b.a.track({
                                    event_code: "bookplan-share-in-moments",
                                    event_value: {
                                        bookplan_title: n
                                    }
                                }), b.a.sensorLog({
                                    event_code: "RDbookplan_PlanAchievement_Share",
                                    event_value: {
                                        bookplan_id: i,
                                        bookplan_name: n,
                                        channel: "保存海报"
                                    }
                                }), r = "https://web.shanbay.com/reading/bookplan/plan-share?shareOptions=" + encodeURIComponent(s()(t.shareOptions)), 
                                o = t.bookplanInfo.has_knowledge_card ? 753 : 577, a.next = 7, f.a.genImage({
                                    url: r,
                                    height: o,
                                    width: 375
                                });

                              case 7:
                                l = a.sent, d = l.url, t.$router.push({
                                    path: "/pages/shareCaptureImage/main",
                                    query: {
                                        type: "plan-poster",
                                        url: d,
                                        height: o
                                    }
                                });

                              case 10:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                genShareOptions: function(t) {
                    var a = this.bookplanInfo, e = a.title, n = a.completed_days, s = a.cover_url, i = this.todayTask.word_amount;
                    if (this.shareOptions = {
                        title: e,
                        completedDays: n,
                        wordAmount: i,
                        readMinTime: this.usedMinTime,
                        coverUrl: s,
                        bookCover: this.currentBook.cover_url,
                        nickname: this.nickname,
                        avatarUrl: this.avatarUrl
                    }, t) {
                        var o = t.title_en, c = t.title_cn, l = t.content_cn;
                        this.shareOptions = r()({}, this.shareOptions, {
                            cn: c,
                            en: o,
                            content: l
                        });
                    }
                },
                checkIsShowGuide: function() {
                    wx.getStorageSync("isShowBookplanPosterSlideGuide") || (this.isShowSlideGuide = !0, 
                    wx.setStorage({
                        key: "isShowBookplanPosterSlideGuide",
                        data: !0
                    }));
                },
                closeGuide: function() {
                    this.isShowSlideGuide = !1;
                },
                swipe: function(t) {
                    this.currentPosterIndex = t, this.genShareOptions(this.cards[t]);
                },
                nav: function(t) {
                    this.$router.push({
                        path: "/pages/article/main",
                        query: {
                            articleId: t,
                            userBookPlanId: this.userBookPlanId,
                            isShowLecture: 1,
                            isFromBookplan: 1
                        }
                    });
                }
            },
            onShareAppMessage: function() {
                var t = this.bookplanInfo, a = t.title, e = t.book_plan_id;
                return b.a.track({
                    event_code: "bookplan-share-with-friend",
                    event_value: {
                        bookplan_title: a
                    }
                }), b.a.sensorLog({
                    event_code: "RDbookplan_PlanAchievement_Share",
                    event_value: {
                        bookplan_id: e,
                        bookplan_name: a,
                        channel: "微信好友"
                    }
                }), {
                    title: this.nickname + "正在参加扇贝读书计划，邀请你来一起参加！",
                    path: "/pages/login/main?shareFrom=bookplan&target=planPurchase&scene=15557"
                };
            }
        };
    },
    ukgC: function(t, a, e) {
        "use strict";
        var n = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {
                    staticClass: "container",
                    class: {
                        small: t.isSmall
                    }
                }, [ e("div", {
                    staticClass: "banner",
                    style: {
                        "background-image": "url(" + t.bookplanInfo.cover_url + ")"
                    }
                }, [ e("div", {
                    staticClass: "brand"
                }, [ e("img", {
                    staticClass: "logo",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/7e068960bc04ee22a04765e9dde28187.615db911797bdf922eccf658bafe78d7.png"
                    }
                }), t._v(" "), e("div", {
                    staticClass: "title"
                }, [ t._v(t._s(t.bookplanInfo.title)) ]) ]) ]), t._v(" "), e("div", {
                    staticClass: "info"
                }, [ e("div", {
                    staticClass: "person"
                }, [ e("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.avatarUrl
                    }
                }), t._v(" "), e("div", {
                    staticClass: "person-info-wrapper"
                }, [ e("div", {
                    staticClass: "nickname"
                }, [ t._v(t._s(t.nickname)) ]), t._v(" "), e("div", {
                    staticClass: "slogan"
                }, [ t._v("参与「扇贝·读书计划」第" + t._s(t.bookplanInfo.completed_days) + "天") ]) ]) ]), t._v(" "), e("div", {
                    staticClass: "reading-info"
                }, [ e("div", [ e("div", {
                    staticClass: "item-title"
                }, [ t._v("今日阅读词数") ]), t._v(" "), e("div", {
                    staticClass: "data"
                }, [ e("div", {
                    staticClass: "number"
                }, [ t._v(t._s(t.todayTask.word_amount)) ]), t._v(" "), e("div", {
                    staticClass: "unit"
                }, [ t._v("词") ]) ]) ]), t._v(" "), e("div", [ e("div", {
                    staticClass: "item-title"
                }, [ t._v("今日学习时长") ]), t._v(" "), e("div", {
                    staticClass: "data"
                }, [ e("div", {
                    staticClass: "number"
                }, [ t._v(t._s(t.usedMinTime)) ]), t._v(" "), e("div", {
                    staticClass: "unit"
                }, [ t._v("min") ]) ]) ]), t._v(" "), e("img", {
                    staticClass: "cover",
                    attrs: {
                        src: t.currentBook.cover_url
                    }
                }) ]), t._v(" "), t.bookplanInfo.has_knowledge_card ? e("div", {
                    staticClass: "knowledge-card"
                }, [ e("div", {
                    staticClass: "title-en"
                }, [ t._v(t._s(t.card.title_en)) ]), t._v(" "), e("div", {
                    staticClass: "title-cn"
                }, [ t._v(t._s(t.card.title_cn)) ]), t._v(" "), e("div", {
                    staticClass: "content"
                }, [ t._v(t._s(t.card.content_cn)) ]) ]) : t._e() ]), t._v(" "), t.bookplanInfo.has_knowledge_card ? e("navigator", {
                    staticClass: "nav",
                    attrs: {
                        url: "/pages/articleKnowledges/main"
                    }
                }, [ t._v("查看全部知识卡片") ]) : t._e() ], 1);
            },
            staticRenderFns: []
        };
        a.a = n;
    },
    wV9k: function(t, a, e) {
        "use strict";
        var n = e("qNfx"), s = e("PHt1");
        var i = function(t) {
            e("/1a9");
        }, r = e("ybqe")(n.a, s.a, i, "data-v-53dfc209", null);
        a.a = r.exports;
    }
}, [ "opVf" ]);