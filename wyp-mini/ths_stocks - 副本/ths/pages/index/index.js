(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    2715: function(t, e, i) {
        var n = {
            "ths-nav": function() {
                return i.e("components/ths-nav/ths-nav").then(i.bind(null, "e7e9"));
            },
            "ths-contrast": function() {
                return i.e("components/ths-contrast/ths-contrast").then(i.bind(null, "333d"));
            },
            "ths-headline": function() {
                return i.e("components/ths-headline/ths-headline").then(i.bind(null, "0176"));
            },
            "ths-todayplate": function() {
                return i.e("components/ths-todayplate/ths-todayplate").then(i.bind(null, "1ad5"));
            },
            "ths-unify-list": function() {
                return Promise.all([ i.e("common/vendor"), i.e("components/ths-unify-list/ths-unify-list") ]).then(i.bind(null, "efae"));
            },
            "ths-popUp": function() {
                return i.e("components/ths-popUp/ths-popUp").then(i.bind(null, "375a"));
            }
        }, a = function() {
            var t = this, e = (t.$createElement, t._self._c, t._f("defaultValue")(t.jyrInfo.text)), i = t.__map(t.exponentData, function(e, i) {
                var n = t._f("defaultValue")(e.name), a = t._f("price")(e.newPrice), s = t._f("formatNum")(e.gainPoint), o = t._f("formatPrecent")(e.gain);
                return {
                    $orig: t.__get_orig(e),
                    f1: n,
                    f2: a,
                    f3: s,
                    f4: o
                };
            });
            t.$mp.data = Object.assign({}, {
                $root: {
                    f0: e,
                    l0: i
                }
            });
        }, s = [];
        i.d(e, "b", function() {
            return a;
        }), i.d(e, "c", function() {
            return s;
        }), i.d(e, "a", function() {
            return n;
        });
    },
    "294d": function(t, e, i) {
        i.r(e);
        var n = i("e4fd"), a = i.n(n);
        for (var s in n) "default" !== s && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(s);
        e.default = a.a;
    },
    "2a52": function(t, e, i) {
        var n = i("f0a2");
        i.n(n).a;
    },
    db17: function(t, e, i) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("efb7"), i("921b"), e(i("66fd")), t(e(i("fbe7")).default);
        }).call(this, i("543d").createPage);
    },
    e4fd: function(t, e, i) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function a(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), i.push.apply(i, n);
                }
                return i;
            }
            function s(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i, t;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = i("2f62"), r = n(i("6e5f")), c = n(i("b6aa"));
            n(i("8d49")), n(i("6ff3"));
            var l = {
                data: function() {
                    return {
                        jyrInfo: {
                            iconSrc: "",
                            text: ""
                        },
                        nowDate: "",
                        jyrIconArr: [ "../../static/noOpen.png", "../../static/gather.png", "../../static/gather.png", "../../static/opening.png", "../../static/noon.png", "../../static/opening.png", "../../static/closeOpen.png" ],
                        jyrTextArr: [ "未开盘", "集合竞价中", "即将开盘", "开盘中", "午间休盘", "开盘中", "已收盘" ],
                        jyrType: "",
                        showAccount: !1,
                        listScrollTop: "",
                        listNowTop: "",
                        inverted: !1,
                        getNavInfo: {
                            bgColor: "",
                            title: ""
                        },
                        showPop: !1,
                        isTop: !1,
                        fixedTop: "",
                        exponentData: [ {
                            name: "上证指数",
                            newPrice: "",
                            gainPoint: "",
                            gain: ""
                        }, {
                            name: "深证成指",
                            newPrice: "",
                            gainPoint: "",
                            gain: ""
                        }, {
                            name: "创业板指",
                            newPrice: "",
                            gainPoint: "",
                            gain: ""
                        } ],
                        time: "",
                        openType: 4,
                        listActive: "1",
                        newsUpdate: "",
                        newsList: [],
                        rise: "",
                        fall: "",
                        hotConcept: [ {
                            blockGain: "",
                            blockName: "",
                            blockid: "",
                            sharesGain: "",
                            sharesName: "",
                            sharesid: ""
                        }, {
                            blockGain: "",
                            blockName: "",
                            blockid: "",
                            sharesGain: "",
                            sharesName: "",
                            sharesid: ""
                        }, {
                            blockGain: "",
                            blockName: "",
                            blockid: "",
                            sharesGain: "",
                            sharesName: "",
                            sharesid: ""
                        } ],
                        hotIndustry: [ {
                            blockGain: "",
                            blockName: "",
                            blockid: "",
                            sharesGain: "",
                            sharesName: "",
                            sharesid: ""
                        }, {
                            blockGain: "",
                            blockName: "",
                            blockid: "",
                            sharesGain: "",
                            sharesName: "",
                            sharesid: ""
                        }, {
                            blockGain: "",
                            blockName: "",
                            blockid: "",
                            sharesGain: "",
                            sharesName: "",
                            sharesid: ""
                        } ],
                        maximumHeatInFiveDays: [ {
                            blockGain: "",
                            blockName: "",
                            blockid: "",
                            sharesGain: "",
                            sharesName: "",
                            sharesid: ""
                        }, {
                            blockGain: "",
                            blockName: "",
                            blockid: "",
                            sharesGain: "",
                            sharesName: "",
                            sharesid: ""
                        }, {
                            blockGain: "",
                            blockName: "",
                            blockid: "",
                            sharesGain: "",
                            sharesName: "",
                            sharesid: ""
                        } ],
                        titArr: [ "newPrice", "gain", "gainSpeed" ],
                        titDataType: [ 0, 1, 1 ],
                        colorKey: "gain",
                        listArr: [ "resultListByGain", "resultListByGainDESC", "resultListByTotal", "resultListByGainSpeed" ],
                        nowList: "",
                        listData: [],
                        titText: "股票排行",
                        optionText: [ "涨幅榜", "跌幅榜", "成交额", "涨速榜" ],
                        infoTit: [ "最新价", "涨跌幅", "涨速" ],
                        sortArr: [ "2", "2", "2", "3" ],
                        sortTypeStatus: "2",
                        resultListByGain: [ {
                            code: "--",
                            gain: "--",
                            gainPoint: "--",
                            gainSpeed: "--",
                            id: "--",
                            name: "--",
                            newPrice: "--",
                            suspend: "--",
                            total: "--",
                            yesterdayPrice: "--"
                        } ],
                        resultListByGainDESC: [ {
                            code: "--",
                            gain: "--",
                            gainPoint: "--",
                            gainSpeed: "--",
                            id: "--",
                            name: "--",
                            newPrice: "--",
                            suspend: "--",
                            total: "--",
                            yesterdayPrice: "--"
                        } ],
                        resultListByGainSpeed: [ {
                            code: "--",
                            gain: "--",
                            gainPoint: "--",
                            gainSpeed: "--",
                            id: "--",
                            name: "--",
                            newPrice: "--",
                            suspend: "--",
                            total: "--",
                            yesterdayPrice: "--"
                        } ],
                        resultListByTotal: [ {
                            code: "--",
                            gain: "--",
                            gainPoint: "--",
                            gainSpeed: "--",
                            id: "--",
                            name: "--",
                            newPrice: "--",
                            suspend: "--",
                            total: "--",
                            yesterdayPrice: "--"
                        } ],
                        noShowRank: !1,
                        specialText: "当前暂无数据",
                        popUpType: "userInfo",
                        indexDataTimer: null,
                        isShowIndex: !0,
                        isUpdata: !1
                    };
                },
                watch: {
                    jyrType: function() {
                        this.jyrInfo.iconSrc = this.jyrIconArr[this.jyrType], this.jyrInfo.text = this.jyrTextArr[this.jyrType];
                    },
                    "loginInfo.userid": {
                        handler: function(t, e) {
                            if (t) {
                                var i = "https://u.thsi.cn/avatar/".concat(t, "1000/").concat(t, ".gif");
                                this.$store.commit("setHeadUrl", i);
                            }
                        },
                        deep: !0
                    }
                },
                computed: function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? a(Object(i), !0).forEach(function(e) {
                            s(t, e, i[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e));
                        });
                    }
                    return t;
                }({}, (0, o.mapState)([ "oldMarketMap", "newMarketMap", "sysInfo", "loginInfo" ])),
                onPageScroll: function() {
                    var e = this, i = t.createSelectorQuery();
                    i.select(".ths-list").boundingClientRect(), i.selectViewport().scrollOffset(), i.exec(function(t) {
                        t[0].top <= e.sysInfo.rheight ? (e.isTop = !0, e.fixedTop = e.sysInfo.rheight + "px") : e.isTop && (e.isTop = !1), 
                        e.listScrollTop || (e.listScrollTop = t[1].scrollTop + t[0].top), e.listNowTop = t[0].top;
                    });
                },
                onShareAppMessage: function(t) {
                    return {
                        path: "/pages/index/index"
                    };
                },
                onLoad: function(e) {
                    var i = this;
                    this.setPageNav(), this.getNews();
                    var n = this[this.listArr[this.listActive - 1]];
                    this.listData = (0, c.default)(n, 0, n.length, this.titArr[0]), this.getIndexData(), 
                    wx.showShareMenu({
                        withShareTicket: !0
                    });
                    var a = e.url, s = e.shareType;
                    if ("hq" == s) {
                        var o, r = e.url, l = e.marketAndCode, h = e.name;
                        o = 1 == e.isIndex ? "".concat(r, "?marketAndCode=").concat(l, "&name=").concat(h, "&isIndex={isIndex}") : "".concat(r, "?marketAndCode=").concat(l, "&name=").concat(h), 
                        t.navigateTo({
                            url: o
                        });
                    } else if ("allstock" == s) t.navigateTo({
                        url: a
                    }); else if ("blockdetail" == s) {
                        var u = e.url, d = e.code;
                        t.navigateTo({
                            url: "".concat(u, "?code=").concat(d)
                        });
                    } else if ("searchstock" == s) t.navigateTo({
                        url: a
                    }); else if ("article" == s) {
                        var f = e.seq;
                        t.navigateTo({
                            url: "".concat(a, "?seq=").concat(f)
                        });
                    }
                    this.indexDataTimer = setInterval(function() {
                        i.isShowIndex && (i.getNews(), i.getIndexData(1)), i.isUpdata || i.isShowIndex || (i.isUpdata = !0);
                    }, 3e4), t.loadFontFace({
                        family: "THS",
                        source: 'url("https://i.thsi.cn/m/fonts/THSMoneyfont-Medium.ttf")',
                        success: function() {}
                    });
                },
                onShow: function() {
                    var t = this;
                    if (this.loginInfo.userid) {
                        var e = "https://u.thsi.cn/avatar/".concat(this.loginInfo.userid, "1000/").concat(this.loginInfo.userid, ".gif");
                        this.$store.commit("setHeadUrl", e);
                    }
                    if (this.isShowIndex = !0, this.isUpdata && (this.getNews(), this.getIndexData(1), 
                    this.isUpdata = !1), this.rise && this.fall) {
                        var i = this.rise, n = this.fall;
                        this.rise = 1 * i + 1, this.fall = 1 * n - 1, setTimeout(function() {
                            t.rise = i, t.fall = n;
                        }, 0);
                    }
                },
                onHide: function() {
                    this.isShowIndex = !1;
                },
                methods: {
                    setPageNav: function() {
                        this.getNavInfo.bgColor = "#fff", this.getNavInfo.title = "同花顺股票";
                    },
                    jumpSearch: function() {
                        t.navigateTo({
                            url: "../searchstock/searchstock"
                        });
                    },
                    jumpExponent: function(e, i) {
                        var n;
                        (n = "{}" != JSON.stringify(this.newMarketMap) ? r.default.getMarkAndCode(e.id, e.code, this.newMarketMap) : r.default.getMarkAndCode(e.id, e.code, this.oldMarketMap)) && e.name && t.navigateTo({
                            url: "../hq/hq?marketAndCode=".concat(n, "&name=").concat(e.name, "&isIndex=").concat(i)
                        });
                    },
                    getIndexData: function(e) {
                        var i = this;
                        e || t.showLoading({
                            title: "正在加载中..."
                        }), t.request({
                            url: this.$http + "/wechatApplication/search/searchIndex",
                            method: "POST",
                            time: 3e3,
                            success: function(n) {
                                !e && t.hideLoading(), 0 == n.data.status_code ? i.formatIndexData(n.data.result) : e || t.showToast({
                                    title: "获取数据失败,请稍候再试",
                                    icon: "none"
                                });
                            },
                            fail: function(i) {
                                console.log(i), !e && t.hideLoading(), e || t.showToast({
                                    title: "获取数据失败,请稍候再试",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    formatIndexData: function(t) {
                        this.formatJyr(t.jyr), this.formatThreeBlock(t.threeIndexList), this.formatTodayBlock(t.hotConcept, t.hotIndustry, t.maximumHeatInFiveDays), 
                        this.formatRankData(t.resultListByGain, t.resultListByGainDESC, t.resultListByGainSpeed, t.resultListByTotal), 
                        t.szzs && (this.rise = t.szzs), t.xdzs && (this.fall = t.xdzs);
                    },
                    formatJyr: function(t) {
                        if (t.length > 0) {
                            var e = t.split(",");
                            this.nowDate = e[1];
                            var i = this.jyrTextArr.indexOf(e[0]);
                            -1 != i && (this.jyrType = i);
                        }
                    },
                    formatThreeBlock: function(t) {
                        t && (this.exponentData = JSON.parse(t));
                    },
                    formatTodayBlock: function(t, e, i) {
                        t && (this.hotConcept = JSON.parse(t)), e && (this.hotIndustry = JSON.parse(e)), 
                        i && (this.maximumHeatInFiveDays = JSON.parse(i));
                    },
                    formatRankData: function(t, e, i, n) {
                        t && "--" != t && (this.resultListByGain = JSON.parse(t)), e && "--" != e && (this.resultListByGainDESC = JSON.parse(e)), 
                        i && "--" != i && (this.resultListByGainSpeed = JSON.parse(i)), n && "--" != n && (this.resultListByTotal = JSON.parse(n)), 
                        "--" == t && "--" == e && "--" == i && "--" == n ? (this.noShowRank = !0, this.resultListByGain = [], 
                        this.resultListByGainDESC = [], this.resultListByGainSpeed = [], this.resultListByTotal = []) : this.noShowRank = !1;
                        var a = this[this.listArr[this.listActive - 1]];
                        this.nowList ? this.listData = (0, c.default)(a, 0, a.length, this.nowList, this.inverted) : this.listData = (0, 
                        c.default)(a, 0, a.length, this.titArr[1], this.inverted);
                    },
                    loginComplete: function(t) {
                        var e = {
                            data: t,
                            http: this.$http
                        };
                        this.$store.dispatch("loginComplate", e);
                    },
                    exitLogin: function() {
                        var e = this;
                        t.showToast({
                            title: "退出登录中...",
                            icon: "icon"
                        }), t.request({
                            url: this.$http + "/wechatApplication/login/loginOut",
                            method: "POST",
                            time: 3e3,
                            data: {
                                token: this.loginInfo.token
                            },
                            success: function(i) {
                                if (0 == i.data.status_code && 0 == i.data.result.status_code) {
                                    var n = e.loginInfo;
                                    n.account = "", n.isNew = "", n.userid = "", e.$store.commit("setLoginInfo", n), 
                                    t.setStorageSync("loginInfo", JSON.stringify(n)), e.showAccount = !1, e.getNavInfo.type = 1, 
                                    e.showPop = !1, t.showToast({
                                        title: "退出登录成功",
                                        icon: "success"
                                    });
                                } else t.showToast({
                                    title: "退出登录失败，请稍候再试",
                                    icon: "none"
                                });
                            },
                            fail: function(e) {
                                console.log(e), t.showToast({
                                    title: "退出登录失败，请稍候再试",
                                    icon: "none"
                                });
                            }
                        });
                    },
                    itemClick: function(e) {
                        1 == e ? this.showPop = !0 : 2 == e && t.navigateTo({
                            url: "../feedback/feedback"
                        });
                    },
                    showMenu: function(t) {
                        this.showAccount = !this.showAccount;
                    },
                    changePopUpState: function(t, e) {
                        1 == t && (this.showPop = !1);
                    },
                    cancel: function(t) {
                        this.$refs["show" + t].close();
                    },
                    changeList: function(t) {
                        this.listActive = t;
                        var e = this[this.listArr[t - 1]];
                        this.sortTypeStatus = this.sortArr[t - 1], this.nowList = this.titArr[this.sortTypeStatus - 1], 
                        this.inverted = 2 == t, this.listData = (0, c.default)(e, 0, e.length, this.titArr[this.sortTypeStatus - 1], this.inverted);
                    },
                    getNews: function() {
                        var e = this;
                        t.request({
                            url: "https://news.10jqka.com.cn/tapp/news/headline/ths",
                            method: "GET",
                            time: 3e3,
                            data: {},
                            success: function(t) {
                                var i = t.data.data;
                                i && i.length > 0 && e.formatNews(i);
                            },
                            fail: function() {
                                console.log("fail");
                            }
                        });
                    },
                    formatNews: function(t) {
                        var e = [], i = "";
                        t.forEach(function(t) {
                            t.seq && t.webrsid == "seq_" + t.seq && (e.push(t), t.rtime > i && (i = t.rtime));
                        }), this.newsList = e, this.newsUpdate = r.default.getTime(i, 1);
                    },
                    sortData: function(e, i) {
                        this.listNowTop < 0 && t.pageScrollTo({
                            scrollTop: this.listScrollTop - this.sysInfo.rheight
                        }), this.listData.sort(function() {
                            return .5 - Math.random();
                        });
                        var n = (0, c.default)(this.listData, 0, this.listData.length, this.titArr[e - 1], !i);
                        this.listData = n, this.inverted = !i, this.nowList = this.titArr[e - 1];
                    },
                    jumpHq: function() {
                        t.navigateTo({
                            url: "../hq/hq"
                        });
                    },
                    jump: function(e) {
                        var i;
                        (i = "{}" != JSON.stringify(this.newMarketMap) ? r.default.getMarkAndCode(e.id, e.code, this.newMarketMap) : r.default.getMarkAndCode(e.id, e.code, this.oldMarketMap)) && e.name && t.navigateTo({
                            url: "../hq/hq?marketAndCode=".concat(i, "&name=").concat(e.name)
                        });
                    }
                }
            };
            e.default = l;
        }).call(this, i("543d").default);
    },
    f0a2: function(t, e, i) {},
    fbe7: function(t, e, i) {
        i.r(e);
        var n = i("2715"), a = i("294d");
        for (var s in a) "default" !== s && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(s);
        i("2a52");
        var o = i("f0c5"), r = Object(o.a)(a.default, n.b, n.c, !1, null, "5abc7f2c", null, !1, n.a, void 0);
        e.default = r.exports;
    }
}, [ [ "db17", "common/runtime", "common/vendor" ] ] ]);