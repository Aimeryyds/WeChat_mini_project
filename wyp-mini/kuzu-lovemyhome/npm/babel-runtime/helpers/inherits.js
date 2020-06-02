function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = module.exports = {};

t.__esModule = !0;

var o = e(require("../core-js/object/set-prototype-of.js")), r = e(require("../core-js/object/create.js")), u = e(require("./typeof.js"));

t.default = function(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, 
    u.default)(t)));
    e.prototype = (0, r.default)(t && t.prototype, {
        constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t);
};