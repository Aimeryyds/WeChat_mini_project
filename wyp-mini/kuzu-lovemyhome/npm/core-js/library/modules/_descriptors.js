module.exports = {};

module.exports = !require("./_fails.js")(function() {
    return 7 != Object.defineProperty({}, "a", {
        get: function() {
            return 7;
        }
    }).a;
});