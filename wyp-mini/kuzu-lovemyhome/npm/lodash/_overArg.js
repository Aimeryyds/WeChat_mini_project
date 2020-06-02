module.exports = {};

module.exports = function(t, e) {
    return function(r) {
        return t(e(r));
    };
};