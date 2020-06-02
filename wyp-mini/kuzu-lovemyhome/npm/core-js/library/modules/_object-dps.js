module.exports = {};

var e = require("./_object-dp.js"), r = require("./_an-object.js"), t = require("./_object-keys.js");

module.exports = require("./_descriptors.js") ? Object.defineProperties : function(s, o) {
    r(s);
    for (var i, u = t(o), j = u.length, c = 0; j > c; ) e.f(s, i = u[c++], o[i]);
    return s;
};