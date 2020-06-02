module.exports = {};

module.exports = function(r, e) {
    for (var t = -1, u = null == r ? 0 : r.length; ++t < u; ) if (e(r[t], t, r)) return !0;
    return !1;
};