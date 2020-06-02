module.exports = {};

var e = /^\./, r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, t = /\\(\\)?/g, u = require("./_memoizeCapped.js")(function(u) {
    var p = [];
    return e.test(u) && p.push(""), u.replace(r, function(e, r, u, s) {
        p.push(u ? s.replace(t, "$1") : r || e);
    }), p;
});

module.exports = u;