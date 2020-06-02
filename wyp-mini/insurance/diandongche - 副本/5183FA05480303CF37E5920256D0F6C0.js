Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = void 0;

exports.default = function(e, r, t) {
    (t = t || {}).childrenKeyName = t.childrenKeyName || "children";
    var i = e || [], n = [], l = 0;
    do {
        var d = i.filter(function(e) {
            return r(e, l);
        })[0];
        if (!d) break;
        n.push(d), i = d[t.childrenKeyName] || [], l += 1;
    } while (0 < i.length);
    return n;
};