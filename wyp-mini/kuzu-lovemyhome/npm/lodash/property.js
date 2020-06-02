module.exports = {};

var e = require("./_baseProperty.js"), r = require("./_basePropertyDeep.js"), s = require("./_isKey.js"), t = require("./_toKey.js");

module.exports = function(u) {
    return s(u) ? e(t(u)) : r(u);
};