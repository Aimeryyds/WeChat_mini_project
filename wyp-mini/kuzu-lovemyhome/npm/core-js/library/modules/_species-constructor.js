module.exports = {};

var e = require("./_an-object.js"), r = require("./_a-function.js"), o = require("./_wks.js")("species");

module.exports = function(s, t) {
    var u, i = e(s).constructor;
    return void 0 === i || void 0 == (u = e(i)[o]) ? t : r(u);
};