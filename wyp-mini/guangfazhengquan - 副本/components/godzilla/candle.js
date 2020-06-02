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

function o(t, e) {
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
            var o = e[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
            Object.defineProperty(t, o.key, o);
        }
    }
    return function(e, n, o) {
        return n && t(e.prototype, n), o && t(e, o), e;
    };
}(), i = t(require("./components/candle")), a = t(require("./components/xlabel")), s = t(require("./kline")), u = function(t) {
    function u(t) {
        return e(this, u), n(this, (u.__proto__ || Object.getPrototypeOf(u)).call(this, t));
    }
    return o(u, s.default), r(u, [ {
        key: "initialize",
        value: function() {
            var t = this.options.bbox, e = t.x0, n = t.y0, o = t.x1, r = t.y1, s = this.options.labels = {
                statics: [],
                dynamics: []
            }, u = this.options.dataCtx, l = this.options.touchCtx, c = this.options.hintCtx;
            this.clearContext(), this.candle = new i.default({
                type: this.options.type,
                dataCtx: u,
                touchCtx: l,
                hintCtx: c,
                labels: s,
                bbox: {
                    x0: e,
                    y0: n,
                    x1: o,
                    y1: r - 20
                }
            }), this.xlabel = new a.default({
                dataCtx: u,
                hintCtx: c,
                labels: s,
                bbox: {
                    x0: e,
                    y0: r - 20,
                    x1: o,
                    y1: r
                },
                dynamics: !0
            });
        }
    } ]), u;
}();

exports.default = u;