function e(e) {
    return null === e || void 0 === e;
}

function t(e) {
    return !(!e || "object" !== (void 0 === e ? "undefined" : (0, n.default)(e)) || "number" != typeof e.length) && ("function" == typeof e.copy && "function" == typeof e.slice && !(e.length > 0 && "number" != typeof e[0]));
}

function r(r, l, d) {
    var c, a;
    if (e(r) || e(l)) return !1;
    if (r.prototype !== l.prototype) return !1;
    if (o(r)) return !!o(l) && (r = u.call(r), l = u.call(l), f(r, l, d));
    if (t(r)) {
        if (!t(l)) return !1;
        if (r.length !== l.length) return !1;
        for (c = 0; c < r.length; c++) if (r[c] !== l[c]) return !1;
        return !0;
    }
    try {
        var s = i(r), p = i(l);
    } catch (e) {
        return !1;
    }
    if (s.length != p.length) return !1;
    for (s.sort(), p.sort(), c = s.length - 1; c >= 0; c--) if (s[c] != p[c]) return !1;
    for (c = s.length - 1; c >= 0; c--) if (a = s[c], !f(r[a], l[a], d)) return !1;
    return (void 0 === r ? "undefined" : (0, n.default)(r)) === (void 0 === l ? "undefined" : (0, 
    n.default)(l));
}

module.exports = {};

var n = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../babel-runtime/helpers/typeof.js")), u = Array.prototype.slice, i = require("./lib/keys.js"), o = require("./lib/is_arguments.js"), f = module.exports = function(e, t, u) {
    return u || (u = {}), e === t || (e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || "object" != (void 0 === e ? "undefined" : (0, 
    n.default)(e)) && "object" != (void 0 === t ? "undefined" : (0, n.default)(t)) ? u.strict ? e === t : e == t : r(e, t, u));
};