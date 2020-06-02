module.exports = {};

var e = require("./_nativeCreate.js"), t = Object.prototype.hasOwnProperty;

module.exports = function(r) {
    var o = this.__data__;
    return e ? void 0 !== o[r] : t.call(o, r);
};