var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, e = module.exports = {}, t = require("./_root.js"), u = require("./stubFalse.js"), r = "object" == (void 0 === e ? "undefined" : o(e)) && e && !e.nodeType && e, n = r && "object" == ("undefined" == typeof module ? "undefined" : o(module)) && module && !module.nodeType && module, d = n && n.exports === r ? t.Buffer : void 0, f = (d ? d.isBuffer : void 0) || u;

module.exports = f;