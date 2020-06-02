function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function i(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function a(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var a = e[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, i, a) {
        return i && t(e.prototype, i), a && t(e, a), e;
    };
}(), s = t(require("./core/view")), o = t(require("./components/candle")), r = t(require("./components/rcandle")), l = (t(require("./components/rline")), 
t(require("./components/xlabel"))), h = t(require("./components/volume")), u = t(require("./components/technique")), d = t(require("./components/gesture")), c = require("../utils"), y = function(t) {
    function y(t) {
        e(this, y);
        var a = i(this, (y.__proto__ || Object.getPrototypeOf(y)).call(this, t));
        return a.initialize(), a.exportCanvas(), a.interval = -1 != (a.options.system.system || "").toUpperCase().indexOf("IOS") ? 1e3 / 60 : 1e3 / 15, 
        a;
    }
    return a(y, s.default), n(y, [ {
        key: "initialize",
        value: function() {
            var t = this.options.bbox, e = t.x0, i = t.y0, a = t.x1, n = t.y1, s = [ .46, .27, .27 ], c = this.options.labels = {
                statics: [],
                dynamics: []
            }, y = this.options.rlineCtx, f = this.options.dataCtx, m = this.options.touchCtx, x = this.options.hintCtx;
            this.clearContext(), this.candle = new o.default({
                type: this.options.type,
                dataCtx: f,
                touchCtx: m,
                hintCtx: x,
                labels: c,
                bbox: {
                    x0: e,
                    y0: i,
                    x1: a,
                    y1: n * s[0] - 10
                }
            }), this.rcandle = new r.default({
                mode: "rline",
                type: this.options.type,
                dataCtx: y,
                bbox: {
                    x0: e,
                    y0: i,
                    x1: a,
                    y1: n * s[0] - 10 - 15
                },
                onrlinedata: this.options.onrlinedata
            }), this.xlabel = new l.default({
                dataCtx: f,
                hintCtx: x,
                labels: c,
                bbox: {
                    x0: e,
                    y0: n * s[0] - 10,
                    x1: a,
                    y1: n * s[0] + 10
                },
                dynamics: !0
            }), this.volume = new h.default({
                price_base: this.options.price_base,
                typeNumber: this.options.type,
                market: this.options.market,
                dataCtx: f,
                hintCtx: x,
                labels: c,
                bbox: {
                    x0: e,
                    y0: n * s[0] + 10,
                    x1: a,
                    y1: n * (s[0] + s[1]) - 3
                },
                ma5: !0,
                ma10: !0,
                ma20: !0,
                ma30: !0
            }), this.technique = new u.default({
                dataCtx: f,
                hintCtx: x,
                labels: c,
                bbox: {
                    x0: e,
                    y0: n * (s[0] + s[1]) + 3,
                    x1: a,
                    y1: n
                }
            }), this.gesture = new d.default({
                dataCtx: f,
                touchCtx: m,
                bbox: {
                    x0: e,
                    y0: i,
                    x1: a,
                    y1: n
                },
                bboxs: [ this.candle.options.bbox, {
                    x0: e,
                    y0: this.volume.options.bbox.y0,
                    x1: a,
                    y1: this.technique.options.bbox.y1
                } ],
                system: this.options.system,
                onlinestart: this.onlinestart.bind(this),
                onlinefocus: this.onlinefocus.bind(this),
                onlineend: this.onlineend.bind(this),
                ondragstart: this.ondragstart.bind(this),
                ondragging: this.ondragging.bind(this),
                ondragend: this.ondragend.bind(this),
                onzoomstart: this.onzoomstart.bind(this),
                onzooming: this.onzooming.bind(this),
                onzoomend: this.onzoomend.bind(this)
            });
        }
    }, {
        key: "move",
        value: function(t) {
            this.ondragstart(), this.ondragging(t), this.ondragend();
        }
    }, {
        key: "onlinestart",
        value: function() {
            this.candle.onlinestart(), this.xlabel.onlinestart(), this.volume.onlinestart(), 
            this.technique.onlinestart(), this.options.onlinestart();
        }
    }, {
        key: "onlinefocus",
        value: function(t, e) {
            var i = this.candle.onlinefocus(t, e), a = Object.assign(i, this.data[t]);
            return this.xlabel.onlinefocus(t, e), this.volume.onlinefocus(t, e), this.technique.onlinefocus(t, e), 
            this.options.onlinefocus(a), this.options.touchCtx.draw(), this.options.hintCtx.draw(), 
            i;
        }
    }, {
        key: "onlineend",
        value: function(t) {
            this.xlabel.onlineend(), this.candle.onlineend(), this.volume.onlineend(), this.technique.onlineend(), 
            this.options.onlineend(t);
        }
    }, {
        key: "ondragstart",
        value: function() {
            try {
                var t = this.distribution;
                t._first = t.first, t._last = t.last;
            } catch (t) {
                console.log("kline dragstart error:" + JSON.stringify(t));
            }
        }
    }, {
        key: "ondragging",
        value: function(t) {
            var e = this.distribution;
            e.first = e._first + t, e.last = e._last + t, e.done ? (e._data = null, this.setData(e.data, !1, e.rdata)) : e.last + t > e.data.length - y.dafault.xaxis.bar.extra ? (e._data = e.data, 
            e._rdata = e.rdata, e.quotes = 2 * e.quotes, this.reqData(!0)) : (e._data = null, 
            this.setData(e.data, !1, e.rdata));
        }
    }, {
        key: "ondragend",
        value: function() {}
    }, {
        key: "onzoomstart",
        value: function() {}
    }, {
        key: "onzooming",
        value: function(t) {
            var e = this.distribution, i = e.first, a = e.last, n = (e.total, e.quotes, Math.floor((i + a) / 2)), s = 2 * Math.floor(Math.floor((a - i || 1) * t) / 2), o = n - s / 2;
            o = i == o && t > 1 ? o - 1 : o;
            var r = n + s / 2;
            r = a == r && t > 1 ? r + 1 : r, t < 1 && i > 0 && o < 0 && (i = 0), 0 == i && (r -= o, 
            o = 0), o == i && r == a || (e.first = o, e.last = r, e.done ? (this._data = null, 
            this.setData(e.data, !1, e.rdata)) : e.last > e.data.length - y.dafault.xaxis.bar.extra ? (e._data = e.data, 
            e.quotes = Math.floor(2 * e.quotes * t), this.reqData(!0)) : (this._data = null, 
            this.setData(e.data, !1, e.rdata)));
        }
    }, {
        key: "onzoomend",
        value: function() {}
    }, {
        key: "ontouchstart",
        value: function(t) {
            this.gesture.ontouchstart(t);
        }
    }, {
        key: "ontouchmove",
        value: function(t) {
            this.gesture.ontouchmove(t);
        }
    }, {
        key: "ontouchend",
        value: function(t) {
            this.gesture.ontouchend(t);
        }
    }, {
        key: "calcDistribution",
        value: function() {
            var t = this.options.bbox, e = t.x0, i = (t.y0, t.x1), a = (t.y1, 0 + Math.ceil((i - e) / (1.3 * y.dafault.xaxis.bar.thickness)) - 1), n = Math.floor(1.5 * (a - 0 + 1)) + y.dafault.xaxis.bar.extra;
            this.distribution = {
                first: 0,
                last: a,
                quotes: n,
                offset: 0
            };
        }
    }, {
        key: "reqData",
        value: function(t) {
            var e = this;
            return this.gesture && this.gesture.disable(), this.options.reqData({
                stocks: function() {
                    var t = [ {
                        market: e.options.market,
                        code: e.options.code
                    } ];
                    return e.options.rstock && t.push(e.options.rstock), t;
                }(),
                type: this.type,
                direction: this.direction,
                count: this.distribution.quotes,
                ignoreErr: t
            }).always(function() {
                e.gesture && e.gesture.clearVLine("reqData"), e.gesture && e.gesture.enable();
            }), this;
        }
    }, {
        key: "setData",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = this, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
            if (t.market + "" == this.options.market + "" && t.code + "" == this.options.code + "") {
                var n = this.distribution;
                n._data && n._data.length == t.length && (n.done = !0), n.data = t, n.rdata = a;
                return (this.tasks = this.tasks || []).push(function() {
                    e.clearContext(), t = e.data = e.formatData(t), a = e.rdata = e.formatData(a), e.xaxis = e.calcXAxis(t), 
                    e.candle.setXAxis(e.xaxis).setData(t), e.rcandle && e.rcandle.setXAxis(e.xaxis).setData(a, t), 
                    e.xlabel.setXAxis(e.xaxis).setData(t).drawXAxis(), e.volume && e.volume.setXAxis(e.xaxis).setData(t), 
                    e.technique && e.technique.setXAxis(e.xaxis).setData(t), e.gesture && e.gesture.setXAxis(e.xaxis).setData(t), 
                    e.exportCanvas(i);
                }), setTimeout(function() {
                    e.runTask();
                }, this.interval), this;
            }
        }
    }, {
        key: "setRStock",
        value: function(t) {
            this.options.rstock = t;
            var e = this.options.bbox, i = e.x0, a = e.y0, n = e.x1, s = e.y1, o = [ .46, .27, .27 ];
            return this.candle.setBBox({
                x0: i,
                y0: a,
                x1: n,
                y1: s * o[0] - 10 - 15
            }), this;
        }
    }, {
        key: "enableGesture",
        value: function() {
            return this.gesture.enable(), this;
        }
    }, {
        key: "disableGesture",
        value: function() {
            return this.gesture.disable(), this;
        }
    }, {
        key: "calcXAxis",
        value: function(t) {
            var e = this.distribution, i = e.first, a = e.last, n = e.offset, s = i + n, o = a + n, r = [], l = y.const.type[this.type].format, h = Math.max(0, s), u = Math.min(t.length - 1, o);
            if (o <= t.length - 1) s < 0 ? (r.push({
                value: s,
                label: "",
                align: "right",
                line: !1
            }), r.push({
                value: h,
                label: (0, c.formatDate)(t[h].date, l),
                align: "center",
                line: !1
            })) : r.push({
                value: h,
                label: (0, c.formatDate)(t[h].date, l),
                align: h == u ? "center" : "right",
                line: !1
            }), h != u && r.push({
                value: u,
                label: (0, c.formatDate)(t[u].date, l),
                align: "left",
                line: !1
            }), r.min = s - .75, r.max = o + .75; else if (s >= 0) r.push({
                value: s,
                label: (0, c.formatDate)(t[s].date, l),
                align: h == u ? "center" : "right",
                line: !1
            }), h != u && r.push({
                value: u,
                label: (0, c.formatDate)(t[u].date, l),
                align: "left",
                line: !1
            }), r.min = s - .75, r.max = o + .75; else {
                var d = o - (t.length - 1);
                r.push({
                    value: s - d,
                    label: "",
                    align: "right",
                    line: !1
                }), r.push({
                    value: h,
                    label: (0, c.formatDate)(t[h].date, l),
                    align: "center",
                    line: !1
                }), h != u && r.push({
                    value: u,
                    label: (0, c.formatDate)(t[u].date, l),
                    align: "left",
                    line: !1
                }), r.min = s - d - .75, r.max = o + .75;
            }
            return r;
        }
    }, {
        key: "formatData",
        value: function(t) {
            if (!t || !t.length) return [];
            for (var e = this.distribution, i = e.first, a = e.last, n = e.offset, s = (e.quotes, 
            i + n), o = a + n, r = [], l = y.const.type[this.type].short, h = t.relative, u = 0, d = t.length; u < d; u++) {
                var f = t[u];
                f && (f.index = u, f.date = new Date(f.time), f.time_d = (0, c.formatDate)(f.date, l), 
                f.visible = u >= s && u <= o, u <= o + 2 * y.dafault.xaxis.bar.extra && (r[u] = f), 
                h && (f.relative = h[u]));
            }
            return this.distribution.total = t.length, r.market = t.market, r.code = t.code, 
            r;
        }
    }, {
        key: "runTask",
        value: function() {
            var t = this.tasks || [], e = t[t.length - 1];
            return e && e(), this.tasks = [], this;
        }
    }, {
        key: "setAreaType",
        value: function(t, e) {
            return "candle" === t ? (this.type = e, this.candle.setType(e), this.calcDistribution()) : "direction" === t ? (this.direction = e, 
            this.candle.setDirection(e)) : "volume" === t ? this.volume.setType("kline_" + e) : "technique" === t && this.technique.setType(e), 
            this;
        }
    }, {
        key: "getAreaType",
        value: function(t) {
            return "candle" === t ? this.candle.getType() : "direction" === t ? this.candle.getDirection() : "volume" === t ? this.volume.getType() : "technique" === t ? this.technique.getType() : void 0;
        }
    }, {
        key: "clear",
        value: function() {
            return this.options.labels && (this.options.labels.statics = []), this;
        }
    } ]), y;
}();

