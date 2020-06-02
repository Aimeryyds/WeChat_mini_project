module.exports = {};

module.exports = function(r, e) {
    for (var t = -1, o = null == r ? 0 : r.length, u = Array(o); ++t < o; ) u[t] = e(r[t], t, r);
    return u;
};