function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = t(require("../../../../components/godzilla/timeseries")), a = require("../../../../components/bridge"), i = require("../../../../components/utils"), s = t(require("../../../../services/quote/quote")), n = {
    initFiveDayChart: function(t) {
        var a = this, s = (0, i.getData)(this, "type"), n = t.windowWidth - this.rpxToPx({
            width: 24
        }), r = void 0;
        r = (0, i.isPhoneX)(t) ? "1" == s ? t.windowHeight - this.rpxToPx({
            width: 492
        }) : this.rpxToPx({
            width: 640
        }) : "1" == s ? t.windowHeight - this.rpxToPx({
            width: 454
        }) : this.rpxToPx({
            width: 640
        }), (0, i.setData)(this, "fiveday.data.chart.style", {
            width: n,
            height: r
        }), this.fiveDayChart = new e.default({
            type: this.data.type,
            dataCtx: wx.createCanvasContext("fiveDayDataCvs"),
            touchCtx: wx.createCanvasContext("fiveDayTouchCvs"),
            hintCtx: wx.createCanvasContext("fiveDayHintCvs"),
            market: (0, i.getData)(this, "market") + "",
            code: (0, i.getData)(this, "code") + "",
            chartType: "fiveday",
            isReturnBond: this.isReturnBond,
            bbox: {
                x0: i.CANVAS_GAP,
                y0: i.CANVAS_GAP,
                x1: n - i.CANVAS_GAP,
                y1: r - i.CANVAS_GAP
            },
            system: t,
            onlinestart: function() {
                a.lining = !0, (0, i.setData)(a, "fiveday.data.chart.lining", !0);
            },
            onlinefocus: function(t) {
                (0, i.setData)(a, "fiveday.data.hint", t);
            },
            onlineend: function(t) {
                !t.show && a.lining && (a.lining = !1, (0, i.setData)(a, "fiveday.data.chart.lining", !1), 
                (0, i.setData)(a, "fiveday.data.hint", a.timeseriesHint));
            },
            export: function(t, e) {
                var s = (0, i.getData)(a, "fiveday.data.labels.statics");
                s && s.length || (0, i.setData)(a, "fiveday.data.labels.statics", e.statics), (0, 
                i.setData)(a, "fiveday.data.labels.dynamics", e.dynamics);
                var n = "top:" + .7 * r + "px;";
                (0, i.setData)(a, "fiveday.data.volume.style", n);
            }
        }), (0, i.setData)(this, "fiveday.data.chart.loading", !0), this.reqFiveDayTimeseries().done(function(t) {
            a.setFiveDayTimeseries(t);
        }).always(function() {
            (0, i.setData)(a, "fiveday.data.chart.loading", !1);
        });
    },
    reqFiveDayTimeseries: function() {
        return s.default.timeseries({
            data: {
                market: (0, i.getData)(this, "market"),
                code: (0, i.getData)(this, "code"),
                scene: 1
            },
            timeout: 1e4
        });
    },
    setFiveDayTimeseries: function(t) {
        var e = (0, a.getCurrentPage)();
        if (e.data.market == this.data.market && e.data.code == this.data.code) {
            var s = (0, i.getProp)(t, "data.price_base") || 0, n = Math.pow(10, s), r = {};
            ((0, i.getProp)(t, "data.data") || []).forEach(function(t) {
                var e = t.time + "", a = e.substring(4, 6), i = e.substring(6, 8), s = {
                    time: e.substring(8, 10) + ":" + e.substring(10, 12),
                    pclose: t.pclose / n,
                    price: t.price / n,
                    avg: (t.avg || t.avgIndex) / 1e6,
                    volume: t.volume,
                    change: t.change / 100,
                    rise: t.roc / 100
                };
                r[a + "-" + i] ? r[a + "-" + i].push(s) : r[a + "-" + i] = [ s ];
            });
            var o = Object.keys(r);
            if (o.length < 5) {
                var d = new Date(), h = d.getMonth() + 1, c = d.getDate();
                r[h + "-" + c] = [ {
                    time: "09:30"
                } ], o.unshift(h + "-" + c);
                var v = {};
                o.forEach(function(t) {
                    v[t] = r[t];
                }), r = v;
            }
            var u = (0, i.getData)(this, "fiveday.data.labels.statics");
            if (u && u.length) {
                var f = Object.keys(r);
                u.forEach(function(t, e) {
                    t.text = f[e];
                }), (0, i.setData)(this, "fiveday.data.labels.statics", u);
            }
            var l = {};
            this.error || (l.data = Object.values(r), l.market = (0, i.toMarket)((0, i.getProp)(t, "data.id.exchange")), 
            l.code = (0, i.getProp)(t, "data.id.code"), l.pclose = (this.quoteData.data.pclose || this.quoteData.data.open) / n), 
            this.fiveDayChart.setData(l);
        } else this.onHide();
    }
};

exports.default = n;