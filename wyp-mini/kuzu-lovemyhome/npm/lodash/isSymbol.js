var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, e = (module.exports = {}, require("./_baseGetTag.js")), t = require("./isObjectLike.js"), r = "[object Symbol]";

module.exports = function(n) {
    return "symbol" == (void 0 === n ? "undefined" : o(n)) || t(n) && e(n) == r;
};