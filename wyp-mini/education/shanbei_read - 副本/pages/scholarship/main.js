require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 17 ], {
    "9WNR": function(t, s, a) {
        "use strict";
        var i = {
            render: function() {
                var t = this, s = t.$createElement, a = t._self._c || s;
                return a("div", {
                    staticClass: "scholarship"
                }, [ t.bookplanInfo.cover_url ? a("div", {
                    staticClass: "bookplan-header",
                    style: {
                        backgroundImage: "url(" + t.bookplanInfo.cover_url + ")"
                    }
                }, [ a("div", {
                    staticClass: "meta-bg"
                }), t._v(" "), t._m(0) ]) : t._e(), t._v(" "), a("div", {
                    staticClass: "card rule"
                }, [ a("div", {
                    staticClass: "title"
                }, [ t._v("奖学金说明:") ]), t._v(" "), a("ul", [ a("li", [ t._v("\n                1.计划有效期内，坚持学习\n                "), a("span", {
                    staticClass: "highlight"
                }, [ t._v(t._s(t.bookplanInfo.least_days)) ]), t._v("天，即可获得奖学金\n            ") ]), t._v(" "), t.is50percent ? a("li", [ t._v("2.奖学金是计划金额的50%哦～") ]) : a("li", [ t._v("2.奖学金是计划金额的100%哦～") ]) ], 1), t._v(" "), a("div", {
                    staticClass: "tip"
                }, [ t._v("*提前读完书籍可以通过回看书籍继续学习。") ]) ], 1), t._v(" "), 3 === t.bookplanInfo.status ? a("div", {
                    staticClass: "card book-list"
                }, [ a("div", {
                    staticClass: "title"
                }, [ t._v("书籍回看") ]), t._v(" "), t._l(t.books, function(s, i) {
                    return a("ul", {
                        key: s.book_id
                    }, [ a("li", {
                        staticClass: "review-item",
                        class: {
                            "no-margin": i === t.books.length - 1
                        }
                    }, [ a("div", [ t._v(t._s(s.name_cn)) ]), t._v(" "), a("div", {
                        staticClass: "review",
                        attrs: {
                            eventid: "0-" + i
                        },
                        on: {
                            click: function(a) {
                                t.reviewBookArticle(s);
                            }
                        }
                    }, [ t._v("回看") ]) ]) ], 1);
                }) ], 2) : t._e(), t._v(" "), a("div", {
                    staticClass: "card",
                    class: {
                        offset: 3 !== t.bookplanInfo.status
                    }
                }, [ a("div", {
                    staticClass: "title"
                }, [ t._v("如何领取奖学金？") ]), t._v(" "), a("div", {
                    staticClass: "tip"
                }, [ t._v("【扇贝阅读】微信公众号-回复【返现】。如有疑问，可以在小程序-我的-联系我们中向我们反馈") ]) ]) ]);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, s = this._self._c || t;
                return s("div", {
                    staticClass: "meta"
                }, [ s("div", {
                    staticClass: "logo"
                }), this._v(" "), s("div", {
                    staticClass: "title"
                }, [ this._v("奖学金") ]), this._v(" "), s("div", {
                    staticClass: "slogan"
                }, [ this._v("/奖励你的坚持，养成阅读好习惯/") ]) ]);
            } ]
        };
        s.a = i;
    },
    Zatu: function(t, s, a) {
        "use strict";
        var i = a("nKsZ"), n = a("9WNR");
        var e = function(t) {
            a("ZjtG");
        }, o = a("ybqe")(i.a, n.a, e, "data-v-0b9368ce", null);
        s.a = o.exports;
    },
    ZjtG: function(t, s) {},
    nKsZ: function(t, s, a) {
        "use strict";
        var i = a("Dd8w"), n = a.n(i), e = a("IcnI"), o = a("NYxO");
        s.a = {
            store: e.a,
            data: function() {
                return {
                    is50percent: !0
                };
            },
            computed: n()({}, Object(o.c)({
                bookplanInfo: function(t) {
                    return t.bookplanData.bookplanInfo;
                }
            }), {
                books: function() {
                    return this.bookplanInfo.books;
                }
            }),
            methods: {
                reviewBookArticle: function(t) {
                    var s = t.current_read, a = s.article_id, i = s.paragraph_id, n = this.bookplanInfo, e = n.id, o = n.status;
                    this.$router.push({
                        path: "/pages/article/main",
                        query: {
                            articleId: a,
                            paraId: i,
                            userBookPlanId: e,
                            planStatus: o,
                            isFromBookplan: 1
                        }
                    });
                }
            },
            mounted: function() {
                var t = this.$route.query.is50percent;
                this.is50percent = "true" === t;
            }
        };
    },
    sCma: function(t, s, a) {
        "use strict";
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        var i = a("5nAL"), n = a.n(i), e = a("Zatu");
        new n.a(e.a).$mount();
    }
}, [ "sCma" ]);