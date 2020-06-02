module.exports = {};

var e = require("./_to-iobject.js"), r = require("./_to-length.js"), t = require("./_to-index.js");

module.exports = function(i) {
    return function(n, o, u) {
        var s, f = e(n), l = r(f.length), c = t(u, l);
        if (i && o != o) {
            for (;l > c; ) if ((s = f[c++]) != s) return !0;
        } else for (;l > c; c++) if ((i || c in f) && f[c] === o) return i || c || 0;
        return !i && -1;
    };
};