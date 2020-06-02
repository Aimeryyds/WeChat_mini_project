module.exports = {};

var e = require("./_to-object.js"), r = require("./_object-keys.js");

require("./_object-sap.js")("keys", function() {
    return function(t) {
        return r(e(t));
    };
});