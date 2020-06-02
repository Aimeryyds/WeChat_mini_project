module.exports = {};

var e = require("./_baseHasIn.js"), r = require("./_hasPath.js");

module.exports = function(s, u) {
    return null != s && r(s, u, e);
};