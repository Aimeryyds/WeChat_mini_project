require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 36 ], {
    "5SV/": function(e, t) {},
    GZh7: function(e, t, i) {
        "use strict";
        var s = {
            render: function() {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {
                    class: e.isHideTodayGuide ? "course-today" : "course-today show-guide"
                }, [ i("swiper", {
                    staticClass: "swiper",
                    attrs: {
                        "indicator-dots": "{{true}}",
                        "previous-margin": "40px",
                        "next-margin": "21px"
                    }
                }, e._l(e.expList, function(t, s) {
                    return i("div", {
                        key: s
                    }, [ i("swiper-item", {
                        attrs: {
                            mpcomid: "1-" + s
                        }
                    }, [ s === e.expList.length - 1 ? i("div", {
                        staticClass: "swiper-item-last"
                    }, [ i("div", {
                        staticClass: "title"
                    }, [ e._v("·小调查") ]), e._v(" "), i("div", {
                        staticClass: "question"
                    }, [ e._v("你感觉今天有收获吗？") ]), e._v(" "), i("radio-group", {
                        staticClass: "radio-group option-list",
                        attrs: {
                            eventid: "0-" + s,
                            mpcomid: "0-" + s
                        },
                        on: {
                            change: e.radioChange
                        }
                    }, e._l(e.optionList, function(t, s) {
                        return i("div", {
                            key: s,
                            staticClass: "radio"
                        }, [ i("radio", {
                            attrs: {
                                color: "#ffa372",
                                value: t.value,
                                checked: t.checked
                            }
                        }, [ e._v(e._s(t.text)) ]) ], 1);
                    })), e._v(" "), i("button", {
                        staticClass: "flex-vhc",
                        attrs: {
                            eventid: "1-" + s
                        },
                        on: {
                            click: e.finish
                        }
                    }, [ e._v("完成") ]) ], 1) : t.resIsShow ? i("div", {
                        staticClass: "swiper-item-hide",
                        attrs: {
                            eventid: "2-" + s
                        },
                        on: {
                            click: function(i) {
                                e.clickCard(t);
                            }
                        }
                    }, [ i("div", {
                        staticClass: "progress"
                    }, [ e._v(e._s(s + 1) + "/" + e._s(e.expList.length - 1)) ]), e._v(" "), i("div", [ i("div", {
                        staticClass: "cn"
                    }, [ e._v(e._s(t.interpretation)) ]), e._v(" "), i("div", {
                        staticClass: "en"
                    }, [ e._v(e._s(t.expression)) ]) ]) ]) : i("view", {
                        staticClass: "swiper-item-show",
                        attrs: {
                            eventid: "3-" + s
                        },
                        on: {
                            click: function(i) {
                                e.clickCard(t);
                            }
                        }
                    }, [ i("div", {
                        staticClass: "progress"
                    }, [ e._v(e._s(s + 1) + "/" + e._s(e.expList.length - 1)) ]), e._v(" "), i("div", {
                        staticClass: "content"
                    }, [ e._v(e._s(t.interpretation)) ]), e._v(" "), i("div", {
                        staticClass: "tip"
                    }, [ i("div", [ e._v("先回想") ]), e._v(" "), i("div", [ e._v("再点击卡片查看释义哦～") ]) ]) ]) ]) ], 1);
                })), e._v(" "), e.isHideTodayGuide ? e._e() : i("img", {
                    staticClass: "guide",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/425167065327db92a561c03e2fc69931.f7d6555ec0b63c6078363c0893fdd698.png",
                        eventid: "4"
                    },
                    on: {
                        click: e.hideGuide
                    }
                }) ], 1);
            },
            staticRenderFns: []
        };
        t.a = s;
    },
    gAps: function(e, t, i) {
        "use strict";
        var s = i("Xxa5"), a = i.n(s), r = i("Dd8w"), n = i.n(r), c = i("exGp"), o = i.n(c), d = i("1IwQ"), u = i("D9eU"), l = i("Apws").a.sensorLog, v = "";
        t.a = {
            data: function() {
                return {
                    userCourseId: "",
                    articleId: "",
                    articleTitle: "",
                    expList: [],
                    startTime: null,
                    optionList: [ {
                        value: 1,
                        text: "完全没有",
                        checked: !1
                    }, {
                        value: 2,
                        text: "一点点",
                        checked: !1
                    }, {
                        value: 3,
                        text: "一般",
                        checked: !1
                    }, {
                        value: 4,
                        text: "很多",
                        checked: !1
                    }, {
                        value: 5,
                        text: "收获满满",
                        checked: !1
                    } ],
                    isHideTodayGuide: !0
                };
            },
            mounted: function() {
                this.startTime = new Date();
                var e = wx.getStorageSync("isHideTodayGuide");
                this.isHideTodayGuide = e;
            },
            onShow: function() {
                var e = this;
                return o()(a.a.mark(function t() {
                    var i, s, r, c, o, d, v, p;
                    return a.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return i = e.$route.query, s = i.userCourseId, r = i.articleId, c = i.articleTitle, 
                            e.articleId = r, e.userCourseId = s, e.articleTitle = c, t.next = 6, Object(u.j)(e.articleId);

                          case 6:
                            return o = t.sent, d = o.objects, e.expList = d.map(function(e) {
                                return n()({}, e, {
                                    resIsShow: !1
                                });
                            }), e.expList.push({}), t.next = 12, Object(u.o)(s, r);

                          case 12:
                            v = t.sent, p = v.score, e.optionList.forEach(function(e) {
                                e.value === p && (e.checked = !0);
                            }), l({
                                event_code: "RDreading_BookCourseStep3_PV",
                                event_value: {
                                    chaptertitle_cn: c
                                }
                            });

                          case 16:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            },
            methods: {
                hideGuide: function() {
                    this.isHideTodayGuide = !0, wx.setStorage({
                        key: "isHideTodayGuide",
                        data: !0
                    });
                },
                clickCard: function(e) {
                    e.resIsShow || Object(d.a)(), e.resIsShow = !e.resIsShow;
                },
                clickOption: function(e, t) {
                    this.offset = offsets[t], this.currentOptIdx = t;
                },
                radioChange: function(e) {
                    v = e.mp.detail.value;
                },
                finish: function() {
                    var e = this;
                    return o()(a.a.mark(function t() {
                        var i, s, r;
                        return a.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (v) {
                                    t.next = 3;
                                    break;
                                }
                                return wx.showToast({
                                    title: "请填写小调查哦~",
                                    icon: "none"
                                }), t.abrupt("return");

                              case 3:
                                return i = Math.round((new Date() - e.startTime) / 1e3), l({
                                    event_code: "RDreading_BookCourse_StudyTime",
                                    event_value: {
                                        chaptertitle_cn: e.articleTitle,
                                        study_time: i,
                                        study_content: "今日总结"
                                    }
                                }), t.next = 7, Object(u.d)(e.userCourseId, {
                                    article_id: e.articleId,
                                    finished_part: 8,
                                    used_time: i
                                });

                              case 7:
                                return s = t.sent, r = s.id, t.next = 11, Object(u.c)({
                                    user_book_course_id: e.userCourseId,
                                    article_id: e.articleId,
                                    score: v
                                });

                              case 11:
                                Object(d.a)(), e.$router.push({
                                    path: "/pages/CourseShare/main",
                                    query: {
                                        userArticleCourseId: r,
                                        articleId: e.articleId,
                                        userCourseId: e.userCourseId
                                    }
                                });

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                }
            }
        };
    },
    kdMY: function(e, t, i) {
        "use strict";
        var s = i("gAps"), a = i("GZh7");
        var r = function(e) {
            i("5SV/");
        }, n = i("ybqe")(s.a, a.a, r, "data-v-3a07fd72", null);
        t.a = n.exports;
    },
    u8sB: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = i("5nAL"), a = i.n(s), r = i("kdMY");
        new a.a(r.a).$mount();
    }
}, [ "u8sB" ]);