module.exports = {};

module.exports = function(r, e) {
    for (var o = -1, t = Array(r); ++o < r; ) t[o] = e(o);
    return t;
};