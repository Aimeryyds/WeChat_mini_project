module.exports = {};

var r = require("./_cof.js");

module.exports = Array.isArray || function(e) {
    return "Array" == r(e);
};