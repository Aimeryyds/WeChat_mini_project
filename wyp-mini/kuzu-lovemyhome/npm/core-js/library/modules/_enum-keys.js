module.exports = {};

var e = require("./_object-keys.js"), r = require("./_object-gops.js"), o = require("./_object-pie.js");

module.exports = function(s) {
    var t = e(s), u = r.f;
    if (u) for (var i, c = u(s), j = o.f, f = 0; c.length > f; ) j.call(s, i = c[f++]) && t.push(i);
    return t;
};