module.exports = {};

var e = require("./_Hash.js"), s = require("./_ListCache.js"), r = require("./_Map.js");

module.exports = function() {
    this.size = 0, this.__data__ = {
        hash: new e(),
        map: new (r || s)(),
        string: new e()
    };
};