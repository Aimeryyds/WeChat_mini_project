module.exports = {};

var t = require("./_is-object.js");

module.exports = function(r, e) {
    if (!t(r)) return r;
    var o, i;
    if (e && "function" == typeof (o = r.toString) && !t(i = o.call(r))) return i;
    if ("function" == typeof (o = r.valueOf) && !t(i = o.call(r))) return i;
    if (!e && "function" == typeof (o = r.toString) && !t(i = o.call(r))) return i;
    throw TypeError("Can't convert object to primitive value");
};