(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/allstock/allstock" ], {
    "1e19": function(t, a, e) {
        (function(t) {
            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("efb7"), e("921b"), a(e("66fd")), t(a(e("e5e3")).default);
        }).call(this, e("543d").createPage);
    },
    "48bb": function(t, a, e) {
        e.r(a);
        var i = e("dce1"), o = e.n(i);
        for (var n in i) "default" !== n && function(t) {
            e.d(a, t, function() {
                return i[t];
            });
        }(n);
        a.default = o.a;
    },
    "7c99": function(t, a, e) {
        var i = {
            "ths-unify-list": function() {
                return Promise.all([ e.e("common/vendor"), e.e("components/ths-unify-list/ths-unify-list") ]).then(e.bind(null, "efae"));
            }
        }, o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, n = [];
        e.d(a, "b", function() {
            return o;
        }), e.d(a, "c", function() {
            return n;
        }), e.d(a, "a", function() {
            return i;
        });
    },
    dce1: function(t, a, e) {
        (function(t) {
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0, i(e("9882"));
            var o = i(e("b6aa")), n = i(e("6ff3")), r = {
                data: function() {
                    return {
                        isTop: !1,
                        fixedTop: "",
                        listScrollTop: "",
                        listNowTop: "",
                        inverted: !1,
                        optionText: [ "行业板块", "概念板块", "地域板块" ],
                        titText: "",
                        listActive: 1,
                        infoTit: [ "涨跌幅", "涨速" ],
                        load: 2,
                        colorKey: "gainSpeed",
                        titArr: [ "gain", "gainSpeed" ],
                        titDataType: [ 1, 1 ],
                        industry: [],
                        concept: [],
                        reign: [],
                        listData: [],
                        listArr: [ "industry", "concept", "reign" ],
                        nowList: "",
                        healthData: {},
                        dataTimer: null,
                        isShowNow: !0,
                        isUpdata: !1,
                        showShorBtn: !1
                    };
                },
                onPageScroll: function() {
                    var a = this, e = t.createSelectorQuery();
                    e.select(".ths-list").boundingClientRect(), e.selectViewport().scrollOffset(), e.exec(function(t) {
                        t[0].top <= 0 ? (a.isTop = !0, a.fixedTop = "0px") : a.isTop && (a.isTop = !1), 
                        a.listScrollTop || (a.listScrollTop = t[1].scrollTop + t[0].top), a.listNowTop = t[0].top;
                    });
                },
                onShareAppMessage: function(t) {
                    return {
                        path: "/pages/index/index?url=".concat("/pages/allstock/allstock", "&shareType=allstock")
                    };
                },
                onLoad: function() {
                    var a = this;
                    this.getData("industry", 1), wx.showShareMenu({
                        withShareTicket: !0
                    }), this.dataTimer = setInterval(function() {
                        a.isShowNow && a.listArr.forEach(function(t) {
                            a.getData(t);
                        }), a.isUpdata || a.isShowNow || (a.isUpdata = !0);
                    }, 3e4), t.loadFontFace({
                        family: "THS",
                        source: 'url("https://i.thsi.cn/m/fonts/THSMoneyfont-Medium.ttf")',
                        success: function() {}
                    });
                },
                onShow: function() {
                    var t = this;
                    this.isShowNow = !0, this.isUpdata && this.listArr.forEach(function(a) {
                        t.getData(a);
                    });
                },
                onHide: function() {
                    this.isShowNow = !1;
                },
                destroyed: function() {
                    this.isShowNow = !1;
                },
                methods: {
                    changeList: function(t) {
                        this.listActive = t;
                        var a = this[this.listArr[t - 1]], e = (0, n.default)(a, this.titArr);
                        this.inverted = !1;
                        var i = (0, o.default)(e.dataArr, 0, e.dataArr.length, this.titArr[0], this.inverted).concat(e.errArr);
                        0 == a.length ? this.getData(this.listArr[t - 1], 1) : this.listData = i;
                    },
                    sortData: function(a, e) {
                        this.listNowTop < 0 && t.pageScrollTo({
                            scrollTop: this.listScrollTop
                        }), this.listData.sort(function() {
                            return .5 - Math.random();
                        }), this.healthData = (0, n.default)(this.listData, this.titArr), 0 == this.healthData.dataArr.length ? this.showShorBtn = !0 : this.showShorBtn = !1, 
                        this.listData = (0, o.default)(this.healthData.dataArr, 0, this.healthData.dataArr.length, this.titArr[a - 1], !e).concat(this.healthData.errArr), 
                        this.inverted = !e, this.nowList = this.titArr[a - 1];
                    },
                    formatData: function(t, a) {
                        that.hyData = JSON.parse(t), that.listData = that.hyData;
                    },
                    getData: function(a, e) {
                        var i = this;
                        1 == e && t.showLoading({
                            title: "加载中"
                        }), t.request({
                            url: this.$http + "/wechatApplication/search/searchBlockInfoList",
                            method: "POST",
                            time: 3e3,
                            data: {
                                type: a
                            },
                            success: function(r) {
                                if (0 == r.data.status_code) {
                                    var s = JSON.parse(r.data.result.blockInfoList);
                                    s.length > 0 ? (i.healthData = (0, n.default)(s, i.titArr), i.nowList ? i[a] = (0, 
                                    o.default)(i.healthData.dataArr, 0, i.healthData.dataArr.length, i.nowList, i.inverted).concat(i.healthData.errArr) : i[a] = (0, 
                                    o.default)(i.healthData.dataArr, 0, i.healthData.dataArr.length, i.titArr[0]).concat(i.healthData.errArr), 
                                    1 == e ? (i.listData = i[a], t.hideLoading(), 0 == i.healthData.dataArr.length ? i.showShorBtn = !0 : i.showShorBtn = !1) : i.listData = i[i.listArr[i.listActive - 1]], 
                                    i.load = 3) : i.load = 4;
                                } else i.load = 4, 1 == e && (t.hideLoading(), t.showToast({
                                    title: "数据获取失败，请稍候再试",
                                    icon: "none"
                                }));
                            },
                            fail: function(a) {
                                console.log(a), i.load = 4, 1 == e && (t.hideLoading(), t.showToast({
                                    title: "数据获取失败，请稍候再试",
                                    icon: "none"
                                }));
                            }
                        });
                    },
                    jump: function(a) {
                        t.navigateTo({
                            url: "../blockdetail/blockdetail?code=".concat(a.code)
                        });
                    }
                }
            };
            a.default = r;
        }).call(this, e("543d").default);
    },
    e5e3: function(t, a, e) {
        e.r(a);
        var i = e("7c99"), o = e("48bb");
        for (var n in o) "default" !== n && function(t) {
            e.d(a, t, function() {
                return o[t];
            });
        }(n);
        var r = e("f0c5"), s = Object(r.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        a.default = s.exports;
    }
}, [ [ "1e19", "common/runtime", "common/vendor" ] ] ]);