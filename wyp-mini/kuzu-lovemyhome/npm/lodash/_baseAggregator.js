module.exports = {};

var e = require("./_baseEach.js");

module.exports = function(r, t, u, o) {
    return e(r, function(e, r, s) {
        t(o, e, u(e), s);
    }), o;
};