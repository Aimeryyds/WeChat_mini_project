var r, t, n, e, i, o;

r = "undefined" == typeof window ? require("./Crypto").Crypto : window.Crypto, t = r.util, 
n = r.charenc, e = n.UTF8, i = n.Binary, (o = r.MD5 = function(r, n) {
    var e = t.wordsToBytes(o._md5(r));
    return n && n.asBytes ? e : n && n.asString ? i.bytesToString(e) : t.bytesToHex(e);
})._md5 = function(r) {
    r.constructor == String && (r = e.stringToBytes(r));
    for (var n = t.bytesToWords(r), i = 8 * r.length, s = 1732584193, u = -271733879, a = -1732584194, f = 271733878, c = 0; c < n.length; c++) n[c] = 16711935 & (n[c] << 8 | n[c] >>> 24) | 4278255360 & (n[c] << 24 | n[c] >>> 8);
    n[i >>> 5] |= 128 << i % 32, n[14 + (i + 64 >>> 9 << 4)] = i;
    var g = o._ff, _ = o._gg, y = o._hh, d = o._ii;
    for (c = 0; c < n.length; c += 16) {
        var v = s, h = u, T = a, l = f;
        s = g(s, u, a, f, n[c + 0], 7, -680876936), f = g(f, s, u, a, n[c + 1], 12, -389564586), 
        a = g(a, f, s, u, n[c + 2], 17, 606105819), u = g(u, a, f, s, n[c + 3], 22, -1044525330), 
        s = g(s, u, a, f, n[c + 4], 7, -176418897), f = g(f, s, u, a, n[c + 5], 12, 1200080426), 
        a = g(a, f, s, u, n[c + 6], 17, -1473231341), u = g(u, a, f, s, n[c + 7], 22, -45705983), 
        s = g(s, u, a, f, n[c + 8], 7, 1770035416), f = g(f, s, u, a, n[c + 9], 12, -1958414417), 
        a = g(a, f, s, u, n[c + 10], 17, -42063), u = g(u, a, f, s, n[c + 11], 22, -1990404162), 
        s = g(s, u, a, f, n[c + 12], 7, 1804603682), f = g(f, s, u, a, n[c + 13], 12, -40341101), 
        a = g(a, f, s, u, n[c + 14], 17, -1502002290), s = _(s, u = g(u, a, f, s, n[c + 15], 22, 1236535329), a, f, n[c + 1], 5, -165796510), 
        f = _(f, s, u, a, n[c + 6], 9, -1069501632), a = _(a, f, s, u, n[c + 11], 14, 643717713), 
        u = _(u, a, f, s, n[c + 0], 20, -373897302), s = _(s, u, a, f, n[c + 5], 5, -701558691), 
        f = _(f, s, u, a, n[c + 10], 9, 38016083), a = _(a, f, s, u, n[c + 15], 14, -660478335), 
        u = _(u, a, f, s, n[c + 4], 20, -405537848), s = _(s, u, a, f, n[c + 9], 5, 568446438), 
        f = _(f, s, u, a, n[c + 14], 9, -1019803690), a = _(a, f, s, u, n[c + 3], 14, -187363961), 
        u = _(u, a, f, s, n[c + 8], 20, 1163531501), s = _(s, u, a, f, n[c + 13], 5, -1444681467), 
        f = _(f, s, u, a, n[c + 2], 9, -51403784), a = _(a, f, s, u, n[c + 7], 14, 1735328473), 
        s = y(s, u = _(u, a, f, s, n[c + 12], 20, -1926607734), a, f, n[c + 5], 4, -378558), 
        f = y(f, s, u, a, n[c + 8], 11, -2022574463), a = y(a, f, s, u, n[c + 11], 16, 1839030562), 
        u = y(u, a, f, s, n[c + 14], 23, -35309556), s = y(s, u, a, f, n[c + 1], 4, -1530992060), 
        f = y(f, s, u, a, n[c + 4], 11, 1272893353), a = y(a, f, s, u, n[c + 7], 16, -155497632), 
        u = y(u, a, f, s, n[c + 10], 23, -1094730640), s = y(s, u, a, f, n[c + 13], 4, 681279174), 
        f = y(f, s, u, a, n[c + 0], 11, -358537222), a = y(a, f, s, u, n[c + 3], 16, -722521979), 
        u = y(u, a, f, s, n[c + 6], 23, 76029189), s = y(s, u, a, f, n[c + 9], 4, -640364487), 
        f = y(f, s, u, a, n[c + 12], 11, -421815835), a = y(a, f, s, u, n[c + 15], 16, 530742520), 
        s = d(s, u = y(u, a, f, s, n[c + 2], 23, -995338651), a, f, n[c + 0], 6, -198630844), 
        f = d(f, s, u, a, n[c + 7], 10, 1126891415), a = d(a, f, s, u, n[c + 14], 15, -1416354905), 
        u = d(u, a, f, s, n[c + 5], 21, -57434055), s = d(s, u, a, f, n[c + 12], 6, 1700485571), 
        f = d(f, s, u, a, n[c + 3], 10, -1894986606), a = d(a, f, s, u, n[c + 10], 15, -1051523), 
        u = d(u, a, f, s, n[c + 1], 21, -2054922799), s = d(s, u, a, f, n[c + 8], 6, 1873313359), 
        f = d(f, s, u, a, n[c + 15], 10, -30611744), a = d(a, f, s, u, n[c + 6], 15, -1560198380), 
        u = d(u, a, f, s, n[c + 13], 21, 1309151649), s = d(s, u, a, f, n[c + 4], 6, -145523070), 
        f = d(f, s, u, a, n[c + 11], 10, -1120210379), a = d(a, f, s, u, n[c + 2], 15, 718787259), 
        u = d(u, a, f, s, n[c + 9], 21, -343485551), s = s + v >>> 0, u = u + h >>> 0, a = a + T >>> 0, 
        f = f + l >>> 0;
    }
    return t.endian([ s, u, a, f ]);
}, o._ff = function(r, t, n, e, i, o, s) {
    var u = r + (t & n | ~t & e) + (i >>> 0) + s;
    return (u << o | u >>> 32 - o) + t;
}, o._gg = function(r, t, n, e, i, o, s) {
    var u = r + (t & e | n & ~e) + (i >>> 0) + s;
    return (u << o | u >>> 32 - o) + t;
}, o._hh = function(r, t, n, e, i, o, s) {
    var u = r + (t ^ n ^ e) + (i >>> 0) + s;
    return (u << o | u >>> 32 - o) + t;
}, o._ii = function(r, t, n, e, i, o, s) {
    var u = r + (n ^ (t | ~e)) + (i >>> 0) + s;
    return (u << o | u >>> 32 - o) + t;
}, o._blocksize = 16, o._digestsize = 16;