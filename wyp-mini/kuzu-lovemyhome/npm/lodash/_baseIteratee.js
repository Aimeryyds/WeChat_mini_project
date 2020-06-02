var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, o = (module.exports = {}, require("./_baseMatches.js")), t = require("./_baseMatchesProperty.js"), r = require("./identity.js"), n = require("./isArray.js"), u = require("./property.js");

module.exports = function(i) {
    return "function" == typeof i ? i : null == i ? r : "object" == (void 0 === i ? "undefined" : e(i)) ? n(i) ? t(i[0], i[1]) : o(i) : u(i);
};