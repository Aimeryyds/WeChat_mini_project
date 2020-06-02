module.exports = {};

var t = Object.prototype;

module.exports = function(o) {
    var r = o && o.constructor;
    return o === ("function" == typeof r && r.prototype || t);
};