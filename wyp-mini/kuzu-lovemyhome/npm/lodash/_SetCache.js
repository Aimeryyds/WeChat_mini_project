function e(e) {
    var r = -1, s = null == e ? 0 : e.length;
    for (this.__data__ = new t(); ++r < s; ) this.add(e[r]);
}

module.exports = {};

var t = require("./_MapCache.js"), r = require("./_setCacheAdd.js"), s = require("./_setCacheHas.js");

e.prototype.add = e.prototype.push = r, e.prototype.has = s, module.exports = e;