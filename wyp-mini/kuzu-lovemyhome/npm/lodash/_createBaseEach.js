module.exports = {};

var r = require("./isArrayLike.js");

module.exports = function(e, t) {
    return function(u, n) {
        if (null == u) return u;
        if (!r(u)) return e(u, n);
        for (var i = u.length, o = t ? i : -1, s = Object(u); (t ? o-- : ++o < i) && !1 !== n(s[o], o, s); ) ;
        return u;
    };
};