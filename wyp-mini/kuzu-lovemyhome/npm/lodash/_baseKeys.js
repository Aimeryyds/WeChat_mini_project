module.exports = {};

var r = require("./_isPrototype.js"), e = require("./_nativeKeys.js"), t = Object.prototype.hasOwnProperty;

module.exports = function(o) {
    if (!r(o)) return e(o);
    var s = [];
    for (var u in Object(o)) t.call(o, u) && "constructor" != u && s.push(u);
    return s;
};