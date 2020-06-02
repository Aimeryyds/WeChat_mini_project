global.webpackJsonp([ 6 ], {
    Kp9a: function(t, e) {},
    NsiX: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n("5nAL"), i = n.n(a), s = n("TodU");
        new i.a(s.a).$mount(), e.default = {
            config: {
                onReachBottomDistance: 50,
                backgroundColor: "#f5f5f5"
            }
        };
    },
    RJDF: function(t, e, n) {
        "use strict";
        var a = {
            render: function() {
                var t = this, e = t.$createElement, n = t._self._c || e;
                return n("div", {
                    staticClass: "personal-works",
                    style: {
                        paddingTop: t.paddingTop + "px"
                    }
                }, [ n("nav-bar", {
                    attrs: {
                        icon: "/static/img/back.png",
                        title: "translation" === t.type ? "我的翻译作品" : "我的语音作品",
                        handleClick: t.back,
                        mpcomid: "0"
                    }
                }), t._v(" "), t._l(t.translationList, function(e, a) {
                    return "translation" === t.type ? n("div", {
                        key: e.id,
                        staticClass: "translation-item"
                    }, [ n("div", {
                        staticClass: "header"
                    }, [ n("div", {
                        staticClass: "publisher"
                    }, [ n("img", {
                        staticClass: "avatar",
                        attrs: {
                            src: e.userinfo && e.userinfo.avatar
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "info"
                    }, [ n("div", {
                        staticClass: "nickname"
                    }, [ t._v(t._s(e.userinfo && e.userinfo.nickname)) ]), t._v(" "), n("div", {
                        staticClass: "publish-date"
                    }, [ t._v(t._s(e.created_at)) ]) ]) ]), t._v(" "), n("div", {
                        staticClass: "love-count"
                    }, [ n("span", [ t._v(t._s(e.like)) ]), t._v(" "), n("img", {
                        attrs: {
                            src: "/static/img/love-inactive.png"
                        }
                    }) ]) ]), t._v(" "), n("div", {
                        staticClass: "translation-sentence"
                    }, [ t._v(t._s(e.content) + " ") ]), t._v(" "), n("div", {
                        staticClass: "origin-sentence"
                    }, [ t._v("原句：" + t._s(e.challenge_content)) ]), t._v(" "), n("div", {
                        staticClass: "del",
                        attrs: {
                            eventid: "0-" + a
                        },
                        on: {
                            click: function(n) {
                                t.del(e, "translation");
                            }
                        }
                    }, [ t._v("删除") ]) ]) : t._e();
                }), t._v(" "), t._l(t.recordList, function(e, a) {
                    return "record" === t.type ? n("div", {
                        key: e.id,
                        staticClass: "record-item"
                    }, [ n("div", {
                        staticClass: "header"
                    }, [ n("div", {
                        staticClass: "publisher"
                    }, [ n("img", {
                        staticClass: "avatar",
                        attrs: {
                            src: e.userinfo && e.userinfo.avatar
                        }
                    }), t._v(" "), n("div", {
                        staticClass: "info"
                    }, [ n("div", {
                        staticClass: "nickname"
                    }, [ t._v(t._s(e.userinfo && e.userinfo.nickname)) ]), t._v(" "), n("div", {
                        staticClass: "publish-date"
                    }, [ t._v(t._s(e.created_at)) ]) ]) ]), t._v(" "), n("div", {
                        staticClass: "love-count"
                    }, [ n("span", [ t._v(t._s(e.like)) ]), t._v(" "), n("img", {
                        attrs: {
                            src: "/static/img/love-inactive.png"
                        }
                    }) ]) ]), t._v(" "), n("div", {
                        staticClass: "content"
                    }, [ n("div", {
                        staticClass: "sound",
                        class: {
                            playing: e.isPlaying
                        },
                        attrs: {
                            eventid: "1-" + a
                        },
                        on: {
                            click: function(e) {
                                t.playRecord(a);
                            }
                        }
                    }, [ n("img", {
                        attrs: {
                            src: e.isPlaying ? "/static/img/sound-playing.gif" : "/static/img/sound-line.png"
                        }
                    }) ]), t._v(" "), n("div", {
                        staticClass: "duration"
                    }, [ t._v(t._s(e.audio_length)) ]) ]), t._v(" "), n("div", {
                        staticClass: "origin-sentence"
                    }, [ t._v("原句：" + t._s(e.quote_content)) ]), t._v(" "), n("div", {
                        staticClass: "del",
                        attrs: {
                            eventid: "2-" + a
                        },
                        on: {
                            click: function(n) {
                                t.del(e, "record");
                            }
                        }
                    }, [ t._v("删除") ]) ]) : t._e();
                }), t._v(" "), t.isShowEmpty ? n("img", {
                    staticClass: "none-works",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/ccdbwr/5a9aa45186bd7676c8ed2a87a1ca0ed8.ce5952c5feb59724e486b432dd89e4d0.png"
                    }
                }) : t._e() ], 2);
            },
            staticRenderFns: []
        };
        e.a = a;
    },
    TodU: function(t, e, n) {
        "use strict";
        var a = n("udvx"), i = n("RJDF");
        var s = function(t) {
            n("Kp9a");
        }, r = n("ybqe")(a.a, i.a, s, "data-v-7322b15c", null);
        e.a = r.exports;
    },
    udvx: function(t, e, n) {
        "use strict";
        var a = n("woOf"), i = n.n(a), s = n("Gu7T"), r = n.n(s), o = n("Xxa5"), c = n.n(o), d = n("exGp"), u = n.n(d), p = n("Dd8w"), l = n.n(p), f = n("CpCs"), v = n("vLgD"), h = n("0xDb"), _ = n("NYxO"), g = n("PJh5"), m = n.n(g), x = n("olkN");
        e.a = {
            store: x.a,
            components: {
                "nav-bar": f.a
            },
            data: function() {
                return {
                    paddingTop: 64,
                    type: "",
                    translationList: [],
                    recordList: [],
                    currentIndex: 0,
                    isShowEmpty: !1,
                    ipp: 20,
                    page: 1
                };
            },
            computed: l()({}, n.i(_.a)([ "userInfo" ])),
            methods: {
                del: function(t, e) {
                    var a = this;
                    return u()(c.a.mark(function i() {
                        return c.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.next = 2, n.i(h.d)({
                                    title: "提示",
                                    content: "确认删除这条作品吗？"
                                });

                              case 2:
                                if (!i.sent.confirm) {
                                    i.next = 15;
                                    break;
                                }
                                if ("translation" !== e) {
                                    i.next = 10;
                                    break;
                                }
                                return i.next = 7, n.i(v.l)(t.id);

                              case 7:
                                a.refreshTranslation(), i.next = 14;
                                break;

                              case 10:
                                if ("record" !== e) {
                                    i.next = 14;
                                    break;
                                }
                                return i.next = 13, n.i(v.m)(t.id);

                              case 13:
                                a.refreshRecord();

                              case 14:
                                wx.showToast({
                                    icon: "none",
                                    title: "删除成功"
                                });

                              case 15:
                              case "end":
                                return i.stop();
                            }
                        }, i, a);
                    }))();
                },
                fetchMoreTranslation: function() {
                    var t = this;
                    return u()(c.a.mark(function e() {
                        var a, i, s;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.page = t.page + 1, a = t.ipp, i = t.page, e.next = 4, n.i(v.n)({
                                    ipp: a,
                                    page: i,
                                    user_id: t.userInfo.id
                                });

                              case 4:
                                0 === (s = e.sent).objects.length ? wx.showToast({
                                    icon: "none",
                                    title: "没有更多了"
                                }) : (s.objects.forEach(function(t) {
                                    var e = t;
                                    e.created_at = m()(e.created_at).format("M-D HH:mm");
                                }), t.translationList = [].concat(r()(t.translationList), r()(s.objects)));

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                fetchMoreRecord: function() {
                    var t = this;
                    return u()(c.a.mark(function e() {
                        var a, i, s;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.page = t.page + 1, a = t.ipp, i = t.page, e.next = 4, n.i(v.o)({
                                    ipp: a,
                                    page: i,
                                    user_id: t.userInfo.id
                                });

                              case 4:
                                0 === (s = e.sent).objects.length ? wx.showToast({
                                    icon: "none",
                                    title: "没有更多了"
                                }) : (s.objects.forEach(function(t) {
                                    var e = t;
                                    e.isPlaying = !1, e.created_at = m()(e.created_at).format("M-D HH:mm");
                                }), t.recordList = [].concat(r()(t.recordList), r()(s.objects)));

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                refreshTranslation: function() {
                    var t = this;
                    return u()(c.a.mark(function e() {
                        var a, i, s;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.page = 1, a = t.ipp, i = t.page, e.next = 4, n.i(v.n)({
                                    ipp: a,
                                    page: i,
                                    user_id: t.userInfo.id
                                });

                              case 4:
                                0 === (s = e.sent).objects.length ? wx.showToast({
                                    icon: "none",
                                    title: "没有更多了"
                                }) : (s.objects.forEach(function(t) {
                                    var e = t;
                                    e.created_at = m()(e.created_at).format("M-D HH:mm");
                                }), t.translationList = [].concat(r()(s.objects)));

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                refreshRecord: function() {
                    var t = this;
                    return u()(c.a.mark(function e() {
                        var a, i, s;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.page = 1, a = t.ipp, i = t.page, e.next = 4, n.i(v.o)({
                                    ipp: a,
                                    page: i,
                                    user_id: t.userInfo.id
                                });

                              case 4:
                                0 === (s = e.sent).objects.length ? wx.showToast({
                                    icon: "none",
                                    title: "没有更多了"
                                }) : (s.objects.forEach(function(t) {
                                    var e = t;
                                    e.isPlaying = !1, e.created_at = m()(e.created_at).format("M-D HH:mm");
                                }), t.recordList = [].concat(r()(s.objects)));

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                back: function() {
                    wx.navigateBack();
                },
                playRecord: function(t) {
                    if ("record" === this.type) {
                        var e = this.currentIndex;
                        this.currentIndex = t, this.innerAudioContext.src = this.recordList[t].user_audio_urls[0], 
                        this.innerAudioContext.play(), this.recordList[e].isPlaying = !1, this.recordList[t].isPlaying = !0;
                    }
                }
            },
            onReachBottom: function() {
                "translation" === this.type ? this.fetchMoreTranslation() : "record" === this.type && this.fetchMoreRecord();
            },
            onUnload: function() {
                i()(this.$data, this.$options.data());
            },
            created: function() {
                var t = this;
                this.innerAudioContext = wx.createInnerAudioContext(), this.innerAudioContext.onError(function(t) {}), 
                this.innerAudioContext.onEnded(function() {
                    t.recordList[t.currentIndex].isPlaying = !1;
                });
            },
            mounted: function() {
                var t = this;
                return u()(c.a.mark(function e() {
                    var a, i, s, r, o, d;
                    return c.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (a = t.ipp, i = t.page, s = t.userInfo.id, r = wx.getSystemInfoSync(), t.paddingTop = r.statusBarHeight + 44, 
                            t.type = t.$root.$mp.query.type, "translation" !== t.type) {
                                e.next = 15;
                                break;
                            }
                            return e.next = 9, n.i(v.n)({
                                ipp: a,
                                page: i,
                                user_id: s
                            });

                          case 9:
                            0 === (o = e.sent).objects.length && (t.isShowEmpty = !0), o.objects.forEach(function(t) {
                                var e = t;
                                e.created_at = m()(e.created_at).format("M-D HH:mm");
                            }), t.translationList = o.objects, e.next = 22;
                            break;

                          case 15:
                            if ("record" !== t.type) {
                                e.next = 22;
                                break;
                            }
                            return e.next = 18, n.i(v.o)({
                                ipp: a,
                                page: i,
                                user_id: s
                            });

                          case 18:
                            0 === (d = e.sent).objects.length && (t.isShowEmpty = !0), d.objects.forEach(function(t) {
                                var e = t;
                                e.isPlaying = !1, e.created_at = m()(e.created_at).format("M-D HH:mm");
                            }), t.recordList = d.objects;

                          case 22:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            onShareAppMessage: function() {
                return {
                    title: "原来翻译句子也可以这么好玩，安利给你喔～",
                    path: "/pages/login/main"
                };
            }
        };
    }
}, [ "NsiX" ]);