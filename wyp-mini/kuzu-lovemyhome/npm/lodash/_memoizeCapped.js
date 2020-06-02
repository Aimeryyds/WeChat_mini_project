module.exports = {};

var e = require("./memoize.js"), r = 500;

module.exports = function(t) {
    var u = e(t, function(e) {
        return o.size === r && o.clear(), e;
    }), o = u.cache;
    return u;
};