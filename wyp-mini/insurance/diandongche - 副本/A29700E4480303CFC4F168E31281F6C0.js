function o(r) {
    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(o) {
        return void 0 === o ? "undefined" : t(o);
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : void 0 === o ? "undefined" : t(o);
    })(r);
}

var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
    return typeof o;
} : function(o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
};

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

exports.default = function(t) {
    if (Array.isArray(t)) return 0 === t.length;
    if ("object" !== o(t)) return !t;
    if (t) for (var r in t) return !1;
    return !0;
};