y.dafault = {
    xaxis: {
        label: {
            height: 20
        },
        bar: {
            extra: 60,
            thickness: 5
        }
    }
}, y.const = {
    storage: "SNI_KLINE_DATA",
    type: {
        1: {
            name: "1分",
            format: "MM-dd hh:mm",
            short: "MM-dd hh:mm",
            width: "60"
        },
        2: {
            name: "5分",
            format: "MM-dd hh:mm",
            short: "MM-dd hh:mm",
            width: "60"
        },
        3: {
            name: "10分",
            format: "MM-dd hh:mm",
            short: "MM-dd hh:mm",
            width: "60"
        },
        4: {
            name: "15分",
            format: "MM-dd hh:mm",
            short: "MM-dd hh:mm",
            width: "60"
        },
        5: {
            name: "30分",
            format: "MM-dd hh:mm",
            short: "MM-dd hh:mm",
            width: "60"
        },
        6: {
            name: "60分",
            format: "MM-dd hh:mm",
            short: "MM-dd hh:mm",
            width: "60"
        },
        7: {
            name: "日K",
            format: "yyyy-MM-dd",
            short: "yyyy-MM-dd",
            width: "40"
        },
        8: {
            name: "周K",
            format: "yyyy-MM-dd",
            short: "yyyy-MM-dd",
            width: "40"
        },
        9: {
            name: "月K",
            format: "yyyy-MM-dd",
            short: "yyyy-MM-dd",
            width: "60"
        },
        10: {
            name: "季度",
            format: "yyyy-MM-dd",
            short: "yyyy-MM-dd",
            width: "60"
        },
        11: {
            name: "半年",
            format: "yyyy-MM-dd",
            short: "yyyy-MM-dd",
            width: "60"
        },
        12: {
            name: "年度",
            format: "yyyy-MM",
            short: "yyyy-MM-dd",
            width: "60"
        }
    }
}, exports.default = y;