module.exports = {};

var o = 0, t = Math.random();

module.exports = function(r) {
    return "Symbol(".concat(void 0 === r ? "" : r, ")_", (++o + t).toString(36));
};