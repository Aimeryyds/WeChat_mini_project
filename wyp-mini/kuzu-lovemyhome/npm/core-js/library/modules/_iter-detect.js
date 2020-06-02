module.exports = {};

var r = require("./_wks.js")("iterator"), t = !1;

try {
    var n = [ 7 ][r]();
    n.return = function() {
        t = !0;
    }, Array.from(n, function() {
        throw 2;
    });
} catch (r) {}

module.exports = function(n, e) {
    if (!e && !t) return !1;
    var u = !1;
    try {
        var o = [ 7 ], c = o[r]();
        c.next = function() {
            return {
                done: u = !0
            };
        }, o[r] = function() {
            return c;
        }, n(o);
    } catch (r) {}
    return u;
};