(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/hq/hq" ], {
    "115b": function(t, n, e) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return i;
        }), e.d(n, "a", function() {});
    },
    4759: function(t, n, e) {
        e.r(n);
        var o = e("4aec"), i = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = i.a;
    },
    "4aec": function(t, n, e) {
        (function(t) {
            function o(t, n) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    n && (o = o.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable;
                    })), e.push.apply(e, o);
                }
                return e;
            }
            function i(t, n, e) {
                return n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e, t;
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var a = {
                data: function() {
                    return {
                        webSrc: "",
                        isOption: !1,
                        code: "",
                        name: "",
                        id: "",
                        sharePath: "",
                        marketAndCode: "",
                        popUpType: "download",
                        optionIcon: "../../static/add.png",
                        optionText: "加自选",
                        showPop: !0,
                        isIndex: !1
                    };
                },
                onShow: function() {
                    this.loginInfo.account && this.checkOptional(this.code);
                },
                onShareAppMessage: function(t) {
                    return {
                        title: "".concat(this.name, "(").concat(this.code, ")"),
                        path: "/pages/index/index?url=".concat("/pages/hq/hq", "&marketAndCode=").concat(this.marketAndCode, "&name=").concat(this.name, "&isIndex=").concat(this.isIndex ? 1 : 2, "&shareType=hq")
                    };
                },
                onLoad: function(t) {
                    var n = t.marketAndCode, e = t.name, o = t.isIndex;
                    n && e && (o && (this.isIndex = !0), this.name = e, this.code = n.split("_")[1], 
                    this.id = n.split("_")[2], this.marketAndCode = n, this.webSrc = "https://ozone.10jqka.com.cn/tg_templates/doubleone/2020-q1/mphq/index.html#code=" + n, 
                    wx.showShareMenu({
                        withShareTicket: !0
                    }), this.loginInfo.account && this.checkOptional(this.code));
                },
                computed: function(t) {
                    for (var n = 1; n < arguments.length; n++) {
                        var e = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? o(Object(e), !0).forEach(function(n) {
                            i(t, n, e[n]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : o(Object(e)).forEach(function(n) {
                            Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n));
                        });
                    }
                    return t;
                }({}, (0, e("2f62").mapState)([ "loginInfo", "iPhoneX" ])),
                methods: {
                    getPhone: function(n) {
                        var e = this;
                        if (n.detail.iv && n.detail.encryptedData) {
                            var o = {
                                data: {
                                    iv: n.detail.iv,
                                    encryptedData: n.detail.encryptedData
                                },
                                http: this.$http
                            };
                            this.$store.dispatch("promiseLogin", o).then(function() {
                                console.log("登录成功了"), e.checkOptional(e.code);
                            }).catch(function() {
                                console.log("登录失败了");
                            });
                        } else t.showToast({
                            icon: "none",
                            title: "您未授权手机号"
                        });
                    },
                    checkOptional: function(n) {
                        var e = this;
                        t.request({
                            url: this.$http + "/wechatApplication/optional/checkIsOptionalStock",
                            method: "POST",
                            time: 3e3,
                            data: {
                                token: this.loginInfo.token,
                                code: n
                            },
                            success: function(t) {
                                0 == t.data.status_code && t.data.result && (e.isOption = t.data.result.isOptional, 
                                e.isOption && (e.optionIcon = "../../static/del.png", e.optionText = "删自选"));
                            }
                        });
                    },
                    optionChange: function() {
                        if (this.loginInfo.account) {
                            var n = this, e = "", o = "", i = this.$http, a = {
                                token: this.loginInfo.token,
                                code: this.code
                            };
                            this.isOption ? (e = "正在删除中...", o = "删除", i += "/wechatApplication/optional/deleteOptionalStock", 
                            a.operation = "delete") : (e = "正在添加中...", o = "添加", i += "/wechatApplication/optional/addOptionalStock", 
                            a.id = n.id, a.operation = "add"), t.showLoading({
                                title: e
                            }), t.request({
                                url: i,
                                data: a,
                                method: "POST",
                                time: 3e3,
                                success: function(e) {
                                    t.hideLoading(), 0 == e.data.status_code ? (t.showToast({
                                        title: o + "成功",
                                        icon: n.isOptional ? "none" : "success"
                                    }), n.isOption = !n.isOption, n.isOption ? (n.optionIcon = "../../static/del.png", 
                                    n.optionText = "删自选") : (n.optionIcon = "../../static/add.png", n.optionText = "加自选")) : t.showToast({
                                        title: o + "失败",
                                        icon: "none"
                                    });
                                },
                                fail: function(n) {
                                    console.log(n), t.hideLoading(), t.showToast({
                                        title: o + "失败",
                                        icon: "none"
                                    });
                                }
                            });
                        }
                    },
                    jumpBackWash: function() {
                        t.navigateTo({
                            url: "../backWash/backWash"
                        });
                    },
                    changePopUpState: function(t, n) {
                        1 == t && (this.showPop = !1);
                    }
                }
            };
            n.default = a;
        }).call(this, e("543d").default);
    },
    "5bdb": function(t, n, e) {
        var o = e("74d5");
        e.n(o).a;
    },
    "74d5": function(t, n, e) {},
    d37b: function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("efb7"), e("921b"), n(e("66fd")), t(n(e("fc75")).default);
        }).call(this, e("543d").createPage);
    },
    fc75: function(t, n, e) {
        e.r(n);
        var o = e("115b"), i = e("4759");
        for (var a in i) "default" !== a && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(a);
        e("5bdb");
        var c = e("f0c5"), s = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = s.exports;
    }
}, [ [ "d37b", "common/runtime", "common/vendor" ] ] ]);