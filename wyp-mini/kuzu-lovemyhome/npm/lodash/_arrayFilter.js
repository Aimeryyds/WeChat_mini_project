module.exports = {};

module.exports = function(r, e) {
    for (var t = -1, o = null == r ? 0 : r.length, u = 0, l = []; ++t < o; ) {
        var n = r[t];
        e(n, t, r) && (l[u++] = n);
    }
    return l;
};