module.exports = {};

var r = require("./_isStrictComparable.js"), e = require("./keys.js");

module.exports = function(t) {
    for (var s = e(t), o = s.length; o--; ) {
        var u = s[o], i = t[u];
        s[o] = [ u, i, r(i) ];
    }
    return s;
};