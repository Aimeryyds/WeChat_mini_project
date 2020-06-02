module.exports = {};

var e = require("./_object-keys.js"), r = require("./_object-gops.js"), t = require("./_object-pie.js"), o = require("./_to-object.js"), s = require("./_iobject.js"), i = Object.assign;

module.exports = !i || require("./_fails.js")(function() {
    var e = {}, r = {}, t = Symbol(), o = "abcdefghijklmnopqrst";
    return e[t] = 7, o.split("").forEach(function(e) {
        r[e] = e;
    }), 7 != i({}, e)[t] || Object.keys(i({}, r)).join("") != o;
}) ? function(i, c) {
    for (var j = o(i), n = arguments.length, u = 1, a = r.f, f = t.f; n > u; ) for (var l, b = s(arguments[u++]), q = a ? e(b).concat(a(b)) : e(b), p = q.length, _ = 0; p > _; ) f.call(b, l = q[_++]) && (j[l] = b[l]);
    return j;
} : i;