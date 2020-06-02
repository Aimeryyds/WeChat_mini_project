Object.defineProperty(exports, "__esModule", {
    value: !0
});

var r = {};

exports.on = function(e, t, a) {
    var n = [ t, a ], o = r[e];
    Array.isArray(o) ? o.push(n) : r[e] = [ n ];
}, exports.remove = function(e, t) {
    var a = r[e];
    Array.isArray(a) && (r[e] = a.filter(function(r) {
        return r[0] != t;
    }));
}, exports.emit = function(e, t) {
    var a = r[e];
    Array.isArray(a) && a.map(function(r) {
        var e = r[0];
        r[1].call(e, t);
    });
};