require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 30 ], {
    DI3b: function(t, e) {},
    caRo: function(t, e, a) {
        "use strict";
        var i = a("pO/D"), s = a("xvEP");
        var n = function(t) {
            a("DI3b");
        }, r = a("ybqe")(i.a, s.a, n, "data-v-a74f94fa", null);
        e.a = r.exports;
    },
    nwwE: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = a("5nAL"), s = a.n(i), n = a("caRo");
        new s.a(n.a).$mount();
    },
    "pO/D": function(t, e, a) {
        "use strict";
        var i = a("Xxa5"), s = a.n(i), n = a("exGp"), r = a.n(n), o = a("Hqeg"), c = a("xJsL"), d = a("Apws"), l = a("rgcf"), u = a("0xDb");
        e.a = {
            components: {
                BookCover: o.a,
                Login: c.a
            },
            data: function() {
                return {
                    deskIsEmpty: !0,
                    currentIndex: 0,
                    books: [],
                    total: 0,
                    lastBook: {},
                    isLoading: !0,
                    isShowLoginModal: !1
                };
            },
            computed: {
                currentSlide: function() {
                    return this.books[this.currentIndex];
                },
                lastSlide: function() {
                    return this.books[this.books.length - 1];
                }
            },
            methods: {
                slide: function(t) {
                    this.currentIndex = t.target.current;
                },
                handleNavToShelf: function() {
                    this.$router.push("/pages/bookshelf/main");
                },
                handleNavToArticle: function(t) {
                    var e = this;
                    return r()(s.a.mark(function a() {
                        return s.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return a.next = 2, d.a.track({
                                    event_code: "reading-read-in-bookdesk",
                                    event_value: {
                                        bookproduct_name: t.book.name_cn
                                    }
                                });

                              case 2:
                                e.$router.push({
                                    path: "/pages/article/main",
                                    query: {
                                        articleId: t.curr_read_position.article_id,
                                        paraId: t.curr_read_position.paragraph_id
                                    }
                                });

                              case 3:
                              case "end":
                                return a.stop();
                            }
                        }, a, e);
                    }))();
                },
                handleSubmit: function(t) {
                    d.a.collectFormId(t.mp.detail.formId);
                },
                login: function() {
                    this.isShowLoginModal = !1, this.load();
                },
                load: function() {
                    var t = this;
                    return r()(s.a.mark(function e() {
                        var a, i, n;
                        return s.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 0, e.next = 3, l.a.listSlides();

                              case 3:
                                a = e.sent, i = a.objects, n = a.total, i.forEach(function(t) {
                                    t.imgUrl = Object(u.a)(t.book.cover_urls), t.timeStr = "已阅读" + Object(u.e)(t.reading_time);
                                }), n > 3 ? (t.books = i.slice(0, 3), t.lastBook = i[3]) : t.books = i, t.total = n, 
                                t.deskIsEmpty = !n, t.isLoading = !1, t.isShowLoginModal = !1, e.next = 17;
                                break;

                              case 14:
                                e.prev = 14, e.t0 = e.catch(0), t.isShowLoginModal = !0;

                              case 17:
                              case "end":
                                return e.stop();
                            }
                        }, e, t, [ [ 0, 14 ] ]);
                    }))();
                }
            },
            onShow: function() {
                this.load();
            },
            mounted: function() {
                var t = this;
                return r()(s.a.mark(function e() {
                    return s.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            d.a.track({
                                event_code: "reading-bookdesk-pv"
                            });

                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, e, t);
                }))();
            },
            onHide: function() {
                this.currentIndex = 0;
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
    xvEP: function(t, e, a) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", [ t.isLoading ? t._e() : a("div", {
                    staticClass: "desk"
                }, [ t.deskIsEmpty ? a("div", {
                    staticClass: "desk-container empty"
                }, [ a("div", {
                    staticClass: "desk-empty"
                }), t._v(" "), a("div", [ t._v("书桌上还没有书籍哦") ]), t._v(" "), a("div", {
                    staticClass: "desk-empty-tip"
                }, [ t._v("快去选本书吧～") ]) ]) : a("div", {
                    staticClass: "desk-container not-empty"
                }, [ a("navigator", {
                    staticClass: "button",
                    attrs: {
                        url: "/pages/bookshelf/main"
                    }
                }, [ a("div", {
                    staticClass: "label-all"
                }, [ t._v("\n                    我的全部图书\n                    "), a("i", {
                    staticClass: "ib ib-chevron-right chevron",
                    staticStyle: {
                        color: "#c0c0c0"
                    }
                }), t._v(" "), a("i", {
                    staticClass: "ib ib-chevron-right chevron",
                    staticStyle: {
                        color: "#dedede",
                        "margin-left": "-8px"
                    }
                }) ], 1) ]), t._v(" "), a("swiper", {
                    staticClass: "swiper",
                    attrs: {
                        current: t.currentIndex,
                        "previous-margin": "80px",
                        "next-margin": "80px",
                        eventid: "3"
                    },
                    on: {
                        change: t.slide
                    }
                }, [ t._l(t.books, function(e, i) {
                    return a("swiper-item", {
                        key: i,
                        staticClass: "item",
                        attrs: {
                            eventid: "1-" + i,
                            mpcomid: "1-" + i
                        },
                        on: {
                            click: function(a) {
                                t.handleNavToArticle(e);
                            }
                        }
                    }, [ a("form", {
                        attrs: {
                            "report-submit": "",
                            eventid: "0-" + i
                        },
                        on: {
                            submit: t.handleSubmit
                        }
                    }, [ a("button", {
                        attrs: {
                            "form-type": "submit"
                        }
                    }, [ a("book-cover", {
                        attrs: {
                            cover_urls: e.book.cover_urls,
                            type: i === t.currentIndex ? "big" : "large",
                            progress: e.read_percentage,
                            isFinished: 100 === e.read_percentage,
                            isTrial: 1 === e.status,
                            mpcomid: "0-" + i
                        }
                    }) ], 1) ], 1) ], 1);
                }), t._v(" "), t.total > 3 ? a("swiper-item", {
                    staticClass: "item special",
                    attrs: {
                        eventid: "2",
                        mpcomid: "2"
                    },
                    on: {
                        click: t.handleNavToShelf
                    }
                }, [ a("div", [ a("div", {
                    staticClass: "cover",
                    class: {
                        active: 3 === t.currentIndex
                    }
                }, [ a("img", {
                    staticClass: "cover-img",
                    attrs: {
                        src: t.lastBook.imgUrl
                    }
                }), t._v(" "), a("div", {
                    staticClass: "mask"
                }), t._v(" "), a("div", {
                    staticClass: "more"
                }, [ a("div", {
                    staticClass: "more-icon"
                }, [ t._v("···") ]), t._v(" "), a("div", {
                    staticClass: "total"
                }, [ t._v("全部" + t._s(t.total) + "本") ]) ]) ]), t._v(" "), a("div", {
                    staticClass: "shadow",
                    class: {
                        active: 3 === t.currentIndex
                    }
                }) ]) ]) : t._e() ], 2), t._v(" "), t.currentIndex < 3 ? a("div", {
                    staticClass: "title_en"
                }, [ t._v(t._s(t.currentSlide.book.name_en)) ]) : t._e(), t._v(" "), t.currentIndex < 3 ? a("div", {
                    staticClass: "title_cn"
                }, [ t._v(t._s(t.currentSlide.book.name_cn)) ]) : t._e(), t._v(" "), t.currentIndex < 3 ? a("div", {
                    staticClass: "reading-time"
                }, [ t._v(t._s(t.currentSlide.timeStr)) ]) : t._e() ], 1) ]), t._v(" "), t.isShowLoginModal ? a("Login", {
                    attrs: {
                        eventid: "4",
                        mpcomid: "3"
                    },
                    on: {
                        onLogin: t.login
                    }
                }, [ a("span", [ t._v("登录后，可查看自己的书桌哦～") ]) ]) : t._e() ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    }
}, [ "nwwE" ]);