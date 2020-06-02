module.exports = {};

var r = require("./isSymbol.js"), e = 1 / 0;

module.exports = function(t) {
    if ("string" == typeof t || r(t)) return t;
    var o = t + "";
    return "0" == o && 1 / t == -e ? "-0" : o;
};