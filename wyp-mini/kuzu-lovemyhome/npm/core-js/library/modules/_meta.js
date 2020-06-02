var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, t = (module.exports = {}, require("./_uid.js")("meta")), r = require("./_is-object.js"), n = require("./_has.js"), o = require("./_object-dp.js").f, i = 0, u = Object.isExtensible || function() {
    return !0;
}, f = !require("./_fails.js")(function() {
    return u(Object.preventExtensions({}));
}), s = function(e) {
    o(e, t, {
        value: {
            i: "O" + ++i,
            w: {}
        }
    });
}, c = module.exports = {
    KEY: t,
    NEED: !1,
    fastKey: function(o, i) {
        if (!r(o)) return "symbol" == (void 0 === o ? "undefined" : e(o)) ? o : ("string" == typeof o ? "S" : "P") + o;
        if (!n(o, t)) {
            if (!u(o)) return "F";
            if (!i) return "E";
            s(o);
        }
        return o[t].i;
    },
    getWeak: function(e, r) {
        if (!n(e, t)) {
            if (!u(e)) return !0;
            if (!r) return !1;
            s(e);
        }
        return e[t].w;
    },
    onFreeze: function(e) {
        return f && c.NEED && u(e) && !n(e, t) && s(e), e;
    }
};