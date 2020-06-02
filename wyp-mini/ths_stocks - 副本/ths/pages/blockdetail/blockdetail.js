(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/blockdetail/blockdetail" ], {
    "589f": function(t, e, o) {
        var a = o("e51b");
        o.n(a).a;
    },
    "73b6": function(t, e, o) {
        o.r(e);
        var a = o("ecec"), i = o.n(a);
        for (var n in a) "default" !== n && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(n);
        e.default = i.a;
    },
    a0ed: function(t, e, o) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            o("efb7"), o("921b"), e(o("66fd")), t(e(o("ccd6")).default);
        }).call(this, o("543d").createPage);
    },
    ccd6: function(t, e, o) {
        o.r(e);
        var a = o("cfd0"), i = o("73b6");
        for (var n in i) "default" !== n && function(t) {
            o.d(e, t, function() {
                return i[t];
            });
        }(n);
        o("589f");
        var r = o("f0c5"), s = Object(r.a)(i.default, a.b, a.c, !1, null, "65acf87a", null, !1, a.a, void 0);
        e.default = s.exports;
    },
    cfd0: function(t, e, o) {
        var a = {
            "ths-unify-list": function() {
                return Promise.all([ o.e("common/vendor"), o.e("components/ths-unify-list/ths-unify-list") ]).then(o.bind(null, "efae"));
            }
        }, i = function() {
            var t = this, e = (t.$createElement, t._self._c, t._f("price")(t.newPrice)), o = t._f("formatPrecent")(t.gain && t.gain), a = t.__map(t.longArr, function(e, o) {
                var a = t._f("defaultValue")(e.name), i = t._f("price")(e.newPrice), n = t._f("formatPrecent")(e.gain);
                return {
                    $orig: t.__get_orig(e),
                    f2: a,
                    f3: i,
                    f4: n
                };
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    f0: e,
                    f1: o,
                    l0: a
                }
            });
        }, n = [];
        o.d(e, "b", function() {
            return i;
        }), o.d(e, "c", function() {
            return n;
        }), o.d(e, "a", function() {
            return a;
        });
    },
    e51b: function(t, e, o) {},
    ecec: function(t, e, o) {
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), o.push.apply(o, a);
                }
                return o;
            }
            function n(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var r = a(o("6e5f")), s = (a(o("9882")), a(o("b6aa"))), c = a(o("6ff3")), l = {
                onPageScroll: function() {
                    var e = this, o = t.createSelectorQuery();
                    o.select(".ths-list").boundingClientRect(), o.selectViewport().scrollOffset(), o.exec(function(t) {
                        t[0].top <= 0 ? (e.isTop = !0, e.fixedTop = "0px") : e.isTop && (e.isTop = !1), 
                        e.listScrollTop || (e.listScrollTop = t[1].scrollTop + t[0].top), e.listNowTop = t[0].top;
                    });
                },
                data: function() {
                    return {
                        name: "--",
                        code: "--",
                        newPrice: "",
                        gain: "",
                        longArr: [],
                        showText: !1,
                        isTop: !1,
                        fixedTop: "",
                        intro: "",
                        listScrollTop: "",
                        listNowTop: "",
                        inverted: !1,
                        titText: "成分股",
                        listActive: 1,
                        infoTit: [ "最新价", "涨跌幅" ],
                        load: 2,
                        colorKey: "gain",
                        titArr: [ "newPrice", "gain" ],
                        titDataType: [ 0, 1 ],
                        listData: [],
                        sharesInfoList: [],
                        sortTypeStatus: "2",
                        nowKey: "",
                        healthData: {},
                        dataTimer: null,
                        isShowNow: !0,
                        isUpdata: !1
                    };
                },
                onLoad: function(e) {
                    var o = this, a = e.code;
                    this.getBlockData(a), wx.showShareMenu({
                        withShareTicket: !0
                    }), this.dataTimer = setInterval(function() {
                        o.isShowNow && o.getBlockData(o.code, 1), o.isUpdata || o.isShowNow || (o.isUpdata = !0);
                    }, 3e4), t.loadFontFace({
                        family: "THS",
                        source: 'url("https://i.thsi.cn/m/fonts/THSMoneyfont-Medium.ttf")',
                        success: function() {}
                    });
                },
                onShareAppMessage: function(t) {
                    return {
                        path: "/pages/index/index?url=".concat("/pages/blockdetail/blockdetail", "&code=").concat(this.code, "&shareType=blockdetail")
                    };
                },
                onShow: function() {
                    var t = this;
                    this.isShowNow = !0, this.isUpdata && this.listArr.forEach(function(e) {
                        t.getBlockData(t.code, 1);
                    });
                },
                onHide: function() {
                    this.isShowNow = !1;
                },
                destroyed: function() {
                    this.isShowNow = !1;
                },
                computed: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(o), !0).forEach(function(e) {
                            n(t, e, o[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                        });
                    }
                    return t;
                }({}, (0, o("2f62").mapState)([ "oldMarketMap", "newMarketMap", "loginInfo" ])),
                methods: {
                    changeTextState: function() {
                        this.showText = !this.showText;
                    },
                    changeList: function(t) {
                        this.listActive = t;
                        var e = this[this.listArr[t - 1]];
                        this.listData = (0, s.default)(e, 0, e.length, this.titArr[0]);
                    },
                    sortData: function(e, o) {
                        this.listNowTop < 0 && t.pageScrollTo({
                            scrollTop: this.listScrollTop
                        }), this.listData.sort(function() {
                            return .5 - Math.random();
                        }), this.healthData = (0, c.default)(this.listData, this.titArr), this.listData = (0, 
                        s.default)(this.healthData.dataArr, 0, this.healthData.dataArr.length, this.titArr[e - 1], !o).concat(this.healthData.errArr), 
                        this.inverted = !o, this.nowKey = this.titArr[e - 1];
                    },
                    getBlockData: function(e, o) {
                        o || t.showLoading({
                            title: "正在加载"
                        });
                        var a = this;
                        t.request({
                            url: this.$http + "/wechatApplication/search/searchBlockInfo",
                            method: "POST",
                            time: 3e3,
                            data: {
                                code: e
                            },
                            success: function(e) {
                                console.log(e), !o && t.hideLoading(), 0 == e.data.status_code ? (a.formatData(e.data.result), 
                                o || (a.load = 3)) : (o || t.showToast({
                                    title: "数据获取失败，请稍候再试",
                                    icon: "none"
                                }), o || (a.load = 4));
                            },
                            fail: function(e) {
                                console.log(e), !o && t.hideLoading(), o || (t.showToast({
                                    title: "数据获取失败，请稍候再试",
                                    icon: "none"
                                }), a.load = 4);
                            }
                        });
                    },
                    formatData: function(t) {
                        this.name = t.blockInfo.name, this.code = t.blockInfo.code, this.newPrice = t.blockInfo.newPrice, 
                        this.gain = t.blockInfo.gain, t.bellwetherStockList && (this.longArr = t.bellwetherStockList.slice(0, 3)), 
                        t.sharesInfoList && (this.sharesInfoList = t.sharesInfoList, this.sharesInfoList && this.sharesInfoList.length > 0 && (this.healthData = (0, 
                        c.default)(this.sharesInfoList, this.titArr), this.nowKey ? (console.log(this.nowKey, "hhh"), 
                        this.listData = (0, s.default)(this.healthData.dataArr, 0, this.healthData.dataArr.length, this.nowKey, this.inverted).concat(this.healthData.errArr)) : (console.log(this.nowKey, "oooo"), 
                        this.listData = (0, s.default)(this.healthData.dataArr, 0, this.healthData.dataArr.length, this.titArr[1]).concat(this.healthData.errArr))));
                    },
                    jump: function(e) {
                        var o;
                        (o = "{}" != JSON.stringify(this.newMarketMap) ? r.default.getMarkAndCode(e.id, e.code, this.newMarketMap) : r.default.getMarkAndCode(e.id, e.code, this.oldMarketMap)) && e.name && t.navigateTo({
                            url: "../hq/hq?marketAndCode=".concat(o, "&name=").concat(e.name)
                        });
                    }
                }
            };
            e.default = l;
        }).call(this, o("543d").default);
    }
}, [ [ "a0ed", "common/runtime", "common/vendor" ] ] ]);