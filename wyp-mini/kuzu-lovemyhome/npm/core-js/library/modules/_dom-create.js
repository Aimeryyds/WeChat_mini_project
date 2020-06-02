module.exports = {}, window = require("../../../labrador/global.js");

var e = require("./_is-object.js"), r = require("./_global.js").document, t = e(r) && e(r.createElement);

module.exports = function(e) {
    return t ? r.createElement(e) : {};
};