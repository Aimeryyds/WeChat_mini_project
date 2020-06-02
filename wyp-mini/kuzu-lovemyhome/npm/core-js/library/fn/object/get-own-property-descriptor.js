module.exports = {};

require("../../modules/es6.object.get-own-property-descriptor.js");

var e = require("../../modules/_core.js").Object;

module.exports = function(r, o) {
    return e.getOwnPropertyDescriptor(r, o);
};