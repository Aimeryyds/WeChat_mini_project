module.exports = {};

var e = require("./_add-to-unscopables.js"), r = require("./_iter-step.js"), t = require("./_iterators.js"), s = require("./_to-iobject.js");

module.exports = require("./_iter-define.js")(Array, "Array", function(e, r) {
    this._t = s(e), this._i = 0, this._k = r;
}, function() {
    var e = this._t, t = this._k, s = this._i++;
    return !e || s >= e.length ? (this._t = void 0, r(1)) : "keys" == t ? r(0, s) : "values" == t ? r(0, e[s]) : r(0, [ s, e[s] ]);
}, "values"), t.Arguments = t.Array, e("keys"), e("values"), e("entries");