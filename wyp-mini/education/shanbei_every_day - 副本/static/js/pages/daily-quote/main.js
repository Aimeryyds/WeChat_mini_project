global.webpackJsonp([ 1 ], {
    DD9s: function(t, e, i) {
        "use strict";
        var n = i("Xxa5"), s = i.n(n), a = i("exGp"), o = i.n(a), r = i("woOf"), c = i.n(r), d = i("LBPb"), l = i("vLgD"), u = wx.createInnerAudioContext();
        u.autoplay = !0, u.onError(function(t) {}), e.a = {
            props: {
                quoteId: {
                    type: String
                },
                isLogin: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    isRecordActive: !1,
                    recordComplete: !1,
                    tempFilePath: "",
                    isRecordPlaying: !1
                };
            },
            methods: {
                onHide: function() {
                    c()(this.$data, this.$options.data());
                },
                handleRecordStart: function() {
                    var t = this;
                    this.isLogin ? (this.$parent.innerAudioContext.stop(), i.i(d.a)() ? i.i(d.c)({
                        duration: 3e4,
                        format: "mp3",
                        numberOfChannels: 1,
                        sampleRate: 16e3,
                        encodeBitRate: 32e3
                    }, function() {
                        t.startTime = new Date().getTime(), t.isRecordActive = !0;
                    }, function(e) {
                        var i = e.tempFilePath;
                        t.tempFilePath = i, t.isRecordActive = !1, t.recordComplete = !0;
                    }) : wx.authorize({
                        scope: "scope.record",
                        success: function() {
                            i.i(d.b)(!0);
                        }
                    })) : this.$emit("toLogin");
                },
                handleRecordStop: function() {
                    var t = this;
                    i.i(d.a)() && (this.endTime = new Date().getTime(), this.endTime - this.startTime < 1e3 ? (wx.showToast({
                        icon: "none",
                        title: "录音时间太短啦"
                    }), this.isRecordActive = !1, i.i(d.d)(0, function(e) {
                        var i = e.tempFilePath;
                        t.tempFilePath = i;
                    })) : (this.isRecordActive = !1, this.recordComplete = !0, i.i(d.d)()));
                },
                preListen: function() {
                    this.isRecordPlaying ? (u.stop(), this.isRecordPlaying = !1) : (u.src = this.tempFilePath, 
                    u.play(), this.isRecordPlaying = !0);
                },
                reRecord: function() {
                    this.recordComplete = !1;
                },
                publishRecord: function() {
                    var t = this;
                    return o()(s.a.mark(function e() {
                        var n, a, o;
                        return s.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n = Math.round((t.endTime - t.startTime) / 1e3) + "''", wx.showLoading({
                                    title: "上传中..."
                                }), e.prev = 2, e.next = 5, i.i(d.e)(t.tempFilePath);

                              case 5:
                                return a = e.sent, o = a.key, e.next = 9, i.i(l.C)({
                                    user_audio_name: o,
                                    quote_id: t.quoteId,
                                    audio_length: n
                                });

                              case 9:
                                wx.hideLoading(), t.recordComplete = !1, t.$emit("uploadSuccess"), e.next = 18;
                                break;

                              case 14:
                                e.prev = 14, e.t0 = e.catch(2), wx.hideLoading(), wx.showToast({
                                    icon: "none",
                                    title: "上传失败"
                                });

                              case 18:
                              case "end":
                                return e.stop();
                            }
                        }, e, t, [ [ 2, 14 ] ]);
                    }))();
                }
            },
            mounted: function() {
                var t = this;
                u.onStop(function() {
                    t.isRecordPlaying = !1;
                }), u.onEnded(function() {
                    t.isRecordPlaying = !1;
                });
            }
        };
    },
    FDKK: function(t, e, i) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    staticClass: "record-btns"
                }, [ i("div", {
                    staticClass: "re-record",
                    style: {
                        display: t.recordComplete ? "flex" : "none"
                    },
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.reRecord
                    }
                }, [ t._m(0), t._v(" "), i("div", {
                    staticClass: "hint"
                }, [ t._v("重录") ]) ]), t._v(" "), i("div", {
                    staticClass: "pre-listen",
                    style: {
                        display: t.recordComplete ? "flex" : "none"
                    },
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.preListen
                    }
                }, [ i("div", {
                    staticClass: "btn-m"
                }, [ i("img", {
                    attrs: {
                        src: t.isRecordPlaying ? "/static/img/record-stop.png" : "/static/img/record-play.png"
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "hint"
                }, [ t._v("试听") ]) ]), t._v(" "), i("div", {
                    staticClass: "publish",
                    style: {
                        display: t.recordComplete ? "flex" : "none"
                    },
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.publishRecord
                    }
                }, [ t._m(1), t._v(" "), i("div", {
                    staticClass: "hint"
                }, [ t._v("发布") ]) ]), t._v(" "), i("div", {
                    staticClass: "record",
                    style: {
                        display: t.recordComplete ? "none" : "flex"
                    }
                }, [ i("div", {
                    staticClass: "record-wrapper",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        touchstart: t.handleRecordStart,
                        touchend: t.handleRecordStop
                    }
                }, [ i("div", {
                    staticClass: "shadow-m ",
                    class: {
                        active: t.isRecordActive
                    }
                }), t._v(" "), i("div", {
                    staticClass: "shadow-s ",
                    class: {
                        active: t.isRecordActive
                    }
                }), t._v(" "), t._m(2) ]), t._v(" "), i("div", {
                    staticClass: "hint",
                    style: {
                        color: t.isRecordActive ? "#fff" : "#999999"
                    }
                }, [ t._v("长按录音") ]) ]), t._v(" "), t.isRecordActive ? i("div", {
                    staticClass: "record-toast"
                }, [ i("img", {
                    attrs: {
                        src: "/static/img/recording.gif"
                    }
                }), t._v(" "), i("span", [ t._v("正在录音，松开结束") ]) ]) : t._e() ]);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "btn-s"
                }, [ e("img", {
                    attrs: {
                        src: "/static/img/record-restart.png"
                    }
                }) ]);
            }, function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "btn-s"
                }, [ e("img", {
                    attrs: {
                        src: "/static/img/record-publish.png"
                    }
                }) ]);
            }, function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "btn-m"
                }, [ e("img", {
                    attrs: {
                        src: "/static/img/mic.png"
                    }
                }) ]);
            } ]
        };
        e.a = n;
    },
    PC2X: function(t, e, i) {
        "use strict";
        var n = i("exlN"), s = i("bfGl");
        var a = function(t) {
            i("eEDd");
        }, o = i("ybqe")(n.a, s.a, a, "data-v-0a4b8a42", null);
        e.a = o.exports;
    },
    QDBY: function(t, e, i) {
        "use strict";
        var n = i("DD9s"), s = i("FDKK");
        var a = function(t) {
            i("umdQ");
        }, o = i("ybqe")(n.a, s.a, a, "data-v-b98615da", null);
        e.a = o.exports;
    },
    UPVr: function(t, e, i) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    staticClass: "daily-quote",
                    attrs: {
                        eventid: "14"
                    },
                    on: {
                        click: function(e) {
                            t.clickHandle("test click", e);
                        }
                    }
                }, [ i("div", {
                    staticClass: "top-scroll"
                }, [ t._v(t._s(t.noneTip)) ]), t._v(" "), i("swiper", {
                    staticClass: "swiper",
                    attrs: {
                        "indicator-dots": !1,
                        "current-item-id": t.itemDate,
                        vertical: !0,
                        eventid: "1"
                    },
                    on: {
                        change: t.handleChange
                    }
                }, t._l(t.dailyQuoteList, function(e, n) {
                    return i("swiper-item", {
                        key: e.id,
                        attrs: {
                            "item-id": e.assign_date,
                            mpcomid: "1-" + n
                        }
                    }, [ i("card", {
                        attrs: {
                            item: e,
                            isLogin: !!t.userInfo.id,
                            eventid: "0-" + n,
                            mpcomid: "0-" + n
                        },
                        on: {
                            showRecordModal: t.showRecordModal,
                            clickCard: function(e) {
                                t.isShowRecordModal = !1;
                            }
                        }
                    }) ], 1);
                })), t._v(" "), i("div", {
                    staticClass: "records-modal",
                    class: {
                        show: t.isShowRecordModal,
                        hide: !t.isShowRecordModal
                    }
                }, [ i("img", {
                    staticClass: "close",
                    attrs: {
                        src: "/static/img/close-modal.png",
                        eventid: "2"
                    },
                    on: {
                        touchstart: t.closeRecordModal
                    }
                }), t._v(" "), i("div", {
                    staticClass: "title"
                }, [ t._v("录音作品(" + t._s(t.total) + ")") ]), t._v(" "), i("div", {
                    staticClass: "sentence"
                }, [ i("div", [ t._v(t._s(t.dailyQuoteList[t.currentIndex] && t.dailyQuoteList[t.currentIndex].content)) ]) ]), t._v(" "), i("scroll-view", {
                    staticClass: "scroll-view",
                    style: {
                        paddingBottom: t.showRecordBtns ? t.paddingBottom + 80 + "px" : "0"
                    },
                    attrs: {
                        "scroll-y": "",
                        eventid: "4"
                    },
                    on: {
                        scrolltolower: t.fetchMoreRecords
                    }
                }, [ t.mine.id || t.dailyRecordList.length > 0 ? i("records", {
                    attrs: {
                        mine: t.mine,
                        recordList: t.dailyRecordList,
                        isLogin: !!t.userInfo.id,
                        eventid: "3",
                        mpcomid: "2"
                    },
                    on: {
                        delete: t.delRecord,
                        share: t.handleShare,
                        play: t.handlePlay,
                        toLogin: t.toLogin
                    }
                }) : t._e(), t._v(" "), t.showSofa ? i("img", {
                    staticClass: "empty",
                    attrs: {
                        src: "/static/img/empty-translation.png"
                    }
                }) : t._e() ], 1), t._v(" "), i("div", {
                    staticClass: "bottom",
                    style: {
                        height: t.paddingBottom + 86 + "px",
                        paddingBottom: t.paddingBottom + "px",
                        display: t.showRecordBtns ? "flex" : "none"
                    }
                }, [ i("record-btns", {
                    ref: "recordBtns",
                    attrs: {
                        quoteId: t.dailyQuoteList[t.currentIndex] && t.dailyQuoteList[t.currentIndex].id,
                        isLogin: !!t.userInfo.id,
                        eventid: "5",
                        mpcomid: "3"
                    },
                    on: {
                        uploadSuccess: t.handleUploadSuccess,
                        toLogin: t.toLogin
                    }
                }) ], 1) ], 1), t._v(" "), t.showLoveModal ? i("div", {
                    staticClass: "love-modal",
                    attrs: {
                        eventid: "9"
                    },
                    on: {
                        touchmove: function(t) {
                            t.stopPropagation();
                        }
                    }
                }, [ i("div", {
                    staticClass: "inner"
                }, [ i("div", {
                    staticClass: "content"
                }, [ i("div", {
                    staticClass: "author"
                }, [ i("img", {
                    attrs: {
                        src: t.record.userinfo && t.record.userinfo.avatar
                    }
                }), t._v(" "), i("div", [ t._v(t._s(t.record.userinfo && t.record.userinfo.nickname)) ]), t._v(" "), i("span", [ t._v("的语音作品") ]) ]), t._v(" "), i("div", {
                    staticClass: "record",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        click: t.playShareRecord
                    }
                }, [ t._v("\n                    " + t._s(t.record.audio_length) + "\n                ") ]), t._v(" "), i("div", {
                    staticClass: "origin-sentence"
                }, [ t._v("\n                    " + t._s(t.dailyQuote.content) + "\n                ") ]), t._v(" "), i("div", {
                    staticClass: "translation"
                }, [ t._v(t._s(t.dailyQuote.translation)) ]), t._v(" "), i("div", {
                    staticClass: "from"
                }, [ t._v("—— " + t._s(t.dailyQuote.author)) ]), t._v(" "), i("div", {
                    staticClass: "line"
                }), t._v(" "), i("div", {
                    staticClass: "love-btn",
                    style: {
                        "background-color": t.record.is_liked ? "#fe6135" : "#f5f5f5",
                        color: t.record.is_liked ? "#ffffff" : "#fe6135"
                    },
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        click: t.doLike
                    }
                }, [ i("span", {
                    style: {
                        color: t.record.is_liked ? "#fff" : "#999999"
                    }
                }, [ t._v(t._s(t.record.like)) ]), t._v(" "), i("img", {
                    attrs: {
                        src: t.record.is_liked ? "/static/img/love-inactive-m.png" : "/static/img/love-active-m.png"
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "tip"
                }, [ t._v(t._s(t.record.is_liked ? "谢谢你的鼓励" : "给我点个赞吧")) ]) ]), t._v(" "), i("div", {
                    staticClass: "login-btn",
                    attrs: {
                        eventid: "8"
                    },
                    on: {
                        click: t.toLogin
                    }
                }, [ t._v("随便逛逛") ]) ]) ]) : t._e(), t._v(" "), t.showTips ? i("div", {
                    staticClass: "new-dailyquote-tip",
                    attrs: {
                        eventid: "10"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.clickTip(e);
                        },
                        touchmove: function(t) {
                            t.stopPropagation();
                        }
                    }
                }, [ i("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.tipCount,
                        expression: "tipCount===1"
                    } ],
                    staticClass: "tip1"
                }, [ i("img", {
                    staticClass: "tip1-1",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/vryjyo/d81b186796df840b12baca08333260aa.f6ba03b22abfdebc87f8f70a219ff3fa.png"
                    }
                }), t._v(" "), i("img", {
                    staticClass: "tip1-2",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/vryjyo/b666154bf69d65f98d07b47628b239a9.df6a5b78c20df41ec288b052e9eebb06.png"
                    }
                }), t._v(" "), t._m(0) ]), t._v(" "), i("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: 1 === t.tipCount,
                        expression: "tipCount===1"
                    } ],
                    staticClass: "next-step"
                }), t._v(" "), i("img", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: 2 === t.tipCount,
                        expression: "tipCount===2"
                    } ],
                    staticClass: "tip2",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/ccdbwr/024f6b002efa0f4cd34128c9f19df13e.b43edf10d26a9885e745f4c074012133.png"
                    }
                }) ]) : t._e(), t._v(" "), i("img", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowAdImg,
                        expression: "isShowAdImg"
                    } ],
                    staticClass: "ad",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/vryjyo/fb52ab68b01e3ad8f8c5f79a251fadf7.41f9dd3b1d84f5ee47b36dac5bf55c96.gif",
                        eventid: "11"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.isShowAdModal = !0;
                        }
                    }
                }), t._v(" "), i("div", {
                    staticClass: "ad-modal",
                    style: {
                        display: t.isShowAdModal ? "flex" : "none"
                    },
                    attrs: {
                        eventid: "13"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation();
                        },
                        touchmove: function(t) {
                            t.stopPropagation();
                        }
                    }
                }, [ i("div", {
                    staticClass: "modal-inner",
                    class: {
                        show: t.isShowAdModal
                    }
                }, [ i("img", {
                    staticClass: "header",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/ccdbwr/2e5c168e73fa40928587968b66c54fdd.a3dfb506ee7f5e3cd71dc49c39748bf8.png"
                    }
                }), t._v(" "), t._m(1), t._v(" "), i("div", {
                    staticClass: "footer"
                }, [ i("div", {
                    staticClass: "cancel",
                    attrs: {
                        eventid: "12"
                    },
                    on: {
                        click: function(e) {
                            t.isShowAdModal = !1;
                        }
                    }
                }, [ t._v("取消") ]), t._v(" "), i("button", {
                    staticClass: "sure",
                    attrs: {
                        "open-type": "contact"
                    }
                }, [ t._v("确定") ]) ], 1) ]) ]) ], 1);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "description"
                }, [ e("span", {
                    staticStyle: {
                        color: "#e5b557"
                    }
                }, [ this._v("上下滑动") ]), this._v("，查看更多精选美句") ]);
            }, function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "body"
                }, [ e("div", {
                    staticClass: "title"
                }, [ this._v("加入跟读小计划，免费领取视频课") ]), this._v(" "), e("div", {
                    staticClass: "content"
                }, [ this._v("点击【确认】-回复【1】领取") ]) ]);
            } ]
        };
        e.a = n;
    },
    WTtl: function(t, e) {},
    YkPo: function(t, e, i) {
        "use strict";
        var n = i("woOf"), s = i.n(n), a = i("Gu7T"), o = i.n(a), r = i("Xxa5"), c = i.n(r), d = i("exGp"), l = i.n(d), u = i("Dd8w"), v = i.n(u), h = i("/WWA"), p = i("vLgD"), m = i("0xDb"), f = i("NYxO"), g = i("olkN"), _ = i("PJh5"), x = i.n(_), y = i("UCfo"), C = i("4Lsl"), w = i("PC2X"), k = i("QDBY");
        e.a = {
            store: g.a,
            data: function() {
                return {
                    needLogin: !0,
                    dailyQuoteList: [],
                    dailyRecordList: [],
                    mine: {},
                    dailyQuote: {},
                    record: {},
                    ipp: 21,
                    page: 1,
                    total: 0,
                    currentIndex: 0,
                    isShowTabBar: !0,
                    itemDate: "",
                    showTips: !1,
                    tipCount: 1,
                    isShowRecordModal: !1,
                    showSofa: !1,
                    showRecordBtns: !1,
                    showLoveModal: !1,
                    isHandlingLike: !1,
                    paddingBottom: 0,
                    noneTip: "",
                    isShowAdModal: !1,
                    isShowAdImg: !0
                };
            },
            components: {
                card: y.a,
                tools: C.a,
                records: w.a,
                "record-btns": k.a
            },
            computed: v()({}, i.i(f.a)([ "loginRedirect", "userInfo" ])),
            watch: {
                isShowRecordModal: function(t) {
                    t ? (this.isShowAdImg = !1, wx.hideTabBar({
                        animation: !1
                    })) : (this.isShowAdImg = !0, wx.showTabBar({
                        animation: !1
                    }), this.mine = {}, this.dailyRecordList = [], this.total = 0);
                },
                currentIndex: function() {
                    this.$refs.recordBtns.onHide();
                }
            },
            onLoad: function() {
                var t = this;
                return l()(c.a.mark(function e() {
                    var n, s, a, o, r;
                    return c.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            if (wx.showTabBar({
                                animation: !1
                            }), t.userInfo.id) {
                                e.next = 51;
                                break;
                            }
                            return e.prev = 2, n = wx.getStorageSync("full_cookie"), e.next = 6, i.i(m.e)();

                          case 6:
                            if (!(n && n.auth_token && new Date(n.auth_token.Expires).getTime() > new Date().getTime())) {
                                e.next = 11;
                                break;
                            }
                            t.initCampaign(), t.initUserInfo(), e.next = 27;
                            break;

                          case 11:
                            return e.next = 13, i.i(m.b)();

                          case 13:
                            return s = e.sent, a = s.code, e.prev = 15, e.next = 18, i.i(p.x)({
                                code: a,
                                app_name: h.g
                            });

                          case 18:
                            return e.next = 20, i.i(p.w)();

                          case 20:
                            t.initCampaign(), t.initUserInfo(), e.next = 27;
                            break;

                          case 24:
                            e.prev = 24, e.t0 = e.catch(15);

                          case 27:
                            e.next = 51;
                            break;

                          case 29:
                            return e.prev = 29, e.t1 = e.catch(2), e.next = 33, i.i(m.b)();

                          case 33:
                            return o = e.sent, r = o.code, e.next = 37, i.i(m.f)();

                          case 37:
                            if (!e.sent.authSetting["scope.userInfo"]) {
                                e.next = 51;
                                break;
                            }
                            return e.prev = 39, e.next = 42, i.i(p.x)({
                                code: r,
                                app_name: h.g
                            });

                          case 42:
                            return e.next = 44, i.i(p.w)();

                          case 44:
                            t.initCampaign(), t.initUserInfo(), e.next = 51;
                            break;

                          case 48:
                            e.prev = 48, e.t2 = e.catch(39);

                          case 51:
                          case "end":
                            return e.stop();
                        }
                    }, e, t, [ [ 2, 29 ], [ 15, 24 ], [ 39, 48 ] ]);
                }))();
            },
            methods: v()({}, i.i(f.b)([ "initLoginRedirect" ]), i.i(f.c)([ "initCampaign", "initUserInfo" ]), {
                clickHandle: function() {
                    this.isShowAdImg = !this.isShowAdImg;
                },
                getQuoteList: function(t, e) {
                    var n = this;
                    return l()(c.a.mark(function s() {
                        var a;
                        return c.a.wrap(function(s) {
                            for (;;) switch (s.prev = s.next) {
                              case 0:
                                return s.next = 2, i.i(p.r)(h.d + "/quote/batch/?start=" + t + "&end=" + e);

                              case 2:
                                (a = s.sent).data.map(function(t) {
                                    t.origin_img_urls[0] = t.origin_img_urls[0].split("?")[0].split("@")[0], t.day = t.assign_date.split("-")[2], 
                                    t.month = x()(t.assign_date).format("MMM"), t.year = t.assign_date.split("-")[0], 
                                    t.isPlaying = !1;
                                }), n.dailyQuoteList = a.data.reverse();

                              case 6:
                              case "end":
                                return s.stop();
                            }
                        }, s, n);
                    }))();
                },
                initAudioContext: function() {
                    var t = this;
                    this.innerAudioContext = wx.createInnerAudioContext(), this.innerAudioContext.onError(function(t) {}), 
                    this.innerAudioContext.onEnded(function(e) {
                        t.dailyQuoteList[t.currentIndex].isPlaying = !1;
                    }), this.innerAudioContext.onStop(function(e) {
                        t.dailyQuoteList[t.currentIndex].isPlaying = !1;
                    });
                },
                handleChange: function(t) {
                    "touch" === t.mp.detail.source && (this.innerAudioContext.stop(), this.dailyQuoteList[this.currentIndex].isPlaying = !1, 
                    this.currentIndex = t.mp.detail.current, this.itemDate = this.dailyQuoteList[this.currentIndex].assign_date);
                },
                handlePlay: function() {
                    this.innerAudioContext.stop();
                },
                playShareRecord: function() {
                    this.innerAudioContext.src = this.record.user_audio_urls[0], this.innerAudioContext.play();
                },
                handleLike: function(t, e) {
                    var n = this;
                    return l()(c.a.mark(function s() {
                        var a, o;
                        return c.a.wrap(function(s) {
                            for (;;) switch (s.prev = s.next) {
                              case 0:
                                if (!n.isHandlingLike) {
                                    s.next = 2;
                                    break;
                                }
                                return s.abrupt("return");

                              case 2:
                                if (n.isHandlingLike = !0, s.prev = 3, !e) {
                                    s.next = 10;
                                    break;
                                }
                                return s.next = 7, i.i(p.y)({
                                    useraudio_id: t
                                });

                              case 7:
                                n.mine.id === t ? (n.mine.is_liked = !0, n.mine.like = n.mine.like + 1) : ((a = n.dailyRecordList.find(function(e) {
                                    return e.id === t;
                                })).is_liked = !0, a.like++), s.next = 13;
                                break;

                              case 10:
                                return s.next = 12, i.i(p.z)(t);

                              case 12:
                                n.mine.id === t ? (n.mine.is_liked = !1, n.mine.like = n.mine.like - 1) : ((o = n.dailyRecordList.find(function(e) {
                                    return e.id === t;
                                })).is_liked = !1, o.like--);

                              case 13:
                                s.next = 18;
                                break;

                              case 15:
                                s.prev = 15, s.t0 = s.catch(3);

                              case 18:
                                n.isHandlingLike = !1;

                              case 19:
                              case "end":
                                return s.stop();
                            }
                        }, s, n, [ [ 3, 15 ] ]);
                    }))();
                },
                delRecord: function(t) {
                    var e = this;
                    return l()(c.a.mark(function n() {
                        return c.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return n.next = 2, i.i(m.d)({
                                    title: "提示",
                                    content: "确定要删除这条录音吗？"
                                });

                              case 2:
                                if (!n.sent.confirm) {
                                    n.next = 10;
                                    break;
                                }
                                return n.next = 6, i.i(p.m)(t);

                              case 6:
                                wx.showToast({
                                    icon: "none",
                                    title: "删除成功！"
                                }), e.showRecordBtns = !0, e.mine = {}, e.total = e.total - 1;

                              case 10:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                handleShare: function(t, e) {
                    wx.navigateTo({
                        url: "/pages/share-circle/main?dailyQuoteContent=" + encodeURIComponent(this.dailyQuoteList[this.currentIndex].content) + "&dailyQuoteTranslation=" + encodeURIComponent(this.dailyQuoteList[this.currentIndex].translation) + "&dailyQuoteAuthor=" + encodeURIComponent(this.dailyQuoteList[this.currentIndex].author) + "&recordId=" + this.mine.id + "&checkin=" + e
                    });
                },
                showRecordModal: function() {
                    this.isShowRecordModal = !0, this.refreshRecords();
                },
                closeRecordModal: function() {
                    this.isShowRecordModal = !1;
                },
                handleUploadSuccess: function() {
                    this.showRecordBtns = !1, this.refreshRecords();
                },
                refreshRecords: function() {
                    var t = this;
                    return l()(c.a.mark(function e() {
                        var n, s, a;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.page = 1, n = t.ipp, s = t.page, e.next = 4, i.i(p.A)({
                                    ipp: n,
                                    page: s,
                                    quote_id: t.dailyQuoteList[t.currentIndex].id
                                });

                              case 4:
                                (a = e.sent).objects.map(function(t) {
                                    t.isPlaying = !1, t.showDate = x()(t.created_at).format("M-D H:mm");
                                }), a.mine.isPlaying = !1, a.mine.showDate = x()(a.mine.created_at).format("M-D H:mm"), 
                                0 === a.objects.length ? t.showSofa = !0 : t.showSofa = !1, t.mine = a.mine, t.total = a.total, 
                                t.dailyRecordList = a.objects.filter(function(e) {
                                    return e.id !== t.mine.id;
                                }), t.mine.id ? t.showRecordBtns = !1 : t.showRecordBtns = !0;

                              case 14:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                fetchMoreRecords: function() {
                    var t = this;
                    return l()(c.a.mark(function e() {
                        var n, s, a;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.page = t.page + 1, n = t.ipp, s = t.page, e.next = 5, i.i(p.A)({
                                    ipp: n,
                                    page: s,
                                    quote_id: t.dailyQuoteList[t.currentIndex].id
                                });

                              case 5:
                                0 === (a = e.sent).objects.length ? wx.showToast({
                                    icon: "none",
                                    title: "没有更多了"
                                }) : (a.objects.map(function(t) {
                                    t.isPlaying = !1, t.showDate = x()(t.created_at).format("M-D H:mm");
                                }), t.dailyRecordList = [].concat(o()(t.dailyRecordList), o()(a.objects.filter(function(e) {
                                    return e.id !== t.mine.id;
                                }))));

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                doLike: function() {
                    var t = this;
                    return l()(c.a.mark(function e() {
                        var n, s;
                        return c.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.prev = 1, e.next = 4, i.i(m.a)();

                              case 4:
                                return t.needLogin = !1, e.prev = 6, e.next = 9, i.i(p.y)({
                                    useraudio_id: t.record.id
                                });

                              case 9:
                                t.record.is_liked = !0, t.record.like = t.record.like + 1, e.next = 18;
                                break;

                              case 14:
                                e.prev = 14, e.t0 = e.catch(6);

                              case 18:
                                e.next = 34;
                                break;

                              case 20:
                                return e.prev = 20, e.t1 = e.catch(1), t.needLogin = !0, e.next = 26, i.i(m.b)();

                              case 26:
                                return n = e.sent, s = n.code, e.next = 31, i.i(p.y)({
                                    useraudio_id: t.record.id,
                                    wechat_code: s
                                });

                              case 31:
                                t.record.is_liked = !0, t.record.like = t.record.like + 1;

                              case 34:
                              case "end":
                                return e.stop();
                            }
                        }, e, t, [ [ 1, 20 ], [ 6, 14 ] ]);
                    }))();
                },
                toLogin: function() {
                    if (this.showLoveModal = !1, this.liked = !1, this.needLogin) {
                        var t = encodeURIComponent("/pages/daily-quote/main?date=" + this.dailyQuoteList[this.currentIndex].assign_date);
                        wx.redirectTo({
                            url: "/pages/login/main?redirect=" + t
                        });
                    }
                    wx.showTabBar({
                        animation: !1
                    });
                },
                clickTip: function() {
                    this.tipCount++, 3 === this.tipCount && (this.showTips = !1);
                },
                fixIphoneX: function() {
                    wx.getSystemInfoSync().model.startsWith("iPhone X") && (this.paddingBottom = 20);
                },
                checkUpdate: function() {
                    var t = wx.getUpdateManager();
                    t.onUpdateReady(function() {
                        wx.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，是否重启应用？",
                            showCancel: !1,
                            success: function(e) {
                                e.confirm && t.applyUpdate();
                            }
                        });
                    });
                }
            }),
            onUnload: function() {
                s()(this.$data, this.$options.data());
            },
            mounted: function() {
                var t = this;
                return l()(c.a.mark(function e() {
                    var n, s, a, o;
                    return c.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = "", s = "", n = x()().subtract(30, "days"), s = x()().add(1, "days"), 
                            n = n.format("YYYY-MM-DD"), s = s.format("YYYY-MM-DD"), e.next = 8, t.getQuoteList(n, s);

                          case 8:
                            if (t.loginRedirect && "date" === t.loginRedirect.split("=")[0] ? (t.itemDate = t.loginRedirect.split("=")[1], 
                            x()(t.itemDate).isBefore(x()().subtract(31, "days")) && (t.itemDate = x()(new Date()).format("YYYY-MM-DD")), 
                            t.currentIndex = t.dailyQuoteList.findIndex(function(e) {
                                return e.assign_date === t.itemDate;
                            }), t.initLoginRedirect(void 0)) : t.itemDate = t.dailyQuoteList[0].assign_date, 
                            t.initAudioContext(), "" === wx.getStorageSync("new-dailyquote-tip") && (t.showTips = !0, 
                            wx.setStorage({
                                key: "new-dailyquote-tip",
                                data: !1
                            })), a = decodeURIComponent(t.$root.$mp.appOptions.query.scene), !(o = t.$root.$mp.query.recordId || a.split(":")[1])) {
                                e.next = 34;
                                break;
                            }
                            return t, e.prev = 17, e.next = 20, i.i(p.k)(o);

                          case 20:
                            return t.record = e.sent, e.next = 23, i.i(p.B)(t.record.quote_id);

                          case 23:
                            t.dailyQuote = e.sent, t.showLoveModal = !0, t.isShowRecordModal = !1, t.$root.$mp.appOptions.query.scene = "", 
                            e.next = 33;
                            break;

                          case 29:
                            e.prev = 29, e.t0 = e.catch(17), wx.redirectTo({
                                url: "/pages/login/main"
                            });

                          case 33:
                            wx.hideTabBar({
                                animation: !1
                            });

                          case 34:
                            t.fixIphoneX(), t.noneTip = "没了哦，试试挑战翻译吧";

                          case 36:
                          case "end":
                            return e.stop();
                        }
                    }, e, t, [ [ 17, 29 ] ]);
                }))();
            },
            onShareAppMessage: function() {
                var t = encodeURIComponent("/pages/daily-quote/main?date=" + this.dailyQuoteList[this.currentIndex].assign_date);
                return {
                    title: "" + this.dailyQuoteList[this.currentIndex].translation,
                    path: "/pages/login/main?redirect=" + t,
                    imageUrl: "" + this.dailyQuoteList[this.currentIndex].origin_img_urls[0]
                };
            }
        };
    },
    bfGl: function(t, e, i) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    staticClass: "records"
                }, [ t.mine.id ? i("div", {
                    staticClass: "record"
                }, [ i("div", {
                    staticClass: "content"
                }, [ i("img", {
                    staticClass: "avatar",
                    attrs: {
                        src: t.mine.userinfo && t.mine.userinfo.avatar
                    }
                }), t._v(" "), i("div", {
                    staticClass: "right"
                }, [ i("div", {
                    staticClass: "top"
                }, [ i("div", {
                    staticClass: "nickname"
                }, [ t._v(t._s(t.mine.userinfo && t.mine.userinfo.nickname)) ]), t._v(" "), i("div", {
                    staticClass: "tool"
                }, [ i("div", {
                    staticClass: "love",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            t.like(-1);
                        }
                    }
                }, [ i("span", {
                    style: {
                        color: t.mine.is_liked ? "#fe6135" : "#999999"
                    }
                }, [ t._v(t._s(t.mine.like)) ]), t._v(" "), i("img", {
                    staticClass: "icon",
                    attrs: {
                        src: t.mine.is_liked ? "/static/img/love-active.png" : "/static/img/love-inactive.png"
                    }
                }) ]) ]) ]), t._v(" "), i("div", {
                    staticClass: "content"
                }, [ i("div", {
                    staticClass: "sound",
                    class: {
                        playing: t.mine.isPlaying
                    },
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: function(e) {
                            t.playRecord(-1);
                        }
                    }
                }, [ i("img", {
                    attrs: {
                        src: t.mine.isPlaying ? "/static/img/sound-playing.gif" : "/static/img/sound-line.png"
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "duration"
                }, [ t._v(t._s(t.mine.audio_length)) ]) ]), t._v(" "), i("div", {
                    staticClass: "bottom"
                }, [ i("span", {
                    staticClass: "date"
                }, [ t._v(t._s(t.mine.showDate)) ]), t._v(" "), i("span", {
                    staticClass: "del",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: function(e) {
                            t.delRecord(t.mine.id);
                        }
                    }
                }, [ t._v("删除") ]) ]) ]) ]), t._v(" "), i("div", {
                    staticClass: "share-btn",
                    attrs: {
                        id: "share-my-record",
                        eventid: "3"
                    },
                    on: {
                        click: function(e) {
                            t.toShareOrCheckin(t.mine);
                        }
                    }
                }, [ t._v(t._s(t.showCheckin ? "签到" : "分享集赞")) ]), t._v(" "), i("div", {
                    staticClass: "line"
                }) ]) : t._e(), t._v(" "), t._l(t.recordList, function(e, n) {
                    return i("div", {
                        key: e.id,
                        staticClass: "record"
                    }, [ i("div", {
                        staticClass: "content"
                    }, [ i("img", {
                        staticClass: "avatar",
                        attrs: {
                            src: e.userinfo && e.userinfo.avatar
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "right"
                    }, [ i("div", {
                        staticClass: "top"
                    }, [ i("div", {
                        staticClass: "nickname"
                    }, [ t._v(t._s(e.userinfo && e.userinfo.nickname)) ]), t._v(" "), i("div", {
                        staticClass: "tool"
                    }, [ i("div", {
                        staticClass: "love",
                        attrs: {
                            eventid: "4-" + n
                        },
                        on: {
                            click: function(e) {
                                t.like(n);
                            }
                        }
                    }, [ i("span", {
                        style: {
                            color: e.is_liked ? "#fe6135" : "#999999"
                        }
                    }, [ t._v(t._s(e.like)) ]), t._v(" "), i("img", {
                        staticClass: "icon",
                        attrs: {
                            src: e.is_liked ? "/static/img/love-active.png" : "/static/img/love-inactive.png"
                        }
                    }) ]) ]) ]), t._v(" "), i("div", {
                        staticClass: "content"
                    }, [ i("div", {
                        staticClass: "sound",
                        class: {
                            playing: e.isPlaying
                        },
                        attrs: {
                            eventid: "5-" + n
                        },
                        on: {
                            click: function(e) {
                                t.playRecord(n);
                            }
                        }
                    }, [ i("img", {
                        attrs: {
                            src: e.isPlaying ? "/static/img/sound-playing.gif" : "/static/img/sound-line.png"
                        }
                    }) ]), t._v(" "), i("div", {
                        staticClass: "duration"
                    }, [ t._v(t._s(e.audio_length)) ]) ]), t._v(" "), i("div", {
                        staticClass: "bottom"
                    }, [ i("span", {
                        staticClass: "date"
                    }, [ t._v(t._s(e.showDate)) ]) ]) ]) ]), t._v(" "), i("div", {
                        staticClass: "line"
                    }) ]);
                }) ], 2);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    diCA: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("5nAL"), s = i.n(n), a = i("tqbj");
        new s.a(a.a).$mount(), e.default = {
            config: {
                disableScroll: !0,
                backgroundColor: "#2e2e33"
            }
        };
    },
    eEDd: function(t, e) {},
    exlN: function(t, e, i) {
        "use strict";
        var n = i("Xxa5"), s = i.n(n), a = i("exGp"), o = i.n(a), r = i("Dd8w"), c = i.n(r), d = i("PJh5"), l = i.n(d), u = i("NYxO"), v = i("olkN"), h = i("vLgD");
        e.a = {
            store: v.a,
            props: {
                recordList: {
                    type: Array
                },
                mine: {
                    type: Object
                },
                isLogin: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {
                    isHandlingLike: !1
                };
            },
            computed: c()({}, i.i(u.a)([ "userInfo" ]), {
                showCheckin: function() {
                    return l()(this.mine.created_at).format("YYYY-MM-DD") === l()().format("YYYY-MM-DD") && !this.userInfo.today_is_checked;
                }
            }),
            methods: c()({}, i.i(u.c)([ "initUserInfo" ]), {
                delRecord: function(t) {
                    this.$emit("delete", t);
                },
                like: function(t) {
                    var e = this;
                    return o()(s.a.mark(function n() {
                        var a, o, r, c, d;
                        return s.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (e.isLogin) {
                                    n.next = 3;
                                    break;
                                }
                                return e.$emit("toLogin"), n.abrupt("return");

                              case 3:
                                if (!e.isHandlingLike) {
                                    n.next = 5;
                                    break;
                                }
                                return n.abrupt("return");

                              case 5:
                                if (a = null, a = -1 === t ? e.mine : e.recordList[t], o = a.id, r = !a.is_liked, 
                                e.isHandlingLike = !0, n.prev = 10, !r) {
                                    n.next = 17;
                                    break;
                                }
                                return n.next = 14, i.i(h.y)({
                                    useraudio_id: o
                                });

                              case 14:
                                -1 === t ? (e.mine.is_liked = !0, e.mine.like = e.mine.like + 1) : ((c = e.recordList[t]).is_liked = !0, 
                                c.like++), n.next = 20;
                                break;

                              case 17:
                                return n.next = 19, i.i(h.z)(o);

                              case 19:
                                -1 === t ? (e.mine.is_liked = !1, e.mine.like = e.mine.like - 1) : ((d = e.recordList[t]).is_liked = !1, 
                                d.like--);

                              case 20:
                                n.next = 25;
                                break;

                              case 22:
                                n.prev = 22, n.t0 = n.catch(10);

                              case 25:
                                e.isHandlingLike = !1;

                              case 26:
                              case "end":
                                return n.stop();
                            }
                        }, n, e, [ [ 10, 22 ] ]);
                    }))();
                },
                toShareOrCheckin: function(t) {
                    var e = this;
                    return o()(s.a.mark(function n() {
                        return s.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                if (e.showCheckin) {
                                    n.next = 5;
                                    break;
                                }
                                e.$emit("share", t, !1), n.next = 9;
                                break;

                              case 5:
                                return n.next = 7, i.i(h.D)();

                              case 7:
                                e.initUserInfo(), e.$emit("share", t, !0);

                              case 9:
                              case "end":
                                return n.stop();
                            }
                        }, n, e);
                    }))();
                },
                playRecord: function(t) {
                    this.$emit("play"), -1 === t ? (this.recordAudioContext.src = this.mine.user_audio_urls[0], 
                    this.recordAudioContext.play(), this.mine.isPlaying = !0, this.recordList.forEach(function(t) {
                        t.isPlaying = !1;
                    })) : (this.recordAudioContext.src = this.recordList[t].user_audio_urls[0], this.recordAudioContext.play(), 
                    this.mine.isPlaying = !1, this.recordList.forEach(function(e, i) {
                        e.isPlaying = i === t;
                    }));
                }
            }),
            mounted: function() {
                var t = this;
                this.recordAudioContext = wx.createInnerAudioContext(), this.recordAudioContext.onError(function(t) {}), 
                this.recordAudioContext.onEnded(function() {
                    t.recordList.forEach(function(t) {
                        t.isPlaying = !1;
                    }), t.mine.isPlaying = !1;
                });
            }
        };
    },
    tqbj: function(t, e, i) {
        "use strict";
        var n = i("YkPo"), s = i("UPVr");
        var a = function(t) {
            i("WTtl");
        }, o = i("ybqe")(n.a, s.a, a, "data-v-51549797", null);
        e.a = o.exports;
    },
    umdQ: function(t, e) {}
}, [ "diCA" ]);