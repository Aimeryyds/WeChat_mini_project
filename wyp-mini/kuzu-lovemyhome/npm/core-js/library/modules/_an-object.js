module.exports = {};

var r = require("./_is-object.js");

module.exports = function(e) {
    if (!r(e)) throw TypeError(e + " is not an object!");
    return e;
};