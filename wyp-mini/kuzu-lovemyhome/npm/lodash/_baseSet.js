module.exports = {};

var e = require("./_assignValue.js"), r = require("./_castPath.js"), i = require("./_isIndex.js"), s = require("./isObject.js"), u = require("./_toKey.js");

module.exports = function(t, o, a, n) {
    if (!s(t)) return t;
    for (var j = -1, l = (o = r(o, t)).length, v = l - 1, d = t; null != d && ++j < l; ) {
        var q = u(o[j]), c = a;
        if (j != v) {
            var f = d[q];
            void 0 === (c = n ? n(f, q, d) : void 0) && (c = s(f) ? f : i(o[j + 1]) ? [] : {});
        }
        e(d, q, c), d = d[q];
    }
    return t;
};