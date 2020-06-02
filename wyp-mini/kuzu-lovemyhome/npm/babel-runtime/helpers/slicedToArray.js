function r(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}

var e = module.exports = {};

e.__esModule = !0;

var t = r(require("../core-js/is-iterable.js")), n = r(require("../core-js/get-iterator.js"));

e.default = function() {
    function r(r, e) {
        var t = [], u = !0, a = !1, i = void 0;
        try {
            for (var o, l = (0, n.default)(r); !(u = (o = l.next()).done) && (t.push(o.value), 
            !e || t.length !== e); u = !0) ;
        } catch (r) {
            a = !0, i = r;
        } finally {
            try {
                !u && l.return && l.return();
            } finally {
                if (a) throw i;
            }
        }
        return t;
    }
    return function(e, n) {
        if (Array.isArray(e)) return e;
        if ((0, t.default)(Object(e))) return r(e, n);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    };
}();