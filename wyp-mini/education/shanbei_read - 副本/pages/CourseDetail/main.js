require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 42 ], {
    FTQc: function(t, s) {},
    PHWN: function(t, s, a) {
        "use strict";
        var e = a("Xxa5"), i = a.n(e), o = a("d7EF"), r = a.n(o), n = a("exGp"), c = a.n(n), l = a("iyFI"), d = a("D9eU"), v = a("Apws").a.sensorLog;
        s.a = {
            components: {
                Calendar: l.a
            },
            data: function() {
                return {
                    userCourseId: "",
                    title: "",
                    coverUrl: "",
                    backgroundUrl: "",
                    finishedAmount: "",
                    totalAmount: "",
                    books: [],
                    currentBookId: "all",
                    selectorIsShow: !1,
                    tabIndex: 0,
                    todayWordCount: "",
                    totalWordCount: "",
                    completedDays: "",
                    leastDays: "",
                    validDates: [],
                    isAllowReward: !1,
                    markers: [],
                    reawrdStatus: "",
                    isTipShow: !1,
                    formattedDate: "",
                    totalDays: ""
                };
            },
            computed: {
                progress: function() {
                    return this.finishedAmount ? Math.round(100 * this.finishedAmount / this.totalAmount) : 0;
                },
                rewardProgress: function() {
                    return this.completedDays ? this.completedDays > this.leastDays ? 100 : Math.round(100 * this.completedDays / this.leastDays) : 0;
                },
                filteredBooks: function() {
                    var t = this;
                    return "all" === this.currentBookId ? this.books : this.books.filter(function(s) {
                        return s.book_id === t.currentBookId;
                    });
                },
                currentBook: function() {
                    var t = this;
                    return this.books.find(function(s) {
                        return s.book_id == t.currentBookId;
                    }) || {};
                }
            },
            onShow: function() {
                var t = this;
                return c()(i.a.mark(function s() {
                    var a, e, o, n, c, l, u, _, h, C, b, p, k, f, g, w, m, y, I, D, S, x, A, T, B, M;
                    return i.a.wrap(function(s) {
                        for (;;) switch (s.prev = s.next) {
                          case 0:
                            return a = t.$route.query.userCourseId, t.userCourseId = a, s.next = 4, Object(d.p)(a);

                          case 4:
                            return e = s.sent, o = e.cover_url, n = e.background_url, c = e.title, l = e.finished_amount, 
                            u = e.total_amount, _ = e.courses, h = e.started_at, C = e.ended_at, b = e.allow_reward, 
                            p = e.book_course.total_days, t.coverUrl = o, t.backgroundUrl = n, t.title = c, 
                            t.finishedAmount = l, t.totalAmount = u, t.books = _, t.isAllowReward = b, t.validDates = [ h, C ], 
                            k = h.split("-"), f = r()(k, 3), g = f[0], w = f[1], m = f[2], t.formattedDate = g + "年" + w + "月" + m + "日", 
                            t.totalDays = p, s.next = 19, Object(d.s)(a);

                          case 19:
                            y = s.sent, I = y.today_words, D = y.total_words, S = y.completed_days, x = y.least_days, 
                            A = y.reward_status, t.todayWordCount = I, t.totalWordCount = D, t.completedDays = S, 
                            t.leastDays = x, t.reawrdStatus = A, T = new Date().getFullYear(), B = new Date().getMonth() + 1, 
                            M = B > 9 ? B : "0" + B, t.getUserCourseMonthStats(T, M), v({
                                event_code: "RDreading_BookCourseContent_PV",
                                event_value: {
                                    coursetitle_cn: c
                                }
                            });

                          case 35:
                          case "end":
                            return s.stop();
                        }
                    }, s, t);
                }))();
            },
            methods: {
                toggleSelector: function() {
                    this.selectorIsShow = !this.selectorIsShow;
                },
                hideSelector: function() {
                    this.selectorIsShow = !1;
                },
                nav: function(t) {
                    this.$router.push({
                        path: "/pages/CourseArticleIndex/main",
                        query: {
                            userCourseId: this.userCourseId,
                            articleId: t.article_id
                        }
                    });
                },
                filterBooks: function(t) {
                    this.currentBookId = t ? t.book_id : "all";
                },
                switchTab: function(t) {
                    this.tabIndex = t;
                },
                changeMonth: function(t) {
                    var s = t.split("-"), a = r()(s, 2), e = a[0], i = a[1];
                    this.getUserCourseMonthStats(e, i);
                },
                getUserCourseMonthStats: function(t, s) {
                    var a = this;
                    return c()(i.a.mark(function e() {
                        var o, r;
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Object(d.r)(a.userCourseId, t + "-" + s);

                              case 2:
                                o = e.sent, r = o.month_details, a.markers = r;

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e, a);
                    }))();
                },
                goToReward: function() {
                    20 !== this.reawrdStatus ? this.$router.push({
                        path: "/pages/CourseReward/main",
                        query: {
                            courseTitle: this.title,
                            userCourseId: this.userCourseId
                        }
                    }) : wx.showToast({
                        title: "课程学习完毕后才能领取奖学金哦",
                        icon: "none"
                    });
                },
                toggleTipModal: function() {
                    this.isTipShow = !this.isTipShow;
                }
            }
        };
    },
    XpEb: function(t, s, a) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var e = a("5nAL"), i = a.n(e), o = a("y2zj");
        new i.a(o.a).$mount();
    },
    sunx: function(t, s, a) {
        "use strict";
        var e = {
            render: function() {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return a("div", {
                    staticClass: "course-detail",
                    attrs: {
                        eventid: "11"
                    },
                    on: {
                        click: t.hideSelector
                    }
                }, [ a("div", {
                    staticClass: "tab-container"
                }, [ a("div", {
                    staticClass: "tab",
                    class: {
                        highlight: 0 === t.tabIndex
                    },
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(s) {
                            t.switchTab(0);
                        }
                    }
                }, [ t._v("目录") ]), t._v(" "), a("div", {
                    staticClass: "tab",
                    class: {
                        highlight: 1 === t.tabIndex
                    },
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(s) {
                            t.switchTab(1);
                        }
                    }
                }, [ t._v("进度") ]) ]), t._v(" "), 0 === t.tabIndex ? a("div", [ a("div", {
                    staticClass: "course-item"
                }, [ t.backgroundUrl ? a("div", {
                    staticClass: "background",
                    style: {
                        backgroundImage: "url(" + t.backgroundUrl + ")"
                    }
                }) : t._e(), t._v(" "), a("div", {
                    staticClass: "course"
                }, [ a("img", {
                    staticClass: "cover",
                    attrs: {
                        src: t.coverUrl
                    }
                }), t._v(" "), a("div", [ a("div", {
                    staticClass: "title"
                }, [ t._v(t._s(t.title)) ]), t._v(" "), a("div", {
                    staticClass: "description"
                }, [ a("span", {
                    staticClass: "normal"
                }, [ t._v("课程已完成") ]), t._v(" "), a("span", {
                    staticClass: "highlight"
                }, [ t._v(t._s(t.progress) + "%") ]) ]), t._v(" "), a("div", {
                    staticClass: "progress"
                }, [ a("div", {
                    staticClass: "text"
                }, [ t._v(t._s(t.finishedAmount) + "/" + t._s(t.totalAmount) + "课") ]), t._v(" "), a("div", {
                    staticClass: "bar-container"
                }, [ a("div", {
                    staticClass: "bg"
                }), t._v(" "), a("div", {
                    staticClass: "indicator",
                    style: {
                        width: t.progress + "%"
                    }
                }) ]) ]) ]) ]) ]), t._v(" "), a("div", {
                    staticClass: "detail"
                }, [ a("div", {
                    staticClass: "meta"
                }, [ a("div", {
                    staticClass: "selector"
                }, [ a("div", {
                    staticClass: "label",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: function(s) {
                            s.stopPropagation(), t.toggleSelector(s);
                        }
                    }
                }, [ "all" === t.currentBookId ? a("div", {
                    staticClass: "text"
                }, [ t._v("全部") ]) : a("div", {
                    staticClass: "text"
                }, [ t._v(t._s(t.currentBook.name_cn)) ]), t._v(" "), a("i", {
                    staticClass: "ib ib-caret-down"
                }) ], 1), t._v(" "), t.selectorIsShow ? a("div", {
                    staticClass: "option-list"
                }, [ a("div", {
                    class: "all" === t.currentBookId ? "option highlight" : "option",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(s) {
                            t.filterBooks(t.book);
                        }
                    }
                }, [ t._v("全部") ]), t._v(" "), t._l(t.books, function(s, e) {
                    return a("div", {
                        key: e,
                        class: t.currentBookId === s.book_id ? "option highlight" : "option",
                        attrs: {
                            eventid: "4-" + e
                        },
                        on: {
                            click: function(a) {
                                t.filterBooks(s);
                            }
                        }
                    }, [ t._v(t._s(s.name_cn + "（" + s.article_amount + "课）")) ]);
                }) ], 2) : t._e() ]), t._v(" "), a("div", {
                    staticClass: "desc"
                }, [ t._v("共" + t._s(t.books.length) + "本书") ]) ]), t._v(" "), a("div", {
                    staticClass: "book-list"
                }, [ a("div", {
                    staticClass: "tip"
                }, [ a("i", {
                    staticClass: "ib ib-fa-lightbulb-o"
                }), t._v("\n                    每天零点准时解锁，敬请期待\n                ") ], 1), t._v(" "), t._l(t.filteredBooks, function(s, e) {
                    return a("div", {
                        key: e,
                        staticClass: "book"
                    }, [ a("div", {
                        staticClass: "title"
                    }, [ t._v(t._s("《" + s.name_cn + "》（" + s.article_amount + "课）")) ]), t._v(" "), a("div", {
                        staticClass: "article-list"
                    }, t._l(s.article_items, function(s, i) {
                        return a("div", {
                            key: i,
                            staticClass: "article",
                            attrs: {
                                eventid: "5-" + e + "-" + i
                            },
                            on: {
                                click: function(a) {
                                    t.nav(s);
                                }
                            }
                        }, [ a("div", {
                            class: 1 === s.status ? "title-cn lock" : "title-cn"
                        }, [ t._v(t._s(i + 1 + ". " + s.title_cn)) ]), t._v(" "), a("div", {
                            staticClass: "state"
                        }, [ 2 === s.status ? a("button", {
                            staticClass: "start"
                        }, [ t._v("开始") ]) : t._e(), t._v(" "), 1 === s.status ? a("i", {
                            staticClass: "ib ib-lock-o lock"
                        }) : t._e(), t._v(" "), 4 === s.status ? a("i", {
                            staticClass: "ib ib-check check"
                        }) : t._e() ], 1) ]);
                    })) ]);
                }) ], 2) ]) ]) : t._e(), t._v(" "), 1 === t.tabIndex ? a("div", [ a("div", {
                    staticClass: "meta-container"
                }, [ a("div", {
                    staticClass: "title"
                }, [ t._v(t._s(t.title)) ]), t._v(" "), t.isAllowReward ? a("div", {
                    staticClass: "progress-number"
                }, [ t._v("学习进度：" + t._s(t.completedDays) + "/" + t._s(t.leastDays) + "天") ]) : t._e(), t._v(" "), t.isAllowReward ? a("div", {
                    staticClass: "progress-container"
                }, [ a("div", {
                    staticClass: "progress-bar"
                }, [ a("div", {
                    staticClass: "progress-indicator",
                    style: {
                        width: t.rewardProgress + "%"
                    }
                }) ]), t._v(" "), 10 !== t.reawrdStatus ? a("div", {
                    staticClass: "rule",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        click: t.toggleTipModal
                    }
                }, [ t._v("详见规则") ]) : t._e(), t._v(" "), 20 === t.reawrdStatus ? a("div", {
                    staticClass: "btn-1",
                    attrs: {
                        eventid: "8"
                    },
                    on: {
                        click: t.goToReward
                    }
                }, [ t._v("领奖学金") ]) : 21 === t.reawrdStatus ? a("button", {
                    staticClass: "btn-2",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        click: t.goToReward
                    }
                }, [ t._v("领奖学金") ]) : 22 === t.reawrdStatus ? a("div", {
                    staticClass: "btn-3"
                }, [ t._v("申请中") ]) : 23 === t.reawrdStatus ? a("div", {
                    staticClass: "btn-4"
                }, [ a("i", {
                    staticClass: "ib ib-check"
                }), t._v("奖学金已领\n                ") ], 1) : 11 === t.reawrdStatus ? a("div", {
                    staticClass: "btn-5"
                }, [ t._v("奖学金失效") ]) : a("div") ], 1) : t._e(), t._v(" "), a("div", {
                    staticClass: "stats-container"
                }, [ a("div", {
                    staticClass: "stats"
                }, [ a("div", {
                    staticClass: "label"
                }, [ t._v("今日阅读") ]), t._v(" "), a("div", [ a("span", {
                    staticClass: "text"
                }, [ t._v(t._s(t.todayWordCount)) ]), t._v(" "), a("span", {
                    staticClass: "label"
                }, [ t._v("词") ]) ]) ]), t._v(" "), a("div", {
                    staticClass: "stats"
                }, [ a("div", {
                    staticClass: "label"
                }, [ t._v("累计阅读") ]), t._v(" "), a("div", [ a("span", {
                    staticClass: "text"
                }, [ t._v(t._s(t.totalWordCount)) ]), t._v(" "), a("span", {
                    staticClass: "label"
                }, [ t._v("词") ]) ]) ]), t._v(" "), t.isAllowReward ? t._e() : a("div", {
                    staticClass: "stats"
                }, [ a("div", {
                    staticClass: "label"
                }, [ t._v("累计学习") ]), t._v(" "), a("div", [ a("span", {
                    staticClass: "text"
                }, [ t._v(t._s(t.completedDays)) ]), t._v(" "), a("span", {
                    staticClass: "label"
                }, [ t._v("天") ]) ]) ]) ]) ]), t._v(" "), a("div", {
                    staticClass: "calendar-container"
                }, [ a("calendar", {
                    attrs: {
                        type: "COURSE",
                        markers: t.markers,
                        validDates: t.validDates,
                        eventid: "9",
                        mpcomid: "0"
                    },
                    on: {
                        "month-change": t.changeMonth
                    }
                }), t._v(" "), a("div", {
                    staticClass: "order-tip"
                }, [ t._v("* 本课程在" + t._s(t.formattedDate) + "购买") ]) ], 1), t._v(" "), t.isTipShow ? a("div", {
                    staticClass: "modal flex-vhc",
                    attrs: {
                        eventid: "10"
                    },
                    on: {
                        click: t.toggleTipModal
                    }
                }, [ a("div", {
                    staticClass: "body"
                }, [ a("div", {
                    staticClass: "title"
                }, [ t._v("奖学金申请规则") ]), t._v(" "), a("div", {
                    staticClass: "tip"
                }, [ t._v("条件1：自购买日起，" + t._s(t.totalDays) + "天内有" + t._s(t.leastDays) + "天的学习记录。") ]), t._v(" "), a("div", {
                    staticClass: "tip"
                }, [ t._v("条件2：学习记录达标后的10天内提交申请。") ]) ]) ]) : t._e() ]) : t._e() ]);
            },
            staticRenderFns: []
        };
        s.a = e;
    },
    y2zj: function(t, s, a) {
        "use strict";
        var e = a("PHWN"), i = a("sunx");
        var o = function(t) {
            a("FTQc");
        }, r = a("ybqe")(e.a, i.a, o, "data-v-07fa4496", null);
        s.a = r.exports;
    }
}, [ "XpEb" ]);