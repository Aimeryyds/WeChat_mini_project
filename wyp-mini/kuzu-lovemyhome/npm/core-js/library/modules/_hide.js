module.exports = {};

var r = require("./_object-dp.js"), e = require("./_property-desc.js");

module.exports = require("./_descriptors.js") ? function(t, s, u) {
    return r.f(t, s, e(1, u));
} : function(r, e, t) {
    return r[e] = t, r;
};