module.exports = {};

var e = window = require("../../../labrador/global.js"), e = require("./_global.js"), r = require("./_core.js"), t = require("./_ctx.js"), n = require("./_hide.js"), o = function o(i, u, s) {
    var a, c, p, l = i & o.F, f = i & o.G, w = i & o.S, y = i & o.P, d = i & o.B, v = i & o.W, h = f ? r : r[u] || (r[u] = {}), j = h.prototype, q = f ? e : w ? e[u] : (e[u] || {}).prototype;
    f && (s = u);
    for (a in s) (c = !l && q && void 0 !== q[a]) && a in h || (p = c ? q[a] : s[a], 
    h[a] = f && "function" != typeof q[a] ? s[a] : d && c ? t(p, e) : v && q[a] == p ? function(e) {
        var r = function(r, t, n) {
            if (this instanceof e) {
                switch (arguments.length) {
                  case 0:
                    return new e();

                  case 1:
                    return new e(r);

                  case 2:
                    return new e(r, t);
                }
                return new e(r, t, n);
            }
            return e.apply(this, arguments);
        };
        return r.prototype = e.prototype, r;
    }(p) : y && "function" == typeof p ? t(Function.call, p) : p, y && ((h.virtual || (h.virtual = {}))[a] = p, 
    i & o.R && j && !j[a] && n(j, a, p)));
};

o.F = 1, o.G = 2, o.S = 4, o.P = 8, o.B = 16, o.W = 32, o.U = 64, o.R = 128, module.exports = o;