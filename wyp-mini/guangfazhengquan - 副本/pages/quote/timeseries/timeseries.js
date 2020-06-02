function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("../../../components/godzilla/timeseries")), a = t(require("../../../components/godzilla/day-money")), i = t(require("../../../components/godzilla/five-brunt")), s = t(require("../../../components/http")), n = t(require("../../../components/deferred")), o = require("../../../components/bridge"), r = t(require("../../../services/portal/login")), c = require("../../../components/utils"), u = t(require("../components/plate/plate")), l = t(require("../components/fiveday/fiveday")), d = t(require("../components/kline/kline")), h = t(require("../../../config")), f = t(require("../../../services/quote/quote")), m = t(require("../../../services/portal/download")), g = t(require("../../../services/stockgroup/stockgroup")), p = t(require("../../../components/circus/toast/toast")), v = require("../../../components/zxgroup-selector/index"), D = require("../../../comm-ui/modal/index"), y = {
    COLOR: {
        ACTIVE: "#00a5f6",
        DEFEULT: "#999da4"
    }
}, _ = {
    on: !1,
    text: "设置自选"
}, b = {
    on: !0,
    text: "添加自选"
}, k = [ "分时", "五日", "日K", "周K", "月K", "分钟" ], x = {
    amount: "K线-成交切换到额",
    volume: "K线-成交切换到量"
}, C = getApp();

