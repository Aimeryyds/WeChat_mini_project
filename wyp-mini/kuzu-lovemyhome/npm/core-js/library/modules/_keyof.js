module.exports = {};

var e = require("./_object-keys.js"), r = require("./_to-iobject.js");

module.exports = function(t, o) {
    for (var s, u = r(t), i = e(u), c = i.length, j = 0; c > j; ) if (u[s = i[j++]] === o) return s;
};