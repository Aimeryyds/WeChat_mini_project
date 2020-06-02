module.exports = {};

var r = require("../../modules/_core.js"), e = r.JSON || (r.JSON = {
    stringify: JSON.stringify
});

module.exports = function(r) {
    return e.stringify.apply(e, arguments);
};