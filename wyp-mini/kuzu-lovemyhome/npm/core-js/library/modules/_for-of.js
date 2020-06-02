var e = module.exports = {}, r = require("./_ctx.js"), t = require("./_iter-call.js"), i = require("./_is-array-iter.js"), o = require("./_an-object.js"), u = require("./_to-length.js"), n = require("./core.get-iterator-method.js"), s = {}, l = {};

(e = module.exports = function(e, a, f, c, j) {
    var q, _, d, h, p = j ? function() {
        return e;
    } : n(e), x = r(f, c, a ? 2 : 1), g = 0;
    if ("function" != typeof p) throw TypeError(e + " is not iterable!");
    if (i(p)) {
        for (q = u(e.length); q > g; g++) if ((h = a ? x(o(_ = e[g])[0], _[1]) : x(e[g])) === s || h === l) return h;
    } else for (d = p.call(e); !(_ = d.next()).done; ) if ((h = t(d, x, _.value, a)) === s || h === l) return h;
}).BREAK = s, e.RETURN = l;