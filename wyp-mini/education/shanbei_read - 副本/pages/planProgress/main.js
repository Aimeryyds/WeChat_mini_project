require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 9 ], {
    "+t8i": function(t, e, a) {
        "use strict";
        var s = a("9FaZ"), i = a("ivXf");
        var r = function(t) {
            a("hG/H");
        }, n = a("ybqe")(s.a, i.a, r, null, null);
        e.a = n.exports;
    },
    "1++Y": function(t, e, a) {
        "use strict";
        var s = a("dGKD"), i = a("834y");
        var r = function(t) {
            a("boV7");
        }, n = a("ybqe")(s.a, i.a, r, "data-v-5dca4020", null);
        e.a = n.exports;
    },
    "834y": function(t, e, a) {
        "use strict";
        var s = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return t.isLoading ? t._e() : a("div", {
                    staticClass: "bookplan-wrapper plan-progress",
                    style: {
                        backgroundImage: "url(" + t.coverUrl + ")"
                    }
                }, [ a("div", {
                    staticClass: "img-overlay"
                }), t._v(" "), a("div", {
                    staticClass: "logo"
                }), t._v(" "), a("div", {
                    staticClass: "container"
                }, [ a("div", {
                    staticClass: "progress-card"
                }, [ a("ProgressCircle", {
                    attrs: {
                        id: "circle1",
                        progress: t.articleProgressNum,
                        mpcomid: "0"
                    }
                }), t._v(" "), a("div", {
                    staticClass: "progress-title"
                }, [ t._v("书籍进度") ]), t._v(" "), a("div", {
                    staticClass: "progress-number"
                }, [ t._v(t._s(t.completedArticleAmount) + "/" + t._s(t.totalArticleAmount) + "章") ]) ], 1), t._v(" "), a("div", {
                    staticClass: "progress-card"
                }, [ a("ProgressCircle", {
                    attrs: {
                        id: "circle2",
                        progress: t.dayProgressNum,
                        mpcomid: "1"
                    }
                }), t._v(" "), a("div", {
                    staticClass: "progress-title"
                }, [ t._v("完成天数") ]), t._v(" "), a("div", {
                    staticClass: "progress-number"
                }, [ t._v(t._s(t.completedDays) + "/" + t._s(t.totalDays) + "天") ]) ], 1) ]), t._v(" "), a("div", {
                    staticClass: "desc"
                }, [ a("div", [ t._v("计划有效期内，读完全部书籍，即可获得计划完成奖励！") ]), t._v(" "), a("navigator", {
                    staticClass: "nav",
                    attrs: {
                        url: "/pages/planFinish/main"
                    }
                }, [ t._v("查看细则") ]) ], 1), t._v(" "), a("calendar", {
                    attrs: {
                        markers: t.markers,
                        validDates: t.validDates,
                        type: "BOOKPLAN",
                        eventid: "0",
                        mpcomid: "2"
                    },
                    on: {
                        "day-change": t.changeDay,
                        "month-change": t.changeMonth
                    }
                }), t._v(" "), a("div", {
                    staticClass: "achievement"
                }, [ a("div", {
                    staticClass: "item title"
                }, [ a("div", {
                    staticClass: "title-text"
                }, [ t._v("当日成就") ]), t._v(" "), a("div", {
                    staticClass: "item-value status"
                }, [ t.isFinished ? a("div", {
                    staticStyle: {
                        color: "#ffcf00"
                    }
                }, [ a("i", {
                    staticClass: "ib ib-check"
                }), t._v("\n                    已完成\n                ") ], 1) : a("div", [ t._v("未完成") ]) ]) ]), t._v(" "), a("div", {
                    staticClass: "item"
                }, [ a("div", [ t._v("阅读章节") ]), t._v(" "), a("div", {
                    staticClass: "item-value"
                }, [ t._v(t._s(t.articleAmount) + "章") ]) ]), t._v(" "), a("div", {
                    staticClass: "item"
                }, [ a("div", [ t._v("阅读量") ]), t._v(" "), a("div", {
                    staticClass: "item-value"
                }, [ t._v(t._s(t.wordAmount) + "词") ]) ]), t._v(" "), a("div", {
                    staticClass: "item"
                }, [ a("div", [ t._v("阅读时长") ]), t._v(" "), a("div", {
                    staticClass: "item-value"
                }, [ t._v(t._s(t.readTimeMins) + "分钟") ]) ]) ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = s;
    },
    "9FaZ": function(t, e, a) {
        "use strict";
        e.a = {
            props: [ "id", "progress" ],
            computed: {
                stringifyProgress: function() {
                    return "" + Math.round(this.progress);
                },
                progressPosition: function() {
                    return this.progress >= 10 ? {
                        number: {
                            x: 58,
                            y: 57
                        },
                        unit: {
                            x: 73,
                            y: 57
                        }
                    } : {
                        number: {
                            x: 53,
                            y: 57
                        },
                        unit: {
                            x: 70,
                            y: 57
                        }
                    };
                }
            },
            watch: {
                progress: function(t) {
                    null != t && this.drawProgress();
                }
            },
            methods: {
                drawProgress: function() {
                    var t = this.progressPosition, e = t.number, a = t.unit, s = wx.createCanvasContext(this.id);
                    s.beginPath(), s.arc(45, 45, 40, 0, 2 * Math.PI), s.setStrokeStyle("#f4f5f6"), s.setLineWidth(5), 
                    s.stroke(), s.beginPath(), s.save(), s.arc(45, 45, 40, -.5 * Math.PI, (this.progress / 100 * 2 - .5) * Math.PI), 
                    s.setShadow(0, 6, 6, "rgba(255, 209, 1, 0.34)"), s.setStrokeStyle("#ffdb00"), s.setLineCap("round"), 
                    s.setLineWidth(5), s.stroke(), s.restore(), this.progress >= 100 ? (s.setFontSize(14), 
                    s.setTextAlign("center"), s.fillText("已达成", 45, 50)) : (s.save(), s.setTextAlign("right"), 
                    s.font = "normal bold 30px Oswald", s.fillText(this.stringifyProgress, e.x, e.y), 
                    s.restore(), s.setFontSize(12), s.setTextAlign("right"), s.fillText("%", a.x, a.y), 
                    s.setFillStyle("#333")), s.draw();
                }
            }
        };
    },
    VX8M: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = a("5nAL"), i = a.n(s), r = a("1++Y");
        new i.a(r.a).$mount();
    },
    boV7: function(t, e) {},
    dGKD: function(t, e, a) {
        "use strict";
        var s = a("d7EF"), i = a.n(s), r = a("Xxa5"), n = a.n(r), o = a("exGp"), c = a.n(o), l = a("Dd8w"), d = a.n(l), u = a("IcnI"), v = a("NYxO"), m = a("MPG0"), p = a("iyFI"), h = a("+t8i");
        e.a = {
            store: u.a,
            components: {
                ProgressCircle: h.a,
                Calendar: p.a
            },
            data: function() {
                return {
                    completedArticleAmount: 0,
                    totalArticleAmount: 0,
                    completedDays: 0,
                    totalDays: 0,
                    markers: [],
                    articleAmount: "",
                    wordAmount: "",
                    readTimeMins: "",
                    isFinished: !1,
                    validDates: [],
                    isLoading: !0
                };
            },
            computed: d()({}, Object(v.c)({
                bookplanId: function(t) {
                    return t.bookplanData.bookplanId;
                },
                bookplanInfo: function(t) {
                    return t.bookplanData.bookplanInfo;
                },
                todayTask: function(t) {
                    return t.bookplanData.todayTask;
                }
            }), {
                articleProgressNum: function() {
                    return this.totalArticleAmount ? Math.floor(this.completedArticleAmount / this.totalArticleAmount * 100) : null;
                },
                dayProgressNum: function() {
                    return this.totalDays ? Math.floor(this.completedDays / this.totalDays * 100) : null;
                },
                coverUrl: function() {
                    return this.bookplanInfo.cover_url;
                }
            }),
            methods: {
                getMonthlyStats: function(t, e) {
                    var a = this;
                    return c()(n.a.mark(function s() {
                        var i, r, o, c, l, d;
                        return n.a.wrap(function(s) {
                            for (;;) switch (s.prev = s.next) {
                              case 0:
                                return s.next = 2, m.a.getUserBookplanStatistics(a.bookplanId, t + "-" + e);

                              case 2:
                                i = s.sent, r = i.completed_article_amount, o = i.total_article_amount, c = i.completed_days, 
                                l = i.least_days, d = i.month_details, a.completedArticleAmount = r, a.totalArticleAmount = o, 
                                a.completedDays = c, a.totalDays = l, a.markers = d;

                              case 13:
                              case "end":
                                return s.stop();
                            }
                        }, s, a);
                    }))();
                },
                changeDay: function(t) {
                    this.getDailyStats(t), wx.pageScrollTo({
                        scrollTop: 1e3,
                        duration: 300
                    });
                },
                changeMonth: function(t) {
                    var e = this;
                    return c()(n.a.mark(function a() {
                        var s, r, o, c;
                        return n.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                s = t.split("-"), r = i()(s, 2), o = r[0], c = r[1], e.getMonthlyStats(o, c);

                              case 2:
                              case "end":
                                return a.stop();
                            }
                        }, a, e);
                    }))();
                },
                getDailyStats: function(t) {
                    var e = this;
                    return c()(n.a.mark(function a() {
                        var s, i, r, o, c;
                        return n.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return a.next = 2, m.a.getUserBookplanDailyDataByDate(e.bookplanId, t);

                              case 2:
                                s = a.sent, i = s.article_amount, r = s.word_amount, o = s.used_time, c = s.is_finished, 
                                e.articleAmount = i, e.wordAmount = r, e.readTimeMins = Math.round(o / 60), e.isFinished = c;

                              case 11:
                              case "end":
                                return a.stop();
                            }
                        }, a, e);
                    }))();
                }
            },
            onLoad: function() {
                var t = this;
                return c()(n.a.mark(function e() {
                    var a, s, i;
                    return n.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            t.isLoading = !0, a = new Date().getFullYear(), s = new Date().getMonth() + 1, i = s > 9 ? s : "0" + s, 
                            t.getMonthlyStats(a, i), t.articleAmount = t.todayTask.article_amount, t.wordAmount = t.todayTask.word_amount, 
                            t.readTimeMins = Math.round(t.todayTask.used_time / 60), t.isFinished = t.todayTask.is_finished, 
                            t.validDates = [ t.bookplanInfo.started_at, t.bookplanInfo.expire_date ], t.isLoading = !1;

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            }
        };
    },
    "hG/H": function(t, e) {},
    ivXf: function(t, e, a) {
        "use strict";
        var s = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return this.id ? e("canvas", {
                    staticStyle: {
                        width: "90px",
                        height: "95px"
                    },
                    attrs: {
                        "canvas-id": this.id
                    }
                }) : this._e();
            },
            staticRenderFns: []
        };
        e.a = s;
    }
}, [ "VX8M" ]);