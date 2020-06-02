module.exports = {};

var e = require("./_getMapData.js");

module.exports = function(s, t) {
    var i = e(this, s), r = i.size;
    return i.set(s, t), this.size += i.size == r ? 0 : 1, this;
};