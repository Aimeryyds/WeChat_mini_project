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

function r(t, e) {
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
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, i, r) {
        return i && t(e.prototype, i), r && t(e, r), e;
    };
}(), o = t(require("../core/view")), s = t(require("../core/brush")), a = function(t) {
    function a(t) {
        e(this, a);
        var r = i(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t));
        return r.initialize(), r;
    }
    return r(a, o.default), n(a, [ {
        key: "initialize",
        value: function() {}
    }, {
        key: "onlinestart",
        value: function() {}
    }, {
        key: "onlinefocus",
        value: function(t, e) {
            var i = this.options, r = i.bbox, n = i.hintCtx, o = (r.x0, r.x1, r.y0), s = (r.y1, 
            this.data[t - this.data[0].index]);
            s && (n.save(), n.setFontSize(13), n.setFillStyle("#387FED"), n.fillText("RSI6: " + s.rsi6_d, 60, o + 15), 
            n.setFillStyle("#E08840"), n.fillText("RSI12: " + s.rsi12_d, 140, o + 15), n.setFillStyle("#C1718C"), 
            n.fillText("RSI24: " + s.rsi24_d, 220, o + 15), n.restore());
        }
    }, {
        key: "onlineend",
        value: function() {}
    }, {
        key: "setData",
        value: function(t) {
            this.data = this.calcData(t), this.drawBorder(), this.drawCaption([ {
                text: "RSI",
                color: "#999999"
            } ]), this.MAs = this.drawMA([ {
                text: "RSI6",
                color: "#387FED",
                word: 3
            }, {
                text: "RSI12",
                color: "#E08840",
                word: 4
            }, {
                text: "RSI24",
                color: "#C1718C",
                word: 4
            } ]), this.calcYAxis(this.data.reduce(function(t, e) {
                return null != e.rsi6 && (t = t.concat(e.rsi6)), null != e.rsi12 && (t = t.concat(e.rsi12)), 
                null != e.rsi24 && (t = t.concat(e.rsi24)), t;
            }, [])), this.drawHLine(), this.drawYLabel(), this.drawData();
        }
    }, {
        key: "clearMA",
        value: function() {
            var t = !0, e = !1, i = void 0;
            try {
                for (var r, n = this.MAs[Symbol.iterator](); !(t = (r = n.next()).done); t = !0) {
                    var o = r.value;
                    this.removeMA(o.id);
                }
            } catch (t) {
                e = !0, i = t;
            } finally {
                try {
                    !t && n.return && n.return();
                } finally {
                    if (e) throw i;
                }
            }
        }
    }, {
        key: "setType",
        value: function(t) {
            this.options.type = t;
        }
    }, {
        key: "getType",
        value: function() {
            return this.options.type;
        }
    }, {
        key: "setXAxis",
        value: function(t) {
            return this.options.xaxis = t, this;
        }
    }, {
        key: "calcData",
        value: function(t) {
            for (var e = t.map(function(t) {
                return {
                    index: t.index,
                    close: t.close,
                    visible: t.visible
                };
            }), i = [], r = function(t, e, i) {
                if (!(t + i > e.length - 1)) {
                    for (var r = 0, n = 0, o = 0; o < i; ) {
                        var s = e[t + o], a = e[t + o + 1], l = s.close - a.close;
                        l >= 0 ? r += l : n += Math.abs(l), o++;
                    }
                    return Math.abs(r + n) < 1e-5 ? 100 : r / (r + n) * 100;
                }
            }, n = 0, o = e.length; n < o; n++) {
                var s = e[n], a = r(n, t, 6), l = r(n, t, 12), u = r(n, t, 24);
                s.rsi6 = a, s.rsi6_d = void 0 === a ? "--" : a > 0 ? "+" + a.toFixed(2) : a.toFixed(2), 
                s.rsi12 = l, s.rsi12_d = void 0 === l ? "--" : l > 0 ? "+" + l.toFixed(2) : l.toFixed(2), 
                s.rsi24 = u, s.rsi24_d = void 0 === u ? "--" : u > 0 ? "+" + u.toFixed(2) : u.toFixed(2), 
                s.visible && i.push(s);
            }
            return i;
        }
    }, {
        key: "drawData",
        value: function() {
            for (var t = this.options.dataCtx, e = this.data, i = [], r = [], n = [], o = 0, a = e.length; o < a; o++) {
                var l = e[o], u = this.cx(l.index);
                i.push({
                    x: u,
                    y: this.cy(l.rsi6)
                }), r.push({
                    x: u,
                    y: this.cy(l.rsi12)
                }), n.push({
                    x: u,
                    y: this.cy(l.rsi24)
                });
            }
            s.default.line({
                ctx: t,
                lines: [ i ],
                options: {
                    color: "#387FED",
                    thickness: 1.2
                }
            }), s.default.line({
                ctx: t,
                lines: [ r ],
                options: {
                    color: "#E08840",
                    thickness: 1.2
                }
            }), s.default.line({
                ctx: t,
                lines: [ n ],
                options: {
                    color: "#C1718C",
                    thickness: 1.2
                }
            });
        }
    } ]), a;
}();

exports.default = a;