C.View((0, c.assign)({
    beacon: {
        name: "个股详情",
        canShare: !0,
        shareOptions: {}
    },
    settings: {
        candleCurIndex: "7",
        techniqueCurIndex: 0,
        techniqueRange: [ "macd", "kdj", "rsi" ],
        volumeValue: "volume"
    },
    data: {
        chart: {
            loading: !1,
            lining: !1
        },
        menus: {
            height: 96
        },
        labels: {
            statics: [],
            dynamics: []
        },
        plate: {
            more: !1,
            data: {}
        },
        fiveTick: {
            bar: {},
            five: {
                height: "",
                packup: !1,
                data: {}
            },
            tick: {
                height: "",
                packup: !1,
                data: []
            }
        },
        tabs: {
            bar: {},
            latest: {
                select: !0,
                status: "loading",
                color: y.COLOR.ACTIVE,
                page: 0,
                size: 8,
                data: []
            },
            summary: {
                select: !1,
                loaded: !1,
                color: y.COLOR.DEFEULT,
                todayMoney: {
                    status: "loading",
                    shapes: [],
                    labels: {
                        statics: [],
                        dynamics: []
                    }
                },
                fiveBrunt: {
                    status: "loading",
                    shapes: [],
                    labels: {
                        statics: [],
                        dynamics: []
                    }
                },
                recentBrunt: {
                    status: "loading",
                    shapes: [],
                    labels: {
                        statics: [],
                        dynamics: []
                    }
                },
                comProfile: {
                    status: "loading"
                },
                shareCapital: {
                    status: "loading"
                },
                shareFinance: {
                    status: "loading"
                },
                fundProfile: {
                    status: "loading"
                }
            }
        },
        favourite: {},
        timeTabs: {
            curTimeTabId: 0,
            minutes: [ "1分钟", "5分钟", "10分钟", "15分钟", "30分钟", "60分钟" ],
            minuteIdx: ""
        },
        hint: void 0,
        kline: {
            data: {
                selectText: {
                    text: "请选择指数",
                    color: !1
                },
                chart: {
                    loading: !1,
                    lining: !1,
                    height: 0
                },
                benchmarkNumbers: {
                    1: {
                        length: "4%",
                        number: "0"
                    },
                    2: {
                        length: "4%",
                        number: "0"
                    },
                    3: {
                        length: "4%",
                        number: "0"
                    },
                    4: {
                        length: "4%",
                        number: "0"
                    },
                    5: {
                        length: "4%",
                        number: "0"
                    },
                    6: {
                        length: "4%",
                        number: "0"
                    }
                },
                direction: {
                    range: [ "不复权", "前复权", "后复权" ],
                    currentId: 1
                },
                show: !0,
                candleLegend: [ {
                    text: "MA5",
                    color: "#387FED",
                    value: ""
                }, {
                    text: "MA10",
                    color: "#E08840",
                    value: ""
                }, {
                    text: "MA20",
                    color: "#C1718C",
                    value: ""
                }, {
                    text: "MA30",
                    color: "#22A907",
                    value: ""
                } ],
                MA: void 0,
                price_base: void 0
            }
        },
        fiveday: {
            data: {
                labels: {
                    statics: [],
                    dynamics: []
                },
                chart: {
                    loading: !1,
                    lining: !1
                },
                hint: void 0,
                volume: {
                    style: ""
                }
            }
        }
    },
    events: {
        toggleFiveTick: {
            handler: function() {
                if ((0, c.getData)(this, "fiveTick.tick.packup")) this._dot({
                    app: C,
                    props: {
                        buttonNameSuffix: "收起明细"
                    }
                }), (0, c.setData)(this, "fiveTick.tick.packup", !1), (0, c.setData)(this, "fiveTick.five.height", ""), 
                (0, c.setData)(this, "fiveTick.five.marginTop", ""), (0, c.setData)(this, "fiveTick.tick.height", ""); else {
                    this._dot({
                        app: C,
                        props: {
                            buttonNameSuffix: "展开明细"
                        }
                    });
                    (0, c.setData)(this, "fiveTick.tick.packup", !0), (0, c.setData)(this, "fiveTick.five.marginTop", "-152rpx"), 
                    (0, c.setData)(this, "fiveTick.five.height", "76rpx"), (0, c.setData)(this, "fiveTick.tick.height", "520rpx");
                }
            }
        },
        goMessage: {
            name: "消息详情",
            handler: function(t) {
                var e = t.currentTarget.dataset.id, a = (0, c.getData)(this, "market"), i = (0, 
                c.getData)(this, "code"), s = (0, c.getData)(this, "name");
                (0, o.navigateTo)({
                    url: "/pages/quote/message/message?market=" + a + "&code=" + i + "&name=" + encodeURIComponent(s) + "&id=" + e
                });
            }
        },
        goWarning: {
            name: "提醒",
            handler: function() {
                var t = (0, c.getData)(this, "code"), e = (0, c.getData)(this, "exchange");
                (0, o.navigateTo)({
                    url: "/pages/portal/stockwarning/stockwarning?code=" + t + "&exchange=" + e
                });
            }
        },
        authorized: {
            name: "授权",
            handler: function() {
                console.log("模板id", h.default.securitiesId);
                var t = h.default.securitiesId, e = this;
                wx.requestSubscribeMessage({
                    tmplIds: [ t ],
                    success: function(a) {
                        console.log("成功了", a), "accept" === a[t] ? (console.log("允许"), e.goWarning()) : "reject" === a[t] ? (console.log("拒绝"), 
                        p.default.show(e, "开启提醒需要微信授权，如若您已拒收该消息，请在微信服务通知中重新开启此功能")) : "ban" === a[t] && console.log("后台封禁");
                    },
                    fail: function(t) {
                        console.log("失败了", t);
                    },
                    complete: function() {}
                });
            }
        },
        toggleFav: {
            name: "",
            handler: function() {
                var t = (0, c.getData)(this, "exchange"), e = (0, c.getData)(this, "code");
                (0, c.getData)(this, "favourite.on") ? (this._dot({
                    app: C,
                    props: {
                        buttonNameSuffix: "添加自选"
                    }
                }), this.addFavourite(e, t)) : (this._dot({
                    app: C,
                    props: {
                        buttonNameSuffix: "设置自选"
                    }
                }), this.actionSheet(e, t));
            }
        },
        tapLatest: {
            name: "最新",
            handler: function() {
                (0, c.getData)(this, "tabs.latest.select") || ((0, c.setData)(this, "tabs.latest.select", !0), 
                (0, c.setData)(this, "tabs.summary.select", !1), this.setTabBar(0));
            }
        },
        tapSummary: {
            name: "概况",
            handler: function() {
                (0, c.getData)(this, "tabs.summary.select") || ((0, c.setData)(this, "tabs.summary.select", !0), 
                (0, c.setData)(this, "tabs.latest.select", !1), this.setTabBar(1), (0, c.getData)(this, "tabs.summary.loaded") ? this.reqDayMoney().done(this.setDayMoney.bind(this)) : ((0, 
                c.setData)(this, "tabs.summary.loaded", !0), this.loadSummary()));
            }
        },
        goFieldDetail: {
            name: "查看基金字段详情",
            handler: function(t) {
                var e = t.currentTarget, a = e.dataset.title, i = e.dataset.field, s = (0, c.getData)(this, "tabs.summary.fundProfile." + i) || "";
                (0, o.navigateTo)({
                    url: "/pages/common/detail/detail?title=" + a + "&content=" + s
                });
            }
        },
        changeTimeTab: {
            name: "",
            handler: function(t) {
                var e = t.target.dataset.id, a = this.settings.systemInfo;
                if (this.klineLimitClick = !1, void 0 !== e) if ((0, c.setData)(this, "timeTabs.curTimeTabId", e), 
                (0, c.setData)(this, "timeTabs.minuteIdx", ""), this.clearReqInterval(), this.setReqInterval(), 
                this._dot({
                    app: C,
                    props: {
                        buttonNameSuffix: k[e]
                    }
                }), 0 == e) !this.timeseriesChart && this.initChart(a); else if (1 == e) !this.fiveDayChart && this.initFiveDayChart(a); else if (e >= 2 && e < 10) {
                    var i = this.settings.candleCurIndex = "" + (+e + 5);
                    this.klineChart ? this.klineChart.setAreaType("candle", i).reqData() : this.initKlineChart(a);
                }
            }
        },
        changeMinutes: {
            name: "分钟",
            handler: function(t) {
                var e = t.detail.value;
                (0, c.setData)(this, "timeTabs.minuteIdx", e), (0, c.setData)(this, "timeTabs.curTimeTabId", 5);
                var a = this.settings.candleCurIndex = "" + (+e + 1);
                this.klineChart ? this.klineChart.setAreaType("candle", a).reqData() : this.initKlineChart(this.settings.systemInfo), 
                this.klineLimitClick = !1;
            }
        },
        goTransaction: {
            name: "交易",
            handler: function(t) {
                var e = this;
                (0, c.setData)(this, "isHiddenCanvas", !0), D({
                    title: "小程序暂不支持交易，请前往易淘金APP进行操作",
                    header: !0,
                    selector: "#modal_cancel_fav",
                    showCancelButton: !1,
                    confirmButtonText: "我知道了",
                    autoClose: !1,
                    onConfirm: function() {
                        D.close({
                            selector: "#modal_cancel_fav"
                        }), (0, c.setData)(e, "isHiddenCanvas", !1);
                    }
                }, this);
            }
        },
        goOpenAccount: {
            name: "开户",
            handler: function(t) {
                var e = this.downloadInfo, a = e._id, i = e.navColor;
                (0, o.navigateTo)({
                    url: "/pages/portal/download/download?viewId=" + a + "&navColor=" + i
                });
            }
        },
        klineOnTap: {
            name: "",
            handler: function(t) {
                if (this.klineLimitClick) this.klineLimitClick = !1; else {
                    var e = t.touches[0], a = e.pageX, i = e.pageY - this.rpxToPx({
                        width: 358
                    }), s = this.klineChart.technique.options.bbox, n = this.klineChart.volume.options.bbox;
                    if (a > s.x0 && a < s.x1 && i > s.y0 && i < s.y1) this.settings.techniqueCurIndex >= 2 ? this.settings.techniqueCurIndex = 0 : this.settings.techniqueCurIndex++, 
                    this._dot({
                        app: C,
                        props: {
                            buttonNameSuffix: "K线-切换指标"
                        }
                    }), this.klineChart.setAreaType("technique", this.settings.techniqueRange[this.settings.techniqueCurIndex]).reqData(); else if (a > n.x0 && a < n.x1 && i > n.y0 && i < n.y1) {
                        this.settings.volumeValue = "volume" === this.settings.volumeValue ? "amount" : "volume";
                        var o = this.settings.volumeValue;
                        this._dot({
                            app: C,
                            props: {
                                buttonNameSuffix: x[o]
                            }
                        }), this.klineChart.setAreaType("volume", o).reqData();
                    }
                }
            }
        },
        gotoBenchmarking: {
            name: "进入对标指数说明页",
            handler: function() {
                (0, o.navigateTo)({
                    url: "/pages/quote/benchmarking/benchmarking"
                });
            }
        },
        selectIndex: {
            name: "选择指数",
            handler: function() {
                var t = this;
                wx.showActionSheet({
                    itemList: [ "上证指数", "深证成指", "创业板指" ],
                    success: function(e) {
                        var a = e.tapIndex, i = null, s = t.data.kline.data.selectText;
                        0 == a && (i = {
                            market: "sh",
                            code: "000001"
                        }, s = {
                            text: "上证指数",
                            color: "true"
                        }, (0, c.setData)(t, "kline.data.selectText", s)), 1 == a && (i = {
                            market: "sz",
                            code: "399001"
                        }, s = {
                            text: "深证成指",
                            color: "true"
                        }, (0, c.setData)(t, "kline.data.selectText", s)), 2 == a && (i = {
                            market: "sz",
                            code: "399006"
                        }, s = {
                            text: "创业板指",
                            color: "true"
                        }, (0, c.setData)(t, "kline.data.selectText", s)), t.klineChart.setRStock(i).reqData(!1);
                    },
                    fail: function(t) {}
                });
            }
        },
        changeDirection: {
            name: "选择复权",
            handler: function(t) {
                var e = t.detail.value;
                (0, c.setData)(this, "kline.data.direction.currentId", e), this.klineChart && this.klineChart.setAreaType("direction", e).reqData();
            }
        }
    },
    onLoad: function(t) {
        var e = this;
        this.loadUserInfo(), t.market = t.market || (0, c.toMarket)(t.exchange), t.exchange = (0, 
        c.stockCvrtId)(t).exchange, t.name = decodeURIComponent(t.name || ""), t.code && (t.market || t.exchange) || (console.error("个股详情参数错误：", t), 
        t.code = "000776", t.exchange = 105, t.market = "sz", t.name = "广发证券");
        var a = t.code, i = t.exchange, s = t.market, r = t.name, u = r + " " + a;
        (0, o.setNavigationBarTitle)({
            title: u
        }), this.beacon.shareOptions.title = u, this.beacon.shareOptions.path = "/pages/quote/timeseries/timeseries?market=" + s + "&code=" + a + "&name=" + encodeURIComponent(r), 
        (0, c.setData)(this, "code", a), (0, c.setData)(this, "exchange", i), (0, c.setData)(this, "market", s), 
        (0, c.setData)(this, "name", r), n.default.when(this.reqQuote({
            timeout: 1e4
        }), (0, o.getSystemInfo)()).done(function(t, a) {
            var i = (0, c.getProp)(t[0], "data.quote.data.type") + "", s = 1 == (0, c.getProp)(t[0], "data.quote.data.trading_status");
            (0, c.setData)(e, "type", i), (0, c.setData)(e, "stop", s), e.type2 = (0, c.getProp)(t[0], "data.quote.info.type2"), 
            e.settings.systemInfo = a[0], e.setQuote(t[0]), e.initChart(a[0]), e.initOper(a[0]), 
            e.loadData(), e.setFav(), e.setReqInterval(), i != c.QUOTETYPE.us_secu && e.loadLatest();
        }).fail(function(t) {});
    },
    onShow: function() {
        this.setReqInterval(), this.loadDownloadInfo();
    },
    onHide: function() {
        this.clearReqInterval();
    },
    onUnload: function() {
        this.onHide();
    },
    loadDownloadInfo: function() {
        var t = this;
        m.default.download({
            postion: "stockPageFoot"
        }).done(function(e) {
            var a = e.data.data;
            t.downloadInfo = a && a[0] || {};
        });
    },
    loadUserInfo: function() {
        var t = this;
        (0, o.login)().done(function(e) {
            r.default.wxAppletOAuth(e).done(function(e) {
                var a = e.openid || "";
                (0, c.setData)(t, "openId", a), r.default.info().done(function(e) {
                    (0, c.setData)(t, "userInfo", (0, c.getProp)(e, "userInfo")), r.default.updateAppletUser(e).done(function(t) {});
                }).fail(function() {});
            }).fail(function() {});
        }).fail(function() {});
    },
    setTabBar: function(t) {
        var e = this;
        (0, o.getSystemInfo)().done(function(a) {
            var i = a.windowWidth, s = wx.createAnimation({
                duration: 200,
                timingFunction: "ease"
            });
            s.translateX(i / 2 * t).step(), (0, c.setData)(e, "tabs.bar.animation", s.export());
        });
    },
    loadData: function() {
        var t = this;
        (0, c.getData)(this, "stop") ? this.setTick({}) : (this.reqTick().done(function(e) {
            t.setTick(e);
        }).fail(function(e) {
            t.setTick({});
        }), (0, c.setData)(this, "chart.loading", !0), this.reqTimeseries().done(function(e) {
            t.setTimeseries(e);
        }).always(function() {
            (0, c.setData)(t, "chart.loading", !1);
        }));
    },
    setReqInterval: function() {
        var t = this.error, e = (0, c.getData)(this, "stop");
        if (null != e && !0 !== e && !t) {
            this.intervalids = [], this.setCommInterval();
            var a = (0, c.getData)(this, "timeTabs.curTimeTabId");
            0 == a ? this.setTimeseriesInterval() : 1 == a && this.setFiveDayInterval();
        }
    },
    setCommInterval: function() {
        var t = this;
        this.intervalids.push(setInterval(function() {
            t.reqQuote().done(t.setQuote.bind(t)), (0, c.getData)(t, "tabs.summary.select") && t.reqDayMoney().done(t.setDayMoney.bind(t));
        }, h.default.REFRESH_INTERVAL));
    },
    setTimeseriesInterval: function() {
        var t = this;
        this.intervalids.push(setInterval(function() {
            t.reqTimeseries().done(t.setTimeseries.bind(t)), t.reqTick().done(t.setTick.bind(t));
        }, h.default.REFRESH_INTERVAL));
    },
    setFiveDayInterval: function() {
        var t = this;
        this.intervalids.push(setInterval(function() {
            t.reqFiveDayTimeseries().done(t.setFiveDayTimeseries.bind(t));
        }, h.default.REFRESH_INTERVAL));
    },
    clearReqInterval: function() {
        this.intervalids && this.intervalids.forEach(function(t) {
            clearInterval(t);
        });
    },
    initChart: function(t) {
        var a = this, i = (0, c.getData)(this, "type"), s = "1" == i ? t.windowWidth - 12 : t.windowWidth - Math.floor(this.rpxToPx({
            width: 226
        })) - Math.floor(this.rpxToPx({
            width: 24
        })), n = void 0;
        n = (0, c.isPhoneX)(t) ? "1" == i ? t.windowHeight - this.rpxToPx({
            width: 492
        }) : this.rpxToPx({
            width: 640
        }) : "1" == i ? t.windowHeight - this.rpxToPx({
            width: 454
        }) : this.rpxToPx({
            width: 640
        }), (0, c.setData)(this, "chart.style", {
            width: s,
            height: n
        }), (0, c.setData)(this, "kline.data.price_base", this.quoteData.price_base || 0), 
        this.timeseriesChart = new e.default({
            price_base: this.quoteData.price_base,
            type: this.data.type,
            dataCtx: wx.createCanvasContext("dataCvs"),
            touchCtx: wx.createCanvasContext("touchCvs"),
            hintCtx: wx.createCanvasContext("hintCvs"),
            market: (0, c.getData)(this, "market") + "",
            code: (0, c.getData)(this, "code") + "",
            isReturnBond: this.isReturnBond,
            bbox: {
                x0: 0,
                y0: 0,
                x1: s - 0,
                y1: n - 0
            },
            system: t,
            onlinestart: function() {
                a.lining = !0, (0, c.setData)(a, "chart.lining", !0);
            },
            onlinefocus: function(t) {
                (0, c.setData)(a, "hint", t);
            },
            onlineend: function(t) {
                !t.show && a.lining && (a.lining = !1, (0, c.setData)(a, "chart.lining", !1), (0, 
                c.setData)(a, "hint", a.timeseriesHint));
            },
            export: function(t, e) {
                var i = (0, c.getData)(a, "labels.statics");
                i && i.length || (0, c.setData)(a, "labels.statics", e.statics), (0, c.setData)(a, "labels.dynamics", e.dynamics);
                var s = "top:" + .7 * n + "px;";
                (0, c.setData)(a, "volume.style", s);
            }
        });
    },
    initOper: function(t) {
        (0, c.isPhoneX)(t) && ((0, c.setData)(this, "menus.height", 130), (0, c.setData)(this, "isPhoneX", !0));
    },
    ontouchstart: function(t) {
        var e = (0, c.getData)(this, "timeTabs.curTimeTabId");
        0 == e ? this.timeseriesChart && this.timeseriesChart.ontouchstart(t) : 1 == e ? this.fiveDayChart && this.fiveDayChart.ontouchstart(t) : this.klineChart && this.klineChart.ontouchstart(t);
    },
    ontouchmove: function(t) {
        var e = (0, c.getData)(this, "timeTabs.curTimeTabId");
        0 == e ? this.timeseriesChart && this.timeseriesChart.ontouchmove(t) : 1 == e ? this.fiveDayChart && this.fiveDayChart.ontouchmove(t) : this.klineChart && this.klineChart.ontouchmove(t);
    },
    ontouchend: function(t) {
        var e = (0, c.getData)(this, "timeTabs.curTimeTabId");
        0 == e ? this.timeseriesChart && this.timeseriesChart.ontouchend(t) : 1 == e ? this.fiveDayChart && this.fiveDayChart.ontouchend(t) : this.klineChart && this.klineChart.ontouchend(t);
    },
    reqTimeseries: function(t) {
        return f.default.timeseries({
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code")
            },
            timeout: 1e4
        });
    },
    setTimeseries: function(t) {
        var e = (0, o.getCurrentPage)();
        if (0 == e.__route__.indexOf("pages/quote/timeseries/timeseries") && e.data.market == this.data.market && e.data.code == this.data.code) {
            var a = (0, c.getProp)(t, "data.price_base") || 0, i = Math.pow(10, a), s = ((0, 
            c.getProp)(t, "data.data") || []).map(function(t) {
                return {
                    time: (t.time + "").substring(8, 10) + ":" + (t.time + "").substring(10, 12),
                    pclose: t.pclose / i,
                    price: t.price / i,
                    avg: (t.avg || t.avgIndex) / 1e6,
                    volume: t.volume,
                    change: t.change / 100,
                    rise: t.roc / 100
                };
            }), n = {};
            this.error || (n.data = [ s ], n.market = (0, c.toMarket)((0, c.getProp)(t, "data.id.exchange")), 
            n.code = (0, c.getProp)(t, "data.id.code"), n.pclose = (this.quoteData.data.pclose || this.quoteData.data.open) / i, 
            n.price_base = a || 0), this.timeseriesChart.setData(n);
        } else this.onHide();
    },
    reqTick: function(t) {
        return f.default.tick({
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code"),
                count: 15
            },
            timeout: 1e4
        });
    },
    setTick: function(t) {
        for (var e = (0, c.getData)(this, "type") + "", a = (0, c.getData)(this, "exchange"), i = (0, 
        c.getProp)(t, "data.data") || [], s = (0, c.getProp)(t, "data.price_base") || 0, n = Math.pow(10, s), o = s, r = (0, 
        c.getVolumeScale)(e, a), u = [], l = 0; l < 15; l++) {
            var d = i[l], h = {};
            if (d) {
                var f = Math.abs((d.volume / r).toFixed(0) - 0);
                f = f > 99999 ? (0, c.getNumeric)(f, null, 1, !0) : f;
                var m = ((d.price || 0) / n).toFixed(o);
                h = {
                    time: (d.time + "").substring(8, 10) + ":" + (d.time + "").substring(10, 12),
                    price: m,
                    price_size: this.getFiveTickFontSize(m),
                    price_color: (0, c.getColor)(d.price - this.quoteData.data.pclose || this.quoteData.data.open),
                    volume: f,
                    volume_size: this.getFiveTickFontSize(f),
                    volume_color: (0, c.getColor)(1 == d.direction ? 1 : "-1")
                };
            } else h = {
                time: "--:--",
                price: "0.00",
                price_color: (0, c.getColor)(0),
                volume: "0",
                volume_color: (0, c.getColor)(0)
            };
            u.push(h);
        }
        (0, c.setData)(this, "fiveTick.tick.data", u);
    },
    loadLatest: function() {
        this.reqLatest().done(this.setLatest.bind(this));
    },
    reqLatest: function(t) {
        var e = this;
        return (0, c.setData)(this, "tabs.latest.status", "loading"), (0, s.default)((0, 
        c.assign)({
            url: h.default.SER_URL + "/api/wechat/info/1.0.0/info/stock/txt",
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code"),
                page: (0, c.getData)(this, "tabs.latest.page"),
                pageSize: (0, c.getData)(this, "tabs.latest.size")
            }
        }, t), this, !1).done(function(t) {
            var a = (0, c.getData)(e, "tabs.latest.page");
            (0, c.setData)(e, "tabs.latest.page", a + 1);
            var i = (0, c.getData)(e, "tabs.latest.size"), s = t.data.blt.data.concat(t.data.nws.data, t.data.rpt.data);
            s && s.length < i ? (0, c.setData)(e, "tabs.latest.status", "done") : (0, c.setData)(e, "tabs.latest.status", "more");
        }).fail(function() {
            (0, c.setData)(e, "tabs.latest.status", "fail");
        });
    },
    setLatest: function(t) {
        var e = (t.data.blt.data.concat(t.data.nws.data, t.data.rpt.data).sort(function(t, e) {
            return e.publishTime - t.publishTime;
        }) || []).map(function(t) {
            return (0, c.assign)(t, {
                logo: function(t) {
                    return 1 == t ? {
                        text: "新闻",
                        color: "#fb597a"
                    } : 2 == t ? {
                        text: "公告",
                        color: "#5da0fc"
                    } : 3 == t ? {
                        text: "研报",
                        color: "#9998fc"
                    } : void 0;
                }(t.txtType),
                datetime: (0, c.formatDate)(new Date(1e3 * t.publishTime), "yyyy/MM/dd")
            });
        });
        (0, c.setData)(this, "tabs.latest.data", (0, c.getData)(this, "tabs.latest.data").concat(e));
    },
    loadSummary: function() {
        this.loadDayMoney(), "4" == (0, c.getData)(this, "type") ? (this.loadFundProfile(), 
        this.loadFundAsset()) : (this.loadFiveBrunt(), this.loadRecentBrunt(), this.loadComProfile(), 
        this.loadShareCapital(), this.loadShareFinance());
    },
    loadDayMoney: function() {
        var t = this;
        (0, o.getSystemInfo)().done(function(e) {
            var i = e.windowWidth;
            t.dayMoneyChart = new a.default({
                dataCtx: wx.createCanvasContext("todayCvs"),
                market: (0, c.getData)(t, "market"),
                code: (0, c.getData)(t, "code"),
                bbox: {
                    x0: 0,
                    y0: 0,
                    x1: i - 35,
                    y1: 220
                },
                export: function(e, a, i) {
                    var s = (0, c.getData)(t, "tabs.summary.todayMoney.labels.statics");
                    s && s.length || (0, c.setData)(t, "tabs.summary.todayMoney.labels.statics", a.statics), 
                    (0, c.setData)(t, "tabs.summary.todayMoney.labels.dynamics", a.dynamics), (0, c.setData)(t, "tabs.summary.todayMoney.shapes", i);
                }
            }), t.refreshDayMoney();
        });
    },
    refreshDayMoney: function() {
        var t = this, e = function() {
            return (0, c.getData)(t, "tabs.summary.todayMoney.status");
        }, a = function(e) {
            (0, c.setData)(t, "tabs.summary.todayMoney.status", e);
        };
        "done" != e() && a("loading"), this.reqDayMoney().done(function(i) {
            t.setDayMoney(i), "done" != e() && a("done");
        }).fail(function() {
            "done" != e() && a("fail");
        });
    },
    reqDayMoney: function(t) {
        return f.default.cap({
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code")
            },
            timeout: 1e4
        });
    },
    setDayMoney: function(t) {
        if (this.dayMoneyChart) {
            var e = (0, c.getProp)(t, "data"), a = e.capflow, i = e.price_base, s = Math.pow(10, i);
            e.id.market = (0, c.toMarket)(e.id.exchange), this.fiveBruntData = {
                data: e.daily,
                price_base: i,
                type: "five"
            }, this.recentBruntData = {
                data: e.segment,
                price_base: i,
                type: "recent"
            }, this.dayMoneyChart.setData(e), this.fiveBruntChart && this.fiveBruntChart.setData(this.fiveBruntData), 
            this.recentBruntChart && this.recentBruntChart.setData(this.recentBruntData);
            var n = function(t) {
                return t ? (0, c.getNumeric)(t / s, null, 2, !1, !0) : 0;
            }, o = [ {
                name: "超大单",
                in: {
                    text: n(a.hin),
                    color: (0, c.getColor)(1)
                },
                out: {
                    text: n(a.hout),
                    color: (0, c.getColor)(-1)
                },
                netin: {
                    text: n(a.nethin),
                    color: (0, c.getColor)(a.nethin)
                }
            }, {
                name: "大单",
                in: {
                    text: n(a.bin),
                    color: (0, c.getColor)(1)
                },
                out: {
                    text: n(a.bout),
                    color: (0, c.getColor)(-1)
                },
                netin: {
                    text: n(a.netbin),
                    color: (0, c.getColor)(a.netbin)
                }
            }, {
                name: "中单",
                in: {
                    text: n(a.min),
                    color: (0, c.getColor)(1)
                },
                out: {
                    text: n(a.mout),
                    color: (0, c.getColor)(-1)
                },
                netin: {
                    text: n(a.netmin),
                    color: (0, c.getColor)(a.netmin)
                }
            }, {
                name: "小单",
                in: {
                    text: n(a.sin),
                    color: (0, c.getColor)(1)
                },
                out: {
                    text: n(a.sout),
                    color: (0, c.getColor)(-1)
                },
                netin: {
                    text: n(a.netsin),
                    color: (0, c.getColor)(a.netsin)
                }
            } ];
            (0, c.setData)(this, "capflow", {
                data: o,
                total: a.total
            });
        }
    },
    loadFiveBrunt: function() {
        var t = this, e = this.settings.systemInfo.windowWidth;
        this.fiveBruntChart = new i.default({
            market: (0, c.getData)(this, "market"),
            code: (0, c.getData)(this, "code"),
            bbox: {
                x0: 0,
                y0: 0,
                x1: e - 35,
                y1: 130
            },
            export: function(e, a, i) {
                var s = (0, c.getData)(t, "tabs.summary.fiveBrunt.labels.statics");
                s && s.length || (0, c.setData)(t, "tabs.summary.fiveBrunt.labels.statics", a.statics), 
                (0, c.setData)(t, "tabs.summary.fiveBrunt.labels.dynamics", a.dynamics), (0, c.setData)(t, "tabs.summary.fiveBrunt.shapes", i);
            }
        }), this.fiveBruntData && this.fiveBruntChart.setData(this.fiveBruntData);
    },
    loadRecentBrunt: function() {
        var t = this, e = this.settings.systemInfo.windowWidth;
        this.recentBruntChart = new i.default({
            market: (0, c.getData)(this, "market"),
            code: (0, c.getData)(this, "code"),
            bbox: {
                x0: 0,
                y0: 0,
                x1: e - 35,
                y1: 130
            },
            export: function(e, a, i) {
                var s = (0, c.getData)(t, "tabs.summary.recentBrunt.labels.statics");
                s && s.length || (0, c.setData)(t, "tabs.summary.recentBrunt.labels.statics", a.statics), 
                (0, c.setData)(t, "tabs.summary.recentBrunt.labels.dynamics", a.dynamics), (0, c.setData)(t, "tabs.summary.recentBrunt.shapes", i);
            }
        }), this.recentBruntData && this.recentBruntChart.setData(this.recentBruntData);
    },
    loadComProfile: function() {
        this.refreshComProfile();
    },
    refreshComProfile: function() {
        var t = this, e = function() {
            return (0, c.getData)(t, "tabs.summary.comProfile.status");
        }, a = function(e) {
            (0, c.setData)(t, "tabs.summary.comProfile.status", e);
        };
        "done" != e() && a("loading"), this.reqComProfile().done(function(i) {
            t.setComProfile(i), "done" != e() && a("done");
        }).fail(function() {
            "done" != e() && a("fail");
        });
    },
    reqComProfile: function(t) {
        return (0, s.default)((0, c.assign)({
            url: h.default.SER_URL + "/v1/api/portfolio/stock/f10",
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code"),
                category: "info",
                page: 0,
                size: 1
            }
        }, t), this, !1);
    },
    setComProfile: function(t) {
        var e = (0, c.getProp)(t, "data.items");
        if (e && e.length) {
            var a = e[0];
            (0, c.setData)(this, "tabs.summary.comProfile", (0, c.assign)((0, c.getData)(this, "tabs.summary.comProfile"), {
                chi_name: a.chi_name || "",
                stock_type: (a.typ_desc || "") + "-" + (a.lst_sect_name || ""),
                indu_name_csrc: a.indu_name_csrc || "",
                sect_names: a.sect_names || "",
                lst_dt: (0, c.formatDate)(new Date(a.lst_dt), "yyyy-MM-dd"),
                pri_biz: a.pri_biz || ""
            }));
        }
    },
    loadFundProfile: function() {
        this.refreshFundProfile();
    },
    refreshFundProfile: function() {
        var t = this, e = function() {
            return (0, c.getData)(t, "tabs.summary.fundProfile.status");
        }, a = function(e) {
            (0, c.setData)(t, "tabs.summary.fundProfile.status", e);
        };
        "done" != e() && a("loading"), this.reqFundProfile().done(function(i) {
            t.setFundProfile(i), "done" != e() && a("done");
        }).fail(function() {
            "done" != e() && a("fail");
        });
    },
    reqFundProfile: function() {
        return (0, s.default)((0, c.assign)({
            url: h.default.SER_URL + "/v1/api/portfolio/fund/f10",
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code"),
                category: "info",
                page: 0,
                size: 1
            }
        }), this, !1);
    },
    setFundProfile: function(t) {
        var e = (0, c.getProp)(t, "data");
        (0, c.setData)(this, "tabs.summary.fundProfile", (0, c.assign)((0, c.getData)(this, "tabs.summary.fundProfile"), {
            fmc_com_name: e.fmc_com_name || "",
            cust_com_name: e.cust_com_name || "",
            secu_sht: e.secu_sht || "",
            chi_name: e.chi_name || "",
            chi_sht: e.chi_sht || "",
            lst_dt: (0, c.formatDate)(new Date(e.lst_dt), "yyyy-MM-dd"),
            mng_psn_name: e.mng_psn_name || "",
            mgt_fee: null == e.mgt_fee ? "" : e.mgt_fee + "%",
            trst_fee: null == e.trst_fee ? "" : e.trst_fee + "%",
            inv_obj: e.inv_obj || "",
            inv_scope: e.inv_scope || "",
            inv_st: e.inv_st || "",
            inv_rstr: e.inv_rstr || "",
            intro: e.intro || "",
            rish_rtn_char: e.rish_rtn_char || ""
        }));
    },
    loadFundAsset: function() {
        this.refreshFundAsset();
    },
    refreshFundAsset: function() {
        var t = this, e = function() {
            return (0, c.getData)(t, "tabs.summary.fundAsset.status");
        }, a = function(e) {
            (0, c.setData)(t, "tabs.summary.fundAsset.status", e);
        };
        "done" != e() && a("loading"), this.reqFundAsset().done(function(i) {
            var s = ((0, c.getProp)(i, "data.items") || [])[0];
            s && s.portfolio && s.portfolio.length ? ("done" != e() && a("done"), t.setFundAsset(i)) : "done" != e() && a("noRecord");
        }).fail(function() {
            "done" != e() && a("fail");
        });
    },
    reqFundAsset: function() {
        return (0, s.default)((0, c.assign)({
            url: h.default.SER_URL + "/v1/api/portfolio/fund/f10",
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code"),
                category: "portfolio",
                page: 0,
                size: 1
            }
        }), this, !1);
    },
    setFundAsset: function(t) {
        var e = ((0, c.getProp)(t, "data.items") || [])[0], a = e.portfolio.sort(function(t, e) {
            return e.hld_ttl_ast_rat - t.hld_ttl_ast_rat;
        }).map(function(t) {
            return {
                ast_typ_name: t.ast_typ_name || "",
                hld_ttl_ast_rat: ((t.hld_ttl_ast_rat || "") - 0).toFixed(2) + "%"
            };
        });
        a.push(a.shift()), (0, c.setData)(this, "tabs.summary.fundAsset", (0, c.assign)((0, 
        c.getData)(this, "tabs.summary.fundAsset"), {
            portfolio: a,
            public_at: (0, c.formatDate)(new Date(e.end_dt), "yyyy-MM-dd")
        }));
    },
    loadShareCapital: function() {
        this.refreshShareCapital();
    },
    refreshShareCapital: function() {
        var t = this, e = function() {
            return (0, c.getData)(t, "tabs.summary.shareCapital.status");
        }, a = function(e) {
            (0, c.setData)(t, "tabs.summary.shareCapital.status", e);
        };
        "done" != e() && a("loading"), this.reqShareCapital().done(function(i, s, n) {
            t.setShareCapital(i, s, n), "done" != e() && a("done");
        }).fail(function() {
            "done" != e() && a("fail");
        });
    },
    reqShareCapital: function() {
        return n.default.when((0, s.default)({
            url: h.default.SER_URL + "/v1/api/portfolio/stock/f10",
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code"),
                category: "ctrl",
                page: 0,
                size: 1
            }
        }, this, !1), (0, s.default)({
            url: h.default.SER_URL + "/v1/api/portfolio/stock/f10",
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code"),
                category: "factCtrl",
                page: 0,
                size: 1
            }
        }, this, !1), (0, s.default)({
            url: h.default.SER_URL + "/v1/api/portfolio/stock/f10",
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code"),
                category: "topFloatingStockholder",
                page: 0,
                size: 10
            }
        }, this, !1));
    },
    setShareCapital: function(t, e, a) {
        var i = ((0, c.getProp)(t[0], "data.items") || [])[0] || {}, s = ((0, c.getProp)(e[0], "data.items") || [])[0] || {}, n = (0, 
        c.getProp)(a[0], "data.items") || [];
        (0, c.setData)(this, "tabs.summary.shareCapital", (0, c.assign)((0, c.getData)(this, "tabs.summary.shareCapital"), {
            ctrl: i.sh_name ? i.sh_name + " " + i.hld_shr_rat.toFixed(2) + "%" : "",
            fact: s.sh_name ? s.sh_name + " " + s.hld_shr_rat.toFixed(2) + "%" : "",
            tops: (n || []).map(function(t) {
                return {
                    id: (0, c.getUnique)(),
                    company: t.sh_name,
                    ratio: t.ttl_cptl_rat.toFixed(2) + "%"
                };
            }),
            public_at: (n.length && n[0]).end_dt ? (0, c.formatDate)(new Date(n[0].end_dt), "yyyy-MM-dd") : ""
        }));
    },
    loadShareFinance: function() {
        this.refreshShareFinance();
    },
    refreshShareFinance: function() {
        var t = this, e = function() {
            return (0, c.getData)(t, "tabs.summary.shareFinance.status");
        }, a = function(e) {
            (0, c.setData)(t, "tabs.summary.shareFinance.status", e);
        };
        "done" != e() && a("loading"), this.reqShareFinance().done(function(i, s, n, o) {
            t.setShareFinance(i, s, n, o), "done" != e() && a("done");
        }).fail(function() {
            "done" != e() && a("fail");
        });
    },
    reqShareFinance: function() {
        return n.default.when((0, s.default)({
            url: h.default.SER_URL + "/v1/api/portfolio/stock/f10",
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code"),
                category: "finance",
                page: 0,
                size: 1
            }
        }, this, !1), (0, s.default)({
            url: h.default.SER_URL + "/v1/api/portfolio/stock/f10",
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code"),
                category: "income",
                page: 0,
                size: 1
            }
        }, this, !1), (0, s.default)({
            url: h.default.SER_URL + "/v1/api/portfolio/stock/f10",
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code"),
                category: "balance",
                page: 0,
                size: 1
            }
        }, this, !1), (0, s.default)({
            url: h.default.SER_URL + "/v1/api/portfolio/stock/f10",
            data: {
                market: (0, c.getData)(this, "market"),
                code: (0, c.getData)(this, "code"),
                category: "cashFlow",
                page: 0,
                size: 1
            }
        }, this, !1));
    },
    setShareFinance: function(t, e, a, i) {
        var s = (0, c.getProp)(t[0], "data.items") && (0, c.getProp)(t[0], "data.items")[0] || null, n = (0, 
        c.getProp)(e[0], "data.items") && (0, c.getProp)(e[0], "data.items")[0] || null, o = (0, 
        c.getProp)(a[0], "data.items") && (0, c.getProp)(a[0], "data.items")[0] || null, r = (0, 
        c.getProp)(i[0], "data.items") && (0, c.getProp)(i[0], "data.items")[0] || null;
        s && (0, c.setData)(this, "tabs.summary.shareFinance.public_at", (0, c.formatDate)(new Date(s.end_dt), "yyyy-MM-dd")), 
        s && n && (0, c.setData)(this, "tabs.summary.shareFinance.income", {
            eps_bas: s.eps_bas.toFixed(2),
            oper_inc: (0, c.getNumeric)(s.oper_inc),
            oper_inc_yoy: null == s.oper_inc_yoy ? "" : s.oper_inc_yoy.toFixed(2) + "%",
            oper_prof: (0, c.getNumeric)(n.oper_prof),
            net_prof_pco: (0, c.getNumeric)(s.net_prof_pco),
            oth_comp_inc: (0, c.getNumeric)(n.oth_comp_inc),
            inv_inc: (0, c.getNumeric)(n.inv_inc),
            public_at: s.info_sour
        }), s && o && (0, c.setData)(this, "tabs.summary.shareFinance.balance", {
            bvps: s.bvps.toFixed(2),
            roe_wt: s.roe_wt.toFixed(2) + "%",
            ttl_ncur_ast: (0, c.getNumeric)(o.ttl_ncur_ast),
            ttl_ast: (0, c.getNumeric)(o.ttl_ast),
            ttl_cur_liab: (0, c.getNumeric)(o.ttl_cur_liab),
            ttl_ncur_liab: (0, c.getNumeric)(o.ttl_ncur_liab),
            ttl_liab: (0, c.getNumeric)(o.ttl_liab),
            sheqy: (0, c.getNumeric)(o.sheqy),
            public_at: s.info_sour
        }), s && r && (0, c.setData)(this, "tabs.summary.shareFinance.flow", {
            net_cf_oper_ps: s.net_cf_oper_ps.toFixed(2),
            net_cf_inv: (0, c.getNumeric)(r.net_cf_inv),
            net_cf_oper: (0, c.getNumeric)(r.net_cf_oper),
            net_cf_fin: (0, c.getNumeric)(r.net_cf_fin),
            public_at: s.info_sour
        });
    },
    setFav: function() {
        var t = this, e = (0, c.getData)(this, "exchange"), a = (0, c.getData)(this, "code");
        g.default.fillStockWithGroups([ {
            exchange: e,
            code: a
        } ], this).then(function(i) {
            var s = void 0, n = (i[0].groups || []).map(function(t) {
                return {
                    gid: t.gid,
                    name: t.name,
                    stocks: [ {
                        code: a,
                        exchange: e
                    } ]
                };
            });
            t.oldGroups = n || [], s = n.length > 0 ? _ : b, (0, c.setData)(t, "favourite", s);
        });
    },
    stopPropagation: function(t) {},
    cancelFavourite: function(t, e) {
        var a = this, i = (0, c.getData)(this, "name");
        g.default.fillStockWithGroups([ {
            code: t,
            exchange: e
        } ], this).then(function(t) {
            var e = (t[0].groups || []).map(function(e) {
                return {
                    gid: e.gid,
                    name: e.cname,
                    stocks: [ {
                        code: t[0].code,
                        exchange: t[0].exchange
                    } ]
                };
            });
            (0, c.setData)(a, "isHiddenCanvas", !0), D({
                title: "确认将" + i + "从“" + e[0].name + "”" + (e[1] && e[1].name ? "“" + e[1].name + "”等" : "") + "分组中删除？",
                header: !0,
                selector: "#modal_cancel_fav",
                showCancelButton: !0,
                autoClose: !1,
                onConfirm: function() {
                    g.default.delStocks(e, a).then(function() {
                        D.close({
                            selector: "#modal_cancel_fav"
                        }), (0, c.setData)(a, "isHiddenCanvas", !1), p.default.show(a, "删除成功"), a.setFav();
                    }).catch(function(t) {
                        var e = t.msg;
                        D.close({
                            selector: "#modal_cancel_fav"
                        }), (0, c.setData)(a, "isHiddenCanvas", !1), p.default.show(a, e || "删除失败，请稍候再试");
                    });
                },
                onCancel: function() {
                    D.close({
                        selector: "#modal_cancel_fav"
                    }), (0, c.setData)(a, "isHiddenCanvas", !1);
                }
            }, a);
        });
    },
    addFavourite: function(t, e) {
        var a = this;
        (0, c.setData)(this, "isHiddenCanvas", !0), v({
            selector: "#selector",
            stocks: [ {
                exchange: e,
                code: t
            } ],
            onConfirm: function(i) {
                a.addCreatedGroup(i, t, e);
            },
            onCancel: function() {
                (0, c.setData)(a, "isHiddenCanvas", !1);
            }
        });
    },
    addCreatedGroup: function(t, e, a) {
        var i = this, s = (t || []).map(function(t) {
            return {
                gid: t.gid,
                name: t.name,
                stocks: [ {
                    code: e,
                    exchange: a
                } ]
            };
        });
        g.default.addStocks(s, this).then(function() {
            p.default.show(i, "添加成功"), (0, c.setData)(i, "isHiddenCanvas", !1), i.setFav();
        }).catch(function(t) {
            var e = t.msg;
            p.default.show(i, e || "添加失败，请稍候再试");
        });
    },
    actionSheet: function(t, e) {
        var a = this;
        this.lock || (this.lock = !0, wx.showActionSheet({
            itemList: [ "设置分组", "删除自选" ],
            success: function(i) {
                0 == i.tapIndex && a.settingGroup(), 1 == i.tapIndex && a.cancelFavourite(t, e);
            },
            complete: function() {
                a.lock = !1;
            }
        }));
    },
    settingGroup: function() {
        var t = this, e = (0, c.getData)(this, "code"), a = (0, c.getData)(this, "exchange");
        (0, c.setData)(this, "isHiddenCanvas", !0), v({
            selector: "#selector",
            stocks: [ {
                exchange: a,
                code: e
            } ],
            checkGroup: !0,
            onConfirm: function(i) {
                var s = (i || []).map(function(t) {
                    return {
                        gid: t.gid,
                        name: t.name,
                        stocks: [ {
                            code: e,
                            exchange: a
                        } ]
                    };
                }), n = (t.oldGroups || []).filter(function(t) {
                    return !s.find(function(e) {
                        return e.gid === t.gid;
                    });
                }), o = s.filter(function(e) {
                    return !(t.oldGroups || []).find(function(t) {
                        return e.gid === t.gid;
                    });
                });
                g.default.delStocks(n, t).then(function() {
                    return g.default.addStocks(o, t);
                }).then(function() {
                    p.default.show(t, "设置分组成功"), (0, c.setData)(t, "isHiddenCanvas", !1), t.setFav();
                }).catch(function(e) {
                    var a = e.msg;
                    p.default.show(t, a || "设置分组失败，请稍候再试");
                });
            },
            onCancel: function() {
                (0, c.setData)(t, "isHiddenCanvas", !1);
            }
        });
    },
    rpxToPx: function(t) {
        var e = t.width, a = t.winW;
        return +((a = a || this.settings.systemInfo.windowWidth) / 750 * e).toFixed(2);
    },
    getFiveTickFontSize: function(t) {
        var e = (t + "").length, a = {
            5: "23rpx",
            6: "19rpx",
            7: "16rpx",
            8: "14rpx"
        };
        return e < 5 ? "27rpx" : a[e];
    }
}, u.default, l.default, d.default));