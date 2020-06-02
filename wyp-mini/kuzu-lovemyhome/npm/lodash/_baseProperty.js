module.exports = {};

module.exports = function(t) {
    return function(u) {
        return null == u ? void 0 : u[t];
    };
};