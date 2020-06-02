function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../../../components/utils"), a = require("../../../../components/bridge"), n = e(require("../../../../components/circus/toast/toast")), i = e(require("../../../../components/deferred")), o = e(require("../../../../components/godzilla/kline")), d = e(require("../../../../services/quote/quote")), s = e(require("../../../../components/godzilla/core/calculator")), r = {
    initKlineChart: function(e) {
        var i = this, d = e.windowHeight - this.rpxToPx({
            width: 454
        }) - ((0, t.isPhoneX)(e) ? this.rpxToPx({
            width: 34
        }) : 0), s = this.rpxToPx({
            width: 726
        });
        (0, t.setData)(this, "kline.data.chart.height", d + 1 + "px"), (0, t.setData)(this, "kline.data.chart.oper.top", .46 * d - 45 + "px"), 
        this.klineChart = new o.default({
            price_base: this.data.kline.data.price_base,
            rlineCtx: (0, a.createCanvasContext)("rlineCvs"),
            dataCtx: (0, a.createCanvasContext)("klineDataCvs"),
            touchCtx: (0, a.createCanvasContext)("klineTouchCvs"),
            hintCtx: (0, a.createCanvasContext)("klineHintCvs"),
            selectCtx: (0, a.createCanvasContext)("selectCvs"),
            market: (0, t.getData)(this, "market"),
            code: (0, t.getData)(this, "code"),
            type: (0, t.getData)(this, "type"),
            bbox: {
                x0: 0,
                y0: 0,
                x1: s,
                y1: d
            },
            system: e,
            onlinestart: function() {
                i.lining = !0, i.klineLimitClick = !0, (0, t.setData)(i, "kline.data.chart.lining", !0), 
                (0, t.setData)(i, "kline.data.labels.statics", []);
            },
            onlinefocus: function(e) {
                i.setMa(e);
            },
            onlineend: function(e) {
                var a = e.show, n = e.type;
                !a && i.lining && (i.lining = !1, "reqData" !== n && (i.klineLimitClick = !0), (0, 
                t.setData)(i, "kline.data.chart.lining", !1), (0, t.setData)(i, "kline.data.labels.statics", i.rawStaticLabels || []));
            },
            onrlinedata: function(e) {
                for (var a = e, n = 1, o = 1; o < 7; o++) a[o] > a[n] && (n = o);
                for (var d = i.data.kline.data.benchmarkNumbers, o = 1; o < 7; o++) d[o].length = (a[o] / a[n] * .65 * 100).toFixed(2) + "%", 
                d[o].number = e[o];
                (0, t.setData)(i, "kline.data.benchmarkNumbers", d);
            },
            export: function(e, a, n, o) {
                var d = (0, t.getData)(i, "kline.data.labels.statics");
                !o && d && d.length || ((0, t.setData)(i, "kline.data.labels.statics", a.statics), 
                i.rawStaticLabels = a.statics), (0, t.setData)(i, "kline.data.labels.dynamics", a.dynamics);
            },
            reqData: function(e) {
                return i.shielding(e.stocks[0].code), (0, t.setData)(i, "kline.data.chart.loading", !0), 
                i.reqKLine(e).done(function(e, t) {
                    i.setKLine(e[0], t && t[0]);
                }).fail(function() {
                    e.ignoreErr || n.default.show(i, "出错啦");
                }).always(function() {
                    (0, t.setData)(i, "kline.data.chart.loading", !1);
                });
            }
        }).setAreaType("candle", this.settings.candleCurIndex).setAreaType("direction", "1").setAreaType("volume", "volume").setAreaType("technique", "macd").reqData();
    },
    reqKLine: function(e) {
        var a = this, n = new i.default();
        return setTimeout(function() {
            var o = e.stocks.map(function(n) {
                return d.default.kline({
                    data: {
                        market: n.market || (0, t.getData)(a, "market"),
                        code: n.code || (0, t.getData)(a, "code"),
                        type: e.type - 0,
                        from: 0,
                        count: e.count - 0,
                        direction: "0" == e.direction ? null : e.direction - 0
                    },
                    timeout: 1e4
                });
            });
            i.default.when.apply(null, o).done(function(e, t) {
                a.chartLoaded || (a.chartLoaded = !0), n.resolve(e, t);
            }).fail(function() {
                n.reject();
            });
        }, this.chartLoaded ? 500 : 10), n;
    },
    setKLine: function(e, n) {
        var i = (0, a.getCurrentPage)();
        if (i.data.market == this.data.market && i.data.code == this.data.code) {
            var o = function(e) {
                if (!e) return [];
                var a = (0, t.getProp)(e, "data.price_base") || 0, n = Math.pow(10, a);
                return ((0, t.getProp)(e, "data.data") || []).map(function(e) {
                    var a = e.time + "";
                    return {
                        time: +(0, t.toDate)(a.substring(0, 4) + "-" + a.substring(4, 6) + "-" + a.substring(6, 8) + " " + a.substring(8, 10) + ":" + a.substring(10, 12) + ":" + a.substring(12, 14)),
                        pclose: e.pclose / n,
                        open: e.open / n,
                        close: e.close / n,
                        high: e.high / n,
                        low: e.low / n,
                        avg: e.avg / n,
                        volume: e.volume,
                        amount: e.amount
                    };
                });
            }, d = o(e), s = o(n);
            d.market = (0, t.toMarket)((0, t.getProp)(e, "data.id.exchange")), d.code = (0, 
            t.getProp)(e, "data.id.code");
            var r = this.calcData(d);
            (0, t.setData)(this, "kline.data.candleLegend", r), this.klineChart.clear().setData(d, !0, s);
        } else this.onHide();
    },
    drawOperCvs: function() {
        var e = wx.createContext();
        e.scale(.5, .5), e.setLineWidth(3), e.setStrokeStyle("rgba(0, 0, 0, 0.3)");
        var t = function(t, a) {
            var n = 2 * (t.x0 + (t.x1 - t.x0) / 5), i = 2 * (t.x1 - (t.x1 - t.x0) / 5), o = (t.x0 + t.x1) / 2 * 2, d = 2 * (t.y0 + (t.y1 - t.y0) / 5), s = 2 * (t.y1 - (t.y1 - t.y0) / 5), r = (t.y0 + t.y1) / 2 * 2;
            e.moveTo(n, r), e.lineTo(i, r), e.moveTo(o, d), e.lineTo("left" == a ? n : i, r), 
            e.lineTo(o, s);
        };
        t({
            x0: 92,
            y0: 0,
            x1: 128,
            y1: 36
        }, "left"), t({
            x0: 138,
            y0: 0,
            x1: 174,
            y1: 36
        }, "right"), e.stroke(), wx.drawCanvas({
            canvasId: "operCvs",
            actions: e.getActions()
        });
    },
    drawMaskCvs: function() {
        var e = wx.createContext();
        e.setFillStyle("rgba(0, 0, 0, 0.5)"), e.setStrokeStyle("#ffffff"), e.rect(0, 0, 300, 335), 
        e.fill(), e.stroke(), wx.drawCanvas({
            canvasId: "maskCvs",
            actions: e.getActions()
        });
    },
    setMa: function(e) {
        e.ma5_d && (this.data.kline.data.candleLegend[0].value = e.ma5_d), e.ma10_d && (this.data.kline.data.candleLegend[1].value = e.ma10_d), 
        e.ma20_d && (this.data.kline.data.candleLegend[2].value = e.ma20_d), e.ma30_d && (this.data.kline.data.candleLegend[3].value = e.ma30_d), 
        (0, t.setData)(this, "kline.data.candleLegend", this.data.kline.data.candleLegend);
    },
    calcData: function(e) {
        var t = [], a = s.default.ma({
            index: 0,
            period: 5,
            data: e,
            field: "close"
        }), n = {
            text: "MA5",
            color: "#387FED",
            value: a ? a.toFixed(2) : "--"
        }, i = s.default.ma({
            index: 0,
            period: 10,
            data: e,
            field: "close"
        }), o = {
            text: "MA10",
            color: "#E08840",
            value: i ? i.toFixed(2) : "--"
        }, d = s.default.ma({
            index: 0,
            period: 20,
            data: e,
            field: "close"
        }), r = {
            text: "MA20",
            color: "#C1718C",
            value: d ? d.toFixed(2) : "--"
        }, c = s.default.ma({
            index: 0,
            period: 30,
            data: e,
            field: "close"
        }), l = {
            text: "MA30",
            color: "#22A907",
            value: c ? c.toFixed(2) : "--"
        };
        return t.push(n, o, r, l), t;
    },
    shielding: function(e) {
        var a = !0;
        [ {
            name: "上证指数",
            code: "000001"
        }, {
            name: "深证指数",
            code: "399001"
        }, {
            name: "创业指数",
            code: "399006"
        }, {
            name: "沪深300",
            code: "000300"
        }, {
            name: "深证300",
            code: "399007"
        }, {
            name: "中小指数",
            code: "399005"
        }, {
            name: "上证50",
            code: "000016"
        }, {
            name: "中证500",
            code: "000905"
        }, {
            name: "上证180",
            code: "000010"
        }, {
            name: "上证380",
            code: "000009"
        }, {
            name: "中证100",
            code: "000903"
        }, {
            name: "中证800",
            code: "000906"
        }, {
            name: "深证B指",
            code: "399108"
        }, {
            name: "深证A指",
            code: "399107"
        }, {
            name: "B股指数",
            code: "000003"
        }, {
            name: "沪深300",
            code: "399300"
        }, {
            name: "中小300",
            code: "399008"
        }, {
            name: "深证100R",
            code: "399004"
        }, {
            name: "上证150",
            code: "000133"
        }, {
            name: "上证100",
            code: "000132"
        }, {
            name: "A股指数",
            code: "000002"
        } ].forEach(function(t) {
            e != t.code || (a = !1);
        }), (0, t.setData)(this, "kline.data.show", a);
    }
};

exports.default = r;