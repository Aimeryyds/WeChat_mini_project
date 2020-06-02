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

function n(t, e) {
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

var o = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(t, n.key, n);
        }
    }
    return function(e, i, n) {
        return i && t(e.prototype, i), n && t(e, n), e;
    };
}(), r = t(require("../core/view")), a = t(require("../core/brush")), l = function(t) {
    function l(t) {
        e(this, l);
        var n = i(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, t));
        return n.initialize(), n;
    }
    return n(l, r.default), o(l, [ {
        key: "initialize",
        value: function() {}
    }, {
        key: "onlinestart",
        value: function() {}
    }, {
        key: "onlinefocus",
        value: function(t, e) {
            var i = this.options, n = i.bbox, o = i.hintCtx, r = (n.x0, n.x1, n.y0), a = (n.y1, 
            this.data[t - this.data[0].index]);
            a && (o.save(), o.setFontSize(13), o.setFillStyle("#387FED"), o.fillText("K: " + a.k_d, 60, r + 15), 
            o.setFillStyle("#E08840"), o.fillText("D: " + a.d_d, 130, r + 15), o.setFillStyle("#C1718C"), 
            o.fillText("J: " + a.j_d, 200, r + 15), o.restore());
        }
    }, {
        key: "onlineend",
        value: function() {}
    }, {
        key: "setData",
        value: function(t) {
            this.data = this.calcData(t), this.drawBorder(), this.drawCaption([ {
                text: "KDJ",
                color: "#999999"
            } ]), this.MAs = this.drawMA([ {
                text: "K",
                color: "#387FED"
            }, {
                text: "D",
                color: "#E08840"
            }, {
                text: "J",
                color: "#C1718C"
            } ]), this.calcYAxis(this.data.reduce(function(t, e) {
                return null != e.k && (t = t.concat(e.k)), null != e.d && (t = t.concat(e.d)), null != e.j && (t = t.concat(e.j)), 
                t;
            }, [])), this.drawHLine(), this.drawYLabel(), this.drawData();
        }
    }, {
        key: "clearMA",
        value: function() {
            var t = !0, e = !1, i = void 0;
            try {
                for (var n, o = this.MAs[Symbol.iterator](); !(t = (n = o.next()).done); t = !0) {
                    var r = n.value;
                    this.removeMA(r.id);
                }
            } catch (t) {
                e = !0, i = t;
            } finally {
                try {
                    !t && o.return && o.return();
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
                    low: t.low,
                    high: t.high,
                    visible: t.visible
                };
            }), i = [], n = e.length - 1, o = n; o >= 0; o--) !function(t, n) {
                var o = e[n], r = o.close, a = function(t) {
                    for (var e = Number.MAX_VALUE, i = Number.MIN_VALUE, o = n, r = Math.min(t.length, o + 9); o < r; o++) {
                        var a = t[o];
                        e = Math.min(e, a.low), i = Math.max(i, a.high);
                    }
                    return {
                        low: e,
                        high: i
                    };
                }(e), l = a.low, s = a.high, u = Math.abs(s - l) < 1e-4 ? 100 : (r - l) / (s - l) * 100, c = 50, h = 50, f = 50;
                if (n !== t) {
                    var d = e[n + 1];
                    f = 3 * (c = 2 * d.k / 3 + u / 3) - 2 * (h = 2 * d.d / 3 + c / 3);
                }
                o.k = c, o.k_d = c > 0 ? "+" + c.toFixed(2) : c.toFixed(2), o.d = h, o.d_d = h > 0 ? "+" + h.toFixed(2) : h.toFixed(2), 
                o.j = f, o.j_d = f > 0 ? "+" + f.toFixed(2) : f.toFixed(2), o.visible && i.push(o);
            }(n, o);
            return i.reverse(), i;
        }
    }, {
        key: "drawData",
        value: function() {
            for (var t = this.options.dataCtx, e = this.data, i = [], n = [], o = [], r = 0, l = e.length; r < l; r++) {
                var s = e[r], u = this.cx(s.index);
                i.push({
                    x: u,
                    y: this.cy(s.k)
                }), n.push({
                    x: u,
                    y: this.cy(s.d)
                }), o.push({
                    x: u,
                    y: this.cy(s.j)
                });
            }
            a.default.line({
                ctx: t,
                lines: [ i ],
                options: {
                    color: "#387FED",
                    thickness: 1.2
                }
            }), a.default.line({
                ctx: t,
                lines: [ n ],
                options: {
                    color: "#E08840",
                    thickness: 1.2
                }
            }), a.default.line({
                ctx: t,
                lines: [ o ],
                options: {
                    color: "#C1718C",
                    thickness: 1.2
                }
            });
        }
    } ]), l;
}();

exports.default = l;