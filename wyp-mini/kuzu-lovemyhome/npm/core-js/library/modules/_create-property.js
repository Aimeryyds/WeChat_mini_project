module.exports = {};

var e = require("./_object-dp.js"), r = require("./_property-desc.js");

module.exports = function(o, s, t) {
    s in o ? e.f(o, s, r(0, t)) : o[s] = t;
};