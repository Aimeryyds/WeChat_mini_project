module.exports = {};

var e = require("./_library.js"), r = require("./_export.js"), t = require("./_redefine.js"), i = require("./_hide.js"), s = require("./_has.js"), n = require("./_iterators.js"), u = require("./_iter-create.js"), o = require("./_set-to-string-tag.js"), a = require("./_object-gpo.js"), c = require("./_wks.js")("iterator"), l = !([].keys && "next" in [].keys()), j = function() {
    return this;
};

module.exports = function(f, q, _, y, p, v, h) {
    u(_, q, y);
    var k, d, w, x = function(e) {
        if (!l && e in A) return A[e];
        switch (e) {
          case "keys":
          case "values":
            return function() {
                return new _(this, e);
            };
        }
        return function() {
            return new _(this, e);
        };
    }, b = q + " Iterator", g = "values" == p, m = !1, A = f.prototype, F = A[c] || A["@@iterator"] || p && A[p], I = F || x(p), O = p ? g ? x("entries") : I : void 0, P = "Array" == q ? A.entries || F : F;
    if (P && (w = a(P.call(new f()))) !== Object.prototype && (o(w, b, !0), e || s(w, c) || i(w, c, j)), 
    g && F && "values" !== F.name && (m = !0, I = function() {
        return F.call(this);
    }), e && !h || !l && !m && A[c] || i(A, c, I), n[q] = I, n[b] = j, p) if (k = {
        values: g ? I : x("values"),
        keys: v ? I : x("keys"),
        entries: O
    }, h) for (d in k) d in A || t(A, d, k[d]); else r(r.P + r.F * (l || m), q, k);
    return k;
};