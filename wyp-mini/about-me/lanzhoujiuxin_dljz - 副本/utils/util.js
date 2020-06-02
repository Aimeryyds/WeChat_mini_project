var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, o = {};

o.formatTime = function(t) {
    var o = t.getFullYear(), e = t.getMonth() + 1, r = t.getDate(), i = t.getHours(), c = t.getMinutes(), u = t.getSeconds();
    return [ o, e, r ].map(n).join("/") + " " + [ i, c, u ].map(n).join(":");
};

var n = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

o.isFun = function(t) {
    if ("undefined" != typeof window && t === window.alert) return !0;
    var o = Object.prototype.toString.call(t);
    return "[object Function]" === o || "[object GeneratorFunction]" === o || "[object AsyncFunction]" === o;
};

var e = function(t) {
    return "[object Object]" === Object.prototype.toString.call(t) && t.constructor === Object && !t.nodeType && !t.setInterval;
}, r = Array.isArray || function(t) {
    return "[object Array]" === Object.prototype.toString.call(t);
};

o.extend = function n() {
    var i, c, u, f, y, l, a = arguments[0] || {}, p = 1, b = arguments.length, s = !1;
    for ("boolean" == typeof a && (s = a, a = arguments[1] || {}, p = 2), "object" === (void 0 === a ? "undefined" : t(a)) || o.isFun(a) || (a = {}); p < b; p++) if (null != (i = arguments[p])) {
        "string" == typeof i && (i = i.split(""));
        for (c in i) u = a[c], a !== (f = i[c]) && (s && f && (e(f) || (y = r(f))) ? (y ? (y = !1, 
        l = u && r(u) ? u : []) : l = u && e(u) ? u : {}, a[c] = n(s, l, f)) : void 0 !== f && (a[c] = f));
    }
    return a;
}, module.exports = o;