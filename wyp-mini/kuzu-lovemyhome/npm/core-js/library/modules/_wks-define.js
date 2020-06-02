module.exports = {};

var r = window = require("../../../labrador/global.js"), r = require("./_global.js"), e = require("./_core.js"), o = require("./_library.js"), l = require("./_wks-ext.js"), i = require("./_object-dp.js").f;

module.exports = function(s) {
    var u = e.Symbol || (e.Symbol = o ? {} : r.Symbol || {});
    "_" == s.charAt(0) || s in u || i(u, s, {
        value: l.f(s)
    });
};