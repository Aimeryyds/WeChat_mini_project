module.exports = {};

module.exports = function(r) {
    var e = -1, o = Array(r.size);
    return r.forEach(function(r) {
        o[++e] = r;
    }), o;
};