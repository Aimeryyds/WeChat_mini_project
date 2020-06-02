require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 43 ], {
    "+Rpo": function(t, s, e) {
        "use strict";
        var i = {
            render: function() {
                var t = this, s = t.$createElement, e = t._self._c || s;
                return e("div", {
                    staticClass: "course-article-index"
                }, [ e("div", {
                    staticClass: "book-info"
                }, [ e("img", {
                    staticClass: "cover",
                    attrs: {
                        src: t.bookCover
                    }
                }), t._v(" "), e("div", [ e("div", {
                    staticClass: "title-en"
                }, [ t._v(t._s(t.bookTitleEn)) ]), t._v(" "), e("div", {
                    staticClass: "title-cn"
                }, [ t._v(t._s(t.bookTitleCn)) ]), t._v(" "), e("div", {
                    staticClass: "author"
                }, [ t._v(t._s(t.bookAuthor)) ]) ]) ]), t._v(" "), e("div", {
                    staticClass: "article-info"
                }, [ e("div", {
                    staticClass: "title"
                }, [ t._v(t._s(t.articleTitle)) ]), t._v(" "), e("img", {
                    staticClass: "decoration",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/04b7f9a27453022d12822a3061b439a5.82114944ceb0a0ad4f5a181d3276e3e7.png"
                    }
                }) ]), t._v(" "), e("div", {
                    staticClass: "content"
                }, [ e("div", {
                    staticClass: "label"
                }, [ t._v("本章看点") ]), t._v(" "), e("div", {
                    staticClass: "point-list"
                }, t._l(t.keyPoints, function(s, i) {
                    return e("div", {
                        key: s
                    }, [ t._v(t._s(s)) ]);
                })), t._v(" "), e("div", {
                    staticClass: "card-list"
                }, [ e("div", {
                    staticClass: "vertical-line"
                }), t._v(" "), t._l(t.parts, function(s, i) {
                    return e("div", {
                        key: i,
                        staticClass: "card",
                        attrs: {
                            eventid: "0-" + i
                        },
                        on: {
                            click: function(e) {
                                t.nav(s);
                            }
                        }
                    }, [ e("div", {
                        staticClass: "circle-container"
                    }, [ 2 === s.status ? e("div", {
                        staticClass: "circle start"
                    }) : t._e(), t._v(" "), 1 === s.status ? e("div", {
                        staticClass: "circle locked"
                    }) : t._e(), t._v(" "), 4 === s.status ? e("div", {
                        staticClass: "circle finished"
                    }) : t._e() ]), t._v(" "), e("div", {
                        staticClass: "meta-container"
                    }, [ e("div", {
                        staticClass: "title"
                    }, [ t._v(t._s(s.name)) ]), t._v(" "), e("div", {
                        staticClass: "meta"
                    }, [ e("div", {
                        staticClass: "desc"
                    }, [ t._v("预计学习时间" + t._s(s.time) + "分钟") ]), t._v(" "), e("div", {
                        staticClass: "state"
                    }, [ 2 === s.status ? e("button", {
                        staticClass: "start"
                    }, [ t._v("开始") ]) : t._e(), t._v(" "), 1 === s.status ? e("i", {
                        staticClass: "ib ib-lock-o"
                    }) : t._e(), t._v(" "), 4 === s.status ? e("i", {
                        staticClass: "ib ib-check check"
                    }) : t._e() ], 1) ]) ]) ]);
                }) ], 2), t._v(" "), t.parts.length && 4 === t.parts[2].status ? e("button", {
                    staticClass: "share flex-vhc",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.share
                    }
                }, [ e("div", {
                    staticClass: "text"
                }, [ t._v("分享成就") ]) ]) : t._e(), t._v(" "), !t.isHideCourseAppTip && t.finishedParts.length > 0 && t.finishedParts.length < 4 ? e("div", {
                    staticClass: "modal flex-vhc"
                }, [ e("div", {
                    staticClass: "body"
                }, [ e("div", {
                    staticClass: "title"
                }, [ t._v("我们增加了【活学活用】版块，帮你把学到的词汇、短语放在新场景中应用。") ]), t._v(" "), e("div", {
                    staticClass: "tip"
                }, [ t._v("注意：新版块的出现不会影响之前已经完成的章节进度哦~") ]), t._v(" "), e("div", {
                    staticClass: "footer flex-vhc",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.closeModal
                    }
                }, [ t._v("我知道了") ]) ]) ]) : t._e() ], 1) ]);
            },
            staticRenderFns: []
        };
        s.a = i;
    },
    "7bTV": function(t, s) {},
    Blfc: function(t, s, e) {
        "use strict";
        var i = e("Xxa5"), a = e.n(i), r = e("Dd8w"), o = e.n(r), c = e("exGp"), n = e.n(c), l = e("D9eU"), u = e("Apws").a.sensorLog, d = [ "/pages/CourseArticle/main", "/pages/CourseLecture/main", "/pages/CourseApplication/main", "/pages/CourseToday/main" ];
        s.a = {
            data: function() {
                return {
                    bookTitleCn: "",
                    bookTitleEn: "",
                    bookCover: "",
                    bookAuthor: "",
                    articleTitle: "",
                    keyPoints: [],
                    parts: [],
                    isLocked: "",
                    userArticleCourseId: "",
                    isHideCourseAppTip: !0,
                    finishedParts: []
                };
            },
            mounted: function() {
                var t = wx.getStorageSync("isHideCourseAppTip");
                this.isHideCourseAppTip = t;
            },
            onShow: function() {
                var t = this;
                return n()(a.a.mark(function s() {
                    var e, i, r, c, n, u, v, _, C, p, h, f, k;
                    return a.a.wrap(function(s) {
                        for (;;) switch (s.prev = s.next) {
                          case 0:
                            return e = t.$route.query, i = e.userCourseId, r = e.articleId, t.userCourseId = i, 
                            t.articleId = r, s.next = 5, Object(l.q)(i, r);

                          case 5:
                            c = s.sent, n = c.title_cn, u = c.key_points, v = c.book, c.parts, c.status, _ = c.id, 
                            C = c.is_locked, p = c.finished_parts, t.finishedParts = p, t.isLocked = C, t.articleTitle = n, 
                            t.keyPoints = u.split("\n"), t.userArticleCourseId = _, t.parts = c.parts.map(function(t, s) {
                                return o()({}, t, {
                                    url: d[s]
                                });
                            }), h = v.name_cn, f = v.name_en, k = v.cover_urls, v.authors, t.bookTitleCn = h, 
                            t.bookTitleEn = f, t.bookCover = k[0], t.bookAuthor = v.authors.map(function(t) {
                                return t.name_cn;
                            }).toString();

                          case 18:
                          case "end":
                            return s.stop();
                        }
                    }, s, t);
                }))();
            },
            methods: {
                nav: function(t) {
                    var s = t.status, e = t.url, i = t.part, a = "";
                    switch (i) {
                      case 1:
                        a = "RDreading_BookCourseInfoStep1_PV";
                        break;

                      case 4:
                        a = "RDreading_BookCourseInfoStep2_PV";
                        break;

                      case 6:
                        a = "RDreading_BookCourseInfoStep2_2_PV";
                        break;

                      case 8:
                        a = "RDreading_BookCourseInfoStep3_PV";
                        break;

                      default:
                        a = "RDreading_BookCourseInfoStep1_PV";
                    }
                    if (u({
                        event_code: a,
                        event_value: {
                            chaptertitle_cn: this.articleTitle
                        }
                    }), 1 === i) this.$router.push({
                        path: e,
                        query: {
                            userCourseId: this.userCourseId,
                            articleId: this.articleId
                        }
                    }); else {
                        if (this.isLocked) return void wx.showToast({
                            title: "内容还未解锁哦~",
                            icon: "none"
                        });
                        if (1 === s) return void wx.showToast({
                            title: "完成前面内容，就能学习啦~",
                            icon: "none"
                        });
                        this.$router.push({
                            path: e,
                            query: {
                                userCourseId: this.userCourseId,
                                articleId: this.articleId,
                                articleTitle: this.articleTitle
                            }
                        });
                    }
                },
                share: function() {
                    this.$router.replace({
                        path: "/pages/CourseShare/main",
                        query: {
                            userCourseId: this.userCourseId,
                            articleId: this.articleId,
                            userArticleCourseId: this.userArticleCourseId
                        }
                    });
                },
                closeModal: function() {
                    this.isHideCourseAppTip = !0, wx.setStorage({
                        key: "isHideCourseAppTip",
                        data: !0
                    });
                }
            }
        };
    },
    "j+xG": function(t, s, e) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var i = e("5nAL"), a = e.n(i), r = e("yc5Z");
        new a.a(r.a).$mount();
    },
    yc5Z: function(t, s, e) {
        "use strict";
        var i = e("Blfc"), a = e("+Rpo");
        var r = function(t) {
            e("7bTV");
        }, o = e("ybqe")(i.a, a.a, r, "data-v-1a5d1081", null);
        s.a = o.exports;
    }
}, [ "j+xG" ]);