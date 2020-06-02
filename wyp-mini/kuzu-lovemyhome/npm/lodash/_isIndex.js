module.exports = {};

var e = 9007199254740991, t = /^(?:0|[1-9]\d*)$/;

module.exports = function(r, u) {
    return !!(u = null == u ? e : u) && ("number" == typeof r || t.test(r)) && r > -1 && r % 1 == 0 && r < u;
};