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
}(), s = t(require("../core/view")), a = t(require("../core/brush")), r = t(require("../core/config")), l = function(t) {
    function l(t) {
        e(this, l);
        var i = n(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, t));
        return i.initialize(), i;
    }
    return i(l, s.default), o(l, [ {
        key: "initialize",
        value: function() {
            this.gesture = {
                tasks: [],
                interval: -1 != (this.options.system.system || "").toUpperCase().indexOf("IOS") ? 1e3 / 60 : 1e3 / 15
            };
        }
    }, {
        key: "setTimer",
        value: function() {
            var t = this, e = this.gesture;
            e.timer = setTimeout(function() {
                if (e.start && !e.zoomtouches && !e.dragging) {
                    var n = t.drawVLine(e.start.x);
                    n && (e.lining = !0, e.showLine = !0, t.options.onlinestart(), t.options.onlinefocus(n.index, n.cx), 
                    t.clearTimer("executed"));
                }
            }, 350);
        }
    }, {
        key: "clearTimer",
        value: function(t) {
            var e = this.gesture;
            clearTimeout(e.timer), e.timer = null, "executed" !== t && this.options.onlineend({
                show: !1
            });
        }
    }, {
        key: "ontouchstart",
        value: function(t) {
            var e = t.touches, n = this.gesture;
            if (1 === e.length) this.setTimer(), n.start = {
                x: e[0].x || e[0].clientX,
                y: e[0].y || e[0].clientY,
                timestamp: +new Date()
            }, n.last = null, n.thickness = Math.abs(this.cx(1) - this.cx(0)); else if (2 === e.length) {
                if (n.lining) return;
                n.zoomtouches = [ {
                    x: e[0].x || e[0].clientX,
                    y: e[0].y || e[0].clientY
                }, {
                    x: e[1].x || e[1].clientX,
                    y: e[1].y || e[1].clientY
                } ];
            }
        }
    }, {
        key: "ontouchmove",
        value: function(t) {
            var e = this, n = t.touches, i = this.gesture, o = null, s = n[0].x || n[0].clientX, a = n[0].y || n[0].clientY;
            if (1 === n.length) {
                if (i.last = {
                    x: s,
                    y: a,
                    timestamp: +new Date()
                }, i.lining) o = function() {
                    var t = e.drawVLine(s);
                    t && e.options.onlinefocus(t.index, t.cx);
                }; else if (i.start) {
                    var r = i.last.x, l = i.last.y, u = i.start.x, c = i.start.y, h = Math.abs(r - u), f = Math.abs(l - c);
                    if (f > h && this.clearTimer(), this.options.ondragstart && !i.isPreviousLining && !i.dragging && !i.dragcancel && (Math.abs(h) > 10 || Math.abs(f) > 10)) {
                        var g = Math.atan((l - c) / (r - u)) / Math.PI * 180;
                        (Math.abs(f) < 1e-4 || 30 > Math.abs(g)) && (i.dragging = !0, this.options.ondragstart()), 
                        i.dragcancel = !0;
                    }
                    if (this.options.ondragging && i.dragging && !i.disabled) {
                        var y = Math.ceil((r - u) / i.thickness);
                        y !== i.offset && this.options.ondragging(i.offset = y);
                    }
                }
            } else if (2 === n.length) {
                if (i.lining) return;
                var d = n[1].x || n[1].clientX, p = n[1].y || n[1].clientY, x = i.zoomtouches;
                if (x && this.options.onzoomstart) {
                    var v = Math.sqrt(Math.pow(x[0].x - x[1].x, 2) + Math.pow(x[0].y - x[1].y, 2)), m = Math.sqrt(Math.pow(s - d, 2) + Math.pow(a - p, 2));
                    m > 1 && (i.zooming || this.options.onzoomstart(), i.zooming = !0, this.options.onzooming(Math.min(Math.max(v / m, .2), 5))), 
                    i.zoomtouches = [ {
                        x: s,
                        y: a
                    }, {
                        x: d,
                        y: p
                    } ];
                }
            }
            o && (i.tasks.unshift(o), setTimeout(function() {
                e.runTask();
            }, this.gesture.interval));
        }
    }, {
        key: "ontouchend",
        value: function() {
            var t = this.gesture;
            t.timer && this.clearTimer(), t.isPreviousLining = t.lining, t.lining && (t.select = -1, 
            t.lining = !1, this.options.onlineend({
                show: !0
            })), t.dragging && (t.dragging = !1, this.options.ondragend && this.options.ondragend()), 
            t.dragcancel = !1, t.zooming && (t.zooming = !1, this.options.onzoomend && this.options.onzoomend()), 
            t.start = null, t.last = null, t.zoomtouches = null;
        }
    }, {
        key: "runTask",
        value: function() {
            var t = (this.gesture.tasks || [])[0];
            t && t(), this.gesture.tasks = [];
        }
    }, {
        key: "drawVLine",
        value: function(t) {
            var e = this.options, n = e.touchCtx, i = e.xaxis, o = e.bbox, s = e.bboxs, l = o.x0, u = (o.y0, 
            o.x1), c = (o.y1, this.gesture), h = this.data;
            if (h && h.length) {
                var f = i[0].value + (((u - t) * (i.max - i.min) / (u - l)).toFixed(0) - 0);
                if ((f = Math.min(Math.max(f, h[0].index), h[h.length - 1].index)) !== c.select) {
                    var g = this.cx(this.gesture.select = f);
                    return n.scale(1 / r.default.PIXEL, 1 / r.default.PIXEL), a.default.line({
                        ctx: n,
                        lines: [ [ {
                            x: g,
                            y: s[0].y0
                        }, {
                            x: g,
                            y: s[0].y1
                        } ], [ {
                            x: g,
                            y: s[1].y0
                        }, {
                            x: g,
                            y: s[1].y1
                        } ] ],
                        options: {
                            color: "#666666"
                        }
                    }), {
                        index: f,
                        cx: g
                    };
                }
            }
        }
    }, {
        key: "clearVLine",
        value: function(t) {
            var e = this.gesture;
            e.showLine && (e.showLine = !1, e.isPreviousLining = !1, e.select = -1, this.options.onlineend({
                show: !1,
                type: t
            }), e.start = null, e.last = null, e.zoomtouches = null);
        }
    }, {
        key: "setData",
        value: function(t) {
            this.data = this.calcData(t);
        }
    }, {
        key: "calcData",
        value: function(t) {
            var e = [], n = !0, i = !1, o = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(n = (s = a.next()).done); n = !0) {
                    var r = s.value;
                    r && r.visible && e.push({
                        index: r.index
                    });
                }
            } catch (t) {
                i = !0, o = t;
            } finally {
                try {
                    !n && a.return && a.return();
                } finally {
                    if (i) throw o;
                }
            }
            return e;
        }
    }, {
        key: "disable",
        value: function() {
            this.gesture.disabled = !0;
        }
    }, {
        key: "enable",
        value: function() {
            this.gesture.disabled = !1;
        }
    } ]), l;
}();

exports.default = l;