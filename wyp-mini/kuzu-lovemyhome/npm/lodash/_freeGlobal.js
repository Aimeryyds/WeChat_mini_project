var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, t = (module.exports = {}, window = require("../labrador/global.js")), e = "object" == (void 0 === t ? "undefined" : o(t)) && t && t.Object === Object && t;

module.exports = e;