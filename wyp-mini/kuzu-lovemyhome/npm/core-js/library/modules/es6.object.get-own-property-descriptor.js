module.exports = {};

var e = require("./_to-iobject.js"), r = require("./_object-gopd.js").f;

require("./_object-sap.js")("getOwnPropertyDescriptor", function() {
    return function(t, o) {
        return r(e(t), o);
    };
});