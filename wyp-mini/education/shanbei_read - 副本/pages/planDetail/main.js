require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 24 ], {
    "2LsX": function(e, n, t) {
        "use strict";
        var a = {
            render: function() {
                var e = this, n = e.$createElement, t = e._self._c || n;
                return t("div", [ e._l(e.saleImages, function(e, n) {
                    return t("div", {
                        key: e,
                        staticClass: "sale-image"
                    }, [ t("img", {
                        attrs: {
                            mode: "widthFix",
                            src: e,
                            alt: ""
                        }
                    }) ]);
                }), e._v(" "), t("div", {
                    class: [ "fill", e.isIpx ? "fix-iphonex-margin" : "" ]
                }), e._v(" "), e.isAndroid ? t("div", {
                    class: [ "button-group", e.isIpx ? "fix-iphonex" : "" ]
                }, [ t("div", {
                    staticClass: "price"
                }, [ t("span", {
                    staticClass: "rmb"
                }, [ e._v("¥") ]), e._v("\n            " + e._s(e.price) + "\n        ") ]), e._v(" "), t("div", {
                    staticClass: "description flex-vhc"
                }, [ e._v("限时优惠") ]), e._v(" "), t("div", {
                    staticClass: "original-price"
                }, [ e._v("原价¥" + e._s(e.originalPrice)) ]), e._v(" "), e.isLogin ? t("div", {
                    staticClass: "join flex-vhc",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: e.showOrder
                    }
                }, [ e._v("立即加入") ]) : t("button", {
                    staticClass: "join flex-vhc",
                    attrs: {
                        "open-type": "getUserInfo",
                        eventid: "0"
                    },
                    on: {
                        getuserinfo: e.login
                    }
                }, [ e._v("立即加入") ]) ], 1) : t("div", {
                    class: [ "button-group", "join-ios", e.isIpx ? "fix-iphonex" : "" ],
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: e.showOrder
                    }
                }, [ t("div", [ e._v("立即加入") ]) ]) ], 2);
            },
            staticRenderFns: []
        };
        n.a = a;
    },
    JVrj: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("5nAL"), i = t.n(a), s = t("Nu9I");
        new i.a(s.a).$mount();
    },
    Nu9I: function(e, n, t) {
        "use strict";
        var a = t("k714"), i = t("2LsX");
        var s = function(e) {
            t("yWVA");
        }, r = t("ybqe")(a.a, i.a, s, "data-v-32751f44", null);
        n.a = r.exports;
    },
    k714: function(e, n, t) {
        "use strict";
        var a = t("Xxa5"), i = t.n(a), s = t("exGp"), r = t.n(s), o = t("Dd8w"), c = t.n(o), l = t("Apws"), u = t("MPG0"), d = t("NYxO"), p = t("IcnI"), v = t("/WWA"), g = t("EwJx"), _ = t.n(g);
        n.a = {
            store: p.a,
            data: function() {
                return {
                    salePageId: null,
                    planId: null,
                    saleImages: [],
                    price: "",
                    originalPrice: ""
                };
            },
            computed: c()({}, Object(d.c)({
                isIpx: function(e) {
                    return e.globalData.isIpx;
                },
                isAndroid: function(e) {
                    return e.globalData.isAndroid;
                },
                isLogin: function(e) {
                    return e.globalData.isLogin;
                }
            })),
            methods: {
                showOrder: function() {
                    l.a.track({
                        event_code: "bookplan-participate-in"
                    }), l.a.sensorLog({
                        event_code: "RDbookplan_SKULandingPage_Join",
                        event_value: {
                            ns: "RDbookplan",
                            bookplan_id: this.planId,
                            bookplan_name: this.title
                        }
                    }), this.isAndroid ? this.$router.push({
                        path: "/pages/planOrderDetail/main",
                        query: {
                            planId: this.planId
                        }
                    }) : wx.showModal({
                        title: "温馨提示",
                        content: "由于相关规范，iOS功能暂不可用",
                        showCancel: !1,
                        confirmText: "我知道了"
                    });
                },
                login: function(e) {
                    var n = this;
                    return r()(i.a.mark(function t() {
                        var a, s, r, o;
                        return i.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (a = e.mp.detail, a.userInfo) {
                                    n.next = 5;
                                    break;
                                }
                                return wx.showToast({
                                    title: "需要授权才可以使用哦",
                                    icon: "none"
                                }), n.abrupt("return");

                              case 5:
                                return n.next = 7, _.a.login();

                              case 7:
                                return s = n.sent, r = s.code, n.next = 11, l.a.register({
                                    code: r,
                                    app_name: v.d,
                                    data: a
                                });

                              case 11:
                                return n.next = 13, l.a.getUserDetail();

                              case 13:
                                o = n.sent, wx.setStorageSync("userDetail", o), p.a.commit("setLoginStatus", {
                                    isLogin: !0
                                });

                              case 16:
                              case "end":
                                return n.stop();
                            }
                        }, t, n);
                    }))();
                }
            },
            mounted: function() {
                var e = this;
                return r()(i.a.mark(function n() {
                    var t, a, s, r, o, c, d, p, v, g;
                    return i.a.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return t = e.$route.query, a = t.salePageId, s = t.planId, r = t.scene, e.salePageId = a, 
                            e.planId = s, n.next = 5, u.a.getSaleDetail(a);

                          case 5:
                            o = n.sent, c = o.image_urls, d = o.book_plan, p = d.price, v = d.original_price, 
                            g = d.title, e.saleImages = c, e.price = p, e.originalPrice = v, e.title = g, l.a.playDisco({
                                new: !1,
                                scene_id: r
                            }), l.a.sensorLog({
                                event_code: "RDbookplan_SKULandingPage_PV",
                                event_value: {
                                    ns: "RDbookplan",
                                    bookplan_id: e.planId,
                                    bookplan_name: e.title
                                }
                            });

                          case 17:
                          case "end":
                            return n.stop();
                        }
                    }, n, e);
                }))();
            }
        };
    },
    yWVA: function(e, n) {}
}, [ "JVrj" ]);