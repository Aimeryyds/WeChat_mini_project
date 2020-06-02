function e(e) {
    var r = this.__data__ = new t(e);
    this.size = r.size;
}

module.exports = {};

var t = require("./_ListCache.js"), r = require("./_stackClear.js"), s = require("./_stackDelete.js"), o = require("./_stackGet.js"), a = require("./_stackHas.js"), i = require("./_stackSet.js");

e.prototype.clear = r, e.prototype.delete = s, e.prototype.get = o, e.prototype.has = a, 
e.prototype.set = i, module.exports = e;