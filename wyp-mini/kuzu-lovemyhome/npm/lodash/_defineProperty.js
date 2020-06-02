module.exports = {};

var e = require("./_getNative.js"), r = function() {
    try {
        var r = e(Object, "defineProperty");
        return r({}, "", {}), r;
    } catch (e) {}
}();

module.exports = r;