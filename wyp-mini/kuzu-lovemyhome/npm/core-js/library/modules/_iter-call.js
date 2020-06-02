module.exports = {};

var r = require("./_an-object.js");

module.exports = function(t, e, o, u) {
    try {
        return u ? e(r(o)[0], o[1]) : e(o);
    } catch (e) {
        var c = t.return;
        throw void 0 !== c && r(c.call(t)), e;
    }
};