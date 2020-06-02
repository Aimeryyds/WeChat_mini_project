var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
};

module.exports = {};

module.exports = function(t) {
    var n = void 0 === t ? "undefined" : o(t);
    return null != t && ("object" == n || "function" == n);
};