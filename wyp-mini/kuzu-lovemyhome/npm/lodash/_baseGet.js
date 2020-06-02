module.exports = {};

var e = require("./_castPath.js"), r = require("./_toKey.js");

module.exports = function(t, o) {
    for (var u = 0, s = (o = e(o, t)).length; null != t && u < s; ) t = t[r(o[u++])];
    return u && u == s ? t : void 0;
};