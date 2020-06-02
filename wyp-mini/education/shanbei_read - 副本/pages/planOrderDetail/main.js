require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 20 ], {
    "3Ns3": function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = s("5nAL"), i = s.n(a), n = s("gJ3y");
        new i.a(n.a).$mount();
    },
    Ne6h: function(t, e, s) {
        "use strict";
        var a = {
            render: function() {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", [ t.showCouponModal ? s("div", {
                    staticClass: "coupon-list"
                }, t._l(t.coupons, function(e, a) {
                    return s("div", {
                        key: e.user_coupon_id,
                        staticClass: "coupon",
                        attrs: {
                            eventid: "2-" + a
                        },
                        on: {
                            click: function(s) {
                                t.selectCoupon(e);
                            }
                        }
                    }, [ s("div", {
                        staticClass: "meta-info"
                    }, [ s("div", {
                        staticClass: "value"
                    }, [ s("div", {
                        staticClass: "rmb"
                    }, [ t._v("¥") ]), t._v(" "), s("div", [ t._v(t._s(e.amount)) ]) ]), t._v(" "), s("div", {
                        staticClass: "meta"
                    }, [ s("div", {
                        staticClass: "tile"
                    }, [ t._v(t._s(e.title)) ]), t._v(" "), s("div", {
                        staticClass: "date"
                    }, [ t._v(t._s(e.valid_at) + "至" + t._s(e.expired_at)) ]) ]) ]), t._v(" "), s("div", {
                        staticClass: "tip"
                    }, [ t._v(t._s(e.tips)) ]), t._v(" "), e.checked ? s("img", {
                        attrs: {
                            src: "https://media-image1.baydn.com/storage_media_image/kdbdns/54dc3d9b8623f7510339faab83a1dc1b.a7f811140a3849f8d05d0b4ebcb6f0ea.png",
                            alt: ""
                        }
                    }) : t._e(), t._v(" "), s("div", {
                        staticClass: "left semi-circle"
                    }), t._v(" "), s("div", {
                        staticClass: "right semi-circle"
                    }) ]);
                })) : s("div", {
                    staticClass: "plan-order-detail"
                }, [ s("div", {
                    staticStyle: {
                        "background-color": "#fff"
                    }
                }, [ s("div", {
                    staticClass: "meta"
                }, [ s("img", {
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/647aef9b6696e559f31d968579e7b9e6.c9100a2f5d917ab1a030056a37ac385a.png?x-oss-process=image/format,jpg/quality,q_80/resize,p_100",
                        alt: ""
                    }
                }), t._v(" "), s("div", {
                    staticClass: "description"
                }, [ s("div", {
                    staticClass: "logo"
                }, [ t._v("扇贝·读书计划") ]), t._v(" "), s("div", {
                    staticClass: "title"
                }, [ t._v(t._s(t.title)) ]), t._v(" "), s("div", {
                    staticClass: "price"
                }, [ s("div", [ t._v("¥" + t._s(t.price)) ]), t._v(" "), s("div", {
                    staticClass: "original-price"
                }, [ t._v("原价" + t._s(t.originalPrice)) ]) ]) ]) ]), t._v(" "), s("div", {
                    staticClass: "book-list"
                }, [ s("div", {
                    staticClass: "title"
                }, [ t._v("计划书单") ]), t._v(" "), s("div", {
                    staticClass: "content"
                }, t._l(t.books, function(e, a) {
                    return s("div", {
                        key: e.book_id,
                        staticClass: "book flex-between"
                    }, [ s("div", [ t._v(t._s(e.name_cn)) ]), t._v(" "), s("div", [ t._v(t._s(e.article_amount) + "章") ]) ]);
                })) ]) ]), t._v(" "), s("div", {
                    staticClass: "info-container"
                }, [ s("div", {
                    staticClass: "info flex-between"
                }, [ s("div", [ t._v("计划时长：") ]), t._v(" "), s("div", [ t._v(t._s(t.totalDays) + "天") ]) ]), t._v(" "), s("div", {
                    staticClass: "info flex-between"
                }, [ s("div", [ t._v("开始日期：") ]), t._v(" "), s("div", [ t._v(t._s(t.startAt)) ]) ]), t._v(" "), s("div", {
                    staticClass: "info flex-between"
                }, [ s("div", [ t._v("结束日期：") ]), t._v(" "), s("div", [ t._v(t._s(t.endAt)) ]) ]) ]), t._v(" "), s("div", {
                    class: [ "pay", t.isIpx ? "fix-iphonex" : "" ]
                }, [ 3 === t.status ? s("div", {
                    staticClass: "not-support"
                }, [ t._v("书籍快读完啦，暂不支持加入计划") ]) : s("div", [ s("div", {
                    staticClass: "coupon",
                    class: {
                        "disable-coupon": !t.coupons.length
                    },
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.showCoupons
                    }
                }, [ s("div", {
                    staticStyle: {
                        flex: "1"
                    }
                }, [ t._v("代金券") ]), t._v(" "), s("div", {
                    staticClass: "disable-color",
                    class: {
                        highlight: t.isColorFont
                    }
                }, [ t._v(t._s(t.btnText)) ]), t._v(" "), s("div", [ s("i", {
                    staticClass: "ib ib-chevron-right chevron",
                    staticStyle: {
                        color: "#c0c0c0"
                    }
                }) ], 1) ]), t._v(" "), s("div", {
                    staticClass: "pay-button"
                }, [ s("div", {
                    staticClass: "left"
                }, [ t._v("合计:") ]), t._v(" "), s("div", {
                    staticClass: "center"
                }, [ t._v("¥" + t._s(t.totalPrice)) ]), t._v(" "), s("button", {
                    staticClass: "flex-vhc",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.pay
                    }
                }, [ t._v("去付款") ]) ], 1) ]) ]) ]) ]);
            },
            staticRenderFns: []
        };
        e.a = a;
    },
    gJ3y: function(t, e, s) {
        "use strict";
        var a = s("rycR"), i = s("Ne6h");
        var n = function(t) {
            s("pH8p");
        }, o = s("ybqe")(a.a, i.a, n, "data-v-119e5b82", null);
        e.a = o.exports;
    },
    pH8p: function(t, e) {},
    rycR: function(t, e, s) {
        "use strict";
        var a = s("//Fk"), i = s.n(a), n = s("d7EF"), o = s.n(n), c = s("Xxa5"), r = s.n(c), l = s("exGp"), d = s.n(l), v = s("mvHQ"), u = s.n(v), _ = s("Dd8w"), p = s.n(_), f = s("NYxO"), h = s("IcnI"), C = s("Apws"), b = s("MPG0"), g = s("EwJx"), m = s.n(g), x = s("0xDb");
        e.a = {
            store: h.a,
            data: function() {
                return {
                    isColorFont: !1,
                    selectedCoupon: null,
                    showCouponModal: !1,
                    coupons: [],
                    title: "",
                    price: "",
                    originalPrice: "",
                    books: [],
                    totalDays: "",
                    planId: "",
                    status: ""
                };
            },
            computed: p()({}, Object(f.c)({
                isIpx: function(t) {
                    return t.globalData.isIpx;
                }
            }), {
                btnText: function() {
                    return this.selectedCoupon ? (this.isColorFont = !0, "-¥" + this.selectedCoupon.amount) : this.coupons.length ? (this.isColorFont = !0, 
                    this.coupons.length + "张可用") : "暂无可用";
                },
                totalPrice: function() {
                    var t = +this.price;
                    return this.selectedCoupon && (t = this.price - this.selectedCoupon.amount), t.toFixed(2);
                },
                startAt: function() {
                    var t = new Date(), e = new Date();
                    return e.setDate(t.getDate() + 1), Object(x.b)(e.toISOString().split("T")[0]);
                },
                endAt: function() {
                    var t = new Date(), e = new Date();
                    return e.setDate(t.getDate() + this.totalDays + 1), Object(x.b)(e.toISOString().split("T")[0]);
                }
            }),
            methods: {
                showCoupons: function() {
                    this.showCouponModal = !0, wx.setNavigationBarTitle({
                        title: "代金券"
                    });
                },
                selectCoupon: function(t) {
                    this.selectedCoupon = t, this.coupons.forEach(function(e) {
                        t.user_coupon_id === e.user_coupon_id ? e.checked = !0 : e.checked = !1;
                    }), this.coupons = JSON.parse(u()(this.coupons)), this.showCouponModal = !1, wx.setNavigationBarTitle({
                        title: "订单详情"
                    });
                },
                pay: function() {
                    var t = this;
                    return d()(r.a.mark(function e() {
                        var s, a, i, n, o;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return s = t.selectedCoupon ? t.selectedCoupon.user_coupon_id : "", e.next = 3, 
                                b.a.createOrders({
                                    items: [ {
                                        object_id: t.planId
                                    } ],
                                    platform: 4,
                                    user_coupon_id: s
                                });

                              case 3:
                                return a = e.sent, i = a.order_id, e.next = 7, b.a.createPayments({
                                    order_id: i,
                                    channel: 5,
                                    wechat_app_name: "wechatapp_read"
                                });

                              case 7:
                                return n = e.sent, o = n.payment_string, e.next = 11, C.a.track({
                                    event_code: "bookplan-order-confirm",
                                    event_value: {
                                        bookplan_title: t.title
                                    }
                                });

                              case 11:
                                return e.next = 13, m.a.requestPayment(JSON.parse(o));

                              case 13:
                                t.$router.replace("/pages/planPurchaseDone/main");

                              case 14:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                }
            },
            mounted: function() {
                var t = this;
                return d()(r.a.mark(function e() {
                    var s, a, n, c, l;
                    return r.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return s = t.$route.query.planId, t.planId = s, e.next = 4, i.a.all([ b.a.getBookplan(s), b.a.getUserCoupons() ]);

                          case 4:
                            a = e.sent, n = o()(a, 2), c = n[0], l = n[1].objects, t.title = c.title, t.price = c.price.toFixed(2), 
                            t.originalPrice = c.original_price, t.books = c.books, t.totalDays = c.total_days, 
                            t.status = c.status, t.coupons = l, t.coupons.forEach(function(t) {
                                t.valid_at = Object(x.b)(t.valid_at), t.expired_at = Object(x.b)(t.expired_at), 
                                t.checked = !1;
                            });

                          case 16:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            }
        };
    }
}, [ "3Ns3" ]);