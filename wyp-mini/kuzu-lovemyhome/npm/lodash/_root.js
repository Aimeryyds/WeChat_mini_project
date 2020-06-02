var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = (module.exports = {}, window = require("../labrador/global.js"), require("./_freeGlobal.js")), t = "object" == ("undefined" == typeof self ? "undefined" : e(self)) && self && self.Object === Object && self, r = o || t || Function("return this")();

module.exports = r;