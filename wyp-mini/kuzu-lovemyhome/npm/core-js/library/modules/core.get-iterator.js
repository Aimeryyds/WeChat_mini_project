module.exports = {};

var e = require("./_an-object.js"), r = require("./core.get-iterator-method.js");

module.exports = require("./_core.js").getIterator = function(t) {
    var o = r(t);
    if ("function" != typeof o) throw TypeError(t + " is not iterable!");
    return e(o.call(t));
};