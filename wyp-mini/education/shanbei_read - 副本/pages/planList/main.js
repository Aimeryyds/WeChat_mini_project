require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 22 ], {
    "2o3q": function(t, a) {},
    K0EF: function(t, a, s) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = s("5nAL"), e = s.n(n), i = s("a0LO");
        new e.a(i.a).$mount();
    },
    PeF7: function(t, a, s) {
        "use strict";
        var n = s("Xxa5"), e = s.n(n), i = s("exGp"), o = s.n(i), r = s("Dd8w"), c = s.n(r), l = s("NYxO"), d = s("IcnI"), v = s("MPG0"), u = s("Apws"), _ = s("0xDb"), m = s("eRdb"), p = s("xJsL"), h = s("/WWA");
        a.a = {
            store: d.a,
            components: {
                HomePlanList: m.a,
                Login: p.a
            },
            computed: c()({}, Object(l.c)({
                homePlans: function(t) {
                    return t.groupData.homePlans;
                }
            })),
            data: function() {
                return {
                    userBookPlans: [],
                    isShowLoginModal: !1,
                    LANDING_PAGE_ID: h.e
                };
            },
            methods: {
                submit: function(t) {
                    u.a.collectFormId(t.mp.detail.formId);
                },
                login: function() {
                    this.isShowLoginModal = !1, this.load();
                },
                load: function() {
                    var t = this;
                    return o()(e.a.mark(function a() {
                        var s, n;
                        return e.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return a.prev = 0, a.next = 3, v.a.listUserBookplans();

                              case 3:
                                s = a.sent, n = s.objects, t.userBookPlans = n.map(function(t) {
                                    return c()({}, t, {
                                        started_at: Object(_.b)(t.started_at),
                                        ended_at: Object(_.b)(t.ended_at),
                                        url: "/pages/planIndex/main"
                                    });
                                }), t.isShowLoginModal = !1, a.next = 12;
                                break;

                              case 9:
                                a.prev = 9, a.t0 = a.catch(0), t.isShowLoginModal = !0;

                              case 12:
                              case "end":
                                return a.stop();
                            }
                        }, a, t, [ [ 0, 9 ] ]);
                    }))();
                }
            },
            onShow: function() {
                this.load();
            }
        };
    },
    VYcT: function(t, a, s) {
        "use strict";
        var n = {
            render: function() {
                var t = this, a = t.$createElement, s = t._self._c || a;
                return s("div", [ s("div", {
                    staticClass: "plan-list"
                }, [ t.userBookPlans.length ? s("div", {
                    staticClass: "plan-list-container"
                }, [ t._l(t.userBookPlans, function(a, n) {
                    return s("navigator", {
                        key: a.id,
                        attrs: {
                            url: a.url + "?id=" + a.id
                        }
                    }, [ s("form", {
                        attrs: {
                            "report-submit": "",
                            eventid: "0-" + n
                        },
                        on: {
                            submit: t.submit
                        }
                    }, [ s("button", {
                        staticClass: "plan-item",
                        style: {
                            backgroundImage: "url(" + a.cover_url + ")"
                        },
                        attrs: {
                            "form-type": "submit"
                        }
                    }, [ s("div", {
                        staticClass: "meta"
                    }, [ s("div", [ t._v(t._s(a.title)) ]), t._v(" "), s("div", {
                        staticClass: "valid-date"
                    }, [ t._v("计划时间： " + t._s(a.started_at) + "-" + t._s(a.ended_at)) ]), t._v(" "), 1 === a.status ? s("div", {
                        staticClass: "nav soon"
                    }, [ t._v("明日开始") ]) : 2 === a.status ? s("div", {
                        staticClass: "nav progress"
                    }, [ t._v("进行中") ]) : 3 === a.status ? s("div", {
                        staticClass: "nav end"
                    }, [ t._v("已完成") ]) : s("div", {
                        staticClass: "nav end"
                    }, [ t._v("已结束") ]), t._v(" "), s("div", {
                        staticClass: "allow-reward"
                    }, [ t._v(t._s(a.allow_reward ? "（参与返现）" : "（不参与返现）")) ]) ]) ]) ], 1) ], 1);
                }), t._v(" "), s("navigator", {
                    staticClass: "more",
                    attrs: {
                        url: "/pages/planLanding/main?id=" + t.LANDING_PAGE_ID,
                        "hover-class": "navigator-hover"
                    }
                }, [ t._v("\n                查看全部读书计划\n                "), s("i", {
                    staticClass: "ib ib-chevron-right chevron",
                    staticStyle: {
                        "margin-left": "-2px"
                    }
                }) ], 1) ], 2) : s("div", {
                    staticClass: "empty"
                }, [ s("img", {
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/91233d101e02d0c37efc9b46a6cac8ed.5e3403453f7c6f5fc2d7bd3de2b48e96.png"
                    }
                }), t._v(" "), t._m(0), t._v(" "), s("div", {
                    staticClass: "home-plan-container"
                }, [ s("home-plan-list", {
                    attrs: {
                        bookplans: t.homePlans,
                        scene: "15637",
                        mpcomid: "0"
                    }
                }) ], 1), t._v(" "), s("navigator", {
                    staticClass: "more",
                    attrs: {
                        url: "/pages/planLanding/main?id=" + t.LANDING_PAGE_ID,
                        "hover-class": "navigator-hover"
                    }
                }, [ t._v("\n                查看全部读书计划\n                "), s("i", {
                    staticClass: "ib ib-chevron-right chevron",
                    staticStyle: {
                        "margin-left": "-2px"
                    }
                }) ], 1) ], 1) ]), t._v(" "), t.isShowLoginModal ? s("Login", {
                    attrs: {
                        eventid: "1",
                        mpcomid: "1"
                    },
                    on: {
                        onLogin: t.login
                    }
                }, [ s("span", [ t._v("登录后，可查看正在参与的读书计划") ]) ]) : t._e() ], 1);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "desc"
                }, [ a("div", [ this._v("还没有正在参与的计划哦") ]), this._v(" "), a("div", [ this._v("快去挑选一份喜欢的书单开始阅读吧") ]) ]);
            } ]
        };
        a.a = n;
    },
    a0LO: function(t, a, s) {
        "use strict";
        var n = s("PeF7"), e = s("VYcT");
        var i = function(t) {
            s("2o3q");
        }, o = s("ybqe")(n.a, e.a, i, "data-v-488ae151", null);
        a.a = o.exports;
    }
}, [ "K0EF" ]);