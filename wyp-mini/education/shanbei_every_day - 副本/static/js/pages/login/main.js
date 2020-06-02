global.webpackJsonp([ 10 ], {
    "+sTK": function(t, e, n) {
        "use strict";
        var a = {
            render: function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "login"
                }, [ this._m(0), this._v(" "), e("div", [ e("button", {
                    staticClass: "auth-btn",
                    attrs: {
                        "open-type": "getUserInfo",
                        lang: "zh_CN",
                        eventid: "0"
                    },
                    on: {
                        getuserinfo: this.onGotUserInfo
                    }
                }, [ this._v("点击开始") ]), this._v(" "), e("button", {
                    staticClass: "back-btn",
                    attrs: {
                        eventid: "1"
                    },
                    on: {
                        click: this.redirectIndex
                    }
                }, [ this._v("返回首页") ]) ], 1) ]);
            },
            staticRenderFns: [ function() {
                var t = this.$createElement, e = this._self._c || t;
                return e("div", {
                    staticClass: "top"
                }, [ e("img", {
                    attrs: {
                        src: "/static/img/dq-logo.png"
                    }
                }), this._v(" "), e("div", [ this._v("扇贝每日英语") ]) ]);
            } ]
        };
        e.a = a;
    },
    GG4c: function(t, e, n) {
        "use strict";
        var a = n("Xxa5"), r = n.n(a), i = n("exGp"), s = n.n(i), o = n("Dd8w"), c = n.n(o), u = n("olkN"), d = n("NYxO"), l = n("0xDb"), p = n("vLgD"), h = n("/WWA"), v = [ "/pages/daily-quote/main", "/pages/trans-challenge/main", "/pages/moremp/main", "/pages/personal-center/main" ];
        e.a = {
            store: u.a,
            data: function() {
                return {
                    wxCode: ""
                };
            },
            methods: c()({}, n.i(d.b)([ "initLoginRedirect" ]), n.i(d.c)([ "initCampaign", "initUserInfo" ]), {
                onGotUserInfo: function(t) {
                    var e = this;
                    return s()(r.a.mark(function a() {
                        var i;
                        return r.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                if (wx.showLoading({
                                    title: "登录中",
                                    mask: !0
                                }), i = t.mp.detail.errMsg, a.prev = 2, "getUserInfo:ok" !== i) {
                                    a.next = 12;
                                    break;
                                }
                                return a.next = 6, n.i(p.v)({
                                    code: e.wxCode,
                                    app_name: h.g,
                                    data: t.mp.detail
                                });

                              case 6:
                                return a.next = 8, n.i(p.w)();

                              case 8:
                                wx.hideLoading(), e.redirectPage(), a.next = 13;
                                break;

                              case 12:
                                wx.showModal({
                                    title: "登录失败",
                                    content: "无法获取用户信息"
                                });

                              case 13:
                                a.next = 19;
                                break;

                              case 15:
                                a.prev = 15, a.t0 = a.catch(2), wx.hideLoading(), wx.showModal({
                                    title: "登录失败",
                                    content: "请稍后重试~"
                                });

                              case 19:
                                return a.prev = 19, wx.hideLoading(), a.finish(19);

                              case 22:
                              case "end":
                                return a.stop();
                            }
                        }, a, e, [ [ 2, 15, 19, 22 ] ]);
                    }))();
                },
                redirectPage: function() {
                    var t = this;
                    return s()(r.a.mark(function e() {
                        var n, a;
                        return r.a.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t.initCampaign(), e.next = 3, t.initUserInfo();

                              case 3:
                                n = e.sent, wx.setStorageSync("userId", n.id), t.$root.$mp.query.redirect ? (a = decodeURIComponent(t.$root.$mp.query.redirect), 
                                t.initLoginRedirect(a.split("?")[1]), a.startsWith(v[0]) || a.startsWith(v[1]) || a.startsWith(v[2]) || a.startsWith(v[3]) ? wx.switchTab({
                                    url: a
                                }) : wx.redirectTo({
                                    url: a
                                })) : wx.switchTab({
                                    url: "/pages/daily-quote/main"
                                });

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e, t);
                    }))();
                },
                redirectIndex: function() {
                    wx.switchTab({
                        url: "/pages/daily-quote/main"
                    });
                }
            }),
            onLoad: function() {
                var t = this;
                return s()(r.a.mark(function e() {
                    var a, i;
                    return r.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return e.prev = 0, e.next = 3, n.i(l.b)();

                          case 3:
                            a = e.sent, i = a.code, t.wxCode = i, e.next = 11;
                            break;

                          case 8:
                            e.prev = 8, e.t0 = e.catch(0), t.wxCode = "";

                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e, t, [ [ 0, 8 ] ]);
                }))();
            }
        };
    },
    igGF: function(t, e) {},
    jT7l: function(t, e, n) {
        "use strict";
        var a = n("GG4c"), r = n("+sTK");
        var i = function(t) {
            n("igGF");
        }, s = n("ybqe")(a.a, r.a, i, "data-v-b67a6210", null);
        e.a = s.exports;
    },
    uvAE: function(t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = n("5nAL"), r = n.n(a), i = n("jT7l");
        new r.a(i.a).$mount(), e.default = {
            config: {
                disableScroll: !0
            }
        };
    }
}, [ "uvAE" ]);