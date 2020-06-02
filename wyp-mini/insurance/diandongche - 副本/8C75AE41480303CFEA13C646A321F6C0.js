Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

exports.default = function(e, t) {
    for (var r = e.split("."), n = t.split("."), s = Math.max(r.length, n.length); r.length < s; ) r.push("0");
    for (;n.length < s; ) n.push("0");
    for (var u = 0; u < s; u++) {
        var a = parseInt(r[u]), l = parseInt(n[u]);
        if (l < a) return 1;
        if (a < l) return -1;
    }
    return 0;
};