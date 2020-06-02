var e = module.exports = {}, r = require("./_object-pie.js"), i = require("./_property-desc.js"), t = require("./_to-iobject.js"), s = require("./_to-primitive.js"), o = require("./_has.js"), u = require("./_ie8-dom-define.js"), c = Object.getOwnPropertyDescriptor;

e.f = require("./_descriptors.js") ? c : function(e, j) {
    if (e = t(e), j = s(j, !0), u) try {
        return c(e, j);
    } catch (e) {}
    if (o(e, j)) return i(!r.f.call(e, j), e[j]);
};