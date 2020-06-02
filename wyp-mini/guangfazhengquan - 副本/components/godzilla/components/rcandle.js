function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function o(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function r(e, t) {
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
        for (var o = 0; o < t.length; o++) {
            var r = t[o];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, o, r) {
        return o && e(t.prototype, o), r && e(t, r), t;
    };
}(), a = e(require("./candle")), i = e(require("../core/brush")), c = e(require("../core/config")), l = function(e) {
    function l(e) {
        return t(this, l), o(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, e));
    }
    return r(l, a.default), n(l, [ {
        key: "setData",
        value: function(e, t) {
            e && e.length && (this.data = this.calcData(e), this.calcYAxis(), this.drawData(t));
        }
    }, {
        key: "drawData",
        value: function(e) {
            var t = this.options, o = t.xaxis, r = t.bbox, n = t.dataCtx, a = (t.mode, r.x0), l = (r.y0, 
            r.x1), s = (r.y1, this.data), u = (c.default.COLOR.RISE, c.default.COLOR.DOWN, 3 * i.default.fit(o.max - o.min, l - a) || 1), f = Math.ceil(u / 6) || 1, p = (e || []).reduce(function(e, t) {
                return e[t.index] = t, e;
            }, {}), d = {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0
            }, h = !0, y = !1, x = void 0;
            try {
                for (var b, v = s[Symbol.iterator](); !(h = (b = v.next()).done); h = !0) {
                    var O = b.value, w = O.index, m = O.open, _ = O.high, k = O.low, R = O.close, C = O.pclose, D = O.color, P = (O.ma5, 
                    O.ma10, O.ma20, O.ma30, this.cx(w));
                    this.drawCandle({
                        thickness: u,
                        dataCtx: n,
                        x: P,
                        color: "#D8D8D8",
                        linethickness: f,
                        open: m,
                        high: _,
                        low: k,
                        close: R
                    });
                    var g = p[w] || {}, j = this.calcRKPI({
                        close: R,
                        pclose: C || m
                    }, {
                        close: g.close,
                        pclose: g.pclose || g.open
                    });
                    this.drawRKPI({
                        x: P,
                        rkpi: j,
                        color: D,
                        thickness: u
                    }), d[j]++;
                }
            } catch (e) {
                y = !0, x = e;
            } finally {
                try {
                    !h && v.return && v.return();
                } finally {
                    if (y) throw x;
                }
            }
            this.options.onrlinedata(d);
        }
    }, {
        key: "drawRKPI",
        value: function(e) {
            var t = e.x, o = e.rkpi, r = e.thickness, n = this.options, a = n.bbox, l = n.dataCtx, s = (a.x0, 
            a.y0, a.x1, a.y1), u = s + 10, f = -1 != "1,3,5".indexOf(o) ? c.default.COLOR.RISE : c.default.COLOR.DOWN, p = t - r / 6, d = t + r / 6;
            i.default.rect({
                ctx: l,
                rect: {
                    x0: p,
                    y0: s + 5,
                    x1: d,
                    y1: u + 5
                },
                options: {
                    color: "#ffffff",
                    linecolor: f
                }
            });
            var h = void 0, y = void 0;
            "1" == o || "4" == o ? (h = s + 5, y = (u + s) / 2 + 5) : "2" == o || "3" == o ? (h = (u + s) / 2 + 5, 
            y = u + 5) : (h = s + 5, y = u + 5), i.default.rect({
                ctx: l,
                rect: {
                    x0: p,
                    y0: h,
                    x1: d,
                    y1: y
                },
                options: {
                    color: f
                }
            });
        }
    }, {
        key: "calcRKPI",
        value: function(e, t) {
            var o = (e.close - e.pclose) / e.pclose, r = (t.close - t.pclose) / t.pclose;
            return r >= 0 ? o >= 0 ? r >= o ? "1" : "3" : "5" : o < 0 ? r <= o ? "2" : "4" : "6";
        }
    } ]), l;
}();

exports.default = l;