module.exports = {};

var r = require("./_arrayAggregator.js"), e = require("./_baseAggregator.js"), t = require("./_baseIteratee.js"), s = require("./isArray.js");

module.exports = function(u, a) {
    return function(i, o) {
        var g = s(i) ? r : e, n = a ? a() : {};
        return g(i, u, t(o, 2), n);
    };
};