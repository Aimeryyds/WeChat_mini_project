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

function a(e, t) {
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

var n = function() {
    function e(e, t) {
        for (var i = 0; i < t.length; i++) {
            var a = t[i];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, i, a) {
        return i && e(t.prototype, i), a && e(t, a), t;
    };
}(), o = e(require("../core/view")), r = e(require("../core/config")), l = e(require("../core/brush")), s = function(e) {
    function s(e) {
        t(this, s);
        var a = i(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, e));
        return a.initialize(), a;
    }
    return a(s, o.default), n(s, [ {
        key: "initialize",
        value: function() {}
    }, {
        key: "onlinestart",
        value: function() {}
    }, {
        key: "onlinefocus",
        value: function(e, t) {
            var i = this.options, a = i.bbox, n = i.hintCtx, o = (a.x0, a.x1, a.y0), r = (a.y1, 
            this.data[e - this.data[0].index]);
            r && (n.save(), n.setFontSize(13), n.setFillStyle(r.macd_c), n.fillText("MACD: " + r.macd_d, 60, o + 15), 
            n.setFillStyle("#387FED"), n.fillText("DIFF: " + r.diff_d, 150, o + 15), n.setFillStyle("#E08840"), 
            n.fillText("DEA:" + r.dea_d, 230, o + 15), n.restore());
        }
    }, {
        key: "onlineend",
        value: function() {}
    }, {
        key: "setData",
        value: function(e) {
            this.data = this.calcData(e), this.drawBorder(), this.drawCaption([ {
                text: "MACD",
                color: "#999999"
            } ]), this.MAs = this.drawMA([ {
                text: "DIFF",
                color: "#387FED"
            }, {
                text: "DEA",
                color: "#E08840"
            } ]), this.calcYAxis(), this.drawHLine(), this.drawYLabel(), this.drawData();
        }
    }, {
        key: "clearMA",
        value: function() {
            var e = !0, t = !1, i = void 0;
            try {
                for (var a, n = this.MAs[Symbol.iterator](); !(e = (a = n.next()).done); e = !0) {
                    var o = a.value;
                    this.removeMA(o.id);
                }
            } catch (e) {
                t = !0, i = e;
            } finally {
                try {
                    !e && n.return && n.return();
                } finally {
                    if (t) throw i;
                }
            }
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
        key: "calcYAxis",
        value: function() {
            var e = this.data, t = [], i = !0, a = !1, n = void 0;
            try {
                for (var o, r = e[Symbol.iterator](); !(i = (o = r.next()).done); i = !0) {
                    var l = o.value;
                    t.push(l.diff || 0, l.dea || 0, l.macd || 0);
                }
            } catch (e) {
                a = !0, n = e;
            } finally {
                try {
                    !i && r.return && r.return();
                } finally {
                    if (a) throw n;
                }
            }
            var s = Math.max.apply(Math, t), u = Math.min.apply(Math, t), c = null;
            s < 0 ? ((c = [ {
                value: u,
                label: u.toFixed(2)
            }, {
                value: 0,
                label: "0"
            } ]).min = u, c.max = 0) : u > 0 ? ((c = [ {
                value: 0,
                label: "0"
            }, {
                value: s,
                label: s.toFixed(2)
            } ]).min = 0, c.max = s) : ((c = [ {
                value: u,
                label: u.toFixed(2)
            }, {
                value: 0,
                label: "0"
            }, {
                value: s,
                label: s.toFixed(2)
            } ]).min = u, c.max = s), this.options.yaxis = c;
        }
    }, {
        key: "calcData",
        value: function(e) {
            for (var t = e.map(function(e) {
                return {
                    index: e.index,
                    close: e.close,
                    visible: e.visible
                };
            }), i = [], a = r.default.COLOR.RISE, n = r.default.COLOR.DOWN, o = r.default.COLOR.UNCHANGE, l = t.length - 1, s = l; s >= 0; s--) {
                var u = t[s];
                if (u) {
                    var c = u.close, f = 0, d = 0, y = 0, h = 0, x = 0;
                    if (s !== l) {
                        var v = t[s + 1];
                        x = 2 * ((y = (f = 11 * v.ema12 / 13 + 2 * c / 13) - (d = 25 * v.ema26 / 27 + 2 * c / 27)) - (h = 8 * v.dea / 10 + 2 * y / 10));
                    }
                    u.ema12 = f, u.ema26 = d, u.diff = y, u.diff_d = y > 0 ? "+" + y.toFixed(2) : y.toFixed(2), 
                    u.dea = h, u.dea_d = h > 0 ? "+" + h.toFixed(2) : h.toFixed(2), u.macd = x, u.macd_d = x > 0 ? "+" + x.toFixed(2) : x.toFixed(2), 
                    u.macd_c = Math.abs(x) < 1e-4 ? o : x > 0 ? a : n, u.visible && i.push(u);
                }
            }
            return i.reverse(), i;
        }
    }, {
        key: "drawData",
        value: function() {
            for (var e = this.data, t = this.options, i = t.xaxis, a = t.bbox, n = t.dataCtx, o = a.x0, s = (a.y0, 
            a.x1), u = (a.y1, Math.ceil((l.default.fit(i.max - i.min, s - o) || 1) / 3)), c = [], f = [], d = r.default.COLOR.RISE, y = r.default.COLOR.DOWN, h = 0, x = e.length; h < x; h++) {
                var v = e[h];
                if (v) {
                    var p = v.macd, b = this.cx(v.index), m = p >= 0 ? d : y;
                    1 === u ? l.default.line({
                        ctx: n,
                        lines: [ [ {
                            x: b,
                            y: this.cy(0)
                        }, {
                            x: b,
                            y: this.cy(p)
                        } ] ],
                        options: {
                            color: m,
                            thickness: 1
                        }
                    }) : l.default.rect({
                        ctx: n,
                        rect: {
                            x0: b - u / 2,
                            y0: this.cy(0),
                            x1: b + u / 2,
                            y1: this.cy(p)
                        },
                        options: {
                            color: m
                        }
                    }), c.push({
                        x: b,
                        y: this.cy(v.diff)
                    }), f.push({
                        x: b,
                        y: this.cy(v.dea)
                    });
                }
            }
            l.default.line({
                ctx: n,
                lines: [ c ],
                options: {
                    color: "#387FED",
                    thickness: 1.2
                }
            }), l.default.line({
                ctx: n,
                lines: [ f ],
                options: {
                    color: "#E08840",
                    thickness: 1.2
                }
            });
        }
    } ]), s;
}();

exports.default = s;