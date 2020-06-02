module.exports = {};

var e = require("./_ListCache.js"), s = require("./_Map.js"), t = require("./_MapCache.js"), i = 200;

module.exports = function(r, _) {
    var a = this.__data__;
    if (a instanceof e) {
        var h = a.__data__;
        if (!s || h.length < i - 1) return h.push([ r, _ ]), this.size = ++a.size, this;
        a = this.__data__ = new t(h);
    }
    return a.set(r, _), this.size = a.size, this;
};