module.exports = {};

var e = require("./isFunction.js"), r = require("./_isMasked.js"), t = require("./isObject.js"), o = require("./_toSource.js"), s = /[\\^$.*+?()[\]{}|]/g, u = /^\[object .+?Constructor\]$/, c = Function.prototype, i = Object.prototype, n = c.toString, p = i.hasOwnProperty, a = RegExp("^" + n.call(p).replace(s, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

module.exports = function(s) {
    return !(!t(s) || r(s)) && (e(s) ? a : u).test(o(s));
};