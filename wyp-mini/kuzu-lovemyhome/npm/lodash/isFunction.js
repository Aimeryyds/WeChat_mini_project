module.exports = {};

var e = require("./_baseGetTag.js"), t = require("./isObject.js"), r = "[object AsyncFunction]", o = "[object Function]", n = "[object GeneratorFunction]", c = "[object Proxy]";

module.exports = function(u) {
    if (!t(u)) return !1;
    var i = e(u);
    return i == o || i == n || i == r || i == c;
};