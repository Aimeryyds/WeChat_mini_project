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

var r = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var a = e[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, n, a) {
        return n && t(e.prototype, n), a && t(e, a), e;
    };
}(), i = t(require("./core/view")), o = t(require("./components/column")), s = t(require("./components/xlabel")), l = (require("../utils"), 
function(t) {
    function l(t) {
        e(this, l);
        var a = n(this, (l.__proto__ || Object.getPrototypeOf(l)).call(this, t));
        return a.initialize(), a.exportCanvas(), a;
    }
    return a(l, i.default), r(l, [ {
        key: "initialize",
        value: function() {
            var t = this.options.labels = {
                statics: [],
                dynamics: []
            }, e = this.options.shapes = [], n = this.options.dataCtx;
            this.clearContext();
            var a = this.options.bbox, r = a.x0, i = a.y0, l = a.x1, u = a.y1;
            this.column = new o.default({
                dataCtx: n,
                labels: t,
                shapes: e,
                bbox: {
                    x0: r,
                    y0: i + 15,
                    x1: l,
                    y1: u - 12 - 15
                }
            }), this.xlabel = new s.default({
                dataCtx: n,
                labels: t,
                shapes: e,
                bbox: {
                    x0: r,
                    y0: u - 12 + 8,
                    x1: l,
                    y1: u + 3
                }
            });
        }
    }, {
        key: "setData",
        value: function(t) {
            if (this.clearContext(), !t.data || !t.data.length) return this.drawNoRecord(), 
            void this.exportCanvas();
            this.data = this.formatData(t);
            var e = this.options.xaxis = this.calcXAxis();
            this.column.setXAxis(e).setData(this.data), this.xlabel.setXAxis(e).drawXAxis({
                autoFit: !1
            }), this.exportCanvas();
        }
    }, {
        key: "formatData",
        value: function(t) {
            var e = t, n = e.price_base, a = e.type;
            t = t.data;
            var r = Math.pow(10, n), i = t.length;
            if ("five" === a) for (var o = 0; o < i; o++) {
                var s = t[o], l = s.time + "", u = l.substring(4, 6), c = l.substring(6, 8);
                s.index = o, s.brunt_net_in = s.netmainforce / r, s.label = u + "-" + c;
            } else for (var f = i - 1; f >= 0; f--) {
                var h = t[f];
                h.index = i - f - 1, h.brunt_net_in = h.netmainforce / r, h.label = "近" + h.daylength + "天";
            }
            return t;
        }
    }, {
        key: "calcXAxis",
        value: function() {
            var t = this.data, e = [], n = !0, a = !1, r = void 0;
            try {
                for (var i, o = t[Symbol.iterator](); !(n = (i = o.next()).done); n = !0) {
                    var s = i.value;
                    e.push({
                        value: s.index,
                        align: "center",
                        line: !1
                    });
                }
            } catch (t) {
                a = !0, r = t;
            } finally {
                try {
                    !n && o.return && o.return();
                } finally {
                    if (a) throw r;
                }
            }
            return e.min = -.5, e.max = t.length - 1 + .5, e;
        }
    } ]), l;
}());

exports.default = l;