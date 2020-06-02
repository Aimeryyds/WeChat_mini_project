module.exports = {};

var e = require("./_getMapData.js");

module.exports = function(t) {
    var r = e(this, t).delete(t);
    return this.size -= r ? 1 : 0, r;
};