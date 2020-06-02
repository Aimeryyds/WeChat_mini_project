module.exports = {};

var e = require("./_to-integer.js"), r = Math.min;

module.exports = function(t) {
    return t > 0 ? r(e(t), 9007199254740991) : 0;
};