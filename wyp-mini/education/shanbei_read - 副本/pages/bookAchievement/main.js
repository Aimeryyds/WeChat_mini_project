require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 32 ], {
    "3Me+": function(t, a, e) {
        "use strict";
        var i = e("XByM"), r = e("9SX+");
        var c = function(t) {
            e("mS03");
        }, s = e("ybqe")(i.a, r.a, c, "data-v-c69ae49c", null);
        a.a = s.exports;
    },
    "9SX+": function(t, a, e) {
        "use strict";
        var i = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return t.loading ? t._e() : e("div", {
                    staticClass: "container"
                }, [ e("div", {
                    staticClass: "card-bg"
                }, [ t._m(0), t._v(" "), e("div", {
                    staticClass: "card"
                }, [ e("div", {
                    staticClass: "reading-done-icon"
                }), t._v(" "), e("div", {
                    staticClass: "personal-info"
                }, [ e("div", {
                    staticClass: "avatar-outline"
                }, [ e("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.avatar
                    }
                }) ]), t._v(" "), e("div", {
                    staticClass: "nickname"
                }, [ t._v(t._s(t.nickname)) ]) ]), t._v(" "), e("div", {
                    staticClass: "prompt"
                }, [ t._v("在「扇贝阅读」读完一本英文原版书") ]), t._v(" "), e("img", {
                    staticClass: "cover",
                    attrs: {
                        src: t.cover
                    }
                }), t._v(" "), e("div", {
                    staticClass: "title"
                }, [ t._v(t._s(t.title)) ]), t._v(" "), e("div", {
                    staticClass: "word-count"
                }, [ t._v("读完 " + t._s(t.count) + " 字") ]), t._v(" "), e("div", {
                    staticClass: "reading-time"
                }, [ e("i", {
                    staticClass: "ib ib-clock-circle-o"
                }), t._v(" "), e("span", [ t._v("阅读" + t._s(t.time)) ]) ], 1) ]) ]), t._v(" "), e("ShareButtonsGroup", {
                    attrs: {
                        type: "book",
                        productId: t.productId,
                        productName: t.productName,
                        cover: t.cover,
                        nickname: t.nickname,
                        avatar: t.avatar,
                        time: t.time,
                        bookName: t.title,
                        articleName: t.title,
                        bookWords: t.count,
                        articleWords: t.count,
                        progress: t.progress,
                        mpcomid: "0"
                    }
                }), t._v(" "), t.nextArticleId ? e("navigator", {
                    staticClass: "next",
                    attrs: {
                        "hover-class": "none",
                        url: t.url,
                        "open-type": "redirect"
                    }
                }, [ t._v("下一章") ]) : t._e() ], 1);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "card-circle-gap"
                }, [ a("div", {
                    staticClass: "circle left-circle"
                }), this._v(" "), a("div", {
                    staticClass: "circle right-circle"
                }) ]);
            } ]
        };
        a.a = i;
    },
    XByM: function(t, a, e) {
        "use strict";
        var i = e("Xxa5"), r = e.n(i), c = e("//Fk"), s = e.n(c), n = e("d7EF"), o = e.n(n), d = e("exGp"), l = e.n(d), u = e("xzjf"), v = e("1zHM"), m = e("0xDb"), p = e("4VVH");
        a.a = {
            onShareAppMessage: function() {
                var t = wx.getStorageSync("userDetail").id_int;
                return {
                    title: this.nickname + "正在读这本英文原版书，邀请你来一起参加",
                    path: "/pages/login/main?shareFrom=bookFinished&target=detail&productId=" + this.productId + "&bookId=" + this.bookId + "&userId=" + t + "&productName=" + this.productName + "&bookName=" + this.title
                };
            },
            components: {
                ShareButtonsGroup: u.a
            },
            data: function() {
                return {
                    nickname: "",
                    avatar: "",
                    productId: "",
                    productName: "",
                    cover: "",
                    title: "",
                    count: "",
                    time: "",
                    progress: 0,
                    bookId: "",
                    articleId: "",
                    nextArticleId: "",
                    loading: !0
                };
            },
            mounted: function() {
                var t = this;
                return l()(r.a.mark(function a() {
                    var e, i, c, n, d, l, u, _, g, k, h, b, f, I, C, x, N, S;
                    return r.a.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return t.loading = !0, e = Object(p.a)(), i = e.nickname, c = e.avatar_url, n = v.a.achieveBook, 
                            d = v.a.achieveArticle, t.nickname = i, t.avatar = c, l = t.$route.query, u = l.bookId, 
                            _ = l.articleId, t.bookId = u, t.articleId = _, a.next = 10, s.a.all([ d(_), n(u) ]);

                          case 10:
                            g = a.sent, k = o()(g, 2), h = k[0], b = k[1], f = b.book, I = f.cover_urls, C = f.name_cn, 
                            x = f.id, N = b.finished_word_amount, S = b.reading_time, t.nextArticleId = h.next_article_id, 
                            t.cover = Object(m.a)(I), t.time = Object(m.e)(S), t.count = N, t.title = C, t.productId = x, 
                            t.productName = C, t.loading = !1;

                          case 23:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            },
            computed: {
                url: function() {
                    return "/pages/article/main?articleId=" + this.nextArticleId;
                }
            }
        };
    },
    mS03: function(t, a) {},
    rVEI: function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("5nAL"), r = e.n(i), c = e("3Me+");
        new r.a(c.a).$mount();
    }
}, [ "rVEI" ]);