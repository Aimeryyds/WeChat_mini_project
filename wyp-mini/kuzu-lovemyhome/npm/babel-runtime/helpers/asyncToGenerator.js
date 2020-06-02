var e = module.exports = {};

e.__esModule = !0;

var t = function(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}(require("../core-js/promise.js"));

e.default = function(e) {
    return function() {
        var n = e.apply(this, arguments);
        return new t.default(function(e, r) {
            function u(o, i) {
                try {
                    var f = n[o](i), a = f.value;
                } catch (e) {
                    return void r(e);
                }
                if (!f.done) return t.default.resolve(a).then(function(e) {
                    u("next", e);
                }, function(e) {
                    u("throw", e);
                });
                e(a);
            }
            return u("next");
        });
    };
};