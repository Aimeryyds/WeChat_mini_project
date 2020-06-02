module.exports = {};

var e = 9007199254740991;

module.exports = function(r) {
    return "number" == typeof r && r > -1 && r % 1 == 0 && r <= e;
};