Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.promisify = function(e) {
    return function(r) {
        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) t[o - 1] = arguments[o];
        return new Promise(function(n, o) {
            e.apply(void 0, [ Object.assign({}, r, {
                success: n,
                fail: o
            }) ].concat(t));
        });
    };
};