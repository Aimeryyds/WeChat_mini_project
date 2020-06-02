module.exports = {};

var e = require("./_to-object.js"), r = require("./_object-gpo.js");

require("./_object-sap.js")("getPrototypeOf", function() {
    return function(t) {
        return r(e(t));
    };
});