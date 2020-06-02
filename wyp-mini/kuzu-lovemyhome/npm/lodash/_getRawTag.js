module.exports = {};

var r = require("./_Symbol.js"), t = Object.prototype, e = t.hasOwnProperty, o = t.toString, a = r ? r.toStringTag : void 0;

module.exports = function(r) {
    var t = e.call(r, a), l = r[a];
    try {
        r[a] = void 0;
        var c = !0;
    } catch (r) {}
    var i = o.call(r);
    return c && (t ? r[a] = l : delete r[a]), i;
};