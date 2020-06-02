module.exports = {};

var e = require("./_cof.js"), t = require("./_wks.js")("toStringTag"), r = "Arguments" == e(function() {
    return arguments;
}()), n = function(e, t) {
    try {
        return e[t];
    } catch (e) {}
};

module.exports = function(u) {
    var o, c, i;
    return void 0 === u ? "Undefined" : null === u ? "Null" : "string" == typeof (c = n(o = Object(u), t)) ? c : r ? e(o) : "Object" == (i = e(o)) && "function" == typeof o.callee ? "Arguments" : i;
};