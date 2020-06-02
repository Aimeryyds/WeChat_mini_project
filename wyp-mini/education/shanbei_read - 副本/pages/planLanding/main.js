require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 5 ], {
    "+f/6": function(t, e) {},
    "7He1": function(t, e, i) {
        "use strict";
        var a = i("Xxa5"), n = i.n(a), s = i("exGp"), o = i.n(s), l = i("fZjL"), c = i.n(l), r = i("Dd8w"), d = i.n(r), u = i("SBcn"), _ = i("Apws"), v = i("MPG0"), p = i("NYxO"), f = i("IcnI"), g = i("v1jT"), m = i("sJFW"), h = i("/WWA"), b = i("EwJx"), x = i.n(b);
        e.a = {
            components: {
                PlanItem: u.a
            },
            store: f.a,
            data: function() {
                return {
                    head_image: {
                        name: "",
                        url: ""
                    },
                    detail1_images: [ {
                        name: "",
                        url: ""
                    } ],
                    detail2_images: [ {
                        name: "",
                        url: ""
                    } ],
                    books_bg_image: {
                        name: "",
                        url: "https://media-image1.baydn.com/storage_media_image/kvhfgj/b8a0f7c3825c0f2fd2e32e35d0912513.72fcba51e38309a4294ca0283d287061.png?x-oss-process=image/format,jpg/quality,q_80"
                    },
                    plans: [],
                    page_colors: [ "", "", "", "", "" ],
                    selectedPlan: {},
                    toView: "",
                    tabIndex: 0,
                    scrollTop: 0,
                    name: "",
                    BANNER_HEIGHT: 430
                };
            },
            computed: d()({}, Object(p.c)({
                isIpx: function(t) {
                    return t.globalData.isIpx;
                },
                isAndroid: function(t) {
                    return t.globalData.isAndroid;
                },
                isLogin: function(t) {
                    return t.globalData.isLogin;
                }
            }), {
                onStyle: function() {
                    return {
                        color: this.page_colors[2],
                        backgroundColor: this.page_colors[0]
                    };
                },
                offStyle: function() {
                    return {
                        color: this.page_colors[3],
                        backgroundColor: this.page_colors[1]
                    };
                },
                detailStyle: function() {
                    return Object(g.a)("detail" === this.toView ? this.onStyle : this.offStyle);
                },
                booklistStyle: function() {
                    return Object(g.a)("booklist" === this.toView ? this.onStyle : this.offStyle);
                },
                isSelected: function() {
                    return !!c()(this.selectedPlan).length;
                },
                formattedPrice: function() {
                    return this.isSelected && this.selectedPlan.price.toFixed(2);
                },
                formattedOriginalPrice: function() {
                    return this.isSelected && this.selectedPlan.original_price.toFixed(2);
                },
                minPrice: function() {
                    return this.plans.length ? this.plans.reduce(function(t, e) {
                        return Math.min(t, e.price);
                    }, this.plans[0].price) : 0;
                },
                formattedMinPrice: function() {
                    return this.minPrice.toFixed(2);
                },
                scrollContainerHeight: function() {
                    return this.scrollTop > this.BANNER_HEIGHT ? this.isIpx ? "calc(100vh - 106rpx - 104rpx - 68rpx)" : "calc(100vh - 106rpx - 104rpx)" : "calc(100vh - 106rpx)";
                }
            }),
            mounted: function() {
                var t = this;
                return o()(n.a.mark(function e() {
                    var i;
                    return n.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return i = t.$route.query.id, e.next = 3, t.getLandingPage(i);

                          case 3:
                            _.a.sensorLog({
                                event_code: "RDbookplan_LandingPage_PV",
                                event_value: {
                                    planlandingpage_name: t.name
                                }
                            });

                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            methods: {
                getLandingPage: function(t) {
                    var e = this;
                    return o()(n.a.mark(function i() {
                        var a, s, o, l, c, r, d, u, _;
                        return n.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.next = 2, v.a.getLandingPage(t);

                              case 2:
                                a = i.sent, s = a.head_image, o = a.detail1_images, l = a.books_bg_image, c = a.detail2_images, 
                                r = a.book_plans, d = a.page_colors, u = a.name, _ = a.title, e.head_image = s, 
                                e.detail1_images = o, e.detail2_images = c, e.books_bg_image = l, e.plans = r, e.page_colors = d, 
                                e.name = u, e.title = _;

                              case 19:
                              case "end":
                                return i.stop();
                            }
                        }, i, e);
                    }))();
                },
                selectPlan: function(t) {
                    this.selectedPlan.book_plan_id && this.selectedPlan.book_plan_id === t.book_plan_id ? this.selectedPlan = {} : this.selectedPlan = t;
                },
                scrollTo: function(t) {
                    this.toView = t;
                },
                joinNow: function() {
                    var t = this;
                    return o()(n.a.mark(function e() {
                        var i, a, s;
                        return n.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (i = t.selectedPlan, a = i.book_plan_id, s = i.title, t.isSelected) {
                                    e.next = 4;
                                    break;
                                }
                                return t.scrollTo("booklist"), e.abrupt("return");

                              case 4:
                                return e.next = 6, _.a.sensorLog({
                                    event_code: "RDbookplan_LandingPage_Join",
                                    event_value: {
                                        planlandingpage_name: t.name,
                                        bookplan_id: a,
                                        bookplan_name: s
                                    }
                                });

                              case 6:
                                t.$router.push({
                                    path: "/pages/planOrder/main",
                                    query: {
                                        id: a
                                    }
                                });

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                joinIOS: function() {
                    wx.showModal({
                        title: "温馨提示",
                        content: "由于相关规范，iOS功能暂不可用",
                        showCancel: !1,
                        confirmText: "我知道了"
                    });
                },
                scroll: function(t) {
                    var e = this;
                    Object(m.a)(function() {
                        var i = t.mp.detail.scrollTop, a = wx.createSelectorQuery();
                        a.select("#detail").boundingClientRect(), a.exec(function(t) {
                            var a = t[0].height;
                            i > a + e.BANNER_HEIGHT ? e.toView = "booklist" : e.toView = "detail";
                        }), e.scrollTop = i;
                    }, 500)();
                },
                login: function(t) {
                    var e = this;
                    return o()(n.a.mark(function i() {
                        var a, s, o, l;
                        return n.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                if (a = t.mp.detail, a.userInfo) {
                                    i.next = 5;
                                    break;
                                }
                                return wx.showToast({
                                    title: "需要授权才可以使用哦",
                                    icon: "none"
                                }), i.abrupt("return");

                              case 5:
                                return i.next = 7, x.a.login();

                              case 7:
                                return s = i.sent, o = s.code, i.next = 11, _.a.register({
                                    code: o,
                                    app_name: h.d,
                                    data: a
                                });

                              case 11:
                                return i.next = 13, _.a.getUserDetail();

                              case 13:
                                l = i.sent, wx.setStorageSync("userDetail", l), f.a.commit("setLoginStatus", {
                                    isLogin: !0
                                }), e.scrollTo("booklist");

                              case 17:
                              case "end":
                                return i.stop();
                            }
                        }, i, e);
                    }))();
                }
            }
        };
    },
    "S/DG": function(t, e, i) {
        "use strict";
        var a = i("7He1"), n = i("Zoq1");
        var s = function(t) {
            i("+f/6");
        }, o = i("ybqe")(a.a, n.a, s, "data-v-72f17b4c", null);
        e.a = o.exports;
    },
    SBcn: function(t, e, i) {
        "use strict";
        var a = i("W9eq"), n = i("kV99");
        var s = function(t) {
            i("XaHo");
        }, o = i("ybqe")(a.a, n.a, s, "data-v-a683deb8", null);
        e.a = o.exports;
    },
    W9eq: function(t, e, i) {
        "use strict";
        var a = i("Dd8w"), n = i.n(a), s = i("NYxO");
        e.a = {
            props: {
                plan: {
                    type: Object,
                    required: !0
                },
                selectedPlan: {
                    type: Object,
                    required: !0
                }
            },
            computed: n()({}, Object(s.c)({
                isAndroid: function(t) {
                    return t.globalData.isAndroid;
                }
            }), {
                formattedPrice: function() {
                    return "¥" + this.plan.price.toFixed(2);
                }
            }),
            methods: {
                selectPlan: function() {
                    this.$emit("select");
                }
            }
        };
    },
    XaHo: function(t, e) {},
    Zoq1: function(t, e, i) {
        "use strict";
        var a = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", [ t.scrollTop > t.BANNER_HEIGHT ? i("div", {
                    staticClass: "tab-container"
                }, [ i("div", {
                    staticClass: "tab flex-vhc",
                    style: t.detailStyle,
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            t.scrollTo("detail");
                        }
                    }
                }, [ i("div", [ t._v("计划详情") ]), t._v(" "), "detail" === t.toView ? i("div", {
                    staticClass: "indicator"
                }) : t._e() ]), t._v(" "), i("div", {
                    staticClass: "tab flex-vhc",
                    style: t.booklistStyle,
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(e) {
                            t.scrollTo("booklist");
                        }
                    }
                }, [ i("div", [ t._v("主题书单") ]), t._v(" "), "booklist" === t.toView ? i("div", {
                    staticClass: "indicator"
                }) : t._e() ]) ]) : t._e(), t._v(" "), i("scroll-view", {
                    staticClass: "scroll-container",
                    style: {
                        height: t.scrollContainerHeight
                    },
                    attrs: {
                        "scroll-y": "",
                        "scroll-into-view": t.toView,
                        "scroll-with-animation": !0,
                        eventid: "5"
                    },
                    on: {
                        scroll: t.scroll
                    }
                }, [ i("div", {
                    staticStyle: {
                        "font-size": "0"
                    }
                }, [ t.head_image.url ? i("img", {
                    staticClass: "banner",
                    attrs: {
                        src: t.head_image.url,
                        mode: "widthFix"
                    }
                }) : t._e() ]), t._v(" "), i("div", {
                    class: [ t.scrollTop > t.BANNER_HEIGHT ? "tab-container tab-sticky" : "tab-container" ]
                }, [ i("div", {
                    staticClass: "tab flex-vhc",
                    style: t.detailStyle,
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: function(e) {
                            t.scrollTo("detail");
                        }
                    }
                }, [ i("div", [ t._v("计划详情") ]), t._v(" "), "detail" === t.toView ? i("div", {
                    staticClass: "indicator"
                }) : t._e() ]), t._v(" "), i("div", {
                    staticClass: "tab flex-vhc",
                    style: t.booklistStyle,
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(e) {
                            t.scrollTo("booklist");
                        }
                    }
                }, [ i("div", [ t._v("主题书单") ]), t._v(" "), "booklist" === t.toView ? i("div", {
                    staticClass: "indicator"
                }) : t._e() ]) ]), t._v(" "), t.scrollTop > t.BANNER_HEIGHT ? i("div", {
                    staticClass: "tab-placeholder"
                }) : t._e(), t._v(" "), i("div", {
                    staticClass: "image-container",
                    attrs: {
                        id: "detail"
                    }
                }, t._l(t.detail1_images, function(t, e) {
                    return i("img", {
                        key: t.name,
                        staticClass: "image-item",
                        attrs: {
                            src: t.url,
                            mode: "widthFix"
                        }
                    });
                })), t._v(" "), t.books_bg_image.url ? i("div", {
                    staticClass: "plan-container",
                    style: {
                        "background-image": "url(" + t.books_bg_image.url + ")"
                    },
                    attrs: {
                        id: "booklist"
                    }
                }, t._l(t.plans, function(e, a) {
                    return i("PlanItem", {
                        key: e.book_plan_id,
                        attrs: {
                            plan: e,
                            "selected-plan": t.selectedPlan,
                            eventid: "4-" + a,
                            mpcomid: "0-" + a
                        },
                        on: {
                            select: function(i) {
                                t.selectPlan(e);
                            }
                        }
                    });
                })) : t._e(), t._v(" "), i("div", {
                    staticClass: "image-container"
                }, t._l(t.detail2_images, function(t, e) {
                    return i("img", {
                        key: t.name,
                        staticClass: "image-item",
                        attrs: {
                            src: t.url,
                            mode: "widthFix"
                        }
                    });
                })) ]), t._v(" "), t.isAndroid ? i("div", [ t.isSelected ? i("div", {
                    staticClass: "tip flex-vhc",
                    class: {
                        ipx: t.isIpx
                    }
                }, [ t._v(t._s("已选书单：" + t.selectedPlan.title + "·" + t.selectedPlan.total_days + "天")) ]) : t._e(), t._v(" "), t.isSelected ? i("div", {
                    staticClass: "button-container",
                    class: {
                        ipx: t.isIpx
                    }
                }, [ i("div", [ i("div", {
                    staticClass: "price"
                }, [ i("span", {
                    staticClass: "cny"
                }, [ t._v("¥") ]), t._v(" "), i("span", [ t._v(t._s(t.formattedPrice)) ]) ]), t._v(" "), i("div", {
                    staticClass: "original-price"
                }, [ t._v("原价¥" + t._s(t.formattedOriginalPrice)) ]) ]), t._v(" "), t._m(0), t._v(" "), t.isLogin ? i("button", {
                    staticClass: "button flex-vhc",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        click: t.joinNow
                    }
                }, [ t._v("立即参与") ]) : i("button", {
                    staticClass: "button flex-vhc",
                    attrs: {
                        "open-type": "getUserInfo",
                        eventid: "6"
                    },
                    on: {
                        getuserinfo: t.login
                    }
                }, [ t._v("立即参与") ]) ], 1) : i("div", {
                    staticClass: "button-container",
                    class: {
                        ipx: t.isIpx
                    }
                }, [ i("div", {
                    staticClass: "price"
                }, [ i("span", {
                    staticClass: "cny"
                }, [ t._v("¥") ]), t._v(" "), i("span", [ t._v(t._s(t.formattedMinPrice)) ]), t._v(" "), i("span", {
                    staticClass: "text"
                }, [ t._v("起") ]) ]), t._v(" "), t.isLogin ? i("button", {
                    staticClass: "button flex-vhc",
                    attrs: {
                        eventid: "9"
                    },
                    on: {
                        click: function(e) {
                            t.scrollTo("booklist");
                        }
                    }
                }, [ t._v("选择书单") ]) : i("button", {
                    staticClass: "button flex-vhc",
                    attrs: {
                        "open-type": "getUserInfo",
                        eventid: "8"
                    },
                    on: {
                        getuserinfo: t.login
                    }
                }, [ t._v("选择书单") ]) ], 1) ]) : i("div", {
                    staticClass: "button-container-ios flex-vhc",
                    class: {
                        ipx: t.isIpx
                    },
                    attrs: {
                        eventid: "10"
                    },
                    on: {
                        click: t.joinIOS
                    }
                }, [ t._v("立即加入") ]), t._v(" "), t.isIpx ? i("div", {
                    staticClass: "fill"
                }) : t._e() ], 1);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "tag-container"
                }, [ e("div", {
                    staticClass: "discount-tag flex-vhc"
                }, [ this._v("限时优惠") ]) ]);
            } ]
        };
        e.a = a;
    },
    kV99: function(t, e, i) {
        "use strict";
        var a = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    class: [ t.plan.book_plan_id === t.selectedPlan.book_plan_id ? "plan-item scaled" : "plan-item" ],
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.selectPlan
                    }
                }, [ i("div", {
                    class: [ t.plan.book_plan_id === t.selectedPlan.book_plan_id ? "plan-wrap plan-highlight" : "plan-wrap" ],
                    style: {
                        "background-image": "url(" + t.plan.cover_url + ")"
                    }
                }, [ i("div", [ i("div", {
                    staticClass: "title"
                }, [ t._v(t._s(t.plan.total_days + "天·" + t.plan.title)) ]), t._v(" "), i("div", {
                    staticClass: "desc"
                }, [ t._v(t._s(t.plan.description)) ]), t._v(" "), t.isAndroid ? i("div", {
                    staticClass: "price"
                }, [ t._v(t._s(t.formattedPrice)) ]) : t._e() ]), t._v(" "), i("div", {
                    class: [ t.plan.book_plan_id === t.selectedPlan.book_plan_id ? "select flex-vhc select-highlight" : "select flex-vhc" ]
                }, [ t._v(t._s(t.selectedPlan.book_plan_id === t.plan.book_plan_id ? "已选" : "选择")) ]), t._v(" "), 2 === t.plan.status ? i("div", {
                    staticClass: "status center"
                }, [ t._v("内测中") ]) : t._e() ]), t._v(" "), i("div", {
                    staticClass: "book-card"
                }, t._l(t.plan.books, function(e, a) {
                    return i("div", {
                        key: e.name_cn,
                        staticClass: "book"
                    }, [ i("div", {
                        staticClass: "name"
                    }, [ t._v("《" + t._s(e.name_cn) + "》") ]), t._v(" "), i("div", {
                        staticClass: "article-amount"
                    }, [ t._v("共" + t._s(e.article_amount) + "章") ]) ]);
                })), t._v(" "), t.plan.daily_amount > 1 ? i("div", {
                    staticClass: "tip"
                }, [ i("span", {
                    attrs: {
                        role: "img",
                        "aria-label": "xxxxx"
                    }
                }, [ t._v("👆") ]), t._v("该计划\n        "), i("div", {
                    staticClass: "highlight"
                }, [ t._v("每天需读" + t._s(t.plan.daily_amount) + "章") ]), t._v("才可以完成\n    ") ]) : t._e() ]);
            },
            staticRenderFns: []
        };
        e.a = a;
    },
    sJFW: function(t, e, i) {
        "use strict";
        e.a = function(t, e) {
            var i = !1;
            return function() {
                var a = arguments;
                i || (t.apply(this, a), i = !0, setTimeout(function() {
                    i = !1;
                }, e));
            };
        };
    },
    v1jT: function(t, e, i) {
        "use strict";
        function a(t) {
            if (/rpx/.test(t)) return t;
            if (/px/.test(t)) {
                var e = t.substring(0, t.indexOf("px"));
                return 750 * ((e = e * windowWidth / 375) - 0) / windowWidth + "rpx";
            }
            return t;
        }
        e.a = function(t) {
            var e = "";
            for (var i in t) t.hasOwnProperty(i) && (e += i.replace(/([A-Z])/g, "-$1").toLowerCase() + ":" + a(t[i]) + ";");
            return e;
        };
    },
    yTAu: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i("5nAL"), n = i.n(a), s = i("S/DG");
        new n.a(s.a).$mount();
    }
}, [ "yTAu" ]);