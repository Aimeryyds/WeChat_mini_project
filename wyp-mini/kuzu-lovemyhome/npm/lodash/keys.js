module.exports = {};

var e = require("./_arrayLikeKeys.js"), r = require("./_baseKeys.js"), s = require("./isArrayLike.js");

module.exports = function(i) {
    return s(i) ? e(i) : r(i);
};