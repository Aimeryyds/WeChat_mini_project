function e(e) {
    var r = -1, t = null == e ? 0 : e.length;
    for (this.clear(); ++r < t; ) {
        var s = e[r];
        this.set(s[0], s[1]);
    }
}

module.exports = {};

var r = require("./_hashClear.js"), t = require("./_hashDelete.js"), s = require("./_hashGet.js"), o = require("./_hashHas.js"), h = require("./_hashSet.js");

e.prototype.clear = r, e.prototype.delete = t, e.prototype.get = s, e.prototype.has = o, 
e.prototype.set = h, module.exports = e;