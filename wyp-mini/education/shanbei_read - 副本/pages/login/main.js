require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 6 ], {
    DOuZ: function(a, e, t) {
        "use strict";
        var n = {
            render: function() {
                var a = this, e = a.$createElement, t = a._self._c || e;
                return a.groups ? t("div", [ t("navigator", {
                    staticClass: "search",
                    attrs: {
                        url: "/pages/search/main"
                    }
                }, [ t("i", {
                    staticClass: "ib ib-search"
                }), a._v(" "), t("span", [ a._v("输入你想要搜索的书籍") ]) ], 1), a._v(" "), a.url ? t("img", {
                    staticClass: "bookplan-landing",
                    attrs: {
                        src: a.url,
                        alt: "bookplan-landing",
                        eventid: "0"
                    },
                    on: {
                        click: a.navigate
                    }
                }) : t("div", {
                    staticClass: "banner"
                }), a._v(" "), t("div", {
                    staticClass: "home-plan-container"
                }, [ a._m(0), a._v(" "), t("home-plan-list", {
                    attrs: {
                        bookplans: a.homePlans,
                        scene: "15636",
                        mpcomid: "0"
                    }
                }), a._v(" "), t("div", {
                    staticClass: "all",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: a.showAll
                    }
                }, [ t("div", [ a._v("查看全部计划") ]), a._v(" "), t("div", {
                    staticClass: "arrow-right"
                }) ]) ], 1), a._v(" "), a._m(1), a._v(" "), a._l(a.groups, function(e, n) {
                    return t("Bundle", a._b({
                        key: e.id,
                        attrs: {
                            rank: n,
                            mpcomid: "1-" + n
                        }
                    }, "Bundle", e, !1));
                }) ], 2) : a._e();
            },
            staticRenderFns: [ function() {
                var a = this.$createElement, e = this._self._c || a;
                return e("div", {
                    staticClass: "item-header plan-margin"
                }, [ e("div", {
                    staticClass: "indicator"
                }), this._v(" "), e("div", {
                    staticClass: "title"
                }, [ this._v("读书计划") ]), this._v(" "), e("div", {
                    staticClass: "slogan"
                }, [ this._v("带你轻松读懂英文书") ]) ]);
            }, function() {
                var a = this.$createElement, e = this._self._c || a;
                return e("div", {
                    staticClass: "item-header book-margin"
                }, [ e("div", {
                    staticClass: "indicator"
                }), this._v(" "), e("div", {
                    staticClass: "title"
                }, [ this._v("电子书") ]), this._v(" "), e("div", {
                    staticClass: "slogan"
                }, [ this._v("英文原版好书尽在这里") ]) ]);
            } ]
        };
        e.a = n;
    },
    GG4c: function(a, e, t) {
        "use strict";
        var n = t("Xxa5"), i = t.n(n), s = t("exGp"), r = t.n(s), o = t("NYxO"), c = t("IcnI"), p = t("UJdu"), l = t("Apws"), u = t("eRdb"), d = (t("qJN/"), 
        t("QjpU")), g = t("/5h/"), m = t("/WWA");
        e.a = {
            store: c.a,
            components: {
                Bundle: p.a,
                HomePlanList: u.a
            },
            computed: Object(o.c)({
                groups: function(a) {
                    return a.groupData.mallData;
                },
                url: function(a) {
                    return a.groupData.url;
                },
                homePlans: function(a) {
                    return a.groupData.homePlans;
                },
                shareReflux: function(a) {
                    return a.globalData.shareReflux;
                }
            }),
            mounted: function() {
                var a = this;
                return r()(i.a.mark(function e() {
                    var t, n, s, r;
                    return i.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t = a.$route.query, Object(g.a)(t), c.a.dispatch("fetchMallData"), n = t.target, 
                            s = t.productId, r = t.bookId, n) {
                                e.next = 8;
                                break;
                            }
                            return l.a.track({
                                event_code: "reading-bookstore-pv"
                            }), l.a.sensorLog({
                                event_code: "RDreading_BookStore_PV"
                            }), e.abrupt("return");

                          case 8:
                            if (!Object(d.a)(n)) {
                                e.next = 11;
                                break;
                            }
                            return a.$router.push({
                                path: "/pages/" + n + "/main",
                                isTab: !0
                            }), e.abrupt("return");

                          case 11:
                            if ("planPurchase" !== n) {
                                e.next = 14;
                                break;
                            }
                            return a.$router.push({
                                path: "/pages/planLanding/main",
                                query: {
                                    id: m.e
                                }
                            }), e.abrupt("return");

                          case 14:
                            a.$router.push({
                                path: "/pages/" + n + "/main",
                                query: {
                                    id: s,
                                    bookId: r
                                }
                            });

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, a);
                }))();
            },
            methods: {
                navigate: function() {
                    l.a.track({
                        event_code: "bookplan-banner-click"
                    }), this.$router.push({
                        path: "/pages/planLanding/main",
                        query: {
                            id: m.e
                        }
                    });
                },
                showAll: function() {
                    var a = this;
                    return r()(i.a.mark(function e() {
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, l.a.track({
                                    event_code: "bookplan-homepagelist-viewall"
                                });

                              case 2:
                                a.$router.push({
                                    path: "/pages/planLanding/main",
                                    query: {
                                        id: m.e
                                    }
                                });

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, a);
                    }))();
                }
            },
            onShareAppMessage: function() {
                return {
                    title: "英文原版好书尽在这里",
                    path: "/pages/login/main",
                    imageUrl: "https://media-image1.baydn.com/storage_media_image/kvhfgj/7a8615c10b5e74693715b6d9663357c0.2c372690c9858c4001b12beea6553365.jpg?x-oss-process=image/quality,q_80"
                };
            }
        };
    },
    GTUj: function(a, e) {},
    QjpU: function(a, e, t) {
        "use strict";
        var n = t("hGQ5"), i = t.n(n);
        e.a = function(a) {
            var e = "pages/" + a + "/main";
            return i.a.tabBar.list.some(function(a) {
                return a.pagePath === e;
            });
        };
    },
    UJdu: function(a, e, t) {
        "use strict";
        var n = t("cRDk"), i = t("gBac");
        var s = function(a) {
            t("wDhj");
        }, r = t("ybqe")(n.a, i.a, s, "data-v-055477ef", null);
        e.a = r.exports;
    },
    cRDk: function(a, e, t) {
        "use strict";
        var n = t("Xxa5"), i = t.n(n), s = t("exGp"), r = t.n(s), o = t("4yRm"), c = t("KntP"), p = t("Apws");
        e.a = {
            components: {
                SimpleBook: o.a,
                ComplexBook: c.a
            },
            props: [ "group_title", "format", "objects", "id", "rank" ],
            methods: {
                handleNavToGroup: function() {
                    var a = this;
                    return r()(i.a.mark(function e() {
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, p.a.track({
                                    event_code: "reading-group-detail-click",
                                    event_value: {
                                        group_title: a.group_title,
                                        rank: a.rank
                                    }
                                });

                              case 2:
                                return e.next = 4, a.sensorTrack("首页分组名称");

                              case 4:
                                a.$router.push({
                                    path: "/pages/group/main",
                                    query: {
                                        id: a.id,
                                        title: a.group_title
                                    }
                                });

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e, a);
                    }))();
                },
                track: function(a) {
                    p.a.track({
                        event_code: "reading-group-item-click",
                        event_value: {
                            group_title: this.group_title,
                            rank: this.rank,
                            item_title: a
                        }
                    });
                },
                sensorTrack: function(a) {
                    p.a.sensorLog({
                        event_code: "RDreading_BookStore_ClickElement",
                        event_value: {
                            element_name: a
                        }
                    });
                },
                handleNavToDetail: function(a, e, t) {
                    var n = this;
                    return r()(i.a.mark(function s() {
                        return i.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.next = 2, n.track(t);

                              case 2:
                                return i.next = 4, n.sensorTrack("分组书籍");

                              case 4:
                                n.$router.push({
                                    path: "/pages/detail/main",
                                    query: {
                                        id: a,
                                        bookId: e
                                    }
                                });

                              case 5:
                              case "end":
                                return i.stop();
                            }
                        }, s, n);
                    }))();
                },
                complexBookNavToDetail: function(a) {
                    var e = this;
                    return r()(i.a.mark(function t() {
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, e.track(a);

                              case 2:
                                return t.next = 4, e.sensorTrack("分组书籍");

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                }
            }
        };
    },
    gBac: function(a, e, t) {
        "use strict";
        var n = {
            render: function() {
                var a = this, e = a.$createElement, t = a._self._c || e;
                return t("div", {
                    staticClass: "bundle"
                }, [ t("div", {
                    staticClass: "header",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: a.handleNavToGroup
                    }
                }, [ t("div", {
                    staticClass: "title"
                }, [ a._v("- " + a._s(a.group_title) + " -") ]), a._v(" "), t("div", {
                    staticClass: "next"
                }) ]), a._v(" "), 1 === a.format ? t("div", {
                    staticClass: "simple-item"
                }, a._l(a.objects, function(e, n) {
                    return t("div", {
                        key: e.book_id,
                        attrs: {
                            eventid: "1-" + n
                        },
                        on: {
                            click: function(t) {
                                a.handleNavToDetail(e.id, e.book_id, e.name_cn);
                            }
                        }
                    }, [ t("SimpleBook", a._b({
                        attrs: {
                            mpcomid: "0-" + n
                        }
                    }, "SimpleBook", e, !1)) ], 1);
                })) : a._e(), a._v(" "), 2 === a.format ? t("div", {
                    staticClass: "complex-item"
                }, a._l(a.objects, function(e, n) {
                    return t("ComplexBook", a._b({
                        key: e.book_id,
                        attrs: {
                            eventid: "2-" + n,
                            mpcomid: "1-" + n
                        },
                        on: {
                            "handle-click": function(t) {
                                a.complexBookNavToDetail(e.name_cn);
                            }
                        }
                    }, "ComplexBook", e, !1));
                })) : a._e() ]);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    hGQ5: function(a, e) {
        a.exports = {
            pages: [ "pages/login/main", "pages/desk/main", "pages/mine/main", "pages/detail/main", "pages/group/main", "pages/bookshelf/main", "pages/article/main", "pages/intro/main", "pages/unlockBook/main", "pages/articleAchievement/main", "pages/bookAchievement/main", "pages/shareCaptureImage/main", "pages/remindSetting/main", "pages/purchase/main", "pages/orderInfo/main", "pages/search/main", "pages/planList/main", "pages/planReward/main", "pages/planIndex/main", "pages/bookPlanAchievement/main", "pages/planProgress/main", "pages/planPurchaseDone/main", "pages/planOrder/main", "pages/planDetail/main", "pages/planOrderDetail/main", "pages/wordlist/main", "pages/avengers/main", "pages/articleKnowledges/main", "pages/scholarship/main", "pages/scholarshipDetail/main", "pages/planFinish/main", "pages/planLanding/main", "pages/CourseList/main", "pages/CourseDetail/main", "pages/CourseArticleIndex/main", "pages/CourseArticle/main", "pages/CourseLecture/main", "pages/CourseToday/main", "pages/CourseShare/main", "pages/CourseReward/main", "pages/CourseRewardDone/main", "pages/CourseApplication/main" ],
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#fff",
                navigationBarTextStyle: "black"
            },
            tabBar: {
                list: [ {
                    pagePath: "pages/login/main",
                    iconPath: "static/read.png",
                    selectedIconPath: "static/read-active.png",
                    text: "书城"
                }, {
                    pagePath: "pages/desk/main",
                    iconPath: "static/desk.png",
                    selectedIconPath: "static/desk-active.png",
                    text: "书桌"
                }, {
                    pagePath: "pages/CourseList/main",
                    iconPath: "static/course.png",
                    selectedIconPath: "static/course-active.png",
                    text: "课程"
                }, {
                    pagePath: "pages/planList/main",
                    iconPath: "static/plan.png",
                    selectedIconPath: "static/plan-active.png",
                    text: "计划"
                }, {
                    pagePath: "pages/mine/main",
                    iconPath: "static/mine.png",
                    selectedIconPath: "static/mine-active.png",
                    text: "我的"
                } ],
                borderStyle: "black",
                color: "#aaa",
                selectedColor: "#333",
                backgroundColor: "#fdfdfd"
            },
            navigateToMiniProgramAppIdList: [ "wx05258befd10d0dc3", "wx46f929d951d63e9d", "wx98f7d7260e32302d", "wx12479162f0374858", "wxf1fd3089b54b1d13", "wx056989a90cad722f", "wx59df50236ceb7508", "wx9ba3d5acada8e236", "wxfcb5ee1b268781e8" ]
        };
    },
    jT7l: function(a, e, t) {
        "use strict";
        var n = t("GG4c"), i = t("DOuZ");
        var s = function(a) {
            t("GTUj");
        }, r = t("ybqe")(n.a, i.a, s, "data-v-6665ce15", null);
        e.a = r.exports;
    },
    uvAE: function(a, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = t("5nAL"), i = t.n(n), s = t("jT7l");
        new i.a(s.a).$mount();
    },
    wDhj: function(a, e) {}
}, [ "uvAE" ]);