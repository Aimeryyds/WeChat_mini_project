module.exports = {};

var e = require("./_baseIsEqual.js"), r = require("./get.js"), s = require("./hasIn.js"), i = require("./_isKey.js"), t = require("./_isStrictComparable.js"), u = require("./_matchesStrictComparable.js"), a = require("./_toKey.js"), o = 1, q = 2;

module.exports = function(j, n) {
    return i(j) && t(n) ? u(a(j), n) : function(i) {
        var t = r(i, j);
        return void 0 === t && t === n ? s(i, j) : e(n, t, o | q);
    };
};