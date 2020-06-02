global.webpackJsonp([ 9 ], {
    "6Ys0": function(t, a) {},
    "7up4": function(t, a, s) {
        "use strict";
        var e = s("Gu7T"), r = s.n(e), i = s("Xxa5"), n = s.n(i), c = s("exGp"), o = s.n(c), d = s("Dd8w"), l = s.n(d), u = s("PJh5"), v = s.n(u), p = s("CpCs"), w = s("NYxO"), _ = s("olkN"), f = s("vLgD");
        a.a = {
            store: _.a,
            data: function() {
                return {
                    paddingTop: 64,
                    deg: 0,
                    aniData: null,
                    rewards: [ 1, 2, 3 ],
                    rewardPanelUrl: "",
                    records: [ 1, 2, 4 ],
                    reward: null,
                    showRewardsDetail: !0,
                    isShowRewardModal: !1,
                    isRotating: !1,
                    ipp: 20,
                    page: 1
                };
            },
            components: {
                "nav-bar": p.a
            },
            computed: l()({}, s.i(w.a)([ "sysInfo", "userInfo" ]), {
                canDrawTimes: function() {
                    var t = this.userInfo.biscuits / 2;
                    return Math.floor(t);
                }
            }),
            methods: l()({}, s.i(w.c)([ "initUserInfo" ]), {
                back: function() {
                    wx.navigateBack();
                },
                showRewardModal: function() {
                    var t = this;
                    this.isRotating = !1, this.isShowRewardModal = !0, this.$nextTick(function() {
                        t.rotateBack();
                    });
                },
                rotate: function() {
                    var t = this;
                    return o()(n.a.mark(function a() {
                        var e;
                        return n.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                if (!(t.canDrawTimes <= 0)) {
                                    a.next = 3;
                                    break;
                                }
                                return wx.showToast({
                                    icon: "none",
                                    title: "小饼干不够了，签到可以获得小饼干哦~"
                                }), a.abrupt("return");

                              case 3:
                                if (!t.isRotating) {
                                    a.next = 5;
                                    break;
                                }
                                return a.abrupt("return");

                              case 5:
                                return a.next = 7, s.i(f.s)();

                              case 7:
                                e = a.sent, t.isRotating = !0, t.rewards.forEach(function(a) {
                                    a.id === e.reward_id && (t.reward = a);
                                }), t.deg = 360 - 180 / t.rewards.length - 360 * e.reward_index / t.rewards.length + 3600, 
                                t.aniData = t.animation.rotate(t.deg).step().export();

                              case 12:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                rotateBack: function() {
                    this.initUserInfo(), this.refreshRecords(), this.aniData = this.animation.rotate(0).step({
                        duration: 0
                    }).export();
                },
                refreshRecords: function() {
                    var t = this;
                    return o()(n.a.mark(function a() {
                        var e, r, i;
                        return n.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return t.page = 1, e = t.ipp, r = t.page, a.next = 4, s.i(f.t)({
                                    ipp: e,
                                    page: r
                                });

                              case 4:
                                (i = a.sent).objects.forEach(function(t) {
                                    t.created_at = v()(t.created_at).format("YYYY-MM-DD HH:mm");
                                }), t.records = i.objects;

                              case 7:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                fetchMoreRecords: function() {
                    var t = this;
                    return o()(n.a.mark(function a() {
                        var e, i, c;
                        return n.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                return t.page = t.page + 1, e = t.ipp, i = t.page, a.next = 4, s.i(f.t)({
                                    ipp: e,
                                    page: i
                                });

                              case 4:
                                (c = a.sent).objects.forEach(function(t) {
                                    t.created_at = v()(t.created_at).format("YYYY-MM-DD HH:mm");
                                }), t.records = [].concat(r()(t.records), r()(c.objects));

                              case 7:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                }
            }),
            mounted: function() {
                var t = this;
                return o()(n.a.mark(function a() {
                    var e;
                    return n.a.wrap(function(a) {
                        for (;;) switch (a.prev = a.next) {
                          case 0:
                            return t.paddingTop = t.sysInfo.statusBarHeight + 44, t.animation = wx.createAnimation({
                                duration: 7e3,
                                timingFunction: "cubic-bezier(0.25,0.1,0.1,1)",
                                delay: 0
                            }), a.next = 4, s.i(f.u)();

                          case 4:
                            e = a.sent, t.rewards = e.objects, t.rewardPanelUrl = e.wheel_img_urls && e.wheel_img_urls[0], 
                            t.refreshRecords(), wx.setStorage({
                                key: "luckyWheelDay",
                                data: v()().format("YYYY-MM-DD")
                            });

                          case 9:
                          case "end":
                            return a.stop();
                        }
                    }, a, t);
                }))();
            },
            onShareAppMessage: function() {
                return {
                    title: "原来翻译句子也可以这么好玩，安利给你喔～",
                    path: "/pages/login/main"
                };
            }
        };
    },
    TkbA: function(t, a, s) {
        "use strict";
        var e = s("7up4"), r = s("r1pL");
        var i = function(t) {
            s("6Ys0");
        }, n = s("ybqe")(e.a, r.a, i, "data-v-28cc0885", null);
        a.a = n.exports;
    },
    V5rv: function(t, a, s) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        });
        var e = s("5nAL"), r = s.n(e), i = s("TkbA");
        new r.a(i.a).$mount(), a.default = {
            config: {
                backgroundColor: "#f5f5f5"
            }
        };
    },
    r1pL: function(t, a, s) {
        "use strict";
        var e = {
            render: function() {
                var t = this, a = t.$createElement, s = t._self._c || a;
                return s("div", {
                    staticClass: "wheel",
                    style: {
                        paddingTop: t.paddingTop + "px"
                    }
                }, [ s("nav-bar", {
                    attrs: {
                        icon: "/static/img/back.png",
                        title: "每日幸运转盘",
                        handleClick: t.back,
                        mpcomid: "0"
                    }
                }), t._v(" "), s("div", {
                    staticClass: "reward ",
                    class: {
                        blink: t.isRotating
                    }
                }, [ s("image", {
                    staticClass: "pannel",
                    attrs: {
                        src: t.rewardPanelUrl,
                        animation: t.aniData,
                        eventid: "0"
                    },
                    on: {
                        transitionend: t.showRewardModal
                    }
                }), t._v(" "), s("div", {
                    staticClass: "pointer",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: t.rotate
                    }
                }) ]), t._v(" "), s("div", {
                    staticClass: "tips"
                }, [ s("div", {
                    staticClass: "biscuit-count"
                }, [ t._v("你已有" + t._s(t.userInfo.biscuits) + "个小饼干，可以抽奖" + t._s(t.canDrawTimes) + "次") ]), t._v(" "), t._m(0) ]), t._v(" "), s("div", {
                    staticClass: "info-tabs"
                }, [ s("div", {
                    staticClass: "header"
                }, [ s("div", {
                    staticClass: "btn",
                    class: {
                        active: t.showRewardsDetail
                    },
                    attrs: {
                        eventid: "2"
                    },
                    on: {
                        click: function(a) {
                            t.showRewardsDetail = !0;
                        }
                    }
                }, [ t._v("奖品信息展示") ]), t._v(" "), s("div", {
                    staticClass: "btn",
                    class: {
                        active: !t.showRewardsDetail
                    },
                    attrs: {
                        eventid: "3"
                    },
                    on: {
                        click: function(a) {
                            t.showRewardsDetail = !1;
                        }
                    }
                }, [ t._v("我的抽奖记录") ]) ]), t._v(" "), s("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: t.showRewardsDetail,
                        expression: "showRewardsDetail"
                    } ],
                    staticClass: "body rewards"
                }, t._l(t.rewards, function(a, e) {
                    return "NOT_BISCUIT" === a.is_biscuit ? s("div", {
                        key: a,
                        staticClass: "reward-item"
                    }, [ s("img", {
                        staticClass: "logo",
                        attrs: {
                            src: a.image_urls && a.image_urls[0]
                        }
                    }), t._v(" "), s("div", {
                        staticClass: "info"
                    }, [ s("span", {
                        staticClass: "name"
                    }, [ t._v(t._s(a.name)) ]), t._v(" "), s("span", {
                        staticClass: "price"
                    }, [ t._v("￥" + t._s(a.price / 100)) ]), t._v(" "), s("span", {
                        staticClass: "des"
                    }, [ t._v(t._s(a.remark)) ]) ]) ]) : t._e();
                })), t._v(" "), s("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: !t.showRewardsDetail,
                        expression: "!showRewardsDetail"
                    } ],
                    staticClass: "body records"
                }, [ t.records.length > 0 ? s("scroll-view", {
                    staticClass: "records-scroll",
                    attrs: {
                        "scroll-y": "",
                        eventid: "4"
                    },
                    on: {
                        scrolltolower: t.fetchMoreRecords
                    }
                }, t._l(t.records, function(a, e) {
                    return s("div", {
                        key: a,
                        staticClass: "record-item"
                    }, [ s("span", {
                        staticClass: "name"
                    }, [ t._v(t._s(a.reward)) ]), t._v(" "), s("span", {
                        staticClass: "date"
                    }, [ t._v(t._s(a.created_at)) ]) ]);
                })) : s("div", {
                    staticClass: "records-empty"
                }, [ t._v("暂无抽奖记录") ]) ], 1) ]), t._v(" "), t.isShowRewardModal ? s("div", {
                    staticClass: "modal",
                    attrs: {
                        eventid: "7"
                    },
                    on: {
                        touchmove: function(t) {
                            t.stopPropagation();
                        }
                    }
                }, [ s("div", {
                    staticClass: "inner"
                }, [ s("div", {
                    staticClass: "card"
                }, [ s("img", {
                    staticClass: "close-modal",
                    attrs: {
                        src: "/static/img/close-grey.png",
                        eventid: "5"
                    },
                    on: {
                        click: function(a) {
                            t.isShowRewardModal = !1;
                        }
                    }
                }), t._v(" "), s("div", {
                    staticClass: "title"
                }, [ t._v("恭喜你") ]), t._v(" "), s("div", {
                    staticClass: "content"
                }, [ s("span", [ t._v("抽中") ]), t._v(" "), s("span", {
                    staticClass: "reward-name"
                }, [ t._v(t._s(t.reward.name)) ]) ]), t._v(" "), s("img", {
                    staticClass: "picture",
                    attrs: {
                        src: t.reward.image_urls && t.reward.image_urls[0]
                    }
                }) ]), t._v(" "), s("div", {
                    staticClass: "bottom"
                }, [ s("div", {
                    staticClass: "tip"
                }, [ t._v(t._s("NOT_BISCUIT" === t.reward.is_biscuit ? "回复数字【3】领取奖品，请尽快领取" : "已放入到你的账户了，快去抽奖吧～")) ]), t._v(" "), "NOT_BISCUIT" === t.reward.is_biscuit ? s("button", {
                    staticClass: "btn",
                    attrs: {
                        "open-type": "contact"
                    }
                }, [ t._v("去领奖") ]) : s("div", {
                    staticClass: "btn",
                    attrs: {
                        eventid: "6"
                    },
                    on: {
                        click: function(a) {
                            t.isShowRewardModal = !1;
                        }
                    }
                }, [ t._v("知道了") ]) ], 1) ]) ]) : t._e() ], 1);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, a = this._self._c || t;
                return a("div", {
                    staticClass: "tip"
                }, [ a("span", [ this._v("注：签到可以获得小饼干，每次抽奖消耗2个小饼干") ]), this._v(" "), a("img", {
                    attrs: {
                        src: "/static/img/biscuit.png"
                    }
                }) ]);
            } ]
        };
        a.a = e;
    }
}, [ "V5rv" ]);