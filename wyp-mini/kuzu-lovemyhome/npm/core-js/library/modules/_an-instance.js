module.exports = {};

module.exports = function(o, r, t, e) {
    if (!(o instanceof r) || void 0 !== e && e in o) throw TypeError(t + ": incorrect invocation!");
    return o;
};