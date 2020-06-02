module.exports = {};

r = window = require("../../../labrador/global.js");

require("./es6.array.iterator.js");

for (var r = require("./_global.js"), e = require("./_hide.js"), i = require("./_iterators.js"), t = require("./_wks.js")("toStringTag"), s = [ "NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList" ], o = 0; o < 5; o++) {
    var a = s[o], u = r[a], l = u && u.prototype;
    l && !l[t] && e(l, t, a), i[a] = i.Array;
}