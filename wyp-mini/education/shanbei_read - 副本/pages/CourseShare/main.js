require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 37 ], {
    "+A1x": function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = a("5nAL"), i = a.n(s), n = a("/aER");
        new i.a(n.a).$mount();
    },
    "/aER": function(t, e, a) {
        "use strict";
        var s = a("Bgvq"), i = a("mS/9");
        var n = function(t) {
            a("CEPy");
        }, c = a("ybqe")(s.a, i.a, n, "data-v-6efdfee0", null);
        e.a = c.exports;
    },
    Bgvq: function(t, e, a) {
        "use strict";
        var s = a("mvHQ"), i = a.n(s), n = a("Xxa5"), c = a.n(n), r = a("exGp"), o = a.n(r), d = a("4VVH"), l = a("0xDb"), v = a("D9eU"), u = a("Apws").a.sensorLog;
        e.a = {
            data: function() {
                return {
                    date: "",
                    courseTitle: "",
                    nickname: "",
                    avatar: "",
                    bookCover: "",
                    bookNameEn: "",
                    bookNameCn: "",
                    articleTitle: "",
                    wordCount: "",
                    time: "",
                    studyDays: "",
                    isModalShow: !1,
                    keyPoints: [],
                    checkinDaysNum: "",
                    backgroundUrl: "",
                    userArticleCourseId: "",
                    isShared: 0
                };
            },
            mounted: function() {
                var t = Object(d.a)(), e = t.nickname, a = t.avatar_url;
                this.nickname = e, this.avatar = a;
            },
            onShow: function() {
                var t = this;
                return o()(c.a.mark(function e() {
                    var a, s, i, n, r, o, d, _, C, h, m, k, b, g, p, f, y, w, x, S, I;
                    return c.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return a = t.$route.query, s = a.userCourseId, i = a.articleId, n = a.userArticleCourseId, 
                            r = a.isShared, t.articleId = i, t.userCourseId = s, t.userArticleCourseId = n, 
                            t.isShared = !!r, e.next = 7, Object(v.l)(t.userArticleCourseId);

                          case 7:
                            return o = e.sent, d = o.book_info, _ = o.title_cn, C = o.user_stats, h = o.book_course_title, 
                            m = o.key_points, k = o.background_url, b = d.cover_urls, g = d.name_cn, p = d.name_en, 
                            t.bookCover = b[0], t.bookNameEn = p, t.bookNameCn = g, t.articleTitle = _, t.backgroundUrl = k, 
                            f = C.completed_days, y = C.num_words_activated, w = C.used_time, x = C.finished_at, 
                            t.wordCount = y, t.time = Math.floor(w / 60) + ":" + Object(l.h)(w % 60), t.studyDays = f, 
                            t.date = x.replace(/-/g, "/"), t.courseTitle = h, t.keyPoints = m.split("\n"), e.next = 29, 
                            Object(v.k)();

                          case 29:
                            S = e.sent, I = S.checkin_days_num, t.checkinDaysNum = I, u({
                                event_code: "RDreading_BookCourseCheckin_PV",
                                event_value: {
                                    chaptertitle_cn: _
                                }
                            });

                          case 33:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            onShareAppMessage: function() {
                return u({
                    event_code: "RDreading_BookCourseCheckinShare_ChooseChannel",
                    event_value: {
                        chaptertitle_cn: this.articleTitle,
                        channel_name: "微信好友"
                    }
                }), {
                    title: "我正在精读" + this.courseTitle,
                    path: "/pages/CourseShare/main?userArticleCourseId=" + this.userArticleCourseId + "&isShared=1"
                };
            },
            methods: {
                toggleModal: function() {
                    this.isModalShow = !this.isModalShow, this.isModalShow && u({
                        event_code: "RDreading_BookCourseCheckin_ClickShare",
                        event_value: {
                            chaptertitle_cn: this.articleTitle
                        }
                    });
                },
                back: function() {
                    wx.reLaunch({
                        url: "/pages/CourseDetail/main?userCourseId=" + this.userCourseId
                    });
                },
                genPoster: function() {
                    var t = this;
                    return o()(c.a.mark(function e() {
                        var a, s, n, r, o, d;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return u({
                                    event_code: "RDreading_BookCourseCheckinShare_ChooseChannel",
                                    event_value: {
                                        chaptertitle_cn: t.articleTitle,
                                        channel_name: "生成海报"
                                    }
                                }), wx.showLoading({
                                    title: "正在生成海报"
                                }), a = "100", s = "375", n = {
                                    avatar: t.avatar,
                                    nickname: t.nickname,
                                    checkinDaysNum: t.checkinDaysNum,
                                    time: t.time
                                }, r = "https://web.shanbay.com/reading/bookcourse/poster?userCourseId=" + t.userArticleCourseId + "&shareOptions=" + encodeURIComponent(i()(n)), 
                                e.next = 8, Object(v.z)({
                                    url: r,
                                    width: s,
                                    height: a
                                });

                              case 8:
                                o = e.sent, d = o.url, wx.hideLoading(), t.$router.push({
                                    path: "/pages/shareCaptureImage/main",
                                    query: {
                                        type: "plan-poster",
                                        url: d,
                                        height: a
                                    }
                                });

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                }
            }
        };
    },
    CEPy: function(t, e) {},
    "mS/9": function(t, e, a) {
        "use strict";
        var s = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "course-share"
                }, [ a("div", {
                    staticClass: "poster"
                }, [ a("div", {
                    staticClass: "banner-container"
                }, [ a("img", {
                    staticClass: "banner",
                    attrs: {
                        src: t.backgroundUrl
                    }
                }), t._v(" "), a("div", {
                    staticClass: "mask"
                }) ]), t._v(" "), a("div", {
                    staticClass: "placeholder"
                }), t._v(" "), a("div", {
                    staticClass: "content-bg"
                }, [ a("div", {
                    staticClass: "header"
                }, [ a("div", {
                    staticClass: "check-in"
                }, [ a("div", {
                    staticClass: "date"
                }, [ t._v(t._s(t.date)) ]), t._v(" "), a("div", {
                    staticClass: "days"
                }, [ a("div", [ t._v(t._s(t.checkinDaysNum)) ]), t._v(" "), a("div", {
                    staticClass: "decoration"
                }) ]), t._v(" "), a("div", {
                    staticClass: "description"
                }, [ t._v("扇贝打卡天数") ]) ]), t._v(" "), a("div", {
                    staticClass: "user"
                }, [ a("div", [ t._v("正在「扇贝阅读」精读原版书") ]), t._v(" "), a("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.avatar
                    }
                }), t._v(" "), a("div", {
                    staticClass: "nickname"
                }, [ t._v(t._s(t.nickname)) ]) ]) ]), t._v(" "), a("div", {
                    staticClass: "book"
                }, [ a("img", {
                    staticClass: "cover",
                    attrs: {
                        src: t.bookCover
                    }
                }), t._v(" "), a("div", {
                    staticClass: "meta"
                }, [ a("div", {
                    staticClass: "book-name"
                }, [ t._v(t._s(t.bookNameEn)) ]), t._v(" "), a("div", {
                    staticClass: "book-title"
                }, [ t._v(t._s(t.bookNameCn)) ]), t._v(" "), a("div", {
                    staticClass: "article-title"
                }, [ t._v(t._s(t.articleTitle)) ]) ]), t._v(" "), a("img", {
                    staticClass: "decoration",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/89934a8fbd3c3208eb82454f5c21ffe1.d268eae5502bf1c82a3e2701cb95dece.png"
                    }
                }) ]), t._v(" "), a("div", {
                    staticClass: "stats"
                }, [ a("div", [ a("div", {
                    staticClass: "number"
                }, [ t._v(t._s(t.wordCount)) ]), t._v(" "), a("div", {
                    staticClass: "text"
                }, [ t._v("阅读字数") ]) ]), t._v(" "), a("div", [ a("div", {
                    staticClass: "number"
                }, [ t._v(t._s(t.time)) ]), t._v(" "), a("div", {
                    staticClass: "text"
                }, [ t._v("学习时长") ]) ]), t._v(" "), a("div", [ a("div", {
                    staticClass: "number"
                }, [ t._v(t._s(t.studyDays)) ]), t._v(" "), a("div", {
                    staticClass: "text"
                }, [ t._v("学习天数") ]) ]) ]), t._v(" "), a("div", {
                    staticClass: "article"
                }, [ a("div", {
                    staticClass: "title"
                }, [ t._v("本章回顾") ]), t._v(" "), a("div", {
                    staticClass: "item-list"
                }, t._l(t.keyPoints, function(e, s) {
                    return a("div", {
                        key: e,
                        staticClass: "item"
                    }, [ t._v(t._s(e)) ]);
                })) ]) ]) ]), t._v(" "), t.isShared ? t._e() : a("div", {
                    staticClass: "btn-container"
                }, [ a("button", {
                    staticClass: "btn flex-vhc left",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.back
                    }
                }, [ t._v("返回目录") ]), t._v(" "), a("button", {
                    staticClass: "btn flex-vhc right",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.toggleModal
                    }
                }, [ t._v("分享") ]) ], 1), t._v(" "), t.isModalShow ? a("div", {
                    staticClass: "modal"
                }, [ a("div", {
                    staticClass: "modal-mask",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: t.toggleModal
                    }
                }, [ a("div", {
                    staticClass: "modal-container",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation();
                        }
                    }
                }, [ a("button", {
                    staticClass: "option",
                    attrs: {
                        "open-type": "share"
                    }
                }, [ a("img", {
                    staticClass: "icon",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/ef772ecc617dfec37a24f531303aa5ec.b8024cb02ecebd42e91cb964e217b697.png"
                    }
                }), t._v(" "), a("div", {
                    staticClass: "text"
                }, [ t._v("微信好友") ]) ]), t._v(" "), a("button", {
                    staticClass: "option",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.genPoster
                    }
                }, [ a("img", {
                    staticClass: "icon",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/e222186d29d432c73f69b88bef302ad8.4e77a6cb375d46e5a080f7d3961cad8e.png"
                    }
                }), t._v(" "), a("div", {
                    staticClass: "text"
                }, [ t._v("生成海报") ]) ]) ], 1) ]) ]) : t._e() ]);
            },
            staticRenderFns: []
        };
        e.a = s;
    }
}, [ "+A1x" ]);