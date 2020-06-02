module.exports = {};

var e = require("./_export.js"), r = require("./_core.js"), t = require("./_fails.js");

module.exports = function(o, s) {
    var u = (r.Object || {})[o] || Object[o], c = {};
    c[o] = s(u), e(e.S + e.F * t(function() {
        u(1);
    }), "Object", c);
};