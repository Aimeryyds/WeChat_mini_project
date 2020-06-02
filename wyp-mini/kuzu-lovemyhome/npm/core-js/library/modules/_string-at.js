module.exports = {};

var e = require("./_to-integer.js"), r = require("./_defined.js");

module.exports = function(t) {
    return function(i, n) {
        var o, u, c = String(r(i)), d = e(n), s = c.length;
        return d < 0 || d >= s ? t ? "" : void 0 : (o = c.charCodeAt(d)) < 55296 || o > 56319 || d + 1 === s || (u = c.charCodeAt(d + 1)) < 56320 || u > 57343 ? t ? c.charAt(d) : o : t ? c.slice(d, d + 2) : u - 56320 + (o - 55296 << 10) + 65536;
    };
};