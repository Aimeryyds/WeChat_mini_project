Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(e) {
    var r = /[\u4e00-\u9fa5]/g;
    return e.replace(r, "ww").length;
};

exports.setEllipsis = function(r, t, n) {
    if (n = n || "", e(r) <= t) return r;
    for (var u = 0, i = [], s = r.split(""), a = 0, l = s.length; a < l; a++) {
        var o = s[a];
        if (!((u += e(o)) <= t)) break;
        i.push(o);
    }
    return i.join("") + n;
};