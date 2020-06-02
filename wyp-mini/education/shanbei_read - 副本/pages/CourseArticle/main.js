require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 2 ], {
    "+3nK": function(t, e, i) {
        "use strict";
        var n = i("CE4d"), s = i("J7F4");
        var a = function(t) {
            i("1kHi");
        }, r = i("ybqe")(n.a, s.a, a, "data-v-4d76e132", null);
        e.a = r.exports;
    },
    0: function(t, e) {},
    1: function(t, e) {},
    "1kHi": function(t, e) {},
    CE4d: function(t, e, i) {
        "use strict";
        var n = i("Xxa5"), s = i.n(n), a = i("exGp"), r = i.n(a), c = i("Dd8w"), o = i.n(c), d = i("NYxO"), u = i("IcnI"), l = i("BAfL"), v = (i.n(l), 
        i("uNpT")), _ = (i.n(v), i("1IwQ")), p = i("D9eU"), f = i("M/dh"), h = i("iGEL"), b = i("Apws").a.sensorLog, g = null, m = null;
        e.a = {
            components: {
                WordModal: f.a,
                WordDetail: h.a
            },
            store: u.a,
            data: function() {
                return {
                    articleId: "",
                    userCourseId: "",
                    titleCn: "",
                    titleEn: "",
                    paras: [],
                    isWordModalShow: !1,
                    isWordDetailShow: !1,
                    word: "",
                    bilingual: "",
                    currentWord: "",
                    currentWordIdx: "",
                    currentSentId: "",
                    introduction: "",
                    questionList: [],
                    OPTIONS: [ "A", "B", "C" ],
                    startTime: null,
                    isFinished: !1,
                    isHideArticleGuide: !1,
                    audioIsAvailable: !1,
                    currentAudioIndex: -1,
                    sentenceAudios: [],
                    isPaused: !0,
                    currentParaId: "",
                    currentSentText: "",
                    bookNameCn: ""
                };
            },
            computed: o()({}, Object(d.c)({
                isIpx: function(t) {
                    return t.globalData.isIpx;
                }
            }), {
                progress: function() {
                    return Math.round(100 * (this.currentAudioIndex + 1) / this.sentenceAudios.length);
                }
            }),
            mounted: function() {
                this.startTime = new Date();
                var t = wx.getStorageSync("isHideArticleGuide");
                this.isHideArticleGuide = t;
            },
            onShow: function() {
                var t = this;
                return r()(s.a.mark(function e() {
                    var i, n, a, r, c, o, d, u, v, _, f, h, m, x, w, C, I, k, y;
                    return s.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return i = t.$route.query, n = i.userCourseId, a = i.articleId, t.articleId = a, 
                            t.userCourseId = n, e.next = 5, Object(p.g)(a);

                          case 5:
                            return r = e.sent, c = r.title_cn, o = r.title_en, d = r.book_name_cn, u = r.content, 
                            v = r.is_finished, _ = r.book_services, t.isFinished = v, t.titleCn = c, t.titleEn = o, 
                            t.bookNameCn = d, f = Object(l.xml2js)(u, {
                                compact: !0,
                                spaces: 4
                            }), (h = f.article_content.para).forEach(function(t) {
                                t.img && !Array.isArray(t.img) && (t.img = [ t.img ], t.sent = []), t.sent && !Array.isArray(t.sent) && (t.sent = [ t.sent ]), 
                                t.sent.forEach(function(t) {
                                    t.isHighlight = !1, t.words = t._cdata.split(" ");
                                });
                            }), t.paras = h, e.next = 21, Object(p.i)(a);

                          case 21:
                            return m = e.sent, x = m.introduction, t.introduction = x, e.next = 26, Object(p.w)(a, n);

                          case 26:
                            if (w = e.sent, C = w.objects, t.questionList = C, !(I = _.find(function(t) {
                                return 3 === t.object_type;
                            }))) {
                                e.next = 42;
                                break;
                            }
                            if (t.audioIsAvailable = I.is_on_sale || I.has_purchased, !t.audioIsAvailable) {
                                e.next = 42;
                                break;
                            }
                            return t.currentAudioIndex = -1, t.isPaused = !0, e.next = 37, Object(p.h)(a);

                          case 37:
                            k = e.sent, y = k.sentence_audios, t.sentenceAudios = y, (g = wx.createInnerAudioContext()).onEnded(t.next);

                          case 42:
                            b({
                                event_code: "RDreading_BookCourseStep1_PV",
                                event_value: {
                                    chaptertitle_cn: t.titleCn
                                }
                            });

                          case 43:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            onUnload: function() {
                g && g.stop();
            },
            methods: {
                hideGuide: function() {
                    this.isHideArticleGuide = !0, wx.setStorage({
                        key: "isHideArticleGuide",
                        data: !0
                    });
                },
                clickWord: function(t, e, i, n) {
                    this.currentWord = t, this.currentWordIdx = i, this.currentSentId = e._attributes.id, 
                    this.currentSentText = e._cdata, this.currentParaId = n._attributes.id, this.isWordModalShow = !1;
                    var s = t.replace(/[’“”'".,\/#!?$%\^&\*;:{}=\-_`~()123456789]/g, "").replace(/\s{2,}/g, " ");
                    this.word = s.toLowerCase(), this.isWordModalShow = !0;
                },
                clickSent: function(t, e, i) {
                    var n = this;
                    return r()(s.a.mark(function t() {
                        var i, a, r;
                        return s.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, Object(p.n)(e._attributes.id);

                              case 2:
                                i = t.sent, a = i.text, r = i.sentence_ids, n.bilingual = Object(v.decode)(a), n.paras.forEach(function(t) {
                                    t.sent.forEach(function(t) {
                                        r.includes(t._attributes.id) ? t.isHighlight = !0 : t.isHighlight = !1, r[r.length - 1] === t._attributes.id ? t.isShowBilingual = !0 : t.isShowBilingual = !1;
                                    });
                                });

                              case 7:
                              case "end":
                                return t.stop();
                            }
                        }, t, n);
                    }))();
                },
                finishArticle: function() {
                    var t = this;
                    return r()(s.a.mark(function e() {
                        var i;
                        return s.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (i = Math.round((new Date() - t.startTime) / 1e3), t.isFinished) {
                                    e.next = 11;
                                    break;
                                }
                                return e.prev = 2, e.next = 5, Object(p.A)(t.articleId, {
                                    used_time: i
                                });

                              case 5:
                                e.next = 11;
                                break;

                              case 7:
                                return e.prev = 7, e.t0 = e.catch(2), wx.showToast({
                                    title: "欲速则不达，你读得太快啦~",
                                    icon: "none"
                                }), e.abrupt("return");

                              case 11:
                                if (!t.questionList.some(function(t) {
                                    return null === t.user_answer_index;
                                })) {
                                    e.next = 14;
                                    break;
                                }
                                return wx.showToast({
                                    title: "做完测试后，点击底部按钮进入下一环节~",
                                    icon: "none"
                                }), e.abrupt("return");

                              case 14:
                                return b({
                                    event_code: "RDreading_BookCourse_StudyTime",
                                    event_value: {
                                        chaptertitle_cn: t.articleTitle,
                                        study_time: i,
                                        study_content: "全文泛读"
                                    }
                                }), e.next = 17, Object(p.d)(t.userCourseId, {
                                    article_id: t.articleId,
                                    finished_part: 1,
                                    used_time: i
                                });

                              case 17:
                                Object(_.a)(), t.$router.back({
                                    path: "/pages/CourseArticleIndex/main",
                                    query: {
                                        userCourseId: t.userCourseId,
                                        articleId: t.articleId,
                                        articleTitle: t.articleTitle
                                    }
                                });

                              case 19:
                              case "end":
                                return e.stop();
                            }
                        }, e, t, [ [ 2, 7 ] ]);
                    }))();
                },
                reset: function() {
                    this.isWordModalShow = !1, this.word = "", this.bilingual = "", this.currentWord = "", 
                    this.currentSentIdx = "", this.currentSentId = "", this.paras.forEach(function(t) {
                        t.sent.forEach(function(t) {
                            t.isHighlight = !1, t.isShowBilingual = !1;
                        });
                    });
                },
                showWordDetail: function() {
                    this.isWordModalShow = !1, this.isWordDetailShow = !0;
                },
                closeWordDetail: function() {
                    this.isWordDetailShow = !1, this.currentWord = "";
                },
                select: function(t, e) {
                    var i = this;
                    return r()(s.a.mark(function n() {
                        return s.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return i.questionList[t].user_answer_index = e, i.questionList[t].correct_index === e ? (m = wx.createInnerAudioContext()).src = "https://media-audio1.baydn.com/storage_media_audio/kvhfgj/99d26087e04f5a57f72e7a537dd10ab0.21361e8853e681cf04de812cc9787539.mp3" : (m = wx.createInnerAudioContext()).src = "https://media-audio1.baydn.com/storage_media_audio/kvhfgj/7aa011d5509fab11937d2abcd9fdbe1b.b232b8447f93c3b155fd0576ab2ffe5e.mp3", 
                                m.play(), n.next = 5, Object(p.e)({
                                    question_id: i.questionList[t].id,
                                    user_answer_index: e,
                                    user_book_course_id: i.userCourseId
                                });

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n, i);
                    }))();
                },
                replay: function() {
                    this.currentAudioIndex = 0, g.src = this.sentenceAudios[this.currentAudioIndex].audio_urls[0], 
                    g.seek(0), g.play(), setTimeout(function() {
                        wx.pageScrollTo({
                            selector: ".audio-highlight"
                        });
                    }, 0);
                },
                playOrPause: function() {
                    -1 === this.currentAudioIndex && (this.currentAudioIndex = 0, g.src = this.sentenceAudios[this.currentAudioIndex].audio_urls[0]), 
                    g.paused ? (g.play(), this.isPaused = !1) : (g.pause(), this.isPaused = !0);
                },
                prev: function() {
                    0 === this.currentAudioIndex ? g.seek(0) : (this.currentAudioIndex -= 1, g.src = this.sentenceAudios[this.currentAudioIndex].audio_urls[0], 
                    setTimeout(function() {
                        wx.pageScrollTo({
                            selector: ".audio-highlight"
                        });
                    }, 0)), this.playOrPause();
                },
                next: function() {
                    if (this.currentAudioIndex === this.sentenceAudios.length - 1) return this.currentAudioIndex = -1, 
                    void (this.isPaused = !0);
                    this.currentAudioIndex += 1, g.src = this.sentenceAudios[this.currentAudioIndex].audio_urls[0], 
                    wx.pageScrollTo({
                        selector: ".audio-highlight"
                    }), this.playOrPause();
                }
            }
        };
    },
    DZGz: function(t, e, i) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    staticClass: "word-modal",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation();
                        }
                    }
                }, [ i("i", {
                    staticClass: "ib ib-times close",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.closeWordModal(e);
                        }
                    }
                }), t._v(" "), t.wordNotFound ? i("div", {
                    staticClass: "flex-vhc not-found"
                }, [ t._v("未找到单词：" + t._s(t.word)) ]) : i("div", [ i("div", {
                    staticClass: "meta"
                }, [ i("div", {
                    staticClass: "info"
                }, [ i("div", {
                    staticClass: "word"
                }, [ t._v(t._s(t.word)) ]), t._v(" "), i("div", {
                    staticClass: "ipa-wrap"
                }, [ i("div", {
                    staticClass: "ipa"
                }, [ t._v("/" + t._s(t.ipa) + "/") ]), t._v(" "), i("img", {
                    staticClass: "speaker",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/661e57279ffca35926579f903b457601.27223c5d547b3ee4dc32e63d84c88970.png",
                        eventid: "1"
                    },
                    on: {
                        click: t.playSpeakerAudio
                    }
                }) ]) ]) ]), t._v(" "), t.COLLINS_DICT_ID === t.dictId ? i("div", {
                    staticClass: "collins"
                }, [ i("img", {
                    staticClass: "icon",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kdbdns/30956c0ef6087c64f2cc777cefb27f9a.8cab7d3f577396beacd86d16aaec1f36.png"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "text"
                }, [ t._v("正在使用") ]) ]) : t._e(), t._v(" "), i("div", {
                    staticClass: "def-en"
                }, [ i("rich-text", {
                    attrs: {
                        nodes: "{{enDef}}",
                        mpcomid: "0"
                    }
                }) ], 1), t._v(" "), i("div", {
                    staticClass: "def-cn"
                }, [ i("div", [ t._v(t._s(t.pos)) ]), t._v(" "), i("div", [ t._v(t._s(t.cnDef)) ]) ]), t._v(" "), i("div", {
                    staticClass: "btn-container"
                }, [ t.isAdded ? i("div", {
                    staticClass: "is-added"
                }, [ i("i", {
                    staticClass: "ib ib-check check"
                }), t._v("已加入生词本\n            ") ], 1) : i("button", {
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.addToFavourites(e);
                        }
                    }
                }, [ t._v("+加入生词本") ]), t._v(" "), i("button", {
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(e) {
                            e.stopPropagation(), t.showMore(e);
                        }
                    }
                }, [ t._v("查看全部") ]) ], 1) ]) ], 1);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    J7F4: function(t, e, i) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    class: [ "course-article", {
                        "show-guide": !t.isHideArticleGuide
                    }, {
                        "fix-iphonex": t.isIpx
                    } ],
                    style: {
                        "padding-bottom": t.sentenceAudios.length ? "256rpx" : ""
                    },
                    attrs: {
                        eventid: "13"
                    },
                    on: {
                        click: t.reset
                    }
                }, [ i("div", {
                    staticClass: "title-en"
                }, [ t._v(t._s(t.titleEn)) ]), t._v(" "), i("div", {
                    staticClass: "title-cn"
                }, [ t._v(t._s(t.titleCn)) ]), t._v(" "), i("div", {
                    staticClass: "introduction"
                }, [ i("div", {
                    staticClass: "label"
                }, [ t._v("·导读") ]), t._v(" "), i("div", {
                    staticClass: "meta"
                }, [ i("div", {
                    staticClass: "intro"
                }, [ t._v(t._s(t.introduction)) ]) ]) ]), t._v(" "), i("div", {
                    staticClass: "intro-question"
                }, [ i("div", {
                    staticClass: "label"
                }, [ t._v("·带着问题读文章") ]), t._v(" "), i("div", {
                    staticClass: "question"
                }, t._l(t.questionList, function(e, n) {
                    return i("div", {
                        key: n
                    }, [ t._v(t._s(e.question)) ]);
                })) ]), t._v(" "), t._l(t.paras, function(e, n) {
                    return i("div", {
                        key: n,
                        staticClass: "paragraph"
                    }, [ t._l(e.img, function(t, e) {
                        return i("span", {
                            key: e,
                            staticClass: "image"
                        }, [ i("img", {
                            attrs: {
                                src: t.url._text,
                                mode: "widthFix"
                            }
                        }) ]);
                    }), t._v(" "), i("div", t._l(e.sent, function(s, a) {
                        return i("span", {
                            key: a,
                            staticClass: "sent",
                            class: {
                                "audio-highlight": -1 !== t.currentAudioIndex && s._attributes.id === t.sentenceAudios[t.currentAudioIndex].sentence_id,
                                highlight: s.isHighlight
                            },
                            attrs: {
                                eventid: "1-" + n + "-" + a
                            },
                            on: {
                                click: function(e) {
                                    e.stopPropagation(), t.clickSent(s);
                                },
                                longpress: function(i) {
                                    t.clickSent(e, s, a);
                                }
                            }
                        }, [ t._l(s.words, function(r, c) {
                            return i("span", {
                                key: c,
                                attrs: {
                                    eventid: "0-" + n + "-" + a + "-" + c
                                },
                                on: {
                                    click: function(i) {
                                        t.clickWord(r, s, c, e);
                                    }
                                }
                            }, [ i("span", {
                                class: {
                                    highlight: r === t.currentWord && s._attributes.id === t.currentSentId && c === t.currentWordIdx
                                }
                            }, [ t._v(t._s(r)) ]), t._v(" "), i("span", [ t._v(t._s(" ")) ]) ]);
                        }), t._v(" "), s.isShowBilingual ? i("view", {
                            staticClass: "bilingual-container"
                        }, [ t._v(t._s(t.bilingual)) ]) : t._e() ], 2);
                    })) ], 2);
                }), t._v(" "), i("div", {
                    staticClass: "test"
                }, [ i("div", {
                    staticClass: "label"
                }, [ t._v("·小测试") ]), t._v(" "), t._l(t.questionList, function(e, n) {
                    return i("div", {
                        key: n
                    }, [ i("div", {
                        staticClass: "question"
                    }, [ t._v(t._s(e.question)) ]), t._v(" "), i("div", {
                        staticClass: "option-list"
                    }, [ null !== e.user_answer_index ? i("div", t._l(e.options, function(s, a) {
                        return i("div", {
                            key: a,
                            staticClass: "option",
                            class: e.correct_index === a ? "right" : e.user_answer_index === a ? "wrong" : "",
                            attrs: {
                                eventid: "2-" + n + "-" + a
                            },
                            on: {
                                click: function(e) {
                                    t.select(n, a);
                                }
                            }
                        }, [ i("div", [ t._v(t._s(t.OPTIONS[a] + ". " + s)) ]), t._v(" "), e.correct_index === a ? i("i", {
                            staticClass: "ib ib-check",
                            staticStyle: {
                                "font-weight": "bold"
                            }
                        }) : t._e(), t._v(" "), e.user_answer_index === a && e.user_answer_index !== e.correct_index ? i("i", {
                            staticClass: "ib ib-times",
                            staticStyle: {
                                "font-weight": "bold"
                            }
                        }) : t._e() ], 1);
                    })) : i("div", t._l(e.options, function(e, s) {
                        return i("div", {
                            key: s,
                            staticClass: "option",
                            attrs: {
                                eventid: "3-" + n + "-" + s
                            },
                            on: {
                                click: function(e) {
                                    t.select(n, s);
                                }
                            }
                        }, [ t._v(t._s(t.OPTIONS[s] + ". " + e)) ]);
                    })) ]) ]);
                }) ], 2), t._v(" "), i("button", {
                    staticClass: "finish flex-vhc",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: t.finishArticle
                    }
                }, [ t._v("完成") ]), t._v(" "), t.sentenceAudios.length ? i("div", {
                    class: [ "audio-control-container", {
                        "fix-iphonex": t.isIpx
                    } ]
                }, [ i("div", {
                    staticClass: "progress"
                }, [ i("div", {
                    staticClass: "number"
                }, [ t._v(t._s(t.currentAudioIndex + 1) + "/" + t._s(t.sentenceAudios.length)) ]), t._v(" "), i("div", {
                    staticClass: "bar"
                }, [ i("div", {
                    staticClass: "indicator",
                    style: {
                        width: t.progress + "%"
                    }
                }, [ i("div", {
                    staticClass: "circle"
                }) ]) ]), t._v(" "), i("img", {
                    staticClass: "replay",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/5fbe43f5242608cfeb7d594f9b093493.6475d5f63300151cba8938b1064b9cab.png",
                        eventid: "5"
                    },
                    on: {
                        click: t.replay
                    }
                }) ]), t._v(" "), i("div", {
                    staticClass: "audio-control"
                }, [ i("img", {
                    staticClass: "prev",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/28eb6768941e2a50c5c00a01adb0cf6f.b9553d2b68765d46c09683a2be889317.png",
                        eventid: "6"
                    },
                    on: {
                        click: t.prev
                    }
                }), t._v(" "), t.isPaused ? i("img", {
                    staticClass: "play",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/391fc4e60c58774ed0928d8c7907cf89.be87bcdec49be7a0714b39e625b8d8d3.png",
                        eventid: "8"
                    },
                    on: {
                        click: t.playOrPause
                    }
                }) : i("img", {
                    staticClass: "pause",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/b23ccf635d4b6707e5fb974138769776.367538b4b9b4aee1ca26257a8bc22b71.png",
                        eventid: "7"
                    },
                    on: {
                        click: t.playOrPause
                    }
                }), t._v(" "), i("img", {
                    staticClass: "next",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/1200891db53d512d4b94d1b0d4627320.9fb2504d541baa6d83cadb84301c7658.png",
                        eventid: "9"
                    },
                    on: {
                        click: t.next
                    }
                }) ]) ]) : t._e(), t._v(" "), t.isWordModalShow ? i("word-modal", {
                    attrs: {
                        articleId: t.articleId,
                        title: t.bookNameCn,
                        word: t.word,
                        paraId: t.currentParaId,
                        sentId: t.currentSentId,
                        sent: t.currentSentText,
                        eventid: "10",
                        mpcomid: "0"
                    },
                    on: {
                        "show-word-detail": t.showWordDetail
                    }
                }) : t._e(), t._v(" "), t.isWordDetailShow ? i("word-detail", {
                    attrs: {
                        articleId: t.articleId,
                        title: t.bookNameCn,
                        word: t.word,
                        paraId: t.currentParaId,
                        sentId: t.currentSentId,
                        sent: t.currentSentText,
                        eventid: "11",
                        mpcomid: "1"
                    },
                    on: {
                        "close-word-detail": t.closeWordDetail
                    }
                }) : t._e(), t._v(" "), t.isHideArticleGuide ? t._e() : i("img", {
                    staticClass: "guide",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/19388ec18343a4af84b36d4f0f12f794.d4fbeb7aa5aa7b716290f04b17ca5a65.png",
                        eventid: "12"
                    },
                    on: {
                        click: t.hideGuide
                    }
                }) ], 2);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    "M/dh": function(t, e, i) {
        "use strict";
        var n = i("SJu1"), s = i("DZGz");
        var a = function(t) {
            i("me/P");
        }, r = i("ybqe")(n.a, s.a, a, "data-v-e4cbed90", null);
        e.a = r.exports;
    },
    R0Sn: function(t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var n = i("5nAL"), s = i.n(n), a = i("+3nK");
        new s.a(a.a).$mount();
    },
    SJu1: function(t, e, i) {
        "use strict";
        var n = i("d7EF"), s = i.n(n), a = i("Xxa5"), r = i.n(a), c = i("exGp"), o = i.n(c), d = i("D9eU");
        e.a = {
            props: {
                word: {
                    type: String,
                    required: !0
                },
                articleId: {
                    type: String,
                    required: !0
                },
                title: {
                    type: String,
                    required: !0
                },
                paraId: {
                    type: String,
                    required: !0
                },
                sentId: {
                    type: String,
                    required: !0
                },
                sent: {
                    type: String,
                    required: !0
                }
            },
            data: function() {
                return {
                    wordId: "",
                    wordContent: "",
                    ipa: "",
                    pos: "",
                    enDef: "",
                    cnDef: "",
                    isAdded: !1,
                    dictId: "",
                    wordNotFound: !0,
                    audioSrc: "",
                    audioCtx: null,
                    COLLINS_DICT_ID: "ncyli"
                };
            },
            watch: {
                word: function() {
                    var t = o()(r.a.mark(function t(e) {
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                this.lookupWord(e);

                              case 1:
                              case "end":
                                return t.stop();
                            }
                        }, t, this);
                    }));
                    return function(e) {
                        return t.apply(this, arguments);
                    };
                }()
            },
            created: function() {
                this.lookupWord(this.word);
            },
            methods: {
                genUniqueCode: function(t) {
                    var e = t.match(/A(.*)P(.*)S(.*)/);
                    return e[1] + "-" + e[2] + "-" + this.wordId;
                },
                addToFavourites: function() {
                    var t = this;
                    return o()(r.a.mark(function e() {
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Object(d.b)({
                                    summary: t.word,
                                    vocab_id: t.wordId,
                                    business_id: 1,
                                    source_content: t.sent,
                                    source_name: t.title,
                                    paragraph_id: t.paraId,
                                    sentence_id: t.sentId,
                                    article_id: t.articleId
                                });

                              case 2:
                                t.isAdded = !0;

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                lookupWord: function(t) {
                    var e = this;
                    return o()(r.a.mark(function i() {
                        var n, s, a, c, o, u, l, v, _, p, f, h, b, g;
                        return r.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.prev = 0, i.next = 3, Object(d.t)(t);

                              case 3:
                                n = i.sent, s = n.id, n.content, a = n.audios, c = n.definitions, e.wordId = s, 
                                e.wordNotFound = !1, o = a[0].us, u = o.ipa, l = o.urls, e.ipa = u, e.audioSrc = l[0], 
                                e.audioCtx = wx.createInnerAudioContext(), e.audioCtx.src = e.audioSrc, v = c.cn, 
                                _ = c.en, p = v[0], f = p.pos, h = p.def, b = p.dict_id, e.pos = f, e.cnDef = h, 
                                e.dictId = b, g = _[0].def, e.enDef = g.replace(/vocab>/g, "b>"), e.checkFavourite(s), 
                                i.next = 28;
                                break;

                              case 25:
                                i.prev = 25, i.t0 = i.catch(0), 404 === i.t0.statusCode && (e.wordNotFound = !0);

                              case 28:
                              case "end":
                                return i.stop();
                            }
                        }, i, e, [ [ 0, 25 ] ]);
                    }))();
                },
                checkFavourite: function(t) {
                    var e = this;
                    return o()(r.a.mark(function i() {
                        var n, a, c;
                        return r.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.next = 2, Object(d.a)(t);

                              case 2:
                                n = i.sent, a = s()(n.objects, 1), c = a[0].exists, e.isAdded = c;

                              case 6:
                              case "end":
                                return i.stop();
                            }
                        }, i, e);
                    }))();
                },
                playSpeakerAudio: function() {
                    this.audioCtx.play();
                },
                showMore: function() {
                    this.$emit("show-word-detail");
                },
                closeWordModal: function() {
                    this.$parent.isWordModalShow = !1, this.$parent.currentWord = "";
                }
            }
        };
    },
    Tlzh: function(t, e, i) {
        "use strict";
        var n = {
            render: function() {
                var t = this, e = t.$createElement, i = t._self._c || e;
                return i("div", {
                    staticClass: "word-detail",
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(t) {
                            t.stopPropagation();
                        }
                    }
                }, [ i("i", {
                    staticClass: "ib ib-times close",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.closeWordDetail
                    }
                }), t._v(" "), i("div", {
                    staticClass: "meta-container"
                }, [ i("div", {
                    staticClass: "meta"
                }, [ i("div", {
                    staticClass: "info"
                }, [ i("div", {
                    staticClass: "word"
                }, [ t._v(t._s(t.word)) ]), t._v(" "), i("div", {
                    staticClass: "ipa-wrap"
                }, [ i("div", {
                    staticClass: "ipa"
                }, [ t._v("/" + t._s(t.ipa) + "/") ]), t._v(" "), i("img", {
                    staticClass: "speaker",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/661e57279ffca35926579f903b457601.27223c5d547b3ee4dc32e63d84c88970.png",
                        eventid: "1"
                    },
                    on: {
                        click: t.playSpeakerAudio
                    }
                }) ]) ]) ]), t._v(" "), t.COLLINS_DICT_ID === t.dictId ? i("div", {
                    staticClass: "collins"
                }, [ i("img", {
                    staticClass: "icon",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kdbdns/30956c0ef6087c64f2cc777cefb27f9a.8cab7d3f577396beacd86d16aaec1f36.png"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "text"
                }, [ t._v("正在使用") ]) ]) : t._e(), t._v(" "), t._l(t.cnDefs, function(e, n) {
                    return i("div", {
                        key: n
                    }, [ i("div", {
                        staticClass: "def-cn"
                    }, [ i("rich-text", {
                        staticClass: "def-en",
                        attrs: {
                            nodes: "{{enDefs[index].def}}",
                            mpcomid: "0-" + n
                        }
                    }), t._v(" "), i("div", [ t._v(t._s(e.pos + e.def)) ]) ], 1) ]);
                }) ], 2), t._v(" "), t.examples.length ? i("div", {
                    staticClass: "example-container"
                }, [ i("div", {
                    staticClass: "title"
                }, [ t._v("例句") ]), t._v(" "), t._l(t.examples, function(e, n) {
                    return i("div", {
                        key: n,
                        staticClass: "example"
                    }, [ i("rich-text", {
                        staticClass: "en",
                        attrs: {
                            nodes: "{{example.content_en}}",
                            mpcomid: "1-" + n
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "cn"
                    }, [ t._v(t._s(e.content_cn)) ]) ], 1);
                }) ], 2) : t._e(), t._v(" "), i("div", {
                    staticClass: "btn-container"
                }, [ t.isAdded ? i("div", {
                    staticClass: "is-added"
                }, [ i("i", {
                    staticClass: "ib ib-check check"
                }), t._v("已加入生词本\n        ") ], 1) : i("button", {
                    staticClass: "flex-vhc",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.addToFavourites
                    }
                }, [ t._v("+加入生词本") ]) ], 1) ], 1);
            },
            staticRenderFns: []
        };
        e.a = n;
    },
    iGEL: function(t, e, i) {
        "use strict";
        var n = i("j8Oe"), s = i("Tlzh");
        var a = function(t) {
            i("jkJa");
        }, r = i("ybqe")(n.a, s.a, a, "data-v-40a30e56", null);
        e.a = r.exports;
    },
    j8Oe: function(t, e, i) {
        "use strict";
        var n = i("d7EF"), s = i.n(n), a = i("Dd8w"), r = i.n(a), c = i("Xxa5"), o = i.n(c), d = i("exGp"), u = i.n(d), l = i("D9eU");
        e.a = {
            props: {
                word: {
                    type: String,
                    required: !0
                },
                articleId: {
                    type: String,
                    required: !0
                },
                title: {
                    type: String,
                    required: !0
                },
                paraId: {
                    type: String,
                    required: !0
                },
                sentId: {
                    type: String,
                    required: !0
                },
                sent: {
                    type: String,
                    required: !0
                }
            },
            data: function() {
                return {
                    wordId: "",
                    wordContent: "",
                    ipa: "",
                    pos: "",
                    enDef: "",
                    cnDef: "",
                    isAdded: !1,
                    dictId: "",
                    wordNotFound: !0,
                    audioSrc: "",
                    audioCtx: null,
                    examples: [],
                    cnDefs: [],
                    enDefs: [],
                    COLLINS_DICT_ID: "ncyli"
                };
            },
            watch: {
                word: function(t) {
                    this.lookupWord(t);
                }
            },
            created: function() {
                this.lookupWord(this.word);
            },
            methods: {
                genUniqueCode: function(t) {
                    var e = t.match(/A(.*)P(.*)S(.*)/);
                    return e[1] + "-" + e[2] + "-" + this.wordId;
                },
                addToFavourites: function() {
                    var t = this;
                    return u()(o.a.mark(function e() {
                        return o.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Object(l.b)({
                                    summary: t.word,
                                    vocab_id: t.wordId,
                                    business_id: 1,
                                    source_content: t.sent,
                                    source_name: t.title,
                                    paragraph_id: t.paraId,
                                    sentence_id: t.sentId,
                                    article_id: t.articleId
                                });

                              case 2:
                                t.isAdded = !0;

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                lookupWord: function(t) {
                    var e = this;
                    return u()(o.a.mark(function i() {
                        var n, s, a, c, d, u, v, _, p, f, h;
                        return o.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.prev = 0, i.next = 3, Object(l.t)(t);

                              case 3:
                                return n = i.sent, s = n.id, n.content, a = n.audios, c = n.definitions, e.wordId = s, 
                                e.wordNotFound = !1, d = a[0].us, u = d.ipa, v = d.urls, e.ipa = u, e.audioSrc = v[0], 
                                e.audioCtx = wx.createInnerAudioContext(), e.audioCtx.src = e.audioSrc, _ = c.cn, 
                                p = c.en, f = _[0].dict_id, e.cnDefs = _, e.dictId = f, e.enDefs = p.map(function(t) {
                                    return r()({}, t, {
                                        def: t.def.replace(/vocab>/g, "b>")
                                    });
                                }), i.next = 22, Object(l.y)(s);

                              case 22:
                                h = i.sent, e.examples = h.map(function(t) {
                                    return r()({}, t, {
                                        content_en: t.content_en.replace(/vocab>/g, "b>")
                                    });
                                }), e.checkFavourite(s), i.next = 30;
                                break;

                              case 27:
                                i.prev = 27, i.t0 = i.catch(0), 404 === i.t0.statusCode && (e.wordNotFound = !0);

                              case 30:
                              case "end":
                                return i.stop();
                            }
                        }, i, e, [ [ 0, 27 ] ]);
                    }))();
                },
                checkFavourite: function(t) {
                    var e = this;
                    return u()(o.a.mark(function i() {
                        var n, a, r;
                        return o.a.wrap(function(i) {
                            for (;;) switch (i.prev = i.next) {
                              case 0:
                                return i.next = 2, Object(l.a)(t);

                              case 2:
                                n = i.sent, a = s()(n.objects, 1), r = a[0].exists, e.isAdded = r;

                              case 6:
                              case "end":
                                return i.stop();
                            }
                        }, i, e);
                    }))();
                },
                playSpeakerAudio: function() {
                    this.audioCtx.play();
                },
                closeWordDetail: function() {
                    this.$emit("close-word-detail");
                }
            }
        };
    },
    jkJa: function(t, e) {},
    "me/P": function(t, e) {}
}, [ "R0Sn" ]);