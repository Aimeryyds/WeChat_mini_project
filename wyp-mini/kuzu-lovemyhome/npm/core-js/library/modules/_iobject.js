module.exports = {};

var e = require("./_cof.js");

module.exports = Object("z").propertyIsEnumerable(0) ? Object : function(r) {
    return "String" == e(r) ? r.split("") : Object(r);
};