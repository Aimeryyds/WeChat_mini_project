module.exports = {};

var e = require("./_nativeCreate.js"), r = "__lodash_hash_undefined__", t = Object.prototype.hasOwnProperty;

module.exports = function(a) {
    var o = this.__data__;
    if (e) {
        var _ = o[a];
        return _ === r ? void 0 : _;
    }
    return t.call(o, a) ? o[a] : void 0;
};