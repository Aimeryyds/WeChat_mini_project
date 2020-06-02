require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 21 ], {
    "6Fmt": function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var s = e("5nAL"), n = e.n(s), i = e("uVAm");
        new n.a(i.a).$mount();
    },
    NHtJ: function(t, a) {},
    P9Bn: function(t, a, e) {
        "use strict";
        var s = e("Xxa5"), n = e.n(s), i = e("exGp"), r = e.n(i), c = e("Dd8w"), o = e.n(c), l = e("NYxO"), v = e("Apws"), d = e("MPG0"), u = e("EwJx"), p = e.n(u), _ = e("IcnI");
        a.a = {
            store: _.a,
            data: function() {
                return {
                    plan: {},
                    id: ""
                };
            },
            computed: o()({}, Object(l.c)({
                isAndroid: function(t) {
                    return t.globalData.isAndroid;
                }
            }), {
                startTime: function() {
                    var t = new Date();
                    return 23 === t.getHours() && t.setDate(t.getDate() + 1), t.toISOString().slice(0, 10).replace(/-/g, ".");
                },
                endTime: function() {
                    var t = new Date();
                    return 23 === t.getHours() ? t.setDate(t.getDate() + this.plan.total_days + 1 || 0) : t.setDate(t.getDate() + this.plan.total_days || 0), 
                    t.toISOString().slice(0, 10).replace(/-/g, ".");
                }
            }),
            mounted: function() {
                var t = this;
                return r()(n.a.mark(function a() {
                    var e, s;
                    return n.a.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return e = t.$route.query.id, a.next = 3, d.a.getBookplan(e);

                          case 3:
                            s = a.sent, t.id = e, t.plan = o()({}, s);

                          case 6:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            },
            methods: {
                purchase: function() {
                    var t = this;
                    return r()(n.a.mark(function a() {
                        var e, s, i, r, c;
                        return n.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                if (1 === t.plan.status) {
                                    a.next = 2;
                                    break;
                                }
                                return a.abrupt("return");

                              case 2:
                                return a.prev = 2, a.next = 5, d.a.createOrders({
                                    items: [ {
                                        object_id: t.plan.book_plan_id
                                    } ],
                                    platform: 4
                                });

                              case 5:
                                return e = a.sent, s = e.order_id, a.next = 9, d.a.createPayments({
                                    order_id: s,
                                    channel: 5,
                                    wechat_app_name: "wechatapp_read"
                                });

                              case 9:
                                return i = a.sent, r = i.payment_string, c = t.plan.title, a.next = 14, v.a.track({
                                    event_code: "bookplan-order-confirm",
                                    event_value: {
                                        bookplan_title: c
                                    }
                                });

                              case 14:
                                return a.next = 16, p.a.requestPayment(JSON.parse(r));

                              case 16:
                                t.$router.replace("/pages/planPurchaseDone/main"), a.next = 22;
                                break;

                              case 19:
                                a.prev = 19, a.t0 = a.catch(2), wx.showToast({
                                    title: "出错了，请稍后再试!",
                                    icon: "none"
                                });

                              case 22:
                              case "end":
                                return a.stop();
                            }
                        }, a, t, [ [ 2, 19 ] ]);
                    }))();
                }
            }
        };
    },
    kMNs: function(t, a, e) {
        "use strict";
        var s = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return t.plan ? e("div", {
                    staticClass: "order-container"
                }, [ e("div", {
                    staticClass: "order-info"
                }, [ e("div", {
                    staticClass: "order-info-basic"
                }, [ t.plan.cover_url ? e("div", {
                    staticClass: "cover",
                    style: {
                        "background-image": "url(" + t.plan.cover_url + ")"
                    }
                }) : t._e(), t._v(" "), e("div", {
                    staticClass: "info-details"
                }, [ e("div", {
                    staticClass: "title"
                }, [ t._v("扇贝·读书计划") ]), t._v(" "), e("div", {
                    staticClass: "sub-title"
                }, [ t._v(t._s(t.plan.title)) ]), t._v(" "), e("div", {
                    staticClass: "price-container"
                }, [ e("div", {
                    staticClass: "price"
                }, [ t._v("￥" + t._s(t.plan.price)) ]), t._v(" "), e("div", {
                    staticClass: "original-price"
                }, [ t._v("原价￥" + t._s(t.plan.original_price)) ]) ]) ]) ]), t._v(" "), e("div", {
                    staticClass: "description"
                }, [ e("div", {
                    staticClass: "title"
                }, [ t._v("计划书单") ]), t._v(" "), e("div", {
                    staticClass: "content"
                }, t._l(t.plan.books, function(a, s) {
                    return e("div", {
                        key: a.book_id,
                        staticClass: "book"
                    }, [ e("div", [ t._v("《" + t._s(a.name_cn) + "》") ]), t._v(" "), e("div", [ t._v(t._s(a.article_amount) + "章") ]) ]);
                })) ]) ]), t._v(" "), e("div", {
                    staticClass: "date-container"
                }, [ e("div", {
                    staticClass: "date-item"
                }, [ e("div", [ t._v("计划时长：") ]), t._v(" "), e("div", [ t._v(t._s(t.plan.total_days) + "天") ]) ]), t._v(" "), e("div", {
                    staticClass: "date-item"
                }, [ e("div", [ t._v("开始日期：") ]), t._v(" "), e("div", [ t._v(t._s(t.startTime)) ]) ]), t._v(" "), e("div", {
                    staticClass: "date-item"
                }, [ e("div", [ t._v("结束日期：") ]), t._v(" "), e("div", [ t._v(t._s(t.endTime)) ]) ]) ]), t._v(" "), e("div", {
                    staticClass: "purchase-container"
                }, [ 3 === t.plan.status ? e("div", {
                    staticClass: "not-support"
                }, [ t._v("书籍快读完啦，暂不支持加入计划") ]) : e("div", {
                    staticClass: "btn-group-wrapper"
                }, [ e("div", {
                    staticClass: "price",
                    class: {
                        disabled: 1 !== t.plan.status
                    }
                }, [ e("span", [ t._v("合计：") ]), t._v(" "), e("span", {
                    staticClass: "number"
                }, [ t._v("¥" + t._s(t.plan.price)) ]) ]), t._v(" "), e("div", {
                    staticClass: "purchase-btn",
                    class: {
                        disabled: 1 !== t.plan.status
                    },
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.purchase
                    }
                }, [ t._v(t._s(1 === t.plan.status ? "去付款" : "已购买")) ]) ]) ]) ]) : t._e();
            },
            staticRenderFns: []
        };
        a.a = s;
    },
    uVAm: function(t, a, e) {
        "use strict";
        var s = e("P9Bn"), n = e("kMNs");
        var i = function(t) {
            e("NHtJ");
        }, r = e("ybqe")(s.a, n.a, i, "data-v-5d33de5e", null);
        a.a = r.exports;
    }
}, [ "6Fmt" ]);