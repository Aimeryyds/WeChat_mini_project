module.exports = {};

var e = require("./_ctx.js"), r = require("./_export.js"), t = require("./_to-object.js"), i = require("./_iter-call.js"), o = require("./_is-array-iter.js"), u = require("./_to-length.js"), s = require("./_create-property.js"), n = require("./core.get-iterator-method.js");

r(r.S + r.F * !require("./_iter-detect.js")(function(e) {
    Array.from(e);
}), "Array", {
    from: function(r) {
        var a, l, c, j, f = t(r), q = "function" == typeof this ? this : Array, d = arguments.length, v = d > 1 ? arguments[1] : void 0, _ = void 0 !== v, h = 0, y = n(f);
        if (_ && (v = e(v, d > 2 ? arguments[2] : void 0, 2)), void 0 == y || q == Array && o(y)) for (l = new q(a = u(f.length)); a > h; h++) s(l, h, _ ? v(f[h], h) : f[h]); else for (j = y.call(f), 
        l = new q(); !(c = j.next()).done; h++) s(l, h, _ ? i(j, v, [ c.value, h ], !0) : c.value);
        return l.length = h, l;
    }
});