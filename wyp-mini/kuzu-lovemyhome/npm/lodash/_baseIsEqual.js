function e(s, l, t, i, n) {
    return s === l || (null == s || null == l || !u(s) && !u(l) ? s !== s && l !== l : r(s, l, t, i, e, n));
}

module.exports = {};

var r = require("./_baseIsEqualDeep.js"), u = require("./isObjectLike.js");

module.exports = e;