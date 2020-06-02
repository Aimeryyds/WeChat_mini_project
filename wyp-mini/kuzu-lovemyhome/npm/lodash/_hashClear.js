module.exports = {};

var e = require("./_nativeCreate.js");

module.exports = function() {
    this.__data__ = e ? e(null) : {}, this.size = 0;
};