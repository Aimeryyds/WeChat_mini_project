var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, t = (module.exports = {}, require("./isArray.js")), e = require("./isSymbol.js"), r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, n = /^\w*$/;

module.exports = function(u, l) {
    if (t(u)) return !1;
    var y = void 0 === u ? "undefined" : o(u);
    return !("number" != y && "symbol" != y && "boolean" != y && null != u && !e(u)) || n.test(u) || !r.test(u) || null != l && u in Object(l);
};