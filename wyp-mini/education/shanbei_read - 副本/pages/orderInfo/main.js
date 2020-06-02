require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 25 ], {
    VUg6: function(t, i) {},
    czzT: function(t, i, e) {
        "use strict";
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = e("5nAL"), a = e.n(s), n = e("fFA4");
        new a.a(n.a).$mount();
    },
    fFA4: function(t, i, e) {
        "use strict";
        var s = e("goa9"), a = e("rsAi");
        var n = function(t) {
            e("VUg6");
        }, r = e("ybqe")(s.a, a.a, n, "data-v-599fd388", null);
        i.a = r.exports;
    },
    goa9: function(t, i, e) {
        "use strict";
        var s = e("Xxa5"), a = e.n(s), n = e("exGp"), r = e.n(n), c = e("gD96"), o = e("Z8KY"), v = e("0xDb"), l = [ "主题皮肤", "特色词典", "中英对照", "书籍音频" ];
        i.a = {
            data: function() {
                return {
                    isPurchase: !0,
                    book: {
                        titleCn: "",
                        titleEn: "",
                        cover: ""
                    },
                    author: "",
                    avaiableServices: [],
                    titles: []
                };
            },
            components: {
                ServiceList: c.a
            },
            computed: {
                infoStr: function() {
                    return this.isPurchase ? "点击左上角返回扇贝阅读小程序，打开「书桌」页面即可查看" : "已购书籍已成功升级 " + (this.titles && this.titles.toString()) + " 服务，打开「书桌」页面即可查看";
                }
            },
            mounted: function() {
                var t = this;
                return r()(a.a.mark(function i() {
                    var e, s, n, r, c, u, d, _, f, b, p, h, C;
                    return a.a.wrap(function(i) {
                        for (;;) switch (i.prev = i.next) {
                          case 0:
                            return e = t.$route.query, s = e.productId, n = e.isPurchase, r = e.titles, t.isPurchase = "true" === n, 
                            t.titles = r, i.next = 5, o.a.get(s);

                          case 5:
                            c = i.sent, u = c.book, d = u.name_cn, _ = u.name_en, f = u.cover_urls, b = c.authors, 
                            p = c.bought_service_ids, h = c.services, C = Object(v.a)(f), t.book = {
                                titleCn: d,
                                titleEn: _,
                                cover: C
                            }, t.author = b.map(function(t) {
                                return t.name_cn;
                            }).toString(), h.forEach(function(t) {
                                var i = t.icon_urls;
                                t.iconUrl = i[0] || i[1] || "", t.name = l[t.content_type], t.checked = !1;
                            }), t.avaiableServices = h.filter(function(t) {
                                return p.indexOf(t.id) > -1;
                            });

                          case 18:
                          case "end":
                            return i.stop();
                        }
                    }, i, t);
                }))();
            }
        };
    },
    rsAi: function(t, i, e) {
        "use strict";
        var s = {
            render: function() {
                var t = this, i = t.$createElement, e = t._self._c || i;
                return e("div", {
                    staticClass: "order-info"
                }, [ e("div", {
                    staticClass: "tip-header"
                }, [ e("i", {
                    staticClass: "ib ib-check-circle",
                    staticStyle: {
                        "font-size": "50px"
                    }
                }), t._v(" "), e("div", {
                    staticClass: "tip-meta"
                }, [ e("div", [ t._v(t._s(t.isPurchase ? "购买成功!" : "升级成功")) ]), t._v(" "), e("div", {
                    staticClass: "tip-str"
                }, [ t._v("\n                " + t._s(t.infoStr) + "\n            ") ]) ]) ], 1), t._v(" "), e("div", {
                    staticClass: "tip-body-container"
                }, [ e("div", {
                    staticClass: "tip-body"
                }, [ e("div", {
                    staticClass: "order-book"
                }, [ e("img", {
                    staticClass: "book-cover",
                    attrs: {
                        src: t.book.cover,
                        alt: t.book.titleEn
                    }
                }), t._v(" "), e("div", {
                    staticClass: "book-meta"
                }, [ e("div", {
                    staticClass: "title-en two-line-ellipsis"
                }, [ t._v(t._s(t.book.titleEn)) ]), t._v(" "), e("div", {
                    staticClass: "title-cn one-line-ellipsis"
                }, [ t._v(t._s(t.book.titleCn)) ]), t._v(" "), e("div", {
                    staticClass: "author"
                }, [ t._v(t._s(t.author)) ]) ]) ]), t._v(" "), e("div", {
                    class: t.avaiableServices.length ? "book-service" : ""
                }, [ e("ServiceList", {
                    attrs: {
                        "service-list": t.avaiableServices,
                        mpcomid: "0"
                    }
                }) ], 1) ]) ]), t._v(" "), e("div", {
                    staticClass: "tip-footer"
                }, [ e("div", [ e("i", {
                    staticClass: "ib ib-bell-o",
                    staticStyle: {
                        "font-size": "19px"
                    }
                }), t._v("已开通读书提醒功能") ], 1), t._v(" "), e("div", {
                    staticStyle: {
                        color: "#aaa",
                        "font-size": "13px"
                    }
                }, [ t._v("可在「我的」-「提醒设置」中修改") ]) ]) ]);
            },
            staticRenderFns: []
        };
        i.a = s;
    }
}, [ "czzT" ]);