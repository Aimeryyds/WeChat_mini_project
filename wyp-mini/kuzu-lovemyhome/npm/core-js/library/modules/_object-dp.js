var e = module.exports = {}, r = require("./_an-object.js"), t = require("./_ie8-dom-define.js"), i = require("./_to-primitive.js"), o = Object.defineProperty;

e.f = require("./_descriptors.js") ? Object.defineProperty : function(e, s, n) {
    if (r(e), s = i(s, !0), r(n), t) try {
        return o(e, s, n);
    } catch (e) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
    return "value" in n && (e[s] = n.value), e;
};