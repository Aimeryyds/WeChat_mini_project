module.exports = {};

var e = require("./_baseIsTypedArray.js"), r = require("./_baseUnary.js"), s = require("./_nodeUtil.js"), a = s && s.isTypedArray, i = a ? r(a) : e;

module.exports = i;