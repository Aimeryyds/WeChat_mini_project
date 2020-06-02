module.exports = {};

var r = require("./_has.js"), e = require("./_to-iobject.js"), s = require("./_array-includes.js")(!1), u = require("./_shared-key.js")("IE_PROTO");

module.exports = function(i, o) {
    var t, a = e(i), n = 0, h = [];
    for (t in a) t != u && r(a, t) && h.push(t);
    for (;o.length > n; ) r(a, t = o[n++]) && (~s(h, t) || h.push(t));
    return h;
};