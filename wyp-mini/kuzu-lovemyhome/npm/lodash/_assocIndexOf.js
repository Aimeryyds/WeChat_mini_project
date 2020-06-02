module.exports = {};

var r = require("./eq.js");

module.exports = function(e, t) {
    for (var u = e.length; u--; ) if (r(e[u][0], t)) return u;
    return -1;
};