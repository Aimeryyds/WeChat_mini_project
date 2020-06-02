module.exports = {};

var e = require("./isFunction.js"), r = require("./isLength.js");

module.exports = function(t) {
    return null != t && r(t.length) && !e(t);
};