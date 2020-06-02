module.exports = {};

var e = require("./_Stack.js"), r = require("./_equalArrays.js"), u = require("./_equalByTag.js"), a = require("./_equalObjects.js"), t = require("./_getTag.js"), s = require("./isArray.js"), i = require("./isBuffer.js"), j = require("./isTypedArray.js"), _ = 1, c = "[object Arguments]", l = "[object Array]", n = "[object Object]", o = Object.prototype.hasOwnProperty;

module.exports = function(q, p, f, y, b, v) {
    var w = s(q), d = s(p), A = w ? l : t(q), g = d ? l : t(p), O = (A = A == c ? n : A) == n, m = (g = g == c ? n : g) == n, T = A == g;
    if (T && i(q)) {
        if (!i(p)) return !1;
        w = !0, O = !1;
    }
    if (T && !O) return v || (v = new e()), w || j(q) ? r(q, p, f, y, b, v) : u(q, p, A, f, y, b, v);
    if (!(f & _)) {
        var x = O && o.call(q, "__wrapped__"), B = m && o.call(p, "__wrapped__");
        if (x || B) {
            var h = x ? q.value() : q, k = B ? p.value() : p;
            return v || (v = new e()), b(h, k, f, y, v);
        }
    }
    return !!T && (v || (v = new e()), a(q, p, f, y, b, v));
};