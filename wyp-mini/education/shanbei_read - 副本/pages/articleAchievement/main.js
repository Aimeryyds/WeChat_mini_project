require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 34 ], {
    "6UQy": function(t, a, s) {
        "use strict";
        var e = s("Xxa5"), i = s.n(e), o = s("exGp"), c = s.n(o), r = s("Dd8w"), n = s.n(r), l = s("CXsx"), d = s("xzjf"), v = s("1zHM"), u = s("Z8KY"), p = s("0xDb"), m = s("4VVH"), _ = s("IcnI"), h = s("NYxO");
        a.a = {
            store: _.a,
            components: {
                UnlockModal: l.a,
                ShareButtonsGroup: d.a
            },
            onShareAppMessage: function() {
                var t = wx.getStorageSync("userDetail").id_int;
                return {
                    title: this.nickname + "正在读这本英文原版书，邀请你来一起参加",
                    path: "/pages/login/main?shareFrom=articleFinished&target=detail&productId=" + this.productId + "&bookId=" + this.bookId + "&userId=" + t + "&articleName=" + this.articleTitle + "&productName=" + this.productName
                };
            },
            data: function() {
                return {
                    cover: "",
                    nickname: "",
                    avatar: "",
                    isTryout: !1,
                    productId: "",
                    productName: "",
                    progress: 0,
                    nextId: "",
                    articleTitle: "",
                    bookTitle: "",
                    count: "",
                    time: 0,
                    bookId: "",
                    isShowUnlockModal: !1
                };
            },
            computed: n()({}, Object(h.c)({
                isAndroid: function(t) {
                    return t.globalData.isAndroid;
                }
            })),
            methods: {
                handleReadingDone: function() {
                    this.isTryout ? this.isAndroid ? this.$router.push({
                        url: "/pages/purchase/main"
                    }) : wx.showModal({
                        title: "温馨提示",
                        showCancel: !1,
                        content: "由于相关规范，iOS功能暂不可用",
                        confirmText: "我知道了"
                    }) : wx.redirectTo({
                        url: "/pages/article/main?articleId=" + this.nextId
                    });
                },
                closeUnlockModal: function() {
                    u.a.logPurchase(this.productId, 1), this.isShowUnlockModal = !1;
                }
            },
            mounted: function() {
                var t = this;
                return c()(i.a.mark(function a() {
                    var s, e, o, c, r, n, l, d, u, _, h, k, b, g, C, f, x;
                    return i.a.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return s = Object(m.a)(), e = s.nickname, o = s.avatar_url, t.nickname = e, t.avatar = o, 
                            c = t.$route.query.articleId, a.next = 6, v.a.achieveArticle(c);

                          case 6:
                            r = a.sent, n = r.book, l = n.name_cn, d = n.cover_urls, u = r.length, _ = r.next_article_id, 
                            h = r.product_id, k = r.title_cn, b = r.used_time, g = r.user_book, C = g.read_percentage, 
                            f = g.status, x = r.book_id, t.isTryout = 1 === f, t.nextId = _, t.articleTitle = k, 
                            t.progress = C, t.bookTitle = l, t.time = Object(p.e)(b), t.count = u, t.cover = Object(p.a)(d), 
                            t.productId = h, t.productName = l, t.bookId = x;

                          case 30:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            }
        };
    },
    JsVY: function(t, a, s) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var e = s("5nAL"), i = s.n(e), o = s("i4FP");
        new i.a(o.a).$mount();
    },
    RSP4: function(t, a, s) {
        "use strict";
        var e = {
            render: function() {
                var t = this, a = t.$createElement, s = t._self._c || a;
                return s("div", [ s("div", {
                    staticClass: "container"
                }, [ t.isShowUnlockModal ? s("UnlockModal", {
                    attrs: {
                        inputValue: "解锁",
                        eventid: "0",
                        mpcomid: "0"
                    },
                    on: {
                        closeUnlockModal: t.closeUnlockModal
                    }
                }) : t._e(), t._v(" "), s("div", {
                    staticClass: "card"
                }, [ s("div", {
                    staticClass: "reading-done-img"
                }), t._v(" "), s("div", {
                    staticClass: "card-book-info"
                }, [ s("div", {
                    staticClass: "cover"
                }, [ s("img", {
                    staticClass: "cover-img",
                    attrs: {
                        src: t.cover
                    }
                }), t._v(" "), s("div", {
                    staticClass: "progress"
                }, [ s("div", {
                    staticClass: "progress-bg"
                }), t._v(" "), s("div", {
                    staticClass: "progress-number"
                }, [ s("span", {
                    staticClass: "progress-percentage"
                }, [ t._v(t._s(t.progress || 0)) ]), t._v(" "), s("span", {
                    staticClass: "progress-unit"
                }, [ t._v("%") ]) ]) ]) ]), t._v(" "), s("div", {
                    staticClass: "book-info"
                }, [ s("div", {
                    staticClass: "book-title"
                }, [ t._v(t._s(t.bookTitle)) ]), t._v(" "), s("div", {
                    staticClass: "article-title"
                }, [ t._v(t._s(t.articleTitle)) ]) ]) ]), t._v(" "), s("div", {
                    staticClass: "card-achievement"
                }, [ s("div", {
                    staticClass: "personal-info"
                }, [ s("div", {
                    staticClass: "avatar-outline"
                }, [ s("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.avatar
                    }
                }) ]), t._v(" "), s("div", {
                    staticClass: "personal-info-text"
                }, [ s("div", {
                    staticClass: "nickname"
                }, [ t._v(t._s(t.nickname)) ]), t._v(" "), s("div", {
                    staticClass: "prompt"
                }, [ t._v("正在「扇贝阅读」读英文原版好书") ]) ]) ]), t._v(" "), s("div", {
                    staticClass: "achievement-info"
                }, [ s("div", {
                    staticClass: "achievement-info-bg"
                }, [ s("i", {
                    staticClass: "ib ib-clock-circle-o"
                }), t._v(" "), s("span", [ t._v("阅读" + t._s(t.time)) ]) ], 1), t._v(" "), s("div", {
                    staticClass: "achievement-info-bg"
                }, [ s("div", {
                    staticClass: "word-icon"
                }), t._v(" "), s("span", {
                    staticClass: "word-count-number"
                }, [ t._v("读完 " + t._s(t.count) + " 字") ]) ]) ]) ]) ]), t._v(" "), s("div", {
                    staticClass: "shadow"
                }), t._v(" "), s("ShareButtonsGroup", {
                    attrs: {
                        type: "article",
                        productId: t.productId,
                        productName: t.productName,
                        cover: t.cover,
                        nickname: t.nickname,
                        avatar: t.avatar,
                        time: t.time,
                        bookName: t.bookTitle,
                        articleName: t.articleTitle,
                        bookWords: t.count,
                        articleWords: t.count,
                        progress: t.progress,
                        mpcomid: "1"
                    }
                }), t._v(" "), s("div", {
                    staticClass: "next",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.handleReadingDone
                    }
                }, [ t.isTryout ? s("div", {
                    staticClass: "unlock-btn"
                }, [ s("div", {
                    staticClass: "unlock"
                }), t._v(" "), s("span", [ t._v("解锁全书") ]) ]) : s("span", [ t._v("下一章") ]) ]) ], 1) ]);
            },
            staticRenderFns: []
        };
        a.a = e;
    },
    i4FP: function(t, a, s) {
        "use strict";
        var e = s("6UQy"), i = s("RSP4");
        var o = function(t) {
            s("lqOw");
        }, c = s("ybqe")(e.a, i.a, o, "data-v-2469d503", null);
        a.a = c.exports;
    },
    lqOw: function(t, a) {}
}, [ "JsVY" ]);