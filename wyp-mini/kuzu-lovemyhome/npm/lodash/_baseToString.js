function r(e) {
    if ("string" == typeof e) return e;
    if (t(e)) return i(e, r) + "";
    if (o(e)) return n ? n.call(e) : "";
    var s = e + "";
    return "0" == s && 1 / e == -u ? "-0" : s;
}

module.exports = {};

var e = require("./_Symbol.js"), i = require("./_arrayMap.js"), t = require("./isArray.js"), o = require("./isSymbol.js"), u = 1 / 0, s = e ? e.prototype : void 0, n = s ? s.toString : void 0;

module.exports = r;