module.exports = {};

var e = require("./_Symbol.js"), r = require("./_getRawTag.js"), t = require("./_objectToString.js"), o = "[object Null]", i = "[object Undefined]", u = e ? e.toStringTag : void 0;

module.exports = function(e) {
    return null == e ? void 0 === e ? i : o : u && u in Object(e) ? r(e) : t(e);
};