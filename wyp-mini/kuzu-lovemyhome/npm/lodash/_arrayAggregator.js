module.exports = {};

module.exports = function(r, e, t, o) {
    for (var u = -1, l = null == r ? 0 : r.length; ++u < l; ) {
        var n = r[u];
        e(o, n, t(n), r);
    }
    return o;
};