function e(e, r, t) {
    var u = e[r];
    e[r] = e[t], e[t] = u;
}

function r(r, t, u, n, o) {
    for (var f = r[u - 1][n], i = t - 1, a = t; a < u - 1; a++) o ? Number(r[a][n]) <= Number(f) && e(r, ++i, a) : Number(r[a][n]) >= Number(f) && e(r, ++i, a);
    return e(r, i + 1, u - 1), i + 1;
}

function t(e) {
    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n = arguments[2], o = arguments[3], f = arguments[4];
    if (n = n || e.length, u < n - 1) {
        var i = r(e, u, n, o, f);
        t(e, u, i, o, f), t(e, i + 1, n, o, f);
    }
    return e;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = t;