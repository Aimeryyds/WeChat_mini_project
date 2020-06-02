var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = (module.exports = {}, window = require("../labrador/global.js")), t = "object" === (void 0 === o ? "undefined" : e(o)) ? o : "object" === ("undefined" == typeof window ? "undefined" : e(window)) ? window : "object" === ("undefined" == typeof self ? "undefined" : e(self)) ? self : void 0, r = t.regeneratorRuntime && Object.getOwnPropertyNames(t).indexOf("regeneratorRuntime") >= 0, n = r && t.regeneratorRuntime;

if (t.regeneratorRuntime = void 0, module.exports = require("./runtime.js"), r) t.regeneratorRuntime = n; else try {
    delete t.regeneratorRuntime;
} catch (e) {
    t.regeneratorRuntime = void 0;
}