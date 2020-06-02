module.exports = {};

var e = require("./_assocIndexOf.js"), r = Array.prototype.splice;

module.exports = function(t) {
    var s = this.__data__, o = e(s, t);
    return !(o < 0 || (o == s.length - 1 ? s.pop() : r.call(s, o, 1), --this.size, 0));
};