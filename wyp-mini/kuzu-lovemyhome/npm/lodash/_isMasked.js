module.exports = {};

var e = require("./_coreJsData.js"), r = function() {
    var r = /[^.]+$/.exec(e && e.keys && e.keys.IE_PROTO || "");
    return r ? "Symbol(src)_1." + r : "";
}();

module.exports = function(e) {
    return !!r && r in e;
};