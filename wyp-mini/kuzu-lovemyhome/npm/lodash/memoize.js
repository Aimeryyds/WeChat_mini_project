function e(c, n) {
    if ("function" != typeof c || null != n && "function" != typeof n) throw new TypeError(r);
    var a = function e() {
        var t = arguments, r = n ? n.apply(this, t) : t[0], a = e.cache;
        if (a.has(r)) return a.get(r);
        var o = c.apply(this, t);
        return e.cache = a.set(r, o) || a, o;
    };
    return a.cache = new (e.Cache || t)(), a;
}

module.exports = {};

var t = require("./_MapCache.js"), r = "Expected a function";

e.Cache = t, module.exports = e;