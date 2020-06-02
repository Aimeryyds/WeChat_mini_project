module.exports = {};

var e = require("./_object-dp.js").f, r = require("./_has.js"), o = require("./_wks.js")("toStringTag");

module.exports = function(t, s, u) {
    t && !r(t = u ? t : t.prototype, o) && e(t, o, {
        configurable: !0,
        value: s
    });
};