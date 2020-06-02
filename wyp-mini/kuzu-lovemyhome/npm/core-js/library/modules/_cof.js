module.exports = {};

var t = {}.toString;

module.exports = function(e) {
    return t.call(e).slice(8, -1);
};