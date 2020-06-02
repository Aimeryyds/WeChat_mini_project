module.exports = {};

var r = require("./_Stack.js"), e = require("./_baseIsEqual.js"), i = 1, t = 2;

module.exports = function(u, n, a, f) {
    var o = a.length, s = o, v = !f;
    if (null == u) return !s;
    for (u = Object(u); o--; ) {
        var l = a[o];
        if (v && l[2] ? l[1] !== u[l[0]] : !(l[0] in u)) return !1;
    }
    for (;++o < s; ) {
        var c = (l = a[o])[0], d = u[c], j = l[1];
        if (v && l[2]) {
            if (void 0 === d && !(c in u)) return !1;
        } else {
            var q = new r();
            if (f) var b = f(d, j, c, u, n, q);
            if (!(void 0 === b ? e(j, d, i | t, f, q) : b)) return !1;
        }
    }
    return !0;
};