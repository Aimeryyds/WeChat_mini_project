module.exports = {};

var t = require("./_is-object.js"), e = require("./_an-object.js"), r = function(r, o) {
    if (e(r), !t(o) && null !== o) throw TypeError(o + ": can't set as prototype!");
};

module.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, e, o) {
        try {
            (o = require("./_ctx.js")(Function.call, require("./_object-gopd.js").f(Object.prototype, "__proto__").set, 2))(t, []), 
            e = !(t instanceof Array);
        } catch (t) {
            e = !0;
        }
        return function(t, c) {
            return r(t, c), e ? t.__proto__ = c : o(t, c), t;
        };
    }({}, !1) : void 0),
    check: r
};