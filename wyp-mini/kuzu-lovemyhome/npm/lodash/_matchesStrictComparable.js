module.exports = {};

module.exports = function(t, e) {
    return function(n) {
        return null != n && n[t] === e && (void 0 !== e || t in Object(n));
    };
};