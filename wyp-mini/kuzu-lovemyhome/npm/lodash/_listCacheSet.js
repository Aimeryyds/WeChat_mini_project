module.exports = {};

var s = require("./_assocIndexOf.js");

module.exports = function(e, t) {
    var r = this.__data__, i = s(r, e);
    return i < 0 ? (++this.size, r.push([ e, t ])) : r[i][1] = t, this;
};