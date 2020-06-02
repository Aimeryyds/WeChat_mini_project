module.exports = {};

var r = require("./_getAllKeys.js"), t = 1, e = Object.prototype.hasOwnProperty;

module.exports = function(o, n, c, i, s, u) {
    var a = c & t, f = r(o), v = f.length;
    if (v != r(n).length && !a) return !1;
    for (var l = v; l--; ) {
        var p = f[l];
        if (!(a ? p in n : e.call(n, p))) return !1;
    }
    var d = u.get(o);
    if (d && u.get(n)) return d == n;
    var g = !0;
    u.set(o, n), u.set(n, o);
    for (var y = a; ++l < v; ) {
        var h = o[p = f[l]], b = n[p];
        if (i) var j = a ? i(b, h, p, n, o, u) : i(h, b, p, o, n, u);
        if (!(void 0 === j ? h === b || s(h, b, c, i, u) : j)) {
            g = !1;
            break;
        }
        y || (y = "constructor" == p);
    }
    if (g && !y) {
        var m = o.constructor, x = n.constructor;
        m != x && "constructor" in o && "constructor" in n && !("function" == typeof m && m instanceof m && "function" == typeof x && x instanceof x) && (g = !1);
    }
    return u.delete(o), u.delete(n), g;
};