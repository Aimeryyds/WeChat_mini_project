module.exports = {};

module.exports = function(r) {
    return function(e, t, n) {
        for (var o = -1, u = Object(e), c = n(e), f = c.length; f--; ) {
            var i = c[r ? f : ++o];
            if (!1 === t(u[i], i, u)) break;
        }
        return e;
    };
};