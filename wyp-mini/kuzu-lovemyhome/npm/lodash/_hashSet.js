module.exports = {};

var e = require("./_nativeCreate.js"), s = "__lodash_hash_undefined__";

module.exports = function(t, i) {
    var _ = this.__data__;
    return this.size += this.has(t) ? 0 : 1, _[t] = e && void 0 === i ? s : i, this;
};