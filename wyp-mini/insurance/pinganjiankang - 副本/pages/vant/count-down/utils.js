function e(e) {
    for (var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2, o = e + ""; o.length < r; ) o = "0" + o;
    return o;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.parseTimeData = function(e) {
    var n = Math.floor(e / s), a = Math.floor(e % s / t), l = Math.floor(e % t / o), i = Math.floor(e % o / r), f = Math.floor(e % r);
    return {
        days: n,
        hours: a,
        minutes: l,
        seconds: i,
        milliseconds: f
    };
}, exports.parseFormat = function(r, o) {
    var t = o.days, s = o.hours, n = o.minutes, a = o.seconds, l = o.milliseconds;
    -1 === r.indexOf("DD") ? s += 24 * t : r = r.replace("DD", e(t));
    -1 === r.indexOf("HH") ? n += 60 * s : r = r.replace("HH", e(s));
    -1 === r.indexOf("mm") ? a += 60 * n : r = r.replace("mm", e(n));
    -1 === r.indexOf("ss") ? l += 1e3 * a : r = r.replace("ss", e(a));
    return r.replace("SSS", e(l, 3));
}, exports.isSameSecond = function(e, r) {
    return Math.floor(e / 1e3) === Math.floor(r / 1e3);
};

var r = 1e3, o = 60 * r, t = 60 * o, s = 24 * t;