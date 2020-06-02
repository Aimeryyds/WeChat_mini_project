require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 31 ], {
    QGuE: function(e, t, r) {
        "use strict";
        var n = {
            render: function() {
                var e = this, t = e.$createElement, r = e._self._c || t;
                return r("div", [ r("scroll-view", {
                    staticClass: "book-shelf",
                    attrs: {
                        "scroll-y": "",
                        eventid: "1"
                    },
                    on: {
                        scrolltoupper: e.listPrev,
                        scrolltolower: e.listNext
                    }
                }, e._l(e.books, function(t, n) {
                    return r("div", {
                        key: n,
                        staticClass: "item",
                        attrs: {
                            eventid: "0-" + n
                        },
                        on: {
                            click: function(r) {
                                e.navTo(t);
                            }
                        }
                    }, [ r("simple-book", {
                        attrs: {
                            name_cn: t.book.name_cn,
                            cover_urls: t.book.cover_urls,
                            authors: t.authors,
                            progress: t.read_percentage,
                            isFinished: 100 === t.read_percentage,
                            isTrial: 1 === t.status,
                            mpcomid: "0-" + n
                        }
                    }) ], 1);
                })) ], 1);
            },
            staticRenderFns: []
        };
        t.a = n;
    },
    RQ8e: function(e, t, r) {
        "use strict";
        var n = r("Gu7T"), a = r.n(n), o = r("Xxa5"), s = r.n(o), c = r("exGp"), i = r.n(c), u = r("4yRm"), l = r("rgcf"), p = r("Apws");
        t.a = {
            data: function() {
                return {
                    currentPage: 1,
                    ipp: 12,
                    total: 0,
                    books: []
                };
            },
            components: {
                SimpleBook: u.a
            },
            methods: {
                navTo: function(e) {
                    var t = this;
                    return i()(s.a.mark(function r() {
                        return s.a.wrap(function(r) {
                            for (;;) switch (r.prev = r.next) {
                              case 0:
                                return r.next = 2, p.a.track({
                                    event_code: "reading-read-in-bookdesk",
                                    event_value: {
                                        bookproduct_name: e.book.name_cn
                                    }
                                });

                              case 2:
                                t.$router.push({
                                    path: "/pages/article/main",
                                    query: {
                                        articleId: e.curr_read_position.article_id,
                                        paraId: e.curr_read_position.paragraph_id,
                                        bookName: e.book.name_cn
                                    }
                                });

                              case 3:
                              case "end":
                                return r.stop();
                            }
                        }, r, t);
                    }))();
                },
                listNext: function() {
                    var e = this;
                    return i()(s.a.mark(function t() {
                        var r, n;
                        return s.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (e.books.length === e.total) {
                                    t.next = 7;
                                    break;
                                }
                                return e.currentPage += 1, t.next = 4, l.a.listAllBooks({
                                    page: e.currentPage,
                                    ipp: e.ipp
                                });

                              case 4:
                                r = t.sent, n = r.objects, e.books = [].concat(a()(e.books), a()(n));

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                }
            },
            mounted: function() {
                var e = this;
                return i()(s.a.mark(function t() {
                    var r, n, a, o, c;
                    return s.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return r = e.currentPage, n = e.ipp, t.next = 3, l.a.listAllBooks({
                                page: r,
                                ipp: n
                            });

                          case 3:
                            a = t.sent, o = a.objects, c = a.total, e.books = o, e.total = c;

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        };
    },
    Uhfq: function(e, t, r) {
        "use strict";
        var n = r("RQ8e"), a = r("QGuE");
        var o = function(e) {
            r("dsZu");
        }, s = r("ybqe")(n.a, a.a, o, "data-v-c393b5e6", null);
        t.a = s.exports;
    },
    dsZu: function(e, t) {},
    n0my: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r("5nAL"), a = r.n(n), o = r("Uhfq");
        new a.a(o.a).$mount();
    }
}, [ "n0my" ]);