function t(o) {
    return (t = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
        return void 0 === t ? "undefined" : e(t);
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : e(t);
    })(o);
}

function o(t, o) {
    return t === o ? 0 !== t || 0 !== o || 1 / t == 1 / o : t != t && o != o;
}

var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

var n = Object.prototype.hasOwnProperty;

exports.default = function(e, r) {
    if (o(e, r)) return !0;
    if ("object" !== t(e) || null === e || "object" !== t(r) || null === r) return !1;
    var u = Object.keys(e), f = Object.keys(r);
    if (u.length !== f.length) return !1;
    for (var y = 0; y < u.length; y++) if (!n.call(r, u[y]) || !o(e[u[y]], r[u[y]])) return !1;
    return !0;
};