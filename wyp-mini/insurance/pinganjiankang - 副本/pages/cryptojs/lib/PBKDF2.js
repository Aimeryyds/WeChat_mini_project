var t, r, n, o, e;

t = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, r = t.util, 
n = t.charenc, o = n.UTF8, e = n.Binary, t.PBKDF2 = function(n, s, i, a) {
    n.constructor == String && (n = o.stringToBytes(n)), s.constructor == String && (s = o.stringToBytes(s));
    var c = a && a.hasher || t.SHA1, y = a && a.iterations || 1;
    function u(r, n) {
        return t.HMAC(c, n, r, {
            asBytes: !0
        });
    }
    for (var g = [], f = 1; g.length < i; ) {
        for (var B = u(n, s.concat(r.wordsToBytes([ f ]))), h = B, T = 1; T < y; T++) {
            h = u(n, h);
            for (var d = 0; d < B.length; d++) B[d] ^= h[d];
        }
        g = g.concat(B), f++;
    }
    return g.length = i, a && a.asBytes ? g : a && a.asString ? e.bytesToString(g) : r.bytesToHex(g);
};