Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

function getProto(t) {
    return t.getPrototypeOf;
}

function class2type() {
    return {};
}

function hasOwn() {
    return class2type.hasOwnProperty;
}

function fnToString() {
    return hasOwn.toString;
}

function ObjectFunctionString() {
    return fnToString.call(Object);
}

var app = {
    isFunction: function(t) {
        return "function" == typeof t && "number" != typeof t.nodeType;
    },
    isPlainObject: function(t) {
        var n, o;
        return !(!t || "[object Object]" !== toString.call(t)) && (!(n = getProto(t)) || "function" == typeof (o = hasOwn.call(n, "constructor") && n.constructor) && fnToString.call(o) === ObjectFunctionString);
    },
    isEmptyObj: function(t) {
        var n;
        for (n in t) return !1;
        return !0;
    },
    extend: function() {
        var t, n, o, r, e, i, c = arguments[0] || {}, u = 1, f = arguments.length, p = !1;
        for ("boolean" == typeof c && (p = c, c = arguments[u] || {}, u++), "object" === (void 0 === c ? "undefined" : _typeof(c)) || app.isFunction(c) || (c = {}), 
        u === f && (c = this, u--); u < f; u++) if (null != (t = arguments[u])) for (n in t) o = c[n], 
        c !== (r = t[n]) && (p && r && (app.isPlainObject(r) || (e = Array.isArray(r))) ? (e ? (e = !1, 
        i = o && Array.isArray(o) ? o : []) : i = o && app.isPlainObject(o) ? o : {}, c[n] = app.extend(p, i, r)) : void 0 !== r && (c[n] = r));
        return c;
    }
};

exports.default = app;