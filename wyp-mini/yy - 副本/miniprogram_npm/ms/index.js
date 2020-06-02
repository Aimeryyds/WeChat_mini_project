var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

module.exports = function() {
    var r = {}, s = function(s, t) {
        if (!r[s]) return require(t);
        if (!r[s].status) {
            var o = {
                exports: {}
            };
            r[s].status = 1, r[s].func(r[s].req, o, o.exports), "object" === e(o.exports) ? (r[s].m.exports.__proto__ = o.exports.__proto__, 
            Object.keys(o.exports).forEach(function(e) {
                r[s].m.exports[e] = o.exports[e];
                var t = Object.getOwnPropertyDescriptor(o.exports, e);
                t && t.configurable && Object.defineProperty(o.exports, e, {
                    set: function(t) {
                        r[s].m.exports[e] = t;
                    },
                    get: function() {
                        return r[s].m.exports[e];
                    }
                });
            }), o.exports.__esModule && Object.defineProperty(r[s].m.exports, "__esModule", {
                value: !0
            })) : r[s].m.exports = o.exports;
        }
        return r[s].m.exports;
    };
    return function(e, s, t) {
        var o = {
            exports: {}
        };
        r[e] = {
            status: 0,
            func: s,
            req: t,
            m: o
        };
    }(1583216923129, function(r, s, t) {
        function o(e) {
            if (!((e = String(e)).length > 100)) {
                var r = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
                if (r) {
                    var s = parseFloat(r[1]);
                    switch ((r[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return s * p;

                      case "days":
                      case "day":
                      case "d":
                        return s * f;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return s * m;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return s * i;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return s * u;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return s;

                      default:
                        return;
                    }
                }
            }
        }
        function n(e) {
            return e >= f ? Math.round(e / f) + "d" : e >= m ? Math.round(e / m) + "h" : e >= i ? Math.round(e / i) + "m" : e >= u ? Math.round(e / u) + "s" : e + "ms";
        }
        function c(e) {
            return a(e, f, "day") || a(e, m, "hour") || a(e, i, "minute") || a(e, u, "second") || e + " ms";
        }
        function a(e, r, s) {
            if (!(e < r)) return e < 1.5 * r ? Math.floor(e / r) + " " + s : Math.ceil(e / r) + " " + s + "s";
        }
        var u = 1e3, i = 60 * u, m = 60 * i, f = 24 * m, p = 365.25 * f;
        s.exports = function(r, s) {
            s = s || {};
            var t = void 0 === r ? "undefined" : e(r);
            if ("string" === t && r.length > 0) return o(r);
            if ("number" === t && !1 === isNaN(r)) return s.long ? c(r) : n(r);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(r));
        };
    }, function(e) {
        return s({}[e], e);
    }), s(1583216923129);
}();