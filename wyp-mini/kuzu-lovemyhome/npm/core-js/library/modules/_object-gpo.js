module.exports = {};

var t = require("./_has.js"), e = require("./_to-object.js"), o = require("./_shared-key.js")("IE_PROTO"), r = Object.prototype;

module.exports = Object.getPrototypeOf || function(c) {
    return c = e(c), t(c, o) ? c[o] : "function" == typeof c.constructor && c instanceof c.constructor ? c.constructor.prototype : c instanceof Object ? r : null;
};