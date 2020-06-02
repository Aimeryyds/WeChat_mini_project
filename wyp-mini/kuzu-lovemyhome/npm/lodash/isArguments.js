module.exports = {};

var e = require("./_baseIsArguments.js"), r = require("./isObjectLike.js"), t = Object.prototype, s = t.hasOwnProperty, l = t.propertyIsEnumerable, u = e(function() {
    return arguments;
}()) ? e : function(e) {
    return r(e) && s.call(e, "callee") && !l.call(e, "callee");
};

module.exports = u;