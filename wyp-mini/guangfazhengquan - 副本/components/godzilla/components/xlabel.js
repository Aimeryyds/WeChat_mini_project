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

var r = function() {
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
}(), o = t(require("../core/view")), a = t(require("../core/brush")), l = function(t) {
    function l(t) {
        e(this, l);
        var n = i(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, t));
        return n.initialize(), n;
    }
    return n(l, o.default), r(l, [ {
        key: "initialize",
        value: function() {
            this.drawXAxis();
        }
    }, {
        key: "onlinestart",
        value: function() {}
    }, {
        key: "onlinefocus",
        value: function(t, e) {
            var i = this.options, n = i.bbox, r = i.hintCtx, o = n.x1, a = n.y0, l = n.y1, u = this.data[t].time_d || "", s = 8 * u.length, f = s / 2;
            e <= f ? e = f : e >= o - f + 4 && (e = o - f + 4), r.save(), r.rect(e - f, a + 2, s, l - a - 4), 
            r.setFillStyle("#ffffff"), r.fill(), r.setFillStyle("#e6821e"), r.setFontSize(13), 
            r.fillText(u, e - f + 4, (a + l) / 2 + 4), r.restore();
        }
    }, {
        key: "onlineend",
        value: function() {}
    }, {
        key: "drawXAxis",
        value: function() {
            var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).autoFit, e = void 0 === t || t, i = this.options.xaxis;
            if (i) {
                var n = this.options.bbox, r = n.x0, o = n.y0, l = n.x1, u = n.y1, s = !0, f = !1, c = void 0;
                try {
                    for (var h, y = i[Symbol.iterator](); !(s = (h = y.next()).done); s = !0) {
                        var v = h.value, p = v.value, d = v.label, b = v.align, x = v.margin, m = v.height, _ = v.top, w = v.color, g = v.remove;
                        if (void 0 !== d) {
                            var k = this.cx(p);
                            e && (k = Math.max(k, r + 50), k = Math.min(k, l - 50));
                            var O = a.default.label({
                                holder: this.holder,
                                text: d,
                                options: {
                                    x: k,
                                    y: (o + u) / 2,
                                    size: 13,
                                    width: 100,
                                    align: b,
                                    margin: x,
                                    height: m,
                                    top: _,
                                    color: w
                                }
                            });
                            !1 !== g && (this.options.dynamics ? this.options.labels.dynamics.push(O) : this.options.labels.statics.push(O));
                        }
                    }
                } catch (t) {
                    f = !0, c = t;
                } finally {
                    try {
                        !s && y.return && y.return();
                    } finally {
                        if (f) throw c;
                    }
                }
            }
        }
    }, {
        key: "setXAxis",
        value: function(t) {
            return this.options.xaxis = t, this;
        }
    }, {
        key: "setData",
        value: function(t) {
            return this.data = this.calcData(t), this;
        }
    }, {
        key: "calcData",
        value: function(t) {
            var e = [], i = !0, n = !1, r = void 0;
            try {
                for (var o, a = t[Symbol.iterator](); !(i = (o = a.next()).done); i = !0) {
                    var l = o.value;
                    l && l.visible && (e[l.index] = {
                        index: l.index,
                        time_d: l.time_d
                    });
                }
            } catch (t) {
                n = !0, r = t;
            } finally {
                try {
                    !i && a.return && a.return();
                } finally {
                    if (n) throw r;
                }
            }
            return e;
        }
    } ]), l;
}();

exports.default = l;