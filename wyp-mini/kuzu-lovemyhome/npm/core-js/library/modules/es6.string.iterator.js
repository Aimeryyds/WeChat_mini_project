module.exports = {};

var t = require("./_string-at.js")(!0);

require("./_iter-define.js")(String, "String", function(t) {
    this._t = String(t), this._i = 0;
}, function() {
    var i, e = this._t, r = this._i;
    return r >= e.length ? {
        value: void 0,
        done: !0
    } : (i = t(e, r), this._i += i.length, {
        value: i,
        done: !1
    });
});