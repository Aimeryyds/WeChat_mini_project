module.exports = {};

module.exports = !require("./_descriptors.js") && !require("./_fails.js")(function() {
    return 7 != Object.defineProperty(require("./_dom-create.js")("div"), "a", {
        get: function() {
            return 7;
        }
    }).a;
});