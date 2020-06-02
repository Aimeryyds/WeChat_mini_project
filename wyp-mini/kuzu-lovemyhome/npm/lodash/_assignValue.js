module.exports = {};

var e = require("./_baseAssignValue.js"), r = require("./eq.js"), s = Object.prototype.hasOwnProperty;

module.exports = function(o, t, i) {
    var u = o[t];
    s.call(o, t) && r(u, i) && (void 0 !== i || t in o) || e(o, t, i);
};