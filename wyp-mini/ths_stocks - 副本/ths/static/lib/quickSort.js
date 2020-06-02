Object.defineProperty(exports, "__esModule", {
    value: !0
});

exports.default = function e(t, r, n) {
    if (t.length <= 1) return t;
    for (var o = Math.floor(t.length / 2), u = t.splice(o, 1)[0], l = u[r], s = [], c = [], f = 0; f < t.length; f++) t[f][r] > l && !n ? s.push(t[f]) : c.push(t[f]);
    return e(s).concat([ u ], e(c));
};