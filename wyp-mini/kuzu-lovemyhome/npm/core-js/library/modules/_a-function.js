module.exports = {};

module.exports = function(o) {
    if ("function" != typeof o) throw TypeError(o + " is not a function!");
    return o;
};