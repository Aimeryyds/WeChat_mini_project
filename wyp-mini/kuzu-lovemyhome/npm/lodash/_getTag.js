module.exports = {};

var e = require("./_DataView.js"), r = require("./_Map.js"), t = require("./_Promise.js"), a = require("./_Set.js"), o = require("./_WeakMap.js"), c = require("./_baseGetTag.js"), s = require("./_toSource.js"), u = s(e), j = s(r), i = s(t), n = s(a), b = s(o), w = c;

(e && "[object DataView]" != w(new e(new ArrayBuffer(1))) || r && "[object Map]" != w(new r()) || t && "[object Promise]" != w(t.resolve()) || a && "[object Set]" != w(new a()) || o && "[object WeakMap]" != w(new o())) && (w = function(e) {
    var r = c(e), t = "[object Object]" == r ? e.constructor : void 0, a = t ? s(t) : "";
    if (a) switch (a) {
      case u:
        return "[object DataView]";

      case j:
        return "[object Map]";

      case i:
        return "[object Promise]";

      case n:
        return "[object Set]";

      case b:
        return "[object WeakMap]";
    }
    return r;
}), module.exports = w;