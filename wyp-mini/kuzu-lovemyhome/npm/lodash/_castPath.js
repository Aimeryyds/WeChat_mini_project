module.exports = {};

var r = require("./isArray.js"), e = require("./_isKey.js"), s = require("./_stringToPath.js"), i = require("./toString.js");

module.exports = function(t, u) {
    return r(t) ? t : e(t, u) ? [ t ] : s(i(t));
};