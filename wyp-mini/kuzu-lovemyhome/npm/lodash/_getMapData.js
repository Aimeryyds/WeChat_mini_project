module.exports = {};

var e = require("./_isKeyable.js");

module.exports = function(r, t) {
    var s = r.__data__;
    return e(t) ? s["string" == typeof t ? "string" : "hash"] : s.map;
};