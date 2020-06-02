module.exports = {};

var e = require("./_shared.js")("keys"), r = require("./_uid.js");

module.exports = function(s) {
    return e[s] || (e[s] = r(s));
};