module.exports = {};

module.exports = function(e, r) {
    return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: r
    };
};