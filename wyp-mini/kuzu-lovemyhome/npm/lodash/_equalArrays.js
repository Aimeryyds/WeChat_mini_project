module.exports = {};

var e = require("./_SetCache.js"), r = require("./_arraySome.js"), t = require("./_cacheHas.js"), i = 1, a = 2;

module.exports = function(u, n, f, s, o, v) {
    var c = f & i, l = u.length, d = n.length;
    if (l != d && !(c && d > l)) return !1;
    var h = v.get(u);
    if (h && v.get(n)) return h == n;
    var g = -1, b = !0, j = f & a ? new e() : void 0;
    for (v.set(u, n), v.set(n, u); ++g < l; ) {
        var k = u[g], m = n[g];
        if (s) var p = c ? s(m, k, g, n, u, v) : s(k, m, g, u, n, v);
        if (void 0 !== p) {
            if (p) continue;
            b = !1;
            break;
        }
        if (j) {
            if (!r(n, function(e, r) {
                if (!t(j, r) && (k === e || o(k, e, f, s, v))) return j.push(r);
            })) {
                b = !1;
                break;
            }
        } else if (k !== m && !o(k, m, f, s, v)) {
            b = !1;
            break;
        }
    }
    return v.delete(u), v.delete(n), b;
};