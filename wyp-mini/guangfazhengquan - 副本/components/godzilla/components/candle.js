function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function i(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function o(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var l = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var o = t[i];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(e, o.key, o);
        }
    }
    return function(t, i, o) {
        return i && e(t.prototype, i), o && e(t, o), t;
    };
}(), a = e(require("../core/view")), n = e(require("../core/calculator")), s = e(require("../core/config")), r = e(require("../core/brush")), c = function(e) {
    function c(e) {
        t(this, c);
        var o = i(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, e));
        return o.initialize(), o;
    }
    return o(c, a.default), l(c, [ {
        key: "initialize",
        value: function() {
            this.drawBorder();
        }
    }, {
        key: "onlinestart",
        value: function() {}
    }, {
        key: "onlinefocus",
        value: function(e, t) {
            var i = this.options, o = i.bbox, l = i.touchCtx, a = i.hintCtx, n = o.x0, s = o.x1, c = o.y0, u = (o.y1, 
            this.data[e - this.data[0].index]), h = this.cy(u.close);
            return r.default.line({
                ctx: l,
                lines: [ [ {
                    x: n,
                    y: h
                }, {
                    x: s,
                    y: h
                } ] ],
                options: {
                    color: "#666666"
                }
            }), a.save(), a.setFontSize(13), a.setFillStyle("#999999"), a.fillText("开: ", 60, c + 16), 
            a.fillText("高: ", 140, c + 16), a.fillText("值: ", 220, c + 16), a.fillText("收: ", 60, c + 31), 
            a.fillText("低: ", 140, c + 31), a.fillText("幅: ", 220, c + 31), a.setFillStyle(u.open_c), 
            a.fillText(u.open_d, 80, c + 16), a.setFillStyle(u.high_c), a.fillText(u.high_d, 160, c + 16), 
            a.setFillStyle(u.color), a.fillText(u.change_d, 240, c + 16), a.setFillStyle(u.close_c), 
            a.fillText(u.close_d, 80, c + 31), a.setFillStyle(u.low_c), a.fillText(u.low_d, 160, c + 31), 
            a.setFillStyle(u.color), a.fillText(u.rise_d, 240, c + 31), a.restore(), u;
        }
    }, {
        key: "onlineend",
        value: function() {}
    }, {
        key: "setData",
        value: function(e) {
            this.data = this.calcData(e), this.drawBorder(), this.calcYAxis(), this.drawVLine(), 
            this.drawHLine(), this.drawYLabel(), this.drawData();
        }
    }, {
        key: "drawData",
        value: function() {
            var e = this.options, t = e.xaxis, i = e.bbox, o = e.dataCtx, l = (e.mode, i.x0), a = (i.y0, 
            i.x1), n = (i.y1, this.data), c = (s.default.COLOR.RISE, s.default.COLOR.DOWN, []), u = [], h = [], d = [], f = 3 * r.default.fit(t.max - t.min, a - l) || 1, x = Math.ceil(f / 6) || 1, p = !0, y = !1, v = void 0;
            try {
                for (var b, m = n[Symbol.iterator](); !(p = (b = m.next()).done); p = !0) {
                    var _ = b.value, w = _.index, g = _.open, k = _.high, F = _.low, O = _.close, C = _.color, T = _.ma5, S = _.ma10, M = _.ma20, D = _.ma30, E = this.cx(w);
                    this.drawCandle({
                        thickness: f,
                        dataCtx: o,
                        x: E,
                        color: C,
                        linethickness: x,
                        open: g,
                        high: k,
                        low: F,
                        close: O
                    }), void 0 !== T && c.push({
                        x: E,
                        y: this.cy(T)
                    }), void 0 !== S && u.push({
                        x: E,
                        y: this.cy(S)
                    }), void 0 !== M && h.push({
                        x: E,
                        y: this.cy(M)
                    }), void 0 !== D && d.push({
                        x: E,
                        y: this.cy(D)
                    });
                }
            } catch (e) {
                y = !0, v = e;
            } finally {
                try {
                    !p && m.return && m.return();
                } finally {
                    if (y) throw v;
                }
            }
            r.default.line({
                ctx: o,
                lines: [ c ],
                options: {
                    color: "#387FED",
                    thickness: 1.2
                }
            }), r.default.line({
                ctx: o,
                lines: [ u ],
                options: {
                    color: "#E08840",
                    thickness: 1.2
                }
            }), r.default.line({
                ctx: o,
                lines: [ h ],
                options: {
                    color: "#C1718C",
                    thickness: 1.2
                }
            }), r.default.line({
                ctx: o,
                lines: [ d ],
                options: {
                    color: "#22A907",
                    thickness: 1.2
                }
            });
        }
    }, {
        key: "drawCandle",
        value: function(e) {
            var t = e.thickness, i = e.dataCtx, o = e.x, l = e.color, a = e.linethickness, n = e.open, s = e.high, c = e.low, u = e.close;
            t > 2 && r.default.rect({
                ctx: i,
                rect: {
                    x0: o - t / 6,
                    y0: this.cy(n),
                    x1: o + t / 6,
                    y1: this.cy(u)
                },
                options: {
                    color: l
                }
            }), 1 == a ? r.default.line({
                ctx: i,
                lines: [ [ {
                    x: o,
                    y: this.cy(s)
                }, {
                    x: o,
                    y: this.cy(c)
                } ] ],
                options: {
                    color: l,
                    thickness: a
                }
            }) : 2 == a ? r.default.line({
                ctx: i,
                lines: [ [ {
                    x: o,
                    y: this.cy(s)
                }, {
                    x: o,
                    y: this.cy(c)
                } ] ],
                options: {
                    color: l,
                    thickness: 1.5
                }
            }) : r.default.rect({
                ctx: i,
                rect: {
                    x0: o - a / 4,
                    y0: this.cy(s),
                    x1: o + a / 4,
                    y1: this.cy(c)
                },
                options: {
                    color: l
                }
            });
        }
    }, {
        key: "calcYAxis",
        value: function() {
            var e = this.data, t = [], i = [], o = !0, l = !1, a = void 0;
            try {
                for (var n, s = e[Symbol.iterator](); !(o = (n = s.next()).done); o = !0) {
                    var r = n.value, c = r.pclose, u = r.open, h = r.low, d = r.high, f = r.close, x = r.ma5, p = r.ma10, y = r.ma20, v = r.ma30;
                    c && i.push(c), u && i.push(u), h && i.push(h), d && i.push(d), f && i.push(f), 
                    x && i.push(x), p && i.push(p), y && i.push(y), v && i.push(v);
                }
            } catch (e) {
                l = !0, a = e;
            } finally {
                try {
                    !o && s.return && s.return();
                } finally {
                    if (l) throw a;
                }
            }
            for (var b = Math.max.apply(Math, i), m = Math.min.apply(Math, i), _ = function(e) {
                return e < .05 ? .01 : e < .5 ? .1 : e < .5 ? .1 : e < 1 ? .2 : e < 5 ? 1 : e < 10 ? 2 : e < 20 ? 5 : e < 50 ? 10 : e < 100 ? 20 : e < 500 ? 100 : e < 1e3 ? 200 : 1e3;
            }.call(this, b - m), w = Math.ceil(b / _) * _, g = Math.floor(m / _) * _, k = 100 > w ? 2 : 1e3 > w ? 1 : 0; w + 1e-4 >= g || t.length <= 1; ) t.push({
                value: g.toFixed(2) - 0,
                label: g.toFixed(k)
            }), g += _;
            var F = t[0];
            m >= F.value + _ / 4 * 3 ? F.label = F.value = (F.value + _ / 4 * 3).toFixed(k) : m >= F.value + _ / 2 && (F.label = F.value = (F.value + _ / 2).toFixed(k));
            var O = t[t.length - 1];
            return b <= O.value - _ / 4 * 3 ? O.label = O.value = (O.value - _ / 4).toFixed(k) : b <= O.value - _ / 2 && (O.label = O.value = (O.value - _ / 2).toFixed(k)), 
            t.min = t[0].value, t.max = t[t.length - 1].value, this.options.yaxis = t, t;
        }
    }, {
        key: "calcData",
        value: function(e) {
            var t = s.default.COLOR.RISE, i = s.default.COLOR.DOWN, o = s.default.COLOR.UNCHANGE, l = [], a = !0, r = !1, c = void 0;
            try {
                for (var u, h = e[Symbol.iterator](); !(a = (u = h.next()).done); a = !0) {
                    var d = u.value;
                    if (d && d.visible) {
                        var f = n.default.ma({
                            index: d.index,
                            period: 5,
                            data: e,
                            field: "close"
                        }), x = n.default.ma({
                            index: d.index,
                            period: 10,
                            data: e,
                            field: "close"
                        }), p = n.default.ma({
                            index: d.index,
                            period: 20,
                            data: e,
                            field: "close"
                        }), y = n.default.ma({
                            index: d.index,
                            period: 30,
                            data: e,
                            field: "close"
                        }), v = d.close - d.pclose, b = v >= 0 ? "+" : "";
                        l.push({
                            index: d.index,
                            time: d.time,
                            date: d.date,
                            pclose: d.pclose,
                            open: d.open,
                            open_d: d.open ? d.open.toFixed(2) : "--",
                            open_c: 1e-4 > Math.abs(d.open - d.pclose) ? o : d.open >= d.pclose ? t : i,
                            high: d.high,
                            high_d: d.high ? d.high.toFixed(2) : "--",
                            high_c: 1e-4 > Math.abs(d.high - d.pclose) ? o : d.high >= d.pclose ? t : i,
                            low: d.low,
                            low_d: d.low ? d.low.toFixed(2) : "--",
                            low_c: 1e-4 > Math.abs(d.low - d.pclose) ? o : d.low >= d.pclose ? t : i,
                            close: d.close,
                            close_d: d.close ? d.close.toFixed(2) : "--",
                            close_c: 1e-4 > Math.abs(d.close - d.pclose) ? o : d.close >= d.pclose ? t : i,
                            change_d: b + v.toFixed(2),
                            rise_d: b + (v / d.pclose * 100).toFixed(2) + "%",
                            avg: d.avg,
                            ma5: f,
                            ma5_d: f ? f.toFixed(2) : "--",
                            ma10: x,
                            ma10_d: x ? x.toFixed(2) : "--",
                            ma20: p,
                            ma20_d: p ? p.toFixed(2) : "--",
                            ma30: y,
                            ma30_d: y ? y.toFixed(2) : "--",
                            color: d.open <= d.close ? t : i
                        });
                    }
                }
            } catch (e) {
                r = !0, c = e;
            } finally {
                try {
                    !a && h.return && h.return();
                } finally {
                    if (r) throw c;
                }
            }
            return l;
        }
    }, {
        key: "setDirection",
        value: function(e) {
            this.direction = e;
        }
    }, {
        key: "getDirection",
        value: function() {
            return this.direction;
        }
    }, {
        key: "setType",
        value: function(e) {
            this.options.type = e;
        }
    }, {
        key: "getType",
        value: function() {
            return this.options.type;
        }
    }, {
        key: "setXAxis",
        value: function(e) {
            return this.options.xaxis = e, this;
        }
    }, {
        key: "setBBox",
        value: function(e) {
            return this.options.bbox = e, this;
        }
    }, {
        key: "refresh",
        value: function() {
            this.setData(this.data);
        }
    } ]), c;
}();

c.const = {
    name: {
        1: "1分",
        2: "5分",
        3: "10分",
        4: "15分",
        5: "30分",
        6: "60分",
        7: "日K",
        8: "周K",
        9: "月K",
        10: "季度",
        11: "半年",
        12: "年度"
    },
    direction: {
        0: "不复权",
        1: "前复权",
        2: "后复权"
    }
}, exports.default = c;