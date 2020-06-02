module.exports = {};

var e = require("./_castPath.js"), r = require("./isArguments.js"), s = require("./isArray.js"), u = require("./_isIndex.js"), i = require("./isLength.js"), t = require("./_toKey.js");

module.exports = function(n, l, a) {
    for (var o = -1, j = (l = e(l, n)).length, q = !1; ++o < j; ) {
        var g = t(l[o]);
        if (!(q = null != n && a(n, g))) break;
        n = n[g];
    }
    return q || ++o != j ? q : !!(j = null == n ? 0 : n.length) && i(j) && u(g, j) && (s(n) || r(n));
};