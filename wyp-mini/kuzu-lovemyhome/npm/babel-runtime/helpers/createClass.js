var e = module.exports = {};

e.__esModule = !0;

var r = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../core-js/object/define-property.js"));

e.default = function() {
    function e(e, t) {
        for (var u = 0; u < t.length; u++) {
            var n = t[u];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            (0, r.default)(e, n.key, n);
        }
    }
    return function(r, t, u) {
        return t && e(r.prototype, t), u && e(r, u), r;
    };
}();