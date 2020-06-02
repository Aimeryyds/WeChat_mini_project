var e = module.exports = {}, t = require("./_object-keys-internal.js"), r = require("./_enum-bug-keys.js").concat("length", "prototype");

e.f = Object.getOwnPropertyNames || function(e) {
    return t(e, r);
};