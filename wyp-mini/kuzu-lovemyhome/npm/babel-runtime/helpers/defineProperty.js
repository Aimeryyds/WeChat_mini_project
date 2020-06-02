var e = module.exports = {};

e.__esModule = !0;

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../core-js/object/define-property.js"));

e.default = function(e, u, t) {
    return u in e ? (0, r.default)(e, u, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[u] = t, e;
};