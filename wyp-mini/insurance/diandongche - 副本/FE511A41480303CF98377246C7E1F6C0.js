function e(e, t) {
    return e + t.charAt(0).toUpperCase() + t.substring(1);
}

function t(e) {
    return e.replace(a, "-$1").toLowerCase();
}

function r(e) {
    return t(e).replace(s, "-ms-");
}

function o(e, t) {
    return n[e] || "number" != typeof t ? "content" !== e || u.test(t) || (t = "'" + t.replace(/'/g, "\\'") + "'") : t += "px", 
    r(e) + ": " + t + ";  ";
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var n = {
    boxFlex: !(exports.default = void 0),
    boxFlexGroup: !0,
    columnCount: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    strokeDashoffset: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}, i = [ "Webkit", "ms", "Moz", "O" ];

Object.keys(n).forEach(function(t) {
    i.forEach(function(r) {
        n[e(r, t)] = n[t];
    });
});

var s = /^ms-/, a = /([A-Z])/g, f = Array.isArray, l = Object.keys, u = /^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;

exports.default = function(e) {
    var t = "";
    if ("string" == typeof e) return e;
    if (!e || 0 === l(e).length) return t;
    for (var r = l(e), n = 0, i = r.length; n < i; n++) {
        var s = r[n], a = e[s];
        if (f(a)) for (var u = 0, c = a.length; u < c; u++) t += o(s, a[u]); else t += o(s, a);
    }
    return t;
};