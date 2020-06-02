require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 15 ], {
    "1kNa": function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var r = a("5nAL"), n = a.n(r), s = a("ar59");
        new n.a(s.a).$mount();
    },
    "4G2F": function(t, e) {},
    "5d9D": function(t, e, a) {
        "use strict";
        var r = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "wrapper"
                }, [ a("div", {
                    staticClass: "search"
                }, [ a("div", {
                    staticClass: "search-bar"
                }, [ a("i", {
                    staticClass: "ib ib-search",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.search
                    }
                }), t._v(" "), a("input", {
                    attrs: {
                        type: "text",
                        value: t.word,
                        placeholder: "输入你想搜索的书籍",
                        "confirm-type": "search",
                        "placeholder-style": "color: #999;",
                        focus: !0,
                        eventid: "1"
                    },
                    on: {
                        input: t.input,
                        confirm: t.searchBooks
                    }
                }), t._v(" "), t.word ? a("i", {
                    staticClass: "ib ib-times-circle",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.clear
                    }
                }) : t._e() ], 1), t._v(" "), a("navigator", {
                    staticClass: "cancel",
                    attrs: {
                        "open-type": "navigateBack"
                    }
                }, [ t._v("取消") ]) ], 1), t._v(" "), t.didSearch ? a("div", {
                    staticClass: "result"
                }, [ t.total ? a("div", {
                    staticClass: "contents"
                }, [ a("div", {
                    staticClass: "total"
                }, [ t._v("共搜到" + t._s(t.total) + "本与"), a("span", {
                    staticClass: "key-word"
                }, [ t._v("“" + t._s(t.word) + "”") ]), t._v("相关的书籍") ]), t._v(" "), t._l(t.books, function(e, r) {
                    return a("ComplexBook", t._b({
                        key: e.id,
                        attrs: {
                            mpcomid: "0-" + r
                        }
                    }, "ComplexBook", e, !1));
                }) ], 2) : a("div", {
                    staticClass: "no-contents"
                }, [ a("div", {
                    staticClass: "icon"
                }), t._v(" "), a("div", {
                    staticClass: "tip"
                }, [ t._v("很抱歉，没有搜到相关书籍~") ]) ]) ]) : t._e() ]);
            },
            staticRenderFns: []
        };
        e.a = r;
    },
    ar59: function(t, e, a) {
        "use strict";
        var r = a("r/9Q"), n = a("5d9D");
        var s = function(t) {
            a("4G2F");
        }, c = a("ybqe")(r.a, n.a, s, "data-v-77e2ce12", null);
        e.a = c.exports;
    },
    "r/9Q": function(t, e, a) {
        "use strict";
        var r = a("Gu7T"), n = a.n(r), s = a("Xxa5"), c = a.n(s), o = a("exGp"), i = a.n(o), u = a("Apws"), l = a("KntP");
        e.a = {
            components: {
                ComplexBook: l.a
            },
            data: function() {
                return {
                    word: "",
                    books: [],
                    total: 0,
                    page: 1,
                    ipp: 10,
                    didSearch: !1
                };
            },
            methods: {
                input: function(t) {
                    this.didSearch = !1, this.word = t.target.value;
                },
                clear: function() {
                    this.word = "", this.didSearch = !1;
                },
                search: function() {
                    var t = this;
                    return i()(c.a.mark(function e() {
                        var a, r, n;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, u.a.search(t.word, t.page);

                              case 2:
                                return a = e.sent, r = a.objects, n = a.total, r.forEach(function(t) {
                                    t.name_en = t.name_en.replace(/<(\/)?em>/g, ""), t.name_cn = t.name_cn.replace(/<(\/)?em>/g, "");
                                }), t.didSearch = !0, t.total = n, e.abrupt("return", r);

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                searchBooks: function() {
                    var t = this;
                    return i()(c.a.mark(function e() {
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.page = 1, e.next = 3, t.search();

                              case 3:
                                t.books = e.sent;

                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                }
            },
            onReachBottom: function() {
                var t = this;
                return i()(c.a.mark(function e() {
                    var a;
                    return c.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t.didSearch) {
                                e.next = 2;
                                break;
                            }
                            return e.abrupt("return");

                          case 2:
                            if (t.total !== t.books.length) {
                                e.next = 5;
                                break;
                            }
                            return wx.showToast({
                                title: "没有更多了",
                                icon: "none"
                            }), e.abrupt("return");

                          case 5:
                            return t.page += 1, e.next = 8, t.search();

                          case 8:
                            a = e.sent, t.books = [].concat(n()(t.books), n()(a));

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            }
        };
    }
}, [ "1kNa" ]);