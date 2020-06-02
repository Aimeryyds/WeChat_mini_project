function e(e) {
    var r = -1, t = null == e ? 0 : e.length;
    for (this.clear(); ++r < t; ) {
        var a = e[r];
        this.set(a[0], a[1]);
    }
}

module.exports = {};

var r = require("./_mapCacheClear.js"), t = require("./_mapCacheDelete.js"), a = require("./_mapCacheGet.js"), p = require("./_mapCacheHas.js"), o = require("./_mapCacheSet.js");

e.prototype.clear = r, e.prototype.delete = t, e.prototype.get = a, e.prototype.has = p, 
e.prototype.set = o, module.exports = e;