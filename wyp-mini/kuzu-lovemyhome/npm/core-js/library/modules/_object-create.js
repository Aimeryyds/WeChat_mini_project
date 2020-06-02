module.exports = {};

var e = require("./_an-object.js"), r = require("./_object-dps.js"), t = require("./_enum-bug-keys.js"), o = require("./_shared-key.js")("IE_PROTO"), n = function() {}, s = function() {
    var e, r = require("./_dom-create.js")("iframe"), o = t.length;
    for (r.style.display = "none", require("./_html.js").appendChild(r), r.src = "javascript:", 
    (e = r.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), 
    e.close(), s = e.F; o--; ) delete s.prototype[t[o]];
    return s();
};

module.exports = Object.create || function(t, u) {
    var i;
    return null !== t ? (n.prototype = e(t), i = new n(), n.prototype = null, i[o] = t) : i = s(), 
    void 0 === u ? i : r(i, u);
};