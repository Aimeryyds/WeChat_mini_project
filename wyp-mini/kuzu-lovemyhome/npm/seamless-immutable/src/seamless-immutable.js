function e(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

var t = module.exports = {}, r = window = require("../../labrador/global.js"), n = e(require("../../babel-runtime/core-js/object/create.js")), i = e(require("../../babel-runtime/core-js/json/stringify.js")), a = e(require("../../babel-runtime/core-js/object/freeze.js")), o = e(require("../../babel-runtime/core-js/object/get-own-property-descriptor.js")), u = e(require("../../babel-runtime/helpers/typeof.js")), s = e(require("../../babel-runtime/core-js/object/define-property.js")), l = e(require("../../babel-runtime/core-js/symbol/for.js")), c = e(require("../../babel-runtime/core-js/symbol.js"));

!function() {
    function e(e, t, r) {
        (0, s.default)(e, t, {
            enumerable: !1,
            configurable: !1,
            writable: !1,
            value: r
        });
    }
    function f(t, r) {
        e(t, r, function() {
            throw new y("The " + r + " method cannot be invoked on an Immutable data structure.");
        });
    }
    function d(t) {
        e(t, K, !0);
    }
    function h(e) {
        return "object" !== (void 0 === e ? "undefined" : (0, u.default)(e)) || (null === e || Boolean((0, 
        o.default)(e, K)));
    }
    function p(e, t) {
        return e === t || e !== e && t !== t;
    }
    function b(e) {
        return !(null === e || "object" !== (void 0 === e ? "undefined" : (0, u.default)(e)) || Array.isArray(e) || e instanceof Date);
    }
    function y(e) {
        var t = new Error(e);
        return t.__proto__ = y, t;
    }
    function m(e, t) {
        d(e);
        for (var r in t) t.hasOwnProperty(r) && f(e, t[r]);
        return (0, a.default)(e), e;
    }
    function v(t, r) {
        var n = t[r];
        e(t, r, function() {
            return R(n.apply(t, arguments));
        });
    }
    function j(e, t, r) {
        var n = r && r.deep;
        if (e in this && (n && this[e] !== t && b(t) && b(this[e]) && (t = this[e].merge(t, {
            deep: !0,
            mode: "replace"
        })), p(this[e], t))) return this;
        var i = M.call(this);
        return i[e] = R(t), g(i);
    }
    function w(e, t, r) {
        var n = e[0];
        if (1 === e.length) return j.call(this, n, t, r);
        var i, a = e.slice(1), o = this[n];
        if ("object" === (void 0 === o ? "undefined" : (0, u.default)(o)) && null !== o && "function" == typeof o.setIn) i = o.setIn(a, t); else {
            var s = a[0];
            i = "" !== s && isFinite(s) ? w.call(X, a, t) : C.call(Z, a, t);
        }
        if (n in this && o === i) return this;
        var l = M.call(this);
        return l[n] = i, g(l);
    }
    function g(t) {
        for (var r in V) V.hasOwnProperty(r) && v(t, V[r]);
        e(t, "flatMap", I), e(t, "asObject", P), e(t, "asMutable", M), e(t, "set", j), e(t, "setIn", w), 
        e(t, "update", k), e(t, "updateIn", $);
        for (var n = 0, i = t.length; n < i; n++) t[n] = R(t[n]);
        return m(t, Q);
    }
    function O(t) {
        return e(t, "asMutable", E), m(t, W);
    }
    function E() {
        return new Date(this.getTime());
    }
    function I(e) {
        if (0 === arguments.length) return this;
        var t, r = [], n = this.length;
        for (t = 0; t < n; t++) {
            var i = e(this[t], t, this);
            Array.isArray(i) ? r.push.apply(r, i) : r.push(i);
        }
        return g(r);
    }
    function A(e) {
        if (void 0 === e && 0 === arguments.length) return this;
        if ("function" != typeof e) {
            var t = Array.isArray(e) ? e.slice() : Array.prototype.slice.call(arguments);
            t.forEach(function(e, t, r) {
                "number" == typeof e && (r[t] = e.toString());
            }), e = function(e, r) {
                return -1 !== t.indexOf(r);
            };
        }
        var r = this.instantiateEmptyObject();
        for (var n in this) this.hasOwnProperty(n) && !1 === e(this[n], n) && (r[n] = this[n]);
        return H(r, {
            instantiateEmptyObject: this.instantiateEmptyObject
        });
    }
    function M(e) {
        var t, r, n = [];
        if (e && e.deep) for (t = 0, r = this.length; t < r; t++) n.push(T(this[t])); else for (t = 0, 
        r = this.length; t < r; t++) n.push(this[t]);
        return n;
    }
    function P(e) {
        "function" != typeof e && (e = function(e) {
            return e;
        });
        var t, r = {}, n = this.length;
        for (t = 0; t < n; t++) {
            var i = e(this[t], t, this), a = i[0], o = i[1];
            r[a] = o;
        }
        return H(r);
    }
    function T(e) {
        return !e || "object" !== (void 0 === e ? "undefined" : (0, u.default)(e)) || !(0, 
        o.default)(e, K) || e instanceof Date ? e : e.asMutable({
            deep: !0
        });
    }
    function _(e, t) {
        for (var r in e) (0, o.default)(e, r) && (t[r] = e[r]);
        return t;
    }
    function q(e, t) {
        function r(e, r, i) {
            var a = R(r[i]), o = f && f(e[i], a, t), u = e[i];
            if (void 0 !== n || void 0 !== o || !e.hasOwnProperty(i) || !p(a, u)) {
                var s;
                p(u, s = o || (l && b(u) && b(a) ? u.merge(a, t) : a)) && e.hasOwnProperty(i) || (void 0 === n && (n = _(e, e.instantiateEmptyObject())), 
                n[i] = s);
            }
        }
        if (0 === arguments.length) return this;
        if (null === e || "object" !== (void 0 === e ? "undefined" : (0, u.default)(e))) throw new TypeError("Immutable#merge can only be invoked with objects or arrays, not " + (0, 
        i.default)(e));
        var n, a, s = Array.isArray(e), l = t && t.deep, c = t && t.mode || "merge", f = t && t.merger;
        if (s) for (var d = 0, h = e.length; d < h; d++) {
            var y = e[d];
            for (a in y) y.hasOwnProperty(a) && r(void 0 !== n ? n : this, y, a);
        } else {
            for (a in e) (0, o.default)(e, a) && r(this, e, a);
            "replace" === c && function(e, t) {
                for (var r in e) t.hasOwnProperty(r) || (void 0 === n && (n = _(e, e.instantiateEmptyObject())), 
                delete n[r]);
            }(this, e);
        }
        return void 0 === n ? this : H(n, {
            instantiateEmptyObject: this.instantiateEmptyObject
        });
    }
    function D(e, t) {
        var r = t && t.deep;
        if (0 === arguments.length) return this;
        if (null === e || "object" !== (void 0 === e ? "undefined" : (0, u.default)(e))) throw new TypeError("Immutable#replace can only be invoked with objects or arrays, not " + (0, 
        i.default)(e));
        return this.merge(e, {
            deep: r,
            mode: "replace"
        });
    }
    function C(e, t, r) {
        var n = e[0];
        if (1 === e.length) return U.call(this, n, t, r);
        var i, a = e.slice(1), o = this[n];
        if (i = this.hasOwnProperty(n) && "object" === (void 0 === o ? "undefined" : (0, 
        u.default)(o)) && null !== o && "function" == typeof o.setIn ? o.setIn(a, t) : C.call(Z, a, t), 
        this.hasOwnProperty(n) && o === i) return this;
        var s = _(this, this.instantiateEmptyObject());
        return s[n] = i, H(s, this);
    }
    function U(e, t, r) {
        var n = r && r.deep;
        if (this.hasOwnProperty(e) && (n && this[e] !== t && b(t) && b(this[e]) && (t = this[e].merge(t, {
            deep: !0,
            mode: "replace"
        })), p(this[e], t))) return this;
        var i = _(this, this.instantiateEmptyObject());
        return i[e] = R(t), H(i, this);
    }
    function k(e, t) {
        var r = Array.prototype.slice.call(arguments, 2), n = this[e];
        return this.set(e, t.apply(n, [ n ].concat(r)));
    }
    function S(e, t) {
        for (var r = 0, n = t.length; null != e && r < n; r++) e = e[t[r]];
        return r && r == n ? e : void 0;
    }
    function $(e, t) {
        var r = Array.prototype.slice.call(arguments, 2), n = S(this, e);
        return this.setIn(e, t.apply(n, [ n ].concat(r)));
    }
    function x(e) {
        var t, r = this.instantiateEmptyObject();
        if (e && e.deep) for (t in this) this.hasOwnProperty(t) && (r[t] = T(this[t])); else for (t in this) this.hasOwnProperty(t) && (r[t] = this[t]);
        return r;
    }
    function F() {
        return {};
    }
    function H(t, r) {
        var n = r && r.instantiateEmptyObject ? r.instantiateEmptyObject : F;
        return e(t, "merge", q), e(t, "replace", D), e(t, "without", A), e(t, "asMutable", x), 
        e(t, "instantiateEmptyObject", n), e(t, "set", U), e(t, "setIn", C), e(t, "update", k), 
        e(t, "updateIn", $), m(t, L);
    }
    function Y(e) {
        return "object" === (void 0 === e ? "undefined" : (0, u.default)(e)) && null !== e && (e.$$typeof === J || e.$$typeof === G);
    }
    function R(e, t, r) {
        if (h(e) || Y(e)) return e;
        if (Array.isArray(e)) return g(e.slice());
        if (e instanceof Date) return O(new Date(e.getTime()));
        var i = t && t.prototype, a = i && i !== Object.prototype ? function() {
            return (0, n.default)(i);
        } : F, u = a();
        if (null == r && (r = 64), r <= 0) throw new y("Attempt to construct Immutable from a deeply nested object was detected. Have you tried to wrap an object with circular references (e.g. React element)? See https://github.com/rtfeldman/seamless-immutable/wiki/Deeply-nested-object-was-detected for details.");
        r -= 1;
        for (var s in e) (0, o.default)(e, s) && (u[s] = R(e[s], void 0, r));
        return H(u, {
            instantiateEmptyObject: a
        });
    }
    function z(e) {
        return function() {
            var t = [].slice.call(arguments), r = t.shift();
            return e.apply(r, t);
        };
    }
    function B(e, t) {
        return function() {
            var r = [].slice.call(arguments), n = r.shift();
            return Array.isArray(n) ? t.apply(n, r) : e.apply(n, r);
        };
    }
    var G = "function" == typeof c.default && l.default && (0, l.default)("react.element"), J = 60103, K = "__immutable_invariants_hold", L = [ "setPrototypeOf" ], N = [ "keys" ], Q = L.concat([ "push", "pop", "sort", "splice", "shift", "unshift", "reverse" ]), V = N.concat([ "map", "filter", "slice", "concat", "reduce", "reduceRight" ]), W = L.concat([ "setDate", "setFullYear", "setHours", "setMilliseconds", "setMinutes", "setMonth", "setSeconds", "setTime", "setUTCDate", "setUTCFullYear", "setUTCHours", "setUTCMilliseconds", "setUTCMinutes", "setUTCMonth", "setUTCSeconds", "setYear" ]);
    y.prototype = Error.prototype;
    var X = R([]), Z = R({});
    R.from = R, R.isImmutable = h, R.ImmutableError = y, R.merge = z(q), R.replace = z(D), 
    R.without = z(A), R.asMutable = B(x, M), R.set = B(U, j), R.setIn = B(C, w), R.update = z(k), 
    R.updateIn = z($), R.flatMap = z(I), R.asObject = z(P), (0, a.default)(R), "object" === ("undefined" == typeof module ? "undefined" : (0, 
    u.default)(module)) ? module.exports = R : "object" === (void 0 === t ? "undefined" : (0, 
    u.default)(t)) ? t.Immutable = R : "object" === ("undefined" == typeof window ? "undefined" : (0, 
    u.default)(window)) ? window.Immutable = R : "object" === (void 0 === r ? "undefined" : (0, 
    u.default)(r)) && (r.Immutable = R);
}();