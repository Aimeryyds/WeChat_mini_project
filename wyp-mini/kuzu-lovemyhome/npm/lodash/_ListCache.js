function e(e) {
    var t = -1, r = null == e ? 0 : e.length;
    for (this.clear(); ++t < r; ) {
        var s = e[t];
        this.set(s[0], s[1]);
    }
}

module.exports = {};

var t = require("./_listCacheClear.js"), r = require("./_listCacheDelete.js"), s = require("./_listCacheGet.js"), o = require("./_listCacheHas.js"), l = require("./_listCacheSet.js");

e.prototype.clear = t, e.prototype.delete = r, e.prototype.get = s, e.prototype.has = o, 
e.prototype.set = l, module.exports = e;