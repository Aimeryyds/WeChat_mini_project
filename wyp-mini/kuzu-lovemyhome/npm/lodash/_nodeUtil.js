var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
}, e = module.exports = {}, t = require("./_freeGlobal.js"), n = "object" == (void 0 === e ? "undefined" : o(e)) && e && !e.nodeType && e, u = n && "object" == ("undefined" == typeof module ? "undefined" : o(module)) && module && !module.nodeType && module, r = u && u.exports === n && t.process, d = function() {
    try {
        return r && r.binding && r.binding("util");
    } catch (o) {}
}();

module.exports = d;