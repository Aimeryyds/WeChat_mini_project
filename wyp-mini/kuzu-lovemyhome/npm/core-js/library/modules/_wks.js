module.exports = {}, window = require("../../../labrador/global.js");

var r = require("./_shared.js")("wks"), e = require("./_uid.js"), o = require("./_global.js").Symbol, s = "function" == typeof o;

(module.exports = function(u) {
    return r[u] || (r[u] = s && o[u] || (s ? o : e)("Symbol." + u));
}).store = r;