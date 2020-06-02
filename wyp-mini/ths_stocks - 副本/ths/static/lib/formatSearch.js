function e(e, t) {
    if (e) return e.replace(t, '<span style="color: #409EFF;">' + t + "</span>");
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

"function" == typeof Symbol && Symbol.iterator;

exports.default = function(t, o, n) {
    return t.forEach(function(t) {
        n.forEach(function(n) {
            var r = t[n];
            t[n + "_new"] = e(r, o);
        });
    }), t;
};