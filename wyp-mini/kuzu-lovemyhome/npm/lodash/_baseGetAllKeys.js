module.exports = {};

var r = require("./_arrayPush.js"), e = require("./isArray.js");

module.exports = function(s, u, t) {
    var a = u(s);
    return e(s) ? a : r(a, t(s));
};