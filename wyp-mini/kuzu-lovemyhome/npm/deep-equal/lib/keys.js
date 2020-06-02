function e(e) {
    var r = [];
    for (var t in e) r.push(t);
    return r;
}

module.exports = {};

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../../babel-runtime/core-js/object/keys.js"));

(module.exports = "function" == typeof r.default ? r.default : e).shim = e;