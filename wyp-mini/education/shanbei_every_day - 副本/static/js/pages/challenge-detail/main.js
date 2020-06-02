global.webpackJsonp([ 3 ], {
    "4Jk5": function(t, e, a) {
        "use strict";
        var n = a("t2W1"), i = a("5MQz");
        var s = function(t) {
            a("y5Sg");
        }, r = a("ybqe")(n.a, i.a, s, "data-v-60318a22", null);
        e.a = r.exports;
    },
    "5MQz": function(t, e, a) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "challenge-detail",
                    style: {
                        paddingTop: t.paddingTop + "px"
                    }
                }, [ a("nav-bar", {
                    attrs: {
                        icon: "/static/img/back.png",
                        title: "翻译作品",
                        handleClick: t.back,
                        mpcomid: "0"
                    }
                }), t._v(" "), a("div", {
                    staticClass: "header"
                }, [ a("div", {
                    staticClass: "publisher"
                }, [ a("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.challenge.avatar_img_urls && t.challenge.avatar_img_urls[0],
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.wxPromotion(t.challenge.publisher);
                        }
                    }
                }), t._v(" "), a("div", {
                    staticClass: "info"
                }, [ a("div", {
                    staticClass: "nickname"
                }, [ t._v(t._s(t.challenge.publisher)) ]), t._v(" "), a("div", {
                    staticClass: "publish-date"
                }, [ t._v(t._s(t.challenge.release_time)) ]) ]) ]), t._v(" "), a("button", {
                    staticClass: "share",
                    attrs: {
                        "open-type": "share",
                        id: t.share - t.challenge
                    }
                }, [ t._v("邀请好友") ]) ], 1), t._v(" "), a("div", {
                    staticClass: "message"
                }, [ t._v(t._s(t.challenge.message)) ]), t._v(" "), t.challenge.video_url ? a("video", {
                    staticClass: "video",
                    attrs: {
                        src: t.challenge.video_url,
                        "custom-cache": !1
                    }
                }) : t._e(), t._v(" "), a("img", {
                    staticClass: "content-img",
                    attrs: {
                        src: t.challenge.background_img_urls && t.challenge.background_img_urls[0],
                        eventid: "1"
                    },
                    on: {
                        click: function(e) {
                            t.previewImg(t.challenge.background_img_urls[0]);
                        }
                    }
                }), t._v(" "), t.challenge.billboard_img_urls ? a("img", {
                    staticClass: "billboard-img",
                    attrs: {
                        src: t.challenge.billboard_img_urls && t.challenge.billboard_img_urls[0],
                        eventid: "2"
                    },
                    on: {
                        click: function(e) {
                            t.previewImg(t.challenge.billboard_img_urls[0]);
                        }
                    }
                }) : t._e(), t._v(" "), a("div", {
                    staticClass: "billboard-text"
                }, [ t._v(t._s(t.challenge.billboard)) ]), t._v(" "), a("div", {
                    staticClass: "sep-line"
                }), t._v(" "), a("div", {
                    staticClass: "translations"
                }, [ a("div", {
                    staticClass: "translation-title"
                }, [ a("span", {
                    staticClass: "title"
                }, [ t._v("翻译作品") ]), t._v(" "), a("span", {
                    staticClass: "total"
                }, [ t._v("(" + t._s(t.total) + ")") ]) ]), t._v(" "), 0 === t.total ? a("div", {
                    staticClass: "show-empty"
                }, [ a("img", {
                    attrs: {
                        src: "/static/img/empty-translation.png"
                    }
                }) ]) : t._e(), t._v(" "), t.mine.challenge_id ? a("translation", {
                    attrs: {
                        translation: t.mine,
                        mine: !0,
                        eventid: "3",
                        mpcomid: "1"
                    },
                    on: {
                        delete: t.delTranslation,
                        like: t.handleLike,
                        share: t.handleShare
                    }
                }) : t._e(), t._v(" "), t._l(t.translationList, function(e, n) {
                    return a("translation", {
                        key: e.id,
                        attrs: {
                            translation: e,
                            eventid: "4-" + n,
                            mpcomid: "2-" + n
                        },
                        on: {
                            like: t.handleLike,
                            share: t.handleShare
                        }
                    });
                }) ], 2), t._v(" "), t.showTextArea ? a("form", {
                    staticClass: "bottom-form",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        submit: t.formSubmit
                    }
                }, [ a("div", {
                    staticClass: "bottom-input",
                    style: {
                        height: t.inputHeight + "px",
                        "padding-bottom": t.textAreaPaddingBottom + "px"
                    }
                }, [ a("textarea", {
                    staticClass: "input",
                    attrs: {
                        "show-confirm-bar": !1,
                        "cursor-spacing": 10,
                        "auto-height": !0,
                        name: "input",
                        fixed: !0,
                        placeholder: "我来翻译...",
                        "placeholder-style": "font-size:15px;color:#999999;",
                        eventid: "5"
                    },
                    on: {
                        linechange: t.lineChange,
                        focus: t.textareaFocus,
                        confirm: function(e) {
                            t.sendTranslation(t.e);
                        }
                    }
                }), t._v(" "), a("button", {
                    staticClass: "send",
                    style: {
                        marginBottom: t.sendMarginBottom + "px"
                    },
                    attrs: {
                        formType: "submit"
                    }
                }, [ a("img", {
                    staticClass: "icon",
                    attrs: {
                        src: "/static/img/send-icon.png"
                    }
                }) ]) ], 1) ]) : t._e(), t._v(" "), a("modal", {
                    attrs: {
                        show: t.showContactModal,
                        option: t.contactModalOption,
                        eventid: "7",
                        mpcomid: "3"
                    },
                    on: {
                        "update:show": function(e) {
                            t.showContactModal = e;
                        },
                        complete: t.closeModal
                    }
                }) ], 1);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    "6sep": function(t, e, a) {
        "use strict";
        var n = a("Xxa5"), i = a.n(n), s = a("exGp"), r = a.n(s), o = a("Dd8w"), c = a.n(o), l = a("PJh5"), d = a.n(l), u = a("NYxO"), h = a("olkN"), m = a("vLgD");
        e.a = {
            store: h.a,
            props: [ "translation", "mine" ],
            computed: c()({}, a.i(u.a)([ "userInfo" ]), {
                showCheckin: function() {
                    return this.mine && d()(this.translation.created_at).format("YYYY-MM-DD") === d()().format("YYYY-MM-DD") && !this.userInfo.today_is_checked;
                }
            }),
            methods: c()({}, a.i(u.c)([ "initUserInfo" ]), {
                delTranslation: function() {
                    this.$emit("delete", this.translation.id);
                },
                like: function() {
                    this.$emit("like", this.translation.id, !this.translation.is_liked);
                },
                toShare: function(t) {
                    var e = this;
                    return r()(i.a.mark(function n() {
                        return i.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (e.showCheckin) {
                                    n.next = 5;
                                    break;
                                }
                                e.$emit("share", t.id, !1), n.next = 9;
                                break;

                              case 5:
                                return n.next = 7, a.i(m.D)();

                              case 7:
                                e.initUserInfo(), e.$emit("share", t.id, !0);

                              case 9:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                }
            }),
            mounted: function() {}
        };
    },
    "9M1Z": function(t, e) {},
    Nahk: function(t, e, a) {
        "use strict";
        var n = a("6sep"), i = a("c73o");
        var s = function(t) {
            a("9M1Z");
        }, r = a("ybqe")(n.a, i.a, s, "data-v-48f51b31", null);
        e.a = r.exports;
    },
    c73o: function(t, e, a) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, a = t._self._c || e;
                return a("div", {
                    staticClass: "translation"
                }, [ a("div", {
                    staticClass: "content"
                }, [ a("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.translation.userinfo.avatar
                    }
                }), t._v(" "), a("div", {
                    staticClass: "right"
                }, [ a("div", {
                    staticClass: "top"
                }, [ a("div", {
                    staticClass: "nickname"
                }, [ t._v(t._s(t.translation.userinfo.nickname)) ]), t._v(" "), a("div", {
                    staticClass: "tool"
                }, [ a("img", {
                    staticClass: "share-trans",
                    attrs: {
                        src: "/static/img/share-m.png",
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            t.toShare(t.translation);
                        }
                    }
                }), t._v(" "), a("div", {
                    staticClass: "love",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.like
                    }
                }, [ a("span", {
                    style: {
                        color: t.translation.is_liked ? "#fe6135" : "#999999"
                    }
                }, [ t._v(t._s(t.translation.like)) ]), t._v(" "), a("img", {
                    staticClass: "icon",
                    attrs: {
                        src: t.translation.is_liked ? "/static/img/love-active.png" : "/static/img/love-inactive.png"
                    }
                }) ]) ]) ]), t._v(" "), a("span", {
                    staticClass: "date"
                }, [ t._v(t._s(t.translation.showDate)) ]), t._v(" "), a("div", {
                    staticClass: "text"
                }, [ t._v(t._s(t.translation.content)) ]), t._v(" "), a("div", {
                    staticClass: "bottom"
                }, [ a("span", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: t.mine,
                        expression: "mine"
                    } ],
                    staticClass: "del",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.delTranslation
                    }
                }, [ t._v("删除") ]) ]) ]) ]), t._v(" "), t.mine ? a("div", {
                    staticClass: "share-btn",
                    attrs: {
                        id: "share-my-translation",
                        eventid: "3"
                    },
                    on: {
                        click: function(e) {
                            t.toShare(t.translation);
                        }
                    }
                }, [ t._v(t._s(t.showCheckin ? "签到" : "分享集赞")) ]) : t._e(), t._v(" "), a("div", {
                    staticClass: "line"
                }) ]);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    oYPX: function(t, e, a) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = a("5nAL"), i = a.n(n), s = a("4Jk5");
        new i.a(s.a).$mount(), e.default = {};
    },
    t2W1: function(t, e, a) {
        "use strict";
        var n = a("Gu7T"), i = a.n(n), s = a("woOf"), r = a.n(s), o = a("Xxa5"), c = a.n(o), l = a("exGp"), d = a.n(l), u = a("Dd8w"), h = a.n(u), m = a("PJh5"), p = a.n(m), g = a("CpCs"), v = a("Nahk"), f = a("Ol9X"), _ = a("NYxO"), k = a("olkN"), x = a("0xDb"), w = a("vLgD");
        e.a = {
            store: k.a,
            components: {
                "nav-bar": g.a,
                translation: v.a,
                modal: f.a
            },
            data: function() {
                return {
                    paddingTop: 64,
                    textAreaPaddingBottom: 0,
                    sendMarginBottom: 8,
                    showLoveModal: !1,
                    challenge: {},
                    showTextArea: !1,
                    translationList: [],
                    inputHeight: 32,
                    isHandlingLike: !1,
                    showContactModal: !1,
                    contactModalOption: {},
                    total: "",
                    ipp: 20,
                    page: 1
                };
            },
            computed: h()({}, a.i(_.a)([ "challengeList", "mine", "userInfo" ])),
            methods: h()({}, a.i(_.b)([ "initMine" ]), {
                back: function() {
                    "login" === this.$root.$mp.query.from ? wx.switchTab({
                        url: "/pages/trans-challenge/main"
                    }) : wx.navigateBack();
                },
                sendTranslation: function(t) {},
                previewImg: function(t) {
                    wx.previewImage({
                        current: t,
                        urls: [ t ]
                    });
                },
                wxPromotion: function(t) {
                    this.showContactModal = !0, this.contactModalOption = {
                        opacity: .5,
                        title: "获得免费英语干货",
                        content: "点击【确认】后，回复数字【1】",
                        confirmText: "确认",
                        cancelText: "取消",
                        showCancel: !0,
                        contact: !0
                    };
                },
                closeModal: function() {
                    this.showContactModal = !1;
                },
                delTranslation: function(t) {
                    var e = this;
                    return d()(c.a.mark(function n() {
                        return c.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, a.i(x.d)({
                                    title: "提示",
                                    content: "确定要删除这条翻译吗？"
                                });

                              case 2:
                                if (!n.sent.confirm) {
                                    n.next = 11;
                                    break;
                                }
                                return n.next = 7, a.i(w.l)(t);

                              case 7:
                                wx.showToast({
                                    icon: "none",
                                    title: "删除成功！"
                                }), e.showTextArea = !0, e.initMine({}), e.total = e.total - 1;

                              case 11:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                handleLike: function(t, e) {
                    var n = this;
                    return d()(c.a.mark(function i() {
                        var s, r;
                        return c.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                if (!n.isHandlingLike) {
                                    i.next = 2;
                                    break;
                                }
                                return i.abrupt("return");

                              case 2:
                                if (n.isHandlingLike = !0, i.prev = 3, !e) {
                                    i.next = 10;
                                    break;
                                }
                                return i.next = 7, a.i(w.a)({
                                    translation_id: t
                                });

                              case 7:
                                n.mine.id === t ? (n.mine.is_liked = !0, n.mine.like = n.mine.like + 1) : ((s = n.translationList.find(function(e) {
                                    return e.id === t;
                                })).is_liked = !0, s.like++), i.next = 13;
                                break;

                              case 10:
                                return i.next = 12, a.i(w.E)(t);

                              case 12:
                                n.mine.id === t ? (n.mine.is_liked = !1, n.mine.like = n.mine.like - 1) : ((r = n.translationList.find(function(e) {
                                    return e.id === t;
                                })).is_liked = !1, r.like--);

                              case 13:
                                i.next = 18;
                                break;

                              case 15:
                                i.prev = 15, i.t0 = i.catch(3);

                              case 18:
                                n.isHandlingLike = !1;

                              case 19:
                              case "end":
                                return i.stop();
                            }
                        }, i, n, [ [ 3, 15 ] ]);
                    }))();
                },
                handleShare: function(t, e) {
                    wx.navigateTo({
                        url: "/pages/share-circle/main?challengeId=" + this.challenge.id + "&translationId=" + t + "&checkin=" + e
                    });
                },
                lineChange: function(t) {
                    this.inputHeight = t.mp.detail.height + 22;
                },
                textareaFocus: function(t) {
                    var e = this, a = wx.createSelectorQuery();
                    a.select(".content-img").boundingClientRect(), a.selectViewport().scrollOffset(), 
                    a.exec(function(a) {
                        wx.pageScrollTo({
                            scrollTop: a[1].scrollTop + a[0].top - e.paddingTop - t.mp.detail.height
                        });
                    });
                },
                formSubmit: function(t) {
                    var e = this;
                    return d()(c.a.mark(function n() {
                        return c.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if ("" !== t.mp.detail.value.input.trim()) {
                                    n.next = 4;
                                    break;
                                }
                                return n.next = 3, a.i(x.d)({
                                    title: "提示",
                                    content: "翻译的内容不能为空哦"
                                });

                              case 3:
                                return n.abrupt("return");

                              case 4:
                                return wx.showLoading({
                                    title: "发送中...",
                                    mask: !0
                                }), n.next = 8, a.i(w.F)({
                                    challenge_id: e.$root.$mp.query.id,
                                    content: t.mp.detail.value.input
                                });

                              case 8:
                                e.input = "", e.showTextArea = !1, wx.hideLoading(), wx.showToast({
                                    icon: "none",
                                    title: "发送成功！"
                                }), e.refreshTranslation();

                              case 14:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                refreshTranslation: function() {
                    var t = this;
                    return d()(c.a.mark(function e() {
                        var n;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, a.i(w.G)({
                                    challenge_id: t.$root.$mp.query.id,
                                    ipp: 20,
                                    page: 1
                                });

                              case 2:
                                (n = e.sent).objects.map(function(t) {
                                    t.showDate = p()(t.created_at).format("M-D H:mm");
                                }), n.mine.showDate = p()(n.mine.created_at).format("M-D H:mm"), t.initMine(n.mine), 
                                t.mine.id ? t.showTextArea = !1 : t.showTextArea = !0, t.total = n.total, t.translationList = n.objects.filter(function(e) {
                                    return e.id !== t.mine.id;
                                });

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                }
            }),
            mounted: function() {
                var t = this;
                return d()(c.a.mark(function e() {
                    var n;
                    return c.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (t.page, t.ipp, n = wx.getSystemInfoSync(), t.paddingTop = n.statusBarHeight + 44, 
                            n.model.startsWith("iPhone X") && (t.textAreaPaddingBottom = 20), n.system.startsWith("Android") && (t.sendMarginBottom = 0), 
                            "login" !== t.$root.$mp.query.from && 0 !== t.challengeList.length) {
                                e.next = 12;
                                break;
                            }
                            return e.next = 9, a.i(w.c)(t.$root.$mp.query.id);

                          case 9:
                            t.challenge = e.sent, e.next = 13;
                            break;

                          case 12:
                            t.challenge = t.challengeList.find(function(e) {
                                return e.id === t.$root.$mp.query.id;
                            });

                          case 13:
                            t.refreshTranslation();

                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            onUnload: function() {
                r()(this.$data, this.$options.data());
            },
            onReachBottom: function() {
                var t = this;
                return d()(c.a.mark(function e() {
                    var n, s, r;
                    return c.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t.page = t.page + 1, n = t.ipp, s = t.page, e.next = 4, a.i(w.G)({
                                challenge_id: t.$root.$mp.query.id,
                                ipp: n,
                                page: s
                            });

                          case 4:
                            0 === (r = e.sent).objects.length ? wx.showToast({
                                icon: "none",
                                title: "没有更多了"
                            }) : (r.objects.map(function(t) {
                                t.showDate = p()(t.created_at).format("M-D H:mm");
                            }), t.translationList = [].concat(i()(t.translationList), i()(r.objects.filter(function(e) {
                                return e.id !== t.mine.id;
                            }))));

                          case 6:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            onShareAppMessage: function(t) {
                var e = encodeURIComponent("/pages/challenge-detail/main?id=" + this.challenge.id + "&from=login");
                return t.target && "share-my-translation" === t.target.id ? {
                    title: "我是翻译小能手，你必须得给我点赞！！！",
                    path: "/pages/trans-challenge/main?translationId=" + this.mine.id,
                    imageUrl: this.challenge.background_img_urls[0]
                } : {
                    title: this.userInfo.nickname + "向你发来一个翻译挑战，速来应战！！",
                    path: "/pages/login/main?redirect=" + e,
                    imageUrl: this.challenge.background_img_urls[0]
                };
            }
        };
    },
    y5Sg: function(t, e) {}
}, [ "oYPX" ]);