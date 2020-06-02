module.exports = {};

var e = require("./_baseIsMatch.js"), r = require("./_getMatchData.js"), t = require("./_matchesStrictComparable.js");

module.exports = function(a) {
    var s = r(a);
    return 1 == s.length && s[0][2] ? t(s[0][0], s[0][1]) : function(r) {
        return r === a || e(r, a, s);
    };
};