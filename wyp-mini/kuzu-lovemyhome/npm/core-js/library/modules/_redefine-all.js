module.exports = {};

var r = require("./_hide.js");

module.exports = function(e, o, t) {
    for (var u in o) t && e[u] ? e[u] = o[u] : r(e, u, o[u]);
    return e;
};