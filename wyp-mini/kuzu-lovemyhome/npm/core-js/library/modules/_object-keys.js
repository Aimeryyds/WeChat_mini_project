module.exports = {};

var e = require("./_object-keys-internal.js"), r = require("./_enum-bug-keys.js");

module.exports = Object.keys || function(s) {
    return e(s, r);
};