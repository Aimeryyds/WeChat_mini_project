module.exports = {};

var r = require("./_classof.js"), e = require("./_wks.js")("iterator"), t = require("./_iterators.js");

module.exports = require("./_core.js").isIterable = function(s) {
    var i = Object(s);
    return void 0 !== i[e] || "@@iterator" in i || t.hasOwnProperty(r(i));
};