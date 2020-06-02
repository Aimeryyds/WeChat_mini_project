(global["webpackJsonp"] = global["webpackJsonp"] || []).push([ [ "pages/login" ], {
    "25f0": function(e, t, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var i = o("f2de"), n = r(o("d4cb")), s = r(o("98a9"));
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function d(e) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {}, i = Object.keys(o);
                "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(o).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                }))), i.forEach(function(t) {
                    c(e, t, o[t]);
                });
            }
            return e;
        }
        function c(e, t, o) {
            return t in e ? Object.defineProperty(e, t, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = o, e;
        }
        var a = {
            code: 1,
            pwd: 2,
            retrieve: 3
        }, m = 60, u = {
            name: "login",
            components: {
                mgButton: n.default,
                mgInput: s.default
            },
            computed: d({}, (0, i.mapState)([ "channel", "openId" ])),
            data: function() {
                return {
                    mobile: "",
                    mobileVerifyCode: "",
                    picVerifyCode: "",
                    picVerifyCodeToken: "",
                    password: "",
                    mode: a.code,
                    picCodeUrl: "",
                    modeEnum: a,
                    timeStep: m,
                    step: m,
                    isFocusInput: !1,
                    blurHandle: null,
                    stepHandle: null,
                    redirectUrl: ""
                };
            },
            onLoad: function(e) {
                this.redirectUrl = decodeURIComponent(e.redirectUrl || ""), this.resetPicCode();
            },
            methods: d({}, (0, i.mapActions)("user", [ "useRetrievePwdLogin", "useVerifyCodeLogin", "usePwdLogin", "sendVoiceMessageCode", "sendMessageSecurityCode" ]), {
                onFocus: function(e, t, o) {
                    console.log("onFocus"), this.isFocusInput = !0, this.blurHandle && clearTimeout(this.blurHandle);
                },
                onBlur: function(e, t, o) {
                    var i = this;
                    console.log("onBlur"), this.blurHandle = setTimeout(function() {
                        i.isFocusInput = !1;
                    }, 10);
                },
                onInput: function(e, t, o) {
                    this[o.key] = t;
                },
                runStep: function() {
                    var e = this;
                    this.timeStep <= 0 ? this.timeStep = m : this.stepHandle = setTimeout(function() {
                        e.timeStep--, e.runStep();
                    }, 1e3);
                },
                onSwitchMode: function(e) {
                    this.modeEnum[e] && (this.mode = this.modeEnum[e]);
                },
                onSubmit: function() {
                    var e = this.mode, t = this.modeEnum;
                    e == t.code ? this.doVerifyCodeLogin() : e == t.pwd ? this.doPwdLogin() : e == t.retrieve && this.doRetrievePwdLogin();
                },
                doSendMessageSecurityCode: function() {
                    var e = this, t = this.mobile, o = this.picVerifyCode, i = this.picVerifyCodeToken;
                    this.sendMessageSecurityCode({
                        mobile: t,
                        picVerifyCode: o,
                        picVerifyCodeToken: i
                    }).then(function(t) {
                        e.$toast.show("验证码已发", "success"), e.runStep();
                    }, function(t) {
                        e.$mg.errMsg(t);
                    });
                },
                doSendVoiceMessageCode: function() {
                    var e = this, t = this.mobile;
                    this.sendVoiceMessageCode({
                        mobile: t
                    }).then(function(t) {
                        e.$toast.show("语音验证码已发", "success"), e.runStep();
                    }, function(t) {
                        e.$mg.errMsg(t);
                    });
                },
                doVerifyCodeLogin: function() {
                    var e = this, t = this.mobile, o = this.mobileVerifyCode, i = this.picVerifyCode, n = void 0 === i ? "" : i, s = this.picVerifyCodeToken, r = void 0 === s ? "" : s, d = this.openId, c = void 0 === d ? "" : d;
                    this.useVerifyCodeLogin({
                        mobile: t,
                        mobileVerifyCode: o,
                        picVerifyCode: n,
                        picVerifyCodeToken: r,
                        openId: c
                    }).then(function(t) {
                        e.$toast.show("短信验证成功", "success"), e.loginAfter();
                    }, function(t) {
                        e.$mg.errMsg(t);
                    });
                },
                doPwdLogin: function() {
                    var e = this, t = this.mobile, o = this.password, i = this.openId;
                    this.usePwdLogin({
                        mobile: t,
                        password: o,
                        openId: i
                    }).then(function(t) {
                        e.$toast.show("密码验证成功", "success"), e.loginAfter();
                    }, function(t) {
                        e.$mg.errMsg(t);
                    });
                },
                doRetrievePwdLogin: function() {
                    var e = this, t = this.mobile, o = this.mobileVerifyCode, i = this.picVerifyCode, n = this.picVerifyCodeToken, s = this.password, r = this.openId;
                    this.useRetrievePwdLogin({
                        mobile: t,
                        mobileVerifyCode: o,
                        picVerifyCode: i,
                        picVerifyCodeToken: n,
                        password: s,
                        openId: r
                    }).then(function(t) {
                        e.$toast.show("密码修改成功", "success"), e.loginAfter();
                    }, function(t) {
                        e.$mg.errMsg(t);
                    });
                },
                resetPicCode: function(e) {
                    var t = this.$api.get("login.getPicVeriCode"), o = ("" + Math.random()).slice(2) + ("" + Math.random()).slice(2);
                    this.picCodeUrl = this.$mgRouter.buildUrl(t.url, {
                        channel: this.channel,
                        picVerifyCodeToken: o,
                        t: o
                    }), this.picVerifyCodeToken = o;
                },
                loginAfter: function() {
                    this.redirectUrl ? this.$mgRouter.redirectTo(this.redirectUrl) : this.$mgRouter.navigateBack();
                },
                gotoPage: function(e) {
                    this.$mgRouter.navigateTo("/pages/viewPage/index", {
                        url: e
                    });
                }
            })
        };
        t.default = u;
    },
    4601: function(e, t, o) {},
    "7b49": function(e, t, o) {
        "use strict";
        var i = o("4601"), n = o.n(i);
        n.a;
    },
    c3e7: function(e, t, o) {
        "use strict";
        var i = function() {
            var e = this, t = e.$createElement, o = e._self._c || t;
            return o("view", {
                staticClass: "content loginPage"
            }, [ o("view", {
                staticClass: "login-title"
            }, [ o("view", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: e.mode == e.modeEnum.pwd,
                    expression: "mode == modeEnum.pwd"
                } ]
            }, [ e._v("密码登录") ]), o("view", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: e.mode == e.modeEnum.code,
                    expression: "mode == modeEnum.code"
                } ]
            }, [ e._v("手机快捷登录") ]), o("view", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: e.mode == e.modeEnum.retrieve,
                    expression: "mode == modeEnum.retrieve"
                } ]
            }, [ e._v("重置密码登录") ]), o("view", {
                staticClass: "login-subtitle"
            }, [ e._v("欢迎来到蘑菇租房") ]) ]), o("view", {
                staticClass: "login-form"
            }, [ o("view", {
                staticClass: "mg-border-bottom form-item"
            }, [ o("mg-input", {
                attrs: {
                    focus: !0,
                    params: {
                        key: "mobile"
                    },
                    maxlength: "11",
                    type: "number",
                    placeholder: "请输入手机号",
                    eventid: "28b9e905-0",
                    mpcomid: "28b9e905-0"
                },
                on: {
                    focus: e.onFocus,
                    blur: e.onBlur,
                    input: e.onInput
                }
            }) ], 1), e.mode == e.modeEnum.code || e.mode == e.modeEnum.retrieve ? o("view", {
                staticClass: "mg-border-bottom mg-flex form-item"
            }, [ o("view", {
                staticClass: "mg-flex-col"
            }, [ o("mg-input", {
                attrs: {
                    params: {
                        key: "picVerifyCode"
                    },
                    maxlength: "8",
                    placeholder: "请输入图片验证码",
                    eventid: "28b9e905-1",
                    mpcomid: "28b9e905-1"
                },
                on: {
                    focus: e.onFocus,
                    blur: e.onBlur,
                    input: e.onInput
                }
            }) ], 1), o("view", {
                staticClass: "mg-border-left mg-flex mg-flex_both_center right-item",
                attrs: {
                    eventid: "28b9e905-2"
                },
                on: {
                    click: e.resetPicCode
                }
            }, [ o("image", {
                staticClass: "item-img",
                attrs: {
                    src: e.picCodeUrl
                }
            }) ]) ]) : e._e(), e.mode == e.modeEnum.code || e.mode == e.modeEnum.retrieve ? o("view", {
                staticClass: "mg-border-bottom mg-flex form-item"
            }, [ o("view", {
                staticClass: "mg-flex-col"
            }, [ o("mg-input", {
                attrs: {
                    params: {
                        key: "mobileVerifyCode"
                    },
                    maxlength: "6",
                    type: "number",
                    placeholder: "请输入验证码",
                    eventid: "28b9e905-3",
                    mpcomid: "28b9e905-2"
                },
                on: {
                    focus: e.onFocus,
                    blur: e.onBlur,
                    input: e.onInput
                }
            }) ], 1), e.mode == e.modeEnum.code || e.mode == e.modeEnum.retrieve ? o("view", {
                staticClass: "mg-border-left right-item"
            }, [ e.timeStep < e.step ? o("view", {
                staticClass: "placeholder txtcenter"
            }, [ o("text", {
                staticClass: "text-orange"
            }, [ e._v(e._s(e.timeStep) + "s") ]), o("text", [ e._v("重新获取") ]) ]) : o("view", {
                staticClass: "text-orange txtcenter",
                attrs: {
                    eventid: "28b9e905-4"
                },
                on: {
                    click: e.doSendMessageSecurityCode
                }
            }, [ e._v("获取验证码") ]) ]) : e._e() ]) : e._e(), e.mode == e.modeEnum.pwd || e.mode == e.modeEnum.retrieve ? o("view", {
                staticClass: "mg-border-bottom mg-flex form-item"
            }, [ o("mg-input", {
                attrs: {
                    params: {
                        key: "password"
                    },
                    placeholder: e.mode == e.modeEnum.retrieve ? "请输入新密码（6-15位数字+字母）" : "请输入密码",
                    password: !0,
                    eventid: "28b9e905-5",
                    mpcomid: "28b9e905-3"
                },
                on: {
                    focus: e.onFocus,
                    blur: e.onBlur,
                    input: e.onInput
                }
            }) ], 1) : e._e(), o("view", {
                staticClass: "form-item-desc"
            }, [ e.timeStep <= 30 ? o("view", {
                staticClass: "text-desc"
            }, [ o("text", [ e._v("若未收到短信验证码，请选择") ]), o("text", {
                staticClass: "text-orange",
                attrs: {
                    eventid: "28b9e905-6"
                },
                on: {
                    click: e.doSendVoiceMessageCode
                }
            }, [ e._v("接听语音验证码") ]) ]) : e._e() ]), o("mg-button", {
                attrs: {
                    eventid: "28b9e905-7",
                    mpcomid: "28b9e905-4"
                },
                on: {
                    click: e.onSubmit
                }
            }, [ e._v(e._s(e.mode == e.modeEnum.retrieve ? "提交并登录" : "登录")) ]), o("view", {
                staticClass: "form-item-desc"
            }, [ e.mode == e.modeEnum.code ? o("text", {
                attrs: {
                    eventid: "28b9e905-8"
                },
                on: {
                    click: function(t) {
                        e.onSwitchMode("pwd");
                    }
                }
            }, [ e._v("密码登录") ]) : e._e(), e.mode == e.modeEnum.pwd || e.mode == e.modeEnum.retrieve ? o("text", {
                staticClass: "desc-text",
                attrs: {
                    eventid: "28b9e905-9"
                },
                on: {
                    click: function(t) {
                        e.onSwitchMode("code");
                    }
                }
            }, [ e._v("手机快捷登录") ]) : e._e(), e.mode == e.modeEnum.pwd ? o("text", {
                staticClass: "mg-border-left form-line"
            }) : e._e(), e.mode == e.modeEnum.pwd ? o("text", {
                staticClass: "desc-text",
                attrs: {
                    eventid: "28b9e905-10"
                },
                on: {
                    click: function(t) {
                        e.onSwitchMode("retrieve");
                    }
                }
            }, [ e._v("忘记密码") ]) : e._e() ]) ], 1), e.mode == e.modeEnum.code || e.mode == e.modeEnum.retrieve ? o("view", {
                staticClass: "login-bottom"
            }, [ o("view", {
                staticClass: "text-lightgray"
            }, [ e._v("新用户初次登录将自动注册，注册成功即视为已阅读并同意") ]), o("view", [ o("text", {
                staticClass: "text-dark",
                attrs: {
                    eventid: "28b9e905-11"
                },
                on: {
                    tap: function(t) {
                        e.gotoPage("https://h5.mgzf.com/login/protocol");
                    }
                }
            }, [ e._v("《用户使用条款及隐私声明》") ]), e._v("及"), o("text", {
                staticClass: "text-dark",
                attrs: {
                    eventid: "28b9e905-12"
                },
                on: {
                    tap: function(t) {
                        e.gotoPage("https://h5.mgzf.com/minisite/renterApp/privacyPolicy.html");
                    }
                }
            }, [ e._v("《蘑菇租房隐私政策》") ]) ]) ]) : e._e() ]);
        }, n = [];
        o.d(t, "a", function() {
            return i;
        }), o.d(t, "b", function() {
            return n;
        });
    },
    c6f7: function(e, t, o) {
        "use strict";
        o.r(t);
        var i = o("c3e7"), n = o("d797");
        for (var s in n) "default" !== s && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(s);
        o("7b49");
        var r = o("17cc"), d = Object(r["a"])(n["default"], i["a"], i["b"], !1, null, null, null);
        t["default"] = d.exports;
    },
    d797: function(e, t, o) {
        "use strict";
        o.r(t);
        var i = o("25f0"), n = o.n(i);
        for (var s in i) "default" !== s && function(e) {
            o.d(t, e, function() {
                return i[e];
            });
        }(s);
        t["default"] = n.a;
    },
    fde2: function(e, t, o) {
        "use strict";
        o("6cdc");
        var i = s(o("9f5e")), n = s(o("c6f7"));
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        Page((0, i.default)(n.default));
    }
}, [ [ "fde2", "common/runtime", "common/vendor" ] ] ]);