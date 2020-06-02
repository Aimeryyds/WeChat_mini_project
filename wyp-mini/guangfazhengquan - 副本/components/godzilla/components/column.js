function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function n(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function i(t, e) {
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
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), r = t(require("../core/view")), a = t(require("../core/brush")), u = require("../../utils"), s = (t(require("../core/config")), 
function(t) {
    function s(t) {
        e(this, s);
        var i = n(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, t));
        return i.initialize(), i;
    }
    return i(s, r.default), o(s, [ {
        key: "initialize",
        value: function() {}
    }, {
        key: "setXAxis",
        value: function(t) {
            return this.options.xaxis = t, this;
        }
    }, {
        key: "setData",
        value: function(t) {
            return this.data = t, this.calcYAxis(), this.drawZeroLine(), this.drawData(), this;
        }
    }, {
        key: "drawData",
        value: function() {
            var t = this.options, e = t.xaxis, n = t.bbox, i = t.labels, o = t.shapes, r = n.x0, s = (n.y0, 
            n.x1), l = n.y1, c = this.data, h = .8 * (a.default.fit(e.max - e.min, s - r) || 1), p = this.cy(0), f = !0, y = !1, x = void 0;
            try {
                for (var d, b = c[Symbol.iterator](); !(f = (d = b.next()).done); f = !0) {
                    var v = d.value, m = v.index, w = v.brunt_net_in, _ = v.label, g = this.cx(m), k = this.cy(w), O = (0, 
                    u.getColor)(w);
                    o.push({
                        id: (0, u.getUnique)(),
                        hold: "\n          position: absolute;\n          width: " + h + "px;\n          height: " + Math.abs(k - p) + "px;\n          left: " + (g - h / 2) + "px;\n          font-weight: bold;\n          top: " + Math.min(k, p) + "px;\n          background-color: " + O + ";\n        "
                    }), i.dynamics.push(a.default.label({
                        text: (0, u.getNumeric)(w, null, null, !1, !0),
                        options: {
                            x: g,
                            y: w >= 0 ? p + 12 + 2 : p - 12,
                            size: 12,
                            width: 100,
                            height: 12,
                            color: O
                        }
                    })), i.dynamics.push(a.default.label({
                        text: _,
                        options: {
                            x: g,
                            y: l + 25,
                            size: 14,
                            width: 100,
                            height: 14,
                            color: "#808080"
                        }
                    }));
                }
            } catch (t) {
                y = !0, x = t;
            } finally {
                try {
                    !f && b.return && b.return();
                } finally {
                    if (y) throw x;
                }
            }
        }
    }, {
        key: "calcYAxis",
        value: function() {
            var t = this.data, e = this.options.yaxis = [], n = [], i = !0, o = !1, r = void 0;
            try {
                for (var a, u = t[Symbol.iterator](); !(i = (a = u.next()).done); i = !0) {
                    var s = a.value.brunt_net_in;
                    s && n.push(s);
                }
            } catch (t) {
                o = !0, r = t;
            } finally {
                try {
                    !i && u.return && u.return();
                } finally {
                    if (o) throw r;
                }
            }
            var l = Math.max.apply(Math, n), c = Math.min.apply(Math, n);
            return l < 0 ? l = 0 : c > 0 && (c = 0), e.min = c, e.max = l, e;
        }
    }, {
        key: "drawZeroLine",
        value: function() {
            var t = this.options, e = t.shapes, n = t.bbox, i = n.x0, o = (n.y0, n.x1), r = (n.y1, 
            this.cy(0));
            e.push({
                id: (0, u.getUnique)(),
                hold: "\n        position: absolute;\n        width: " + (o - i) + "px;\n        height: 1px;\n        left: " + i + "px;\n        top: " + r + "px;\n        border-top: 1px solid #d9d9d9;\n      "
            });
        }
    }, {
        key: "cy",
        value: function(t, e) {
            var n = this.options.yaxis, i = e || this.options.bbox, o = i.y0, r = i.y1;
            n.min > -1e-4 && (r -= 16), n.max < 1e-4 && (o += 16);
            var a = this.options.yaxis, u = a.max, s = a.min;
            return r - (t - s) * (r - o) / (u - s);
        }
    } ]), s;
}());

exports.default = s;