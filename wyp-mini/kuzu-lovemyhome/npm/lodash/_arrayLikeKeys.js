module.exports = {};

var e = require("./_baseTimes.js"), r = require("./isArguments.js"), s = require("./isArray.js"), t = require("./isBuffer.js"), i = require("./_isIndex.js"), u = require("./isTypedArray.js"), n = Object.prototype.hasOwnProperty;

module.exports = function(f, o) {
    var a = s(f), p = !a && r(f), j = !a && !p && t(f), l = !a && !p && !j && u(f), y = a || p || j || l, g = y ? e(f.length, String) : [], h = g.length;
    for (var q in f) !o && !n.call(f, q) || y && ("length" == q || j && ("offset" == q || "parent" == q) || l && ("buffer" == q || "byteLength" == q || "byteOffset" == q) || i(q, h)) || g.push(q);
    return g;
};