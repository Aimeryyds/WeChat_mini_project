(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/AuthFlow/VerifyMobile/VerifyMobileForm" ], {
    "0b1e": function(e, o, n) {
        n.r(o);
        var t = n("3564"), r = n.n(t);
        for (var i in t) "default" !== i && function(e) {
            n.d(o, e, function() {
                return t[e];
            });
        }(i);
        o.default = r.a;
    },
    3564: function(e, o, n) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var t = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(n("4360")), r = n("f8c8"), i = {
            components: {
                FullWidthButton: function() {
                    return n.e("components/FullWidthButton").then(n.bind(null, "5196"));
                },
                InputField: function() {
                    return n.e("components/InputField").then(n.bind(null, "8192"));
                }
            },
            computed: {
                form: function() {
                    return t.default.state.verifyMobile.form;
                }
            },
            methods: {
                updateForm: function(e) {
                    t.default.commit("verifyMobile/updateForm", e);
                },
                replaceOverlayStack: function(e) {
                    t.default.dispatch("overlay/replaceOverlayStack", e);
                },
                sendCode: function() {
                    var e = this.form.mobile;
                    e ? (0, r.sendCode)(e).catch(function(e) {
                        console.error(e);
                    }) : wx.showToast({
                        title: "输入手机",
                        icon: "none",
                        duration: 1e3
                    });
                },
                verify: function() {
                    var e = this;
                    Object.values(this.form).some(function(e) {
                        return !e;
                    }) ? wx.showToast({
                        title: "确认输入",
                        icon: "none",
                        duration: 1e3
                    }) : (0, r.bindWechatAndMobile)({
                        Mobile: this.form.mobile,
                        Code: this.form.code,
                        ReBind: !1
                    }).then(function(o) {
                        t.default.commit("user/setToken", o.token), t.default.commit("user/setUserInfo", o.userInfo), 
                        e.replaceOverlayStack("verified and succedded");
                    }).catch(function(o) {
                        console.error(o), [ 4e4, 60102 ].some(function(e) {
                            return e === o.errcode;
                        }) ? wx.showToast({
                            title: "验证码错误",
                            icon: "none",
                            duration: 1e3
                        }) : 60108 !== o.errcode ? wx.showToast({
                            title: "未知错误",
                            icon: "none",
                            duration: 1e3
                        }) : e.replaceOverlayStack("deal verify conflict");
                    });
                }
            }
        };
        o.default = i;
    },
    5721: function(e, o, n) {
        n.r(o);
        var t = n("ca62"), r = n("0b1e");
        for (var i in r) "default" !== i && function(e) {
            n.d(o, e, function() {
                return r[e];
            });
        }(i);
        n("9f27");
        var c = n("2877"), u = Object(c.a)(r.default, t.a, t.b, !1, null, "ceeb7680", null);
        o.default = u.exports;
    },
    "9f27": function(e, o, n) {
        var t = n("bfc3");
        n.n(t).a;
    },
    bfc3: function(e, o, n) {},
    ca62: function(e, o, n) {
        var t = function() {
            var e = this;
            e.$createElement;
            e._self._c, e._isMounted || (e.e0 = function(e) {
                e.stopPropagation();
            }, e.e1 = function(o) {
                return e.updateForm({
                    val: o,
                    key: "mobile"
                });
            }, e.e2 = function(o) {
                return e.updateForm({
                    val: o,
                    key: "code"
                });
            });
        }, r = [];
        n.d(o, "a", function() {
            return t;
        }), n.d(o, "b", function() {
            return r;
        });
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/AuthFlow/VerifyMobile/VerifyMobileForm-create-component", {
    "components/AuthFlow/VerifyMobile/VerifyMobileForm-create-component": function(e, o, n) {
        n("543d").createComponent(n("5721"));
    }
}, [ [ "components/AuthFlow/VerifyMobile/VerifyMobileForm-create-component" ] ] ]);