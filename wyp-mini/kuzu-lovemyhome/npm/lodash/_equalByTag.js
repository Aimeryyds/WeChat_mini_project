module.exports = {};

var e = require("./_Symbol.js"), r = require("./_Uint8Array.js"), t = require("./eq.js"), a = require("./_equalArrays.js"), s = require("./_mapToArray.js"), c = require("./_setToArray.js"), o = 1, u = 2, n = "[object Boolean]", b = "[object Date]", i = "[object Error]", j = "[object Map]", f = "[object Number]", y = "[object RegExp]", l = "[object Set]", m = "[object String]", g = "[object Symbol]", q = "[object ArrayBuffer]", v = "[object DataView]", p = e ? e.prototype : void 0, d = p ? p.valueOf : void 0;

module.exports = function(e, p, h, A, _, w, L) {
    switch (h) {
      case v:
        if (e.byteLength != p.byteLength || e.byteOffset != p.byteOffset) return !1;
        e = e.buffer, p = p.buffer;

      case q:
        return !(e.byteLength != p.byteLength || !w(new r(e), new r(p)));

      case n:
      case b:
      case f:
        return t(+e, +p);

      case i:
        return e.name == p.name && e.message == p.message;

      case y:
      case m:
        return e == p + "";

      case j:
        var S = s;

      case l:
        var x = A & o;
        if (S || (S = c), e.size != p.size && !x) return !1;
        var O = L.get(e);
        if (O) return O == p;
        A |= u, L.set(e, p);
        var z = a(S(e), S(p), A, _, w, L);
        return L.delete(e), z;

      case g:
        if (d) return d.call(e) == d.call(p);
    }
    return !1;
};