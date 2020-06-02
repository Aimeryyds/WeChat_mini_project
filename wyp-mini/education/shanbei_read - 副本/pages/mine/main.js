require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 26 ], {
    "0xm2": function(t, a, e) {
        "use strict";
        var n = e("yIM8"), i = e("Er/L");
        var s = function(t) {
            e("pyCR");
        }, r = e("ybqe")(n.a, i.a, s, "data-v-99480a86", null);
        a.a = r.exports;
    },
    "Er/L": function(t, a, e) {
        "use strict";
        var n = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", [ e("div", [ e("img", {
                    staticClass: "top-image",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/0e59b26e7481f600f03568d834ad7a17.0afaa6a6ed3fef3f780c0e6a2f08c0f4.jpg?x-oss-process=image/quality,q_80/resize,p_100",
                        mode: t.widthFix
                    }
                }), t._v(" "), e("div", {
                    staticClass: "avatar-container"
                }, [ e("div", {
                    staticClass: "avatar-frame"
                }, [ e("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.avatarUrl,
                        alt: ""
                    }
                }) ]), t._v(" "), e("div", {
                    staticClass: "meta"
                }, [ e("div", {
                    staticClass: "nick-name"
                }, [ t._v(t._s(t.nickName)) ]), t._v(" "), e("div", {
                    staticClass: "user-id"
                }, [ t._v("\n                    扇贝ID：" + t._s(t.userId) + "\n                    "), e("span", {
                    staticClass: "copy",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.copy
                    }
                }, [ t._v("复制") ]) ]) ]) ]), t._v(" "), e("form", {
                    staticStyle: {
                        width: "100%"
                    },
                    attrs: {
                        "report-submit": "",
                        eventid: "1"
                    },
                    on: {
                        submit: t.nav2Wordlist
                    }
                }, [ e("button", {
                    staticClass: "item",
                    attrs: {
                        "form-type": "submit"
                    }
                }, [ e("img", {
                    staticClass: "icon-img",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kdbdns/42fe57146709058989d8e9ef3db8c8ac.ad5f67be84eb91a48bac59f6b743fd4f.png",
                        alt: "icon"
                    }
                }), t._v(" "), e("div", {
                    staticClass: "item-text"
                }, [ t._v("生词本") ]), t._v(" "), e("i", {
                    staticClass: "ib ib-chevron-right chevron"
                }) ], 1) ], 1), t._v(" "), e("div", {
                    staticClass: "divider"
                }), t._v(" "), t._l(t.myItems, function(a, n) {
                    return e("form", {
                        key: n,
                        staticStyle: {
                            width: "100%"
                        },
                        attrs: {
                            "report-submit": "",
                            eventid: "2-" + n
                        },
                        on: {
                            submit: a.nav
                        }
                    }, [ e("button", {
                        class: n === t.myItems.length - 1 ? "item last" : "item",
                        attrs: {
                            "open-type": n === t.myItems.length - 2 ? "share" : "",
                            "form-type": n !== t.myItems.length - 2 ? "submit" : ""
                        }
                    }, [ e("img", {
                        staticClass: "icon-img",
                        attrs: {
                            src: a.icon,
                            alt: ""
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "item-text"
                    }, [ t._v(t._s(a.text)) ]), t._v(" "), e("i", {
                        staticClass: "ib ib-chevron-right chevron"
                    }) ], 1) ], 1);
                }) ], 2), t._v(" "), t.isShowUnlockModal ? e("unlock-modal", {
                    attrs: {
                        inputValue: "反馈",
                        eventid: "3",
                        mpcomid: "0"
                    },
                    on: {
                        closeUnlockModal: function(a) {
                            t.isShowUnlockModal = !1;
                        }
                    }
                }) : t._e(), t._v(" "), t.isShowLoginModal ? e("Login", {
                    attrs: {
                        eventid: "4",
                        mpcomid: "1"
                    },
                    on: {
                        onLogin: t.login
                    }
                }, [ e("div", [ t._v("登录后，可查看「生词本」") ]), t._v(" "), e("div", [ t._v("设置学习提醒哦～") ]) ]) : t._e() ], 1);
            },
            staticRenderFns: []
        };
        a.a = n;
    },
    ZGkv: function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("5nAL"), i = e.n(n), s = e("0xm2");
        new i.a(s.a).$mount();
    },
    pyCR: function(t, a) {},
    yIM8: function(t, a, e) {
        "use strict";
        var n = e("Xxa5"), i = e.n(n), s = e("exGp"), r = e.n(s), o = e("CXsx"), c = e("xJsL"), d = e("Apws"), m = e("IcnI"), u = e("4VVH");
        a.a = {
            store: m.a,
            data: function() {
                var t = this;
                return {
                    avatarUrl: "",
                    nickName: "",
                    isShowLoginModal: !1,
                    isShowUnlockModal: !1,
                    userId: "",
                    myItems: [ {
                        icon: "https://media-image1.baydn.com/storage_media_image/kvhfgj/f18d6ede8bf36b790424e367fbf569f0.9bd95ec70858de0f4d8c889ea354a67a.png",
                        text: "提醒设置",
                        nav: function() {
                            var a = r()(i.a.mark(function a(e) {
                                return i.a.wrap(function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                      case 0:
                                        return a.next = 2, t.handleSubmit(e);

                                      case 2:
                                        wx.navigateTo({
                                            url: "/pages/remindSetting/main"
                                        });

                                      case 3:
                                      case "end":
                                        return a.stop();
                                    }
                                }, a, t);
                            }));
                            return function(t) {
                                return a.apply(this, arguments);
                            };
                        }()
                    }, {
                        icon: "https://media-image1.baydn.com/storage_media_image/kvhfgj/ce0e19f24de7793444f56f41c3e4b083.3c162e64309dff8309b25388d2bc5dcb.png",
                        text: "产品介绍",
                        nav: function() {
                            var a = r()(i.a.mark(function a(e) {
                                return i.a.wrap(function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                      case 0:
                                        return a.next = 2, t.handleSubmit(e);

                                      case 2:
                                        wx.navigateTo({
                                            url: "/pages/intro/main"
                                        });

                                      case 3:
                                      case "end":
                                        return a.stop();
                                    }
                                }, a, t);
                            }));
                            return function(t) {
                                return a.apply(this, arguments);
                            };
                        }()
                    }, {
                        icon: "https://media-image1.baydn.com/storage_media_image/kvhfgj/da9f75b3831e980a1932e0ea6d85fdd4.a4e2f21bf2623058757f0c56c459cba6.png",
                        text: "联系我们",
                        nav: function() {
                            var a = r()(i.a.mark(function a(e) {
                                return i.a.wrap(function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                      case 0:
                                        return a.next = 2, t.handleSubmit(e);

                                      case 2:
                                        t.isShowUnlockModal = !0;

                                      case 3:
                                      case "end":
                                        return a.stop();
                                    }
                                }, a, t);
                            }));
                            return function(t) {
                                return a.apply(this, arguments);
                            };
                        }()
                    }, {
                        icon: "https://media-image1.baydn.com/storage_media_image/kvhfgj/ce8df98eebf18f38b7ca3f6ec5dfe58b.efb1be0f81e0673d7746d11c68c77bc9.png",
                        text: "分享小程序",
                        path: "",
                        nav: function() {
                            d.a.track({
                                event_code: "reading-minireader-share",
                                event_value: {
                                    channel: "share_to_friends",
                                    share_object: "recommend"
                                }
                            });
                        }
                    }, {
                        icon: "https://media-image1.baydn.com/storage_media_image/kvhfgj/e634d8502937e4008e92971698dda117.ba45e5b0b1a6e52417a467eff027ff14.png",
                        text: "更多好玩",
                        path: "",
                        nav: function() {
                            wx.navigateTo({
                                url: "/pages/avengers/main"
                            });
                        }
                    } ]
                };
            },
            components: {
                UnlockModal: o.a,
                Login: c.a
            },
            methods: {
                handleSubmit: function(t) {
                    var a = this;
                    return r()(i.a.mark(function e() {
                        return i.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return a.next = 2, d.a.collectFormId(t.mp.detail.formId);

                              case 2:
                              case "end":
                                return a.stop();
                            }
                        }, e, a);
                    }))();
                },
                nav2Wordlist: function(t) {
                    var a = this;
                    return r()(i.a.mark(function e() {
                        return i.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, a.handleSubmit(t);

                              case 2:
                                wx.navigateTo({
                                    url: "/pages/wordlist/main"
                                });

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, a);
                    }))();
                },
                copy: function() {
                    wx.setClipboardData({
                        data: "扇贝ID:" + this.userId,
                        success: function() {
                            wx.showToast({
                                title: "复制成功",
                                icon: "success",
                                duration: 2e3
                            });
                        }
                    });
                },
                login: function() {
                    this.isShowLoginModal = !1, this.load();
                },
                load: function() {
                    var t = wx.getStorageSync("userDetail");
                    if (t) {
                        var a = t.id_int;
                        this.userId = a;
                        var e = Object(u.a)(), n = e.avatar_url, i = e.nickname;
                        this.avatarUrl = n, this.nickName = i, this.isShowLoginModal = !1;
                    } else this.isShowLoginModal = !0;
                }
            },
            onShow: function() {
                this.load();
            },
            onShareAppMessage: function() {
                return {
                    title: "英文原版好书尽在这里",
                    path: "/pages/login/main?shareFrom=mine&userId=" + wx.getStorageSync("userDetail").id_int,
                    imageUrl: "https://media-image1.baydn.com/storage_media_image/kvhfgj/7a8615c10b5e74693715b6d9663357c0.2c372690c9858c4001b12beea6553365.jpg?x-oss-process=image/quality,q_80"
                };
            }
        };
    }
}, [ "ZGkv" ]);