(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/bindphonenum/bindphonenum" ], {
    "0a4d": function(e, t, n) {
        var o = n("b09c");
        n.n(o).a;
    },
    "1fde": function(e, t, n) {
        n.r(t);
        var o = n("d962"), i = n.n(o);
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = i.a;
    },
    "712e": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("efb7"), n("921b"), t(n("66fd")), e(t(n("faf2")).default);
        }).call(this, n("543d").createPage);
    },
    b09c: function(e, t, n) {},
    d962: function(e, t, n) {
        (function(e) {
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function i(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var a = n("2f62"), c = o(n("d247"));
            o(n("6e5f"));
            var u = {
                data: function() {
                    return {
                        phoneNum: "",
                        verify: "",
                        countTimer: null,
                        error_msg: "",
                        bindLock: !1,
                        publicKey: "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCO7fhk4du6g+BC9xaAlebmgVa4qO9X0P1/STxydiIeaLDbZB1HqQ67659P2ZoKik4jYGJ0flM4Z1wQlaIRGOGM7LjkJusfXxaPa6x0zoMuVjJf1E2whHOInzu7KEqfEIptY9akd1LAv2yWuQT6TglYg/c0gpZMYugqLaDrwRUc6QIDAQAB-----END PUBLIC KEY-----"
                    };
                },
                computed: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? i(Object(n), !0).forEach(function(t) {
                            r(e, t, n[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                        });
                    }
                    return e;
                }({}, (0, a.mapState)([ "verifyCodeTime", "timeStart", "loginInfo" ]), {
                    active: function() {
                        return this.phoneNumComplate && this.verifyCodeComplate;
                    },
                    phoneNumComplate: function() {
                        return this.phoneNum.replace(/[^\d]/g, "").length > 0;
                    },
                    verifyCodeComplate: function() {
                        return 6 == this.verify.replace(/[^\d]/g, "").length;
                    }
                }),
                methods: {
                    phoneHandleInput: function(e) {
                        this.phoneNum = e.target.value.replace(/[^\d]/g, "").slice(0, 11);
                    },
                    verifyHandleInput: function(e) {
                        this.verify = e.target.value.replace(/[^\d]/g, "").slice(0, 6);
                    },
                    clearPhoneNum: function() {
                        this.phoneNum = "", this.error_msg = "", this.phoneNum = "";
                    },
                    getCode: function() {
                        var t, n = this;
                        this.phoneNumComplate && !this.error_msg && 60 == this.verifyCodeTime ? (this.encrptyPhoneNum(), 
                        this.$store.commit("setVerifyCodeTime", 59), this.$store.commit("setTimeStart", +new Date()), 
                        this.countTimer = setInterval(function() {
                            (t = 59 - Math.floor((+new Date() - n.timeStart) / 1e3)) <= 0 ? (clearInterval(n.countTimer), 
                            n.$store.commit("setVerifyCodeTime", 60)) : n.$store.commit("setVerifyCodeTime", t);
                        }, 1e3)) : this.error_msg || e.showToast({
                            title: "请输入手机号",
                            icon: "none"
                        });
                    },
                    encrptyPhoneNum: function() {
                        var t = new c.default.RSAKey(), n = (t = c.default.KEYUTIL.getKey(this.publicKey)).encrypt(this.phoneNum);
                        n = c.default.hex2b64(n), e.request({
                            url: this.$http + "/wechatApplication/login/smsSend",
                            method: "POST",
                            time: 3e3,
                            data: {
                                token: this.loginInfo.token,
                                udid: "",
                                mobile: n
                            },
                            success: function(t) {
                                "0" == t.data.result.status_code ? e.showToast({
                                    title: "验证码发送成功",
                                    icon: "success"
                                }) : e.showToast({
                                    title: "验证码发送失败",
                                    icon: "none"
                                });
                            },
                            fail: function(t) {
                                console.log(t), e.showToast({
                                    title: "验证码发送失败",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    resetVerifyState: function() {
                        this.$store.commit("setVerifyCodeTime", 60), clearInterval(this.countTimer), this.bindLock = !1;
                    },
                    bind: function() {
                        if (this.active && !this.error_msg && !this.bindLock) {
                            e.showLoading({
                                title: "处理中..."
                            }), this.bindLock = !0;
                            var t = new c.default.RSAKey(), n = (t = c.default.KEYUTIL.getKey(this.publicKey)).encrypt(this.phoneNum);
                            n = c.default.hex2b64(n);
                            var o = t.encrypt(this.verify);
                            o = c.default.hex2b64(o);
                            var i = this;
                            e.request({
                                url: this.$http + "/wechatApplication/login/smsCheck",
                                method: "POST",
                                time: 3e3,
                                data: {
                                    token: this.loginInfo.token,
                                    udid: "",
                                    mobile: n,
                                    signcode: o
                                },
                                success: function(t) {
                                    if (e.hideLoading(), 0 == t.data.result.status_code) {
                                        var n = i.loginInfo;
                                        n.account = t.data.result.account, n.isNew = t.data.result.isNew, t.data.result.userid && (n.userid = t.data.result.userid), 
                                        e.setStorageSync("loginInfo", JSON.stringify(n)), i.$store.commit("setLoginInfo", n), 
                                        e.showToast({
                                            title: "切换手机号成功",
                                            icon: "success"
                                        }), i.resetVerifyState(), setTimeout(function() {
                                            e.navigateBack({
                                                delta: 1
                                            });
                                        }, 1e3);
                                    } else e.showToast({
                                        title: "请输入正确的验证码",
                                        icon: "none"
                                    }), i.bindLock = !1;
                                },
                                fail: function(t) {
                                    console.log(t), e.hideLoading(), e.showToast({
                                        title: "出现异常，切换手机号失败",
                                        icon: "none"
                                    }), i.bindLock = !1;
                                }
                            });
                        }
                    }
                }
            };
            t.default = u;
        }).call(this, n("543d").default);
    },
    f62d: function(e, t, n) {
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return i;
        }), n.d(t, "a", function() {});
    },
    faf2: function(e, t, n) {
        n.r(t);
        var o = n("f62d"), i = n("1fde");
        for (var r in i) "default" !== r && function(e) {
            n.d(t, e, function() {
                return i[e];
            });
        }(r);
        n("0a4d");
        var a = n("f0c5"), c = Object(a.a)(i.default, o.b, o.c, !1, null, "24a5824d", null, !1, o.a, void 0);
        t.default = c.exports;
    }
}, [ [ "712e", "common/runtime", "common/vendor" ] ] ]);