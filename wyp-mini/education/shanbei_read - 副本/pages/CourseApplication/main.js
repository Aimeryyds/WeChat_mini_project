require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 44 ], {
    "1+ob": function(t, e, s) {
        "use strict";
        var i = {
            render: function() {
                var t = this, e = t.$createElement, s = t._self._c || e;
                return s("div", [ t.showAppList ? s("div", {
                    staticClass: "course-application-list"
                }, [ s("div", {
                    staticClass: "title"
                }, [ t._v("·句子回顾") ]), t._v(" "), t._l(t.applicationList, function(e, i) {
                    return s("div", {
                        key: i,
                        staticClass: "card"
                    }, [ s("div", {
                        staticClass: "scene-container"
                    }, [ s("div", {
                        staticClass: "scene-title"
                    }, [ t._v("适用场景") ]), t._v(" "), s("div", t._l(e.composite_scenes, function(e, i) {
                        return s("div", {
                            key: i,
                            staticClass: "scene-wrap"
                        }, [ s("button", {
                            staticClass: "scene"
                        }, [ t._v(t._s(e.composite_scene_name)) ]) ], 1);
                    })) ]), t._v(" "), s("div", {
                        staticClass: "example"
                    }, t._l(e.sentenceWords, function(e, i) {
                        return s("span", {
                            key: i
                        }, [ null !== e.text ? s("span", [ s("span", {
                            class: {
                                word: 0 === e.status,
                                show: 2 === e.status
                            }
                        }, [ t._v(t._s(e.text)) ]), t._v(" "), s("span", {
                            staticClass: "word"
                        }, [ t._v(t._s(e.punctuation)) ]), t._v(" "), s("span", [ t._v(t._s(" ")) ]) ]) : t._e(), t._v(" "), null === e.text ? s("div", {
                            staticClass: "blank"
                        }) : t._e() ]);
                    })), t._v(" "), s("div", {
                        staticClass: "definition"
                    }, [ t._v(t._s(e.def)) ]), t._v(" "), s("div", {
                        staticClass: "exp-container"
                    }, [ s("span", {
                        staticClass: "exp-en"
                    }, [ t._v(t._s(e.authentic_expression.expression)) ]), t._v(" "), s("span", {
                        staticClass: "exp-cn"
                    }, [ t._v(t._s(e.authentic_expression.interpretation)) ]) ]), t._v(" "), s("div", {
                        staticClass: "left-circle"
                    }), t._v(" "), s("div", {
                        staticClass: "right-circle"
                    }) ]);
                }), t._v(" "), s("button", {
                    staticClass: "flex-vhc finish",
                    attrs: {
                        eventid: "0"
                    },
                    on: {
                        click: t.finish
                    }
                }, [ t._v("完成") ]) ], 2) : s("div", {
                    class: t.isHideAppGuide ? "course-lecture" : "course-lecture show-guide"
                }, [ s("div", {
                    staticClass: "progress-container"
                }, [ s("div", {
                    staticClass: "bar-container"
                }, [ s("div", {
                    staticClass: "bar",
                    style: {
                        width: 100 * (t.currentAppIdx + 1) / t.applicationList.length + "%"
                    }
                }) ]), t._v(" "), s("div", {
                    staticClass: "text"
                }, [ t._v(t._s(t.currentAppIdx + 1) + "/" + t._s(t.applicationList.length)) ]) ]), t._v(" "), s("div", {
                    staticClass: "container"
                }, [ s("div", {
                    staticClass: "label"
                }, [ t._v("·中文释义") ]), t._v(" "), s("div", {
                    staticClass: "definition-container"
                }, [ s("rich-text", {
                    attrs: {
                        nodes: "{{currentApp.definition_cn}}",
                        mpcomid: "0"
                    }
                }) ], 1) ]), t._v(" "), s("div", {
                    staticClass: "container"
                }, [ s("div", {
                    staticClass: "label"
                }, [ t._v("·英文原句") ]), t._v(" "), s("div", {
                    staticClass: "sentence-container"
                }, t._l(t.sentenceWords, function(e, i) {
                    return s("span", {
                        key: i
                    }, [ null !== e.text ? s("span", [ s("span", {
                        class: {
                            word: 0 === e.status,
                            hide: 1 === e.status,
                            show: 2 === e.status
                        }
                    }, [ t._v(t._s(e.text)) ]), t._v(" "), s("span", {
                        staticClass: "word"
                    }, [ t._v(t._s(e.punctuation)) ]), t._v(" "), s("span", [ t._v(t._s(" ")) ]) ]) : t._e(), t._v(" "), null === e.text ? s("div", {
                        staticClass: "blank"
                    }) : t._e() ]);
                })), t._v(" "), t.isNextAvailable ? t._e() : s("div", {
                    staticClass: "option-container"
                }, t._l(t.optionWords, function(e, i) {
                    return s("span", {
                        key: i
                    }, [ 1 !== e.status ? s("span", {
                        class: {
                            "option-word": !0,
                            wrong: 2 === e.status
                        },
                        attrs: {
                            eventid: "1-" + i
                        },
                        on: {
                            click: function(s) {
                                t.clickOption(e);
                            }
                        }
                    }, [ t._v(t._s(e.text)) ]) : t._e(), t._v(" "), 1 !== e.status ? s("span", [ t._v(t._s(" ")) ]) : t._e() ]);
                })), t._v(" "), t.isNextAvailable ? s("div", {
                    staticClass: "s-container"
                }, [ s("span", {
                    staticClass: "s-label"
                }, [ t._v("适用场景：") ]), t._v(" "), s("div", {
                    staticClass: "s-content"
                }, t._l(t.currentApp.composite_scenes, function(e, i) {
                    return s("button", {
                        key: i,
                        staticClass: "scene",
                        attrs: {
                            div: ""
                        }
                    }, [ t._v(t._s(e.composite_scene_name)) ]);
                })) ]) : t._e() ]), t._v(" "), s("div", {
                    staticClass: "btn-group"
                }, [ t.wrongCount > 2 ? s("div", {
                    staticClass: "tip flex-vhc"
                }, [ s("i", {
                    staticClass: "ib ib-info-circle-o"
                }), t._v(" "), s("span", [ t._v("不会做可以先巩固哦~") ]) ], 1) : t._e(), t._v(" "), s("button", {
                    staticClass: "btn flex-vhc",
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: t.toggleExpCard
                    }
                }, [ t._v("巩固知识点") ]), t._v(" "), s("button", {
                    class: [ "btn", "flex-vhc", t.isNextAvailable ? "finish" : "" ],
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: t.next
                    }
                }, [ t._v(t._s(t.currentAppIdx === t.applicationList.length - 1 ? "完成" : "下一个")) ]) ], 1), t._v(" "), t.isShowExpCard ? s("div", {
                    staticClass: "exp-card-container",
                    attrs: {
                        eventid: "4"
                    },
                    on: {
                        click: t.toggleExpCard
                    }
                }, [ s("div", [ s("div", {
                    staticClass: "exp-card"
                }, [ s("div", {
                    staticClass: "meta"
                }, [ t._v(t._s(t.currentApp.authentic_expression.expression)) ]), t._v(" "), s("div", {
                    staticClass: "detail"
                }, [ s("div", {
                    staticClass: "trans"
                }, [ t._v(t._s(t.currentApp.authentic_expression.interpretation)) ]), t._v(" "), s("rich-text", {
                    attrs: {
                        nodes: "{{currentApp.authentic_expression.notes}}",
                        mpcomid: "1"
                    }
                }) ], 1) ]), t._v(" "), s("div", {
                    staticClass: "flex-vhc"
                }, [ s("i", {
                    staticClass: "ib ib-times-circle-o close"
                }) ], 1) ]) ]) : t._e(), t._v(" "), t.isHideAppGuide ? t._e() : s("img", {
                    staticClass: "guide",
                    attrs: {
                        src: "https://media-image1.baydn.com/storage_media_image/kvhfgj/6a39a4e1e519a3b024ecbdc76ea997c0.782a562f57cc1d56039a93455dba87af.png",
                        eventid: "5"
                    },
                    on: {
                        click: t.hideGuide
                    }
                }) ]) ]);
            },
            staticRenderFns: []
        };
        e.a = i;
    },
    "3VEY": function(t, e, s) {
        "use strict";
        var i = s("Xxa5"), n = s.n(i), a = s("exGp"), c = s.n(a), r = s("1IwQ"), o = s("D9eU"), d = s("Apws").a.sensorLog;
        e.a = {
            data: function() {
                return {
                    userCourseId: "",
                    articleId: "",
                    articleTitle: "",
                    startTime: null,
                    isHideAppGuide: !0,
                    applicationList: [],
                    currentAppIdx: 0,
                    sentenceWords: [],
                    isShowExpCard: !1,
                    currentApp: {},
                    optionWords: [],
                    wordIndexes: [],
                    answerIndex: 0,
                    showAppList: !1,
                    wrongCount: 0
                };
            },
            computed: {
                isNextAvailable: function() {
                    return this.sentenceWords.filter(function(t) {
                        return 2 === t.status;
                    }).length === this.wordIndexes.length;
                }
            },
            mounted: function() {
                var t = this;
                return c()(n.a.mark(function e() {
                    var s, i, a, c, r, d, l;
                    return n.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return t.startTime = new Date(), s = wx.getStorageSync("isHideAppGuide"), t.isHideAppGuide = s, 
                            i = t.$route.query, a = i.userCourseId, c = i.articleId, r = i.articleTitle, t.articleId = c, 
                            t.userCourseId = a, t.articleTitle = r, e.next = 9, Object(o.u)(t.articleId);

                          case 9:
                            d = e.sent, l = d.objects, t.applicationList = l, t.applicationList.forEach(function(t) {
                                t.def = t.definition_cn.replace(/<\/?[^>]+(>|$)/g, ""), t.sentenceWords = t.sentence_words.map(function(e, s) {
                                    var i = e.match(/-*"*\$*\¥*\w+(?:['-]\w+)*/g), n = i ? i[0] : null;
                                    return {
                                        text: n,
                                        punctuation: e.replace(n, ""),
                                        status: -1 !== t.word_indexes.indexOf(s) ? 1 : 0
                                    };
                                });
                            }), t.currentApp = t.applicationList[t.currentAppIdx], t.getAppWords();

                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e, t);
                }))();
            },
            onShow: function() {
                d({
                    event_code: "RDreading_BookCourseStep2_2_PV",
                    event_value: {
                        chaptertitle_cn: this.articleTitle
                    }
                });
            },
            methods: {
                hideGuide: function() {
                    this.isHideAppGuide = !0, wx.setStorage({
                        key: "isHideAppGuide",
                        data: !0
                    });
                },
                toggleExpCard: function() {
                    this.isShowExpCard || (Object(r.a)(), d({
                        event_code: "RDreading_BookCourseStep2_2_Review",
                        event_value: {
                            chaptertitle_cn: this.articleTitle
                        }
                    })), this.isShowExpCard = !this.isShowExpCard;
                },
                getAppWords: function() {
                    var t = this.currentApp, e = t.word_indexes, s = t.sentenceWords, i = t.option_words;
                    this.wordIndexes = e, this.sentenceWords = s, this.optionWords = i.map(function(t) {
                        return {
                            text: t,
                            status: 0
                        };
                    });
                },
                next: function() {
                    if (this.isNextAvailable) {
                        if (Object(r.a)(), this.currentAppIdx === this.applicationList.length - 1) return void (this.showAppList = !0);
                        this.currentAppIdx++, this.currentApp = this.applicationList[this.currentAppIdx], 
                        this.getAppWords(), this.answerIndex = 0;
                    } else wx.showToast({
                        title: "做完这题后才能继续哦~",
                        icon: "none"
                    });
                },
                finish: function() {
                    var t = this;
                    return c()(n.a.mark(function e() {
                        var s;
                        return n.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return s = Math.round((new Date() - t.startTime) / 1e3), d({
                                    event_code: "RDreading_BookCourse_StudyTime",
                                    event_value: {
                                        chaptertitle_cn: t.articleTitle,
                                        study_time: s,
                                        study_content: "活学活用"
                                    }
                                }), e.next = 4, Object(o.d)(t.userCourseId, {
                                    article_id: t.articleId,
                                    finished_part: 6,
                                    used_time: s
                                });

                              case 4:
                                Object(r.a)(), t.$router.back({
                                    path: "/pages/CourseArticleIndex/main",
                                    query: {
                                        userCourseId: t.userCourseId,
                                        articleId: t.articleId,
                                        articleTitle: t.articleTitle
                                    }
                                });

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                clickOption: function(t) {
                    if (!(this.answerIndex >= this.wordIndexes.length)) {
                        var e = this.wordIndexes[this.answerIndex];
                        if (this.sentenceWords[e].text === t.text) {
                            var s = wx.createInnerAudioContext();
                            s.src = "https://media-audio1.baydn.com/storage_media_audio/kvhfgj/99d26087e04f5a57f72e7a537dd10ab0.21361e8853e681cf04de812cc9787539.mp3", 
                            s.play(), this.answerIndex++, this.sentenceWords[e].status = 2, t.status = 1;
                        } else t.status = 2, this.wrongCount++, setTimeout(function() {
                            t.status = 0;
                        }, 1e3);
                        this.isNextAvailable && (this.wrongCount = 0);
                    }
                }
            }
        };
    },
    E524: function(t, e) {},
    JpHR: function(t, e, s) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = s("5nAL"), n = s.n(i), a = s("Qnjo");
        new n.a(a.a).$mount();
    },
    Qnjo: function(t, e, s) {
        "use strict";
        var i = s("3VEY"), n = s("1+ob");
        var a = function(t) {
            s("E524");
        }, c = s("ybqe")(i.a, n.a, a, "data-v-0bc5777e", null);
        e.a = c.exports;
    }
}, [ "JpHR" ]);