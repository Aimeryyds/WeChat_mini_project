function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

function e(t) {
    if (Array.isArray(t)) {
        for (var e = 0, a = Array(t.length); e < t.length; e++) a[e] = t[e];
        return a;
    }
    return Array.from(t);
}

function a(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var i = function() {
    function t(t, e) {
        for (var a = 0; a < e.length; a++) {
            var i = e[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, a, i) {
        return a && t(e.prototype, a), i && t(e, i), e;
    };
}(), o = t(require("./brush")), l = t(require("./config")), n = function() {
    function t(e) {
        a(this, t), this.options = e;
    }
    return i(t, [ {
        key: "drawBorder",
        value: function() {
            var t = this.options.bbox, e = t.x0, a = t.y0, i = t.x1, l = t.y1;
            o.default.line({
                ctx: this.options.dataCtx,
                lines: [ [ {
                    x: e,
                    y: a
                }, {
                    x: i,
                    y: a
                }, {
                    x: i,
                    y: l
                }, {
                    x: e,
                    y: l
                }, {
                    x: e,
                    y: a
                } ] ],
                options: {
                    color: "#eee"
                }
            });
        }
    }, {
        key: "drawHLine",
        value: function() {
            for (var t = this.options, e = t.bbox, a = t.yaxis, i = t.dataCtx, l = e.x0, n = e.x1, s = 0, r = a.length; s < r; s++) {
                var x = a[s], u = this.cy(x.value);
                (0 !== s && s !== r - 1 || x.line) && o.default.line({
                    ctx: i,
                    lines: [ [ {
                        x: l,
                        y: u
                    }, {
                        x: n,
                        y: u
                    } ] ],
                    options: {
                        color: "#eee"
                    }
                });
            }
        }
    }, {
        key: "drawVLine",
        value: function() {
            var t = this.options, e = t.bbox, a = t.xaxis, i = t.dataCtx, l = e.y0, n = e.y1, s = !0, r = !1, x = void 0;
            try {
                for (var u, y = a[Symbol.iterator](); !(s = (u = y.next()).done); s = !0) {
                    var c = u.value, h = c.value;
                    c.label;
                    if (c.line && h !== a.min && h !== a.max) {
                        var d = this.cx(h);
                        o.default.line({
                            ctx: i,
                            lines: [ [ {
                                x: d,
                                y: l
                            }, {
                                x: d,
                                y: n
                            } ] ],
                            options: {
                                color: "#eee"
                            }
                        });
                    }
                }
            } catch (t) {
                r = !0, x = t;
            } finally {
                try {
                    !s && y.return && y.return();
                } finally {
                    if (r) throw x;
                }
            }
            return this;
        }
    }, {
        key: "drawYLabel",
        value: function() {
            for (var t = this.options, e = t.labels, a = t.bbox, i = t.yaxis, l = t.dyaxis, n = void 0 === l ? [] : l, s = a.x0, r = a.x1, x = a.y0, u = 0, y = i.length; u < y; u++) {
                var c = i[u], h = n[u], d = this.cy(c.value) || x;
                if (void 0 !== c.label) {
                    var f = o.default.label({
                        holder: this.holder,
                        text: c.label,
                        options: {
                            x: s,
                            y: d,
                            width: 60,
                            size: 13,
                            align: "left",
                            zIndex: 0,
                            color: c.color,
                            margin: {
                                left: 2,
                                top: u === y - 1 ? 4 : -14
                            }
                        }
                    });
                    e.dynamics.push(f);
                }
                if (h && void 0 !== h.label) {
                    var p = o.default.label({
                        holder: this.holder,
                        text: h.label,
                        options: {
                            x: r - 60,
                            y: d,
                            width: 60,
                            size: 13,
                            align: "right",
                            zIndex: 0,
                            color: h.color,
                            margin: {
                                left: -2,
                                top: u === y - 1 ? 4 : -14
                            }
                        }
                    });
                    e.dynamics.push(p);
                }
            }
        }
    }, {
        key: "drawCaption",
        value: function(t) {
            for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, a = this.options, i = a.bbox, l = a.labels, n = i.x0, s = i.y0, r = (i.x1, 
            i.y1, 0), x = t.length; r < x; r++) {
                var u = t[r], y = u.text, c = u.color;
                l.dynamics.push(o.default.label({
                    text: y,
                    options: {
                        x2: e ? n : 8 + 46 * (x - r - 1),
                        y: s + 3,
                        width: 13 * y.length,
                        size: 13,
                        color: c,
                        align: "right",
                        opacity: .8,
                        zIndex: 0,
                        margin: {
                            left: 0,
                            top: 0
                        }
                    }
                }));
            }
        }
    }, {
        key: "drawMA",
        value: function(t) {
            for (var e = this.options, a = e.bbox, i = e.labels, l = (a.x0, a.y0), n = (a.x1, 
            a.y1, []), s = 0, r = 0, x = t.length; r < x; r++) {
                var u = t[r], y = u.text, c = u.color, h = u.word, d = u.dynamics, f = o.default.label({
                    text: y,
                    options: {
                        x: 64 + 7 * s + 7 * r,
                        y: l + 4,
                        width: 8 * y.length,
                        size: 13,
                        color: c,
                        align: "left",
                        opacity: .8,
                        zIndex: 0,
                        margin: {
                            left: 0,
                            top: 0
                        }
                    }
                });
                d ? i.dynamics.push(f) : i.statics.push(f), n.push(f), s += null == h ? y.length : h;
            }
            return n;
        }
    }, {
        key: "removeMA",
        value: function(t, e) {
            for (var a = e ? this.options.labels.dynamics : this.options.labels.statics, i = 0, o = a.length; i < o; i++) {
                var l = a[i];
                l && (l.id == t && (a.splice(i, 1), i--));
            }
        }
    }, {
        key: "exportCanvas",
        value: function(t) {
            this.options.dataCtx && this.options.dataCtx.draw(), this.options.rlineCtx && this.options.rlineCtx.draw(), 
            this.options.export(this.options.dataCtx, this.options.labels, this.options.shapes, t);
        }
    }, {
        key: "clearContext",
        value: function() {
            var t = this.options, e = t.bbox, a = t.dataCtx, i = (t.touchCtx, t.rlineCtx), n = e.x0, s = e.y0, r = e.x1, x = e.y1;
            a && (o.default.clear({
                ctx: a,
                x0: n,
                y0: s,
                x1: r,
                y1: x
            }), a.scale(1 / l.default.PIXEL, 1 / l.default.PIXEL)), i && (o.default.clear({
                ctx: i,
                x0: n,
                y0: s,
                x1: r,
                y1: x
            }), i.scale(1 / l.default.PIXEL, 1 / l.default.PIXEL)), this.options.labels && (this.options.labels.dynamics = []), 
            this.options.shapes && (this.options.shapes.length = 0);
        }
    }, {
        key: "clearTouchCtx",
        value: function() {
            var t = this.options, e = t.bbox, a = t.touchCtx, i = e.x0, n = e.y0, s = e.x1, r = e.y1;
            a && o.default.clear({
                ctx: a,
                x0: i,
                y0: n,
                x1: s,
                y1: r
            }), a.scale(1 / l.default.PIXEL, 1 / l.default.PIXEL);
        }
    }, {
        key: "calcYAxis",
        value: function(t, a) {
            var i = Math.max.apply(Math, e(t)), o = Math.min.apply(Math, e(t)), l = a ? (i > 0 ? "+" : "") + (100 * i).toFixed(2) + "%" : i.toFixed(2), n = a ? (o > 0 ? "+" : "") + (100 * o).toFixed(2) + "%" : o.toFixed(2), s = null;
            i < 0 ? ((s = [ {
                value: o,
                label: n
            }, {
                value: 0,
                label: "0"
            } ]).min = o, s.max = 0) : o > 0 ? ((s = [ {
                value: 0,
                label: "0"
            }, {
                value: i,
                label: l
            } ]).min = 0, s.max = i) : ((s = [ {
                value: o,
                label: n
            }, {
                value: 0,
                label: "0"
            }, {
                value: i,
                label: l
            } ]).min = o, s.max = i), this.options.yaxis = s;
        }
    }, {
        key: "drawNoRecord",
        value: function() {
            var t = this.options, e = t.labels, a = t.bbox, i = a.x0, l = a.y0, n = a.x1, s = a.y1;
            e.dynamics.push(o.default.label({
                text: "暂无数据",
                options: {
                    x: (i + n) / 2,
                    y: (l + s) / 2 - 10,
                    width: 60,
                    size: 12,
                    align: "center",
                    zIndex: 0
                }
            }));
        }
    }, {
        key: "cx",
        value: function(t, e) {
            var a = e || this.options.bbox, i = a.x0, o = a.x1, l = this.options.xaxis, n = l.max, s = l.min;
            return o - (t - s) * (o - i) / (n - s);
        }
    }, {
        key: "cy",
        value: function(t, e) {
            t = t || 0;
            var a = e || this.options.bbox, i = a.y0, o = a.y1, l = this.options.yaxis, n = l.max, s = l.min;
            return o - (t - s) * (o - i) / (n - s);
        }
    }, {
        key: "getXAxis",
        value: function() {
            return this.options.xaxis;
        }
    }, {
        key: "setXAxis",
        value: function(t) {
            return this.options.xaxis = t, this;
        }
    } ]), t;
}();

exports.default = n;