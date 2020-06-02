module.exports = {};

var e = require("./isObject.js");

module.exports = function(r) {
    return r === r && !e(r);
};