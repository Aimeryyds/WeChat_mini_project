require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 10 ], {
    CZG8: function(t, e, a) {
        "use strict";
        var n = a("/WWA"), s = a("Vo7i"), o = n.c + "/wordscollection/words", i = {
            listFavourites: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return Object(s.a)("" + o, {
                    data: {
                        page: t,
                        ipp: e,
                        business_id: a
                    }
                });
            },
            removeFavourite: function(t) {
                return Object(s.a)("" + o, {
                    method: "DELETE",
                    body: {
                        vocab_ids: [ t ]
                    }
                });
            }
        };
        e.a = i;
    },
    JYtv: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = a("5nAL"), s = a.n(n), o = a("qxk2");
        new s.a(o.a).$mount();
    },
    K9YY: function(t, e, a) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return t.isLoading ? t._e() : a("div", {
                    staticClass: "container"
                }, [ t.total ? a("div", {
                    staticClass: "word-list"
                }, [ a("div", {
                    staticClass: "total"
                }, [ t._v("共有单词" + t._s(t.total) + "个，已为你添加到扇贝单词学习计划中") ]), t._v(" "), t._l(t.words, function(e, n) {
                    return a("div", {
                        key: n,
                        staticClass: "word-item"
                    }, [ a("div", {
                        staticClass: "basic-info"
                    }, [ a("i", {
                        staticClass: "ib ib-volume voice",
                        attrs: {
                            eventid: "0-" + n
                        },
                        on: {
                            click: function(a) {
                                t.handlePronounce(e);
                            }
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "content"
                    }, [ t._v("\n                    " + t._s(e.vocabulary.word) + "\n                    "), e.vocabulary.sound && e.vocabulary.sound.ipa_us ? a("span", {
                        staticClass: "phonogram"
                    }, [ t._v("/" + t._s(e.vocabulary.sound.ipa_us) + "/") ]) : t._e() ]) ], 1), t._v(" "), a("div", {
                        staticClass: "definition-section"
                    }, [ a("div", {
                        staticClass: "definition-icon"
                    }, [ t._v("释义") ]), t._v(" "), a("div", {
                        staticClass: "definitions"
                    }, t._l(e.vocabulary.senses, function(e, n) {
                        return a("div", {
                            key: n,
                            staticClass: "definition"
                        }, [ t._v(t._s(e.pos) + t._s(e.definition_cn)) ]);
                    })) ]), t._v(" "), a("div", {
                        staticClass: "bottom-info",
                        class: {
                            "no-source": !e.objects.source_name
                        }
                    }, [ e.objects.source_name ? a("div", {
                        staticClass: "source"
                    }, [ t._v("来源《" + t._s(e.objects.source_name) + "》") ]) : t._e(), t._v(" "), a("button", {
                        staticClass: "remove-btn",
                        attrs: {
                            eventid: "1-" + n
                        },
                        on: {
                            click: function(a) {
                                t.removeFavourite(e, n);
                            }
                        }
                    }, [ t._v("移出") ]) ], 1) ]);
                }) ], 2) : a("div", {
                    staticClass: "no-word"
                }, [ a("img", {
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kdbdns/5488a08c877f08fb5c6f91d2976241bc.99a73b98de2bd9144f4b11364a126228.png",
                        alt: "img"
                    }
                }), t._v(" "), a("div", {
                    staticClass: "tip"
                }, [ t._v("还没有生词哦~") ]) ]) ]);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    MBMn: function(t, e, a) {
        "use strict";
        var n = a("Gu7T"), s = a.n(n), o = a("Xxa5"), i = a.n(o), r = a("exGp"), c = a.n(r), u = a("CZG8"), v = a("Apws");
        e.a = {
            data: function() {
                return {
                    isLoading: !0,
                    words: [],
                    page: 1,
                    total: 0
                };
            },
            mounted: function() {
                var t = this;
                return c()(i.a.mark(function e() {
                    return i.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t.isLoading = !0, e.next = 3, t.fetchFavourites();

                          case 3:
                            t.isLoading = !1, t.audio = wx.createInnerAudioContext(), v.a.sensorLog({
                                event_code: "RDbasic_NewWord_PV"
                            });

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            methods: {
                fetchFavourites: function() {
                    var t = this;
                    return c()(i.a.mark(function e() {
                        var a, n, o, r;
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, u.a.listFavourites(t.page);

                              case 2:
                                a = e.sent, n = a.objects, o = a.total, r = a.page, t.page = r, t.total = o, t.words = [].concat(s()(t.words), s()(n));

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                removeFavourite: function(t, e) {
                    var a = this, n = t.objects, o = Math.floor(e / 10) + 1, r = Math.floor(this.total / 10) + 1;
                    if (n) {
                        var v = n.vocab_id;
                        wx.showModal({
                            title: "注意",
                            content: "确认将该单词移出生词本吗？",
                            cancelColor: "#999999",
                            confirmText: "确认",
                            confirmColor: "#eb5f55",
                            success: function() {
                                var t = c()(i.a.mark(function t(e) {
                                    var n, c, d, l, f = e.confirm;
                                    return i.a.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            if (!f) {
                                                t.next = 12;
                                                break;
                                            }
                                            return t.next = 3, u.a.removeFavourite(v);

                                          case 3:
                                            return t.next = 5, u.a.listFavourites(o);

                                          case 5:
                                            c = t.sent, d = c.objects, l = c.total, (n = a.words).splice.apply(n, [ 10 * (o - 1), 10 ].concat(s()(d))), 
                                            a.total = l, o !== r && (a.words = a.words.slice(0, 10 * o), a.page = o), wx.showToast({
                                                title: "单词已移出生词本",
                                                icon: "none"
                                            });

                                          case 12:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t, a);
                                }));
                                return function(e) {
                                    return t.apply(this, arguments);
                                };
                            }()
                        });
                    } else wx.showToast({
                        title: "移出生词本出错了",
                        icon: "none"
                    });
                },
                handlePronounce: function(t) {
                    var e = t.vocabulary.sound;
                    if (e && e.audio_us_urls.length) {
                        var a = e.audio_us_urls;
                        this.audio.src = a[0] || a[1], this.audio.play();
                    } else wx.showToast({
                        title: "暂无音频",
                        icon: "none"
                    });
                }
            },
            onReachBottom: function() {
                var t = this;
                return c()(i.a.mark(function e() {
                    return i.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t.words.length !== t.total) {
                                e.next = 4;
                                break;
                            }
                            wx.showToast({
                                title: "没有更多了",
                                icon: "none"
                            }), e.next = 7;
                            break;

                          case 4:
                            return t.page = t.page + 1, e.next = 7, t.fetchFavourites();

                          case 7:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            }
        };
    },
    kaT5: function(t, e) {},
    qxk2: function(t, e, a) {
        "use strict";
        var n = a("MBMn"), s = a("K9YY");
        var o = function(t) {
            a("kaT5");
        }, i = a("ybqe")(n.a, s.a, o, "data-v-4e5c7352", null);
        e.a = i.exports;
    }
}, [ "JYtv" ]);