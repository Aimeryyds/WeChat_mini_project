require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 41 ], {
    CgWy: function(e, t, n) {
        "use strict";
        var s = n("MIes"), i = n("fJB+");
        var r = function(e) {
            n("I4XP");
        }, c = n("ybqe")(s.a, i.a, r, "data-v-e7027422", null);
        t.a = c.exports;
    },
    I4XP: function(e, t) {},
    MIes: function(e, t, n) {
        "use strict";
        var s = n("Xxa5"), i = n.n(s), r = n("exGp"), c = n.n(r), a = n("1IwQ"), u = n("D9eU"), d = n("Apws").a.sensorLog;
        t.a = {
            data: function() {
                return {
                    userCourseId: "",
                    articleId: "",
                    articleTitle: "",
                    sentenceList: [],
                    currentSentIdx: 0,
                    expList: [],
                    startTime: null,
                    isHideLectureGuide: !0
                };
            },
            computed: {
                currentSent: function() {
                    return this.sentenceList.length ? this.sentenceList[this.currentSentIdx] : {};
                }
            },
            mounted: function() {
                var e = this;
                return c()(i.a.mark(function t() {
                    var n, s, r, c, a, d, o, l, v, _, h;
                    return i.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.startTime = new Date(), n = wx.getStorageSync("isHideLectureGuide"), e.isHideLectureGuide = n, 
                            s = e.$route.query, r = s.userCourseId, c = s.articleId, a = s.articleTitle, e.articleId = c, 
                            e.userCourseId = r, e.articleTitle = a, t.next = 9, Object(u.v)(e.articleId);

                          case 9:
                            return d = t.sent, o = d.objects, e.sentenceList = o, l = o.length ? o[0] : {}, 
                            v = l.id, t.next = 15, Object(u.m)(v);

                          case 15:
                            _ = t.sent, h = _.authentic_expressions, e.expList = h;

                          case 18:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            onShow: function() {
                d({
                    event_code: "RDreading_BookCourseStep2_PV",
                    event_value: {
                        chaptertitle_cn: this.articleTitle
                    }
                });
            },
            methods: {
                hideGuide: function() {
                    this.isHideLectureGuide = !0, wx.setStorage({
                        key: "isHideLectureGuide",
                        data: !0
                    });
                },
                changeSentence: function() {
                    var e = this;
                    return c()(i.a.mark(function t() {
                        var n, s, r;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = e.sentenceList[e.currentSentIdx].id, t.next = 3, Object(u.m)(n);

                              case 3:
                                s = t.sent, r = s.authentic_expressions, e.expList = r, wx.pageScrollTo({
                                    scrollTop: 0
                                });

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                prev: function() {
                    this.currentSentIdx--, this.changeSentence();
                },
                next: function() {
                    Object(a.a)(), this.currentSentIdx++, this.changeSentence();
                },
                finish: function() {
                    var e = this;
                    return c()(i.a.mark(function t() {
                        var n;
                        return i.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n = Math.round((new Date() - e.startTime) / 1e3), d({
                                    event_code: "RDreading_BookCourse_StudyTime",
                                    event_value: {
                                        chaptertitle_cn: e.articleTitle,
                                        study_time: n,
                                        study_content: "重点精讲"
                                    }
                                }), t.next = 4, Object(u.d)(e.userCourseId, {
                                    article_id: e.articleId,
                                    finished_part: 4,
                                    used_time: n
                                });

                              case 4:
                                Object(a.a)(), e.$router.back({
                                    path: "/pages/CourseArticleIndex/main",
                                    query: {
                                        userCourseId: e.userCourseId,
                                        articleId: e.articleId,
                                        articleTitle: e.articleTitle
                                    }
                                });

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                }
            }
        };
    },
    ejcK: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = n("5nAL"), i = n.n(s), r = n("CgWy");
        new i.a(r.a).$mount();
    },
    "fJB+": function(e, t, n) {
        "use strict";
        var s = {
            render: function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", {
                    class: e.isHideLectureGuide ? "course-lecture" : "course-lecture show-guide"
                }, [ n("div", {
                    staticClass: "progress-container"
                }, [ n("div", {
                    staticClass: "bar-container"
                }, [ n("div", {
                    staticClass: "bar",
                    style: {
                        width: 100 * (e.currentSentIdx + 1) / e.sentenceList.length + "%"
                    }
                }) ]), e._v(" "), n("div", {
                    staticClass: "text"
                }, [ e._v(e._s(e.currentSentIdx + 1) + "/" + e._s(e.sentenceList.length)) ]) ]), e._v(" "), n("div", {
                    staticClass: "sentence"
                }, [ n("div", {
                    staticClass: "label"
                }, [ e._v("·原句") ]), e._v(" "), n("div", {
                    staticClass: "content"
                }, [ n("rich-text", {
                    attrs: {
                        nodes: "{{currentSent.sentence_content}}",
                        mpcomid: "0"
                    }
                }) ], 1) ]), e._v(" "), e._l(e.expList, function(t, s) {
                    return n("div", {
                        key: s,
                        staticClass: "expression"
                    }, [ n("div", {
                        staticClass: "meta"
                    }, [ e._v(e._s(t.expression)) ]), e._v(" "), n("div", {
                        staticClass: "detail"
                    }, [ n("div", {
                        staticClass: "trans"
                    }, [ e._v(e._s(t.interpretation)) ]), e._v(" "), n("rich-text", {
                        attrs: {
                            nodes: "{{exp.notes}}",
                            mpcomid: "1-" + s
                        }
                    }) ], 1) ]);
                }), e._v(" "), n("div", {
                    staticClass: "btn-group"
                }, [ 0 === e.currentSentIdx ? n("div") : e._e(), e._v(" "), e.currentSentIdx > 0 ? n("button", {
                    staticClass: "btn flex-vhc",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: e.prev
                    }
                }, [ e._v("上一个") ]) : e._e(), e._v(" "), e.currentSentIdx < e.sentenceList.length - 1 ? n("button", {
                    staticClass: "btn flex-vhc",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: e.next
                    }
                }, [ e._v("下一个") ]) : e._e(), e._v(" "), e.currentSentIdx === e.sentenceList.length - 1 ? n("button", {
                    staticClass: "btn flex-vhc finish",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: e.finish
                    }
                }, [ e._v("完成") ]) : e._e() ], 1), e._v(" "), e.isHideLectureGuide ? e._e() : n("img", {
                    staticClass: "guide",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/e644d6c41e1bb51f24429cfa9a9d4261.032484bacd13ec0506267356f6d494c4.png",
                        eventid: "3"
                    },
                    on: {
                        click: e.hideGuide
                    }
                }) ], 2);
            },
            staticRenderFns: []
        };
        t.a = s;
    }
}, [ "ejcK" ]);