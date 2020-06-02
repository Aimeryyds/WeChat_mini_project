var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, t = (module.exports = {}, window = require("../../../labrador/global.js"), require("./_to-iobject.js")), e = require("./_object-gopn.js").f, r = {}.toString, n = "object" == ("undefined" == typeof window ? "undefined" : o(window)) && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], i = function(o) {
    try {
        return e(o);
    } catch (o) {
        return n.slice();
    }
};

module.exports.f = function(o) {
    return n && "[object Window]" == r.call(o) ? i(o) : e(t(o));
};