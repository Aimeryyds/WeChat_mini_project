require("../../common/manifest.js");

require("../../common/vendor.js");

global.webpackJsonp([ 27 ], {
    "9uqF": function(e, t, a) {
        "use strict";
        var n = a("Xxa5"), r = a.n(n), s = a("exGp"), i = a.n(s), o = a("8ZyN"), c = a.n(o), u = a("IcnI"), d = a("EwJx"), l = a.n(d), p = a("Apws"), h = a("/5h/"), v = a("qJN/"), f = a("/WWA"), g = a("7YgM"), w = (a.n(g), 
        a("Vo7i")), m = f.c + "/bayuser";
        t.a = {
            store: u.a,
            data: function() {
                return {
                    loading: !1,
                    isNeedAuth: !1,
                    isNewUser: !1,
                    isNeedUpdate: !0
                };
            },
            onShow: function() {
                var e = this;
                return i()(r.a.mark(function t() {
                    var a, n;
                    return r.a.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return t.prev = 0, t.next = 3, p.a.getMpVersion();

                          case 3:
                            a = t.sent, n = a.version, e.isNeedUpdate = n !== g.version, wx.setStorage({
                                key: "mpVersion",
                                data: n
                            }), e.isNeedUpdate ? Object(v.a)(e.handleOnShow) : e.handleOnShow(), t.next = 13;
                            break;

                          case 10:
                            t.prev = 10, t.t0 = t.catch(0), c.a.notifyError(t.t0);

                          case 13:
                          case "end":
                            return t.stop();
                        }
                    }, t, e, [ [ 0, 10 ] ]);
                }))();
            },
            methods: {
                handleOnShow: function() {
                    var e = this;
                    return i()(r.a.mark(function t() {
                        var a;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, e.handleLogin();

                              case 2:
                                a = e.$root.$mp.appOptions.query.scene, p.a.playDisco({
                                    new: e.isNewUser,
                                    scene_id: a
                                });

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                handleGetUserInfo: function(e) {
                    var t = this;
                    return i()(r.a.mark(function a() {
                        var n, s, i;
                        return r.a.wrap(function(a) {
                            for (;;) switch (a.prev = a.next) {
                              case 0:
                                if (n = e.mp.detail, n.userInfo) {
                                    a.next = 5;
                                    break;
                                }
                                return wx.showToast({
                                    title: "需要授权才可以使用哦",
                                    icon: "none"
                                }), a.abrupt("return");

                              case 5:
                                return a.next = 7, l.a.login();

                              case 7:
                                return s = a.sent, i = s.code, a.next = 11, Object(w.a)(m + "/auth/miniprogram/register", {
                                    method: "POST",
                                    body: {
                                        app_name: f.d,
                                        code: i,
                                        data: n
                                    }
                                });

                              case 11:
                                t.handleNavToMall();

                              case 12:
                              case "end":
                                return a.stop();
                            }
                        }, a, t);
                    }))();
                },
                handleNavToMall: function() {
                    var e = this;
                    return i()(r.a.mark(function t() {
                        var a, n, s, i, o;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return wx.setStorage({
                                    key: "isNewUser",
                                    data: e.isNewUser
                                }), a = e.$route.query, n = a.target, s = a.productId, i = a.bookId, a.shareFrom, 
                                n && u.a.commit("setTarget", {
                                    target: n,
                                    productId: s,
                                    bookId: i
                                }), t.next = 6, Object(w.a)(m + "/user_detail", {
                                    isHideLoading: !0
                                });

                              case 6:
                                return o = t.sent, p.a.sensorLogin(o.id), t.next = 10, Object(h.a)(a);

                              case 10:
                                l.a.setStorage({
                                    key: "userDetail",
                                    data: o
                                }), e.$router.push({
                                    path: "/pages/mall/main",
                                    isTab: !0
                                });

                              case 12:
                              case "end":
                                return t.stop();
                            }
                        }, t, e);
                    }))();
                },
                handleLogin: function() {
                    var e = this;
                    return i()(r.a.mark(function t() {
                        var a, n;
                        return r.a.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return wx.showLoading({
                                    title: "登录中...",
                                    mask: !0
                                }), t.next = 3, l.a.login();

                              case 3:
                                return a = t.sent, n = a.code, t.prev = 5, t.next = 8, Object(w.a)(m + "/auth/miniprogram/login", {
                                    method: "POST",
                                    body: {
                                        code: n,
                                        app_name: f.d
                                    },
                                    isHideLoading: !0
                                });

                              case 8:
                                e.handleNavToMall(), t.next = 15;
                                break;

                              case 11:
                                t.prev = 11, t.t0 = t.catch(5), 403 === t.t0.statusCode && (e.isNeedAuth = !0, e.isNewUser = !0);

                              case 15:
                                return t.prev = 15, wx.hideLoading(), t.finish(15);

                              case 18:
                              case "end":
                                return t.stop();
                            }
                        }, t, e, [ [ 5, 11, 15, 18 ] ]);
                    }))();
                }
            }
        };
    },
    HljG: function(e, t) {},
    NfEN: function(e, t, a) {
        "use strict";
        var n = {
            render: function() {
                var e = this, t = e.$createElement, a = e._self._c || t;
                return a("div", {
                    staticClass: "login"
                }, [ a("div", {
                    staticClass: "title"
                }, [ e._v("扇贝阅读") ]), e._v(" "), a("div", {
                    staticClass: "subtitle"
                }, [ e._v("英文原版好书尽在这里") ]), e._v(" "), e.isNeedAuth ? a("button", {
                    staticClass: "btn",
                    attrs: {
                        "open-type": "getUserInfo",
                        disabled: e.loading,
                        loading: e.loading,
                        lang: "zh_CN",
                        eventid: "0"
                    },
                    on: {
                        getuserinfo: e.handleGetUserInfo,
                        click: e.handleClickBtn
                    }
                }, [ e._v("开启阅读之旅") ]) : e._e(), e._v(" "), a("div", {
                    staticClass: "tip"
                }, [ e._v("为了能够完整体验扇贝阅读的功能，请在稍后的请求中，允许授权哦~") ]) ], 1);
            },
            staticRenderFns: []
        };
        t.a = n;
    },
    VuVi: function(e, t, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = a("5nAL"), r = a.n(n), s = a("j0z9");
        new r.a(s.a).$mount();
    },
    j0z9: function(e, t, a) {
        "use strict";
        var n = a("9uqF"), r = a("NfEN");
        var s = function(e) {
            a("HljG");
        }, i = a("ybqe")(n.a, r.a, s, "data-v-5cbc069a", null);
        t.a = i.exports;
    }
}, [ "VuVi" ]);