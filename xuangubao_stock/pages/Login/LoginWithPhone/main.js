(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/Login/LoginWithPhone/main" ], {
    "31e6": function(t, e, n) {
        var o = n("cd15");
        n.n(o).a;
    },
    "48b3": function(t, e, n) {
        n.r(e);
        var o = n("8fb3"), i = n("6b26");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("31e6");
        var u = n("2877"), c = Object(u.a)(i.default, o.a, o.b, !1, null, "3b276fd8", null);
        e.default = c.exports;
    },
    "540f": function(t, e, n) {
        function o(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = o(n("4360")), a = n("f8c8"), u = o(n("d05d")), c = o(n("9a62")), r = {
            name: "LoginWithPhone",
            components: {
                TitleBarCapsule: function() {
                    return n.e("components/TitleBarWithCapsule").then(n.bind(null, "3878"));
                },
                LoginPassCard: function() {
                    return n.e("components/LoginPassCard").then(n.bind(null, "16ab"));
                }
            },
            mixins: [ u.default ],
            data: function() {
                return {
                    prefixArray: c.default,
                    phonePrefix: "+86",
                    phoneNumber: "",
                    afterSentCode: !1,
                    sentCodeCountDown: 0,
                    codeArray: [],
                    codeCursor: 0,
                    tapcodeInputFocus: !1
                };
            },
            computed: {
                canGetCode: function() {
                    var t = /\d{11}/;
                    return this.phoneNumber.length && (t.test(this.phoneNumber) || "+86" !== this.phonePrefix);
                }
            },
            onUnload: function() {
                this.phonePrefix = "+86", this.phoneNumber = "", this.afterSentCode = !1, this.sentCodeCountDown = 0, 
                this.codeArray = [], this.codeCursor = 0, this.tapcodeInputFocus = !1;
            },
            methods: {
                bindprefixChange: function(t) {
                    var e = t.mp;
                    this.phonePrefix = c.default[e.detail.value].split(" ")[1];
                },
                inputCode: function(t) {
                    var e = t.mp.detail, n = e.cursor, o = e.value;
                    this.codeCursor = n, this.codeArray = o.split(""), 6 === this.codeArray.length && this.setCodeToBack();
                },
                tapcodeInput: function() {
                    this.tapcodeInputFocus = !0;
                },
                tapcodeInputBlur: function() {
                    this.tapcodeInputFocus = !1;
                },
                getCode: function() {
                    this.canGetCode && this.getCodeBackEnd();
                },
                regetCode: function() {
                    this.sentCodeCountDown > 0 || this.getCodeBackEnd();
                },
                getCodeBackEnd: function() {
                    var t = this;
                    (0, a.sendMobilCodeWSCN)("".concat(this.phonePrefix).concat(this.phoneNumber)).then(function(e) {
                        2e4 === e.code && e.data.status && "success" === e.data.status && (wx.showToast({
                            title: "短信已发送"
                        }), t.afterSentCode = !0, t.tapcodeInput(), t.sentCodeCountDown = 60, t.timer && (clearInterval(t.timer), 
                        t.timer = null), t.timer = setInterval(function() {
                            t.sentCodeCountDown <= 0 ? (clearInterval(t.timer), t.sentCodeCountDown = 0) : t.sentCodeCountDown = t.sentCodeCountDown - 1;
                        }, 1e3));
                    }).catch(function() {});
                },
                setCodeToBack: function() {
                    wx.showLoading({
                        title: "验证中..."
                    }), (0, a.verifyCaptchaWSCN)("".concat(this.phonePrefix).concat(this.phoneNumber), this.codeArray.join("")).then(function(t) {
                        wx.hideLoading();
                        var e = t.code, n = t.data;
                        if (2e4 === e) {
                            var o = n.accounts;
                            n.multi_user && Array.isArray(o) ? i.default.commit("bindAccount/setWscnAccounts", o) : (i.default.commit("user/setToken", n.token), 
                            i.default.dispatch("user/updateUserInfo"), wx.showToast({
                                title: "登录成功"
                            }), wx.navigateBack({
                                delta: 2
                            }));
                        } else wx.showToast({
                            title: "验证失败,请稍后重试！",
                            icon: "none",
                            duration: 1500
                        });
                    }).catch(function(t) {
                        wx.hideLoading(), console.error("verifyCode", t);
                    });
                }
            }
        };
        e.default = r;
    },
    "6b26": function(t, e, n) {
        n.r(e);
        var o = n("540f"), i = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = i.a;
    },
    "6dd2": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("6cdc"), n("921b"), e(n("66fd")), t(e(n("48b3")).default);
        }).call(this, n("543d").createPage);
    },
    "8fb3": function(t, e, n) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
        n.d(e, "a", function() {
            return o;
        }), n.d(e, "b", function() {
            return i;
        });
    },
    cd15: function(t, e, n) {}
}, [ [ "6dd2", "common/runtime", "common/vendor" ] ] ]);