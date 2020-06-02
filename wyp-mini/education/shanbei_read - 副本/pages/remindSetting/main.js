require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 11 ], {
    "6T4c": function(e, t, n) {
        "use strict";
        var a = n("/WWA"), s = n("Vo7i"), i = {
            getSettings: function() {
                return Object(s.a)(a.c + "/reading/mini_reader/remind");
            },
            set: function(e) {
                return Object(s.a)(a.c + "/reading/mini_reader/remind", {
                    method: "PUT",
                    body: e
                });
            }
        };
        t.a = i;
    },
    CQuk: function(e, t) {},
    "FkF/": function(e, t, n) {
        "use strict";
        var a = {
            render: function() {
                var e = this, t = e.$createElement, n = e._self._c || t;
                return n("div", [ n("div", {
                    staticClass: "container"
                }, [ n("div", {
                    staticClass: "open-remind"
                }, [ n("div", {
                    staticClass: "open-remind-main"
                }, [ n("span", {
                    staticClass: "open-remind-title"
                }, [ e._v("开启提醒") ]), e._v(" "), n("switch", {
                    style: {
                        transform: "scale(0.8)"
                    },
                    attrs: {
                        checked: e.isChecked,
                        disabled: !e.enable,
                        color: "#7fb845",
                        eventid: "0"
                    },
                    on: {
                        change: e.handleToggleSwitch
                    }
                }), e._v(" "), e.enable ? e._e() : n("div", {
                    staticClass: "open-remind-cover",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: e.handleShowToast
                    }
                }) ]), e._v(" "), n("p", {
                    staticClass: "open-remind-description"
                }, [ e._v("阅读提醒功能目的是帮助用户养成阅读习惯") ]), e._v(" "), n("p", {
                    staticClass: "open-remind-description"
                }, [ e._v("把书籍加入书桌后才能设置提醒时间") ]) ], 1), e._v(" "), e.isChecked ? n("div", [ n("div", {
                    staticClass: "set-remind"
                }, [ n("span", {
                    staticClass: "set-remind-time"
                }, [ e._v("提醒时间") ]), e._v(" "), n("picker", {
                    staticClass: "set-remind-picker",
                    attrs: {
                        mode: "selector",
                        value: e.index,
                        range: e.range,
                        eventid: "2"
                    },
                    on: {
                        change: e.handleChangeTime
                    }
                }, [ e._v(e._s(e.remindTime)) ]) ], 1), e._v(" "), n("p", {
                    staticClass: "notice"
                }, [ e._v("提醒时间以北京时间为准") ]) ], 1) : e._e() ]) ]);
            },
            staticRenderFns: []
        };
        t.a = a;
    },
    Qv1B: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = n("5nAL"), s = n.n(a), i = n("Vmr3");
        new s.a(i.a).$mount();
    },
    Vmr3: function(e, t, n) {
        "use strict";
        var a = n("WNFe"), s = n("FkF/");
        var i = function(e) {
            n("CQuk");
        }, r = n("ybqe")(a.a, s.a, i, "data-v-bdcf7e92", null);
        t.a = r.exports;
    },
    WNFe: function(e, t, n) {
        "use strict";
        var a = n("Xxa5"), s = n.n(a), i = n("exGp"), r = n.n(i), c = n("6T4c");
        t.a = {
            data: function() {
                return {
                    index: 8,
                    range: [ "00:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00" ],
                    remindTime: "",
                    status: !1,
                    enable: !1
                };
            },
            computed: {
                isChecked: function() {
                    return !!this.enable && this.status;
                }
            },
            methods: {
                handleToggleSwitch: function(e) {
                    var t = this;
                    return r()(s.a.mark(function n() {
                        var a;
                        return s.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return a = e.target.value ? 0 : 1, n.next = 3, c.a.set({
                                    status: a
                                });

                              case 3:
                                t.status = !a, t.showToast("设置成功");

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                handleChangeTime: function(e) {
                    var t = this;
                    return r()(s.a.mark(function n() {
                        var a;
                        return s.a.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                return a = t.range[e.target.value], n.next = 3, c.a.set({
                                    remind_time: a
                                });

                              case 3:
                                t.remindTime = a, t.index = e.target.value, t.showToast("设置成功");

                              case 6:
                              case "end":
                                return n.stop();
                            }
                        }, n, t);
                    }))();
                },
                handleShowToast: function() {
                    this.showToast("把书籍加入书桌后才能设置提醒时间");
                },
                showToast: function(e) {
                    wx.showToast({
                        title: e,
                        icon: "none"
                    });
                }
            },
            onShow: function() {
                var e = this;
                return r()(s.a.mark(function t() {
                    var n, a, i, r;
                    return s.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.next = 2, c.a.getSettings();

                          case 2:
                            n = t.sent, a = n.remind_time, i = n.status, r = n.available, e.remindTime = a.substring(0, a.length - 3), 
                            e.status = !i, e.enable = r, e.index = e.range.indexOf(e.remindTime);

                          case 10:
                          case "end":
                            return t.stop();
                        }
                    }, t, e);
                }))();
            }
        };
    }
}, [ "Qv1B" ]);