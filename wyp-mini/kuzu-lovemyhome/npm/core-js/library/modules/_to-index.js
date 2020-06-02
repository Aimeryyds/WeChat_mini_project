module.exports = {};

var e = require("./_to-integer.js"), t = Math.max, r = Math.min;

module.exports = function(o, u) {
    return (o = e(o)) < 0 ? t(o + u, 0) : r(o, u);
};