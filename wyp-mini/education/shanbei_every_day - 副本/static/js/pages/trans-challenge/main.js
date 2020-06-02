global.webpackJsonp([ 2 ], {
    "42ba": function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var i = e("5nAL"), s = e.n(i), n = e("6xl+");
        new s.a(n.a).$mount(), a.default = {
            config: {
                onReachBottomDistance: 50,
                backgroundColor: "#f5f5f5",
                enablePullDownRefresh: !0
            }
        };
    },
    "6xl+": function(t, a, e) {
        "use strict";
        var i = e("nxiH"), s = e("HkRQ");
        var n = function(t) {
            e("uRxC");
        }, o = e("ybqe")(i.a, s.a, n, "data-v-a472d066", null);
        a.a = o.exports;
    },
    "9RSX": function(t, a, e) {
        "use strict";
        var i = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {
                    staticClass: "challenge-item",
                    attrs: {
                        "hover-class": "hover"
                    }
                }, [ e("div", {
                    staticClass: "header"
                }, [ e("div", {
                    staticClass: "publisher"
                }, [ e("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.challenge.avatar_img_urls && t.challenge.avatar_img_urls[0],
                        "hover-stop-propagation": "",
                        eventid: "0"
                    },
                    on: {
                        click: function(a) {
                            a.stopPropagation(), t.wxPromotion(t.challenge.publisher);
                        }
                    }
                }), t._v(" "), e("div", {
                    staticClass: "info",
                    attrs: {
                        "hover-stop-propagation": "",
                        eventid: "1"
                    },
                    on: {
                        click: function(a) {
                            a.stopPropagation(), t.wxPromotion(t.challenge.publisher);
                        }
                    }
                }, [ e("div", {
                    staticClass: "nickname"
                }, [ t._v(t._s(t.challenge.publisher)) ]), t._v(" "), e("div", {
                    staticClass: "publish-date"
                }, [ t._v(t._s(t.challenge.release_time)) ]) ]) ]), t._v(" "), e("button", {
                    staticClass: "share",
                    attrs: {
                        "hover-stop-propagation": "",
                        "open-type": "share",
                        id: t.challenge.id,
                        eventid: "2"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation();
                        }
                    }
                }, [ t._v("邀请好友") ]) ], 1), t._v(" "), e("form", {
                    attrs: {
                        "hover-class": "hover",
                        "report-submit": !0,
                        eventid: "3"
                    },
                    on: {
                        submit: t.formSubmit
                    }
                }, [ e("button", {
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ e("div", {
                    staticClass: "message"
                }, [ t._v(t._s(t.challenge.message)) ]), t._v(" "), e("div", {
                    staticClass: "content-btn"
                }, [ e("img", {
                    staticClass: "content-img",
                    attrs: {
                        src: t.challenge.background_img_urls && t.challenge.background_img_urls[0]
                    }
                }) ]), t._v(" "), e("div", {
                    staticClass: "bottom",
                    attrs: {
                        "hover-class": "hover"
                    }
                }, [ e("img", {
                    staticClass: "hot-icon",
                    attrs: {
                        src: "/static/img/hot-icon.png"
                    }
                }), t._v(" "), e("span", [ t._v(t._s(t.challenge.join_num) + "人发布作品") ]), t._v(" "), e("span", {
                    staticClass: "nav-detail"
                }, [ t._v("点击查看>") ]) ]) ]) ], 1), t._v(" "), e("div", {
                    staticClass: "sperator"
                }) ], 1);
            },
            staticRenderFns: []
        };
        a.a = i;
    },
    HkRQ: function(t, a, e) {
        "use strict";
        var i = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {
                    staticClass: " challenge",
                    style: {
                        paddingTop: t.paddingTop + "px"
                    }
                }, [ e("nav-bar", {
                    attrs: {
                        title: "翻译挑战",
                        opacity: 1,
                        handleClick: t.back,
                        mpcomid: "0"
                    }
                }), t._v(" "), t.adList.length > 0 ? e("swiper", {
                    staticClass: "swiper",
                    style: {
                        top: t.paddingTop - 60 + "px"
                    },
                    attrs: {
                        "indicator-dots": !1,
                        autoplay: !0,
                        interval: 5e3
                    }
                }, t._l(t.adList, function(t, a) {
                    return e("swiper-item", {
                        key: t.id,
                        attrs: {
                            mpcomid: "1-" + a
                        }
                    }, [ "OTHERS" === t.path_type ? e("navigator", {
                        staticClass: "nav",
                        attrs: {
                            target: "miniProgram",
                            "app-id": t.appid,
                            path: t.path
                        }
                    }, [ e("img", {
                        attrs: {
                            src: t.image_urls && t.image_urls[0]
                        }
                    }) ]) : "OWN" === t.path_type ? e("navigator", {
                        staticClass: "nav",
                        attrs: {
                            target: "",
                            url: t.path
                        }
                    }, [ e("img", {
                        attrs: {
                            src: t.image_urls && t.image_urls[0]
                        }
                    }) ]) : e("button", {
                        attrs: {
                            "open-type": "contact"
                        }
                    }, [ e("img", {
                        attrs: {
                            src: t.image_urls && t.image_urls[0]
                        }
                    }) ]) ], 1);
                })) : t._e(), t._v(" "), t._l(t.challengeList, function(t, a) {
                    return e("challenge", {
                        key: t.id,
                        attrs: {
                            challenge: t,
                            mpcomid: "2-" + a
                        }
                    });
                }), t._v(" "), t.showLoveModal ? e("div", {
                    staticClass: "modal",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        touchmove: function(a) {
                            a.stopPropagation(), t.handleScroll(a);
                        }
                    }
                }, [ e("div", {
                    staticClass: "inner"
                }, [ e("img", {
                    staticClass: "close-modal",
                    attrs: {
                        src: "/static/img/close-grey.png",
                        eventid: "0"
                    },
                    on: {
                        click: t.toLogin
                    }
                }), t._v(" "), e("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.translation.userinfo && t.translation.userinfo.avatar
                    }
                }), t._v(" "), e("div", {
                    staticClass: "title"
                }, [ t._v(t._s(t.translation.userinfo && t.translation.userinfo.nickname) + "的翻译") ]), t._v(" "), e("div", {
                    staticClass: "content"
                }, [ e("div", {
                    staticClass: "title "
                }, [ t._v("- 原句 -") ]), t._v(" "), e("div", {
                    staticClass: " sentence "
                }, [ t._v(t._s(t.challenge.content)) ]), t._v(" "), e("div", {
                    staticClass: "from"
                }, [ t._v(t._s(t.challenge.source)) ]), t._v(" "), e("div", {
                    staticClass: "title "
                }, [ t._v("- 翻译 -") ]), t._v(" "), e("div", {
                    staticClass: "sentence "
                }, [ t._v(" " + t._s(t.translation.content)) ]), t._v(" "), e("div", {
                    staticClass: "author"
                }, [ t._v("@" + t._s(t.translation.userinfo && t.translation.userinfo.nickname)) ]), t._v(" "), e("div", {
                    staticClass: "line"
                }), t._v(" "), e("div", {
                    staticClass: "love-btn",
                    style: {
                        "background-color": t.translation.is_liked ? "#fe6135" : "#f5f5f5",
                        color: t.translation.is_liked ? "#ffffff" : "#fe6135"
                    },
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.doLike
                    }
                }, [ e("span", {
                    style: {
                        color: t.translation.is_liked ? "#fff" : "#999999"
                    }
                }, [ t._v(t._s(t.translation.like)) ]), t._v(" "), e("img", {
                    attrs: {
                        src: t.translation.is_liked ? "/static/img/love-inactive-m.png" : "/static/img/love-active-m.png"
                    }
                }) ]), t._v(" "), e("div", {
                    staticClass: "tip"
                }, [ t._v(t._s(t.translation.is_liked ? "谢谢你的鼓励" : "给我点个赞吧")) ]) ]), t._v(" "), e("div", {
                    staticClass: "login-btn",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.toLogin
                    }
                }, [ t._v("随便逛逛") ]) ]) ]) : t._e(), t._v(" "), e("modal", {
                    attrs: {
                        show: t.showContactModal,
                        option: t.contactModalOption,
                        eventid: "4",
                        mpcomid: "3"
                    },
                    on: {
                        "update:show": function(a) {
                            t.showContactModal = a;
                        },
                        complete: t.closeModal
                    }
                }), t._v(" "), t.showTipsModal ? e("div", {
                    staticClass: "tips-modal",
                    attrs: {
                        eventid: "8"
                    },
                    on: {
                        touchmove: function(t) {
                            t.stopPropagation();
                        }
                    }
                }, [ e("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.tipIndex,
                        expression: "tipIndex===1"
                    } ],
                    staticClass: "tip1"
                }, [ e("div", {
                    staticClass: "spotlight",
                    style: {
                        top: t.spotTop + "px"
                    }
                }), t._v(" "), e("img", {
                    style: {
                        top: t.tip1GifTop + "px"
                    },
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/vryjyo/6e71c841b01d0f7a2ea831280815fc6e.c16594158044066f975325b7050491dd.gif"
                    }
                }), t._v(" "), t._m(0), t._v(" "), e("div", {
                    staticClass: "next-btn",
                    attrs: {
                        eventid: "5"
                    },
                    on: {
                        click: t.nextStep
                    }
                }, [ t._v("下一步") ]) ]), t._v(" "), e("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: 2 === t.tipIndex,
                        expression: "tipIndex===2"
                    } ],
                    staticClass: "tip2"
                }, [ t._m(1), t._v(" "), e("div", {
                    staticClass: "next-btn",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        click: t.nextStep
                    }
                }, [ t._v("下一步") ]), t._v(" "), e("img", {
                    staticClass: "pic",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/vryjyo/a83b2c3bfcac6e9a581f79553cce9465.d61bf446729040ba9fb7ccbdf9b6b78a.jpg?x-oss-process=image/quality,q_80"
                    }
                }), t._v(" "), e("img", {
                    staticClass: "pointer",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/vryjyo/ebb8cd642e7fa687664a17ddc8e50e57.3aa77d14a019bacb336d3752ad5b8a68.gif"
                    }
                }) ]), t._v(" "), e("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: 3 === t.tipIndex,
                        expression: "tipIndex===3"
                    } ],
                    staticClass: "tip3"
                }, [ e("img", {
                    staticClass: "pic",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/vryjyo/28fac934bbaa146fd79c983aaf39b3fd.0fc5dbb62d93ad0cd5feef93c3e203f6.jpg?x-oss-process=image/quality,q_80"
                    }
                }), t._v(" "), e("img", {
                    staticClass: "pointer",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/vryjyo/2693edca21267861c4712966e80ec915.9ea680819a9d8ab006c2074ba347e0dd.gif"
                    }
                }), t._v(" "), t._m(2), t._v(" "), e("div", {
                    staticClass: "next-btn",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        click: t.nextStep
                    }
                }, [ t._v("知道啦") ]) ]) ]) : t._e() ], 2);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "step"
                }, [ this._v("Step 1:点击"), a("span", [ this._v("菜单栏") ]) ]);
            }, function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "step"
                }, [ this._v("Step 2: 点击"), a("span", [ this._v("添加到我的小程序") ]) ]);
            }, function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "step"
                }, [ this._v("Step 3: 用力下拉微信聊天页面，就可以从"), a("span", [ this._v("“我的小程序”") ]), this._v("进入扇贝每日一句啦～") ]);
            } ]
        };
        a.a = i;
    },
    fs6O: function(t, a, e) {
        "use strict";
        var i = e("Dd8w"), s = e.n(i), n = e("NYxO"), o = e("olkN"), c = e("vLgD");
        a.a = {
            store: o.a,
            props: [ "challenge" ],
            data: function() {
                return {};
            },
            computed: s()({}, e.i(n.a)([ "campaign" ])),
            methods: {
                toChallengeDetail: function(t) {
                    wx.navigateTo({
                        url: "/pages/challenge-detail/main?id=" + t
                    });
                },
                wxPromotion: function(t) {
                    this.$parent.showContactModal = !0, this.$parent.contactModalOption = {
                        opacity: .5,
                        title: "加入7天小计划",
                        content: "点击【确认】后，回复【1】",
                        confirmText: "确认",
                        cancelText: "取消",
                        showCancel: !0,
                        contact: !0
                    };
                },
                formSubmit: function(t) {
                    e.i(c.e)({
                        formid: t.mp.detail.formId
                    }), wx.navigateTo({
                        url: "/pages/challenge-detail/main?id=" + this.challenge.id
                    });
                }
            },
            mounted: function() {
                var t = wx.getSystemInfoSync();
                this.top = t.statusBarHeight + 7;
            }
        };
    },
    hsM7: function(t, a) {},
    nxiH: function(t, a, e) {
        "use strict";
        var i = e("woOf"), s = e.n(i), n = e("Xxa5"), o = e.n(n), c = e("exGp"), r = e.n(c), l = e("Dd8w"), p = e.n(l), d = e("Cz8s"), v = e("sK4u"), g = e("CpCs"), h = e("Ol9X"), u = e("olkN"), m = e("NYxO"), f = e("vLgD"), _ = e("0xDb");
        a.a = {
            store: u.a,
            data: function() {
                return {
                    liked: !1,
                    adList: [],
                    translation: {},
                    challenge: {},
                    showLoveModal: !1,
                    ipp: 20,
                    page: 1,
                    needLogin: !0,
                    showContactModal: !1,
                    contactModalOption: {},
                    paddingTop: 0,
                    showTipsModal: !1,
                    spotTop: 12,
                    tip1GifTop: 74,
                    tipIndex: 1
                };
            },
            computed: p()({}, e.i(m.a)([ "challengeList", "campaign", "toCampaignDetail", "userInfo" ])),
            components: {
                "c-header": d.a,
                "nav-bar": g.a,
                challenge: v.a,
                modal: h.a
            },
            methods: p()({}, e.i(m.b)([ "initToCampaignDetail" ]), e.i(m.c)([ "fetchMoreChallenges", "fetchChallenges" ]), {
                back: function() {
                    wx.navigateBack();
                },
                navTo: function(t) {
                    "OWN" === t.path_type ? wx.navigateTo({
                        url: t.path
                    }) : wx.navigateToMiniProgram({
                        appId: t.path
                    });
                },
                closeModal: function() {
                    this.showContactModal = !1;
                },
                handleScroll: function() {},
                doLike: function() {
                    var t = this;
                    return r()(o.a.mark(function a() {
                        var i, s;
                        return o.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return a.prev = 1, a.next = 4, e.i(_.a)();

                              case 4:
                                return t.needLogin = !1, a.prev = 6, a.next = 9, e.i(f.a)({
                                    translation_id: t.translation.id
                                });

                              case 9:
                                t.translation.is_liked = !0, t.translation.like = t.translation.like + 1, a.next = 18;
                                break;

                              case 14:
                                a.prev = 14, a.t0 = a.catch(6);

                              case 18:
                                a.next = 34;
                                break;

                              case 20:
                                return a.prev = 20, a.t1 = a.catch(1), t.needLogin = !0, a.next = 26, e.i(_.b)();

                              case 26:
                                return i = a.sent, s = i.code, a.next = 31, e.i(f.a)({
                                    translation_id: t.translation.id,
                                    wechat_code: s
                                });

                              case 31:
                                t.translation.is_liked = !0, t.translation.like = t.translation.like + 1;

                              case 34:
                              case "end":
                                return a.stop();
                            }
                        }, a, t, [ [ 1, 20 ], [ 6, 14 ] ]);
                    }))();
                },
                toLogin: function() {
                    this.showLoveModal = !1, this.liked = !1, this.needLogin && wx.redirectTo({
                        url: "/pages/login/main"
                    }), wx.showTabBar({
                        animation: !1
                    });
                },
                nextStep: function() {
                    this.tipIndex += 1, 4 === this.tipIndex && (this.showTipsModal = !1);
                },
                checkUpdate: function() {
                    var t = wx.getUpdateManager();
                    t.onUpdateReady(function() {
                        wx.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启应用？",
                            showCancel: !1,
                            success: function(a) {
                                a.confirm && t.applyUpdate();
                            }
                        });
                    });
                }
            }),
            onLoad: function() {
                this.userInfo.id || wx.redirectTo({
                    url: "/pages/login/main?redirect=" + encodeURIComponent("/pages/trans-challenge/main")
                });
            },
            onShow: function() {
                this.toCampaignDetail && (this.initToCampaignDetail(!1), this.campaign.challenge_id && wx.navigateTo({
                    url: "/pages/challenge-detail/main?id=" + this.campaign.challenge_id
                }));
            },
            onUnload: function() {
                s()(this.$data, this.$options.data());
            },
            mounted: function() {
                var t = this;
                return r()(o.a.mark(function a() {
                    var i, s, n, c, r, l, p, d, v;
                    return o.a.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            if (t.checkUpdate(), i = t.ipp, s = t.page, t.fetchChallenges({
                                ipp: i,
                                page: s
                            }), n = decodeURIComponent(t.$root.$mp.appOptions.query.scene), !(c = t.$root.$mp.query.translationId || n.split(":")[1])) {
                                a.next = 23;
                                break;
                            }
                            return a.prev = 8, a.next = 11, e.i(f.b)(c);

                          case 11:
                            return t.translation = a.sent, a.next = 14, e.i(f.c)(t.translation.challenge_id);

                          case 14:
                            t.challenge = a.sent, t.showLoveModal = !0, t.$root.$mp.appOptions.query.scene = "", 
                            a.next = 22;
                            break;

                          case 19:
                            a.prev = 19, a.t0 = a.catch(8), wx.redirectTo({
                                url: "/pages/login/main"
                            });

                          case 22:
                            wx.hideTabBar({
                                animation: !1
                            });

                          case 23:
                            return r = wx.getSystemInfoSync(), t.paddingTop = r.statusBarHeight + 40 + 60, l = wx.getStorageSync("add-my-mp-tip"), 
                            p = +r.version.split(".").join(""), "" === l && p >= 671 && (t.spotTop = r.statusBarHeight - 8, 
                            t.tip1GifTop = r.statusBarHeight + 54, t.showTipsModal = !0, wx.setStorage({
                                key: "add-my-mp-tip",
                                data: !1
                            })), a.prev = 30, a.next = 33, e.i(f.d)();

                          case 33:
                            d = a.sent, v = d.objects, t.adList = v, a.next = 41;
                            break;

                          case 38:
                            a.prev = 38, a.t1 = a.catch(30);

                          case 41:
                            0 === t.adList.length && (t.paddingTop = t.paddingTop - 60);

                          case 42:
                          case "end":
                            return a.stop();
                        }
                    }, a, t, [ [ 8, 19 ], [ 30, 38 ] ]);
                }))();
            },
            onReachBottom: function() {
                this.page = this.page + 1;
                var t = this.ipp, a = this.page;
                this.fetchMoreChallenges({
                    ipp: t,
                    page: a
                });
            },
            onPullDownRefresh: function() {
                var t = this;
                return r()(o.a.mark(function a() {
                    var e, i;
                    return o.a.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return t.page = 1, e = t.ipp, i = t.page, a.next = 4, t.fetchChallenges({
                                ipp: e,
                                page: i
                            });

                          case 4:
                            wx.stopPullDownRefresh();

                          case 5:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            },
            onShareAppMessage: function(t) {
                if (t.target) {
                    var a = encodeURIComponent("/pages/challenge-detail/main?id=" + t.target.id + "&from=login"), e = this.challengeList.find(function(a) {
                        return a.id === t.target.id;
                    });
                    return {
                        title: this.userInfo.nickname + "向你发来一个翻译挑战，速来应战！！",
                        path: "/pages/login/main?redirect=" + a,
                        imageUrl: e.background_img_urls[0]
                    };
                }
                return {
                    title: "原来翻译句子也可以这么好玩，安利给你喔～",
                    path: "/pages/login/main?redirect=" + encodeURIComponent("/pages/trans-challenge/main")
                };
            }
        };
    },
    sK4u: function(t, a, e) {
        "use strict";
        var i = e("fs6O"), s = e("9RSX");
        var n = function(t) {
            e("hsM7");
        }, o = e("ybqe")(i.a, s.a, n, "data-v-024ff5e3", null);
        a.a = o.exports;
    },
    uRxC: function(t, a) {}
}, [ "42ba" ]);