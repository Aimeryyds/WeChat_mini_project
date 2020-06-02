module.exports = {};

var e = require("./_is-object.js"), r = require("./_meta.js").onFreeze;

require("./_object-sap.js")("freeze", function(t) {
    return function(u) {
        return t && e(u) ? t(r(u)) : u;
    };
});