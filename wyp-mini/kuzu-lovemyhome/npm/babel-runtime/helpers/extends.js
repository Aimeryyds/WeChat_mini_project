var e = module.exports = {};

e.__esModule = !0;

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../core-js/object/assign.js"));

e.default = r.default || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
};