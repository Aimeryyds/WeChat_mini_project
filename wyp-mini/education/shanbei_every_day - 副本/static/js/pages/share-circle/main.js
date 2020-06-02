global.webpackJsonp([ 5 ], {
    AEQn: function(t, a, e) {
        "use strict";
        var n = e("woOf"), s = e.n(n), i = e("Xxa5"), r = e.n(i), o = e("exGp"), c = e.n(o), d = e("Dd8w"), l = e.n(d), u = e("CpCs"), v = e("NYxO"), h = e("olkN"), m = e("0xDb"), p = e("vLgD");
        a.a = {
            store: h.a,
            components: {
                "nav-bar": u.a
            },
            data: function() {
                return {
                    paddingTop: 64,
                    challenge: {},
                    translation: {},
                    dailyQuote: {},
                    record: {},
                    mpCode: "",
                    shareOthers: !1,
                    shareTranslation: !1,
                    shareRecord: !1
                };
            },
            computed: l()({}, e.i(v.a)([ "mine", "challengeList", "userInfo" ])),
            methods: {
                back: function() {
                    wx.navigateBack();
                },
                saveImg: function() {
                    var t = this;
                    return c()(r.a.mark(function a() {
                        var n, s, i, o;
                        return r.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                if (t.mpCode) {
                                    a.next = 2;
                                    break;
                                }
                                return a.abrupt("return");

                              case 2:
                                return wx.showLoading({
                                    title: "生成中...",
                                    mask: !0
                                }), n = "", s = encodeURIComponent(t.challenge.content), n = t.shareTranslation ? "https://www.shanbay.com/soup/mobile/quote-share-translation?avatar=" + t.userInfo.avatar + "&nickname=" + encodeURIComponent(t.userInfo.nickname) + "&originContent=" + s + "&originFrom=" + encodeURIComponent(t.challenge.source) + "&mineContent=" + encodeURIComponent(t.translation.content) + "&transFrom=" + encodeURIComponent(t.translation.userinfo.nickname) + "&mpCode=" + t.mpCode + "&shareOthers=" + (t.shareOthers ? 1 : 0) : "https://www.shanbay.com/soup/mobile/quote-share-record?avatar=" + t.record.userinfo.avatar + "&nickname=" + encodeURIComponent(t.record.userinfo.nickname) + "&content=" + encodeURIComponent(t.dailyQuote.content) + "&from=" + encodeURIComponent(t.dailyQuote.author) + "&translation=" + encodeURIComponent(t.dailyQuote.translation) + "&mpCode=" + t.mpCode + "&audio_length=" + t.record.audio_length, 
                                i = {
                                    url: n,
                                    width: 375,
                                    height: 667
                                }, a.next = 12, e.i(p.i)(i);

                              case 12:
                                o = a.sent, e.i(m.c)({
                                    src: o.url
                                }).then(function(t) {
                                    wx.saveImageToPhotosAlbum({
                                        filePath: t.path,
                                        success: function() {
                                            wx.showModal({
                                                title: "存图成功",
                                                content: "图片成功保存到相册了",
                                                showCancel: !1,
                                                confirmText: "确认",
                                                confirmColor: "#72B9C3"
                                            });
                                        },
                                        fail: function(t) {
                                            wx.showModal({
                                                title: "图片生成失败",
                                                content: t.errMsg
                                            });
                                        },
                                        complete: function() {
                                            wx.hideLoading();
                                        }
                                    });
                                }).catch(function(t) {
                                    wx.hideLoading(), wx.showModal({
                                        title: "发生错误",
                                        content: "获取图片失败",
                                        showCancel: !1
                                    });
                                });

                              case 14:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                }
            },
            mounted: function() {
                var t = this;
                return c()(r.a.mark(function a() {
                    var n, s, i, o, c, d, l;
                    return r.a.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            if ("true" === t.$root.$mp.query.checkin && wx.showToast({
                                icon: "none",
                                title: "签到成功，赶快分享吧~"
                            }), n = wx.getSystemInfoSync(), t.paddingTop = n.statusBarHeight + 44, !t.$root.$mp.query.challengeId) {
                                a.next = 23;
                                break;
                            }
                            return t.shareTranslation = !0, t.challengeList.forEach(function(a) {
                                a.id === t.$root.$mp.query.challengeId && (t.challenge = a);
                            }), a.next = 9, e.i(p.b)(t.$root.$mp.query.translationId);

                          case 9:
                            if (t.translation = a.sent, t.translation.id === t.mine.id) {
                                a.next = 16;
                                break;
                            }
                            t.shareOthers = !0, t.mpCode = "https://media-image1.baydn.com/storage_media_image/vryjyo/d5520d8d26f905d8e0141782cefa6a78.81ed43de6b0a60adb4a1411c7992bad8.jpg?x-oss-process=image/quality,q_80", 
                            a.next = 21;
                            break;

                          case 16:
                            return t.shareOthers = !1, a.next = 19, e.i(p.j)({
                                width: 40,
                                auto_color: !1,
                                is_hyaline: !1,
                                r: 137,
                                g: 94,
                                b: 15,
                                scene: "translationId:" + t.translation.id,
                                page: "pages/trans-challenge/main"
                            });

                          case 19:
                            s = a.sent, t.mpCode = s.url;

                          case 21:
                            a.next = 34;
                            break;

                          case 23:
                            return t.shareRecord = !0, i = t.$root.$mp.query, o = i.dailyQuoteContent, c = i.dailyQuoteTranslation, 
                            d = i.dailyQuoteAuthor, t.dailyQuote = {
                                content: decodeURIComponent(o),
                                translation: decodeURIComponent(c),
                                author: decodeURIComponent(d)
                            }, a.next = 29, e.i(p.k)(t.$root.$mp.query.recordId);

                          case 29:
                            return t.record = a.sent, a.next = 32, e.i(p.j)({
                                width: 40,
                                auto_color: !1,
                                is_hyaline: !1,
                                r: 137,
                                g: 94,
                                b: 15,
                                scene: "recordId:" + t.record.id,
                                page: "pages/daily-quote/main"
                            });

                          case 32:
                            l = a.sent, t.mpCode = l.url;

                          case 34:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            },
            onUnload: function() {
                s()(this.$data, this.$options.data());
            },
            onShareAppMessage: function() {
                return this.shareTranslation ? this.shareOthers ? {
                    title: "原来翻译句子也可以这么好玩，安利给你喔~",
                    path: "/pages/login/main",
                    imageUrl: this.challenge.background_img_urls[0]
                } : {
                    title: "不点开，你都猜不到我的翻译作品有多优秀！！！",
                    path: "/pages/trans-challenge/main?translationId=" + this.translation.id,
                    imageUrl: this.challenge.background_img_urls[0]
                } : {
                    title: "不点开，你都猜不到我的语音作品有多优秀！！!",
                    path: "/pages/daily-quote/main?recordId=" + this.record.id
                };
            }
        };
    },
    BIH4: function(t, a, e) {
        "use strict";
        var n = e("AEQn"), s = e("L7Qw");
        var i = function(t) {
            e("DjcJ");
        }, r = e("ybqe")(n.a, s.a, i, "data-v-a60a9436", null);
        a.a = r.exports;
    },
    DjcJ: function(t, a) {},
    L7Qw: function(t, a, e) {
        "use strict";
        var n = {
            render: function() {
                var t = this, a = t.$createElement, e = t._self._c || a;
                return e("div", {
                    staticClass: "share-page",
                    style: {
                        paddingTop: t.paddingTop + "px"
                    }
                }, [ e("nav-bar", {
                    attrs: {
                        icon: "/static/img/back.png",
                        title: "分享作品",
                        handleClick: t.back,
                        mpcomid: "0"
                    }
                }), t._v(" "), t.shareTranslation ? e("div", {
                    staticClass: "content"
                }, [ e("div", {
                    staticClass: "top"
                }, [ t.shareOthers ? e("div", {
                    staticClass: "author-other"
                }, [ e("img", {
                    attrs: {
                        src: t.userInfo && t.userInfo.avatar
                    }
                }), t._v(" "), e("div", {
                    staticClass: "right"
                }, [ e("div", {
                    staticClass: "nickname"
                }, [ t._v(t._s(t.userInfo && t.userInfo.nickname)) ]), t._v(" "), e("span", [ t._v("pick一个精彩翻译作品") ]) ]) ]) : e("div", {
                    staticClass: "author"
                }, [ e("img", {
                    attrs: {
                        src: t.translation.userinfo && t.translation.userinfo.avatar
                    }
                }), t._v(" "), e("div", [ t._v(t._s(t.translation.userinfo && t.translation.userinfo.nickname)) ]), t._v(" "), e("span", [ t._v("的翻译作品") ]) ]), t._v(" "), e("div", {
                    staticClass: "sentence origin"
                }, [ e("div", {
                    staticClass: "title"
                }, [ t._v("\n                    原句\n                ") ]), t._v(" "), e("div", {
                    staticClass: "text"
                }, [ t._v(t._s(t.challenge.content)) ]), t._v(" "), e("div", {
                    staticClass: "from"
                }, [ t._v("—— " + t._s(t.challenge.source)) ]) ]), t._v(" "), e("div", {
                    staticClass: " sentence trans"
                }, [ e("div", {
                    staticClass: "title"
                }, [ t._v("\n                    翻译\n                ") ]), t._v(" "), e("div", {
                    staticClass: "text"
                }, [ t._v(t._s(t.translation.content)) ]), t._v(" "), e("div", {
                    staticClass: "from"
                }, [ t._v("—— " + t._s(t.translation.userinfo && t.translation.userinfo.nickname)) ]) ]) ]), t._v(" "), e("div", {
                    staticClass: "bottom"
                }, [ e("div", {
                    staticClass: "tips"
                }, [ e("div", [ t._v("长按识别小程序码") ]), t._v(" "), e("div", [ e("span", [ t._v(t._s(t.shareOthers ? "查看更多精彩翻译" : "快来帮我点赞吧")) ]), t._v(" "), e("img", {
                    attrs: {
                        src: "/static/img/look-right.png"
                    }
                }) ]) ]), t._v(" "), e("img", {
                    attrs: {
                        src: t.mpCode
                    }
                }) ]) ]) : t._e(), t._v(" "), t.shareRecord ? e("div", {
                    staticClass: "record-content"
                }, [ e("div", {
                    staticClass: "inner"
                }, [ e("div", {
                    staticClass: "author"
                }, [ e("img", {
                    attrs: {
                        src: t.record.userinfo && t.record.userinfo.avatar
                    }
                }), t._v(" "), e("div", [ t._v(t._s(t.record.userinfo && t.record.userinfo.nickname)) ]), t._v(" "), e("span", [ t._v("的语音作品") ]) ]), t._v(" "), e("div", {
                    staticClass: "record"
                }, [ t._v("\n                " + t._s(t.record.audio_length) + "\n            ") ]), t._v(" "), e("div", {
                    staticClass: "origin-sentence"
                }, [ t._v("\n                " + t._s(t.dailyQuote.content) + "\n            ") ]), t._v(" "), e("div", {
                    staticClass: "translation"
                }, [ t._v(t._s(t.dailyQuote.translation)) ]), t._v(" "), e("div", {
                    staticClass: "from"
                }, [ t._v("—— " + t._s(t.dailyQuote.author)) ]), t._v(" "), e("div", {
                    staticClass: "bottom-code"
                }, [ t._m(0), t._v(" "), e("img", {
                    attrs: {
                        src: t.mpCode
                    }
                }) ]) ]) ]) : t._e(), t._v(" "), e("div", {
                    staticClass: "share-btns"
                }, [ e("div", {
                    staticClass: "tip"
                }, [ t._v("分享上方卡片，召唤好友点赞") ]), t._v(" "), e("div", {
                    staticClass: "btns"
                }, [ e("button", {
                    staticClass: "share share-friend",
                    attrs: {
                        "open-type": "share"
                    }
                }, [ e("img", {
                    attrs: {
                        src: "/static/img/share-friend.png"
                    }
                }), t._v(" "), e("div", [ t._v("微信好友") ]) ]), t._v(" "), e("div", {
                    staticClass: "sep"
                }, [ t._v("- - - -") ]), t._v(" "), e("div", {
                    staticClass: " share share-circle",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.saveImg
                    }
                }, [ e("img", {
                    attrs: {
                        src: "/static/img/share-circle.png"
                    }
                }), t._v(" "), e("div", [ t._v("生成海报") ]) ]) ], 1) ]) ], 1);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "left"
                }, [ a("img", {
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/ccdbwr/96caf63038a166a849543af7b3c6e33a.3399d7dbef8a6636e02d2a633c93d160.png"
                    }
                }), this._v(" "), a("span", [ this._v("长按识别小程序码") ]), this._v(" "), a("div", [ this._v("给我的语音作品点赞吧") ]) ]);
            } ]
        };
        a.a = n;
    },
    Tu8Q: function(t, a, e) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var n = e("5nAL"), s = e.n(n), i = e("BIH4");
        new s.a(i.a).$mount(), a.default = {
            config: {
                disableScroll: !0
            }
        };
    }
}, [ "Tu8Q" ]);