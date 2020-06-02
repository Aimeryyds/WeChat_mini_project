require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 12 ], {
    "4MyT": function(e, t, i) {
        "use strict";
        var r = i("igW4"), c = i("WX59");
        var s = function(e) {
            i("d1my");
        }, a = i("ybqe")(r.a, c.a, s, "data-v-78ed8b2a", null);
        t.a = a.exports;
    },
    WX59: function(e, t, i) {
        "use strict";
        var r = {
            render: function() {
                var e = this, t = e.$createElement, i = e._self._c || t;
                return i("div", {
                    staticClass: "purchase"
                }, [ i("div", {
                    staticClass: "order-book book-detail"
                }, [ i("img", {
                    staticClass: "book-cover",
                    attrs: {
                        src: e.book.cover,
                        alt: e.book.titleEn
                    }
                }), e._v(" "), i("div", {
                    staticClass: "book-meta"
                }, [ i("div", {
                    staticClass: "title-en two-line-ellipsis"
                }, [ e._v(e._s(e.book.titleEn)) ]), e._v(" "), i("div", {
                    staticClass: "title-cn one-line-ellipsis"
                }, [ e._v(e._s(e.book.titleCn)) ]), e._v(" "), e.isPurchase ? i("div", {
                    staticClass: "price"
                }, [ i("span", {
                    staticClass: "price-discount"
                }, [ e._v("¥" + e._s(e.promoPrice)) ]), e._v(" "), e.promoPrice !== e.price ? i("span", {
                    staticClass: "price-original"
                }, [ e._v("¥" + e._s(e.price)) ]) : e._e() ]) : i("div", {
                    staticClass: "price"
                }, [ i("span", {
                    staticClass: "price-done"
                }, [ e._v("已购买") ]) ]) ]) ]), e._v(" "), e.showService ? i("div", {
                    staticClass: "book-service"
                }, [ e.notAvaiableServices.length ? i("div", [ i("div", {
                    staticClass: "service-title"
                }, [ e._v("选择增值服务") ]), e._v(" "), i("ul", e._l(e.notAvaiableServices, function(t, r) {
                    return i("li", {
                        key: t.id,
                        staticClass: "flex service-item"
                    }, [ i("img", {
                        staticClass: "item-image",
                        attrs: {
                            src: t.iconUrl,
                            alt: ""
                        }
                    }), e._v(" "), i("div", {
                        staticClass: "item-name"
                    }, [ e._v(e._s(t.name)) ]), e._v(" "), i("div", [ e._v(e._s(t.promo_price ? t.promo_price : "免费")) ]), e._v(" "), i("div", {
                        staticClass: "checkbox",
                        attrs: {
                            eventid: "0-" + r
                        },
                        on: {
                            click: function(i) {
                                e.checkItem(t);
                            }
                        }
                    }, [ t.checked ? i("img", {
                        attrs: {
                            src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/fd7e03be4f498f28fdc48ccf47e8dcee.4e1b498eefeb80a76704d0a24cee2bcf.png",
                            alt: ""
                        }
                    }) : e._e() ]) ]);
                })) ], 1) : e._e(), e._v(" "), e.isPurchase && e.freeServices.length ? i("div", [ i("div", {
                    staticClass: "line"
                }), e._v(" "), i("div", {
                    staticClass: "service-title"
                }, [ e._v("免费赠送服务") ]), e._v(" "), i("service-list", {
                    attrs: {
                        "service-list": e.freeServices,
                        mpcomid: "0"
                    }
                }) ], 1) : e._e(), e._v(" "), !e.isPurchase && e.avaiableServices.length ? i("div", [ i("div", {
                    staticClass: "line"
                }), e._v(" "), i("div", {
                    staticClass: "service-title"
                }, [ e._v("已拥有服务") ]), e._v(" "), i("service-list", {
                    attrs: {
                        "service-list": e.avaiableServices,
                        mpcomid: "1"
                    }
                }) ], 1) : e._e() ]) : e._e(), e._v(" "), i("div", {
                    staticClass: "tip"
                }, [ e._v("完成购买，即可解锁全书，小程序中购买的书籍，在扇贝阅读app中也可以使用哦～") ]), e._v(" "), e.isPurchase ? i("button", {
                    staticClass: "confirm-pay",
                    class: {
                        disabled: !e.totalPrice
                    },
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: e.pay
                    }
                }, [ e._v("¥" + e._s(e.totalPrice) + " 确认支付") ]) : i("button", {
                    staticClass: "confirm-pay",
                    class: {
                        disabled: e.isDisabled
                    },
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: e.pay
                    }
                }, [ e._v(e._s(e.buttonStr)) ]) ], 1);
            },
            staticRenderFns: []
        };
        t.a = r;
    },
    ZEOp: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var r = i("5nAL"), c = i.n(r), s = i("4MyT");
        new c.a(s.a).$mount();
    },
    d1my: function(e, t) {},
    igW4: function(e, t, i) {
        "use strict";
        var r = i("Xxa5"), c = i.n(r), s = i("Dd8w"), a = i.n(s), n = i("exGp"), o = i.n(n), v = i("gD96"), l = i("Z8KY"), u = i("myns"), d = i("Apws"), p = i("0xDb"), _ = [ "主题皮肤", "特色词典", "中英对照", "书籍音频" ];
        t.a = {
            components: {
                ServiceList: v.a
            },
            data: function() {
                return {
                    productId: "",
                    isPurchase: !0,
                    book: {
                        titleCn: "",
                        titleEn: "",
                        cover: ""
                    },
                    price: 0,
                    promoPrice: 0,
                    avaiableServices: [],
                    notAvaiableServices: [],
                    freeServices: []
                };
            },
            computed: {
                totalPrice: function() {
                    var e = this.notAvaiableServices.filter(function(e) {
                        return e.checked;
                    }).map(function(e) {
                        return e.promo_price;
                    }).reduce(function(e, t) {
                        return e + t;
                    }, 0);
                    return this.isPurchase ? parseFloat((this.promoPrice + e).toFixed(2)) : parseFloat(e.toFixed(2));
                },
                checkedServiceTitles: function() {
                    return this.notAvaiableServices.filter(function(e) {
                        return e.checked;
                    }).map(function(e) {
                        return e.title;
                    });
                },
                isDisabled: function() {
                    return !this.notAvaiableServices.filter(function(e) {
                        return e.checked;
                    }).length;
                },
                showService: function() {
                    return this.notAvaiableServices.length || this.freeServices.length || this.avaiableServices.length;
                },
                buttonStr: function() {
                    return this.totalPrice ? (this.totalPrice > 0 ? "¥" + this.totalPrice : "") + " 确认支付" : "免费升级";
                },
                navTitle: function() {
                    return this.isPurchase ? "解锁全书" : "升级书籍服务";
                }
            },
            methods: {
                checkItem: function(e) {
                    e.checked = !e.checked;
                },
                showOrderInfo: function() {
                    this.$router.replace({
                        path: "/pages/orderInfo/main",
                        query: {
                            productId: this.productId,
                            isPurchase: this.isPurchase,
                            titles: this.checkedServiceTitles
                        }
                    });
                },
                pay: function() {
                    var e = this;
                    return o()(c.a.mark(function t() {
                        var i, r, s, n, o, v;
                        return c.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return i = e.totalPrice ? "confirm_purchase" : "upgrade_free", r = e.isPurchase ? "buy_product" : "upgrade_service", 
                                d.a.track({
                                    event_code: "reading-bookproduct-purchase-confirm",
                                    event_value: {
                                        action: i,
                                        bookproduct_name: e.book.titleCn,
                                        bookproduct_id: e.productId,
                                        location: r
                                    }
                                }), s = e.notAvaiableServices.filter(function(e) {
                                    return e.checked;
                                }).map(function(e) {
                                    return {
                                        content_type: 3,
                                        object_id: e.id
                                    };
                                }), e.isPurchase && s.push({
                                    content_type: 1,
                                    object_id: e.productId
                                }), t.next = 7, u.a.create({
                                    channel: 5,
                                    items: s,
                                    platform: 4,
                                    wechat_app_name: "wechatapp_read"
                                });

                              case 7:
                                n = t.sent, (o = n.payment_string) ? ((v = JSON.parse(o)).timeStamp && (v.timestamp = v.timeStamp), 
                                wx.requestPayment(a()({}, v, {
                                    success: function() {
                                        e.showOrderInfo();
                                    },
                                    fail: function() {}
                                }))) : e.showOrderInfo();

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                }
            },
            mounted: function() {
                var e = this;
                return o()(c.a.mark(function t() {
                    var i, r, s, a, n, o, v, u, d, f, h, m;
                    return c.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return i = e.$route.query.productId, e.productId = i, t.next = 4, l.a.get(i);

                          case 4:
                            r = t.sent, s = r.book, a = s.name_cn, n = s.name_en, o = s.cover_urls, v = r.user_book.status, 
                            u = r.price, d = r.promo_price, f = r.bought_service_ids, (h = r.services).forEach(function(e) {
                                var t = e.icon_urls;
                                e.iconUrl = t[0] || t[1] || "", e.name = _[e.content_type], e.checked = !e.promo_price;
                            }), m = Object(p.a)(o), e.book = {
                                titleCn: a,
                                titleEn: n,
                                cover: m
                            }, e.isPurchase = 2 !== v, e.price = u, e.promoPrice = d, e.avaiableServices = h.filter(function(e) {
                                return f.indexOf(e.id) > -1;
                            }), e.notAvaiableServices = h.filter(function(e) {
                                return -1 === f.indexOf(e.id);
                            }), e.freeServices = h.filter(function(e) {
                                return 0 === e.promo_price;
                            }), wx.setNavigationBarTitle({
                                title: e.navTitle
                            });

                          case 24:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        };
    },
    myns: function(e, t, i) {
        "use strict";
        var r = i("/WWA"), c = i("Vo7i"), s = {
            create: function(e) {
                return Object(c.a)(r.c + "/reading/orders", {
                    method: "POST",
                    body: e
                });
            }
        };
        t.a = s;
    }
}, [ "ZEOp" ]);