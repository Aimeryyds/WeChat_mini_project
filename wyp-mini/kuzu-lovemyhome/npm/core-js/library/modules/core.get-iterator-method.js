module.exports = {};

var r = require("./_classof.js"), e = require("./_wks.js")("iterator"), t = require("./_iterators.js");

module.exports = require("./_core.js").getIteratorMethod = function(o) {
    if (void 0 != o) return o[e] || o["@@iterator"] || t[r(o)];
};