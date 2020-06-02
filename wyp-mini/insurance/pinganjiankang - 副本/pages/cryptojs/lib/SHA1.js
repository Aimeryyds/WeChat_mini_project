var r, t, e, o, s, n;

r = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, t = r.util, 
e = r.charenc, o = e.UTF8, s = e.Binary, (n = r.SHA1 = function(r, e) {
    var o = t.wordsToBytes(n._sha1(r));
    return e && e.asBytes ? o : e && e.asString ? s.bytesToString(o) : t.bytesToHex(o);
})._sha1 = function(r) {
    r.constructor == String && (r = o.stringToBytes(r));
    var e = t.bytesToWords(r), s = 8 * r.length, n = [], i = 1732584193, a = -271733879, y = -1732584194, u = 271733878, c = -1009589776;
    e[s >> 5] |= 128 << 24 - s % 32, e[15 + (s + 64 >>> 9 << 4)] = s;
    for (var d = 0; d < e.length; d += 16) {
        for (var f = i, g = a, v = y, T = u, h = c, l = 0; l < 80; l++) {
            if (l < 16) n[l] = e[d + l]; else {
                var w = n[l - 3] ^ n[l - 8] ^ n[l - 14] ^ n[l - 16];
                n[l] = w << 1 | w >>> 31;
            }
            var b = (i << 5 | i >>> 27) + c + (n[l] >>> 0) + (l < 20 ? 1518500249 + (a & y | ~a & u) : l < 40 ? 1859775393 + (a ^ y ^ u) : l < 60 ? (a & y | a & u | y & u) - 1894007588 : (a ^ y ^ u) - 899497514);
            c = u, u = y, y = a << 30 | a >>> 2, a = i, i = b;
        }
        i += f, a += g, y += v, u += T, c += h;
    }
    return [ i, a, y, u, c ];
}, n._blocksize = 16, n._digestsize = 20;