var t, e, n, i, o;

t = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, e = t.util, 
n = t.charenc, i = n.UTF8, o = n.Binary, t.nextTick || ("undefined" != typeof process && void 0 !== process.nextTick ? t.nextTick = process.nextTick : "undefined" != typeof setTimeout && (t.nextTick = function(t) {
    setTimeout(t, 0);
})), t.PBKDF2Async = function(n, r, s, c, u) {
    n.constructor == String && (n = i.stringToBytes(n)), r.constructor == String && (r = i.stringToBytes(r));
    var a = u && u.hasher || t.SHA1, f = u && u.iterations || 1, y = u && u.onProgressChange, T = Math.ceil(s / a._digestsize) * f;
    function g(t) {
        if (y) {
            var e = v.length / a._digestsize * f + t;
            setTimeout(function() {
                y(Math.round(e / T * 100));
            }, 0);
        }
    }
    function d(e, n) {
        return t.HMAC(a, n, e, {
            asBytes: !0
        });
    }
    var h, p, l = t.nextTick, v = [], x = 1;
    l(h = function() {
        if (v.length < s) {
            var t = d(n, r.concat(e.wordsToBytes([ x ])));
            g(1);
            var i = t, a = 1;
            l(p = function() {
                if (a < f) {
                    i = d(n, i);
                    for (var e = 0; e < t.length; e++) t[e] ^= i[e];
                    g(++a), l(p);
                } else v = v.concat(t), x++, l(h);
            });
        } else v.length = s, c(u && u.asBytes ? v : u && u.asString ? o.bytesToString(v) : e.bytesToHex(v));
    });
};