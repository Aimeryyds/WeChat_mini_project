module.exports = {};

var e = require("./_object-create.js"), r = require("./_property-desc.js"), t = require("./_set-to-string-tag.js"), s = {};

require("./_hide.js")(s, require("./_wks.js")("iterator"), function() {
    return this;
}), module.exports = function(o, i, u) {
    o.prototype = e(s, {
        next: r(1, u)
    }), t(o, i + " Iterator");
};