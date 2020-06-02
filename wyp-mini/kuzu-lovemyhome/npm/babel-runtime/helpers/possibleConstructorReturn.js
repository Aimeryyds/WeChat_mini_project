var e = module.exports = {};

e.__esModule = !0;

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("./typeof.js"));

e.default = function(e, n) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !n || "object" !== (void 0 === n ? "undefined" : (0, t.default)(n)) && "function" != typeof n ? e : n;
};