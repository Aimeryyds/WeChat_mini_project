module.exports = {};

var e = require("./_baseGetTag.js"), r = require("./isObjectLike.js"), t = "[object Arguments]";

module.exports = function(s) {
    return r(s) && e(s) == t;
};