var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = "function" == typeof Symbol && "symbol" === e(Symbol.iterator) ? function(o) {
    return void 0 === o ? "undefined" : e(o);
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : void 0 === o ? "undefined" : e(o);
}, t = "object" === ("undefined" == typeof global ? "undefined" : o(global)) ? global : "object" === ("undefined" == typeof window ? "undefined" : o(window)) ? window : "object" === ("undefined" == typeof self ? "undefined" : o(self)) ? self : void 0, n = t.regeneratorRuntime && Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime") >= 0, r = n && t.regeneratorRuntime;

if (t.regeneratorRuntime = void 0, module.exports = require("./runtime"), n) t.regeneratorRuntime = r; else try {
    delete t.regeneratorRuntime;
} catch (e) {
    t.regeneratorRuntime = void 0;
}