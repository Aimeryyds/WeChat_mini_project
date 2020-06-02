(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/optional/optional" ], {
    "0dbf": function(t, e, a) {
        a.r(e);
        var n = a("e9b1"), o = a("5947");
        for (var i in o) "default" !== i && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(i);
        a("eda3");
        var r = a("f0c5"), l = Object(r.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = l.exports;
    },
    "34b8": function(t, e, a) {},
    "354b": function(t, e, a) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), a.push.apply(a, n);
                }
                return a;
            }
            function i(t, e, a) {
                return e in t ? Object.defineProperty(t, e, {
                    value: a,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = a, t;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = a("2f62"), l = (n(a("9882")), n(a("b6aa"))), s = n(a("6ff3")), c = n(a("6e5f")), u = {
                data: function() {
                    return {
                        fixedTop: "0",
                        isTop: !1,
                        titText: "",
                        optionText: [],
                        titArr: [ "newPrice", "gain" ],
                        infoTit: [ "最新价", "涨跌幅" ],
                        listActive: "1",
                        titDataType: [ 0, 1 ],
                        colorKey: "gain",
                        listData: [],
                        listScrollTop: "",
                        listNowTop: "",
                        inverted: !1,
                        nowKey: "",
                        healthData: {},
                        dataTimer: null,
                        isShowNow: !0,
                        isUpdata: !1,
                        sortTypeStatus: "2"
                    };
                },
                onPageScroll: function() {
                    var e = this, a = t.createSelectorQuery();
                    a.select(".ths-list").boundingClientRect(), a.selectViewport().scrollOffset(), a.exec(function(t) {
                        t[0].top <= 0 ? (e.isTop = !0, e.fixedTop = "0px") : e.isTop && (e.isTop = !1), 
                        e.listScrollTop || (e.listScrollTop = t[1].scrollTop + t[0].top), e.listNowTop = t[0].top;
                    });
                },
                computed: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? o(Object(a), !0).forEach(function(e) {
                            i(t, e, a[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                        });
                    }
                    return t;
                }({}, (0, r.mapState)([ "oldMarketMap", "newMarketMap", "sysInfo", "loginInfo" ])),
                onShareAppMessage: function(t) {
                    return {
                        path: "/pages/optional/optional"
                    };
                },
                onLoad: function() {
                    wx.showShareMenu({
                        withShareTicket: !0
                    }), this.openDataTimer(), t.loadFontFace({
                        family: "THS",
                        source: 'url("https://i.thsi.cn/m/fonts/THSMoneyfont-Medium.ttf")',
                        success: function() {}
                    });
                },
                onShow: function() {
                    this.loginInfo.account ? this.getOptionalStock() : (this.listData = [], this.closeDataTimer()), 
                    this.isShowNow = !0;
                },
                onHide: function() {
                    this.isShowNow = !1;
                },
                destroyed: function() {
                    this.isShowNow = !1;
                },
                methods: {
                    jumpBackWash: function() {
                        t.navigateTo({
                            url: "../backWash/backWash"
                        });
                    },
                    sortData: function(e, a) {
                        this.listNowTop < 0 && t.pageScrollTo({
                            scrollTop: this.listScrollTop
                        }), this.healthData = (0, s.default)(this.listData, this.titArr), this.listData = (0, 
                        l.default)(this.healthData.dataArr, 0, this.healthData.dataArr.length, this.titArr[e - 1], !a).concat(this.healthData.errArr), 
                        this.inverted = !a, this.nowKey = this.titArr[e - 1];
                    },
                    jumpSearch: function() {
                        t.navigateTo({
                            url: "../searchstock/searchstock"
                        });
                    },
                    getPhoneNumber: function(e) {
                        var a = this;
                        if (e.detail.iv && e.detail.encryptedData) {
                            var n = {
                                data: {
                                    iv: e.detail.iv,
                                    encryptedData: e.detail.encryptedData
                                },
                                http: this.$http
                            };
                            this.$store.dispatch("promiseLogin", n).then(function() {
                                a.getOptionalStock();
                            }).catch(function() {
                                console.log("登录失败了");
                            });
                        } else t.showToast({
                            icon: "none",
                            title: "您未授权手机号"
                        });
                    },
                    getOptionalStock: function() {
                        var e = this;
                        t.request({
                            url: this.$http + "/wechatApplication/optional/searchOptionalStock",
                            method: "POST",
                            time: 3e3,
                            data: {
                                token: this.loginInfo.token
                            },
                            success: function(t) {
                                if (0 == t.data.status_code && t.data.result.sharesInfoList) {
                                    var a = JSON.parse(t.data.result.sharesInfoList);
                                    a.length > 0 && (e.nowKey ? (e.healthData = (0, s.default)(a, e.titArr), e.listData = (0, 
                                    l.default)(e.healthData.dataArr, 0, e.healthData.dataArr.length, e.nowKey, e.inverted).concat(e.healthData.errArr)) : (e.healthData = (0, 
                                    s.default)(a, e.titArr), e.listData = (0, l.default)(e.healthData.dataArr, 0, e.healthData.dataArr.length, e.titArr[1], e.inverted).concat(e.healthData.errArr)));
                                } else e.listData = [];
                            },
                            fail: function(t) {
                                console.log(t), e.listData = [];
                            }
                        });
                    },
                    jump: function(e) {
                        var a;
                        (a = "{}" != JSON.stringify(this.newMarketMap) ? c.default.getMarkAndCode(e.id, e.code, this.newMarketMap) : c.default.getMarkAndCode(e.id, e.code, this.oldMarketMap)) && e.name && t.navigateTo({
                            url: "../hq/hq?marketAndCode=".concat(a, "&name=").concat(e.name)
                        });
                    },
                    openDataTimer: function() {
                        var t = this;
                        this.dataTimer = setInterval(function() {
                            t.isShowNow && t.getOptionalStock();
                        }, 3e4);
                    },
                    closeDataTimer: function() {
                        this.dataTimer && clearInterval(this.dataTimer);
                    }
                }
            };
            e.default = u;
        }).call(this, a("543d").default);
    },
    5947: function(t, e, a) {
        a.r(e);
        var n = a("354b"), o = a.n(n);
        for (var i in n) "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = o.a;
    },
    8472: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("efb7"), a("921b"), e(a("66fd")), t(e(a("0dbf")).default);
        }).call(this, a("543d").createPage);
    },
    e9b1: function(t, e, a) {
        var n = {
            "ths-unify-list": function() {
                return Promise.all([ a.e("common/vendor"), a.e("components/ths-unify-list/ths-unify-list") ]).then(a.bind(null, "efae"));
            }
        }, o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
        a.d(e, "b", function() {
            return o;
        }), a.d(e, "c", function() {
            return i;
        }), a.d(e, "a", function() {
            return n;
        });
    },
    eda3: function(t, e, a) {
        var n = a("34b8");
        a.n(n).a;
    }
}, [ [ "8472", "common/runtime", "common/vendor" ] ] ]);