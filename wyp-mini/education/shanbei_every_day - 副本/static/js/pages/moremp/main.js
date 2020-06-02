global.webpackJsonp([ 8 ], {
    "1h30": function(t, a, e) {
        "use strict";
        var i = e("Xxa5"), s = e.n(i), n = e("exGp"), r = e.n(n), o = e("Dd8w"), c = e.n(o), d = e("PJh5"), m = e.n(d), p = e("/WWA"), u = e("vLgD"), l = e("34jS"), v = e("CpCs"), g = e("olkN"), f = e("NYxO");
        a.a = {
            store: g.a,
            data: function() {
                return {
                    isNew: !0,
                    mps: [],
                    paddingTop: 64,
                    showContact: !1
                };
            },
            computed: c()({}, e.i(f.a)([ "userInfo" ])),
            components: {
                "c-nav": l.a,
                "nav-bar": v.a
            },
            methods: {
                back: function() {
                    wx.navigateBack();
                },
                avengersLog: function(t) {
                    e.i(u.r)(p.a + "/avengers/apps/dailyquote/items/" + t.id + "/click", {
                        method: "PUT",
                        data: {
                            user_id: this.userInfo.id
                        }
                    });
                }
            },
            mounted: function() {
                var t = this;
                return r()(s.a.mark(function a() {
                    var i, n;
                    return s.a.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return i = wx.getSystemInfoSync(), t.paddingTop = i.statusBarHeight + 44, a.next = 4, 
                            e.i(u.r)(p.a + "/avengers/apps/dailyquote/items", {
                                method: "GET",
                                data: {
                                    ipp: 20,
                                    page: 1
                                }
                            });

                          case 4:
                            n = a.sent, t.mps = n.objects;

                          case 6:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            },
            onLoad: function() {
                this.userInfo.id || wx.redirectTo({
                    url: "/pages/login/main?redirect=" + encodeURIComponent("/pages/moremp/main")
                });
            },
            onShow: function() {
                var t = wx.getStorageSync("luckyWheelDay");
                "" === t || t !== m()().format("YYYY-MM-DD") ? this.isNew = !0 : this.isNew = !1;
            },
            onShareAppMessage: function() {
                return {
                    title: "原来翻译句子也可以这么好玩，安利给你喔～",
                    path: "/pages/login/main"
                };
            }
        };
    },
    KMa7: function(t, a, e) {
        "use strict";
        var i = e("1h30"), s = e("j0xO");
        var n = function(t) {
            e("vYXT");
        }, r = e("ybqe")(i.a, s.a, n, "data-v-1575f79f", null);
        a.a = r.exports;
    },
    OIZm: function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("5nAL"), s = e.n(i), n = e("KMa7");
        new s.a(n.a).$mount(), a.default = {
            config: {
                backgroundColor: "#f5f5f5"
            }
        };
    },
    j0xO: function(t, a, e) {
        "use strict";
        var i = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {
                    staticClass: "mp-more",
                    style: {
                        paddingTop: t.paddingTop + "px"
                    }
                }, [ e("nav-bar", {
                    attrs: {
                        title: "更多好玩",
                        handleClick: t.back,
                        mpcomid: "0"
                    }
                }), t._v(" "), e("navigator", {
                    staticClass: "mp-card",
                    attrs: {
                        url: "/pages/lucky-wheel/main"
                    }
                }, [ e("img", {
                    staticClass: "logo",
                    class: {
                        new: t.isNew
                    },
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/ccdbwr/84e8fd863496bc9dc85b5de249b113ee.241f0fb77a44ad6185ae426e9e0cb6c2.png"
                    }
                }), t._v(" "), e("div", {
                    staticClass: "description"
                }, [ e("div", {
                    staticClass: "title"
                }, [ t._v("每日幸运转盘") ]), t._v(" "), e("div", {
                    staticClass: "text"
                }, [ t._v("每天转动转盘，赢取丰厚奖品") ]) ]) ]), t._v(" "), e("div", {
                    staticClass: "sep"
                }, [ t._v(" — 更多小程序推荐 — ") ]), t._v(" "), t._l(t.mps, function(a, i) {
                    return e("navigator", {
                        key: a.item.miniprogram_id,
                        staticClass: "mp-card",
                        attrs: {
                            id: a.item.miniprogram_id,
                            target: "miniProgram",
                            "app-id": a.item.miniprogram_id,
                            eventid: "0-" + i
                        },
                        on: {
                            success: function(e) {
                                t.avengersLog(a.item);
                            }
                        }
                    }, [ e("img", {
                        staticClass: "logo",
                        attrs: {
                            src: a.item.image_urls[0]
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "description"
                    }, [ e("div", {
                        staticClass: "title"
                    }, [ t._v(t._s(a.item.title)) ]), t._v(" "), e("div", {
                        staticClass: "text"
                    }, [ t._v(t._s(a.item.description)) ]) ]) ]);
                }) ], 2);
            },
            staticRenderFns: []
        };
        a.a = i;
    },
    vYXT: function(t, a) {}
}, [ "OIZm" ]);