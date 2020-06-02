var r = {};

function n(n, t) {
    var a = r[n];
    Array.isArray(a) && (r[n] = a.filter(function(r) {
        return r[0] != t;
    }));
}

exports.on = function(n, t, a) {
    var o = [ t, a ], i = r[n];
    Array.isArray(i) ? i.push(o) : r[n] = [ o ];
}, exports.remove = n, exports.removeAll = function(t) {
    for (var a in r) n(a, t);
}, exports.emit = function(n, t) {
    var a = r[n];
    Array.isArray(a) && a.map(function(r) {
        var n = r[0];
        r[1].call(n, t);
    });
};