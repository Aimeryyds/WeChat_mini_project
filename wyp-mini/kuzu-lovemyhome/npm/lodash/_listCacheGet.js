module.exports = {};

var e = require("./_assocIndexOf.js");

module.exports = function(r) {
    var s = this.__data__, t = e(s, r);
    return t < 0 ? void 0 : s[t][1];
};