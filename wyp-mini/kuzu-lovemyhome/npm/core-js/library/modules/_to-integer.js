module.exports = {};

var t = Math.ceil, e = Math.floor;

module.exports = function(o) {
    return isNaN(o = +o) ? 0 : (o > 0 ? e : t)(o);
};