function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function t(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function a(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function i(e, t) {
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

var o = function() {
    function e(e, t) {
        for (var a = 0; a < t.length; a++) {
            var i = t[a];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, a, i) {
        return a && e(t.prototype, a), i && e(t, i), t;
    };
}(), n = function e(t, a, i) {
    null === t && (t = Function.prototype);
    var o = Object.getOwnPropertyDescriptor(t, a);
    if (void 0 === o) {
        var n = Object.getPrototypeOf(t);
        return null === n ? void 0 : e(n, a, i);
    }
    if ("value" in o) return o.value;
    var l = o.get;
    if (void 0 !== l) return l.call(i);
}, l = e(require("../core/view")), r = (e(require("../core/config")), e(require("../core/brush"))), u = function(e) {
    function u(e) {
        t(this, u);
        var i = a(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, e));
        return i.initialize(), i;
    }
    return i(u, l.default), o(u, [ {
        key: "initialize",
        value: function() {
            this.drawBorder(), this.initYAxis(), this.drawHLine(), this.drawVLine();
        }
    }, {
        key: "onlinestart",
        value: function() {}
    }, {
        key: "onlinefocus",
        value: function(e, t) {
            var a = this.options, i = a.bbox, o = a.touchCtx, n = (a.hintCtx, i.x0), l = i.x1, u = (i.y0, 
            i.y1), s = this.data[e], c = void 0 === s.now ? u : this.cy(s.now);
            s.now_d.length, s.rise_d.length, s.rise;
            r.default.line({
                ctx: o,
                lines: [ [ {
                    x: n,
                    y: c
                }, {
                    x: l,
                    y: c
                } ] ],
                options: {
                    color: "#666666"
                }
            });
        }
    }, {
        key: "onlineend",
        value: function() {}
    }, {
        key: "initYAxis",
        value: function() {
            var e = this.options.yaxis = [ {
                value: -1,
                label: "",
                line: !1,
                color: "#00B56D",
                remove: !1
            }, {
                value: "",
                label: "",
                line: !0,
                remove: !1
            }, {
                value: 0,
                label: "",
                line: !0,
                remove: !1
            }, {
                value: "",
                label: "",
                line: !0,
                remove: !1
            }, {
                value: 1,
                label: "",
                line: !1,
                color: "#F91A1A",
                remove: !1
            } ];
            e.max = 1, e.min = -1;
            var t = this.options.dyaxis = [ {
                value: -1,
                label: "",
                color: "#00B56D",
                remove: !1
            }, {
                value: "",
                label: "",
                remove: !1
            }, {
                value: 0,
                label: "",
                remove: !1
            }, {
                value: "",
                label: "",
                remove: !1
            }, {
                value: 1,
                label: "",
                color: "#F91A1A",
                remove: !1
            } ];
            t.max = 1, t.min = -1;
        }
    }, {
        key: "setData",
        value: function(e) {
            this.data = this.calcData(e), this.drawBorder(), this.calcYAxis(), this.drawHLine(), 
            this.drawVLine(), this.drawYLabel(), this.drawData();
        }
    }, {
        key: "drawData",
        value: function() {
            var e = this, t = this.data;
            if (t && t.length) {
                for (var a = this.options.bbox, i = a.x0, o = a.y0, n = a.x1, l = a.y1, u = function(t, a) {
                    for (var i = t.length, o = [], n = [], l = 0, r = i; l < r; l++) {
                        var u = t[l];
                        if (u) if (void 0 === u[a]) l + 3 < r && void 0 === t[l + 1][a] && void 0 === t[l + 2][a] && void 0 === t[l + 3][a] && (n && n.length && o.push(n), 
                        n = []); else {
                            var s = {
                                x: e.cx(u.index),
                                y: e.cy(u[a])
                            }, c = i / 5;
                            0 !== u.index && u.index % c == 0 && (s.notLine = !0), n.push(s);
                        }
                    }
                    return n && n.length && o.push(n), o;
                }, s = u(t, "now"), c = 0, v = s.length; c < v; c++) {
                    var f = s[c], h = f[0], b = f[f.length - 1];
                    b && (r.default.path({
                        ctx: this.options.dataCtx,
                        points: f.concat([ {
                            x: b.x,
                            y: l
                        }, {
                            x: h.x,
                            y: l
                        }, {
                            x: h.x,
                            y: h.y
                        } ]),
                        rect: {
                            x0: i,
                            y0: o,
                            x1: n,
                            y1: l
                        },
                        options: {
                            color: "#387FED",
                            thickness: 1.2,
                            fill: "rgba(61, 133, 236, 0.15)"
                        }
                    }), r.default.line({
                        ctx: this.options.dataCtx,
                        lines: [ f ],
                        options: {
                            color: "#387FED",
                            thickness: 1.2
                        }
                    }));
                }
                var x = u(t, "avg");
                r.default.line({
                    ctx: this.options.dataCtx,
                    lines: x,
                    options: {
                        color: "#E6821E",
                        thickness: 1.2
                    }
                });
            }
        }
    }, {
        key: "calcYAxis",
        value: function() {
            var e = this.data || [];
            if (e.length) {
                var t = this.options.yaxis, a = this.options.dyaxis, i = e.pclose, o = function(e) {
                    for (var t = Number.MIN_VALUE, a = Number.MAX_VALUE, i = 0, o = e.length; i < o; i++) {
                        var n = e[i];
                        if (n && void 0 !== n.now) {
                            var l = n.now;
                            t = Math.max(t, l), a = Math.min(a, l);
                        }
                    }
                    return {
                        max: t,
                        min: a
                    };
                }.call(this, e), n = o.max, l = o.min;
                if (Math.abs(n - l) < .001 && l - 0 < .001 || n === Number.MIN_VALUE && l === Number.MAX_VALUE) t[0].value = -1, 
                t[0].label = "", t[1].value = "", t[1].label = "", t[2].value = 0, t[2].label = "", 
                t[3].value = "", t[3].label = "", t[4].value = 1, t[4].label = "", t.max = 1, t.min = -1, 
                a[0].label = "", a[2].label = "", a[4].label = ""; else {
                    var r = Math.max(Math.abs(n - i), Math.abs(l - i));
                    t[0].value = i - r, t[0].label = (i - r).toFixed(2), t[1].value = i - r / 2, t[1].label = "", 
                    t[2].value = i, t[2].label = i.toFixed(2), t[3].value = i + r / 2, t[3].label = "", 
                    t[4].value = i + r, t[4].label = (i + r).toFixed(2), t.max = i + r, t.min = i - r, 
                    a[0].label = "-" + (r / i * 100).toFixed(2) + "%", a[2].label = "0%", a[4].label = "+" + (r / i * 100).toFixed(2) + "%";
                }
            }
        }
    }, {
        key: "calcData",
        value: function(e) {
            return e;
        }
    }, {
        key: "cy",
        value: function(e) {
            var t = this.options.bbox, a = t.x0, i = t.y0, o = t.x1, l = t.y1;
            return n(u.prototype.__proto__ || Object.getPrototypeOf(u.prototype), "cy", this).call(this, e, {
                x0: a,
                y0: i + 0,
                x1: o,
                y1: l - 0
            });
        }
    } ]), u;
}();

exports.default = u;