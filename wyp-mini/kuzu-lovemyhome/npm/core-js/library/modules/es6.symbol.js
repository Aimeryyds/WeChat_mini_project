var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, r = (module.exports = {}, window = require("../../../labrador/global.js")), r = require("./_global.js"), t = require("./_has.js"), o = require("./_descriptors.js"), i = require("./_export.js"), n = require("./_redefine.js"), s = require("./_meta.js").KEY, u = require("./_fails.js"), f = require("./_shared.js"), c = require("./_set-to-string-tag.js"), a = require("./_uid.js"), p = require("./_wks.js"), l = require("./_wks-ext.js"), y = require("./_wks-define.js"), b = require("./_keyof.js"), j = require("./_enum-keys.js"), h = require("./_is-array.js"), m = require("./_an-object.js"), _ = require("./_to-iobject.js"), q = require("./_to-primitive.js"), d = require("./_property-desc.js"), g = require("./_object-create.js"), S = require("./_object-gopn-ext.js"), v = require("./_object-gopd.js"), O = require("./_object-dp.js"), w = require("./_object-keys.js"), k = v.f, P = O.f, E = S.f, F = r.Symbol, N = r.JSON, x = N && N.stringify, J = p("_hidden"), I = p("toPrimitive"), T = {}.propertyIsEnumerable, C = f("symbol-registry"), M = f("symbols"), D = f("op-symbols"), G = Object.prototype, K = "function" == typeof F, Q = r.QObject, W = !Q || !Q.prototype || !Q.prototype.findChild, Y = o && u(function() {
    return 7 != g(P({}, "a", {
        get: function() {
            return P(this, "a", {
                value: 7
            }).a;
        }
    })).a;
}) ? function(e, r, t) {
    var o = k(G, r);
    o && delete G[r], P(e, r, t), o && e !== G && P(G, r, o);
} : P, z = function(e) {
    var r = M[e] = g(F.prototype);
    return r._k = e, r;
}, A = K && "symbol" == e(F.iterator) ? function(r) {
    return "symbol" == (void 0 === r ? "undefined" : e(r));
} : function(e) {
    return e instanceof F;
}, B = function(e, r, o) {
    return e === G && B(D, r, o), m(e), r = q(r, !0), m(o), t(M, r) ? (o.enumerable ? (t(e, J) && e[J][r] && (e[J][r] = !1), 
    o = g(o, {
        enumerable: d(0, !1)
    })) : (t(e, J) || P(e, J, d(1, {})), e[J][r] = !0), Y(e, r, o)) : P(e, r, o);
}, H = function(e, r) {
    m(e);
    for (var t, o = j(r = _(r)), i = 0, n = o.length; n > i; ) B(e, t = o[i++], r[t]);
    return e;
}, L = function(e) {
    var r = T.call(this, e = q(e, !0));
    return !(this === G && t(M, e) && !t(D, e)) && (!(r || !t(this, e) || !t(M, e) || t(this, J) && this[J][e]) || r);
}, R = function(e, r) {
    if (e = _(e), r = q(r, !0), e !== G || !t(M, r) || t(D, r)) {
        var o = k(e, r);
        return !o || !t(M, r) || t(e, J) && e[J][r] || (o.enumerable = !0), o;
    }
}, U = function(e) {
    for (var r, o = E(_(e)), i = [], n = 0; o.length > n; ) t(M, r = o[n++]) || r == J || r == s || i.push(r);
    return i;
}, V = function(e) {
    for (var r, o = e === G, i = E(o ? D : _(e)), n = [], s = 0; i.length > s; ) !t(M, r = i[s++]) || o && !t(G, r) || n.push(M[r]);
    return n;
};

K || (n((F = function() {
    if (this instanceof F) throw TypeError("Symbol is not a constructor!");
    var e = a(arguments.length > 0 ? arguments[0] : void 0);
    return o && W && Y(G, e, {
        configurable: !0,
        set: function r(o) {
            this === G && r.call(D, o), t(this, J) && t(this[J], e) && (this[J][e] = !1), Y(this, e, d(1, o));
        }
    }), z(e);
}).prototype, "toString", function() {
    return this._k;
}), v.f = R, O.f = B, require("./_object-gopn.js").f = S.f = U, require("./_object-pie.js").f = L, 
require("./_object-gops.js").f = V, o && !require("./_library.js") && n(G, "propertyIsEnumerable", L, !0), 
l.f = function(e) {
    return z(p(e));
}), i(i.G + i.W + i.F * !K, {
    Symbol: F
});

for (var X = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), Z = 0; X.length > Z; ) p(X[Z++]);

for (var X = w(p.store), Z = 0; X.length > Z; ) y(X[Z++]);

i(i.S + i.F * !K, "Symbol", {
    for: function(e) {
        return t(C, e += "") ? C[e] : C[e] = F(e);
    },
    keyFor: function(e) {
        if (A(e)) return b(C, e);
        throw TypeError(e + " is not a symbol!");
    },
    useSetter: function() {
        W = !0;
    },
    useSimple: function() {
        W = !1;
    }
}), i(i.S + i.F * !K, "Object", {
    create: function(e, r) {
        return void 0 === r ? g(e) : H(g(e), r);
    },
    defineProperty: B,
    defineProperties: H,
    getOwnPropertyDescriptor: R,
    getOwnPropertyNames: U,
    getOwnPropertySymbols: V
}), N && i(i.S + i.F * (!K || u(function() {
    var e = F();
    return "[null]" != x([ e ]) || "{}" != x({
        a: e
    }) || "{}" != x(Object(e));
})), "JSON", {
    stringify: function(e) {
        if (void 0 !== e && !A(e)) {
            for (var r, t, o = [ e ], i = 1; arguments.length > i; ) o.push(arguments[i++]);
            return "function" == typeof (r = o[1]) && (t = r), !t && h(r) || (r = function(e, r) {
                if (t && (r = t.call(this, e, r)), !A(r)) return r;
            }), o[1] = r, x.apply(N, o);
        }
    }
}), F.prototype[I] || require("./_hide.js")(F.prototype, I, F.prototype.valueOf), 
c(F, "Symbol"), c(Math, "Math", !0), c(r.JSON, "JSON", !0);