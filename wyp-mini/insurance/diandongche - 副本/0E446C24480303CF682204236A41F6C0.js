Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = function(e, t, n) {
    function u() {
        var s = +new Date() - o;
        s < t && 0 <= s ? r = setTimeout(u, t - s) : (r = null, n || (i = e.apply(a, l), 
        r || (l = a = null)));
    }
    var r, l, a, o, i;
    return function() {
        a = this, l = arguments, o = +new Date();
        var s = n && !r;
        return r = r || setTimeout(u, t), s && (i = e.apply(a, l), l = a = null), i;
    };
};