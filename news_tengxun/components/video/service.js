var t = require("../../utils/time");

exports = module.exports = {
    secToTimeStr: function(r) {
        var e = "00:00";
        if ((r = Math.round(r)) < 60) e = "00:" + (0, t.addLeftZero)(r); else if (r < 3600) {
            var o = Math.floor(r / 60), a = r - 60 * o;
            e = (0, t.addLeftZero)(o) + ":" + (0, t.addLeftZero)(a);
        } else {
            var n = Math.floor(r / 60 / 60), f = Math.floor((r - 60 * n * 60) / 60), d = r - 60 * n * 60 - 60 * f;
            e = (0, t.addLeftZero)(n) + ":" + (0, t.addLeftZero)(f) + ":" + (0, t.addLeftZero)(d);
        }
        return e;
    },
    timeStrToSec: function(t) {
        var r = t.split(":"), e = 0, o = 0, a = 0;
        return r.length >= 3 ? (e = parseInt(r[0]), o = parseInt([ r[1] ]), a = parseInt([ r[2] ])) : 2 === r.length ? (o = parseInt(r[0]), 
        a = parseInt(r[1])) : 1 == r.length && (a = parseInt[0]), a + 60 * o + 60 * e * 60;
    },
    formatDuration: function(r) {
        var e = "00:00";
        if ("string" == typeof r) if (-1 === r.indexOf(":")) r *= 1; else {
            var o = r.split(":"), a = Number(o.pop()) || 0, n = Number(o.pop()) || 0;
            r = 60 * (Number(o.pop()) || 0) * 60 + 60 * n + a;
        }
        if ("number" != typeof r) return {
            duration: 0,
            durationStr: e
        };
        var f = Math.floor(r / 60 / 60), d = r - 60 * f * 60, i = Math.floor(d / 60), u = (0, 
        t.addLeftZero)(d - 60 * i);
        return i = (0, t.addLeftZero)(i), {
            duration: r,
            durationStr: e = f ? "".concat(f, ":").concat(i, ":").concat(u) : "".concat(i, ":").concat(u)
        };
    }
};