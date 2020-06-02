function r(r) {
    return null != r && "object" === (void 0 === r ? "undefined" : (0, u.default)(r));
}

function n(r) {
    return Object.prototype.toString.call(r);
}

function e(e) {
    if (Array.isArray(e)) return "array";
    var o = void 0 === e ? "undefined" : (0, u.default)(e);
    return "function" === o ? "func" : "number" === o || r(e) && n(e) === t ? "number" : !0 === e || !1 === e || r(e) && n(e) === i ? "bool" : "string" === o || r(e) && n(e) === l ? "string" : "object" === o && null !== e ? "object" : "symbol" === o || r(e) && n(e) === b ? "symbol" : "unknown";
}

function o(r, n) {
    var o = function(o, u, t) {
        var i = o[u];
        if (void 0 === i || n && null === i) return null;
        var l = e(i);
        return l === r ? null : new Error('组件"' + t + '"的属性"' + u + '"类型声明为"' + r + '"，却得到"' + l + '"');
    };
    return o.isRequired = function(r, n, e) {
        var u = r[n];
        return void 0 === u || null === u ? new Error('组件"' + e + '"的必要属性"' + n + '"缺失，得到"' + u + '"') : o(r, n, e);
    }, o;
}

module.exports = {};

var u = function(r) {
    return r && r.__esModule ? r : {
        default: r
    };
}(require("../babel-runtime/helpers/typeof.js")), t = "[object Number]", i = "[object Boolean]", l = "[object String]", b = "[object Symbol]", c = function() {};

c.isRequired = function(r, n, e) {
    var o = r[n];
    return void 0 === o ? new Error('组件"' + e + '"的必要属性"' + n + '"缺失，得到"' + o + '"') : null;
}, module.exports = {
    number: o("number"),
    string: o("string"),
    func: o("func", !0),
    array: o("array"),
    bool: o("bool"),
    object: o("object", !0),
    symbol: o("symbol"),
    any: c
};