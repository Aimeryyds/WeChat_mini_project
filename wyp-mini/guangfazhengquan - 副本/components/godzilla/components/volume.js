function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    if (Array.isArray(t)) {
        for (var e = 0, o = Array(t.length); e < t.length; e++) o[e] = t[e];
        return o;
    }
    return Array.from(t);
}

function o(t, e) {
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
        for (var o = 0; o < e.length; o++) {
            var i = e[o];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, o, i) {
        return o && t(e.prototype, o), i && t(e, i), e;
    };
}(), s = t(require("../core/view")), r = require("../../utils"), l = t(require("../core/config")), u = t(require("../core/brush")), m = t(require("../core/calculator")), c = function(t) {
    function c(t) {
        o(this, c);
        var e = i(this, (c.__proto__ || Object.getPrototypeOf(c)).call(this, t));
        return e.typeNumber = e.options.typeNumber, e.price_base = Math.pow(10, e.options.price_base), 
        e.initialize(), e;
    }
    return a(c, s.default), n(c, [ {
        key: "initialize",
        value: function() {
            this.drawBorder();
        }
    }, {
        key: "onlinestart",
        value: function() {}
    }, {
        key: "onlinefocus",
        value: function(t, e) {
            var o = this.options, i = o.bbox, a = o.hintCtx, n = (i.x0, i.x1, i.y0), s = (i.y1, 
            this.data[t]);
            s && (a.save(), a.setFontSize(13), a.setFillStyle("#999999"), a.fillText(s.volume_amount_l + ":", 60, n + 16), 
            a.setFillStyle(s.color), a.fillText(s.volume_amount_d, 80, n + 16), s.ma5 && s.ma5_d && (a.setFillStyle("#387FED"), 
            a.fillText("MA5: " + s.ma5_d, 130, n + 16)), s.ma10 && s.ma10_d && (a.setFillStyle("#E08840"), 
            a.fillText("MA10:" + s.ma10_d, 220, n + 16)), a.restore());
        }
    }, {
        key: "onlineend",
        value: function() {}
    }, {
        key: "setType",
        value: function(t) {
            this.options.type = t;
        }
    }, {
        key: "getType",
        value: function() {
            return this.getField();
        }
    }, {
        key: "setData",
        value: function(t) {
            this.data = this.calcData(t), this.drawBorder(), this.calcYAxis(), "kline_volume" === this.options.type || "kline_amount" === this.options.type ? this.drawCaption([ {
                text: c.const.caption[this.options.type],
                color: "#999999"
            } ], 1) : this.drawCaption([ {
                text: c.const.caption[this.options.type],
                color: "#999999"
            } ]), this.display(), this.drawHLine(), this.drawYLabel(), this.drawData();
        }
    }, {
        key: "clearMA",
        value: function() {
            if (this.MAs) {
                var t = !0, e = !1, o = void 0;
                try {
                    for (var i, a = this.MAs[Symbol.iterator](); !(t = (i = a.next()).done); t = !0) {
                        var n = i.value;
                        this.removeMA(n.id);
                    }
                } catch (t) {
                    e = !0, o = t;
                } finally {
                    try {
                        !t && a.return && a.return();
                    } finally {
                        if (e) throw o;
                    }
                }
            }
        }
    }, {
        key: "drawData",
        value: function() {
            for (var t = this.options.xaxis, e = this.options.bbox, o = e.x0, i = (e.y0, e.x1), a = (e.y1, 
            this.data), n = this.getField(), s = [], l = [], m = this.options.ma5, p = this.options.ma10, h = (this.options.ma20, 
            this.options.ma30, u.default.fit(this.options.type === c.const.type.timeshare.volume || this.options.type === c.const.type.timeshare.amount ? t.length : t.max - t.min, i - o) || 1), d = 0, y = a.length; d < y; d++) {
                var v = a[d], f = this.cx(v.index), _ = v.color;
                1 === h ? u.default.line({
                    ctx: this.options.dataCtx,
                    lines: [ [ {
                        x: f,
                        y: this.cy(0)
                    }, {
                        x: f,
                        y: this.cy(v[n])
                    } ] ],
                    options: {
                        color: _,
                        thickness: 1
                    }
                }) : u.default.rect({
                    ctx: this.options.dataCtx,
                    rect: {
                        x0: f - h / 2,
                        y0: this.cy(0),
                        x1: f + h / 2,
                        y1: this.cy(v[n])
                    },
                    options: {
                        color: _
                    }
                });
                var x = v[n + "_ma5"];
                m && void 0 !== x && s.push({
                    x: f,
                    y: this.cy(x)
                });
                var k = v[n + "_ma10"];
                p && void 0 !== k && l.push({
                    x: f,
                    y: this.cy(k)
                }), "kline_volume" === this.options.type && (v.ma5 = x, v.ma5_d = x ? (0, r.getNumeric)((0, 
                r.stockType)(x, this.options.market, this.options.typeNumber)) : "--", v.ma10 = k, 
                v.ma10_d = k ? (0, r.getNumeric)((0, r.stockType)(k, this.options.market, this.options.typeNumber)) : "--"), 
                "kline_amount" === this.options.type && (v.ma5 = x, v.ma5_d = x ? (0, r.getNumeric)(x / this.price_base) : "--", 
                v.ma10 = k, v.ma10_d = k ? (0, r.getNumeric)(k / this.price_base) : "--");
            }
            m && u.default.line({
                ctx: this.options.dataCtx,
                lines: [ s ],
                options: {
                    color: "#1083FF",
                    thickness: 1.2
                }
            }), p && u.default.line({
                ctx: this.options.dataCtx,
                lines: [ l ],
                options: {
                    color: "#E08840",
                    thickness: 1.2
                }
            });
        }
    }, {
        key: "calcYAxis",
        value: function() {
            var t = this.data, o = this.getField(), i = this.options.market, a = function(t) {
                if (t && t.length) return Math.max.apply(Math, e(t.map(function(t) {
                    return t[o] || 0;
                })));
            }.call(this, t), n = [ {
                value: 0,
                label: void 0
            }, {
                value: a,
                label: "kline_volume" === this.options.type || "kline_amount" === this.options.type ? void 0 : (0, 
                r.getNumeric)((0, r.stockType)(a, i, this.options.typeNumber), null, null, null, !0)
            } ];
            n.max = a, n.min = 0, this.options.yaxis = n;
        }
    }, {
        key: "getField",
        value: function() {
            var t = this.options.type;
            return t === c.const.type.kline.volume || t === c.const.type.timeshare.volume ? "volume" : "amount";
        }
    }, {
        key: "setXAxis",
        value: function(t) {
            return this.options.xaxis = t, this;
        }
    }, {
        key: "display",
        value: function() {
            var t = Math.pow(10, this.options.price_base), e = this.options.market, o = this.options.typeNumber;
            if (this.options.ma5 && this.options.ma10) {
                this.clearMA();
                var i = this.data[0].color;
                if ("kline_volume" === this.options.type) {
                    var a = this.data[0].volume_ma5 ? (0, r.getNumeric)((0, r.stockType)(this.data[0].volume_ma5, e, o)) : "--", n = this.data[0].volume_ma10 ? (0, 
                    r.getNumeric)((0, r.stockType)(this.data[0].volume_ma10, e, o)) : "--", s = this.data[0].volume_d ? this.data[0].volume_d : "--";
                    this.MAs = this.drawMA([ {
                        text: "量: " + s,
                        color: "" + i
                    }, {
                        text: "MA5: " + a,
                        color: "#387FED"
                    }, {
                        text: "MA10: " + n,
                        color: "#E08840"
                    } ]);
                } else {
                    var l = this.calcData(this.data)[0], u = l.amount_ma5 ? (0, r.getNumeric)(l.amount_ma5 / t) : "--", m = l.amount_ma10 ? (0, 
                    r.getNumeric)(l.amount_ma10 / t) : "--", c = l.amount_d ? l.amount_d : "--";
                    this.MAs = this.drawMA([ {
                        text: "额: " + c,
                        color: "" + i
                    }, {
                        text: "MA5: " + u,
                        color: "#387FED"
                    }, {
                        text: "MA10: " + m,
                        color: "#E08840"
                    } ]);
                }
            }
        }
    }, {
        key: "calcData",
        value: function(t) {
            for (var e = [], o = this.options.ma5, i = this.options.ma10, a = c.const.type, n = l.default.COLOR.RISE, s = l.default.COLOR.DOWN, u = this.getField(), p = this.options.market, h = this.options.typeNumber, d = Math.pow(10, this.options.price_base), y = 0, v = t.length; y < v; y++) {
                var f = t[y];
                if (f && f.visible) {
                    var _ = {
                        index: f.index,
                        time: f.time,
                        date: f.date,
                        volume: f.volume,
                        volume_d: (0, r.getNumeric)((0, r.stockType)(f.volume, p, h)),
                        amount: f.amount,
                        amount_d: (0, r.getNumeric)(f.amount / d)
                    };
                    if ("volume" == u ? (_.volume_amount_l = "量", _.volume_amount_d = _.volume_d) : (_.volume_amount_l = "额", 
                    _.volume_amount_d = _.amount_d), this.options.type === a.kline.volume || this.options.type === a.kline.amount ? (_.open = f.open, 
                    _.close = f.close) : (_.open = y + 1 == v ? f.pclose : t[y + 1].now, _.close = f.now), 
                    _.color = _.open <= _.close ? n : s, o) {
                        var x = m.default.ma({
                            index: f.index,
                            period: 5,
                            data: t,
                            field: "volume"
                        });
                        _.volume_ma5 = x;
                        var k = m.default.ma({
                            index: f.index,
                            period: 5,
                            data: t,
                            field: "amount"
                        });
                        _.amount_ma5 = k;
                    }
                    if (i) {
                        var b = m.default.ma({
                            index: f.index,
                            period: 10,
                            data: t,
                            field: "volume"
                        });
                        _.volume_ma10 = b;
                        var g = m.default.ma({
                            index: f.index,
                            period: 10,
                            data: t,
                            field: "amount"
                        });
                        _.amount_ma10 = g;
                    }
                    e.push(_);
                } else e.push(f);
            }
            return e;
        }
    } ]), c;
}();

c.const = {
    type: {
        kline: {
            volume: "kline_volume",
            amount: "kline_amount"
        },
        timeshare: {
            volume: "timeshare_volume",
            amount: "timeshare_amount"
        }
    },
    caption: {
        kline_volume: "成交量",
        kline_amount: "成交额",
        timeshare_volume: "分时量",
        timeshare_amount: "分时额"
    }
}, exports.default = c;