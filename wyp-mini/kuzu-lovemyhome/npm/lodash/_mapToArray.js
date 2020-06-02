module.exports = {};

module.exports = function(r) {
    var e = -1, o = Array(r.size);
    return r.forEach(function(r, t) {
        o[++e] = [ t, r ];
    }), o;
};