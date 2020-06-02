module.exports = {};

var e = require("./_baseIsNative.js"), r = require("./_getValue.js");

module.exports = function(s, t) {
    var u = r(s, t);
    return e(u) ? u : void 0;
};