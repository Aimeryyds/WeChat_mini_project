function a(a, t) {
    if ("repeat" == t.type) {
        var e = t.step || 5;
        if (!t.data[0]) return a;
        for (var r = (t.data[0].position || 5) - 1; r <= a.length - 1; r += e) a[r] = {
            type: "ad",
            data: t.data[0]
        };
    } else {
        if (!t.data || !t.data.length) return a;
        t.data.forEach(function(t) {
            var e = t.position - 1;
            a[e] = {
                type: "ad",
                data: t
            };
        });
    }
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var t = require("../../config/ad-config");

exports.formatFeedAdData = function(e, r, n) {
    var i = t.adConfig[r] && t.adConfig[r][n];
    if (!i) return e;
    var o = e.slice();
    if (i instanceof Array) for (var f = 0; f < i.length; f++) a(o, i[f]); else i instanceof Object && a(o, i);
    return o;
};