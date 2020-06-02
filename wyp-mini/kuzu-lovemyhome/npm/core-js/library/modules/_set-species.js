module.exports = {};

var e = window = require("../../../labrador/global.js"), e = require("./_global.js"), r = require("./_core.js"), o = require("./_object-dp.js"), s = require("./_descriptors.js"), i = require("./_wks.js")("species");

module.exports = function(u) {
    var t = "function" == typeof r[u] ? r[u] : e[u];
    s && t && !t[i] && o.f(t, i, {
        configurable: !0,
        get: function() {
            return this;
        }
    });
};