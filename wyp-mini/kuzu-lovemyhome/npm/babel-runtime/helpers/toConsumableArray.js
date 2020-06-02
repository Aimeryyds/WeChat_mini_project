var r = module.exports = {};

r.__esModule = !0;

var e = function(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}(require("../core-js/array/from.js"));

r.default = function(r) {
    if (Array.isArray(r)) {
        for (var t = 0, u = Array(r.length); t < r.length; t++) u[t] = r[t];
        return u;
    }
    return (0, e.default)(r);
};