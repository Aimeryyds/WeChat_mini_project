global.webpackJsonp([ 11 ], {
    "5vTQ": function(t, e, s) {
        "use strict";
        var i = s("Xxa5"), n = s.n(i), r = s("exGp"), a = s.n(r), o = s("/WWA"), c = s("vLgD"), u = s("PJh5"), l = s.n(u), d = s("4Lsl"), p = s("UCfo");
        e.a = {
            data: function() {
                return {
                    motto: "Hello World",
                    userInfo: {},
                    dailyQuoteList: [],
                    currentItemId: "",
                    currentDate: "",
                    currentIndex: 0,
                    id: 4,
                    posterImgUrl: "",
                    isShowTools: !0,
                    showScrollTip: !1,
                    showClickTip: !1,
                    aniTool: null,
                    isNewUser: !1
                };
            },
            watch: {
                currentIndex: function(t) {
                    var e = this;
                    this.posterImgUrl = this.dailyQuoteList[t].poster_img_urls[0].split("?")[0], this.isNewUser && t === this.dailyQuoteList.length - 2 && (this.showClickTip = !0, 
                    setTimeout(function() {
                        e.showClickTip = !1, e.isNewUser = !1;
                    }, 2e3));
                }
            },
            components: {
                card: p.a,
                tools: d.a
            },
            methods: {
                handleChange: function(t) {
                    "touch" === t.mp.detail.source && (this.showScrollTip && (this.showScrollTip = !1), 
                    this.currentItemId = t.mp.detail.currentItemId, this.currentDate = this.dailyQuoteList[t.mp.detail.current].assign_date, 
                    this.currentIndex = t.mp.detail.current, 0 === this.currentIndex && wx.showToast({
                        icon: "none",
                        title: "没有更多了"
                    }));
                },
                toMoreMp: function() {
                    wx.navigateTo({
                        url: "/pages/moremp/main"
                    });
                },
                saveImg: function() {},
                getUserInfo: function() {
                    var t = this;
                    wx.login({
                        success: function() {
                            wx.getUserInfo({
                                success: function(e) {
                                    t.userInfo = e.userInfo;
                                }
                            });
                        }
                    });
                },
                clickHandle: function(t, e) {
                    this.isShowTools = !this.isShowTools, this.showClickTip = !1;
                },
                getQuoteList: function(t, e, i) {
                    var r = this;
                    return a()(n.a.mark(function a() {
                        var u, d;
                        return n.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, s.i(c.r)(o.d + "/quote/batch/?start=" + t + "&end=" + e);

                              case 2:
                                (u = n.sent).data.map(function(t) {
                                    t.origin_img_urls[0] = t.origin_img_urls[0].split("?")[0], t.day = t.assign_date.split("-")[2], 
                                    t.month = l()(t.assign_date).format("MMM"), t.year = t.assign_date.split("-")[0];
                                }), d = null, d = "front" === i ? r.dailyQuoteList.concat(u.data.reverse()) : u.data, 
                                r.dailyQuoteList = d;

                              case 7:
                              case "end":
                                return n.stop();
                            }
                        }, a, r);
                    }))();
                }
            },
            mounted: function() {
                var t = this;
                return a()(n.a.mark(function e() {
                    var s, i, r;
                    return n.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t.currentDate = l()(new Date()).format("YYYY-MM-DD"), s = "", i = "", s = l()().subtract(30, "days"), 
                            i = l()().add(1, "days"), s = s.format("YYYY-MM-DD"), i = i.format("YYYY-MM-DD"), 
                            e.next = 9, t.getQuoteList(s, i);

                          case 9:
                            t.currentIndex = t.dailyQuoteList.length - 1, t.posterImgUrl = t.dailyQuoteList[t.currentIndex].poster_img_urls[0].split("?")[0], 
                            ("" === (r = wx.getStorageSync("new-user")) || r) && (wx.setStorage({
                                key: "new-user",
                                data: !1
                            }), t.isNewUser = !0, t.showScrollTip = !0, setTimeout(function() {
                                t.showScrollTip = !1;
                            }, 2e3));

                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            onShareAppMessage: function() {
                return {
                    title: "" + this.dailyQuoteList[this.currentIndex].translation,
                    path: "/pages/detail/main?date=" + this.currentDate
                };
            }
        };
    },
    HL5H: function(t, e) {},
    MhDc: function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = s("5nAL"), n = s.n(i), r = s("Qt9A");
        new n.a(r.a).$mount(), e.default = {
            config: {
                disableScroll: !0
            }
        };
    },
    QFDo: function(t, e, s) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", {
                    staticClass: "container",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(e) {
                            t.clickHandle("test click", e);
                        }
                    }
                }, [ s("swiper", {
                    staticClass: "swiper",
                    attrs: {
                        "indicator-dots": t.indicatorDots,
                        current: t.currentIndex,
                        eventid: "0"
                    },
                    on: {
                        change: t.handleChange
                    }
                }, t._l(t.dailyQuoteList, function(t, e) {
                    return s("swiper-item", {
                        key: t.id,
                        attrs: {
                            "item-id": t.id,
                            mpcomid: "1-" + e
                        }
                    }, [ s("card", {
                        attrs: {
                            item: t,
                            mpcomid: "0-" + e
                        }
                    }) ], 1);
                })), t._v(" "), s("tools", {
                    attrs: {
                        show: t.isShowTools,
                        posterImgUrl: t.posterImgUrl,
                        mpcomid: "2"
                    }
                }), t._v(" "), t.showScrollTip ? s("img", {
                    staticClass: "tip",
                    attrs: {
                        src: "/static/img/tip.png"
                    }
                }) : t._e(), t._v(" "), t.showClickTip ? s("img", {
                    staticClass: "tip",
                    attrs: {
                        src: "/static/img/click-tip.png"
                    }
                }) : t._e(), t._v(" "), s("canvas", {
                    staticStyle: {
                        background: "transparent",
                        width: "750px",
                        height: "1334px",
                        position: "absolute",
                        top: "0",
                        left: "10000px"
                    },
                    attrs: {
                        "canvas-id": "share-canvas"
                    }
                }) ], 1);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    Qt9A: function(t, e, s) {
        "use strict";
        var i = s("5vTQ"), n = s("QFDo");
        var r = function(t) {
            s("HL5H");
        }, a = s("ybqe")(i.a, n.a, r, "data-v-c81bcdbe", null);
        e.a = a.exports;
    }
}, [ "MhDc" ]);