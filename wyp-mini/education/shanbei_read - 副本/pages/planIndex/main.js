require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 3 ], {
    "+kPS": function(a, t, s) {
        "use strict";
        var e = {
            render: function() {
                var a = this, t = a.$createElement, s = a._self._c || t;
                return a.bookplanInfo ? s("div", {
                    staticClass: "bookplan-wrapper container",
                    style: {
                        backgroundImage: a.coverStyle
                    }
                }, [ s("div", {
                    staticClass: "img-overlay"
                }), a._v(" "), s("div", {
                    staticClass: "logo"
                }), a._v(" "), s("div", {
                    staticClass: "plan-info"
                }, [ s("div", {
                    staticClass: "info"
                }, [ s("div", {
                    staticClass: "end-time"
                }, [ a._v(a._s(a.startedAt) + "-" + a._s(a.expireDate) + "（计划共" + a._s(a.bookplanInfo.total_days) + "天）") ]), a._v(" "), s("div", {
                    staticClass: "title"
                }, [ a._v(a._s(a.bookplanInfo.title)) ]), a._v(" "), a.bookplanInfo.allow_reward && "bzdkl" !== a.bookplanInfo.book_plan_id ? s("div", {
                    staticClass: "tip"
                }, [ a._v("/坚持学习" + a._s(a.bookplanInfo.least_days) + "天，领奖学金/") ]) : a._e() ]), a._v(" "), s("div", {
                    staticClass: "progress"
                }, [ s("div", {
                    staticClass: "progress-calendar"
                }, [ s("div", {
                    staticClass: "status"
                }, [ a._v("已完成") ]), a._v(" "), s("div", {
                    staticClass: "progress-number"
                }, [ s("div", {
                    staticClass: "number"
                }, [ a._v(a._s(a.bookplanInfo.completed_days)) ]), a._v(" "), s("div", [ a._v("天") ]) ]) ]) ]) ]), a._v(" "), s("div", {
                    staticClass: "plan-card"
                }, [ s("div", {
                    staticClass: "title"
                }, [ a._v("计划书目") ]), a._v(" "), s("scrollView", {
                    staticClass: "books-container",
                    attrs: {
                        "scroll-x": "",
                        mpcomid: "1"
                    }
                }, [ s("div", {
                    staticClass: "books-wrapper"
                }, a._l(a.bookplanInfo.books, function(t, e) {
                    return s("PlanBook", {
                        key: t.book_id,
                        attrs: {
                            title: t.name_cn,
                            src: t.cover_url,
                            progress: t.read_percentage,
                            isReading: a.bookplanInfo.current_book_id === t.book_id,
                            articleId: t.current_read.article_id,
                            paraId: t.current_read.paragraph_id,
                            userBookPlanId: a.id,
                            planStatus: a.bookplanInfo.status,
                            eventid: "0-" + e,
                            mpcomid: "0-" + e
                        },
                        on: {
                            "cover-click": a.beatCover
                        }
                    });
                })) ]) ], 1), a._v(" "), 3 === a.bookplanInfo.status ? s("div", {
                    staticClass: "finished tip"
                }) : 1 === a.bookplanInfo.status ? s("div", {
                    staticClass: "tomorrow tip"
                }) : 4 === a.bookplanInfo.status || 5 === a.bookplanInfo.status ? s("div", {
                    staticClass: "end tip"
                }) : s("div", {
                    staticClass: "plan-card"
                }, [ s("div", {
                    staticClass: "title"
                }, [ a._v("今日任务") ]), a._v(" "), s("div", {
                    staticClass: "task-status"
                }, [ s("div", {
                    staticClass: "amount"
                }, [ a._v("阅读 " + a._s(a.bookplanInfo.daily_amount) + " 章") ]), a._v(" "), a.todayTask.is_finished ? s("div", {
                    staticClass: "finish"
                }, [ s("div", {
                    staticClass: "icon"
                }), a._v(" "), s("div", [ a._v("已完成") ]) ]) : a._e(), a._v(" "), a.todayTask.article_amount ? a._e() : s("div", {
                    staticClass: "not-finish"
                }, [ a._v("未完成") ]), a._v(" "), a.inProgress ? s("div", {
                    staticClass: "not-finish"
                }, [ a._v("已读" + a._s(a.todayTask.article_amount) + "章") ]) : a._e() ]), a._v(" "), s("form", {
                    attrs: {
                        "report-submit": "",
                        eventid: "1"
                    },
                    on: {
                        submit: a.submit
                    }
                }, [ s("button", {
                    staticClass: "btn",
                    class: {
                        finish: a.todayTask.is_finished
                    },
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ a._v(a._s(a.btnText)) ]) ], 1) ], 1), a._v(" "), a.bookplanInfo.has_knowledge_card ? s("div", {
                    staticClass: "bottom-btn-group"
                }, [ s("navigator", {
                    staticClass: "navigator",
                    attrs: {
                        "hover-class": "none",
                        url: "/pages/planProgress/main"
                    }
                }, [ s("div", {
                    staticClass: "study-achievement"
                }), a._v(" "), s("span", [ a._v("学习进度") ]) ]), a._v(" "), a.bookplanInfo.allow_reward ? s("div", {
                    staticClass: "navigator",
                    attrs: {
                        "hover-class": "none",
                        eventid: "2"
                    },
                    on: {
                        click: a.navToScholarship
                    }
                }, [ s("div", {
                    staticClass: "share-refund"
                }), a._v(" "), s("span", [ a._v("奖学金") ]) ]) : a._e(), a._v(" "), s("navigator", {
                    staticClass: "navigator",
                    attrs: {
                        "hover-class": "none",
                        url: "/pages/articleKnowledges/main?scene=homepage"
                    }
                }, [ s("div", {
                    staticClass: "knowledge-card"
                }, [ s("div", {
                    staticClass: "new"
                }) ]), a._v(" "), s("span", [ a._v("知识卡片") ]) ]) ], 1) : s("div", {
                    staticClass: "btn-group"
                }, [ s("navigator", {
                    staticClass: "navigator",
                    class: {
                        single: !a.bookplanInfo.allow_reward
                    },
                    attrs: {
                        "hover-class": "none",
                        url: "/pages/planProgress/main"
                    }
                }, [ s("div", {
                    staticClass: "study-achievement"
                }), a._v(" "), s("span", [ a._v("学习进度") ]) ]), a._v(" "), a.bookplanInfo.allow_reward ? s("div", {
                    staticClass: "navigator",
                    attrs: {
                        "hover-class": "none",
                        eventid: "3"
                    },
                    on: {
                        click: a.navToScholarship
                    }
                }, [ s("div", {
                    staticClass: "share-refund"
                }), a._v(" "), s("span", [ a._v("奖学金") ]) ]) : a._e() ], 1), a._v(" "), a.isShowModal ? s("PlanModal", {
                    attrs: {
                        meta: a.modalMeta,
                        eventid: "4",
                        mpcomid: "2"
                    },
                    on: {
                        close: a.closeModal
                    }
                }) : a._e() ], 1) : a._e();
            },
            staticRenderFns: []
        };
        t.a = e;
    },
    "/pOA": function(a, t, s) {
        "use strict";
        var e = s("Dd8w"), n = s.n(e), o = s("d7EF"), i = s.n(o), r = s("Xxa5"), l = s.n(r), c = s("exGp"), d = s.n(c), p = s("NYxO"), u = s("IcnI"), v = s("Apws"), _ = s("Q8le"), k = s("0xDb"), f = s("jgDQ"), b = s("3CSK"), h = s("MPG0"), m = [ "明日开始", "进行中", "书籍读完", "已失败", "已成功" ];
        t.a = {
            store: u.a,
            components: {
                PlanBook: f.a,
                PlanModal: b.a
            },
            data: function() {
                return {
                    id: "",
                    isShowModal: !1
                };
            },
            onShow: function() {
                var a = this;
                return d()(l.a.mark(function t() {
                    var s, e, n, o, i;
                    return l.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return s = a.$route.query.id, a.id = s, t.next = 4, u.a.dispatch("fetchBookplan", a.id);

                          case 4:
                            e = a.bookplanInfo, n = e.title, o = e.book_plan_id, i = e.status, v.a.track({
                                event_code: "bookplan-home-page-view",
                                event_value: {
                                    bookplan_title: n
                                }
                            }), v.a.sensorLog({
                                event_code: "RDbookplan_HomePage_PV",
                                event_value: {
                                    bookplan_id: o,
                                    bookplan_name: n,
                                    bookplan_status: m[i - 1]
                                }
                            });

                          case 7:
                          case "end":
                            return t.stop();
                        }
                    }, t, a);
                }))();
            },
            mounted: function() {
                var a = this;
                return d()(l.a.mark(function t() {
                    var s, e, n;
                    return l.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return s = a.$route.query.id, t.next = 3, h.a.getUserBookplanPop(s);

                          case 3:
                            e = t.sent, n = e.has_pop_up, a.isShowModal = n;

                          case 6:
                          case "end":
                            return t.stop();
                        }
                    }, t, a);
                }))();
            },
            methods: {
                handleClick: function() {
                    var a = this;
                    return d()(l.a.mark(function t() {
                        var s, e, n, o, r, c, d, p, u;
                        return l.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (a.todayTask.is_finished) {
                                    t.next = 15;
                                    break;
                                }
                                return s = "", e = "", n = null, o = a.bookplanInfo, r = o.current_book_id, c = o.books, 
                                t.next = 7, _.a.getBookFirstUnfinished(r);

                              case 7:
                                d = t.sent, p = d.id, "aaaaa" === r ? (u = i()(c, 1), n = u[0]) : n = c.find(function(a) {
                                    return a.book_id === r;
                                }), p ? s = p : (s = n.current_read.article_id, e = n.current_read.paragraph_id), 
                                v.a.track({
                                    event_code: "bookplan-start-reading",
                                    event_value: {
                                        bookplan_title: a.bookplanInfo.title,
                                        book_title: n.name_cn
                                    }
                                }), a.$router.push({
                                    path: "/pages/article/main",
                                    query: {
                                        articleId: s,
                                        paraId: e,
                                        userBookPlanId: a.id
                                    }
                                }), t.next = 16;
                                break;

                              case 15:
                                a.$router.push({
                                    path: "/pages/bookPlanAchievement/main",
                                    query: {
                                        userBookPlanId: a.id
                                    }
                                });

                              case 16:
                              case "end":
                                return t.stop();
                            }
                        }, t, a);
                    }))();
                },
                beatCover: function(a) {
                    var t = this.bookplanInfo, s = t.title, e = t.book_plan_id;
                    v.a.track({
                        event_code: "bookplan-start-reading",
                        event_value: {
                            bookplan_title: s,
                            book_title: a
                        }
                    }), v.a.sensorLog({
                        event_code: "RDbookplan_HomePage_StartReading",
                        event_value: {
                            bookplan_id: e,
                            bookplan_name: s,
                            study_entrance: "点击书籍封面"
                        }
                    });
                },
                submit: function(a) {
                    var t = this;
                    return d()(l.a.mark(function s() {
                        var e, n, o, r, c, d, p, u, k;
                        return l.a.wrap(function(s) {
                            for (;;) switch (s.prev = s.next) {
                              case 0:
                                return s.next = 2, v.a.collectFormId(a.mp.detail.formId);

                              case 2:
                                if (t.todayTask.is_finished) {
                                    s.next = 18;
                                    break;
                                }
                                return e = "", n = "", o = null, r = t.bookplanInfo, c = r.current_book_id, d = r.books, 
                                s.next = 9, _.a.getBookFirstUnfinished(c);

                              case 9:
                                p = s.sent, u = p.id, "aaaaa" === c ? (k = i()(d, 1), o = k[0]) : o = d.find(function(a) {
                                    return a.book_id === c;
                                }), u ? e = u : (e = o.current_read.article_id, n = o.current_read.paragraph_id), 
                                v.a.track({
                                    event_code: "bookplan-start-reading",
                                    event_value: {
                                        bookplan_title: t.bookplanInfo.title,
                                        book_title: o.name_cn
                                    }
                                }), v.a.sensorLog({
                                    event_code: "RDbookplan_HomePage_StartReading",
                                    event_value: {
                                        bookplan_id: t.bookplanInfo.book_plan_id,
                                        bookplan_name: t.bookplanInfo.title,
                                        study_entrance: "点击按钮"
                                    }
                                }), t.$router.push({
                                    path: "/pages/article/main",
                                    query: {
                                        articleId: e,
                                        paraId: n,
                                        userBookPlanId: t.id,
                                        planStatus: t.bookplanInfo.status,
                                        isFromBookplan: 1
                                    }
                                }), s.next = 19;
                                break;

                              case 18:
                                t.$router.push({
                                    path: "/pages/bookPlanAchievement/main",
                                    query: {
                                        userBookPlanId: t.id
                                    }
                                });

                              case 19:
                              case "end":
                                return s.stop();
                            }
                        }, s, t);
                    }))();
                },
                navToScholarship: function() {
                    "bzdkl" === this.bookplanInfo.book_plan_id ? wx.showToast({
                        title: "7天计划不参与全额奖学金哦~",
                        icon: "none",
                        duration: 3e3
                    }) : this.$router.push({
                        path: "/pages/scholarship/main",
                        query: {
                            is50percent: this.is50percent
                        }
                    });
                },
                closeModal: function() {
                    this.isShowModal = !1;
                }
            },
            computed: n()({}, Object(p.c)({
                bookplanInfo: function(a) {
                    return a.bookplanData.bookplanInfo;
                },
                todayTask: function(a) {
                    return a.bookplanData.todayTask;
                }
            }), {
                btnText: function() {
                    return this.todayTask && this.todayTask.is_finished ? "去分享" : this.inProgress ? "继续阅读" : "开始阅读";
                },
                coverStyle: function() {
                    return this.bookplanInfo ? "url(" + this.bookplanInfo.cover_url + ")" : "url()";
                },
                startedAt: function() {
                    return this.bookplanInfo ? Object(k.b)(this.bookplanInfo.started_at) : "";
                },
                expireDate: function() {
                    return this.bookplanInfo ? Object(k.b)(this.bookplanInfo.expire_date) : "";
                },
                inProgress: function() {
                    return this.todayTask && this.todayTask.article_amount > 0 && this.todayTask.article_amount < this.bookplanInfo.daily_amount;
                },
                is50percent: function() {
                    var a = new Date("2019-05-15");
                    return new Date(this.bookplanInfo ? this.bookplanInfo.started_at : "") > a;
                },
                modalMeta: function() {
                    if (!this.bookplanInfo) return {};
                    var a = this.bookplanInfo, t = a.total_days;
                    return 1 === a.status ? {
                        title: "晚上好，",
                        subTitle: "计划从明天正式开始~",
                        description: "很高兴在读书计划遇见你，一起坚持学习，提高英语吧！",
                        img: "https://media-image1.baydn.com/storage_media_image/kvhfgj/9088230ff487ed45cfe76b1b895546f6.c781c8bedea14864a9e46a82d7ca3bca.png"
                    } : {
                        title: "Hi,",
                        subTitle: "很高兴在读书计划遇见你~",
                        description: "在接下来的" + t + "天内，一起坚持学习，提高英语吧！",
                        img: "https://media-image1.baydn.com/storage_media_image/kvhfgj/2becf2bfbd40cb1d58e67ee7e5891f93.542f450143a5fc84cc999685fdb0f337.png"
                    };
                }
            })
        };
    },
    "3CSK": function(a, t, s) {
        "use strict";
        var e = s("pkws"), n = s("Cgnw");
        var o = function(a) {
            s("Qxai");
        }, i = s("ybqe")(e.a, n.a, o, "data-v-22684232", null);
        t.a = i.exports;
    },
    "A2+f": function(a, t) {},
    A7MU: function(a, t, s) {
        "use strict";
        var e = s("Dd8w"), n = s.n(e), o = s("NYxO");
        t.a = {
            props: [ "src", "title", "progress", "isReading", "articleId", "paraId", "userBookPlanId", "planStatus" ],
            computed: n()({}, Object(o.c)({
                bookplanInfo: function(a) {
                    return a.bookplanData.bookplanInfo;
                }
            }), {
                showNormalPoster: function() {
                    var a = new Date(), t = new Date(this.bookplanInfo.expire_date);
                    return 4 === this.bookplanInfo.status || 3 === this.bookplanInfo.status && a > t;
                }
            }),
            methods: {
                nav: function(a) {
                    if (1 !== this.planStatus) {
                        var t = "";
                        this.$emit("cover-click", this.title), this.showNormalPoster || (t = this.userBookPlanId), 
                        this.$router.push({
                            path: "/pages/article/main",
                            query: {
                                userBookPlanId: t,
                                articleId: a,
                                paraId: this.paraId,
                                planStatus: this.bookplanInfo.status,
                                isFromBookplan: 1
                            }
                        });
                    }
                }
            }
        };
    },
    Cgnw: function(a, t, s) {
        "use strict";
        var e = {
            render: function() {
                var a = this, t = a.$createElement, s = a._self._c || t;
                return s("div", {
                    staticClass: "plan-modal flex-vhc"
                }, [ s("div", {
                    staticClass: "content"
                }, [ s("img", {
                    staticClass: "image",
                    attrs: {
                        src: a.meta.img
                    }
                }), a._v(" "), s("div", {
                    staticClass: "meta-container"
                }, [ s("div", {
                    staticClass: "title"
                }, [ a._v(a._s(a.meta.title)) ]), a._v(" "), s("div", {
                    staticClass: "sub-title"
                }, [ a._v(a._s(a.meta.subTitle)) ]), a._v(" "), s("div", {
                    staticClass: "description"
                }, [ a._v(a._s(a.meta.description)) ]) ]), a._v(" "), s("button", {
                    staticClass: "flex-vhc",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: a.close
                    }
                }, [ a._v("我知道啦") ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        t.a = e;
    },
    Gmd7: function(a, t) {},
    Kgue: function(a, t, s) {
        "use strict";
        var e = s("/pOA"), n = s("+kPS");
        var o = function(a) {
            s("Gmd7");
        }, i = s("ybqe")(e.a, n.a, o, "data-v-a7b2c556", null);
        t.a = i.exports;
    },
    Qxai: function(a, t) {},
    jgDQ: function(a, t, s) {
        "use strict";
        var e = s("A7MU"), n = s("wC+a");
        var o = function(a) {
            s("A2+f");
        }, i = s("ybqe")(e.a, n.a, o, "data-v-4967749f", null);
        t.a = i.exports;
    },
    jpNz: function(a, t, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var e = s("5nAL"), n = s.n(e), o = s("Kgue");
        new n.a(o.a).$mount();
    },
    pkws: function(a, t, s) {
        "use strict";
        t.a = {
            props: {
                meta: {
                    type: Object,
                    required: !0
                }
            },
            methods: {
                close: function() {
                    this.$emit("close");
                }
            }
        };
    },
    "wC+a": function(a, t, s) {
        "use strict";
        var e = {
            render: function() {
                var a = this, t = a.$createElement, s = a._self._c || t;
                return s("div", {
                    staticClass: "container",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(t) {
                            a.nav(a.articleId);
                        }
                    }
                }, [ s("div", {
                    staticClass: "cover-wrapper"
                }, [ s("img", {
                    staticClass: "cover",
                    attrs: {
                        src: a.src,
                        alt: "cover"
                    }
                }), a._v(" "), a.isReading && 1 !== a.planStatus ? s("div", {
                    staticClass: "reading-icon"
                }, [ a._v("正在读") ]) : a._e(), a._v(" "), 1 !== a.planStatus ? s("div", {
                    staticClass: "progress-bar"
                }, [ s("div", {
                    staticClass: "progress",
                    style: {
                        width: a.progress + "%"
                    }
                }) ]) : a._e(), a._v(" "), 1 === a.planStatus ? s("div", {
                    staticClass: "mask"
                }, [ s("div", {
                    staticClass: "lock"
                }) ]) : a._e() ]), a._v(" "), s("div", {
                    staticClass: "title"
                }, [ a._v(a._s(a.title)) ]) ]);
            },
            staticRenderFns: []
        };
        t.a = e;
    }
}, [ "jpNz" ]);