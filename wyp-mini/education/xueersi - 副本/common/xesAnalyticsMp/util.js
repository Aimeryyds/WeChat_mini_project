var Md5 = require("./md5.js"), nativeForEach = Array.prototype.forEach, ObjProto = Object.prototype, slice = Array.prototype.slice, toString = ObjProto.toString, hasOwnProperty = ObjProto.hasOwnProperty, breaker = {}, each = function(e, t, n) {
    if (null == e) return !1;
    if (nativeForEach && e.forEach === nativeForEach) e.forEach(t, n); else if (e.length === +e.length) {
        for (var r = 0, o = e.length; r < o; r++) if (r in e && t.call(n, e[r], r, e) === breaker) return !1;
    } else for (var i in e) if (hasOwnProperty.call(e, i) && t.call(n, e[i], i, e) === breaker) return !1;
}, isObject = function(e) {
    return void 0 !== e && null !== e && "[object Object]" == toString.call(e);
}, isFunction = function(e) {
    try {
        return /^\s*\bfunction\b/.test(e);
    } catch (e) {
        return !1;
    }
}, extend = function(e) {
    return each(slice.call(arguments, 1), function(t) {
        for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
    }), e;
}, extend2Lev = function(e) {
    return each(slice.call(arguments, 1), function(t) {
        for (var n in t) void 0 !== t[n] && (isObject(t[n]) && isObject(e[n]) ? extend(e[n], t[n]) : e[n] = t[n]);
    }), e;
}, coverExtend = function(e) {
    return each(slice.call(arguments, 1), function(t) {
        for (var n in t) void 0 !== t[n] && void 0 === e[n] && (e[n] = t[n]);
    }), e;
}, encryption = function(e, t, n) {
    return e && t && n ? Md5.hex_md5("" + e + t + n + "p1@PeFz4ZX") : void console.error("加密参数错误");
}, mp_proxy = function(e, t, n, r) {
    var o = r.autoTrack[n];
    if (e[t]) {
        var i = e[t];
        e[t] = function() {
            "onLaunch" === t && (this.XesAnalyticsMP = r), i.apply(this, arguments), o.apply(this, arguments);
        };
    } else e[t] = function() {
        "onLaunch" === t && (this.XesAnalyticsMP = r), o.apply(this, arguments);
    };
};

module.exports = {
    each: each,
    extend: extend,
    extend2Lev: extend2Lev,
    coverExtend: coverExtend,
    encryption: encryption,
    isObject: isObject,
    isFunction: isFunction,
    mp_proxy: mp_proxy
};